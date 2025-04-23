import { Map } from "../core/map";
import { IControl } from "./control";
import { Terrain } from "../core/terrain";

import {
  ControlPosition as maplibreControlPosition,
  Listener as maplibreListener,
  ProjectionSpecification as maplibreProjectionSpecification,
} from "maplibre-gl";

/**
 * Options for configuring the {@link TerrainControl}.
 */
export type TerrainControlOptions = {
  /**
   * Pitch value used on toggle.
   * @defaultValue `60` degrees
   */
  pitch?: number;
  /**
   * Globe projection used on toggle.
   * @defaultValue `false`
   */
  globe?: boolean;
};

/**
 * Default options for the {@link TerrainControl}.
 */
export const defaultTerrainControlOptions: TerrainControlOptions = {
  pitch: 60,
  globe: false,
};

// BUG: Map stuck after tilt with mouse, back to 0 and then use tilt via control button (no errors)
/**
 * Provides a button to toggle the map's terrain.
 *
 * Used by the {@link NavigationControl} class.
 */
export class TerrainControl implements IControl {
  options: TerrainControlOptions;
  _map?: Map;
  _container?: HTMLElement;
  _active: boolean;
  _enabled: boolean;
  _loaded: boolean;
  _projection?: maplibreProjectionSpecification;
  _onPitch?: maplibreListener;
  _onPitchEnd?: maplibreListener;
  _onStyleSet?: maplibreListener;

  /**
   * @param options - Options for configuring the terrain control.
   */
  constructor(options?: TerrainControlOptions) {
    this.options = Object.assign(defaultTerrainControlOptions, options);
    this._active = false;
    this._enabled = false;
    this._loaded = false;
  }

  getDefaultPosition(): maplibreControlPosition {
    return "bottom-left";
  }

  onAdd(map: Map) {
    this._map = map;
    this._container = document.createElement("div");
    this._container.classList.add("maplibregl-ctrl", "maplibregl-ctrl-group", "maptoolkit-ctrl", "maptoolkit-ctrl-terrain");

    const button = document.createElement("button");
    button.title = map._getUIString("TerrainControl.ToggleTilt");
    button.addEventListener("click", () => {
      if (!this._active) {
        if (this._enabled) {
          this.disable();
        } else {
          this.enable();
        }
      }
    });
    this._container.appendChild(button);

    function _updateButton() {
      button.innerText = map.transform.pitch > 0 ? "2D" : "3D";
    }
    _updateButton();

    this._onPitch = (ev) => {
      if (!this._active) this._active = true;
      if (map.transform.pitch > 0 && !this._enabled) {
        _updateButton();
        this._enabled = true;
        if (ev.originalEvent instanceof MouseEvent) {
          this._update();
          this._loaded = true;
        } else {
          if (this._loaded) {
            this._update();
          } else {
            map.once("pitchend", () => {
              this._update();
              this._loaded = true;
            });
          }
        }
      } else if (map.transform.pitch == 0 && this._enabled) {
        _updateButton();
        this._update();
        this._enabled = false;
      }
    };
    this._onPitchEnd = () => {
      this._active = false;
    };
    this._onStyleSet = () => {
      if (this._map) {
        this._map.once("styledata", (ev) => {
          if (typeof this._projection === "undefined") {
            this._projection = ev.target.getProjection() || { type: "mercator" };
          }
          this._update();
        });
      }
    };

    map.on("pitch", this._onPitch);
    map.on("pitchend", this._onPitchEnd);
    map.on("style.set", this._onStyleSet);

    // Trigger initial update
    this._onStyleSet({ target: map });

    return this._container;
  }

  onRemove() {
    this.disable();

    if (this._map) {
      if (this._onPitch) {
        this._map.off("pitch", this._onPitch);
      }
      if (this._onPitchEnd) {
        this._map.off("pitchend", this._onPitchEnd);
      }
      if (this._onStyleSet) {
        this._map.off("style.set", this._onStyleSet);
      }
    }

    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = undefined;
  }

  _update() {
    this._terrain(this._enabled);
    if (this.options.globe) {
      this._globe(this._enabled);
    }
  }

  _terrain(enable: boolean) {
    if (this._map) {
      if (this._map.style._loaded) {
        if (enable === true) {
          if (!this._map.getSource("maptoolkit-terrain")) {
            this._map.addSource("maptoolkit-terrain", Terrain);
          }
          this._map.setTerrain({ source: "maptoolkit-terrain" });
        } else {
          this._map.setTerrain(null);
        }
      } else {
        this._map.once("styledata", () => this._terrain(enable));
      }
    }
  }

  _globe(enable: boolean) {
    if (this._map) {
      if (this._map.style._loaded) {
        if (this._projection && this._projection.type !== "globe") {
          if (enable === true) {
            this._map.setProjection({ type: "globe" });
          } else {
            this._map.setProjection(this._projection);
          }
        }
      } else {
        this._map.once("styledata", () => this._globe(enable));
      }
    }
  }

  enable(): this {
    if (this._map && !this._enabled && this._map.transform.pitch === 0) {
      this._map.easeTo({ pitch: this.options.pitch });
    }
    return this;
  }

  disable(): this {
    if (this._map && this._enabled && this._map.transform.pitch > 0) {
      this._map.easeTo({ pitch: 0 });
    }
    return this;
  }

  isEnabled(): boolean {
    return this._enabled;
  }

  isActive(): boolean {
    return this._active;
  }

  isLoaded(): boolean {
    return this._loaded;
  }
}
