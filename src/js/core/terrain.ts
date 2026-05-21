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
  tiles: ["maptoolkit://connector/maptoolkit/terrainrgb/{z}/{x}/{y}.webp"],
  encoding: "terrarium",
  minzoom: 5,
  maxzoom: 12,
};
