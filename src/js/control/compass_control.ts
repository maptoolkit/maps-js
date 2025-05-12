import { Map } from "../core/map";
import { IControl } from "./control";

import { ControlPosition as maplibreControlPosition, Listener as maplibreListener } from "maplibre-gl";

/**
 * Options for configuring the {@link CompassControl}.
 */
export type CompassControlOptions = {};

/**
 * Default options for the {@link CompassControl}.
 */
export const defaultCompassControlOptions: CompassControlOptions = {};

/**
 * Provides an interactable compass for the map's bearing.
 *
 * Used by the {@link NavigationControl} class.
 */
export class CompassControl implements IControl {
  options: CompassControlOptions;
  _map?: Map;
  _container?: HTMLElement;
  _onRotate?: maplibreListener;

  /**
   * @param options - Options for configuring the compass control.
   */
  constructor(options?: CompassControlOptions) {
    this.options = Object.assign(defaultCompassControlOptions, options);
  }

  getDefaultPosition(): maplibreControlPosition {
    return "bottom-left";
  }

  onAdd(map: Map) {
    this._map = map;
    this._container = document.createElement("div");
    this._container.classList.add("maplibregl-ctrl", "maptoolkit-ctrl", "maptoolkit-ctrl-compass");

    const img = document.createElement("div");
    img.classList.add("maptoolkit-ctrl-compass-img");

    const label = document.createElement("div");
    label.classList.add("maptoolkit-ctrl-compass-label");
    label.title = map._getUIString("CompassControl.ResetBearing");
    label.addEventListener("click", () => map.resetNorth());

    const arrowL = document.createElement("div");
    arrowL.classList.add("maptoolkit-ctrl-compass-arrow-left");
    arrowL.title = map._getUIString("CompassControl.RotateLeft");
    arrowL.addEventListener("click", () => map.easeTo({ bearing: map.getBearing() + 90 }));

    const arrowR = document.createElement("div");
    arrowR.classList.add("maptoolkit-ctrl-compass-arrow-right");
    arrowR.title = map._getUIString("CompassControl.RotateRight");
    arrowR.addEventListener("click", () => map.easeTo({ bearing: map.getBearing() - 90 }));

    this._onRotate = () => {
      let bearing = (map.transform.bearing + 360) % 360; // change range from [-180, 180] to [0, 360]
      img.style.transform = `rotate(${bearing * -1}deg)`;

      if (bearing < 0) bearing += 360;
      if (bearing > 315 || bearing <= 45) label.innerText = "N";
      else if (bearing > 45 && bearing <= 135) label.innerText = "E";
      else if (bearing > 135 && bearing <= 225) label.innerText = "S";
      else if (bearing > 225 && bearing <= 315) label.innerText = "W";
    };
    map.on("rotate", this._onRotate);
    this._onRotate({} as Event);

    this._container.appendChild(img);
    this._container.appendChild(arrowL);
    this._container.appendChild(label);
    this._container.appendChild(arrowR);
    return this._container;
  }

  onRemove() {
    if (this._map && this._onRotate) {
      this._map.off("rotate", this._onRotate);
    }
    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = undefined;
  }
}
