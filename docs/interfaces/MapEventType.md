[Maptoolkit JS](../README.md) / MapEventType

# MapEventType

`MapEventType` - a mapping between the event name and the event value.
These events are used with the [Map.on](../classes/Map.md#on) method.
When using a `layerId` with [Map.on](../classes/Map.md#on) method, please refer to [MapLayerEventType](../type-aliases/MapLayerEventType.md).
The following example can be used for all the events.

## Example

```ts
// Initialize the map
let map = new Map({ // map options });
// Set an event listener
map.on('the-event-name', () => {
  console.log('An event has occurred!');
});
```

## Properties

### boxzoomcancel

> **boxzoomcancel**: [`MapLibreZoomEvent`](../type-aliases/MapLibreZoomEvent.md)

Fired when the user cancels a "box zoom" interaction, or when the bounding box does not meet the minimum size threshold.
See BoxZoomHandler.

***

### boxzoomend

> **boxzoomend**: [`MapLibreZoomEvent`](../type-aliases/MapLibreZoomEvent.md)

Fired when a "box zoom" interaction ends.  See BoxZoomHandler.

***

### boxzoomstart

> **boxzoomstart**: [`MapLibreZoomEvent`](../type-aliases/MapLibreZoomEvent.md)

Fired when a "box zoom" interaction starts. See BoxZoomHandler.

***

### click

> **click**: `MapMouseEvent`

Fired when a pointing device (usually a mouse) is pressed and released at the same point on the map.

#### See

 - [Measure distances](https://maplibre.org/maplibre-gl-js/docs/examples/measure-distances/)
 - [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-the-map-on-a-clicked-symbol/)

***

### contextmenu

> **contextmenu**: `MapMouseEvent`

Fired when the right button of the mouse is clicked or the context menu key is pressed within the map.

***

### cooperativegestureprevented

> **cooperativegestureprevented**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`TouchEvent` \| `WheelEvent`\> & `object`

Fired whenever the cooperativeGestures option prevents a gesture from being handled by the map.
This is useful for showing your own UI when this happens.

#### Type declaration

##### gestureType

> **gestureType**: `"wheel_zoom"` \| `"touch_pan"`

***

### data

> **data**: [`MapDataEvent`](../type-aliases/MapDataEvent.md)

Fired when any map data loads or changes. See [MapDataEvent](../type-aliases/MapDataEvent.md) for more information.

#### See

[Display HTML clusters with custom properties](https://maplibre.org/maplibre-gl-js/docs/examples/display-html-clusters-with-custom-properties/)

***

### dataabort

> **dataabort**: [`MapDataEvent`](../type-aliases/MapDataEvent.md)

Fired when a request for one of the map's sources' tiles or data is aborted.

***

### dataloading

> **dataloading**: [`MapDataEvent`](../type-aliases/MapDataEvent.md)

Fired when any map data (style, source, tile, etc) begins loading or
changing asynchronously. All `dataloading` events are followed by a `data`,
`dataabort` or `error` event.

***

### dblclick

> **dblclick**: `MapMouseEvent`

Fired when a pointing device (usually a mouse) is pressed and released twice at the same point on the map in rapid succession.

!!! note
    Under normal conditions, this event will be preceded by two `click` events.

***

### drag

> **drag**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent`\>

Fired repeatedly during a "drag to pan" interaction. See DragPanHandler.

***

### dragend

> **dragend**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent`\>

Fired when a "drag to pan" interaction ends. See DragPanHandler.

#### See

[Create a draggable marker](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-marker/)

***

### dragstart

> **dragstart**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent`\>

Fired when a "drag to pan" interaction starts. See DragPanHandler.

***

### error

> **error**: `ErrorEvent`

Fired when an error occurs. This is GL JS's primary error reporting
mechanism. We use an event instead of `throw` to better accommodate
asynchronous operations. If no listeners are bound to the `error` event, the
error will be printed to the console.

***

### idle

> **idle**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)

Fired after the last frame rendered before the map enters an
"idle" state:

- No camera transitions are in progress
- All currently requested tiles have loaded
- All fade/transition animations have completed

***

### load

> **load**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)

Fired immediately after all necessary resources have been downloaded
and the first visually complete rendering of the map has occurred.

#### See

 - [Draw GeoJSON points](https://maplibre.org/maplibre-gl-js/docs/examples/draw-geojson-points/)
 - [Add live realtime data](https://maplibre.org/maplibre-gl-js/docs/examples/add-live-realtime-data/)
 - [Animate a point](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-point/)

***

### mousedown

> **mousedown**: `MapMouseEvent`

Fired when a pointing device (usually a mouse) is pressed within the map.

#### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

### mousemove

> **mousemove**: `MapMouseEvent`

Fired when a pointing device (usually a mouse) is moved while the cursor is inside the map.
As you move the cursor across the map, the event will fire every time the cursor changes position within the map.

#### See

 - [Get coordinates of the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-coordinates-of-the-mouse-pointer/)
 - [Highlight features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/)
 - [Display a popup on over](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/)

***

### mouseout

> **mouseout**: `MapMouseEvent`

Fired when a point device (usually a mouse) leaves the map's canvas.

***

### mouseover

> **mouseover**: `MapMouseEvent`

Fired when a pointing device (usually a mouse) is moved within the map.
As you move the cursor across a web page containing a map,
the event will fire each time it enters the map or any child elements.

#### See

 - [Get coordinates of the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-coordinates-of-the-mouse-pointer/)
 - [Highlight features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/)
 - [Display a popup on hover](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/)

***

### mouseup

> **mouseup**: `MapMouseEvent`

Fired when a pointing device (usually a mouse) is released within the map.

#### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

### move

> **move**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent` \| `WheelEvent`\>

Fired repeatedly during an animated transition from one view to
another, as the result of either user interaction or methods such as [Map.flyTo](../classes/Map.md#flyto).

#### See

[Display HTML clusters with custom properties](https://maplibre.org/maplibre-gl-js/docs/examples/display-html-clusters-with-custom-properties/)

***

### moveend

> **moveend**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent` \| `WheelEvent`\>

Fired just after the map completes a transition from one
view to another, as the result of either user interaction or methods such as [Map.jumpTo](../classes/Map.md#jumpto).

#### See

[Display HTML clusters with custom properties](https://maplibre.org/maplibre-gl-js/docs/examples/display-html-clusters-with-custom-properties/)

***

### movestart

> **movestart**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent` \| `WheelEvent`\>

Fired just before the map begins a transition from one
view to another, as the result of either user interaction or methods such as [Map.jumpTo](../classes/Map.md#jumpto).

***

### pitch

> **pitch**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent`\>

Fired repeatedly during the map's pitch (tilt) animation between
one state and another as the result of either user interaction
or methods such as [Map.flyTo](../classes/Map.md#flyto).

***

### pitchend

> **pitchend**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent`\>

Fired immediately after the map's pitch (tilt) finishes changing as
the result of either user interaction or methods such as [Map.flyTo](../classes/Map.md#flyto).

***

### pitchstart

> **pitchstart**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent`\>

Fired whenever the map's pitch (tilt) begins a change as
the result of either user interaction or methods such as [Map.flyTo](../classes/Map.md#flyto) .

***

### projectiontransition

> **projectiontransition**: [`MapProjectionEvent`](../type-aliases/MapProjectionEvent.md)

Fired when map's projection is modified in other ways than by map being moved.

***

### remove

> **remove**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)

Fired immediately after the map has been removed with [Map.remove](../classes/Map.md#remove).

***

### render

> **render**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)

Fired whenever the map is drawn to the screen, as the result of

- a change to the map's position, zoom, pitch, or bearing
- a change to the map's style
- a change to a GeoJSON source
- the loading of a vector tile, GeoJSON file, glyph, or sprite

***

### resize

> **resize**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)

Fired immediately after the map has been resized.

***

### rotate

> **rotate**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent`\>

Fired repeatedly during a "drag to rotate" interaction. See DragRotateHandler.

***

### rotateend

> **rotateend**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent`\>

Fired when a "drag to rotate" interaction ends. See DragRotateHandler.

***

### rotatestart

> **rotatestart**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent`\>

Fired when a "drag to rotate" interaction starts. See DragRotateHandler.

***

### sourcedata

> **sourcedata**: [`MapSourceDataEvent`](../type-aliases/MapSourceDataEvent.md)

Fired when one of the map's sources loads or changes, including if a tile belonging
to a source loads or changes.

***

### sourcedataabort

> **sourcedataabort**: [`MapSourceDataEvent`](../type-aliases/MapSourceDataEvent.md)

Fired when a request for one of the map's sources' data is aborted.

***

### sourcedataloading

> **sourcedataloading**: [`MapSourceDataEvent`](../type-aliases/MapSourceDataEvent.md)

Fired when one of the map's sources begins loading or changing asynchronously.
All `sourcedataloading` events are followed by a `sourcedata`, `sourcedataabort` or `error` event.

***

### styledata

> **styledata**: [`MapStyleDataEvent`](../type-aliases/MapStyleDataEvent.md)

Fired when the map's style loads or changes.

***

### styledataloading

> **styledataloading**: [`MapStyleDataEvent`](../type-aliases/MapStyleDataEvent.md)

Fired when the map's style begins loading or changing asynchronously.
All `styledataloading` events are followed by a `styledata`
or `error` event.

***

### styleimagemissing

> **styleimagemissing**: [`MapStyleImageMissingEvent`](../type-aliases/MapStyleImageMissingEvent.md)

Fired when an icon or pattern needed by the style is missing. The missing image can
be added with [Map.addImage](../classes/Map.md#addimage) within this event listener callback to prevent the image from
being skipped. This event can be used to dynamically generate icons and patterns.

#### See

[Generate and add a missing icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/generate-and-add-a-missing-icon-to-the-map/)

***

### terrain

> **terrain**: [`MapTerrainEvent`](../type-aliases/MapTerrainEvent.md)

Fired when terrain is changed

***

### touchcancel

> **touchcancel**: `MapTouchEvent`

Fired when a [`touchcancel`](https://developer.mozilla.org/en-US/docs/Web/Events/touchcancel) event occurs within the map.

***

### touchend

> **touchend**: `MapTouchEvent`

Fired when a [`touchend`](https://developer.mozilla.org/en-US/docs/Web/Events/touchend) event occurs within the map.

#### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

### touchmove

> **touchmove**: `MapTouchEvent`

Fired when a [`touchmove`](https://developer.mozilla.org/en-US/docs/Web/Events/touchmove) event occurs within the map.

#### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

### touchstart

> **touchstart**: `MapTouchEvent`

Fired when a [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) event occurs within the map.

#### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

### webglcontextlost

> **webglcontextlost**: [`MapContextEvent`](../type-aliases/MapContextEvent.md)

Fired when the WebGL context is lost.

***

### webglcontextrestored

> **webglcontextrestored**: [`MapContextEvent`](../type-aliases/MapContextEvent.md)

Fired when the WebGL context is restored.

***

### wheel

> **wheel**: `MapWheelEvent`

Fired when a [`wheel`](https://developer.mozilla.org/en-US/docs/Web/Events/wheel) event occurs within the map.

***

### zoom

> **zoom**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent` \| `WheelEvent`\>

Fired repeatedly during an animated transition from one zoom level to another,
as the result of either user interaction or methods such as [Map.flyTo](../classes/Map.md#flyto).

***

### zoomend

> **zoomend**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent` \| `WheelEvent`\>

Fired just after the map completes a transition from one zoom level to another,
as the result of either user interaction or methods such as [Map.flyTo](../classes/Map.md#flyto).

***

### zoomstart

> **zoomstart**: [`MapLibreEvent`](../type-aliases/MapLibreEvent.md)\<`undefined` \| `MouseEvent` \| `TouchEvent` \| `WheelEvent`\>

Fired just before the map begins a transition from one zoom level to another,
as the result of either user interaction or methods such as [Map.flyTo](../classes/Map.md#flyto).
