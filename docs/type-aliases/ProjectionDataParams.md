[Maptoolkit JS](../README.md) / ProjectionDataParams

# ProjectionDataParams

> **ProjectionDataParams** = `object`

Parameters object for the transform's `getProjectionData` function.
Contains the requested tile ID and more.

## Properties

### aligned?

> `optional` **aligned**: `boolean`

Set to true if a pixel-aligned matrix should be used, if possible (mostly used for raster tiles under mercator projection)

***

### applyGlobeMatrix?

> `optional` **applyGlobeMatrix**: `boolean`

Set to true if the globe matrix should be applied (i.e. when rendering globe)

***

### applyTerrainMatrix?

> `optional` **applyTerrainMatrix**: `boolean`

Set to true if the terrain matrix should be applied (i.e. when rendering terrain)

***

### overscaledTileID

> **overscaledTileID**: `OverscaledTileID` \| `null`

The ID of the current tile
