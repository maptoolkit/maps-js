[Maptoolkit JS](../README.md) / MarkerOptions

# MarkerOptions

> **MarkerOptions** = `object`

The Marker options object

## Properties

### anchor?

> `optional` **anchor**: [`PositionAnchor`](PositionAnchor.md)

A string indicating the part of the Marker that should be positioned closest to the coordinate set via Marker#setLngLat.
Options are `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-left'`, `'top-right'`, `'bottom-left'`, and `'bottom-right'`.

#### Default Value

```ts
'center'
```

***

### className?

> `optional` **className**: `string`

Space-separated CSS class names to add to marker element.

***

### clickTolerance?

> `optional` **clickTolerance**: `number`

The max number of pixels a user can shift the mouse pointer during a click on the marker for it to be considered a valid click (as opposed to a marker drag). The default is to inherit map's clickTolerance.

#### Default Value

```ts
0
```

***

### color?

> `optional` **color**: `string`

The color to use for the default marker if options.element is not provided. The default is light blue.

#### Default Value

```ts
'#3FB1CE'
```

***

### draggable?

> `optional` **draggable**: `boolean`

A boolean indicating whether or not a marker is able to be dragged to a new position on the map.

#### Default Value

```ts
false
```

***

### element?

> `optional` **element**: `HTMLElement`

DOM element to use as a marker. The default is a light blue, droplet-shaped SVG marker.

***

### offset?

> `optional` **offset**: [`PointLike`](PointLike.md)

The offset in pixels as a [PointLike](PointLike.md) object to apply relative to the element's center. Negatives indicate left and up.

***

### opacity?

> `optional` **opacity**: `string`

Marker's opacity when it's in clear view (not behind 3d terrain)

#### Default Value

```ts
1
```

***

### opacityWhenCovered?

> `optional` **opacityWhenCovered**: `string`

Marker's opacity when it's behind 3d terrain

#### Default Value

```ts
0.2
```

***

### pitchAlignment?

> `optional` **pitchAlignment**: [`Alignment`](Alignment.md)

`map` aligns the `Marker` to the plane of the map. `viewport` aligns the `Marker` to the plane of the viewport. `auto` automatically matches the value of `rotationAlignment`.

#### Default Value

```ts
'auto'
```

***

### rotation?

> `optional` **rotation**: `number`

The rotation angle of the marker in degrees, relative to its respective `rotationAlignment` setting. A positive value will rotate the marker clockwise.

#### Default Value

```ts
0
```

***

### rotationAlignment?

> `optional` **rotationAlignment**: [`Alignment`](Alignment.md)

`map` aligns the `Marker`'s rotation relative to the map, maintaining a bearing as the map rotates. `viewport` aligns the `Marker`'s rotation relative to the viewport, agnostic to map rotations. `auto` is equivalent to `viewport`.

#### Default Value

```ts
'auto'
```

***

### scale?

> `optional` **scale**: `number`

The scale to use for the default marker if options.element is not provided. The default scale corresponds to a height of `41px` and a width of `27px`.

#### Default Value

```ts
1
```

***

### subpixelPositioning?

> `optional` **subpixelPositioning**: `boolean`

If `true`, rounding is disabled for placement of the marker, allowing for
subpixel positioning and smoother movement when the marker is translated.

#### Default Value

```ts
false
```
