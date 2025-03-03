import { ControlPosition as ControlPosition$1, AttributionControlOptions as AttributionControlOptions$1, ScaleControlOptions, AttributionControl as AttributionControl$1, ScaleControl, LayerSpecification, ExpressionFilterSpecification, MapOptions as MapOptions$1, Map as Map$1, StyleSpecification, MapGeoJSONFeature, StyleSwapOptions, StyleOptions, AddLayerObject, Evented, SourceSpecification, Listener, NavigationControlOptions as NavigationControlOptions$1, NavigationControl as NavigationControl$1, FitBoundsOptions, Marker, LngLatLike } from 'maplibre-gl';
export * from 'maplibre-gl';
import * as maplibreGl from 'maplibre-gl';
export { maplibreGl as maplibregl };

/**
 * A position defintion for the control to be placed.
 * When two or more controls are placed in the same location they are stacked.
 */
type ControlPosition = ControlPosition$1 | "top-center" | "bottom-center";
/**
 * Interface for interactive controls added to the map. This is a
 * specification for implementers to model: it is not
 * an exported method or class.
 *
 * Controls must implement `onAdd` and `onRemove`, and must own an
 * element, which is often a `div` element. To use MapLibre GL JS's
 * default control styling, add the `maplibregl-ctrl` class to your control's
 * node.
 *
 * @example
 * ```ts
 * class HelloWorldControl: IControl {
 *     onAdd(map) {
 *         this._map = map;
 *         this._container = document.createElement('div');
 *         this._container.className = 'maplibregl-ctrl';
 *         this._container.textContent = 'Hello, world';
 *         return this._container;
 *     }
 *
 *     onRemove() {
 *         this._container.parentNode.removeChild(this._container);
 *         this._map = undefined;
 *     }
 * }
 * ```
 */
interface IControl {
    /**
     * Register a control on the map and give it a chance to register event listeners
     * and resources. This method is called by {@link Map#addControl}
     * internally.
     *
     * @param map - the Map this control will be added to
     * @returns The control's container element. This should
     * be created by the control and returned by onAdd without being attached
     * to the DOM: the map will insert the control's element into the DOM
     * as necessary.
     */
    onAdd(map: Map): HTMLElement;
    /**
     * Unregister a control on the map and give it a chance to detach event listeners
     * and resources. This method is called by {@link Map#removeControl}
     * internally.
     *
     * @param map - the Map this control will be removed from
     */
    onRemove(map: Map): void;
    /**
     * Optionally provide a default position for this control. If this method
     * is implemented and {@link Map#addControl} is called without the `position`
     * parameter, the value returned by getDefaultPosition will be used as the
     * control's position.
     *
     * @returns a control position, one of the values valid in addControl.
     */
    readonly getDefaultPosition?: () => ControlPosition;
}

/**
 * Options for configuring the {@link AttributionControl}.
 */
type AttributionControlOptions = AttributionControlOptions$1 & {
    /**
     * Options for configuring the {@link ScaleControl}.
     * Set to `false` to disable.
     * @defaultValue `{ maxWidth: 80, unit: "metric" }` for the {@link maplibre.ScaleControlOptions}
     */
    scale?: false | ScaleControlOptions;
};
/**
 * Presents the map's attribution information and optionally its current scale.
 */
declare class AttributionControl implements IControl {
    options: AttributionControlOptions;
    _map?: Map;
    _container?: HTMLElement;
    _attribCtrl: AttributionControl$1;
    _scaleCtrl?: ScaleControl;
    /**
     * @param options - Options for configuring the attribution control.
     */
    constructor(options?: AttributionControlOptions);
    getDefaultPosition(): ControlPosition;
    onAdd(map: Map): HTMLElement;
    onRemove(): void;
}

/**
 * Options for configuring the {@link LogoControl}.
 */
type LogoControlOptions = {};
/**
 * Displays the Maptoolkit watermark.
 */
declare class LogoControl implements IControl {
    options: LogoControlOptions;
    _map?: Map;
    _container?: HTMLElement;
    /**
     * Creates an instance of LogoControl.
     * @param options - Options for configuring the compass control.
     */
    constructor(options?: LogoControlOptions);
    getDefaultPosition(): ControlPosition$1;
    onAdd(map: Map): HTMLElement;
    onRemove(): void;
}

