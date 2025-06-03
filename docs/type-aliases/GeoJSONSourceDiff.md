[Maptoolkit JS](../README.md) / GeoJSONSourceDiff

# GeoJSONSourceDiff

> **GeoJSONSourceDiff** = `object`

The geojson source diff object

## Properties

### add?

> `optional` **add**: `GeoJSON.Feature`[]

An array of features to add

***

### remove?

> `optional` **remove**: [`GeoJSONFeatureId`](GeoJSONFeatureId.md)[]

An array of features IDs to remove

***

### removeAll?

> `optional` **removeAll**: `boolean`

When set to `true` it will remove all features

***

### update?

> `optional` **update**: [`GeoJSONFeatureDiff`](GeoJSONFeatureDiff.md)[]

An array of update objects
