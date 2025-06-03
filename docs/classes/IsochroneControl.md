[Maptoolkit JS](../README.md) / IsochroneControl

# IsochroneControl

Provides an draggable isochrone control.

Used by the NavigationControl class.

## Implements

- [`IControl`](../interfaces/IControl.md)

## Constructors

### Constructor

> **new IsochroneControl**(`options?`: [`IsochroneControlOptions`](../type-aliases/IsochroneControlOptions.md)): `IsochroneControl`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`IsochroneControlOptions`](../type-aliases/IsochroneControlOptions.md) | Options for configuring the isochrone control. |

#### Returns

`IsochroneControl`

## Methods

### getDefaultPosition()

> **getDefaultPosition**(): `ControlPosition`

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](Map.md#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

#### Returns

`ControlPosition`

a control position, one of the values valid in addControl.

#### Implementation of

[`IControl`](../interfaces/IControl.md).[`getDefaultPosition`](../interfaces/IControl.md#getdefaultposition)

***

### onAdd()

> **onAdd**(`map`: [`Map`](Map.md)): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](Map.md#addcontrol)
internally.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](Map.md) | the Map this control will be added to |

#### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

#### Implementation of

[`IControl`](../interfaces/IControl.md).[`onAdd`](../interfaces/IControl.md#onadd)

***

### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](Map.md#removecontrol)
internally.

#### Returns

`void`

#### Implementation of

[`IControl`](../interfaces/IControl.md).[`onRemove`](../interfaces/IControl.md#onremove)
