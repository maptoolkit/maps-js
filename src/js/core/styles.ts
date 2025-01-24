import { StyleSpecification as maplibreStyleSpecification } from "maplibre-gl";
import { config } from "./config";

export type StyleDefSpecification = {
  id: string;
  value: string | maplibreStyleSpecification;
  image?: string;
};

function createStaticImage(accountName: string, styleName: string) {
  return `https://staticmap.maptoolkit.net/?style=${accountName}-${styleName}&size=166x166&center=47.329,12.787&zoom=12&api_key=${config.apiKey}`;
}

class DefaultStyles {
  private _terrain: StyleDefSpecification = { id: "Terrain", value: "maptoolkit://style/toursprung/terrain" };
  private _light: StyleDefSpecification = { id: "Light", value: "maptoolkit://style/toursprung/light" };
  private _dark: StyleDefSpecification = { id: "Dark", value: "maptoolkit://style/toursprung/dark" };
  private _city: StyleDefSpecification = { id: "Dark", value: "maptoolkit://style/ulmon/Ulmon" };
  private _green: StyleDefSpecification = { id: "Green", value: "maptoolkit://style/toursprung/printmaps-green" };
  private _winter: StyleDefSpecification = { id: "Winter", value: "maptoolkit://style/toursprung/terrainwinter" };
  
  get Terrain() {
    return { ...this._terrain, image: createStaticImage("toursprung", "terrain") };
  }
  get Light() {
    return { ...this._light, image: createStaticImage("toursprung", "light") };
  }
  get Dark() {
    return { ...this._dark, image: createStaticImage("toursprung", "dark") };
  }
  get City() {
    return { ...this._city, image: createStaticImage("ulmon", "Ulmon") };
  }
  get Green() {
    return { ...this._green, image: createStaticImage("toursprung", "printmaps-green") };
  }
  get Winter() {
    return { ...this._winter, image: createStaticImage("toursprung", "terrainwinter") };
  }

  toArray(): StyleDefSpecification[] {
    return [this.Terrain, this.Light, this.Dark, this.City, this.Green, this.Winter];
  }
}

/**
 * Collection of pre-defined map styles.
 */
export const Styles = new DefaultStyles();
