import { Evented } from "maplibre-gl";

class Config extends Evented {
  private _apiKey: string = "";
  set apiKey(k: string) {
    this._apiKey = k;
    this.fire("config.apiKey.set");
  }
  get apiKey(): string {
    if (!this._apiKey) {
      console.warn("Maptoolkit API key is not set.");
    }
    return this._apiKey;
  }

  private _pixelRatio: number = 1;
  set pixelRatio(k: number) {
    this._pixelRatio = k;
    this.fire("config.pixelRatio.set");
  }
  get pixelRatio(): number {
    if (!this._pixelRatio) {
      console.warn("Maptoolkit API key is not set.");
    }
    return this._pixelRatio;
  }

  private _stylesHost: string = "https://styles.maptoolkit.net";
  set stylesHost(k: string) {
    this._stylesHost = k;
    this.fire("config.stylesHost.set");
  }
  get stylesHost(): string {
    return this._stylesHost;
  }

  private _iconsHost: string = "https://icons.maptoolkit.net";
  set iconsHost(k: string) {
    this._iconsHost = k;
    this.fire("config.iconsHost.set");
  }
  get iconsHost(): string {
    return this._iconsHost;
  }

  private _dataconnectorHost: string = "https://dataconnector.maptoolkit.net";
  set dataconnectorHost(k: string) {
    this._dataconnectorHost = k;
    this.fire("config.routingHost.set");
  }
  get dataconnectorHost(): string {
    return this._dataconnectorHost;
  }

  private _routingHost: string = "https://routing.maptoolkit.net";
  set routingHost(k: string) {
    this._routingHost = k;
    this.fire("config.routingHost.set");
  }
  get routingHost(): string {
    return this._routingHost;
  }

  private _staticmapHost: string = "https://staticmap.maptoolkit.net";
  set staticmapHost(k: string) {
    this._staticmapHost = k;
    this.fire("config.staticmapHost.set");
  }
  get staticmapHost(): string {
    return this._staticmapHost;
  }
}

export const config = new Config();
