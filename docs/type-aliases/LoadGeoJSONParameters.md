[Maptoolkit JS](../README.md) / LoadGeoJSONParameters

# LoadGeoJSONParameters

> **LoadGeoJSONParameters** = [`GeoJSONWorkerOptions`](GeoJSONWorkerOptions.md) & `object`

Parameters needed to load a geojson to the worker

## Type declaration

### data?

> `optional` **data**: `string`

Literal GeoJSON data. Must be provided if `request.url` is not.

### dataDiff?

> `optional` **dataDiff**: [`GeoJSONSourceDiff`](GeoJSONSourceDiff.md)

### request?

> `optional` **request**: [`RequestParameters`](RequestParameters.md)

### type

> **type**: `"geojson"`
