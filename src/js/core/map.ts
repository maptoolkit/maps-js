import { getDefaultLocale, type LocaleSpecification } from "./locale";
import { config } from "./config";
import { ControlPosition, IControl } from "../control/control";
import { AttributionControl, AttributionControlOptions } from "../control/attribution_control";
import { LogoControl, LogoControlOptions } from "../control/logo_control";
import { STYLES } from "./styles";

import type {
  MapOptions as maplibreMapOptions,
  StyleSpecification as maplibreStyleSpecification,
  StyleSwapOptions as maplibreStyleSwapOptions,
  StyleOptions as maplibreStyleOptions,
  PointLike as maplibrePointLike,
  MapGeoJSONFeature as maplibreMapGeoJSONFeature,
  ControlPosition as maplibreControlPosition,
} from "maplibre-gl";

import { Map as maplibreMap, MapMouseEvent as maplibreMapMouseEvent, MapTouchEvent as maplibreMapTouchEvent, IControl as maplibreIControl } from "maplibre-gl";

/**
 * Determines if a layer is hidden using very low opacity values.
 * @param layer - The layer to check.
 * @returns True if the layer is hidden, false otherwise.
 */
function isLayerHidden(layer: any): boolean {
  if (layer) {
    if (layer.type === "line") {
      return layer.paint?.["line-opacity"] <= 0.001;
    } else if (layer.type === "fill") {
      return layer.paint?.["fill-opacity"] <= 0.001;
    } else if (layer.type === "symbol") {
      return layer.layout?.["icon-image"] ? layer.paint?.["icon-opacity"] <= 0.001 : layer.paint?.["text-opacity"] <= 0.001;
    } else if (layer.type === "circle") {
      return layer.paint?.["circle-opacity"] <= 0.001;
    }
  }

  return false;
}

/**
 * Creates a feature ID based on the sum of all top-level numbers in the feature.
 * @param feature - The feature to create an ID for.
 * @returns The generated feature ID.
 */
function createFeatureId(feature: any) {
  if (feature) {
    let id = 0;
    for (const key in feature._vectorTileFeature) {
      if (typeof feature._vectorTileFeature[key] === "number") {
        id += feature._vectorTileFeature[key];
      }
    }
    return id;
  }
}

/**Q
 * Determines if two features are the same.
 * @param featureA - The first feature.
 * @param featureB - The second feature.
 * @returns True if the features are the same, false otherwise.
 */
function isSameFeature(featureA?: maplibreMapGeoJSONFeature, featureB?: maplibreMapGeoJSONFeature) {
  if (!featureA || !featureB) {
    return false;
  }
  const idA = featureA.id === undefined ? createFeatureId(featureA) : featureA.id;
  const idB = featureB.id === undefined ? createFeatureId(featureB) : featureB.id;
  return idA === idB;
}

export type MapFeatureMouseEvent = maplibreMapMouseEvent & { feature?: maplibreMapGeoJSONFeature };
export type MapFeatureTouchEvent = maplibreMapTouchEvent & { feature?: maplibreMapGeoJSONFeature };

/**
 * The {@link Map} options object.
 */
export type MapOptions = Omit<maplibreMapOptions, "container" | "attributionControl"> & {
  /**
   * The HTML element in which the map will be rendered, or the element's string `id`. The specified element must have no children.
   * Alternatively the container can be set using the {@link Map.setContainer} method after initialization.
   * @maptoolkit
   */
  container?: HTMLElement | string;
  /**
   * Maptoolkit API key.
   * @maptoolkit
   */
  apiKey?: string;
  /**
   * {@link AttributionControlOptions} for the map's default {@link AttributionControl}. Pass `false` to disable.
   * @defaultValue See {@link AttributionControlOptions}.
   * @maptoolkit
   */
  attributionControl?: false | AttributionControlOptions;
  /**
   * {@link LogoControlOptions} for the map's default {@link LogoControl}. Pass `false` to disable.
   * @defaultValue See {@link LogoControlOptions}.
   * @maptoolkit
   */
  logoControl?: false | LogoControlOptions;
  /**
   * A locale string that specifies the language for string translations. Currently supported locales are `en` and `de`.
   * Alternatively, it can be an object mapping string IDs to translations, allowing you to override or add to the default localization table.
   * @defaultValue See {@link Config}
   * @maptoolkit
   */
  locale?: LocaleSpecification | string;
};

export const defaultMapOptions: MapOptions = {
  maxPitch: 75,
  center: { lng: 11.40037, lat: 47.26816 },
  zoom: 12,
};

/**
 * Extends the maplibre-gl map class with additional functionality.
 */
export class Map extends maplibreMap {
  _parent?: HTMLElement;
  _style?: maplibreStyleSpecification;
  _styleId?: string;
  _apiKey?: string;

