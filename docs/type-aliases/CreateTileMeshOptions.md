[Maptoolkit JS](../README.md) / CreateTileMeshOptions

# CreateTileMeshOptions

> **CreateTileMeshOptions** = `object`

Options for generating a tile mesh.
Can optionally configure any of the following:
- mesh subdivision granularity
- border presence
- special geometry for the north and/or south pole

## Properties

### extendToNorthPole?

> `optional` **extendToNorthPole**: `boolean`

When true, additional geometry is generated along the north edge of the mesh, connecting it to the pole special vertex position.
This geometry replaces the mesh border along this edge, if one is present.

***

### extendToSouthPole?

> `optional` **extendToSouthPole**: `boolean`

When true, additional geometry is generated along the south edge of the mesh, connecting it to the pole special vertex position.
This geometry replaces the mesh border along this edge, if one is present.

***

### generateBorders?

> `optional` **generateBorders**: `boolean`

When true, an additional ring of quads is generated along the border, always extending `EXTENT_STENCIL_BORDER` units away from the main mesh.

***

### granularity?

> `optional` **granularity**: `number`

Specifies how much should the tile mesh be subdivided.
A value of 1 leads to a simple quad, a value of 4 will result in a grid of 4x4 quads.
