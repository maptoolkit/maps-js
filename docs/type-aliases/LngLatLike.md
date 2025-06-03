[Maptoolkit JS](../README.md) / LngLatLike

# LngLatLike

> **LngLatLike** = `LngLat` \| \{ `lat`: `number`; `lng`: `number`; \} \| \{ `lat`: `number`; `lon`: `number`; \} \| \[`number`, `number`\]

A LngLat object, an array of two numbers representing longitude and latitude,
or an object with `lng` and `lat` or `lon` and `lat` properties.

## Example

```ts
let v1 = new LngLat(-122.420679, 37.772537);
let v2 = [-122.420679, 37.772537];
let v3 = {lon: -122.420679, lat: 37.772537};
```
