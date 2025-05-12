import "./js/core/protocols"; // Register custom protocols

import * as maplibregl from "maplibre-gl";

import { version } from "../package.json";

import { Map, MapOptions, DataConnectorOptions } from "./js/core/map";
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

export * from "maplibre-gl";
export type * from "maplibre-gl";

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
  DataConnectorOptions,
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