  /**
   * @param options - The {@link MapOptions} object.
   */
  constructor(options?: MapOptions) {
    if (options?.apiKey) {
      config.apiKey = options.apiKey;
    }

    if (typeof options?.locale === "string") {
      config.locale = options?.locale;
    }

    options = Object.assign({ style: STYLES.TERRAIN }, defaultMapOptions, options);

    const container = document.createElement("div");
    container.classList.add("maptoolkit-map");
    container.style.width = container.style.height = "100%";

    super({
      ...options,
      container,
      attributionControl: false,
      maplibreLogo: false,
    });

    config.pixelRatio = this.getPixelRatio();

    this._locale = Object.assign({}, getDefaultLocale(), typeof options.locale === "object" ? options.locale : null);

    if (options.attributionControl !== false) {
      this.addControl(new AttributionControl(options.attributionControl));
    }
    if (options.logoControl !== false) {
      this.addControl(new LogoControl(options.logoControl));
    }

    let hoveredFeature: maplibreMapGeoJSONFeature | undefined = undefined;

    this.on("mousemove", (ev) => {
      const point = [
        [ev.point.x - 3, ev.point.y - 3],
        [ev.point.x + 3, ev.point.y + 3],
      ] as [maplibrePointLike, maplibrePointLike];

      const feature = this._getFeatureAtPoint(point);

      if (feature?.layer?.metadata) {
        const metadata = feature.layer.metadata as Record<string, any>;

        if (metadata["maptoolkit:clickable"] === true) {
          this._canvasContainer.style.cursor = "pointer";

          const featureIsSame = isSameFeature(hoveredFeature, feature);
          if (!featureIsSame) {
            if (hoveredFeature) {
              const event = ev as MapFeatureMouseEvent | MapFeatureTouchEvent;
              event.feature = hoveredFeature;

              this.fire("feature.mouseout", event);

              hoveredFeature = undefined;
            }

            const event = ev as MapFeatureMouseEvent | MapFeatureTouchEvent;
            event.feature = hoveredFeature = feature;

            this.fire("feature.mouseover", event);
          }
        } else {
          this._canvasContainer.style.cursor = "";

          if (hoveredFeature) {
            const event = ev as MapFeatureMouseEvent | MapFeatureTouchEvent;
            event.feature = hoveredFeature;

            this.fire("feature.mouseout", event);

            hoveredFeature = undefined;
          }
        }
      }
    });

    this.on("click", (ev) => {
      const point = [
        [ev.point.x - 3, ev.point.y - 3],
        [ev.point.x + 3, ev.point.y + 3],
      ] as [maplibrePointLike, maplibrePointLike];

      const feature = this._getFeatureAtPoint(point);

      if (feature?.layer?.metadata) {
        const metadata = feature.layer.metadata as Record<string, any>;

        if (metadata["maptoolkit:clickable"] === true) {
          const event = ev as MapFeatureMouseEvent | MapFeatureTouchEvent;
          event.feature = feature;

          this.fire("feature.click", event);
        }
      }
    });

    if (options.container) {
      this.setContainer(options.container);
    }
  }

  /**
   * Get active feature for given point and state.
   * @private
   */
  private _getFeatureAtPoint(point: maplibrePointLike | [maplibrePointLike, maplibrePointLike]): maplibreMapGeoJSONFeature | undefined {
    const feature = this.queryRenderedFeatures(point).filter((f) => !isLayerHidden(f.layer))[0];
    return feature;
  }

  /**
   * Sets the container for the map.
   * @param container - The container element or the ID of the container element.
   * @returns The map instance.
   * @maptoolkit
   */
  setContainer(container: HTMLElement | string): this {
    if (typeof container === "string") {
      const el = document.getElementById(container);
      if (el) {
        this._parent = el;
      } else {
        console.error(`Container with id "${container}" not found.`);
      }
    } else if (container instanceof HTMLElement) {
      this._parent = container;
    }
    if (this._parent) {
      if (!this._parent.contains(this._container)) {
        this._parent.innerHTML = "";
      }
      this._parent.appendChild(this._container) && this.resize();
    } else {
      console.error("Invalid type: 'container' must be a String or HTMLElement.");
    }
    return this;
  }

  /**
   * Removes the map from its parent container.
   * @returns The map instance.
   * @maptoolkit
   */
  remove(): this {
    this._container.remove();
    this._parent = undefined;
    return this;
  }

  /**
   * Sets the style of the map.
   * @param style - The style to set.
   * @param options - Additional options for the style.
   * @returns The map instance.
   * @maptoolkit
   */
  setStyle(style: maplibreStyleSpecification | string, options?: maplibreStyleSwapOptions & maplibreStyleOptions): this;
  
  setStyle(style: maplibreStyleSpecification | string, options?: maplibreStyleSwapOptions & maplibreStyleOptions, update?: boolean): this {
    if (update !== true) {
      this.fire("style.set", { style });
    }

    return super.setStyle(style, options);
  }

  /**
   * Gets the UI string for a given key.
   * @param key - The key for the UI string.
   * @returns The UI string.
   * @private
   */
  _getUIString(key: string, variables?: { [key: string]: string }): string {
    try {
      const str = super._getUIString(key as any);
      if (variables && typeof variables === "object") {
        return str.replace(/{(.*?)}/g, (match, val) => {
          return val in variables ? variables[val] : match;
        });
      } else {
        return str;
      }
    } catch (e) {
      console.warn(e);
      return "";
    }
  }

  /**
   * Adds a control to the map.
   * @param control - The control to add.
   * @param position - The position to add the control.
   * @returns The map instance.
   * @maptoolkit
   */
  addControl(control: IControl, position?: ControlPosition): this {
    super.addControl(control as maplibreIControl, position as maplibreControlPosition);
    return this;
  }

  /**
   * Sets up the container for the map.
   * @private
   */
  _setupContainer(): void {
    super._setupContainer();

    const topCenter = document.createElement("div");
    topCenter.classList.add("maplibregl-ctrl-top-center");
    this._controlContainer.insertBefore(topCenter, this._controlPositions["top-right"]!);
    this._controlPositions["top-center" as maplibreControlPosition] = topCenter;

    const bottomCenter = document.createElement("div");
    bottomCenter.classList.add("maplibregl-ctrl-bottom-center");
    this._controlContainer.insertBefore(bottomCenter, this._controlPositions["bottom-right"]!);
    this._controlPositions["bottom-center" as maplibreControlPosition] = bottomCenter;
  }
}
