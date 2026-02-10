import { Map } from "../core/map";
import { IControl } from "./control";
import { GeocodingService, GeocodingResult } from "../service/geocoding_service";

import {
  ControlPosition as maplibreControlPosition,
  FitBoundsOptions as maplibreFitBoundsOptions,
  Marker as maplibreMarker,
  MarkerOptions as maplibreMarkerOptions,
} from "maplibre-gl";

/**
 * Options for configuring the {@link GeocoderControl}.
 */
export type GeocoderControlOptions = {
  /** Placeholder text for the search input. */
  placeholder?: string;
  /** Start collapsed (icon-only). Expands on click. */
  collapsed?: boolean;
  /** Debounce delay in milliseconds for search input. @defaultValue `300` */
  debounce?: number;
  /** Minimum query length before searching. @defaultValue `2` */
  minLength?: number;
  /** Maximum number of results to show. @defaultValue `5` */
  limit?: number;
  /** Restrict results to countries (ISO 3166-1 alpha-2, comma-separated). */
  countryCodes?: string;
  /** Fly to the selected result. Pass `false` to disable, or {@link FitBoundsOptions}. @defaultValue `true` */
  flyTo?: boolean | maplibreFitBoundsOptions;
  /** Show a marker at the selected location. @defaultValue `true` */
  showMarker?: boolean;
  /** Custom marker options for the result marker. */
  marker?: maplibreMarkerOptions;
  /** Enable reverse geocoding on map click. @defaultValue `false` */
  reverseGeocode?: boolean;
  /** Provide a custom GeocodingService instance (dependency injection). */
  geocodingService?: GeocodingService;
};

const defaultOptions: GeocoderControlOptions = {
  collapsed: false,
  debounce: 300,
  minLength: 2,
  limit: 5,
  flyTo: true,
  showMarker: true,
  reverseGeocode: false,
};

/**
 * A geocoder search control with autocomplete, result markers, and keyboard navigation.
 *
 * @example
 * ```ts
 * const geocoder = new GeocoderControl({ placeholder: "Search…" });
 * map.addControl(geocoder, "top-left");
 * ```
 */
export class GeocoderControl implements IControl {
  options: GeocoderControlOptions;

  _container: HTMLElement;
  _input: HTMLInputElement;
  _clearBtn: HTMLButtonElement;
  _resultsList: HTMLElement;
  _map?: Map;
  _marker?: maplibreMarker;
  _geocodingService: GeocodingService;
  _abortController?: AbortController;
  _debounceTimer?: ReturnType<typeof setTimeout>;
  _results: GeocodingResult[];
  _selectedIndex: number;
  _selectedResult?: GeocodingResult;
  _onMapClick?: (ev: any) => void;
  _onStyleChange?: () => void;

  constructor(options?: GeocoderControlOptions) {
    this.options = Object.assign({}, defaultOptions, options);
    this._geocodingService = this.options.geocodingService ?? new GeocodingService();
    this._results = [];
    this._selectedIndex = -1;

    // Container
    this._container = document.createElement("div");
    this._container.classList.add("maplibregl-ctrl", "maplibregl-ctrl-group", "maptoolkit-ctrl", "maptoolkit-ctrl-geocoder");
    if (this.options.collapsed) {
      this._container.classList.add("maptoolkit-ctrl-geocoder-collapsed");
    }

    // Search icon / expand button
    const searchBtn = document.createElement("button");
    searchBtn.type = "button";
    searchBtn.classList.add("maptoolkit-ctrl-geocoder-search");
    searchBtn.addEventListener("click", () => {
      if (this._container.classList.contains("maptoolkit-ctrl-geocoder-collapsed")) {
        this._container.classList.remove("maptoolkit-ctrl-geocoder-collapsed");
        this._input.focus();
      }
    });

    // Input
    this._input = document.createElement("input");
    this._input.type = "text";
    this._input.autocomplete = "off";
    this._input.classList.add("maptoolkit-ctrl-geocoder-input");
    this._input.addEventListener("input", () => this._onInput());
    this._input.addEventListener("keydown", (ev) => this._onKeydown(ev));
    this._input.addEventListener("focus", () => {
      if (this._results.length) this._showResults();
    });
    this._input.addEventListener("blur", () => {
      // Delay to allow click on results
      setTimeout(() => this._hideResults(), 200);
    });

    // Clear button
    this._clearBtn = document.createElement("button");
    this._clearBtn.type = "button";
    this._clearBtn.classList.add("maptoolkit-ctrl-geocoder-clear");
    this._clearBtn.addEventListener("click", () => this.clear());

    // Results list
    this._resultsList = document.createElement("ul");
    this._resultsList.classList.add("maptoolkit-ctrl-geocoder-results");

    // Assemble
    this._container.appendChild(searchBtn);
    this._container.appendChild(this._input);
    this._container.appendChild(this._clearBtn);
    this._container.appendChild(this._resultsList);
  }

  getDefaultPosition(): maplibreControlPosition {
    return "top-left";
  }

  onAdd(map: Map): HTMLElement {
    this._map = map;

    try {
      if (!this.options.placeholder) {
        this._input.placeholder = map._getUIString("GeocoderControl.Placeholder");
      } else {
        this._input.placeholder = this.options.placeholder;
      }
      this._clearBtn.title = map._getUIString("GeocoderControl.Clear");
    } catch (_) {
      this._input.placeholder = this.options.placeholder ?? "Search…";
    }

    if (this.options.reverseGeocode) {
      this._onMapClick = (ev: any) => this._reverseGeocode(ev.lngLat.lat, ev.lngLat.lng);
      map.on("click", this._onMapClick);
    }

    return this._container;
  }

