[Maptoolkit JS](../README.md) / Dispatcher

# Dispatcher

Responsible for sending messages from a [Source](../interfaces/Source.md) to an associated worker source (usually with the same name).

## Methods

### broadcast()

> **broadcast**\<`T`\>(`type`: `T`, `data`: [`RequestResponseMessageMap`](../type-aliases/RequestResponseMessageMap.md)\[`T`\]\[`0`\]): `Promise`\<[`RequestResponseMessageMap`](../type-aliases/RequestResponseMessageMap.md)\[`T`\]\[`1`\][]\>

Broadcast a message to all Workers.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../enumerations/MessageType.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `T` |
| `data` | [`RequestResponseMessageMap`](../type-aliases/RequestResponseMessageMap.md)\[`T`\]\[`0`\] |

#### Returns

`Promise`\<[`RequestResponseMessageMap`](../type-aliases/RequestResponseMessageMap.md)\[`T`\]\[`1`\][]\>

***

### getActor()

> **getActor**(): [`Actor`](Actor.md)

Acquires an actor to dispatch messages to. The actors are distributed in round-robin fashion.

#### Returns

[`Actor`](Actor.md)

An actor object backed by a web worker for processing messages.
