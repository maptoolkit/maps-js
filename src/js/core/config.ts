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

  private _routingHost: string = "https://routing.maptoolkit.net";
  set routingHost(k: string) {
    this._routingHost = k;
    this.fire("config.routingHost.set");
  }
  get routingHost(): string {
    return this._routingHost;
  }
}

export const config = new Config();
