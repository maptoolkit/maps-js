[Maptoolkit JS](../README.md) / MouseRotateHandler

# MouseRotateHandler

`MouseRotateHandler` allows the user to rotate the map by clicking and dragging

## Extends

- `DragMoveHandler`\<`DragRotateResult`, `MouseEvent`\>

## Methods

### isActive()

> **isActive**(): `boolean`

This is used to indicate if the handler is currently active or not.
In case a handler is active, it will block other handlers from getting the relevant events.
There is an allow list of handlers that can be active at the same time, which is configured when adding a handler.

#### Returns

`boolean`

#### Inherited from

`DragMoveHandler.isActive`

***

### reset()

> **reset**(): `void`

`reset` can be called by the manager at any time and must reset everything to it's original state

#### Returns

`void`

#### Inherited from

`DragMoveHandler.reset`

## Properties

### renderFrame()?

> `readonly` `optional` **renderFrame**: () => `void` \| [`HandlerResult`](../type-aliases/HandlerResult.md)

`renderFrame` is the only non-dom event. It is called during render
frames and can be used to smooth camera changes (see scroll handler).

#### Returns

`void` \| [`HandlerResult`](../type-aliases/HandlerResult.md)

#### Inherited from

`DragMoveHandler.renderFrame`
