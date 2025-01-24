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

    let arrowL = document.createElement("div");
    arrowL.classList.add("maptoolkit-ctrl-compass-arrow-left");
    arrowL.title = map._getUIString("CompassControl.RotateLeft");
    arrowL.addEventListener("click", () => map.easeTo({ bearing: map.getBearing() + 90 }));

    let arrowR = document.createElement("div");
    arrowR.classList.add("maptoolkit-ctrl-compass-arrow-right");
    arrowR.title = map._getUIString("CompassControl.RotateRight");
    arrowR.addEventListener("click", () => map.easeTo({ bearing: map.getBearing() - 90 }));

    this._onRotate = () => {
      let angle = map.transform.angle * (180 / Math.PI);
      img.style.transform = `rotate(${angle}deg)`;
      if (angle < 0) angle += 360;
      if (angle > 315 || angle <= 45) label.innerText = "N";
      else if (angle > 45 && angle <= 135) label.innerText = "E";
      else if (angle > 135 && angle <= 225) label.innerText = "S";
      else if (angle > 225 && angle <= 315) label.innerText = "W";
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
