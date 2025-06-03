[Maptoolkit JS](../README.md) / Offset

# Offset

> **Offset** = `number` \| [`PointLike`](PointLike.md) \| `{ [_ in PositionAnchor]: PointLike }`

A pixel offset specified as:

- A single number specifying a distance from the location
- A [PointLike](PointLike.md) specifying a constant offset
- An object of [PointLike](PointLike.md)s specifying an offset for each anchor position

Negative offsets indicate left and up.
