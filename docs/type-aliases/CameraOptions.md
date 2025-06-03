[Maptoolkit JS](../README.md) / CameraOptions

# CameraOptions

> **CameraOptions** = [`CenterZoomBearing`](CenterZoomBearing.md) & `object`

Options common to [Map#jumpTo](../classes/Map.md#jumpto), [Map#easeTo](../classes/Map.md#easeto), and [Map#flyTo](../classes/Map.md#flyto), controlling the desired location,
zoom, bearing, pitch, and roll of the camera. All properties are optional, and when a property is omitted, the current
camera value for that property will remain unchanged.

## Type declaration

### elevation?

> `optional` **elevation**: `number`

The elevation of the center point in meters above sea level.

### pitch?

> `optional` **pitch**: `number`

The desired pitch in degrees. The pitch is the angle towards the horizon
measured in degrees with a range between 0 and 60 degrees. For example, pitch: 0 provides the appearance
of looking straight down at the map, while pitch: 60 tilts the user's perspective towards the horizon.
Increasing the pitch value is often used to display 3D objects.

### roll?

> `optional` **roll**: `number`

The desired roll in degrees. The roll is the angle about the camera boresight.

## Example

Set the map's initial perspective with CameraOptions
```ts
let map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [-73.5804, 45.53483],
  pitch: 60,
  bearing: -60,
  zoom: 10
});
```

## See

 - [Set pitch and bearing](https://maplibre.org/maplibre-gl-js/docs/examples/set-perspective/)
 - [Jump to a series of locations](https://maplibre.org/maplibre-gl-js/docs/examples/jump-to/)
 - [Fly to a location](https://maplibre.org/maplibre-gl-js/docs/examples/flyto/)
 - [Display buildings in 3D](https://maplibre.org/maplibre-gl-js/docs/examples/3d-buildings/)
