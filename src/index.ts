import "./js/core/protocols"; // Register custom protocols

import { version as _sdkVersion } from "../package.json";

import { Map, MapOptions } from "./js/core/map";
import { Config, config } from "./js/core/config";
import { locale } from "./js/core/locale";
export type { LocaleSpecification } from "./js/core/locale";
import { STYLES } from "./js/core/styles";
import { TERRAIN } from "./js/core/terrain";

import { IControl } from "./js/control/control";
import { ControlPosition } from "./js/control/control";
import { LogoControl, LogoControlOptions } from "./js/control/logo_control";
import { AttributionControl, AttributionControlOptions } from "./js/control/attribution_control";
import { PitchControl, PitchControlOptions } from "./js/control/pitch_control";
import { CompassControl, CompassControlOptions } from "./js/control/compass_control";
import { TerrainControl, TerrainControlOptions } from "./js/control/terrain_control";
import { NavigationControl, NavigationControlOptions } from "./js/control/navigation_control";
import { StyleControl, StyleControlOptions, StyleDefSpecification } from "./js/control/style_control";
import { IsochroneControl, IsochroneControlOptions, IsochroneType } from "./js/control/isochrone_control";

import maplibregl from "maplibre-gl";
export type * from "maplibre-gl";

const MapMLGL = maplibregl.Map;
const NavigationControlMLGL = maplibregl.NavigationControl;
const AttributionControlMLGL = maplibregl.AttributionControl;
const LogoControlMLGL = maplibregl.LogoControl;
const TerrainControlMLGL = maplibregl.TerrainControl;
const configMLGL = maplibregl.config;

const { Hash, Style, Event, AJAXError, createTileMesh } = maplibregl;

export {
  GeolocateControl,
  ScaleControl,
  FullscreenControl,
  GlobeControl,
  Popup,
  Marker,
  LngLat,
  LngLatBounds,
  Point,
  MercatorCoordinate,
  Evented,
  CanvasSource,
  GeoJSONSource,
  ImageSource,
  RasterDEMTileSource,
  RasterTileSource,
  VectorTileSource,
  VideoSource,
  EdgeInsets,
  BoxZoomHandler,
  DragRotateHandler,
  DragPanHandler,
  ScrollZoomHandler,
  TwoFingersTouchZoomRotateHandler,
  CooperativeGesturesHandler,
  DoubleClickZoomHandler,
  KeyboardHandler,
  TwoFingersTouchZoomHandler,
  TwoFingersTouchRotateHandler,
  TwoFingersTouchPitchHandler,
  MapWheelEvent,
  MapTouchEvent,
  MapMouseEvent,
} from "maplibre-gl";

// ── Properties and Options (individually declared for JSDoc / TypeDoc) ───────

/** The current version of the Maptoolkit Maps SDK. @maptoolkit */
const version = _sdkVersion;

/** Adds a custom load resource function that will be called when using a URL that starts with a custom url schema. */
const addProtocol = maplibregl.addProtocol;

/** Removes a previously added protocol in the main thread. */
const removeProtocol = maplibregl.removeProtocol;

/**
 * Adds a custom source type, making it available for use with
 * {@link Map.addSource}.
 */
const addSourceType = maplibregl.addSourceType;

/**
 * Initializes resources like WebWorkers that can be shared across maps to lower
 * load times in some situations. `setWorkerUrl()` and `setWorkerCount()`, if
 * being used, must be set before `prewarm()` is called to have an effect.
 */
const prewarm = maplibregl.prewarm;

/** Clears up resources that have previously been created by `prewarm()`. */
const clearPrewarmedResources = maplibregl.clearPrewarmedResources;

/** Returns the package version of the library. */
const getVersion = maplibregl.getVersion;

/** Gets the number of web workers instantiated on a page with GL JS maps. */
const getWorkerCount = maplibregl.getWorkerCount;

/** Sets the number of web workers instantiated on a page with GL JS maps. */
const setWorkerCount = maplibregl.setWorkerCount;

/** Gets the maximum number of images (raster tiles, sprites, icons) to load in parallel. 16 by default. */
const getMaxParallelImageRequests = maplibregl.getMaxParallelImageRequests;

/** Sets the maximum number of images (raster tiles, sprites, icons) to load in parallel. 16 by default. */
const setMaxParallelImageRequests = maplibregl.setMaxParallelImageRequests;

/** Gets the worker URL. */
const getWorkerUrl = maplibregl.getWorkerUrl;

/** Sets the worker URL. */
const setWorkerUrl = maplibregl.setWorkerUrl;

/**
 * Sets the map's RTL text plugin. Necessary for supporting the Arabic and
 * Hebrew languages, which are written right-to-left.
 */
const setRTLTextPlugin = maplibregl.setRTLTextPlugin;

/** Gets the map's RTL text plugin status. The status can be `unavailable`, `loading`, `loaded`, or `error`. */
const getRTLTextPluginStatus = maplibregl.getRTLTextPluginStatus;

/** Imports a script in web workers. Can be used for adding protocols or registering worker sources. */
const importScriptInWorkers = maplibregl.importScriptInWorkers;

export {
  Hash,
  Style,
  Event,
  AJAXError,
  setRTLTextPlugin,
  getRTLTextPluginStatus,
  prewarm,
  clearPrewarmedResources,
  getVersion,
  getWorkerCount,
  setWorkerCount,
  getMaxParallelImageRequests,
  setMaxParallelImageRequests,
  getWorkerUrl,
  setWorkerUrl,
  addProtocol,
  removeProtocol,
  addSourceType,
  importScriptInWorkers,
  createTileMesh,
  // Below: Exported from MapLibre but as a different name
  // in case dev wants to use the non-overloaded versions
  MapMLGL,
  NavigationControlMLGL,
  AttributionControlMLGL,
  LogoControlMLGL,
  TerrainControlMLGL,
  configMLGL,
};

// Maptoolkit JS overrides
export {
  version,
  Map,
  Config,
  config,
  locale,
  STYLES,
  TERRAIN,
  LogoControl,
  AttributionControl,
  PitchControl,
  CompassControl,
  TerrainControl,
  NavigationControl,
  StyleControl,
  IsochroneControl,
};

export type {
  MapOptions,
  IControl,
  ControlPosition,
  LogoControlOptions,
  AttributionControlOptions,
  PitchControlOptions,
  CompassControlOptions,
  TerrainControlOptions,
  NavigationControlOptions,
  StyleControlOptions,
  StyleDefSpecification,
  IsochroneControlOptions,
  IsochroneType,
};
