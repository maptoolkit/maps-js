[Maptoolkit JS](../README.md) / groupByLayout

# groupByLayout()

> **groupByLayout**(`layers`: `LayerSpecification`[], `cachedKeys?`: `Record`\<`string`, `string`\>): `LayerSpecification`[][]

Groups layers by their layout-affecting properties.
These are the properties that were formerly used by explicit `ref` mechanism
for layers: 'type', 'source', 'source-layer', 'minzoom', 'maxzoom',
'filter', and 'layout'.

The input is not modified. The output layers are references to the
input layers.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layers` | `LayerSpecification`[] | an array of LayerSpecification. |
| `cachedKeys?` | `Record`\<`string`, `string`\> | an object to keep already calculated keys. |

## Returns

`LayerSpecification`[][]

an array of arrays of LayerSpecification objects, where each inner array
contains layers that share the same layout-affecting properties.
