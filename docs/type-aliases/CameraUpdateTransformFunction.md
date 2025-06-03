[Maptoolkit JS](../README.md) / CameraUpdateTransformFunction

# CameraUpdateTransformFunction()

> **CameraUpdateTransformFunction** = (`next`: `object`) => `object`

A callback hook that allows manipulating the camera and being notified about camera updates before they happen

## Parameters

| Parameter | Type |
| ------ | ------ |
| `next` | \{ `bearing`: `number`; `center`: `LngLat`; `elevation`: `number`; `pitch`: `number`; `roll`: `number`; `zoom`: `number`; \} |
| `next.bearing` | `number` |
| `next.center` | `LngLat` |
| `next.elevation` | `number` |
| `next.pitch` | `number` |
| `next.roll` | `number` |
| `next.zoom` | `number` |

## Returns

`object`

### bearing?

> `optional` **bearing**: `number`

### center?

> `optional` **center**: `LngLat`

### elevation?

> `optional` **elevation**: `number`

### pitch?

> `optional` **pitch**: `number`

### roll?

> `optional` **roll**: `number`

### zoom?

> `optional` **zoom**: `number`
