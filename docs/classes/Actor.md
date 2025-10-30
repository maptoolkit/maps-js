[Maptoolkit JS](../README.md) / Actor

# Actor

An implementation of the [Actor design pattern](https://en.wikipedia.org/wiki/Actor_model)
that maintains the relationship between asynchronous tasks and the objects
that spin them off - in this case, tasks like parsing parts of styles,
owned by the styles

## Implements

- [`IActor`](../interfaces/IActor.md)

## Constructors

### Constructor

> **new Actor**(`target`: `ActorTarget`, `mapId?`: `string` \| `number`): `Actor`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `ActorTarget` | The target |
| `mapId?` | `string` \| `number` | A unique identifier for the Map instance using this Actor. |

#### Returns

`Actor`

## Methods

### sendAsync()

> **sendAsync**\<`T`\>(`message`: [`ActorMessage`](../type-aliases/ActorMessage.md)\<`T`\>, `abortController?`: `AbortController`): `Promise`\<[`RequestResponseMessageMap`](../type-aliases/RequestResponseMessageMap.md)\[`T`\]\[`1`\]\>

Sends a message from a main-thread map to a Worker or from a Worker back to
a main-thread map instance.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../enumerations/MessageType.md) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | [`ActorMessage`](../type-aliases/ActorMessage.md)\<`T`\> | the message to send |
| `abortController?` | `AbortController` | an optional AbortController to abort the request |

#### Returns

`Promise`\<[`RequestResponseMessageMap`](../type-aliases/RequestResponseMessageMap.md)\[`T`\]\[`1`\]\>

a promise that will be resolved with the response data

#### Implementation of

`IActor.sendAsync`
