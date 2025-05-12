import { Map } from "../core/map";
import { config } from "../core/config";
import { IControl } from "./control";

import {
  FitBoundsOptions as maplibreFitBoundsOptions,
  LngLatLike as maplibreLngLatLike,
  ControlPosition as maplibreControlPosition,
  Marker as maplibreMarker,
  LngLatBounds as maplibreLngLatBounds,
  PointLike as maplibrePointLike,
} from "maplibre-gl";

export type IsochroneType = "foot" | "bike" | "car";

/**
 * Options for configuring the {@link IsochroneControl}.
 */
export type IsochroneControlOptions = {
  /**
   * Time used for isochrone calculation. Value in minutes.
   * @defaultValue `10` minutes
   */
  range?: number;
  /**
   * Routing type used for isochrone request. Default value is `foot`.
   * @defaultValue `10` minutes
   */
  type?: IsochroneType;
  /**
   * Whether the map bounds should fit the isochrone area. Alternatively accepts {@link FitBoundsOptions} object.
   * @defaultValue `true`
   */
  fitBounds?: boolean | maplibreFitBoundsOptions;
};

/**
 * Default options for the {@link IsochroneControl}.
 */
export const defaultIsochroneControlOptions: IsochroneControlOptions = {
  range: 10,
  type: "foot",
  fitBounds: true,
};

/**
 * Provides an draggable isochrone control.
 *
 * Used by the {@link NavigationControl} class.
 */
export class IsochroneControl implements IControl {
  options: IsochroneControlOptions;

  _id: string;
  _container: HTMLElement;
  _tooltip: HTMLElement;
  _dragging: boolean;
  _onDrag: EventListener;
  _onDrop: EventListener;
  _onStyleChange: EventListener;

  _map?: Map;
  _marker?: maplibreMarker;
  _abortController?: AbortController;

  /**
   * @param options - Options for configuring the isochrone control.
   */
  constructor(options?: IsochroneControlOptions) {
    this.options = Object.assign({}, defaultIsochroneControlOptions, options);

    this._id = `maptoolkit-ctrl-isochrone-${Math.random().toString(36).substring(2, 9)}`; // Used to distinguish between different isochrone controls
    this._dragging = false;

    this._container = document.createElement("div");
    this._container.classList.add("maplibregl-ctrl", "maplibregl-ctrl-group", "maptoolkit-ctrl", "maptoolkit-ctrl-isochrone");

    // Control
    const chronee = document.createElement("div");
    chronee.classList.add("maptoolkit-ctrl-isochrone-chronee", `maptoolkit-ctrl-isochrone-chronee-${this.options.type}`);
    chronee.setAttribute("draggable", "true");
    chronee.addEventListener("dragstart", (ev: Event) => {
      const dragEvent = ev as DragEvent;
      if (dragEvent.dataTransfer) {
        dragEvent.dataTransfer.setData("dragged", "true"); // make element draggable in firefox
        dragEvent.dataTransfer.setData("maptoolkit-ctrl-isochrone", this._id);
      }
      this._dragging = true;
    });
    chronee.addEventListener("dragend", () => {
      this._dragging = false;
    });

    const remove = document.createElement("button");
    remove.classList.add("maptoolkit-ctrl-isochrone-chronee-remove");
    remove.addEventListener("click", () => {
      this.removeFromMap();
    });

    // Tooltip
    const tooltip = (this._tooltip = document.createElement("div"));
    this._tooltip.classList.add("maplibregl-ctrl-group", "maptoolkit-ctrl-isochrone-tooltip");

    // Append children
    this._container.appendChild(remove);
    this._container.appendChild(chronee);
    this._container.appendChild(tooltip);

    this._onDrag = (ev: Event) => {
      ev.preventDefault();
    };

    this._onDrop = (ev: Event) => {
      ev.preventDefault();
      if (this._map && this._container) {
        const dragEvent = ev as DragEvent;
        const isIsochrone = dragEvent.dataTransfer?.getData("maptoolkit-ctrl-isochrone") === this._id;
        if (isIsochrone) {
          const lngLat = this._map.unproject({ x: dragEvent.offsetX, y: dragEvent.offsetY } as maplibrePointLike);
          this.addToMap(lngLat);
        }
      }
    };

    this._onStyleChange = () => {
      if (this._map) {
        this._map.once("idle", () => {
          if (this._marker && this._marker._map === this._map) {
            this._addPolygon(this._marker.getLngLat());
          }
        });
      }
    };
  }

  getDefaultPosition(): maplibreControlPosition {
    return "bottom-right";
  }

  onAdd(map: Map) {
    if (this._map instanceof Map && this._map !== map) {
      this.onRemove();
    }

    this._map = map;

    try {
      if (this.options.range) {
        this._tooltip.innerText = map._getUIString(`IsochroneControl.Tooltip.${this.options.type}`, { range: this.options.range.toString() });
      }
    } catch (err) {
      this._tooltip.remove();
      console.warn(err);
    }

    const mapCanvas = map.getCanvas();
    mapCanvas.addEventListener("dragover", this._onDrag);
    mapCanvas.addEventListener("dragenter", this._onDrag);
    mapCanvas.addEventListener("dragleave", this._onDrag);
    mapCanvas.addEventListener("drop", this._onDrop);
    map.on("style.set", this._onStyleChange);

    return this._container;
  }

