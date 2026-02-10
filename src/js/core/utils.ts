export function getStringChecksum(str: string): string {
  let checksum = 0;
  for (let i = 0; i < str.length; i++) {
    checksum += str.charCodeAt(i);
  }
  return checksum.toString(16);
}

/**
 * Decodes Google-style encoded polylines as used by the routing API.
 * Returns coordinates in GeoJSON order: `[lng, lat]` or `[lng, lat, elevation]`.
 *
 * @param encoded - The encoded polyline string.
 * @param is3D - Whether the polyline includes elevation as a third dimension.
 * @returns An array of coordinate tuples.
 */
export function decodePolyline(encoded: string, is3D?: boolean): number[][] {
  const coords: number[][] = [];
  let index = 0;
  let lat = 0;
  let lng = 0;
  let ele = 0;

  while (index < encoded.length) {
    let shift = 0;
    let result = 0;
    let byte: number;

    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    lat += result & 1 ? ~(result >> 1) : result >> 1;

    shift = 0;
    result = 0;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    lng += result & 1 ? ~(result >> 1) : result >> 1;

    if (is3D) {
      shift = 0;
      result = 0;
      do {
        byte = encoded.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);
      ele += result & 1 ? ~(result >> 1) : result >> 1;
      coords.push([lng / 1e5, lat / 1e5, ele / 100]);
    } else {
      coords.push([lng / 1e5, lat / 1e5]);
    }
  }

  return coords;
}

export async function get32ByteChecksum(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 32);
  return hashHex;
}