type StateSpecification = {
    [_: string]: any;
};
type StateChildSpecification = {
    [_: string]: StateSpecification;
};
type StateParentSpecification = {
    [_: string]: StateChildSpecification;
};
type StateFamilySpecification = {
    global: StateParentSpecification;
    feature: StateParentSpecification;
};
type GlobalStateActiveSpecification = boolean;
type FeatureStateActiveSpecification = MapGeoJSONFeature;
type StateActiveGroupSpecification<Type> = {
    [_: string]: Type;
};
type StatesActiveSpecification = {
    global: StateActiveGroupSpecification<GlobalStateActiveSpecification>;
    feature: StateActiveGroupSpecification<FeatureStateActiveSpecification>;
};
type GlobalStatesListSpecification = Array<string>;
type DataConnectorOptions = {
    name: string;
    layers: Omit<LayerSpecification, "id" | "source" | "source-layer">[];
    query?: string;
    ids?: Array<string | number>;
    filter?: ExpressionFilterSpecification;
};
/**
 * The {@link Map} options object.
 */
type MapOptions = Omit<MapOptions$1, "container" | "attributionControl"> & {
    /**
     * The HTML element in which the map will be rendered, or the element's string `id`. The specified element must have no children.
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
/**
 * Extends the maplibre-gl map class with additional functionality.
 */
declare class Map extends Map$1 {
    _parent?: HTMLElement;
    _style?: StyleSpecification;
    _styleId?: string;
    _apiKey?: string;
    _states: StateFamilySpecification;
    _statesActive: StatesActiveSpecification;
    /**
     * @param options - The {@link MapOptions} object.
     */
    constructor(options?: MapOptions);
    set selectedFeature(feature: MapGeoJSONFeature | null);
    get selectedFeature(): MapGeoJSONFeature | null;
    set hoveredFeature(feature: MapGeoJSONFeature | null);
    get hoveredFeature(): MapGeoJSONFeature | undefined;
    /**
     * Get active feature for given point and state.
     * @private
     */
    private _getStateFeature;
    /**
     * Get active feature for given state.
     * @private
     */
    private _setStateFeature;
    /**
     * Parses the states from the style.
     * @private
     */
    private _parseStates;
    /**
     * Truncate parsed states
     * @private
     */
    private _truncateStates;
    /**
     * Applies the parsed states to the style.
     * @private
     */
    private _applyStates;
    /**
     * Sets the container for the map.
     * @param container - The container element or the ID of the container element.
     * @returns The map instance.
     */
    setContainer(container: HTMLElement | string): this;
    /**
     * Removes the map from its parent container.
     * @returns The map instance.
     */
    remove(): this;
    /**
     * Gets the list of active global states.
     * @returns The list of active global states.
     */
    getStates(): GlobalStatesListSpecification;
    /**
     * Sets the active global states.
     * @param statesActive - The list of states to activate.
     * @returns The map instance.
     */
    setStates(statesActive: GlobalStatesListSpecification): this;
    /**
     * Sets the style of the map.
     * @param style - The style to set.
     * @param options - Additional options for the style.
     * @returns The map instance.
     */
    setStyle(style: StyleSpecification | string, options?: StyleSwapOptions & StyleOptions, update?: boolean): this;
    /**
     * Adds a layer to the map.
     * @param layer - The layer or layers to add.
     * @param beforeId - The ID of an existing layer to insert the new layer before.
     * @returns The map instance.
     */
    addLayer(layer: AddLayerObject | Array<AddLayerObject>, beforeId?: string): this;
    /**
     * Adds a layer to the map.
     * @param id - The layer's ID.
     * @returns The map instance.
     */
    removeLayer(id: string): this;
    /**
     * Moves a layer to a different z-position.
     * @param layer - The ID of the layer to move.
     * @param beforeId - The ID of an existing layer to insert the new layer before.
     * @returns The map instance.
     */
    moveLayer(id: string, beforeId?: string): this;
    /**
     * Gets the UI string for a given key.
     * @param key - The key for the UI string.
     * @returns The UI string.
     * @private
     */
    _getUIString(key: string, variables?: {
        [key: string]: string;
    }): string;
    /**
     * Adds a control to the map.
     * @param control - The control to add.
     * @param position - The position to add the control.
     * @returns The map instance.
     */
    addControl(control: IControl, position?: ControlPosition): this;
    /**
     * Sets up the container for the map.
     * @private
     */
    _setupContainer(): void;
}

declare class Config extends Evented {
    private _locale;
    set locale(k: string);
    get locale(): string;
    private _apiKey;
    set apiKey(k: string);
    get apiKey(): string;
    private _pixelRatio;
    set pixelRatio(k: number);
    get pixelRatio(): number;
    private _stylesHost;
    set stylesHost(k: string);
    get stylesHost(): string;
    private _iconsHost;
    set iconsHost(k: string);
    get iconsHost(): string;
    private _dataconnectorHost;
    set dataconnectorHost(k: string);
    get dataconnectorHost(): string;
    private _routingHost;
    set routingHost(k: string);
    get routingHost(): string;
    private _staticmapHost;
    set staticmapHost(k: string);
    get staticmapHost(): string;
}
declare const config: Config;

/**
 * Locale translations for the application.
 */
declare const Locale: {
    [_: string]: {
        [_: string]: string;
    };
};

type StyleDefSpecification = {
    id: string;
    value: string | StyleSpecification;
    image?: string;
};
declare class DefaultStyles {
    private _terrain;
    private _light;
    private _dark;
    private _city;
    private _green;
    private _winter;
    get Terrain(): {
        image: string;
        id: string;
        value: string | StyleSpecification;
    };
    get Light(): {
        image: string;
        id: string;
        value: string | StyleSpecification;
    };
    get Dark(): {
        image: string;
        id: string;
        value: string | StyleSpecification;
    };
    get City(): {
        image: string;
        id: string;
        value: string | StyleSpecification;
    };
    get Green(): {
        image: string;
        id: string;
        value: string | StyleSpecification;
    };
    get Winter(): {
        image: string;
        id: string;
        value: string | StyleSpecification;
    };
    toArray(): StyleDefSpecification[];
}
/**
 * Collection of pre-defined map styles.
 */
declare const Styles: DefaultStyles;

/**
 * @module Terrain
 */

/**
 * Terrain source specification.
 */
declare const Terrain: SourceSpecification;

/**
 * Options for configuring the {@link PitchControl}.
 */
type PitchControlOptions = {
    /**
     * The slider control's knob size in pixels.
     * @defaultValue `16` pixels
     */
    knobSize?: number;
    /**
     * The slider control's vertical size in pixels.
     * @defaultValue `52` pixels
     */
    sliderSize?: number;
    /**
     * If set to `true`, the control will hide when the map's pitch is 0, with a delay of 400 ms.
     * @defaultValue `false`
     */
    autoHide?: boolean;
};
/**
 * Provides an interactable slider for the map's pitch.
 *
 * Used by the {@link NavigationControl} class.
 */
declare class PitchControl implements IControl {
    options: PitchControlOptions;
    _map?: Map;
    _container?: HTMLElement;
    _active: boolean;
    _onMouseDown?: (ev: MouseEvent | TouchEvent) => void;
    _onMouseUp?: (ev: MouseEvent | TouchEvent) => void;
    _onMouseMove?: (ev: MouseEvent | TouchEvent) => void;
    _onPitch?: Listener;
    /**
     * @param options - Options for configuring the pitch control.
     */
    constructor(options?: PitchControlOptions);
    getDefaultPosition(): ControlPosition$1;
    onAdd(map: Map): HTMLElement;
    onRemove(): void;
    isActive(): boolean;
    isHidden(): boolean;
    show(): this;
    hide(): this;
}

/**
 * Options for configuring the {@link CompassControl}.
 */
type CompassControlOptions = {};
/**
 * Provides an interactable compass for the map's bearing.
 *
 * Used by the {@link NavigationControl} class.
 */
declare class CompassControl implements IControl {
    options: CompassControlOptions;
    _map?: Map;
    _container?: HTMLElement;
    _onRotate?: Listener;
    /**
     * @param options - Options for configuring the compass control.
     */
    constructor(options?: CompassControlOptions);
    getDefaultPosition(): ControlPosition$1;
    onAdd(map: Map): HTMLElement;
    onRemove(): void;
}

/**
 * Options for configuring the {@link TerrainControl}.
 */
type TerrainControlOptions = {
    /**
     * Pitch value used on toggle.
     * @defaultValue `60` degrees
     */
    pitch?: number;
};
/**
 * Provides a button to toggle the map's terrain.
 *
 * Used by the {@link NavigationControl} class.
 */
declare class TerrainControl implements IControl {
    options: TerrainControlOptions;
    _map?: Map;
    _container?: HTMLElement;
    _active: boolean;
    _enabled: boolean;
    _loaded: boolean;
    _onPitch?: Listener;
    _onPitchEnd?: Listener;
    /**
     * @param options - Options for configuring the terrain control.
     */
    constructor(options?: TerrainControlOptions);
    getDefaultPosition(): ControlPosition$1;
    onAdd(map: Map): HTMLElement;
    onRemove(): void;
    _terrain(enable: boolean): void;
    enable(): this;
    disable(): this;
    isEnabled(): boolean;
    isActive(): boolean;
    isLoaded(): boolean;
}

type NavigationControlOptions = {
    navigationControl?: NavigationControlOptions$1;
    terrainControl?: false | TerrainControlOptions;
    pitchControl?: false | PitchControlOptions;
    compassControl?: false | CompassControlOptions;
};
declare class NavigationControl implements IControl {
    options: NavigationControlOptions;
    _map?: Map;
    _container?: HTMLElement;
    _navigationControl: NavigationControl$1;
    _terrainControl?: TerrainControl;
    _pitchControl?: PitchControl;
    _compassControl?: CompassControl;
    _onPitch?: Listener;
    constructor(options?: NavigationControlOptions);
    getDefaultPosition(): ControlPosition$1;
    onAdd(map: Map): HTMLElement;
    onRemove(): void;
}

type StyleControlOptions = {
    styles?: Array<StyleDefSpecification>;
};
declare class StyleControl implements IControl {
    options: StyleControlOptions;
    _map?: Map;
    _container?: HTMLElement;
    _groups?: HTMLElement;
    constructor(options?: StyleControlOptions);
    getDefaultPosition(): ControlPosition$1;
    onAdd(map: Map): HTMLElement;
    onRemove(): void;
    open(): void;
    close(): void;
    _resize(): void;
}

type IsochroneType = "foot" | "bike" | "car";
/**
 * Options for configuring the {@link IsochroneControl}.
 */
type IsochroneControlOptions = {
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
    fitBounds?: boolean | FitBoundsOptions;
};
/**
 * Provides an draggable isochrone control.
 *
 * Used by the {@link NavigationControl} class.
 */
declare class IsochroneControl implements IControl {
    options: IsochroneControlOptions;
    _id: string;
    _container: HTMLElement;
    _tooltip: HTMLElement;
    _dragging: boolean;
    _onDrag: EventListener;
    _onDrop: EventListener;
    _onStyleChange: EventListener;
    _map?: Map;
    _marker?: Marker;
    _abortController?: AbortController;
    /**
     * @param options - Options for configuring the isochrone control.
     */
    constructor(options?: IsochroneControlOptions);
    getDefaultPosition(): ControlPosition$1;
    onAdd(map: Map): HTMLElement;
    addToMap(lngLat: LngLatLike): void;
    removeFromMap(): void;
    _addMarker(lngLat: LngLatLike): void;
    _removeMarker(): void;
    _addPolygon(lngLat: LngLatLike): void;
    _removePolygon(): void;
    onRemove(): void;
}

var version = "11.0.0-alpha.22";

export { AttributionControl, type AttributionControlOptions, CompassControl, type CompassControlOptions, type DataConnectorOptions, IsochroneControl, type IsochroneControlOptions, Locale, LogoControl, Map, type MapOptions, NavigationControl, type NavigationControlOptions, PitchControl, type PitchControlOptions, StyleControl, type StyleControlOptions, Styles, Terrain, TerrainControl, type TerrainControlOptions, config, version };