  addToMap(lngLat: maplibreLngLatLike) {
    this._addMarker(lngLat);
    this._addPolygon(lngLat);
    if (this._container) {
      this._container.classList.add("maptoolkit-ctrl-isochrone-active");
    }
  }

  removeFromMap() {
    this._removeMarker();
    this._removePolygon();
    if (this._container) {
      this._container.classList.remove("maptoolkit-ctrl-isochrone-active");
    }
  }

  _addMarker(lngLat: maplibreLngLatLike) {
    if (this._map) {
      this._removeMarker();
      if (lngLat) {
        const element = document.createElement("div");

        const chronee = document.createElement("div");
        chronee.classList.add("maptoolkit-ctrl-isochrone-chronee", `maptoolkit-ctrl-isochrone-chronee-${this.options.type}`);

        const remove = document.createElement("button");
        remove.classList.add("maptoolkit-ctrl-isochrone-chronee-remove");
        remove.addEventListener("click", () => {
          this.removeFromMap();
        });

        element.appendChild(remove);
        element.appendChild(chronee);

        this._marker = new maplibreMarker({ element, anchor: "center", draggable: true });

        this._marker.on("dragend", (ev) => this._addPolygon(ev.target.getLngLat()));
        this._marker.on("click", (ev) => ev.preventDefault());

        this._marker.setLngLat(lngLat).addTo(this._map);
      }
    }
  }

  _removeMarker() {
    if (this._marker) {
      this._marker.remove();
    }
  }

  _addPolygon(lngLat: maplibreLngLatLike) {
    this._removePolygon();

    if (config.apiKey && this._map && lngLat) {
      const map = this._map;
      const url = new URL("isochrone", config.routingHost);
      url.pathname = "isochrone";

      url.searchParams.set("api_key", config.apiKey.toString());
      if (this.options.type) {
        url.searchParams.set("routeType", this.options.type);
      }
      if (this.options.range) {
        url.searchParams.set("time", this.options.range.toString());
      }

      const point = Array.isArray(lngLat) ? [lngLat[1], lngLat[0]] : "lat" in lngLat ? [lngLat.lat, "lon" in lngLat ? lngLat.lon : lngLat.lng] : undefined;

      if (point) {
        url.searchParams.set("point", point.join(","));

        if (this._abortController) {
          this._abortController.abort();
        }
        this._abortController = new AbortController();

        fetch(url.toString(), { signal: this._abortController.signal })
          .then((r) => r.json())
          .then((pointlist: number[][]) => {
            this._removePolygon();

            const coordinates = [pointlist.map((p) => [p[1], p[0]])];
            map.addSource(this._id, {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: { type: "Polygon", coordinates },
                  },
                ],
              },
            });

            map.addLayer({
              id: `${this._id}-fill`,
              type: "fill",
              source: this._id,
              paint: {
                "fill-color": "#aaaafa",
                "fill-opacity": 0.2,
              },
            });
            map.addLayer({
              id: `${this._id}-line`,
              type: "line",
              source: this._id,
              paint: {
                "line-color": "#aaaafa",
                "line-opacity": 0.8,
                "line-width": 1.4,
              },
            });

            if (this.options.fitBounds) {
              const bounds = new maplibreLngLatBounds();
              const fitBoundsOptions = Object.assign({ padding: 100 }, this.options.fitBounds);
              coordinates.forEach((lngLatArr) => lngLatArr.forEach((ll) => bounds.extend(ll as maplibreLngLatLike)));
              map.fitBounds(bounds, fitBoundsOptions);
            }
          })
          .catch((err) => {
            if (err.name !== "AbortError") {
              console.error(err);
            }
          });
      }
    }
  }

  _removePolygon() {
    if (this._map && this._container) {
      if (this._map.getLayer(`${this._id}-fill`)) {
        this._map.removeLayer(`${this._id}-fill`);
      }

      if (this._map.getLayer(`${this._id}-line`)) {
        this._map.removeLayer(`${this._id}-line`);
      }

      if (this._map.getSource(this._id)) {
        this._map.removeSource(this._id);
      }
    }
  }

  onRemove() {
    this.removeFromMap();

    if (this._map) {
      const mapCanvas = this._map.getCanvas();
      mapCanvas.removeEventListener("dragover", this._onDrag);
      mapCanvas.removeEventListener("dragenter", this._onDrag);
      mapCanvas.removeEventListener("dragleave", this._onDrag);
      mapCanvas.removeEventListener("drop", this._onDrop);
      this._map.off("style.set", this._onStyleChange);
    }

    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }

    this._map = undefined;
  }
}
