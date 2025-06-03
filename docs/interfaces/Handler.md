[Maptoolkit JS](../README.md) / Handler

# Handler

Handlers interpret dom events and return camera changes that should be
applied to the map (`HandlerResult`s). The camera changes are all deltas.
The handler itself should have no knowledge of the map's current state.
This makes it easier to merge multiple results and keeps handlers simpler.
For example, if there is a mousedown and mousemove, the mousePan handler
would return a `panDelta` on the mousemove.

## Methods

### isActive()

> **isActive**(): `boolean`

This is used to indicate if the handler is currently active or not.
In case a handler is active, it will block other handlers from getting the relevant events.
There is an allow list of handlers that can be active at the same time, which is configured when adding a handler.

#### Returns

`boolean`

***

### reset()

> **reset**(): `void`

`reset` can be called by the manager at any time and must reset everything to it's original state

#### Returns

`void`

## Properties

### renderFrame()?

> `readonly` `optional` **renderFrame**: () => `void` \| [`HandlerResult`](../type-aliases/HandlerResult.md)

`renderFrame` is the only non-dom event. It is called during render
frames and can be used to smooth camera changes (see scroll handler).

#### Returns

`void` \| [`HandlerResult`](../type-aliases/HandlerResult.md)
