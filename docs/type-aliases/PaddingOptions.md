[Maptoolkit JS](../README.md) / PaddingOptions

# PaddingOptions

> **PaddingOptions** = [`RequireAtLeastOne`](RequireAtLeastOne.md)\<\{ `bottom`: `number`; `left`: `number`; `right`: `number`; `top`: `number`; \}\>

Options for setting padding on calls to methods such as [Map.fitBounds](../classes/Map.md#fitbounds), [Map.fitScreenCoordinates](../classes/Map.md#fitscreencoordinates), and [Map.setPadding](../classes/Map.md#setpadding). Adjust these options to set the amount of padding in pixels added to the edges of the canvas. Set a uniform padding on all edges or individual values for each edge. All properties of this object must be
non-negative integers.

## Examples

```ts
let bbox = [[-79, 43], [-73, 45]];
map.fitBounds(bbox, {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

```ts
let bbox = [[-79, 43], [-73, 45]];
map.fitBounds(bbox, {
  padding: 20
});
```

## See

 - [Fit to the bounds of a LineString](https://maplibre.org/maplibre-gl-js/docs/examples/zoomto-linestring/)
 - [Fit a map to a bounding box](https://maplibre.org/maplibre-gl-js/docs/examples/fitbounds/)
