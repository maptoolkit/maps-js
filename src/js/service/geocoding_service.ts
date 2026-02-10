import { config } from "../core/config";

/**
 * Address details returned by the geocoding API.
 */
export type GeocodingAddress = {
  road?: string;
  house_number?: string;
  city?: string;
  suburb?: string;
  state?: string;
  postcode?: string;
  country?: string;
  country_code?: string;
};

/**
 * A single geocoding result.
 */
export type GeocodingResult = {
  displayName: string;
  lat: number;
  lon: number;
  osmType?: string;
  osmId?: string;
  placeId?: string;
  address?: GeocodingAddress;
  boundingBox?: [number, number, number, number];
};

/**
 * Options for a forward geocoding request.
 */
export type GeocodingForwardOptions = {
  /** The search query string (required). */
  query: string;
  /** Comma-separated ISO 3166-1 alpha-2 country codes to restrict results. */
  countryCodes?: string;
  /** Bounding box to prefer results within: `"minLng,minLat,maxLng,maxLat"`. */
  viewbox?: string;
  /** Language for results (ISO 639-1). */
  language?: string;
  /** Maximum number of results. */
  limit?: number;
  /** AbortSignal for request cancellation. */
  signal?: AbortSignal;
};

/**
 * Options for a reverse geocoding request.
 */
export type GeocodingReverseOptions = {
  /** Latitude of the location. */
  lat: number;
  /** Longitude of the location. */
  lon: number;
  /** Language for results (ISO 639-1). */
  language?: string;
  /** AbortSignal for request cancellation. */
  signal?: AbortSignal;
};

/**
 * Transforms a raw API response object into a typed {@link GeocodingResult}.
 */
function toResult(item: any): GeocodingResult {
  const result: GeocodingResult = {
    displayName: item.display_name ?? "",
    lat: parseFloat(item.lat),
    lon: parseFloat(item.lon),
  };
  if (item.osm_type) result.osmType = item.osm_type;
  if (item.osm_id) result.osmId = String(item.osm_id);
  if (item.place_id) result.placeId = String(item.place_id);
  if (item.address) result.address = item.address;
  if (item.boundingbox && item.boundingbox.length === 4) {
    result.boundingBox = item.boundingbox.map(Number) as [number, number, number, number];
  }
  return result;
}

/**
 * A service client for the Maptoolkit Geocoding API.
 *
 * Provides forward geocoding (address → coordinates) and reverse geocoding
 * (coordinates → address) without any Map or UI dependency.
 *
 * @example
 * ```ts
 * const geocoding = new GeocodingService();
 * const results = await geocoding.forward({ query: "Innsbruck" });
 * console.log(results[0].displayName, results[0].lat, results[0].lon);
 * ```
 */
export class GeocodingService {
  /**
   * Performs a forward geocoding request (address search).
   *
   * @param options - Forward geocoding options.
   * @returns A promise resolving to an array of {@link GeocodingResult}.
   */
  async forward(options: GeocodingForwardOptions): Promise<GeocodingResult[]> {
    const url = new URL("/search", config.geocodingHost);
    url.searchParams.set("api_key", config.apiKey);
    url.searchParams.set("q", options.query);
    url.searchParams.set("format", "json");
    if (options.countryCodes) url.searchParams.set("countrycodes", options.countryCodes);
    if (options.viewbox) url.searchParams.set("viewbox", options.viewbox);
    if (options.language) url.searchParams.set("language", options.language);
    if (options.limit !== undefined) url.searchParams.set("limit", String(options.limit));

    const response = await fetch(url.toString(), { signal: options.signal });
    if (!response.ok) throw new Error(`Geocoding request failed: ${response.status}`);

    const data = await response.json();
    if (!Array.isArray(data)) return [];
    return data.map(toResult);
  }

  /**
   * Performs a reverse geocoding request (coordinates → address).
   *
   * @param options - Reverse geocoding options.
   * @returns A promise resolving to an array containing the reverse-geocoded result.
   */
  async reverse(options: GeocodingReverseOptions): Promise<GeocodingResult[]> {
    const url = new URL("/reverse", config.geocodingHost);
    url.searchParams.set("api_key", config.apiKey);
    url.searchParams.set("lat", String(options.lat));
    url.searchParams.set("lon", String(options.lon));
    url.searchParams.set("format", "json");
    if (options.language) url.searchParams.set("language", options.language);

    const response = await fetch(url.toString(), { signal: options.signal });
    if (!response.ok) throw new Error(`Reverse geocoding request failed: ${response.status}`);

    const data = await response.json();
    if (!data || !data.display_name) return [];
    return [toResult(data)];
  }
}
