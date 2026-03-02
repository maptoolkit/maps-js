import { Evented } from "maplibre-gl";

/**
 * The `Config` class manages configuration settings for the whole library.
 * It provides access to settings such as API key, locale, and host URLs for various services.
 */
class Config extends Evented {
  /**
   * @private
   * The current locale.
   * @type {string}
   * @default "en"
   */
  private _locale: string = "en";

  /**
   * Gets the current locale.
   * @returns {string} The current locale.
   */
  get locale(): string {
    return this._locale;
  }

  /**
   * Sets the locale.
   * @param {string} value - The new locale to set.
   * @fires config.locale.set
   */
  set locale(value: string) {
    this._locale = value;
    this.fire("config.locale.set");
  }

  /**
   * @private
   * The Maptoolkit API key.
   * @type {string}
   */
  private _apiKey: string = "";

  /**
   * Gets the current Maptoolkit API key.
   * @returns {string} The current API key.
   * @throws {void} Logs a warning to the console if the API key is not set.
   */
  get apiKey(): string {
    if (!this._apiKey) {
      console.warn("Maptoolkit API key is not set.");
    }
    return this._apiKey;
  }

  /**
   * Sets the Maptoolkit API key.
   * @param {string} value - The new API key to set.
   * @fires config.apiKey.set
   */
  set apiKey(value: string) {
    this._apiKey = value;
    this.fire("config.apiKey.set");
  }

  /**
   * @private
   * The pixel ratio (for high DPI screens).
   * @type {number}
   * @default 1
   */
  private _pixelRatio: number = 1;

  /**
   * Gets the current pixel ratio setting.
   * @returns {number} The current pixel ratio.
   */
  get pixelRatio(): number {
    return this._pixelRatio;
  }

  /**
   * Sets the pixel ratio setting.
   * @param {number} value - The new pixel ratio to set.
   * @fires config.pixelRatio.set
   */
  set pixelRatio(value: number) {
    this._pixelRatio = value;
    this.fire("config.pixelRatio.set");
  }

  /**
   * @private
   * The base URL for the Maptoolkit website.
   * @type {string}
   * @default "https://www.maptoolkit.net"
   */
  private _webHost: string = "https://www.maptoolkit.net";

  /**
   * Gets the base URL for the Maptoolkit website.
   * @returns {string} The base web host URL.
   */
  get webHost(): string {
    return this._webHost;
  }

  /**
   * Sets the base URL for the Maptoolkit website.
   * @param {string} value - The new web host URL to set.
   * @fires config.webHost.set
   */
  set webHost(value: string) {
    this._webHost = value;
    this.fire("config.webHost.set");
  }

  /**
   * @private
   * The base URL for serving static resources.
   * @type {string}
   * @default "https://static.maptoolkit.net"
   */
  private _staticHost: string = "https://static.maptoolkit.net";

  /**
   * Gets the base URL for static resources.
   * @returns {string} The base static host URL.
   */
  get staticHost(): string {
    return this._staticHost;
  }

  /**
   * Sets the base URL for static resources.
   * @param {string} value - The new static host URL to set.
   * @fires config.staticHost.set
   */
  set staticHost(value: string) {
    this._staticHost = value;
    this.fire("config.staticHost.set");
  }

  /**
   * @private
   * The base URL for Maptoolkit style resources.
   * @type {string}
   * @default "https://styles.maptoolkit.net"
   */
  private _stylesHost: string = "https://styles.maptoolkit.net";

  /**
   * Gets the base URL for Maptoolkit style resources.
   * @returns {string} The base styles host URL.
   */
  get stylesHost(): string {
    return this._stylesHost;
  }

  /**
   * Sets the base URL for Maptoolkit style resources.
   * @param {string} value - The new styles host URL to set.
   * @fires config.stylesHost.set
   */
  set stylesHost(value: string) {
    this._stylesHost = value;
    this.fire("config.stylesHost.set");
  }

  /**
   * @private
   * The base URL for Maptoolkit icons.
   * @type {string}
   * @default "https://icons.maptoolkit.net"
   */
  private _iconsHost: string = "https://icons.maptoolkit.net";

  /**
   * Gets the base URL for Maptoolkit icons.
   * @returns {string} The base icons host URL.
   */
  get iconsHost(): string {
    return this._iconsHost;
  }

  /**
   * Sets the base URL for Maptoolkit icons.
   * @param {string} value - The new icons host URL to set.
   * @fires config.iconsHost.set
   */
  set iconsHost(value: string) {
    this._iconsHost = value;
    this.fire("config.iconsHost.set");
  }

  /**
   * @private
   * The base URL for the Maptoolkit data connector service.
   * @type {string}
   * @default "https://data.maptoolkit.net"
   */
  private _dataHost: string = "https://data.maptoolkit.net";

  /**
   * Gets the base URL for the Maptoolkit data connector service.
   * @returns {string} The base data connector host URL.
   */
  get dataHost(): string {
    return this._dataHost;
  }

  /**
   * Sets the base URL for the Maptoolkit data connector service.
   * @param {string} value - The new data connector host URL to set.
   * @fires config.dataHost.set
   */
  set dataHost(value: string) {
    this._dataHost = value;
    this.fire("config.dataHost.set");
  }

  /**
   * @private
   * The base URL for the Maptoolkit routing service.
   * @type {string}
   * @default "https://routing.maptoolkit.net"
   */
  private _routingHost: string = "https://routing.maptoolkit.net";

  /**
   * Gets the base URL for the Maptoolkit routing service.
   * @returns {string} The base routing host URL.
   */
  get routingHost(): string {
    return this._routingHost;
  }

