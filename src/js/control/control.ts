import { ControlPosition as maplibreControlPosition } from "maplibre-gl";
import { Map } from "../core/map";

/**
 * A position defintion for the control to be placed.
 * When two or more controls are placed in the same location they are stacked.
 * @maptoolkit
 */
export type ControlPosition = maplibreControlPosition | "top-center" | "bottom-center";

/**
 * Interface for interactive controls added to the map. This is a
 * specification for implementers to model: it is not
 * an exported method or class.
 *
 * Controls must implement `onAdd` and `onRemove`, and must own an
 * element, which is often a `div` element. To use MapLibre GL JS's
 * default control styling, add the `maplibregl-ctrl` class to your control's
 * node.
 *
 * @example
 * ```ts
 * class HelloWorldControl: IControl {
 *     onAdd(map) {
 *         this._map = map;
 *         this._container = document.createElement('div');
 *         this._container.className = 'maplibregl-ctrl';
 *         this._container.textContent = 'Hello, world';
 *         return this._container;
 *     }
 *
 *     onRemove() {
 *         this._container.parentNode.removeChild(this._container);
 *         this._map = undefined;
 *     }
 * }
 * ```
 */
export interface IControl {
  /**
   * Register a control on the map and give it a chance to register event listeners
   * and resources. This method is called by {@link Map#addControl}
   * internally.
   *
   * @param map - the Map this control will be added to
   * @returns The control's container element. This should
   * be created by the control and returned by onAdd without being attached
   * to the DOM: the map will insert the control's element into the DOM
   * as necessary.
   */
  onAdd(map: Map): HTMLElement;
  /**
   * Unregister a control on the map and give it a chance to detach event listeners
   * and resources. This method is called by {@link Map#removeControl}
   * internally.
   *
   * @param map - the Map this control will be removed from
   */
  onRemove(map: Map): void;
  /**
   * Optionally provide a default position for this control. If this method
   * is implemented and {@link Map#addControl} is called without the `position`
   * parameter, the value returned by getDefaultPosition will be used as the
   * control's position.
   *
   * @returns a control position, one of the values valid in addControl.
   */
  readonly getDefaultPosition?: () => ControlPosition;
}