  onRemove(): void {
    if (this._map && this._onMapClick) {
      this._map.off("click", this._onMapClick);
    }
    this._removeMarker();
    if (this._abortController) this._abortController.abort();
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = undefined;
  }

  /**
   * Programmatically set the search query and trigger a search.
   */
  setQuery(query: string): void {
    this._input.value = query;
    this._search(query);
  }

  /**
   * Clears the search input, results, and marker.
   */
  clear(): void {
    this._input.value = "";
    this._results = [];
    this._selectedIndex = -1;
    this._selectedResult = undefined;
    this._hideResults();
    this._removeMarker();
    this._container.classList.remove("maptoolkit-ctrl-geocoder-has-value");
    if (this.options.collapsed) {
      this._container.classList.add("maptoolkit-ctrl-geocoder-collapsed");
    }
  }

  /**
   * Returns the currently selected geocoding result, if any.
   */
  getSelectedResult(): GeocodingResult | undefined {
    return this._selectedResult;
  }

  /** @private */
  _onInput(): void {
    const query = this._input.value.trim();
    if (this._debounceTimer) clearTimeout(this._debounceTimer);

    if (query.length < (this.options.minLength ?? 2)) {
      this._results = [];
      this._hideResults();
      this._container.classList.toggle("maptoolkit-ctrl-geocoder-has-value", query.length > 0);
      return;
    }

    this._container.classList.add("maptoolkit-ctrl-geocoder-has-value");
    this._debounceTimer = setTimeout(() => this._search(query), this.options.debounce ?? 300);
  }

  /** @private */
  _onKeydown(ev: KeyboardEvent): void {
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      this._selectedIndex = Math.min(this._selectedIndex + 1, this._results.length - 1);
      this._highlightResult();
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
      this._highlightResult();
    } else if (ev.key === "Enter") {
      ev.preventDefault();
      if (this._selectedIndex >= 0 && this._results[this._selectedIndex]) {
        this._selectResult(this._results[this._selectedIndex]);
      }
    } else if (ev.key === "Escape") {
      this._hideResults();
      this._input.blur();
    }
  }

  /** @private */
  async _search(query: string): Promise<void> {
    if (this._abortController) this._abortController.abort();
    this._abortController = new AbortController();

    try {
      this._results = await this._geocodingService.forward({
        query,
        limit: this.options.limit,
        countryCodes: this.options.countryCodes,
        signal: this._abortController.signal,
      });
      this._selectedIndex = -1;
      this._renderResults();
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error(err);
      }
    }
  }

  /** @private */
  async _reverseGeocode(lat: number, lon: number): Promise<void> {
    if (this._abortController) this._abortController.abort();
    this._abortController = new AbortController();

    try {
      const results = await this._geocodingService.reverse({
        lat,
        lon,
        signal: this._abortController.signal,
      });
      if (results.length) {
        this._selectResult(results[0]);
        this._input.value = results[0].displayName;
        this._container.classList.add("maptoolkit-ctrl-geocoder-has-value");
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error(err);
      }
    }
  }

  /** @private */
  _renderResults(): void {
    this._resultsList.innerHTML = "";

    if (!this._results.length) {
      if (this._input.value.trim().length >= (this.options.minLength ?? 2)) {
        const li = document.createElement("li");
        li.classList.add("maptoolkit-ctrl-geocoder-result", "maptoolkit-ctrl-geocoder-result-empty");
        try {
          li.textContent = this._map?._getUIString("GeocoderControl.NoResults") ?? "No results found";
        } catch (_) {
          li.textContent = "No results found";
        }
        this._resultsList.appendChild(li);
      }
      this._showResults();
      return;
    }

    for (let i = 0; i < this._results.length; i++) {
      const result = this._results[i];
      const li = document.createElement("li");
      li.classList.add("maptoolkit-ctrl-geocoder-result");
      li.textContent = result.displayName;
      li.addEventListener("mousedown", (ev) => {
        ev.preventDefault();
        this._selectResult(result);
      });
      this._resultsList.appendChild(li);
    }

    this._showResults();
  }

  /** @private */
  _highlightResult(): void {
    const items = this._resultsList.querySelectorAll(".maptoolkit-ctrl-geocoder-result:not(.maptoolkit-ctrl-geocoder-result-empty)");
    items.forEach((item, i) => {
      item.classList.toggle("maptoolkit-ctrl-geocoder-result-active", i === this._selectedIndex);
    });
  }

  /** @private */
  _selectResult(result: GeocodingResult): void {
    this._selectedResult = result;
    this._input.value = result.displayName;
    this._container.classList.add("maptoolkit-ctrl-geocoder-has-value");
    this._hideResults();

    if (this._map) {
      if (this.options.flyTo !== false) {
        if (result.boundingBox) {
          const [south, north, west, east] = result.boundingBox;
          const fitOptions = typeof this.options.flyTo === "object" ? this.options.flyTo : { padding: 50 };
          this._map.fitBounds([[west, south], [east, north]], fitOptions);
        } else {
          this._map.flyTo({ center: [result.lon, result.lat], zoom: 16 });
        }
      }

      if (this.options.showMarker !== false) {
        this._removeMarker();
        this._marker = new maplibreMarker(this.options.marker);
        this._marker.setLngLat([result.lon, result.lat]).addTo(this._map);
      }

      this._map.fire("geocoder.result", { result });
    }
  }

  /** @private */
  _showResults(): void {
    this._resultsList.classList.add("maptoolkit-ctrl-geocoder-results-open");
  }

  /** @private */
  _hideResults(): void {
    this._resultsList.classList.remove("maptoolkit-ctrl-geocoder-results-open");
  }

  /** @private */
  _removeMarker(): void {
    if (this._marker) {
      this._marker.remove();
      this._marker = undefined;
    }
  }
}
