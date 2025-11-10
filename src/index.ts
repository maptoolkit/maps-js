import "./js/core/protocols"; // Register custom protocols

import { version } from "../package.json";

import { Map, MapOptions } from "./js/core/map";
import { config } from "./js/core/config";
import { locale } from "./js/core/locale";
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
import { StyleControl, StyleControlOptions } from "./js/control/style_control";
import { IsochroneControl, IsochroneControlOptions } from "./js/control/isochrone_control";

import maplibregl from "maplibre-gl";
export type * from "maplibre-gl";

const MapMLGL = maplibregl.Map;
const NavigationControlMLGL = maplibregl.NavigationControl;
const AttributionControlMLGL = maplibregl.AttributionControl;
const LogoControlMLGL = maplibregl.LogoControl;
const TerrainControlMLGL = maplibregl.TerrainControl;
const configMLGL = maplibregl.config;

const {
  GeolocateControl,
  ScaleControl,
  FullscreenControl,
  GlobeControl,
  Hash,
  Popup,
  Marker,
  Style,
  LngLat,
  LngLatBounds,
  Point,
  MercatorCoordinate,
  Evented,
  Event,
  AJAXError,
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
} = maplibregl;

export {
  GeolocateControl,
  ScaleControl,
  FullscreenControl,
  GlobeControl,
  Hash,
  Popup,
  Marker,
  Style,
  LngLat,
  LngLatBounds,
  Point,
  MercatorCoordinate,
  Evented,
  Event,
  AJAXError,
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
  IsochroneControlOptions,
};
