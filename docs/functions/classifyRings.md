[Maptoolkit JS](../README.md) / classifyRings

# classifyRings()

> **classifyRings**\<`T`\>(`rings`: `RingWithArea`\<`T`\>[], `maxRings?`: `number`): `RingWithArea`\<`T`\>[][]

Classifies an array of rings into polygons with outer rings and holes

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Point2D` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rings` | `RingWithArea`\<`T`\>[] | the rings to classify |
| `maxRings?` | `number` | the maximum number of rings to include in a polygon, use 0 to include all rings |

## Returns

`RingWithArea`\<`T`\>[][]

an array of polygons with internal rings as holes
