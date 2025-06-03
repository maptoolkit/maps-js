[Maptoolkit JS](../README.md) / GeoJSONFeatureDiff

# GeoJSONFeatureDiff

> **GeoJSONFeatureDiff** = `object`

A geojson feature diff object

## Properties

### addOrUpdateProperties?

> `optional` **addOrUpdateProperties**: `object`[]

The properties to add or update along side their values

#### key

> **key**: `string`

#### value

> **value**: `any`

***

### id

> **id**: [`GeoJSONFeatureId`](GeoJSONFeatureId.md)

The feature ID

***

### newGeometry?

> `optional` **newGeometry**: `GeoJSON.Geometry`

If it's a new geometry, place it here

***

### removeAllProperties?

> `optional` **removeAllProperties**: `boolean`

Setting to `true` will remove all preperties

***

### removeProperties?

> `optional` **removeProperties**: `string`[]

The properties keys to remove
