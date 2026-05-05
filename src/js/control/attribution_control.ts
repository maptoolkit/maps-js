import { Map } from "../core/map";
import { IControl, ControlPosition } from "./control";

import {
  Map as maplibreMap,
  AttributionControl as maplibreAttributionControl,
  AttributionControlOptions as maplibreAttributionControlOptions,
  ScaleControl as maplibreScaleControl,
  ScaleControlOptions as maplibreScaleControlOptions,
} from "maplibre-gl";

/**
 * Options for configuring the {@link AttributionControl}.
 * @maptoolkit
 */
export type AttributionControlOptions = maplibreAttributionControlOptions & {
  /**
   * Options for configuring the {@link ScaleControl}.
   * Set to `false` to disable.
   * @defaultValue `{ maxWidth: 80, unit: "metric" }` for the {@link maplibre.ScaleControlOptions}
   */
  scale?: false | maplibreScaleControlOptions;
};

/**
 * Default options for the {@link AttributionControl}.
 */
export const defaultAttributionControlOptions: AttributionControlOptions = {
  scale: { maxWidth: 80, unit: "metric" },
};

/**
 * Presents the map's attribution information and optionally its current scale.
 * @maptoolkit
 */
export class AttributionControl implements IControl {
  options: AttributionControlOptions;
  _map?: Map;
  _container?: HTMLElement;
  _attribCtrl: maplibreAttributionControl;
  _scaleCtrl?: maplibreScaleControl;

  /**
   * @param options - Options for configuring the attribution control.
   */
  constructor(options?: AttributionControlOptions) {
    this.options = Object.assign(defaultAttributionControlOptions, options);

    this._attribCtrl = new maplibreAttributionControl(this.options);

    if (this.options.scale !== false) {
      this._scaleCtrl = new maplibreScaleControl(this.options.scale);
    }
  }

  getDefaultPosition(): ControlPosition {
    return "bottom-right";
  }

  onAdd(map: Map) {
    this._map = map;

    const attrib = this._attribCtrl.onAdd(map as maplibreMap);
    attrib.classList.add("maptoolkit-ctrl-attrib");

    if (this._scaleCtrl) {
      const scale = this._scaleCtrl.onAdd(map as maplibreMap);
      scale.classList.remove("maplibregl-ctrl");
      attrib.appendChild(scale);
    }

    this._container = attrib;
    return this._container;
  }

  onRemove() {
    if (this._container?.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = undefined;
  }
}
