import { Evented } from "maplibre-gl";

class Config extends Evented {
  private _apiKey: string = "";

  set apiKey(k: string) {
    this._apiKey = k;
    this.fire("config.apiKey.set");
  }

  get apiKey(): string {
    return this._apiKey;
  }
}

export const config = new Config();
