import { Map } from "../core/map";
import { IControl } from "./control";

import { ControlPosition as maplibreControlPosition, Listener as maplibreListener } from "maplibre-gl";

/**
 * Options for configuring the {@link PitchControl}.
 */
export type PitchControlOptions = {
  /**
   * The slider control's knob size in pixels.
   * @defaultValue `16` pixels
   */
  knobSize?: number;
  /**
   * The slider control's vertical size in pixels.
   * @defaultValue `52` pixels
   */
  sliderSize?: number;
  /**
   * If set to `true`, the control will hide when the map's pitch is 0, with a delay of 400 ms.
   * @defaultValue `false`
   */
  autoHide?: boolean;
};

/**
 * Default options for the {@link PitchControl}.
 */
export const defaultPitchControlOptions: PitchControlOptions = {
  knobSize: 16,
  sliderSize: 52,
  autoHide: false,
};

/**
 * Provides an interactable slider for the map's pitch.
 * 
 * Used by the {@link NavigationControl} class.
 */
export class PitchControl implements IControl {
  options: PitchControlOptions;
  _map?: Map;
  _container?: HTMLElement;
  _active: boolean;
  _onMouseDown?: (ev: MouseEvent | TouchEvent) => void;
  _onMouseUp?: (ev: MouseEvent | TouchEvent) => void;
  _onMouseMove?: (ev: MouseEvent | TouchEvent) => void;
  _onPitch?: maplibreListener;

  /**
   * @param options - Options for configuring the pitch control.
   */
  constructor(options?: PitchControlOptions) {
    this.options = Object.assign(defaultPitchControlOptions, options);
    this._active = false;
  }

  getDefaultPosition(): maplibreControlPosition {
    return "bottom-left";
  }

  onAdd(map: Map) {
    this._map = map;

    const knobSize = this.options.knobSize || defaultPitchControlOptions.knobSize || 16;
    const sliderSize = this.options.sliderSize || defaultPitchControlOptions.sliderSize || 52;

    this._container = document.createElement("div");
    this._container.classList.add("maplibregl-ctrl", "maptoolkit-ctrl", "maptoolkit-ctrl-pitch");
    this._container.style.height = `${sliderSize}px`;

    const slide = document.createElement("div");
    slide.classList.add("maptoolkit-ctrl-pitch-slide");

    const knob = document.createElement("div");
    knob.classList.add("maptoolkit-ctrl-pitch-knob");
    knob.title = map._getUIString("PitchControl.ChangePitch");
    knob.style.width = knob.style.height = `${knobSize}px`;
    knob.style.margin = `-${knobSize / 2}px calc(50% - ${knobSize / 2}px)`;

    let pageY = 0;
    let pitch = (map.getPitch() / map.getMaxPitch()) * (sliderSize - knobSize);
    let pitch2 = pitch;
    this._onMouseDown = (ev: MouseEvent | TouchEvent) => {
      this._active = true;
      pageY = ev instanceof TouchEvent ? ev.touches[0]?.pageY : ev.pageY;
      pitch = (map.getPitch() / map.getMaxPitch()) * (sliderSize - knobSize);
      ev.stopPropagation();
      ev.preventDefault();
      return false;
    };
    this._onMouseMove = (ev: MouseEvent | TouchEvent) => {
      if (this._active) {
        let pageYdiff = pageY - (ev instanceof TouchEvent ? ev.touches[0]?.pageY : ev.pageY);
        pitch2 = Math.max(0, Math.min(sliderSize - knobSize, pitch + pageYdiff));
        map.setPitch((pitch2 / (sliderSize - knobSize)) * map.getMaxPitch());
      }
    };
    this._onMouseUp = () => {
      this._active = false;
      pitch = pitch2;
    };
    knob.addEventListener("mousedown", this._onMouseDown);
    knob.addEventListener("touchstart", this._onMouseDown);
    window.addEventListener("mousemove", this._onMouseMove);
    window.addEventListener("touchmove", this._onMouseMove);
    window.addEventListener("mouseup", this._onMouseUp);
    window.addEventListener("touchend", this._onMouseUp);

    let _pitchDebounce: ReturnType<typeof setTimeout>;
    this._onPitch = () => {
      knob.style.top = sliderSize - (map.getPitch() / map.getMaxPitch()) * sliderSize + "px";

      clearTimeout(_pitchDebounce);
      if (this.options.autoHide) {
        if (this.isHidden() && map.transform.pitch > 0) {
          this.show();
        } else if (!this.isHidden() && map.transform.pitch === 0) {
          _pitchDebounce = setTimeout(() => this.hide(), 400);
        }
      }
    };
    map.on("pitch", this._onPitch);
    this._onPitch({} as Event);

    this._container.appendChild(slide);
    this._container.appendChild(knob);

    return this._container;
  }

  onRemove() {
    if (this._onMouseUp) {
      window.removeEventListener("mousedown", this._onMouseUp);
      window.removeEventListener("touchstart", this._onMouseUp);
    }
    if (this._onMouseMove) {
      window.removeEventListener("mousemove", this._onMouseMove);
      window.removeEventListener("touchmove", this._onMouseMove);
    }
    if (this._onMouseUp) {
      window.removeEventListener("mouseup", this._onMouseUp);
      window.removeEventListener("touchend", this._onMouseUp);
    }
    if (this._map && this._onPitch) {
      this._map.off("pitch", this._onPitch);
    }
    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = undefined;
  }

  isActive(): boolean {
    return this._active;
  }

  isHidden(): boolean {
    return this._container ? this._container.classList.contains("maptoolkit-ctrl-pitch-hide") : true;
  }

  show(): this {
    if (this._container) {
      this._container.style.height = `${this.options.sliderSize}px`;
      this._container.classList.remove("maptoolkit-ctrl-pitch-hide");
    }
    return this;
  }

  hide(): this {
    if (this._container) {
      this._container.style.height = "0px";
      this._container.classList.add("maptoolkit-ctrl-pitch-hide");
    }
    return this;
  }
}
