import { Map } from "../core/map";
import { IControl } from "./control";
import { GeocodingService, GeocodingResult } from "../service/geocoding_service";
import { RoutingService, RoutingResult, RouteType } from "../service/routing_service";

import {
  ControlPosition as maplibreControlPosition,
  FitBoundsOptions as maplibreFitBoundsOptions,
  Marker as maplibreMarker,
  LngLatLike as maplibreLngLatLike,
  LngLatBounds as maplibreLngLatBounds,
  LinePaint as maplibreLinePaint,
} from "maplibre-gl";

type Waypoint = {
  lngLat?: [number, number];
  name?: string;
  marker?: maplibreMarker;
  inputEl?: HTMLInputElement;
  resultsEl?: HTMLElement;
  results?: GeocodingResult[];
  selectedIndex?: number;
  debounceTimer?: ReturnType<typeof setTimeout>;
  abortController?: AbortController;
};

/**
 * Options for configuring the {@link DirectionsControl}.
 */
export type DirectionsControlOptions = {
  /** Available route types. @defaultValue `["car", "bike", "foot"]` */
  routeTypes?: RouteType[];
  /** Initial route type. @defaultValue `"car"` */
  routeType?: RouteType;
  /** Fit map bounds to route. @defaultValue `true` */
  fitBounds?: boolean | maplibreFitBoundsOptions;
  /** Show turn-by-turn instructions panel. @defaultValue `true` */
  showInstructions?: boolean;
  /** Allow adding intermediate waypoints. @defaultValue `true` */
  allowWaypoints?: boolean;
  /** Enable map-click to set waypoints and draggable markers. @defaultValue `true` */
  interactive?: boolean;
  /** Restrict geocoding to countries (ISO 3166-1 alpha-2, comma-separated). */
  countryCodes?: string;
  /** Custom paint properties for the route line layer. */
  routePaint?: maplibreLinePaint;
  /** Custom GeocodingService instance. */
  geocodingService?: GeocodingService;
  /** Custom RoutingService instance. */
  routingService?: RoutingService;
};

const defaultOptions: DirectionsControlOptions = {
  routeTypes: ["car", "bike", "foot"],
  routeType: "car",
  fitBounds: true,
  showInstructions: true,
  allowWaypoints: true,
  interactive: true,
};

const SOURCE_ID = "maptoolkit-ctrl-directions-route";
const LAYER_OUTLINE_ID = "maptoolkit-ctrl-directions-route-outline";
const LAYER_LINE_ID = "maptoolkit-ctrl-directions-route-line";

/**
 * A directions control with route type selection, waypoint inputs with
 * geocoding autocomplete, route display, and turn-by-turn instructions.
 *
 * @example
 * ```ts
 * const directions = new DirectionsControl();
 * map.addControl(directions, "top-left");
 * ```
 */
export class DirectionsControl implements IControl {
  options: DirectionsControlOptions;

  _container: HTMLElement;
  _panel: HTMLElement;
  _summaryEl: HTMLElement;
  _instructionsEl: HTMLElement;
  _waypointsEl: HTMLElement;
  _map?: Map;
  _geocodingService: GeocodingService;
  _routingService: RoutingService;
  _waypoints: Waypoint[];
  _routeResult?: RoutingResult;
  _routeType: RouteType;
  _routeAbortController?: AbortController;
  _onMapClick?: (ev: any) => void;
  _onStyleChange?: () => void;
  _focusedWaypointIndex: number;

  constructor(options?: DirectionsControlOptions) {
    this.options = Object.assign({}, defaultOptions, options);
    this._geocodingService = this.options.geocodingService ?? new GeocodingService();
    this._routingService = this.options.routingService ?? new RoutingService();
    this._routeType = this.options.routeType ?? "car";
    this._focusedWaypointIndex = -1;

    // Two initial waypoints (start + end)
    this._waypoints = [{}, {}];

    // Container
    this._container = document.createElement("div");
    this._container.classList.add("maplibregl-ctrl", "maptoolkit-ctrl", "maptoolkit-ctrl-directions");

    // Panel
    this._panel = document.createElement("div");
    this._panel.classList.add("maptoolkit-ctrl-directions-panel");
    this._container.appendChild(this._panel);

    // Route type selector will be built in onAdd (needs locale)
    // Waypoints container
    this._waypointsEl = document.createElement("div");
    this._waypointsEl.classList.add("maptoolkit-ctrl-directions-waypoints");

    // Summary
    this._summaryEl = document.createElement("div");
    this._summaryEl.classList.add("maptoolkit-ctrl-directions-summary");

    // Instructions
    this._instructionsEl = document.createElement("div");
    this._instructionsEl.classList.add("maptoolkit-ctrl-directions-instructions");
  }

