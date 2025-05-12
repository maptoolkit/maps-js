import { config } from "./config";

/**
 * @module Terrain
 */

import { SourceSpecification as maplibreSourceSpecification } from "maplibre-gl";

/**
 * Terrain source specification.
 */
export const TERRAIN: maplibreSourceSpecification = {
  type: "raster-dem",
  tiles: [`${config.vtcCdnHost}/terrain/{z}/{x}/{y}.webp`],
  encoding: "mapbox",
  minzoom: 5,
  maxzoom: 12,
};
