[Maptoolkit JS](../README.md) / Source

# Source

The `Source` interface must be implemented by each source type, including "core" types (`vector`, `raster`,
`video`, etc.) and all custom, third-party types.

**Event** `data` - Fired with `{dataType: 'source', sourceDataType: 'metadata'}` to indicate that any necessary metadata
has been loaded so that it's okay to call `loadTile`; and with `{dataType: 'source', sourceDataType: 'content'}`
to indicate that the source data has changed, so that any current caches should be flushed.

## Methods

### abortTile()?

> `optional` **abortTile**(`tile`: `Tile`): `Promise`\<`void`\>

Allows to abort a tile loading.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to abort |

#### Returns

`Promise`\<`void`\>

***

### fire()

> **fire**(`event`: `Event$1`): `unknown`

An ability to fire an event to all the listeners, see Evented

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `Event$1` | The event to fire |

#### Returns

`unknown`

***

### hasTile()?

> `optional` **hasTile**(`tileID`: `OverscaledTileID`): `boolean`

True is the tile is part of the source, false otherwise.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tileID` | `OverscaledTileID` | The tile ID |

#### Returns

`boolean`

***

### hasTransition()

> **hasTransition**(): `boolean`

True if the source has transition, false otherwise.

#### Returns

`boolean`

***

### loaded()

> **loaded**(): `boolean`

True if the source is loaded, false otherwise.

#### Returns

`boolean`

***

### loadTile()

> **loadTile**(`tile`: `Tile`): `Promise`\<`void`\>

This method does the heavy lifting of loading a tile.
In most cases it will defer the work to the relevant worker source.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to load |

#### Returns

`Promise`\<`void`\>

***

### onAdd()?

> `optional` **onAdd**(`map`: `Map$1`): `void`

This method is called when the source is added to the map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map$1` | The map instance |

#### Returns

`void`

***

### onRemove()?

> `optional` **onRemove**(`map`: `Map$1`): `void`

This method is called when the source is removed from the map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map$1` | The map instance |

#### Returns

`void`

***

### prepare()?

> `optional` **prepare**(): `void`

Allows to execute a prepare step before the source is used.

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

#### Returns

`any`

A plain (stringifiable) JS object representing the current state of the source.
Creating a source using the returned object as the `options` should result in a Source that is
equivalent to this one.

***

### unloadTile()?

> `optional` **unloadTile**(`tile`: `Tile`): `Promise`\<`void`\>

Allows to unload a tile.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to unload |

#### Returns

`Promise`\<`void`\>

## Properties

### attribution?

> `optional` **attribution**: `string`

The attribution for the source.

***

### calculateTileZoom?

> `optional` **calculateTileZoom**: [`CalculateTileZoomFunction`](../type-aliases/CalculateTileZoomFunction.md)

Optional function to redefine how tiles are loaded at high pitch angles.

***

### id

> **id**: `string`

The id for the source. Must not be used by any existing source.

***

### isTileClipped?

> `optional` **isTileClipped**: `boolean`

`false` if tiles can be drawn outside their boundaries, `true` if they cannot.

***

### maxzoom

> **maxzoom**: `number`

The maximum zoom level for the source.

***

### minzoom

> **minzoom**: `number`

The minimum zoom level for the source.

***

### reparseOverscaled?

> `optional` **reparseOverscaled**: `boolean`

`true` if tiles should be sent back to the worker for each overzoomed zoom level, `false` if not.

***

### roundZoom?

> `optional` **roundZoom**: `boolean`

`true` if zoom levels are rounded to the nearest integer in the source data, `false` if they are floor-ed to the nearest integer.

***

### tileSize

> **tileSize**: `number`

The tile size for the source.
