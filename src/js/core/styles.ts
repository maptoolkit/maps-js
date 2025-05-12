import { config } from "./config";

export function createStaticImage(accountName: string, styleName: string) {
  const url = new URL(config.staticmapHost);

  url.searchParams.set("api_key", config.apiKey);
  url.searchParams.set("maptype", `${accountName}-${styleName}`);
  url.searchParams.set("size", "166x166");
  url.searchParams.set("center", "47.329,12.787");
  url.searchParams.set("zoom", "12");

  return url.toString();
}

/**
 * Collection of pre-defined map styles.
 */
export const STYLES = {
  TERRAIN: "maptoolkit://styles/toursprung/terrain",
  LIGHT: "maptoolkit://styles/toursprung/light",
  DARK: "maptoolkit://styles/toursprung/dark",
  CITY: "maptoolkit://styles/citymaps2go/Ulmon",
  GREEN: "maptoolkit://styles/toursprung/printmaps-green",
  WINTER: "maptoolkit://styles/toursprung/terrainwinter",
};
