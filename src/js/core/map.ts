import { defaultLocale } from "./locale";
import { config } from "./config";
import { ControlPosition, IControl } from "../control/control";
import { AttributionControl, AttributionControlOptions } from "../control/attribution_control";
import { LogoControl, LogoControlOptions } from "../control/logo_control";
import { Styles } from "./styles";

import { getStringChecksum } from "./utils";

import {
  Map as maplibreMap,
  MapOptions as maplibreMapOptions,
  StyleSpecification as maplibreStyleSpecification,
  StyleSwapOptions as maplibreStyleSwapOptions,
  StyleOptions as maplibreStyleOptions,
  AddLayerObject as maplibreAddLayerObject,
  PointLike as maplibrePointLike,
  MapMouseEvent as maplibreMapMouseEvent,
  MapTouchEvent as maplibreMapTouchEvent,
  MapGeoJSONFeature as maplibreMapGeoJSONFeature,
  LayerSpecification as maplibreLayerSpecification,
  ExpressionFilterSpecification as maplibreExpressionFilterSpecification,
  IControl as maplibreIControl,
  ControlPosition as maplibreControlPosition,
} from "maplibre-gl";

import {
  v8 as maplibreV8,
  supportsPropertyExpression as maplibreSupportsPropertyExpression,
  isExpression as maplibreIsExpression,
} from "@maplibre/maplibre-gl-style-spec";

/**
 * Determines if a layer is hidden using very low opacity values.
 * @param layer - The layer to check.
 * @returns True if the layer is hidden, false otherwise.
 */
