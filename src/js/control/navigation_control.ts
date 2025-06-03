import { Map } from "../core/map";
import { IControl } from "./control";
import { TerrainControl, TerrainControlOptions } from "./terrain_control";
import { PitchControl, PitchControlOptions } from "./pitch_control";
import { CompassControl, CompassControlOptions } from "./compass_control";

import {
  NavigationControl as maplibreNavigationControl,
  NavigationControlOptions as maplibreNavigationControlOptions,
  ControlPosition as maplibreControlPosition,
  Listener as maplibreListener,
} from "maplibre-gl";

export type NavigationControlOptions = {
  navigationControl?: maplibreNavigationControlOptions;
  terrainControl?: false | TerrainControlOptions;
  pitchControl?: false | PitchControlOptions;
  compassControl?: false | CompassControlOptions;
};

export const defaultNavigationControlOptions: NavigationControlOptions = {
  navigationControl: { showCompass: false },
  pitchControl: { autoHide: true },
};

export class NavigationControl implements IControl {
  options: NavigationControlOptions;
  _map?: Map;
  _container?: HTMLElement;
  _navigationControl: maplibreNavigationControl;
  _terrainControl?: TerrainControl;
  _pitchControl?: PitchControl;
  _compassControl?: CompassControl;
  _onPitch?: maplibreListener;

  constructor(options?: NavigationControlOptions) {
    this.options = Object.assign(defaultNavigationControlOptions, options);

    this._navigationControl = new maplibreNavigationControl(this.options.navigationControl);
    if (this.options.terrainControl !== false) {
      this._terrainControl = new TerrainControl(this.options.terrainControl);
    }
    if (this.options.pitchControl !== false) {
      this._pitchControl = new PitchControl(this.options.pitchControl);
    }
    if (this.options.compassControl !== false) {
      this._compassControl = new CompassControl(this.options.compassControl);
    }
  }

  getDefaultPosition(): maplibreControlPosition {
    return "bottom-right";
  }

  onAdd(map: Map) {
    this._container = document.createElement("div");

    this._container.classList.add("maptoolkit-ctrl-navigation");

    this._container.appendChild(this._navigationControl.onAdd(map));

    if (this._compassControl instanceof CompassControl) {
      //map.addControl(this._compassControl);
      this._container.appendChild(this._compassControl.onAdd(map));
    }

    if (this._pitchControl instanceof PitchControl) {
      //map.addControl(this._pitchControl);
      this._container.appendChild(this._pitchControl.onAdd(map));
    }

    if (this._terrainControl instanceof TerrainControl) {
      //map.addControl(this._terrainControl);
      this._container.appendChild(this._terrainControl.onAdd(map));
    }

    return this._container;
  }

  onRemove() {
    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = undefined;
  }
}