  getDefaultPosition(): maplibreControlPosition {
    return "top-left";
  }

  onAdd(map: Map): HTMLElement {
    this._map = map;

    this._panel.innerHTML = "";

    // Route type selector
    const routeTypes = this.options.routeTypes ?? ["car", "bike", "foot"];
    if (routeTypes.length > 1) {
      const selector = document.createElement("div");
      selector.classList.add("maptoolkit-ctrl-directions-route-types");

      for (const type of routeTypes) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.classList.add("maptoolkit-ctrl-directions-route-type", `maptoolkit-ctrl-directions-route-type-${type}`);
        if (type === this._routeType) btn.classList.add("maptoolkit-ctrl-directions-route-type-active");
        try {
          btn.title = map._getUIString(`DirectionsControl.RouteType.${type}`);
        } catch (_) {}
        btn.addEventListener("click", () => this.setRouteType(type));
        selector.appendChild(btn);
      }
      this._panel.appendChild(selector);
    }

    // Waypoints
    this._waypointsEl.innerHTML = "";
    this._panel.appendChild(this._waypointsEl);
    for (let i = 0; i < this._waypoints.length; i++) {
      this._buildWaypointRow(i);
    }

    // Action buttons row
    const actions = document.createElement("div");
    actions.classList.add("maptoolkit-ctrl-directions-actions");

    if (this.options.allowWaypoints !== false) {
      const addBtn = document.createElement("button");
      addBtn.type = "button";
      addBtn.classList.add("maptoolkit-ctrl-directions-add-waypoint");
      try {
        addBtn.textContent = map._getUIString("DirectionsControl.AddWaypoint");
      } catch (_) {
        addBtn.textContent = "+ Add waypoint";
      }
      addBtn.addEventListener("click", () => this._addWaypoint());
      actions.appendChild(addBtn);
    }

    const reverseBtn = document.createElement("button");
    reverseBtn.type = "button";
    reverseBtn.classList.add("maptoolkit-ctrl-directions-reverse");
    try {
      reverseBtn.title = map._getUIString("DirectionsControl.Reverse");
    } catch (_) {}
    reverseBtn.addEventListener("click", () => this._reverseWaypoints());
    actions.appendChild(reverseBtn);

    this._panel.appendChild(actions);

    // Summary + Instructions
    this._panel.appendChild(this._summaryEl);
    if (this.options.showInstructions !== false) {
      this._panel.appendChild(this._instructionsEl);
    }

    // Map click handler
    if (this.options.interactive !== false) {
      this._onMapClick = (ev: any) => {
        const idx = this._focusedWaypointIndex >= 0
          ? this._focusedWaypointIndex
          : this._findFirstEmptyWaypoint();
        if (idx >= 0) {
          this._setWaypointFromLngLat(idx, [ev.lngLat.lng, ev.lngLat.lat]);
        }
      };
      map.on("click", this._onMapClick);
    }

    // Re-render route on style change
    this._onStyleChange = () => {
      map.once("idle", () => {
        if (this._routeResult) this._renderRoute();
      });
    };
    map.on("style.set", this._onStyleChange);

