import "./js/core/protocols";

import * as maplibregl from "maplibre-gl";

import { Map, MapOptions, DataConnectorOptions } from "./js/core/map";

import { Locale } from "./js/core/locale";
import { Styles } from "./js/core/styles";
import { Terrain } from "./js/core/terrain";

import { LogoControl } from "./js/control/logo_control";
import { AttributionControl, AttributionControlOptions } from "./js/control/attribution_control";
import { PitchControl, PitchControlOptions } from "./js/control/pitch_control";
import { CompassControl, CompassControlOptions} from "./js/control/compass_control";
import { TerrainControl, TerrainControlOptions } from "./js/control/terrain_control";
import { NavigationControl, NavigationControlOptions } from "./js/control/navigation_control";
import { StyleControl, StyleControlOptions } from "./js/control/style_control";

export type * from "maplibre-gl";

export {
  maplibregl,
  type MapOptions,
  type DataConnectorOptions,
  type AttributionControlOptions,
  type PitchControlOptions,
  type CompassControlOptions,
  type TerrainControlOptions,
  type NavigationControlOptions,
  type StyleControlOptions,
  Map,
  Locale,
  Styles,
  Terrain,
  LogoControl,
  AttributionControl,
  PitchControl,
  CompassControl,
  TerrainControl,
  NavigationControl,
  StyleControl,
};
