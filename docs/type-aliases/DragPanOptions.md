[Maptoolkit JS](../README.md) / DragPanOptions

# DragPanOptions

> **DragPanOptions** = `object`

A DragPanHandler options object

## Properties

### deceleration?

> `optional` **deceleration**: `number`

the maximum value of the drag velocity.

#### Default Value

```ts
1400
```

***

### easing()?

> `optional` **easing**: (`t`: `number`) => `number`

easing function applied to `map.panTo` when applying the drag.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `t` | `number` | the easing function |

#### Returns

`number`

#### Default Value

```ts
bezier(0, 0, 0.3, 1)
```

***

### linearity?

> `optional` **linearity**: `number`

factor used to scale the drag velocity

#### Default Value

```ts
0
```

***

### maxSpeed?

> `optional` **maxSpeed**: `number`

the rate at which the speed reduces after the pan ends.

#### Default Value

```ts
2500
```
