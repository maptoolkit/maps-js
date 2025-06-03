[Maptoolkit JS](../README.md) / PointProjection

# PointProjection

> **PointProjection** = `object`

The result of projecting a point to the screen, with some additional information about the projection.

## Properties

### isOccluded

> **isOccluded**: `boolean`

For complex projections (such as globe), true if the point is occluded by the projection, such as by being on the backfacing side of the globe.
If the point is simply beyond the edge of the screen, this should NOT be set to false.

***

### point

> **point**: `Point`

The projected point.

***

### signedDistanceFromCamera

> **signedDistanceFromCamera**: `number`

The original W component of the projection.
