import maplibregl__default, { ControlPosition as ControlPosition$1, AttributionControlOptions as AttributionControlOptions$1, ScaleControlOptions, AttributionControl as AttributionControl$1, ScaleControl as ScaleControl$1, Map as Map$1, StyleSpecification, MapGeoJSONFeature, MapOptions as MapOptions$1, StyleSwapOptions, StyleOptions, AddLayerObject, LayerSpecification, ExpressionFilterSpecification, Evented as Evented$1, SourceSpecification, Listener, ProjectionSpecification, NavigationControlOptions as NavigationControlOptions$1, NavigationControl as NavigationControl$1, FitBoundsOptions, Marker as Marker$1, LngLatLike } from 'maplibre-gl';
export * from 'maplibre-gl';

declare let version: string;

type LocaleSpecification = {
    [_: string]: {
        [_: string]: string;
    };
};
/**
 * Locale translations for the application.
 */
declare const locale: LocaleSpecification;

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
    _scaleCtrl?: ScaleControl$1;
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
    /**
     * A locale string that specifies the language for string translations. Currently supported locales are `en` and `de`.
     * Alternatively, it can be an object mapping string IDs to translations, allowing you to override or add to the default localization table.
     * @defaultValue See {@link Config}
     */
    locale?: LocaleSpecification | string;
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

/**
 * The `Config` class manages configuration settings for the whole library.
 * It provides access to settings such as API key, locale, and host URLs for various services.
 */