function isLayerHidden(layer: any) {
  if (layer) {
    if (layer.type == "line") {
      return layer.paint?.["line-opacity"] <= 0.001;
    } else if (layer.type == "fill") {
      return !(layer.paint?.["fill-opacity"] <= 0.001);
    } else if (layer.type == "symbol") {
      return layer.layout?.["icon-image"] ? layer.paint?.["icon-opacity"] <= 0.001 : (layer.paint?.["text-opacity"] as number) <= 0.001;
    }
  }
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

/**
 * Creates a feature state case.
 * @param state - The state.
 * @param valueA - The value for the true case.
 * @param valueB - The value for the false case.
 * @returns The created feature state case.
 */
function createFeatureStateCase(state: string | number, valueA: any, valueB: any) {
  return [
    "case",
    /* ["==", ["id"], state], */
    ["boolean", ["feature-state", state], false],
    typeof valueA === "object" && !maplibreIsExpression(valueA) ? ["literal", valueA] : valueA,
    typeof valueB === "object" && !maplibreIsExpression(valueB) ? ["literal", valueB] : valueB,
  ];
}

export type StateProperty = "paint" | "layout";
export const StatePropertyList: Array<StateProperty> = ["paint", "layout"];

export type StateSpecification = { [_: string]: any }; // TODO: should use "maplibreLayerSpecification" type instead
export type StateChildSpecification = { [_: string]: StateSpecification };
export type StateParentSpecification = { [_: string]: StateChildSpecification };
export type StateFamilySpecification = {
  global: StateParentSpecification;
  feature: StateParentSpecification;
};

export type GlobalStateActiveSpecification = boolean;
export type FeatureStateActiveSpecification = maplibreMapGeoJSONFeature;
export type StateActiveGroupSpecification<Type> = { [_: string]: Type };
export type StatesActiveSpecification = {
  global: StateActiveGroupSpecification<GlobalStateActiveSpecification>;
  feature: StateActiveGroupSpecification<FeatureStateActiveSpecification>;
};

export type GlobalStatesListSpecification = Array<string>;

export type FeatureState = "select" | "hover";
export const FeatureStateList: Array<FeatureState> = ["select", "hover"];

export type MapFeatureMouseEvent = maplibreMapMouseEvent & { feature?: maplibreMapGeoJSONFeature };
export type MapFeatureTouchEvent = maplibreMapTouchEvent & { feature?: maplibreMapGeoJSONFeature };

export type DataConnectorOptions = {
  name: string;
  layers: Omit<maplibreLayerSpecification, "id" | "source" | "source-layer">[];
  query?: string;
  ids?: Array<string | number>;
  filter?: maplibreExpressionFilterSpecification;
};

/**
 * The {@link Map} options object.
 */
export type MapOptions = Omit<maplibreMapOptions, "container" | "attributionControl"> & {
  /**
   * The HTML element in which the map will be rendered, or the element's string `id`. The specified element must have no children.
   *
   * Alternatively the container can be set using the {@link Map.setContainer} method after initialization.
   */
  container?: HTMLElement | string;
  /**
   * Maptoolkit API key.
   */
  apiKey?: string;
  /**
   * {@link AttributionControlOptions} for the map's default {@link AttributionControl}. Pass `false` to disable.
   * @defaultValue See {@link AttributionControlOptions}.
   */
  attributionControl?: false | AttributionControlOptions;
  /**
   * {@link LogoControlOptions} for the map's default {@link LogoControl}. Pass `false` to disable.
   * @defaultValue See {@link LogoControlOptions}.
   */
  logoControl?: false | LogoControlOptions;
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
  _states: StateFamilySpecification;
  _statesActive: StatesActiveSpecification;

  /**
   * @param options - The {@link MapOptions} object.
   */
  constructor(options?: MapOptions) {
    config.apiKey = options?.apiKey || "";
    options = Object.assign({ style: Styles.Terrain.value }, defaultMapOptions, options);

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

    this._locale = Object.assign({}, defaultLocale, options.locale);

    this._style = undefined;
    this._states = { global: {}, feature: {} };
    this._statesActive = { global: {}, feature: {} };

    if (options.attributionControl !== false) {
      this.addControl(new AttributionControl(options.attributionControl));
    }
    if (options.logoControl !== false) {
      this.addControl(new LogoControl(options.logoControl));
    }

    this.on("mousemove", (ev) => {
      const point = [
        [ev.point.x - 3, ev.point.y - 3],
        [ev.point.x + 3, ev.point.y + 3],
      ] as [maplibrePointLike, maplibrePointLike];
      if ("select" in this._states.feature) {
        const feature = this._getStateFeature("select", point);
        this._canvasContainer.style.cursor = feature ? "pointer" : "";
      }
      if ("hover" in this._states.feature) {
        const feature = this._getStateFeature("hover", point);
        this._setStateFeature("hover", feature, ev);
      }
    });

    this.on("click", (ev) => {
      const point = [
        [ev.point.x - 3, ev.point.y - 3],
        [ev.point.x + 3, ev.point.y + 3],
      ] as [maplibrePointLike, maplibrePointLike];
      const feature = this._getStateFeature("select", point);
      this._setStateFeature("select", feature, ev);
    });

    if (options.container) {
      this.setContainer(options.container);
    }
  }

  set selectedFeature(feature: maplibreMapGeoJSONFeature | undefined) {
    this._setStateFeature("select", !feature ? undefined : feature);
  }
  get selectedFeature(): maplibreMapGeoJSONFeature | undefined {
    return this._statesActive.feature.select;
  }

  set hoveredFeature(feature: maplibreMapGeoJSONFeature | undefined) {
    this._setStateFeature("hover", !feature ? undefined : feature);
  }
  get hoveredFeature(): maplibreMapGeoJSONFeature | undefined {
    return this._statesActive.feature.hover;
  }

  /**
   * Get active feature for given point and state.
   * @private
   */
  private _getStateFeature(state: string, point: maplibrePointLike | [maplibrePointLike, maplibrePointLike]): maplibreMapGeoJSONFeature | undefined {
    if (state in this._states.global || state in this._states.feature) {
      const ids = Object.keys(this._states.global[state] || this._states.feature[state]);
      const f = this.queryRenderedFeatures(point, { layers: ids }).filter((f) => !isLayerHidden(f.layer))[0];
      return f;
    }
  }

  /**
   * Get active feature for given state.
   * @private
   */
  private _setStateFeature(state: string, feature: maplibreMapGeoJSONFeature | undefined, event?: MapFeatureMouseEvent | MapFeatureTouchEvent) {
    const stateEvents: any = {
      hover: { enable: ["mouseover"], disable: ["mouseout"] },
      select: { enable: ["select"], disable: ["deselect"] },
    };
    const featureIsSame = isSameFeature(feature, this._statesActive.feature[state]);
    if (this._statesActive.feature[state] && !featureIsSame) {
      if (this._statesActive.feature[state].id !== undefined) {
        this.setFeatureState(this._statesActive.feature[state], { [state]: false }); // TODO: improvate feature states (currently replacing feature id with .setStyle)
      }
      if (event) {
        const ev = event as MapFeatureMouseEvent | MapFeatureTouchEvent;
        ev.feature = this._statesActive.feature[state];
        if (stateEvents[state] && stateEvents[state].disable) {
          for (const eventName of stateEvents[state].disable) {
            this.fire(`feature.${eventName}`, ev);
          }
        }
      }
      delete this._statesActive.feature[state];
    }
    if (feature && !isLayerHidden(feature.layer) && !featureIsSame) {
      if (feature.id !== undefined) {
        this.setFeatureState(feature, { [state]: true }); // TODO: improvate feature states (currently replacing feature id with .setStyle)
      } else {
        console.warn(`${feature.layer ? feature.layer.id + ": " : ""}Feature state '${state}' couldn't be set, source feature must provide an id.`);
      }
      this._statesActive.feature[state] = feature;
      if (event) {
        const ev = event as MapFeatureMouseEvent | MapFeatureTouchEvent;
        ev.feature = feature;
        if (stateEvents[state] && stateEvents[state].enable) {
          for (const eventName of stateEvents[state].enable) {
            this.fire(`feature.${eventName}`, ev);
          }
        }
      }
    }
    this._applyStates();
  }

  /**
   * Parses the states from the style.
   * @private
   */
  private _parseStates(): void {
    const style = this.style.serialize();

    if (style) {
      this._truncateStates();

      for (const layer of style.layers) {
        const metadata: any = layer.metadata;
        if (metadata && metadata["maptoolkit:states"]) {
          for (const state in metadata["maptoolkit:states"]) {
            let states = !FeatureStateList.includes(state as FeatureState) ? this._states.global : this._states.feature;
            if (!states[state]) {
              states[state] = {} as StateChildSpecification;
            }
            states[state][layer.id] = metadata["maptoolkit:states"][state];
          }
        }
      }
    }
  }

  /**
   * Truncate parsed states
   * @private
   */
  private _truncateStates(): void {
    this._states = { global: {} as StateParentSpecification, feature: {} as StateParentSpecification };
  }
  
  /**
   * Applies the parsed states to the style.
   * @private
   */
  private _applyStates(): void {
    const style = JSON.parse(JSON.stringify(this._style));

    for (const state in this._states.global) {
      if (this._statesActive.global[state] !== true) {
        continue;
      }
      for (const layer of style.layers) {
        if (layer.id in this._states.global[state]) {
          for (const prop in this._states.global[state][layer.id]) {
            if (prop === "metadata") {
              continue;
            }
            if (!StatePropertyList.includes(prop as StateProperty)) {
              layer[prop] = this._states.global[state][layer.id][prop];
            } else {
              if (!(prop in layer)) {
                layer[prop] = {};
              }
              for (const lapa in this._states.global[state][layer.id][prop]) {
                layer[prop][lapa] = this._states.global[state][layer.id][prop][lapa];
              }
            }
          }
        }
      }
    }

    for (const state in this._states.feature) {
      for (let i = 0; i < style.layers.length; ++i) {
        if (style.layers[i].id in this._states.feature[state]) {
          for (const prop of StatePropertyList) {
            for (const lapa in this._states.feature[state][style.layers[i].id][prop]) {
              const isDataDriven = maplibreSupportsPropertyExpression(maplibreV8[`${prop}_${style.layers[i].type}`][lapa]);
              const supportsFeatureState = maplibreV8[`${prop}_${style.layers[i].type}`][lapa].expression.parameters.includes("feature-state");
              if (!isDataDriven) {
                console.error(`layers[${i}].${style.layers[i].type}.${prop}.${lapa} doesn't support data expressions and can't use feature states.`);
                delete this._states.feature[state][style.layers[i].id][prop][lapa];
                continue;
              } else if (!supportsFeatureState) {
                console.error(`layers[${i}].${style.layers[i].type}.${prop}.${lapa}: doesn't support "feature-state" data expressions.`);
                delete this._states.feature[state][style.layers[i].id][prop][lapa];
                continue;
              }
              const defaultValue = maplibreV8[`${prop}_${style.layers[i].type}`][lapa].default;
              const currentValue = style.layers[i][prop][lapa];
              const stateValue = this._states.feature[state][style.layers[i].id][prop][lapa];
              style.layers[i][prop][lapa] = createFeatureStateCase(
                /* this._statesActive.feature[state]?.id || "" */ state,
                stateValue,
                currentValue === undefined ? defaultValue : currentValue
              );
            }
          }
        }
      }
    }

    this.setStyle(style, {}, true);
    this.redraw();
  }

  /**
   * Sets the container for the map.
   * @param container - The container element or the ID of the container element.
   * @returns The map instance.
   */
  setContainer(container: HTMLElement | string): this {
    if (typeof container === "string") {
      let el = document.getElementById(container);
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
   */
  remove(): this {
    this._container.remove();
    this._parent = undefined;
    return this;
  }

  /**
   * Gets the list of active global states.
   * @returns The list of active global states.
   */
  getStates(): GlobalStatesListSpecification {
    return this._statesActive.global ? Object.keys(this._statesActive.global).filter((s) => this._statesActive.global[s] === true) : [];
  }

  /**
   * Sets the active global states.
   * @param statesActive - The list of states to activate.
   * @returns The map instance.
   */
  setStates(statesActive: GlobalStatesListSpecification): this {
    this._statesActive.global = {};
    if (Array.isArray(statesActive)) {
      for (const state of statesActive) {
        this._statesActive.global[state] = true;
      }
    }
    if (this.style._loaded) {
      this._applyStates();
    }
    return this;
  }

  /**
   * Sets the style of the map.
   * @param style - The style to set.
   * @param options - Additional options for the style.
   * @returns The map instance.
   */
  setStyle(style: maplibreStyleSpecification | string, options?: maplibreStyleSwapOptions & maplibreStyleOptions, update?: boolean): this {
    if (update !== true) {
      this.fire("style.set", { style });
    }
    super.setStyle(style, options);
    if (update !== true) {
      this._truncateStates();
      this._styleId = getStringChecksum(typeof style === "string" ? style : JSON.stringify(style));
      this.once("styledata", () => {
        this._parseStates();
        this._style = this.style ? this.style.serialize() : undefined;
        this._applyStates();
      });
    }
    return this;
  }

  /**
   * Adds a layer to the map.
   * @param layer - The layer or layers to add.
   * @param beforeId - The ID of an existing layer to insert the new layer before.
   * @returns The map instance.
   */
  addLayer(layer: maplibreAddLayerObject | Array<maplibreAddLayerObject>, beforeId?: string): this {
    const layers = Array.isArray(layer) ? layer : [layer];
    this._lazyInitEmptyStyle();
    for (const l of layers) {
      this.style.addLayer(l, beforeId);
    }
    this._update(true);

    this._parseStates();
    this._style = this.style ? this.style.serialize() : undefined;
    this._applyStates();

    return this;
  }

  /**
   * Adds a layer to the map.
   * @param id - The layer's ID.
   * @returns The map instance.
   */
  removeLayer(id: string): this {
    this.style.removeLayer(id);
    this._update(true);

    this._parseStates();
    this._style = this.style ? this.style.serialize() : undefined;
    this._applyStates();

    return this;
  }

  /**
   * Moves a layer to a different z-position.
   * @param layer - The ID of the layer to move.
   * @param beforeId - The ID of an existing layer to insert the new layer before.
   * @returns The map instance.
   */
  moveLayer(id: string, beforeId?: string): this {
    this.style.moveLayer(id, beforeId);
    this._update(true);

    this._parseStates();
    this._style = this.style ? this.style.serialize() : undefined;
    this._applyStates();

    return this;
  }

  /**
   * Gets the UI string for a given key.
   * @param key - The key for the UI string.
   * @returns The UI string.
   * @private
   */
  _getUIString(key: string, variables?: { [key: string]: string }): string {
    const str = super._getUIString(key as any);
    if (variables && typeof variables === "object") {
      return str.replace(/{(.*?)}/g, (match, val) => {
        return val in variables ? variables[val] : match;
      });
    } else {
      return str;
    }
  }

  /**
   * Adds a control to the map.
   * @param control - The control to add.
   * @param position - The position to add the control.
   * @returns The map instance.
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
    this._controlContainer.insertBefore(topCenter, this._controlPositions["top-right"]);
    this._controlPositions["top-center"] = topCenter;

    const bottomCenter = document.createElement("div");
    bottomCenter.classList.add("maplibregl-ctrl-bottom-center");
    this._controlContainer.insertBefore(bottomCenter, this._controlPositions["bottom-right"]);
    this._controlPositions["bottom-center"] = bottomCenter;
  }
}
