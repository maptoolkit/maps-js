import { config } from "../core/config";
import { decodePolyline } from "../core/utils";

/**
 * Supported route types.
 */
export type RouteType = "car" | "bike" | "foot";

/**
 * Options for a routing request.
 */
export type RoutingOptions = {
  /** Two or more points as `[lat, lng]` tuples. */
  points: [number, number][];
  /** Vehicle / profile type. */
  routeType?: RouteType;
  /** Language for turn-by-turn instructions (ISO 639-1). */
  language?: string;
  /** Enable voice instructions. */
  voiceInstructions?: boolean;
  /** AbortSignal for request cancellation. */
  signal?: AbortSignal;
};

/**
 * Options for a map-matching request.
 */
export type MatchOptions = {
  /** Points to match against the road network as `[lat, lng]` tuples. */
  points: [number, number][];
  /** Vehicle / profile type. */
  routeType?: RouteType;
  /** Language for instructions (ISO 639-1). */
  language?: string;
  /** AbortSignal for request cancellation. */
  signal?: AbortSignal;
};

/**
 * A single turn-by-turn instruction.
 */
export type RoutingInstruction = {
  text: string;
  distance: number;
  time: number;
  streetName: string;
  sign: number;
  interval: [number, number];
  coordinate?: [number, number];
};

/**
 * The result of a routing or map-matching request.
 */
export type RoutingResult = {
  /** Total distance in meters. */
  distance: number;
  /** Total time in milliseconds. */
  time: number;
  /** Decoded coordinates as `[lng, lat]` tuples (GeoJSON order). */
  coordinates: number[][];
  /** Bounding box `[minLng, minLat, maxLng, maxLat]`. */
  bbox: [number, number, number, number];
  /** Turn-by-turn instructions. */
  instructions: RoutingInstruction[];
  /** Returns the route as a GeoJSON Feature for direct use with `map.addSource()`. */
  toGeoJSON(): GeoJSON.Feature<GeoJSON.LineString>;
};

/**
 * Parses a raw API path object into a typed {@link RoutingResult}.
 */
function toRoutingResult(path: any): RoutingResult {
  const coordinates = path.points_encoded !== false ? decodePolyline(path.points) : (path.points?.coordinates ?? []);

  const instructions: RoutingInstruction[] = (path.instructions ?? []).map((instr: any) => ({
    text: instr.text ?? "",
    distance: instr.distance ?? 0,
    time: instr.time ?? 0,
    streetName: instr.street_name ?? "",
    sign: instr.sign ?? 0,
    interval: instr.interval ?? [0, 0],
    coordinate: instr.coordinate ? [instr.coordinate[1], instr.coordinate[0]] : undefined,
  }));

  const bbox: [number, number, number, number] = path.bbox ?? [0, 0, 0, 0];

  return {
    distance: path.distance ?? 0,
    time: path.time ?? 0,
    coordinates,
    bbox,
    instructions,
    toGeoJSON() {
      return {
        type: "Feature",
        properties: {
          distance: this.distance,
          time: this.time,
        },
        geometry: {
          type: "LineString",
          coordinates: this.coordinates,
        },
      };
    },
  };
}

/**
 * A service client for the Maptoolkit Routing API.
 *
 * Provides route calculation and map-matching without any Map or UI dependency.
 *
 * @example
 * ```ts
 * const routing = new RoutingService();
 * const result = await routing.route({
 *   points: [[47.2682, 11.3933], [48.2082, 16.3738]],
 *   routeType: "car",
 * });
 * console.log(result.distance, result.time);
 * map.addSource("route", { type: "geojson", data: result.toGeoJSON() });
 * ```
 */
export class RoutingService {
  /**
   * Calculates a route between two or more points.
   *
   * @param options - Routing request options.
   * @returns A promise resolving to a {@link RoutingResult}.
   */
  async route(options: RoutingOptions): Promise<RoutingResult> {
    const url = new URL("/route", config.routingHost);
    url.searchParams.set("api_key", config.apiKey);
    for (const point of options.points) {
      url.searchParams.append("point", `${point[0]},${point[1]}`);
    }
    if (options.routeType) url.searchParams.set("routeType", options.routeType);
    if (options.language) url.searchParams.set("language", options.language);
    if (options.voiceInstructions) url.searchParams.set("voice_instructions", "1");

    const response = await fetch(url.toString(), { signal: options.signal });
    if (!response.ok) throw new Error(`Routing request failed: ${response.status}`);

    const data = await response.json();
    if (!data.paths || !data.paths.length) throw new Error("No route found");
    return toRoutingResult(data.paths[0]);
  }

  /**
   * Performs a map-matching request, snapping points to the road network.
   *
   * @param options - Map-matching request options.
   * @returns A promise resolving to a {@link RoutingResult}.
   */
  async match(options: MatchOptions): Promise<RoutingResult> {
    const url = new URL("/match", config.routingHost);
    url.searchParams.set("api_key", config.apiKey);
    for (const point of options.points) {
      url.searchParams.append("point", `${point[0]},${point[1]}`);
    }
    if (options.routeType) url.searchParams.set("routeType", options.routeType);
    if (options.language) url.searchParams.set("language", options.language);

    const response = await fetch(url.toString(), { signal: options.signal });
    if (!response.ok) throw new Error(`Map matching request failed: ${response.status}`);

    const data = await response.json();
    if (!data.paths || !data.paths.length) throw new Error("No match found");
    return toRoutingResult(data.paths[0]);
  }
}