declare class Config extends Evented$1 {
    /**
     * @private
     * The current locale.
     * @type {string}
     * @default "en"
     */
    private _locale;
    /**
     * Gets the current locale.
     * @returns {string} The current locale.
     */
    get locale(): string;
    /**
     * Sets the locale.
     * @param {string} value - The new locale to set.
     * @fires config.locale.set
     */
    set locale(value: string);
    /**
     * @private
     * The Maptoolkit API key.
     * @type {string}
     */
    private _apiKey;
    /**
     * Gets the current Maptoolkit API key.
     * @returns {string} The current API key.
     * @throws {void} Logs a warning to the console if the API key is not set.
     */
    get apiKey(): string;
    /**
     * Sets the Maptoolkit API key.
     * @param {string} value - The new API key to set.
     * @fires config.apiKey.set
     */
    set apiKey(value: string);
    /**
     * @private
     * The pixel ratio (for high DPI screens).
     * @type {number}
     * @default 1
     */
    private _pixelRatio;
    /**
     * Gets the current pixel ratio setting.
     * @returns {number} The current pixel ratio.
     */
    get pixelRatio(): number;
    /**
     * Sets the pixel ratio setting.
     * @param {number} value - The new pixel ratio to set.
     * @fires config.pixelRatio.set
     */
    set pixelRatio(value: number);
    /**
     * @private
     * The base URL for the Maptoolkit website.
     * @type {string}
     * @default "https://www.maptoolkit.net"
     */
    private _webHost;
    /**
     * Gets the base URL for the Maptoolkit website.
     * @returns {string} The base web host URL.
     */
    get webHost(): string;
    /**
     * Sets the base URL for the Maptoolkit website.
     * @param {string} value - The new web host URL to set.
     * @fires config.webHost.set
     */
    set webHost(value: string);
    /**
     * @private
     * The base URL for serving static resources.
     * @type {string}
     * @default "https://static.maptoolkit.net"
     */
    private _staticHost;
    /**
     * Gets the base URL for static resources.
     * @returns {string} The base static host URL.
     */
    get staticHost(): string;
    /**
     * Sets the base URL for static resources.
     * @param {string} value - The new static host URL to set.
     * @fires config.staticHost.set
     */
    set staticHost(value: string);
    /**
     * @private
     * The base URL for Maptoolkit style resources.
     * @type {string}
     * @default "https://styles.maptoolkit.net"
     */
    private _stylesHost;
    /**
     * Gets the base URL for Maptoolkit style resources.
     * @returns {string} The base styles host URL.
     */
    get stylesHost(): string;
    /**
     * Sets the base URL for Maptoolkit style resources.
     * @param {string} value - The new styles host URL to set.
     * @fires config.stylesHost.set
     */
    set stylesHost(value: string);
    /**
     * @private
     * The base URL for Maptoolkit icons.
     * @type {string}
     * @default "https://icons.maptoolkit.net"
     */
    private _iconsHost;
    /**
     * Gets the base URL for Maptoolkit icons.
     * @returns {string} The base icons host URL.
     */
    get iconsHost(): string;
    /**
     * Sets the base URL for Maptoolkit icons.
     * @param {string} value - The new icons host URL to set.
     * @fires config.iconsHost.set
     */
    set iconsHost(value: string);
    /**
     * @private
     * The base URL for the Maptoolkit data connector service.
     * @type {string}
     * @default "https://dataconnector.maptoolkit.net"
     */
    private _dataconnectorHost;
    /**
     * Gets the base URL for the Maptoolkit data connector service.
     * @returns {string} The base data connector host URL.
     */
    get dataconnectorHost(): string;
    /**
     * Sets the base URL for the Maptoolkit data connector service.
     * @param {string} value - The new data connector host URL to set.
     * @fires config.dataconnectorHost.set
     */
    set dataconnectorHost(value: string);
    /**
     * @private
     * The base URL for the Maptoolkit routing service.
     * @type {string}
     * @default "https://routing.maptoolkit.net"
     */
    private _routingHost;
    /**
     * Gets the base URL for the Maptoolkit routing service.
     * @returns {string} The base routing host URL.
     */
    get routingHost(): string;
    /**
     * Sets the base URL for the Maptoolkit routing service.
     * @param {string} value - The new routing host URL to set.
     * @fires config.routingHost.set
     */
    set routingHost(value: string);
    /**
     * @private
     * The base URL for the Maptoolkit static map service.
     * @type {string}
     * @default "https://staticmap.maptoolkit.net"
     */
    private _staticmapHost;
    /**
     * Gets the base URL for the Maptoolkit static map service.
     * @returns {string} The base static map host URL.
     */
    get staticmapHost(): string;
    /**
     * Sets the base URL for the Maptoolkit static map service.
     * @param {string} value - The new static map host URL to set.
     * @fires config.staticmapHost.set
     */
    set staticmapHost(value: string);
    /**
     * @private
     * The base URL for the VTC CDN service.
     * @type {string}
     * @default "https://vtc-cdn.maptoolkit.net"
     */
    private _vtcCdnHost;
    /**
     * Gets the base URL for the VTC CDN service.
     * @returns {string} The base VTC CDN host URL.
     */
    get vtcCdnHost(): string;
    /**
     * Sets the base URL for the VTC CDN service.
     * @param {string} value - The new VTC CDN host URL to set.
     * @fires config.vtcCdnHost.set
     */
    set vtcCdnHost(value: string);
    /**
     * @private
     * The base URL for the VTC service.
     * @type {string}
     * @default "https://vtc.maptoolkit.net"
     */
    private _vtcHost;
    /**
     * Gets the base URL for the VTC service.
     * @returns {string} The base VTC host URL.
     */
    get vtcHost(): string;
    /**
     * Sets the base URL for the VTC service.
     * @param {string} value - The new VTC host URL to set.
     * @fires config.vtcHost.set
     */
    set vtcHost(value: string);
    /**
     * @private
     * The base URL for the RTC CDN service.
     * @type {string}
     * @default "https://rtc-cdn.maptoolkit.net"
     */
    private _rtcCdnHost;
    /**
     * Gets the base URL for the RTC CDN service.
     * @returns {string} The base RTC CDN host URL.
     */
    get rtcCdnHost(): string;
    /**
     * Sets the base URL for the RTC CDN service.
     * @param {string} value - The new RTC CDN host URL to set.
     * @fires config.rtcCdnHost.set
     */
    set rtcCdnHost(value: string);
}
declare const config: Config;

