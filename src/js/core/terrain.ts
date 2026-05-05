import { config } from "./config";

/**
 * @module Terrain
 */

import { SourceSpecification as maplibreSourceSpecification } from "maplibre-gl";

/**
 * Terrain source specification.
 * @maptoolkit
 */
export const TERRAIN: maplibreSourceSpecification = {
  type: "raster-dem",
  tiles: [`${config.dataconnectorCdnHost}/maptoolkit/terrainrgb/{z}/{x}/{y}.webp`],
  encoding: "terrarium",
  minzoom: 5,
  maxzoom: 12,
};
