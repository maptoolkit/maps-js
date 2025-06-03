[Maptoolkit JS](../README.md) / MapSourceDataEvent

# MapSourceDataEvent

> **MapSourceDataEvent** = [`MapLibreEvent`](MapLibreEvent.md) & `object`

The source data event interface

## Type declaration

### dataType

> **dataType**: `"source"`

### isSourceLoaded

> **isSourceLoaded**: `boolean`

True if the event has a `dataType` of `source` and the source has no outstanding network requests.

### source

> **source**: `SourceSpecification`

The [style spec representation of the source](https://maplibre.org/maplibre-style-spec/#sources) if the event has a `dataType` of `source`.

### sourceDataChanged?

> `optional` **sourceDataChanged**: `boolean`

### sourceDataType

> **sourceDataType**: [`MapSourceDataType`](MapSourceDataType.md)

### sourceId

> **sourceId**: `string`

### tile

> **tile**: `any`

The tile being loaded or changed, if the event has a `dataType` of `source` and
the event is related to loading of a tile.