/**
 * Collection of pre-defined map styles.
 */
declare const STYLES: {
    TERRAIN: string;
    LIGHT: string;
    DARK: string;
    CITY: string;
    GREEN: string;
    WINTER: string;
};

/**
 * @module Terrain
 */

/**
 * Terrain source specification.
 */
declare const TERRAIN: SourceSpecification;

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
    /**
     * Globe projection used on toggle.
     * @defaultValue `false`
     */
    globe?: boolean;
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
    _projection?: ProjectionSpecification;
    _onPitch?: Listener;
    _onPitchEnd?: Listener;
    _onStyleSet?: Listener;
    /**
     * @param options - Options for configuring the terrain control.
     */
    constructor(options?: TerrainControlOptions);
    getDefaultPosition(): ControlPosition$1;
    onAdd(map: Map): HTMLElement;
    onRemove(): void;
    _update(): void;
    _terrain(enable: boolean): void;
    _globe(enable: boolean): void;
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
type StyleDefSpecification = {
    id: string;
    value: string | StyleSpecification;
    image?: string;
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
    _marker?: Marker$1;
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

declare const MapMLGL: typeof maplibregl__default.Map;
declare const NavigationControlMLGL: typeof maplibregl__default.NavigationControl;
declare const AttributionControlMLGL: typeof maplibregl__default.AttributionControl;
declare const LogoControlMLGL: typeof maplibregl__default.LogoControl;
declare const TerrainControlMLGL: typeof maplibregl__default.TerrainControl;
declare const configMLGL: maplibregl__default.Config;
declare const GeolocateControl: typeof maplibregl__default.GeolocateControl;
declare const ScaleControl: typeof maplibregl__default.ScaleControl;
declare const FullscreenControl: typeof maplibregl__default.FullscreenControl;
declare const GlobeControl: typeof maplibregl__default.GlobeControl;
declare const Hash: typeof maplibregl__default.Hash;
declare const Popup: typeof maplibregl__default.Popup;
declare const Marker: typeof maplibregl__default.Marker;
declare const Style: typeof maplibregl__default.Style;
declare const LngLat: typeof maplibregl__default.LngLat;
declare const LngLatBounds: typeof maplibregl__default.LngLatBounds;
declare const Point: typeof maplibregl__default.Point;
declare const MercatorCoordinate: typeof maplibregl__default.MercatorCoordinate;
declare const Evented: typeof maplibregl__default.Evented;
declare const Event: typeof maplibregl__default.Event;
declare const AJAXError: typeof maplibregl__default.AJAXError;
declare const CanvasSource: typeof maplibregl__default.CanvasSource;
declare const GeoJSONSource: typeof maplibregl__default.GeoJSONSource;
declare const ImageSource: typeof maplibregl__default.ImageSource;
declare const RasterDEMTileSource: typeof maplibregl__default.RasterDEMTileSource;
declare const RasterTileSource: typeof maplibregl__default.RasterTileSource;
declare const VectorTileSource: typeof maplibregl__default.VectorTileSource;
declare const VideoSource: typeof maplibregl__default.VideoSource;
declare const EdgeInsets: typeof maplibregl__default.EdgeInsets;
declare const BoxZoomHandler: typeof maplibregl__default.BoxZoomHandler;
declare const DragRotateHandler: typeof maplibregl__default.DragRotateHandler;
declare const DragPanHandler: typeof maplibregl__default.DragPanHandler;
declare const ScrollZoomHandler: typeof maplibregl__default.ScrollZoomHandler;
declare const TwoFingersTouchZoomRotateHandler: typeof maplibregl__default.TwoFingersTouchZoomRotateHandler;
declare const CooperativeGesturesHandler: typeof maplibregl__default.CooperativeGesturesHandler;
declare const DoubleClickZoomHandler: typeof maplibregl__default.DoubleClickZoomHandler;
declare const KeyboardHandler: typeof maplibregl__default.KeyboardHandler;
declare const TwoFingersTouchZoomHandler: typeof maplibregl__default.TwoFingersTouchZoomHandler;
declare const TwoFingersTouchRotateHandler: typeof maplibregl__default.TwoFingersTouchRotateHandler;
declare const TwoFingersTouchPitchHandler: typeof maplibregl__default.TwoFingersTouchPitchHandler;
declare const MapWheelEvent: typeof maplibregl__default.MapWheelEvent;
declare const MapTouchEvent: typeof maplibregl__default.MapTouchEvent;
declare const MapMouseEvent: typeof maplibregl__default.MapMouseEvent;
declare const setRTLTextPlugin: typeof maplibregl__default.setRTLTextPlugin;
declare const getRTLTextPluginStatus: typeof maplibregl__default.getRTLTextPluginStatus;
declare const prewarm: typeof maplibregl__default.prewarm;
declare const clearPrewarmedResources: typeof maplibregl__default.clearPrewarmedResources;
declare const getVersion: typeof maplibregl__default.getVersion;
declare const getWorkerCount: typeof maplibregl__default.getWorkerCount;
declare const setWorkerCount: typeof maplibregl__default.setWorkerCount;
declare const getMaxParallelImageRequests: typeof maplibregl__default.getMaxParallelImageRequests;
declare const setMaxParallelImageRequests: typeof maplibregl__default.setMaxParallelImageRequests;
declare const getWorkerUrl: typeof maplibregl__default.getWorkerUrl;
declare const setWorkerUrl: typeof maplibregl__default.setWorkerUrl;
declare const addProtocol: typeof maplibregl__default.addProtocol;
declare const removeProtocol: typeof maplibregl__default.removeProtocol;
declare const addSourceType: (name: string, SourceType: maplibregl__default.SourceClass) => Promise<void>;
declare const importScriptInWorkers: typeof maplibregl__default.importScriptInWorkers;
declare const createTileMesh: typeof maplibregl__default.createTileMesh;

export { AJAXError, AttributionControl, AttributionControlMLGL, BoxZoomHandler, CanvasSource, CompassControl, CooperativeGesturesHandler, DoubleClickZoomHandler, DragPanHandler, DragRotateHandler, EdgeInsets, Event, Evented, FullscreenControl, GeoJSONSource, GeolocateControl, GlobeControl, Hash, ImageSource, IsochroneControl, KeyboardHandler, LngLat, LngLatBounds, LogoControl, LogoControlMLGL, Map, MapMLGL, MapMouseEvent, MapTouchEvent, MapWheelEvent, Marker, MercatorCoordinate, NavigationControl, NavigationControlMLGL, PitchControl, Point, Popup, RasterDEMTileSource, RasterTileSource, STYLES, ScaleControl, ScrollZoomHandler, Style, StyleControl, TERRAIN, TerrainControl, TerrainControlMLGL, TwoFingersTouchPitchHandler, TwoFingersTouchRotateHandler, TwoFingersTouchZoomHandler, TwoFingersTouchZoomRotateHandler, VectorTileSource, VideoSource, addProtocol, addSourceType, clearPrewarmedResources, config, configMLGL, createTileMesh, getMaxParallelImageRequests, getRTLTextPluginStatus, getVersion, getWorkerCount, getWorkerUrl, importScriptInWorkers, locale, prewarm, removeProtocol, setMaxParallelImageRequests, setRTLTextPlugin, setWorkerCount, setWorkerUrl, version };
export type { AttributionControlOptions, CompassControlOptions, ControlPosition, DataConnectorOptions, IControl, IsochroneControlOptions, LogoControlOptions, MapOptions, NavigationControlOptions, PitchControlOptions, StyleControlOptions, TerrainControlOptions };
