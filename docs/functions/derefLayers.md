[Maptoolkit JS](../README.md) / derefLayers

# derefLayers()

> **derefLayers**(`layers`: `LayerWithRef`[]): `LayerSpecification`[]

The input is not modified. The output may contain references to portions
of the input.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layers` | `LayerWithRef`[] | array of layers, some of which may contain `ref` properties whose value is the `id` of another property |

## Returns

`LayerSpecification`[]

a new array where such layers have been augmented with the 'type', 'source', etc. properties
from the parent layer, and the `ref` property has been removed.