  /**
   * Sets the base URL for the Maptoolkit routing service.
   * @param {string} value - The new routing host URL to set.
   * @fires config.routingHost.set
   */
  set routingHost(value: string) {
    this._routingHost = value;
    this.fire("config.routingHost.set");
  }

  /**
   * @private
   * The base URL for the Maptoolkit geocoding service.
   * @type {string}
   * @default "https://geocoder.maptoolkit.net"
   */
  private _geocoderHost: string = "https://geocoder.maptoolkit.net";

  /**
   * Gets the base URL for the Maptoolkit geocoding service.
   * @returns {string} The base geocoding host URL.
   */
  get geocoderHost(): string {
    return this._geocoderHost;
  }

  /**
   * Sets the base URL for the Maptoolkit geocoding service.
   * @param {string} value - The new geocoding host URL to set.
   * @fires config.geocoderHost.set
   */
  set geocoderHost(value: string) {
    this._geocoderHost = value;
    this.fire("config.geocoderHost.set");
  }

  /**
   * @private
   * The base URL for the Maptoolkit data connector service.
   * @type {string}
   * @default "https://dataconnector.maptoolkit.net"
   */
  private _dataconnectorHost: string = "https://dataconnector.maptoolkit.net";

  /**
   * Gets the base URL for the Maptoolkit data connector service.
   * @returns {string} The base data connector host URL.
   */
  get dataconnectorHost(): string {
    return this._dataconnectorHost;
  }

  /**
   * Sets the base URL for the Maptoolkit data connector service.
   * @param {string} value - The new data connector host URL to set.
   * @fires config.dataconnectorHost.set
   */
  set dataconnectorHost(value: string) {
    this._dataconnectorHost = value;
    this.fire("config.dataconnectorHost.set");
  }

  /**
   * @private
   * The base URL for the Maptoolkit data connector service.
   * @type {string}
   * @default "https://dataconnector.maptoolkit.net"
   */
  private _dataconnectorCdnHost: string = "https://dataconnector-cdn.maptoolkit.net";

  /**
   * Gets the base URL for the Maptoolkit data connector service.
   * @returns {string} The base data connector host URL.
   */
  get dataconnectorCdnHost(): string {
    return this._dataconnectorCdnHost;
  }

  /**
   * Sets the base URL for the Maptoolkit data connector service.
   * @param {string} value - The new data connector host URL to set.
   * @fires config.dataconnectorHost.set
   */
  set dataconnectorCdnHost(value: string) {
    this._dataconnectorCdnHost = value;
    this.fire("config.dataconnectorCdnHost.set");
  }

  /**
   * @private
   * The base URL for the Maptoolkit static map service.
   * @type {string}
   * @default "https://staticmap.maptoolkit.net"
   */
  private _staticmapHost: string = "https://staticmap.maptoolkit.net";

  /**
   * Gets the base URL for the Maptoolkit static map service.
   * @returns {string} The base static map host URL.
   */
  get staticmapHost(): string {
    return this._staticmapHost;
  }

  /**
   * Sets the base URL for the Maptoolkit static map service.
   * @param {string} value - The new static map host URL to set.
   * @fires config.staticmapHost.set
   */
  set staticmapHost(value: string) {
    this._staticmapHost = value;
    this.fire("config.staticmapHost.set");
  }

  /**
   * @private
   * The base URL for the VTC CDN service.
   * @type {string}
   * @default "https://vtc-cdn.maptoolkit.net"
   */
  private _vtcCdnHost: string = "https://vtc-cdn.maptoolkit.net";

  /**
   * Gets the base URL for the VTC CDN service.
   * @returns {string} The base VTC CDN host URL.
   */
  get vtcCdnHost(): string {
    return this._vtcCdnHost;
  }

  /**
   * Sets the base URL for the VTC CDN service.
   * @param {string} value - The new VTC CDN host URL to set.
   * @fires config.vtcCdnHost.set
   */
  set vtcCdnHost(value: string) {
    this._vtcCdnHost = value;
    this.fire("config.vtcCdnHost.set");
  }

  /**
   * @private
   * The base URL for the VTC service.
   * @type {string}
   * @default "https://vtc.maptoolkit.net"
   */
  private _vtcHost: string = "https://vtc.maptoolkit.net";

  /**
   * Gets the base URL for the VTC service.
   * @returns {string} The base VTC host URL.
   */
  get vtcHost(): string {
    return this._vtcHost;
  }

  /**
   * Sets the base URL for the VTC service.
   * @param {string} value - The new VTC host URL to set.
   * @fires config.vtcHost.set
   */
  set vtcHost(value: string) {
    this._vtcHost = value;
    this.fire("config.vtcHost.set");
  }

  /**
   * @private
   * The base URL for the RTC CDN service.
   * @type {string}
   * @default "https://rtc-cdn.maptoolkit.net"
   */
  private _rtcCdnHost: string = "https://rtc-cdn.maptoolkit.net";

  /**
   * Gets the base URL for the RTC CDN service.
   * @returns {string} The base RTC CDN host URL.
   */
  get rtcCdnHost(): string {
    return this._rtcCdnHost;
  }

  /**
   * Sets the base URL for the RTC CDN service.
   * @param {string} value - The new RTC CDN host URL to set.
   * @fires config.rtcCdnHost.set
   */
  set rtcCdnHost(value: string) {
    this._rtcCdnHost = value;
    this.fire("config.rtcCdnHost.set");
  }
}

export const config = new Config();
