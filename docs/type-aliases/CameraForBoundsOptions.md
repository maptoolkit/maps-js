[Maptoolkit JS](../README.md) / CameraForBoundsOptions

# CameraForBoundsOptions

> **CameraForBoundsOptions** = [`CameraOptions`](CameraOptions.md) & `object`

A options object for the [Map#cameraForBounds](../classes/Map.md#cameraforbounds) method

## Type declaration

### maxZoom?

> `optional` **maxZoom**: `number`

The maximum zoom level to allow when the camera would transition to the specified bounds.

### offset?

> `optional` **offset**: [`PointLike`](PointLike.md)

The center of the given bounds relative to the map's center, measured in pixels.

#### Default Value

```ts
[0, 0]
```

### padding?

> `optional` **padding**: `number` \| [`PaddingOptions`](PaddingOptions.md)

The amount of padding in pixels to add to the given bounds.
