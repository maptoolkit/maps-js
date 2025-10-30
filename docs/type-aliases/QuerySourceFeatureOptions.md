[Maptoolkit JS](../README.md) / QuerySourceFeatureOptions

# QuerySourceFeatureOptions

> **QuerySourceFeatureOptions** = `object`

The options object related to the [Map.querySourceFeatures](../classes/Map.md#querysourcefeatures) method

## Properties

### filter?

> `optional` **filter**: `FilterSpecification`

A [filter](https://maplibre.org/maplibre-style-spec/layers/#filter)
to limit query results.

***

### sourceLayer?

> `optional` **sourceLayer**: `string`

The name of the source layer to query. *For vector tile sources, this parameter is required.* For GeoJSON sources, it is ignored.

***

### validate?

> `optional` **validate**: `boolean`

Whether to check if the [parameters.filter] conforms to the MapLibre Style Specification. Disabling validation is a performance optimization that should only be used if you have previously validated the values you will be passing to this function.

#### Default Value

```ts
true
```
