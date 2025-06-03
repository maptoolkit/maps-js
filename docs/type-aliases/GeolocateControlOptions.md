[Maptoolkit JS](../README.md) / GeolocateControlOptions

# GeolocateControlOptions

> **GeolocateControlOptions** = `object`

The GeolocateControl options object

## Properties

### fitBoundsOptions?

> `optional` **fitBoundsOptions**: [`FitBoundsOptions`](FitBoundsOptions.md)

A options object to use when the map is panned and zoomed to the user's location. The default is to use a `maxZoom` of 15 to limit how far the map will zoom in for very accurate locations.

***

### positionOptions?

> `optional` **positionOptions**: `PositionOptions`

A Geolocation API [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) object.

#### Default Value

`{enableHighAccuracy: false, timeout: 6000}`

***

### showAccuracyCircle?

> `optional` **showAccuracyCircle**: `boolean`

By default, if `showUserLocation` is `true`, a transparent circle will be drawn around the user location indicating the accuracy (95% confidence level) of the user's location. Set to `false` to disable. Always disabled when `showUserLocation` is `false`.

#### Default Value

```ts
true
```

***

### showUserLocation?

> `optional` **showUserLocation**: `boolean`

By default a dot will be shown on the map at the user's location. Set to `false` to disable.

#### Default Value

```ts
true
```

***

### trackUserLocation?

> `optional` **trackUserLocation**: `boolean`

If `true` the `GeolocateControl` becomes a toggle button and when active the map will receive updates to the user's location as it changes.

#### Default Value

```ts
false
```
