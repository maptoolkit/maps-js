[Maptoolkit JS](../README.md) / OverscaledTileID

# OverscaledTileID

An overscaled tile identifier

## Methods

### scaledTo()

> **scaledTo**(`targetZ`: `number`): `OverscaledTileID`

Returns a new `OverscaledTileID` representing the tile at the target zoom level.
When targetZ is greater than the current canonical z, the canonical coordinates are unchanged.
When targetZ is less than the current canonical z, the canonical coordinates are updated.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetZ` | `number` | the zoom level to scale to. Must be less than or equal to this.overscaledZ |

#### Returns

`OverscaledTileID`

a new OverscaledTileID representing the tile at the target zoom level

#### Throws

if targetZ is greater than this.overscaledZ

## Properties

### terrainRttPosMatrix32f

> **terrainRttPosMatrix32f**: `null` \| `mat4`

This matrix is used during terrain's render-to-texture stage only.
If the render-to-texture stage is active, this matrix will be present
and should be used, otherwise this matrix will be null.
The matrix should be float32 in order to avoid slow WebGL calls in Chrome.
