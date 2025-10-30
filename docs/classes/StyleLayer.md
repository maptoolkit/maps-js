[Maptoolkit JS](../README.md) / StyleLayer

# `abstract` StyleLayer

A base class for style layers

## Extends

- `Evented`

## Methods

### getLayoutAffectingGlobalStateRefs()

> **getLayoutAffectingGlobalStateRefs**(): `Set`\<`string`\>

Get list of global state references that are used within layout or filter properties.
This is used to determine if layer source need to be reloaded when global state property changes.

#### Returns

`Set`\<`string`\>

***

### getPaintAffectingGlobalStateRefs()

> **getPaintAffectingGlobalStateRefs**(): `Map`\<`string`, `object`[]\>

Get list of global state references that are used within paint properties.
This is used to determine if layer needs to be repainted when global state property changes.

#### Returns

`Map`\<`string`, `object`[]\>

***

### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

#### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

#### Inherited from

`Evented.listens`

***

### off()

> **off**(`type`: `string`, `listener`: [`Listener`](../type-aliases/Listener.md)): `this`

Removes a previously registered event listener.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | [`Listener`](../type-aliases/Listener.md) | The listener function to remove. |

#### Returns

`this`

#### Inherited from

`Evented.off`

***

### on()

> **on**(`type`: `string`, `listener`: [`Listener`](../type-aliases/Listener.md)): [`Subscription`](../interfaces/Subscription.md)

Adds a listener to a specified event type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | [`Listener`](../type-aliases/Listener.md) | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

#### Returns

[`Subscription`](../interfaces/Subscription.md)

#### Inherited from

`Evented.on`

***

### once()

> **once**(`type`: `string`, `listener?`: [`Listener`](../type-aliases/Listener.md)): `Promise`\<`any`\> \| `StyleLayer`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | [`Listener`](../type-aliases/Listener.md) | The function to be called when the event is fired the first time. |

#### Returns

`Promise`\<`any`\> \| `StyleLayer`

`this` or a promise if a listener is not provided

#### Inherited from

`Evented.once`

***

### setEventedParent()

> **setEventedParent**(`parent?`: `null` \| `Evented`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | `null` \| `Evented` |
| `data?` | `any` |

#### Returns

`this`

#### Inherited from

`Evented.setEventedParent`
