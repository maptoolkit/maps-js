/**
 * @module Terrain
 */

import { SourceSpecification as maplibreSourceSpecification } from "maplibre-gl";

/**
 * Terrain source specification.
 */
export const Terrain: maplibreSourceSpecification = {
  type: "raster-dem",
  tiles: ["https://vtc-cdn.maptoolkit.net/terrain/{z}/{x}/{y}.webp"],
  encoding: "mapbox",
  minzoom: 5,
  maxzoom: 12,
};
