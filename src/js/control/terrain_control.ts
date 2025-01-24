import { Map } from "../core/map";
import { IControl } from "./control";
import { Terrain } from "../core/terrain";

import { ControlPosition as maplibreControlPosition, Listener as maplibreListener } from "maplibre-gl";

/**
 * Options for configuring the {@link TerrainControl}.
 */
export type TerrainControlOptions = {
  /**
   * Pitch value used on toggle.
   * @defaultValue `60` degrees
   */
  pitch?: number;
};

/**
 * Default options for the {@link TerrainControl}.
 */
export const defaultTerrainControlOptions: TerrainControlOptions = {
  pitch: 60,
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
  _onPitch?: maplibreListener;
  _onPitchEnd?: maplibreListener;

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

    function updateButton() {
      button.innerText = map.transform.pitch > 0 ? "2D" : "3D";
    }
    updateButton();

    this._onPitch = (ev) => {
      if (!this._active) this._active = true;
      if (map.transform.pitch > 0 && !this._enabled) {
        updateButton();
        if (ev.originalEvent instanceof MouseEvent) {
          this._terrain(true);
          this._loaded = true;
        } else {
          if (this._loaded) this._terrain(true);
          else
            map.once("pitchend", () => {
              this._terrain(true);
              this._loaded = true;
            });
        }
        this._enabled = true;
      } else if (map.transform.pitch == 0 && this._enabled) {
        updateButton();
        this._terrain(false);
        this._enabled = false;
      }
    };
    this._onPitchEnd = () => {
      this._active = false;
    };
    map.on("pitch", this._onPitch);
    map.on("pitchend", this._onPitchEnd);

    this._onPitch({} as Event);
    this._onPitchEnd({} as Event);

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
    }

    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = undefined;
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
