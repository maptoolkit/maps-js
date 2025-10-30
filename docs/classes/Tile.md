[Maptoolkit JS](../README.md) / Tile

# Tile

A tile object is the combination of a Coordinate, which defines
its place, as well as a unique ID and data tracking for its content

## Constructors

### Constructor

> **new Tile**(`tileID`: [`OverscaledTileID`](OverscaledTileID.md), `size`: `number`): `Tile`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tileID` | [`OverscaledTileID`](OverscaledTileID.md) | the tile ID |
| `size` | `number` | The tile size |

#### Returns

`Tile`

## Methods

### loadVectorData()

> **loadVectorData**(`data`: [`WorkerTileResult`](../type-aliases/WorkerTileResult.md), `painter`: `any`, `justReloaded?`: `null` \| `boolean`): `void`

Given a data object with a 'buffers' property, load it into
this tile's elementGroups and buffers properties and set loaded
to true. If the data is null, like in the case of an empty
GeoJSON tile, no-op but still set loaded to true.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`WorkerTileResult`](../type-aliases/WorkerTileResult.md) | The data from the worker |
| `painter` | `any` | the painter |
| `justReloaded?` | `null` \| `boolean` | `true` to just reload |

#### Returns

`void`

***

### setSelfFadeLogic()

> **setSelfFadeLogic**(`fadeEndTime`: `number`): `void`

Self fading for edge tiles (when panning map)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fadeEndTime` | `number` |

#### Returns

`void`

***

### unloadVectorData()

> **unloadVectorData**(): `void`

Release any data or WebGL resources referenced by this tile.

#### Returns

`void`
