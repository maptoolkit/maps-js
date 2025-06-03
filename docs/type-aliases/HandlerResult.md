[Maptoolkit JS](../README.md) / HandlerResult

# HandlerResult

> **HandlerResult** = `object`

All handler methods that are called with events can optionally return a `HandlerResult`.

## Properties

### around?

> `optional` **around**: `Point` \| `null`

the point to not move when changing the camera

***

### cameraAnimation()?

> `optional` **cameraAnimation**: (`map`: `Map$1`) => `any`

A method that can fire a one-off easing by directly changing the map's camera.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `map` | `Map$1` |

#### Returns

`any`

***

### needsRenderFrame?

> `optional` **needsRenderFrame**: `boolean`

Makes the manager trigger a frame, allowing the handler to return multiple results over time (see scrollzoom).

***

### noInertia?

> `optional` **noInertia**: `boolean`

The camera changes won't get recorded for inertial zooming.

***

### originalEvent?

> `optional` **originalEvent**: `Event$1`

The last three properties are needed by only one handler: scrollzoom.
The DOM event to be used as the `originalEvent` on any camera change events.

***

### pinchAround?

> `optional` **pinchAround**: `Point` \| `null`

same as above, except for pinch actions, which are given higher priority
