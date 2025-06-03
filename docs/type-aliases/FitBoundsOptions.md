[Maptoolkit JS](../README.md) / FitBoundsOptions

# FitBoundsOptions

> **FitBoundsOptions** = [`FlyToOptions`](FlyToOptions.md) & `object`

Options for [Map#fitBounds](../classes/Map.md#fitbounds) method

## Type declaration

### linear?

> `optional` **linear**: `boolean`

If `true`, the map transitions using [Map#easeTo](../classes/Map.md#easeto). If `false`, the map transitions using [Map#flyTo](../classes/Map.md#flyto).
See those functions and [AnimationOptions](AnimationOptions.md) for information about options available.

#### Default Value

```ts
false
```

### maxZoom?

> `optional` **maxZoom**: `number`

The maximum zoom level to allow when the map view transitions to the specified bounds.

### offset?

> `optional` **offset**: [`PointLike`](PointLike.md)

The center of the given bounds relative to the map's center, measured in pixels.

#### Default Value

```ts
[0, 0]
```
