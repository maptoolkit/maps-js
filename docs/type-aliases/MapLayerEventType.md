[Maptoolkit JS](../README.md) / MapLayerEventType

# MapLayerEventType

> **MapLayerEventType** = `object`

`MapLayerEventType` - a mapping between the event name and the event.
**Note:** These events are compatible with the optional `layerId` parameter.
If `layerId` is included as the second argument in [Map#on](../classes/Map.md#on), the event listener will fire only when the
event action contains a visible portion of the specified layer.
The following example can be used for all the events.

## Example

```ts
// Initialize the map
let map = new Map({ // map options });
// Set an event listener for a specific layer
map.on('the-event-name', 'poi-label', (e) => {
  console.log('An event has occurred on a visible portion of the poi-label layer');
});
```

## Properties

### click

> **click**: [`MapLayerMouseEvent`](MapLayerMouseEvent.md)

Fired when a pointing device (usually a mouse) is pressed and released contains a visible portion of the specified layer.

#### See

 - [Measure distances](https://maplibre.org/maplibre-gl-js/docs/examples/measure/)
 - [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-on-symbol/)

***

### contextmenu

> **contextmenu**: [`MapLayerMouseEvent`](MapLayerMouseEvent.md)

Fired when the right button of the mouse is clicked or the context menu key is pressed within visible portion of the specified layer.

***

### dblclick

> **dblclick**: [`MapLayerMouseEvent`](MapLayerMouseEvent.md)

Fired when a pointing device (usually a mouse) is pressed and released twice contains a visible portion of the specified layer.

**Note:** Under normal conditions, this event will be preceded by two `click` events.

***

### mousedown

> **mousedown**: [`MapLayerMouseEvent`](MapLayerMouseEvent.md)

Fired when a pointing device (usually a mouse) is pressed while inside a visible portion of the specified layer.

#### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/drag-a-point/)

***

### mouseenter

> **mouseenter**: [`MapLayerMouseEvent`](MapLayerMouseEvent.md)

Fired when a pointing device (usually a mouse) enters a visible portion of a specified layer from
outside that layer or outside the map canvas.

#### See

 - [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-on-symbol/)
 - [Display a popup on click](https://maplibre.org/maplibre-gl-js/docs/examples/popup-on-click/)

***

### mouseleave

> **mouseleave**: [`MapLayerMouseEvent`](MapLayerMouseEvent.md)

Fired when a pointing device (usually a mouse) leaves a visible portion of a specified layer, or leaves
the map canvas.

#### See

 - [Highlight features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/hover-styles/)
 - [Display a popup on click](https://maplibre.org/maplibre-gl-js/docs/examples/popup-on-click/)

***

### mousemove

> **mousemove**: [`MapLayerMouseEvent`](MapLayerMouseEvent.md)

Fired when a pointing device (usually a mouse) is moved while the cursor is inside a visible portion of the specified layer.
As you move the cursor across the layer, the event will fire every time the cursor changes position within that layer.

#### See

 - [Get coordinates of the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/mouse-position/)
 - [Highlight features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/hover-styles/)
 - [Display a popup on over](https://maplibre.org/maplibre-gl-js/docs/examples/popup-on-hover/)
 - [Animate symbol to follow the mouse](https://maplibre.org/maplibre-gl-js/docs/examples/animate-symbol-to-follow-mouse/)

***

### mouseout

> **mouseout**: [`MapLayerMouseEvent`](MapLayerMouseEvent.md)

Fired when a point device (usually a mouse) leaves the visible portion of the specified layer.

***

### mouseover

> **mouseover**: [`MapLayerMouseEvent`](MapLayerMouseEvent.md)

Fired when a pointing device (usually a mouse) is moved inside a visible portion of the specified layer.

#### See

 - [Get coordinates of the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/mouse-position/)
 - [Highlight features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/hover-styles/)
 - [Display a popup on hover](https://maplibre.org/maplibre-gl-js/docs/examples/popup-on-hover/)

***

### mouseup

> **mouseup**: [`MapLayerMouseEvent`](MapLayerMouseEvent.md)

Fired when a pointing device (usually a mouse) is released while inside a visible portion of the specified layer.

#### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/drag-a-point/)

***

### touchcancel

> **touchcancel**: [`MapLayerTouchEvent`](MapLayerTouchEvent.md)

Fired when a [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) event occurs within the visible portion of the specified layer.

#### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/drag-a-point/)

***

### touchend

> **touchend**: [`MapLayerTouchEvent`](MapLayerTouchEvent.md)

Fired when a [`touchend`](https://developer.mozilla.org/en-US/docs/Web/Events/touchend) event occurs within the visible portion of the specified layer.

#### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/drag-a-point/)

***

### touchstart

> **touchstart**: [`MapLayerTouchEvent`](MapLayerTouchEvent.md)

Fired when a [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) event occurs within the visible portion of the specified layer.

#### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/drag-a-point/)