    return this._container;
  }

  onRemove(): void {
    if (this._map) {
      if (this._onMapClick) this._map.off("click", this._onMapClick);
      if (this._onStyleChange) this._map.off("style.set", this._onStyleChange);
      this._removeRouteLayer();
    }
    for (const wp of this._waypoints) {
      wp.marker?.remove();
      if (wp.abortController) wp.abortController.abort();
      if (wp.debounceTimer) clearTimeout(wp.debounceTimer);
    }
    if (this._routeAbortController) this._routeAbortController.abort();
    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = undefined;
  }

  /**
   * Sets a waypoint by index.
   */
  setWaypoint(index: number, lngLat: [number, number], name?: string): void {
    while (this._waypoints.length <= index) {
      this._waypoints.push({});
      if (this._map) this._buildWaypointRow(this._waypoints.length - 1);
    }
    const wp = this._waypoints[index];
    wp.lngLat = lngLat;
    wp.name = name ?? `${lngLat[1].toFixed(5)}, ${lngLat[0].toFixed(5)}`;
    if (wp.inputEl) wp.inputEl.value = wp.name;
    this._updateMarker(index);
    this._calculateRoute();
  }

  /**
   * Sets the route type and recalculates if waypoints are set.
   */
  setRouteType(type: RouteType): void {
    this._routeType = type;
    const btns = this._container.querySelectorAll(".maptoolkit-ctrl-directions-route-type");
    btns.forEach((btn) => {
      btn.classList.toggle("maptoolkit-ctrl-directions-route-type-active", btn.classList.contains(`maptoolkit-ctrl-directions-route-type-${type}`));
    });
    this._calculateRoute();
  }

  /**
   * Clears all waypoints and the route.
   */
  clear(): void {
    for (const wp of this._waypoints) {
      wp.lngLat = undefined;
      wp.name = undefined;
      if (wp.inputEl) wp.inputEl.value = "";
      wp.marker?.remove();
      wp.marker = undefined;
    }
    // Reset to two waypoints
    while (this._waypoints.length > 2) this._waypoints.pop();
    this._routeResult = undefined;
    this._removeRouteLayer();
    this._summaryEl.innerHTML = "";
    this._instructionsEl.innerHTML = "";
    if (this._map) {
      this._waypointsEl.innerHTML = "";
      for (let i = 0; i < this._waypoints.length; i++) {
        this._buildWaypointRow(i);
      }
    }
  }

  /**
   * Returns the current routing result, if available.
   */
  getRoute(): RoutingResult | undefined {
    return this._routeResult;
  }

  /** @private */
  _buildWaypointRow(index: number): void {
    const wp = this._waypoints[index];
    const row = document.createElement("div");
    row.classList.add("maptoolkit-ctrl-directions-waypoint");

    const marker = document.createElement("span");
    marker.classList.add("maptoolkit-ctrl-directions-waypoint-marker");
    if (index === 0) marker.classList.add("maptoolkit-ctrl-directions-waypoint-marker-start");
    else if (index === this._waypoints.length - 1) marker.classList.add("maptoolkit-ctrl-directions-waypoint-marker-end");
    else marker.classList.add("maptoolkit-ctrl-directions-waypoint-marker-via");

    const input = document.createElement("input");
    input.type = "text";
    input.autocomplete = "off";
    input.classList.add("maptoolkit-ctrl-directions-waypoint-input");
    try {
      if (index === 0) input.placeholder = this._map?._getUIString("DirectionsControl.Start") ?? "Start";
      else if (index === this._waypoints.length - 1) input.placeholder = this._map?._getUIString("DirectionsControl.End") ?? "End";
      else input.placeholder = `Waypoint ${index}`;
    } catch (_) {
      input.placeholder = index === 0 ? "Start" : index === this._waypoints.length - 1 ? "End" : `Waypoint ${index}`;
    }
    if (wp.name) input.value = wp.name;

    input.addEventListener("input", () => this._onWaypointInput(index));
    input.addEventListener("keydown", (ev) => this._onWaypointKeydown(index, ev));
    input.addEventListener("focus", () => {
      this._focusedWaypointIndex = index;
      if (wp.results?.length) this._showWaypointResults(index);
    });
    input.addEventListener("blur", () => {
      this._focusedWaypointIndex = -1;
      setTimeout(() => this._hideWaypointResults(index), 200);
    });

    wp.inputEl = input;

    const results = document.createElement("ul");
    results.classList.add("maptoolkit-ctrl-directions-waypoint-results");
    wp.resultsEl = results;

    row.appendChild(marker);
    row.appendChild(input);

    // Remove button for intermediate waypoints
    if (index > 0 && index < this._waypoints.length - 1 && this.options.allowWaypoints !== false) {
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.classList.add("maptoolkit-ctrl-directions-remove-waypoint");
      try {
        removeBtn.title = this._map?._getUIString("DirectionsControl.RemoveWaypoint") ?? "Remove";
      } catch (_) {}
      removeBtn.addEventListener("click", () => this._removeWaypoint(index));
      row.appendChild(removeBtn);
    }

    row.appendChild(results);
    this._waypointsEl.appendChild(row);
  }

  /** @private */
  _onWaypointInput(index: number): void {
    const wp = this._waypoints[index];
    const query = wp.inputEl?.value.trim() ?? "";
    if (wp.debounceTimer) clearTimeout(wp.debounceTimer);

    if (query.length < 2) {
      wp.results = [];
      this._hideWaypointResults(index);
      return;
    }

    wp.debounceTimer = setTimeout(() => this._searchWaypoint(index, query), 300);
  }

  /** @private */
  _onWaypointKeydown(index: number, ev: KeyboardEvent): void {
    const wp = this._waypoints[index];
    const results = wp.results ?? [];

    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      wp.selectedIndex = Math.min((wp.selectedIndex ?? -1) + 1, results.length - 1);
      this._highlightWaypointResult(index);
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      wp.selectedIndex = Math.max((wp.selectedIndex ?? 0) - 1, 0);
      this._highlightWaypointResult(index);
    } else if (ev.key === "Enter") {
      ev.preventDefault();
      const si = wp.selectedIndex ?? -1;
      if (si >= 0 && results[si]) {
        this._selectWaypointResult(index, results[si]);
      }
    } else if (ev.key === "Escape") {
      this._hideWaypointResults(index);
      wp.inputEl?.blur();
    }
  }

  /** @private */
  async _searchWaypoint(index: number, query: string): Promise<void> {
    const wp = this._waypoints[index];
    if (wp.abortController) wp.abortController.abort();
    wp.abortController = new AbortController();

    try {
      wp.results = await this._geocodingService.forward({
        query,
        limit: 5,
        countryCodes: this.options.countryCodes,
        signal: wp.abortController.signal,
      });
      wp.selectedIndex = -1;
      this._renderWaypointResults(index);
    } catch (err: any) {
      if (err.name !== "AbortError") console.error(err);
    }
  }

  /** @private */
  _renderWaypointResults(index: number): void {
    const wp = this._waypoints[index];
    if (!wp.resultsEl) return;
    wp.resultsEl.innerHTML = "";

    for (let i = 0; i < (wp.results?.length ?? 0); i++) {
      const result = wp.results![i];
      const li = document.createElement("li");
      li.classList.add("maptoolkit-ctrl-directions-waypoint-result");
      li.textContent = result.displayName;
      li.addEventListener("mousedown", (ev) => {
        ev.preventDefault();
        this._selectWaypointResult(index, result);
      });
      wp.resultsEl.appendChild(li);
    }

    this._showWaypointResults(index);
  }

  /** @private */
  _highlightWaypointResult(index: number): void {
    const wp = this._waypoints[index];
    if (!wp.resultsEl) return;
    const items = wp.resultsEl.querySelectorAll(".maptoolkit-ctrl-directions-waypoint-result");
    items.forEach((item, i) => {
      item.classList.toggle("maptoolkit-ctrl-directions-waypoint-result-active", i === (wp.selectedIndex ?? -1));
    });
  }

  /** @private */
  _selectWaypointResult(index: number, result: GeocodingResult): void {
    const wp = this._waypoints[index];
    wp.lngLat = [result.lon, result.lat];
    wp.name = result.displayName;
    if (wp.inputEl) wp.inputEl.value = result.displayName;
    this._hideWaypointResults(index);
    this._updateMarker(index);
    this._calculateRoute();
  }

  /** @private */
  _showWaypointResults(index: number): void {
    this._waypoints[index].resultsEl?.classList.add("maptoolkit-ctrl-directions-waypoint-results-open");
  }

  /** @private */
  _hideWaypointResults(index: number): void {
    this._waypoints[index].resultsEl?.classList.remove("maptoolkit-ctrl-directions-waypoint-results-open");
  }

  /** @private */
  _setWaypointFromLngLat(index: number, lngLat: [number, number]): void {
    const wp = this._waypoints[index];
    wp.lngLat = lngLat;
    wp.name = `${lngLat[1].toFixed(5)}, ${lngLat[0].toFixed(5)}`;
    if (wp.inputEl) wp.inputEl.value = wp.name;
    this._updateMarker(index);

    // Reverse-geocode for a nicer name
    const ac = new AbortController();
    wp.abortController = ac;
    this._geocodingService.reverse({ lat: lngLat[1], lon: lngLat[0], signal: ac.signal }).then((results) => {
      if (results.length && wp.lngLat === lngLat) {
        wp.name = results[0].displayName;
        if (wp.inputEl) wp.inputEl.value = wp.name;
      }
    }).catch(() => {});

    this._calculateRoute();
  }

  /** @private */
  _updateMarker(index: number): void {
    const wp = this._waypoints[index];
    wp.marker?.remove();
    if (!this._map || !wp.lngLat) return;

    const el = document.createElement("div");
    el.classList.add("maptoolkit-ctrl-directions-marker");
    if (index === 0) el.classList.add("maptoolkit-ctrl-directions-marker-start");
    else if (index === this._waypoints.length - 1) el.classList.add("maptoolkit-ctrl-directions-marker-end");
    else el.classList.add("maptoolkit-ctrl-directions-marker-via");

    const draggable = this.options.interactive !== false;
    wp.marker = new maplibreMarker({ element: el, draggable, anchor: "center" });
    wp.marker.setLngLat(wp.lngLat as maplibreLngLatLike).addTo(this._map);

    if (draggable) {
      wp.marker.on("dragend", () => {
        const pos = wp.marker!.getLngLat();
        this._setWaypointFromLngLat(index, [pos.lng, pos.lat]);
      });
    }
  }

  /** @private */
  _addWaypoint(): void {
    // Insert before the last waypoint
    const insertAt = this._waypoints.length - 1;
    this._waypoints.splice(insertAt, 0, {});
    // Rebuild UI
    this._rebuildWaypointRows();
  }

  /** @private */
  _removeWaypoint(index: number): void {
    if (this._waypoints.length <= 2) return;
    const wp = this._waypoints[index];
    wp.marker?.remove();
    if (wp.abortController) wp.abortController.abort();
    this._waypoints.splice(index, 1);
    this._rebuildWaypointRows();
    this._calculateRoute();
  }

  /** @private */
  _reverseWaypoints(): void {
    this._waypoints.reverse();
    this._rebuildWaypointRows();
    // Update markers
    for (let i = 0; i < this._waypoints.length; i++) {
      this._updateMarker(i);
    }
    this._calculateRoute();
  }

  /** @private */
  _rebuildWaypointRows(): void {
    this._waypointsEl.innerHTML = "";
    for (let i = 0; i < this._waypoints.length; i++) {
      this._buildWaypointRow(i);
    }
  }

  /** @private */
  _findFirstEmptyWaypoint(): number {
    for (let i = 0; i < this._waypoints.length; i++) {
      if (!this._waypoints[i].lngLat) return i;
    }
    return -1;
  }

  /** @private */
  async _calculateRoute(): Promise<void> {
    const points = this._waypoints
      .filter((wp) => wp.lngLat)
      .map((wp) => [wp.lngLat![1], wp.lngLat![0]] as [number, number]); // API expects [lat, lng]

    if (points.length < 2) return;

    if (this._routeAbortController) this._routeAbortController.abort();
    this._routeAbortController = new AbortController();

    try {
      this._routeResult = await this._routingService.route({
        points,
        routeType: this._routeType,
        language: this._map?._locale ? undefined : undefined,
        signal: this._routeAbortController.signal,
      });

      this._renderRoute();
      this._renderSummary();
      this._renderInstructions();

      if (this._map) {
        this._map.fire("directions.route", { route: this._routeResult });
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        this._routeResult = undefined;
        this._removeRouteLayer();
        this._summaryEl.innerHTML = "";
        try {
          this._summaryEl.textContent = this._map?._getUIString("DirectionsControl.NoRoute") ?? "No route found";
        } catch (_) {
          this._summaryEl.textContent = "No route found";
        }
        this._instructionsEl.innerHTML = "";
      }
    }
  }

  /** @private */
  _renderRoute(): void {
    if (!this._map || !this._routeResult) return;
    this._removeRouteLayer();

    this._map.addSource(SOURCE_ID, {
      type: "geojson",
      data: this._routeResult.toGeoJSON(),
    });

    this._map.addLayer({
      id: LAYER_OUTLINE_ID,
      type: "line",
      source: SOURCE_ID,
      layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": "#1a73e8", "line-width": 8, "line-opacity": 0.3 },
    });

    this._map.addLayer({
      id: LAYER_LINE_ID,
      type: "line",
      source: SOURCE_ID,
      layout: { "line-join": "round", "line-cap": "round" },
      paint: this.options.routePaint ?? { "line-color": "#1a73e8", "line-width": 4, "line-opacity": 0.9 },
    });

    if (this.options.fitBounds !== false && this._routeResult.bbox) {
      const [minLng, minLat, maxLng, maxLat] = this._routeResult.bbox;
      const fitOptions = typeof this.options.fitBounds === "object" ? this.options.fitBounds : { padding: 60 };
      this._map.fitBounds(new maplibreLngLatBounds([minLng, minLat], [maxLng, maxLat]), fitOptions);
    }
  }

  /** @private */
  _renderSummary(): void {
    this._summaryEl.innerHTML = "";
    if (!this._routeResult) return;

    const dist = this._routeResult.distance;
    const time = this._routeResult.time;

    const distStr = dist >= 1000 ? `${(dist / 1000).toFixed(1)} km` : `${Math.round(dist)} m`;
    const mins = Math.round(time / 60000);
    const hours = Math.floor(mins / 60);
    const remainMins = mins % 60;
    const timeStr = hours > 0 ? `${hours} h ${remainMins} min` : `${mins} min`;

    const distEl = document.createElement("span");
    distEl.classList.add("maptoolkit-ctrl-directions-summary-distance");
    distEl.textContent = distStr;

    const timeEl = document.createElement("span");
    timeEl.classList.add("maptoolkit-ctrl-directions-summary-time");
    timeEl.textContent = timeStr;

    this._summaryEl.appendChild(distEl);
    this._summaryEl.appendChild(timeEl);
  }

  /** @private */
  _renderInstructions(): void {
    this._instructionsEl.innerHTML = "";
    if (!this._routeResult || this.options.showInstructions === false) return;

    const list = document.createElement("ol");
    list.classList.add("maptoolkit-ctrl-directions-instructions-list");

    for (const instr of this._routeResult.instructions) {
      const li = document.createElement("li");
      li.classList.add("maptoolkit-ctrl-directions-instruction");

      const text = document.createElement("span");
      text.classList.add("maptoolkit-ctrl-directions-instruction-text");
      text.textContent = instr.text;

      const dist = document.createElement("span");
      dist.classList.add("maptoolkit-ctrl-directions-instruction-distance");
      dist.textContent = instr.distance >= 1000 ? `${(instr.distance / 1000).toFixed(1)} km` : `${Math.round(instr.distance)} m`;

      li.appendChild(text);
      li.appendChild(dist);

      if (instr.coordinate && this._map) {
        li.addEventListener("click", () => {
          this._map?.flyTo({ center: instr.coordinate as maplibreLngLatLike, zoom: 16 });
        });
        li.classList.add("maptoolkit-ctrl-directions-instruction-clickable");
      }

      list.appendChild(li);
    }

    this._instructionsEl.appendChild(list);
  }

  /** @private */
  _removeRouteLayer(): void {
    if (!this._map) return;
    if (this._map.getLayer(LAYER_LINE_ID)) this._map.removeLayer(LAYER_LINE_ID);
    if (this._map.getLayer(LAYER_OUTLINE_ID)) this._map.removeLayer(LAYER_OUTLINE_ID);
    if (this._map.getSource(SOURCE_ID)) this._map.removeSource(SOURCE_ID);
  }
}
