[Maptoolkit JS](../README.md) / AttributionControl

# AttributionControl

Presents the map's attribution information and optionally its current scale.

## Implements

- [`IControl`](../interfaces/IControl.md)

## Constructors

### Constructor

> **new AttributionControl**(`options?`: [`AttributionControlOptions`](../type-aliases/AttributionControlOptions.md)): `AttributionControl`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AttributionControlOptions`](../type-aliases/AttributionControlOptions.md) | Options for configuring the attribution control. |

#### Returns

`AttributionControl`

## Methods

### getDefaultPosition()

> **getDefaultPosition**(): [`ControlPosition`](../type-aliases/ControlPosition.md)

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](Map.md#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

#### Returns

[`ControlPosition`](../type-aliases/ControlPosition.md)

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
