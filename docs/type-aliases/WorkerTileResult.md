[Maptoolkit JS](../README.md) / WorkerTileResult

# WorkerTileResult

> **WorkerTileResult** = [`ExpiryData`](ExpiryData.md) & `object`

The worker tile's result type

## Type declaration

### buckets

> **buckets**: `Bucket`[]

### collisionBoxArray

> **collisionBoxArray**: `CollisionBoxArray`

### dashPositions

> **dashPositions**: `Record`\<`string`, [`DashEntry`](DashEntry.md)\>

### featureIndex

> **featureIndex**: [`FeatureIndex`](../classes/FeatureIndex.md)

### glyphAtlasImage

> **glyphAtlasImage**: [`AlphaImage`](../classes/AlphaImage.md)

### glyphMap?

> `optional` **glyphMap**: \{[`_`: `string`]: `object`; \} \| `null`

### glyphPositions?

> `optional` **glyphPositions**: [`GlyphPositions`](GlyphPositions.md) \| `null`

### iconMap?

> `optional` **iconMap**: \{[`_`: `string`]: [`StyleImage`](StyleImage.md); \} \| `null`

### imageAtlas

> **imageAtlas**: [`ImageAtlas`](../classes/ImageAtlas.md)

### rawTileData?

> `optional` **rawTileData**: `ArrayBuffer`

### resourceTiming?

> `optional` **resourceTiming**: `PerformanceResourceTiming`[]
