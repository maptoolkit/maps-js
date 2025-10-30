[Maptoolkit JS](../README.md) / Map

# Map

Extends the maplibre-gl map class with additional functionality.

## Extends

- `Map$1`

## Accessors

### repaint

#### Get Signature

> **get** **repaint**(): `boolean`

Gets and sets a Boolean indicating whether the map will
continuously repaint. This information is useful for analyzing performance.

##### Returns

`boolean`

#### Inherited from

`maplibreMap.repaint`

***

### showCollisionBoxes

#### Get Signature

> **get** **showCollisionBoxes**(): `boolean`

Gets and sets a Boolean indicating whether the map will render boxes
around all symbols in the data source, revealing which symbols
were rendered or which were hidden due to collisions.
This information is useful for debugging.

##### Returns

`boolean`

#### Inherited from

`maplibreMap.showCollisionBoxes`

***

### showOverdrawInspector

#### Get Signature

> **get** **showOverdrawInspector**(): `boolean`

Gets and sets a Boolean indicating whether the map should color-code
each fragment to show how many times it has been shaded.
White fragments have been shaded 8 or more times.
Black fragments have been shaded 0 times.
This information is useful for debugging.

##### Returns

`boolean`

#### Inherited from

`maplibreMap.showOverdrawInspector`

***

### showPadding

#### Get Signature

> **get** **showPadding**(): `boolean`

Gets and sets a Boolean indicating whether the map will visualize
the padding offsets.

##### Returns

`boolean`

#### Inherited from

`maplibreMap.showPadding`

***

### showTileBoundaries

#### Get Signature

> **get** **showTileBoundaries**(): `boolean`

Gets and sets a Boolean indicating whether the map will render an outline
around each tile and the tile ID. These tile boundaries are useful for
debugging.

The uncompressed file size of the first vector source is drawn in the top left
corner of each tile, next to the tile ID.

##### Example

```ts
map.showTileBoundaries = true;
```

##### Returns

`boolean`

#### Inherited from

`maplibreMap.showTileBoundaries`

***

### version

#### Get Signature

> **get** **version**(): `string`

Returns the package version of the library

##### Returns

`string`

Package version of the library

#### Inherited from

`maplibreMap.version`

## Constructors

### Constructor

> **new Map**(`options?`: [`MapOptions`](../type-aliases/MapOptions.md)): `Map`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`MapOptions`](../type-aliases/MapOptions.md) | The [MapOptions](../type-aliases/MapOptions.md) object. |

#### Returns

`Map`

#### Overrides

`maplibreMap.constructor`

## Events

### off()

#### Call Signature

> **off**\<`T`\>(`type`: `T`, `layer`: `string`, `listener`: (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void`): `this`

Removes an event listener for events previously added with `{@link Map.on}`.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`MapLayerEventType`](../type-aliases/MapLayerEventType.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The event type previously used to install the listener. |
| `layer` | `string` | The layer ID or listener previously used to install the listener. |
| `listener` | (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void` | The function previously installed as a listener. |

##### Returns

`this`

##### Inherited from

`maplibreMap.off`

#### Call Signature

> **off**\<`T`\>(`type`: `T`, `layers`: `string`[], `listener`: (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void`): `this`

Overload of the `off` method that allows to remove an event created with multiple layers.
Provide the same layer IDs as to `on` or `once`, when the listener was registered.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`MapLayerEventType`](../type-aliases/MapLayerEventType.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The type of the event. |
| `layers` | `string`[] | The layer IDs previously used to install the listener. |
| `listener` | (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void` | The function previously installed as a listener. |

##### Returns

`this`

##### Inherited from

`maplibreMap.off`

#### Call Signature

> **off**\<`T`\>(`type`: `T`, `listener`: (`ev`: [`MapEventType`](../interfaces/MapEventType.md)\[`T`\] & `Object`) => `void`): `this`

Overload of the `off` method that allows to remove an event created without specifying a layer.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`MapEventType`](../interfaces/MapEventType.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The type of the event. |
| `listener` | (`ev`: [`MapEventType`](../interfaces/MapEventType.md)\[`T`\] & `Object`) => `void` | The function previously installed as a listener. |

##### Returns

`this`

##### Inherited from

`maplibreMap.off`

#### Call Signature

> **off**(`type`: `string`, `listener`: [`Listener`](../type-aliases/Listener.md)): `this`

Overload of the `off` method that allows to remove an event created without specifying a layer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of the event. |
| `listener` | [`Listener`](../type-aliases/Listener.md) | The function previously installed as a listener. |

##### Returns

`this`

##### Inherited from

`maplibreMap.off`

***

### on()

#### Call Signature

> **on**\<`T`\>(`type`: `T`, `layer`: `string`, `listener`: (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void`): [`Subscription`](../interfaces/Subscription.md)

Adds a listener for events of a specified type, optionally limited to features in a specified style layer(s).
See [MapEventType](../interfaces/MapEventType.md) and [MapLayerEventType](../type-aliases/MapLayerEventType.md) for a full list of events and their description.

| Event                  | Compatible with `layerId` |
|------------------------|---------------------------|
| `mousedown`            | yes                       |
| `mouseup`              | yes                       |
| `mouseover`            | yes                       |
| `mouseout`             | yes                       |
| `mousemove`            | yes                       |
| `mouseenter`           | yes (required)            |
| `mouseleave`           | yes (required)            |
| `click`                | yes                       |
| `dblclick`             | yes                       |
| `contextmenu`          | yes                       |
| `touchstart`           | yes                       |
| `touchend`             | yes                       |
| `touchcancel`          | yes                       |
| `wheel`                |                           |
| `resize`               |                           |
| `remove`               |                           |
| `touchmove`            |                           |
| `movestart`            |                           |
| `move`                 |                           |
| `moveend`              |                           |
| `dragstart`            |                           |
| `drag`                 |                           |
| `dragend`              |                           |
| `zoomstart`            |                           |
| `zoom`                 |                           |
| `zoomend`              |                           |
| `rotatestart`          |                           |
| `rotate`               |                           |
| `rotateend`            |                           |
| `pitchstart`           |                           |
| `pitch`                |                           |
| `pitchend`             |                           |
| `boxzoomstart`         |                           |
| `boxzoomend`           |                           |
| `boxzoomcancel`        |                           |
| `webglcontextlost`     |                           |
| `webglcontextrestored` |                           |
| `load`                 |                           |
| `render`               |                           |
| `idle`                 |                           |
| `error`                |                           |
| `data`                 |                           |
| `styledata`            |                           |
| `sourcedata`           |                           |
| `dataloading`          |                           |
| `styledataloading`     |                           |
| `sourcedataloading`    |                           |
| `styleimagemissing`    |                           |
| `dataabort`            |                           |
| `sourcedataabort`      |                           |

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`MapLayerEventType`](../type-aliases/MapLayerEventType.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The event type to listen for. Events compatible with the optional `layerId` parameter are triggered when the cursor enters a visible portion of the specified layer from outside that layer or outside the map canvas. |
| `layer` | `string` | The ID of a style layer or a listener if no ID is provided. Event will only be triggered if its location is within a visible feature in this layer. The event will have a `features` property containing an array of the matching features. If `layer` is not supplied, the event will not have a `features` property. Please note that many event types are not compatible with the optional `layer` parameter. |
| `listener` | (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void` | The function to be called when the event is fired. |

##### Returns

[`Subscription`](../interfaces/Subscription.md)

##### Examples

```ts
// Set an event listener that will fire
// when the map has finished loading
map.on('load', () => {
  // Once the map has finished loading,
  // add a new layer
  map.addLayer({
    id: 'points-of-interest',
    source: {
      type: 'vector',
      url: 'https://maplibre.org/maplibre-style-spec/'
    },
    'source-layer': 'poi_label',
    type: 'circle',
    paint: {
      // MapLibre Style Specification paint properties
    },
    layout: {
      // MapLibre Style Specification layout properties
    }
  });
});
```

```ts
// Set an event listener that will fire
// when a feature on the countries layer of the map is clicked
map.on('click', 'countries', (e) => {
  new Popup()
    .setLngLat(e.lngLat)
    .setHTML(`Country name: ${e.features[0].properties.name}`)
    .addTo(map);
});
```

##### See

 - [Display popup on click](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-click/)
 - [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-the-map-on-a-clicked-symbol/)
 - [Create a hover effect](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/)
 - [Create a draggable marker](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

##### Inherited from

`maplibreMap.on`

#### Call Signature

> **on**\<`T`\>(`type`: `T`, `layerIds`: `string`[], `listener`: (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void`): [`Subscription`](../interfaces/Subscription.md)

Overload of the `on` method that allows to listen to events specifying multiple layers.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`MapLayerEventType`](../type-aliases/MapLayerEventType.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The type of the event. |
| `layerIds` | `string`[] | The array of style layer IDs. |
| `listener` | (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void` | The listener callback. |

##### Returns

[`Subscription`](../interfaces/Subscription.md)

##### Inherited from

`maplibreMap.on`

#### Call Signature

> **on**\<`T`\>(`type`: `T`, `listener`: (`ev`: [`MapEventType`](../interfaces/MapEventType.md)\[`T`\] & `Object`) => `void`): [`Subscription`](../interfaces/Subscription.md)

Overload of the `on` method that allows to listen to events without specifying a layer.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`MapEventType`](../interfaces/MapEventType.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The type of the event. |
| `listener` | (`ev`: [`MapEventType`](../interfaces/MapEventType.md)\[`T`\] & `Object`) => `void` | The listener callback. |

##### Returns

[`Subscription`](../interfaces/Subscription.md)

##### Inherited from

`maplibreMap.on`

#### Call Signature

> **on**(`type`: `string`, `listener`: [`Listener`](../type-aliases/Listener.md)): [`Subscription`](../interfaces/Subscription.md)

Overload of the `on` method that allows to listen to events without specifying a layer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of the event. |
| `listener` | [`Listener`](../type-aliases/Listener.md) | The listener callback. |

##### Returns

[`Subscription`](../interfaces/Subscription.md)

##### Inherited from

`maplibreMap.on`

***

### once()

#### Call Signature

> **once**\<`T`\>(`type`: `T`, `layer`: `string`, `listener?`: (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void`): `Map` \| `Promise`\<[`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`\>

Adds a listener that will be called only once to a specified event type, optionally limited to features in a specified style layer.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`MapLayerEventType`](../type-aliases/MapLayerEventType.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The event type to listen for; one of `'mousedown'`, `'mouseup'`, `'click'`, `'dblclick'`, `'mousemove'`, `'mouseenter'`, `'mouseleave'`, `'mouseover'`, `'mouseout'`, `'contextmenu'`, `'touchstart'`, `'touchend'`, or `'touchcancel'`. `mouseenter` and `mouseover` events are triggered when the cursor enters a visible portion of the specified layer from outside that layer or outside the map canvas. `mouseleave` and `mouseout` events are triggered when the cursor leaves a visible portion of the specified layer, or leaves the map canvas. |
| `layer` | `string` | The ID of a style layer or a listener if no ID is provided. Only events whose location is within a visible feature in this layer will trigger the listener. The event will have a `features` property containing an array of the matching features. |
| `listener?` | (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void` | The function to be called when the event is fired. |

##### Returns

`Map` \| `Promise`\<[`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`\>

`this` if listener is provided, promise otherwise to allow easier usage of async/await

##### Inherited from

`maplibreMap.once`

#### Call Signature

> **once**\<`T`\>(`type`: `T`, `layerIds`: `string`[], `listener?`: (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void`): `Promise`\<`any`\> \| `Map`

Overload of the `once` method that allows to listen to events specifying multiple layers.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`MapLayerEventType`](../type-aliases/MapLayerEventType.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The type of the event. |
| `layerIds` | `string`[] | The array of style layer IDs. |
| `listener?` | (`ev`: [`MapLayerEventType`](../type-aliases/MapLayerEventType.md)\[`T`\] & `Object`) => `void` | The listener callback. |

##### Returns

`Promise`\<`any`\> \| `Map`

##### Inherited from

`maplibreMap.once`

#### Call Signature

> **once**\<`T`\>(`type`: `T`, `listener?`: (`ev`: [`MapEventType`](../interfaces/MapEventType.md)\[`T`\] & `Object`) => `void`): `Promise`\<`any`\> \| `Map`

Overload of the `once` method that allows to listen to events without specifying a layer.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof [`MapEventType`](../interfaces/MapEventType.md) |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `T` | The type of the event. |
| `listener?` | (`ev`: [`MapEventType`](../interfaces/MapEventType.md)\[`T`\] & `Object`) => `void` | The listener callback. |

##### Returns

`Promise`\<`any`\> \| `Map`

##### Inherited from

`maplibreMap.once`

#### Call Signature

> **once**(`type`: `string`, `listener?`: [`Listener`](../type-aliases/Listener.md)): `Promise`\<`any`\> \| `Map`

Overload of the `once` method that allows to listen to events without specifying a layer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of the event. |
| `listener?` | [`Listener`](../type-aliases/Listener.md) | The listener callback. |

##### Returns

`Promise`\<`any`\> \| `Map`

##### Inherited from

`maplibreMap.once`

## Methods

### addControl()

> **addControl**(`control`: [`IControl`](../interfaces/IControl.md), `position?`: [`ControlPosition`](../type-aliases/ControlPosition.md)): `this`

Adds a control to the map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `control` | [`IControl`](../interfaces/IControl.md) | The control to add. |
| `position?` | [`ControlPosition`](../type-aliases/ControlPosition.md) | The position to add the control. |

#### Returns

`this`

The map instance.

#### Overrides

`maplibreMap.addControl`

***

### addImage()

> **addImage**(`id`: `string`, `image`: `HTMLImageElement` \| `ImageBitmap` \| `ImageData` \| \{ `data`: `Uint8Array`\<`ArrayBufferLike`\> \| `Uint8ClampedArray`\<`ArrayBufferLike`\>; `height`: `number`; `width`: `number`; \} \| [`StyleImageInterface`](../interfaces/StyleImageInterface.md), `options?`: `Partial`\<[`StyleImageMetadata`](../type-aliases/StyleImageMetadata.md)\>): `this`

Add an image to the style. This image can be displayed on the map like any other icon in the style's
sprite using the image's ID with
[`icon-image`](https://maplibre.org/maplibre-style-spec/layers/#layout-symbol-icon-image),
[`background-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-background-background-pattern),
[`fill-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-fill-fill-pattern),
or [`line-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-line-line-pattern).

A [ErrorEvent](ErrorEvent.md) event will be fired if the image parameter is invalid or there is not enough space in the sprite to add this image.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the image. |
| `image` | `HTMLImageElement` \| `ImageBitmap` \| `ImageData` \| \{ `data`: `Uint8Array`\<`ArrayBufferLike`\> \| `Uint8ClampedArray`\<`ArrayBufferLike`\>; `height`: `number`; `width`: `number`; \} \| [`StyleImageInterface`](../interfaces/StyleImageInterface.md) | The image as an `HTMLImageElement`, `ImageData`, `ImageBitmap` or object with `width`, `height`, and `data` properties with the same format as `ImageData`. |
| `options?` | `Partial`\<[`StyleImageMetadata`](../type-aliases/StyleImageMetadata.md)\> | Options object. |

#### Returns

`this`

#### Example

```ts
// If the style's sprite does not already contain an image with ID 'cat',
// add the image 'cat-icon.png' to the style's sprite with the ID 'cat'.
const image = await map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png');
if (!map.hasImage('cat')) map.addImage('cat', image.data);

// Add a stretchable image that can be used with `icon-text-fit`
// In this example, the image is 600px wide by 400px high.
const image = await map.loadImage('https://upload.wikimedia.org/wikipedia/commons/8/89/Black_and_White_Boxed_%28bordered%29.png');
if (map.hasImage('border-image')) return;
map.addImage('border-image', image.data, {
    content: [16, 16, 300, 384], // place text over left half of image, avoiding the 16px border
    stretchX: [[16, 584]], // stretch everything horizontally except the 16px border
    stretchY: [[16, 384]], // stretch everything vertically except the 16px border
});
```

#### See

 - Use `HTMLImageElement`: [Add an icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-an-icon-to-the-map/)
 - Use `ImageData`: [Add a generated icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-generated-icon-to-the-map/)

#### Inherited from

`maplibreMap.addImage`

***

### addLayer()

> **addLayer**(`layer`: [`AddLayerObject`](../type-aliases/AddLayerObject.md) \| [`AddLayerObject`](../type-aliases/AddLayerObject.md)[], `beforeId?`: `string`): `this`

Adds a layer to the map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layer` | [`AddLayerObject`](../type-aliases/AddLayerObject.md) \| [`AddLayerObject`](../type-aliases/AddLayerObject.md)[] | The layer or layers to add. |
| `beforeId?` | `string` | The ID of an existing layer to insert the new layer before. |

#### Returns

`this`

The map instance.

#### Overrides

`maplibreMap.addLayer`

***

### addSource()

> **addSource**(`id`: `string`, `source`: `SourceSpecification` \| [`CanvasSourceSpecification`](../type-aliases/CanvasSourceSpecification.md)): `this`

Adds a source to the map's style.

Events triggered:

Triggers the `source.add` event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the source to add. Must not conflict with existing sources. |
| `source` | `SourceSpecification` \| [`CanvasSourceSpecification`](../type-aliases/CanvasSourceSpecification.md) | The source object, conforming to the MapLibre Style Specification's [source definition](https://maplibre.org/maplibre-style-spec/sources) or [CanvasSourceSpecification](../type-aliases/CanvasSourceSpecification.md). |

#### Returns

`this`

#### Examples

```ts
map.addSource('my-data', {
  type: 'vector',
  url: 'https://demotiles.maplibre.org/tiles/tiles.json'
});
```

```ts
map.addSource('my-data', {
  "type": "geojson",
  "data": {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-77.0323, 38.9131]
    },
    "properties": {
      "title": "Mapbox DC",
      "marker-symbol": "monument"
    }
  }
});
```

#### See

GeoJSON source: [Add live realtime data](https://maplibre.org/maplibre-gl-js/docs/examples/add-live-realtime-data/)

#### Inherited from

`maplibreMap.addSource`

***

### addSprite()

> **addSprite**(`id`: `string`, `url`: `string`, `options?`: [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md)): `this`

Adds a sprite to the map's style. Fires the `style` event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the sprite to add. Must not conflict with existing sprites. |
| `url` | `string` | The URL to load the sprite from |
| `options?` | [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md) | Options object. |

#### Returns

`this`

#### Example

```ts
map.addSprite('sprite-two', 'http://example.com/sprite-two');
```

#### Inherited from

`maplibreMap.addSprite`

***

### areTilesLoaded()

> **areTilesLoaded**(): `boolean`

Returns a Boolean indicating whether all tiles in the viewport from all sources on
the style are loaded.

#### Returns

`boolean`

A Boolean indicating whether all tiles are loaded.

#### Example

```ts
let tilesLoaded = map.areTilesLoaded();
```

#### Inherited from

`maplibreMap.areTilesLoaded`

***

### calculateCameraOptionsFromCameraLngLatAltRotation()

> **calculateCameraOptionsFromCameraLngLatAltRotation**(`cameraLngLat`: [`LngLatLike`](../type-aliases/LngLatLike.md), `cameraAlt`: `number`, `bearing`: `number`, `pitch`: `number`, `roll?`: `number`): [`CameraOptions`](../type-aliases/CameraOptions.md)

Given a camera position and rotation, calculates zoom and center point and returns them as [CameraOptions](../type-aliases/CameraOptions.md).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cameraLngLat` | [`LngLatLike`](../type-aliases/LngLatLike.md) | The lng, lat of the camera to look from |
| `cameraAlt` | `number` | The altitude of the camera to look from, in meters above sea level |
| `bearing` | `number` | Bearing of the camera, in degrees |
| `pitch` | `number` | Pitch of the camera, in degrees |
| `roll?` | `number` | Roll of the camera, in degrees |

#### Returns

[`CameraOptions`](../type-aliases/CameraOptions.md)

the calculated camera options

#### Example

```ts
// Calculate options to look from camera position(1°, 0°, 1000m) with bearing = 90°, pitch = 30°, and roll = 45°
const cameraLngLat = new LngLat(1, 0);
const cameraAltitude = 1000;
const bearing = 90;
const pitch = 30;
const roll = 45;
const cameraOptions = map.calculateCameraOptionsFromCameraLngLatAltRotation(cameraLngLat, cameraAltitude, bearing, pitch, roll);
// Apply calculated options
map.jumpTo(cameraOptions);
```

#### Inherited from

`maplibreMap.calculateCameraOptionsFromCameraLngLatAltRotation`

***

### calculateCameraOptionsFromTo()

> **calculateCameraOptionsFromTo**(`from`: `LngLat`, `altitudeFrom`: `number`, `to`: `LngLat`, `altitudeTo?`: `number`): [`CameraOptions`](../type-aliases/CameraOptions.md)

Given a camera 'from' position and a position to look at (`to`), calculates zoom and camera rotation and returns them as [CameraOptions](../type-aliases/CameraOptions.md).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `from` | `LngLat` | The camera to look from |
| `altitudeFrom` | `number` | The altitude of the camera to look from |
| `to` | `LngLat` | The center to look at |
| `altitudeTo?` | `number` | Optional altitude of the center to look at. If none given the ground height will be used. |

#### Returns

[`CameraOptions`](../type-aliases/CameraOptions.md)

the calculated camera options

#### Example

```ts
// Calculate options to look from (1°, 0°, 1000m) to (1°, 1°, 0m)
const cameraLngLat = new LngLat(1, 0);
const cameraAltitude = 1000;
const targetLngLat = new LngLat(1, 1);
const targetAltitude = 0;
const cameraOptions = map.calculateCameraOptionsFromTo(cameraLngLat, cameraAltitude, targetLngLat, targetAltitude);
// Apply calculated options
map.jumpTo(cameraOptions);
```

#### Inherited from

`maplibreMap.calculateCameraOptionsFromTo`

***

### cameraForBounds()

> **cameraForBounds**(`bounds`: [`LngLatBoundsLike`](../type-aliases/LngLatBoundsLike.md), `options?`: [`CameraForBoundsOptions`](../type-aliases/CameraForBoundsOptions.md)): `undefined` \| [`CenterZoomBearing`](../type-aliases/CenterZoomBearing.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bounds` | [`LngLatBoundsLike`](../type-aliases/LngLatBoundsLike.md) | Calculate the center for these bounds in the viewport and use the highest zoom level up to and including [Map.getMaxZoom](#getmaxzoom) that fits in the viewport. LngLatBounds represent a box that is always axis-aligned with bearing 0. Bounds will be taken in [sw, ne] order. Southwest point will always be to the left of the northeast point. |
| `options?` | [`CameraForBoundsOptions`](../type-aliases/CameraForBoundsOptions.md) | Options object |

#### Returns

`undefined` \| [`CenterZoomBearing`](../type-aliases/CenterZoomBearing.md)

If map is able to fit to provided bounds, returns `center`, `zoom`, and `bearing`.
If map is unable to fit, method will warn and return undefined.

#### Example

```ts
let bbox = [[-79, 43], [-73, 45]];
let newCameraTransform = map.cameraForBounds(bbox, {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

#### Inherited from

`maplibreMap.cameraForBounds`

***

### coveringTiles()

> **coveringTiles**(`options`: `CoveringTilesOptions`): [`OverscaledTileID`](OverscaledTileID.md)[]

Returns an array of `OverscaledTileID` objects that cover the current viewport for a given tile size.
This method is useful for determining which tiles are visible in the current viewport.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `CoveringTilesOptions` | Options for calculating the covering tiles. |

#### Returns

[`OverscaledTileID`](OverscaledTileID.md)[]

An array of `OverscaledTileID` objects.

#### Example

```ts
// Get the tiles to cover the view for a 512x512px tile source
const tiles = map.coveringTiles({tileSize: 512});
```

#### Inherited from

`maplibreMap.coveringTiles`

***

### easeTo()

> **easeTo**(`options`: [`EaseToOptions`](../type-aliases/EaseToOptions.md), `eventData?`: `any`): `this`

Changes any combination of `center`, `zoom`, `bearing`, `pitch`, `roll`, and `padding` with an animated transition
between old and new values. The map will retain its current values for any
details not specified in `options`.

!!! note "Reduced Motion"
    The transition will happen instantly if the user has enabled
    the `reduced motion` accessibility feature enabled in their operating system,
    unless `options` includes `essential: true`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend`, `pitchstart`,
`pitch`, `pitchend`, `rollstart`, `roll`, `rollend`, and `rotate`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`EaseToOptions`](../type-aliases/EaseToOptions.md) | Options describing the destination and animation of the transition. Accepts [CameraOptions](../type-aliases/CameraOptions.md) and [AnimationOptions](../type-aliases/AnimationOptions.md). |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### See

[Navigate the map with game-like controls](https://maplibre.org/maplibre-gl-js/docs/examples/navigate-the-map-with-game-like-controls/)

#### Inherited from

`maplibreMap.easeTo`

***

### fitBounds()

> **fitBounds**(`bounds`: [`LngLatBoundsLike`](../type-aliases/LngLatBoundsLike.md), `options?`: [`FitBoundsOptions`](../type-aliases/FitBoundsOptions.md), `eventData?`: `any`): `this`

Pans and zooms the map to contain its visible area within the specified geographical bounds.
This function will also reset the map's bearing to 0 if bearing is nonzero.

Triggers the following events: `movestart` and `moveend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bounds` | [`LngLatBoundsLike`](../type-aliases/LngLatBoundsLike.md) | Center these bounds in the viewport and use the highest zoom level up to and including [Map.getMaxZoom](#getmaxzoom) that fits them in the viewport. Bounds will be taken in [sw, ne] order. Southwest point will always be to the left of the northeast point. |
| `options?` | [`FitBoundsOptions`](../type-aliases/FitBoundsOptions.md) | Options supports all properties from [AnimationOptions](../type-aliases/AnimationOptions.md) and [CameraOptions](../type-aliases/CameraOptions.md) in addition to the fields below. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

```ts
let bbox = [[-79, 43], [-73, 45]];
map.fitBounds(bbox, {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

#### See

[Fit a map to a bounding box](https://maplibre.org/maplibre-gl-js/docs/examples/fit-a-map-to-a-bounding-box/)

#### Inherited from

`maplibreMap.fitBounds`

***

### fitScreenCoordinates()

> **fitScreenCoordinates**(`p0`: [`PointLike`](../type-aliases/PointLike.md), `p1`: [`PointLike`](../type-aliases/PointLike.md), `bearing`: `number`, `options?`: [`FitBoundsOptions`](../type-aliases/FitBoundsOptions.md), `eventData?`: `any`): `this`

Pans, rotates and zooms the map to to fit the box made by points p0 and p1
once the map is rotated to the specified bearing. To zoom without rotating,
pass in the current map bearing.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend` and `rotate`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p0` | [`PointLike`](../type-aliases/PointLike.md) | First point on screen, in pixel coordinates |
| `p1` | [`PointLike`](../type-aliases/PointLike.md) | Second point on screen, in pixel coordinates |
| `bearing` | `number` | Desired map bearing at end of animation, in degrees |
| `options?` | [`FitBoundsOptions`](../type-aliases/FitBoundsOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

```ts
let p0 = [220, 400];
let p1 = [500, 900];
map.fitScreenCoordinates(p0, p1, map.getBearing(), {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

#### See

Used by BoxZoomHandler

#### Inherited from

`maplibreMap.fitScreenCoordinates`

***

### flyTo()

> **flyTo**(`options`: [`FlyToOptions`](../type-aliases/FlyToOptions.md), `eventData?`: `any`): `this`

Changes any combination of center, zoom, bearing, pitch, and roll, animating the transition along a curve that
evokes flight. The animation seamlessly incorporates zooming and panning to help
the user maintain her bearings even after traversing a great distance.

!!! note "Reduced Motion"
    The animation will be skipped, and this will behave equivalently to `jumpTo`
    if the user has the `reduced motion` accessibility feature enabled in their operating system,
    unless 'options' includes `essential: true`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend`, `pitchstart`,
`pitch`, `pitchend`, `rollstart`, `roll`, `rollend`, and `rotate`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`FlyToOptions`](../type-aliases/FlyToOptions.md) | Options describing the destination and animation of the transition. Accepts [CameraOptions](../type-aliases/CameraOptions.md), [AnimationOptions](../type-aliases/AnimationOptions.md), and the following additional options. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

```ts
// fly with default options to null island
map.flyTo({center: [0, 0], zoom: 9});
// using flyTo options
map.flyTo({
  center: [0, 0],
  zoom: 9,
  speed: 0.2,
  curve: 1,
  easing(t) {
    return t;
  }
});
```

#### See

 - [Fly to a location](https://maplibre.org/maplibre-gl-js/docs/examples/fly-to-a-location/)
 - [Slowly fly to a location](https://maplibre.org/maplibre-gl-js/docs/examples/slowly-fly-to-a-location/)
 - [Fly to a location based on scroll position](https://maplibre.org/maplibre-gl-js/docs/examples/fly-to-a-location-based-on-scroll-position/)

#### Inherited from

`maplibreMap.flyTo`

***

### getBearing()

> **getBearing**(): `number`

Returns the map's current bearing. The bearing is the compass direction that is "up"; for example, a bearing
of 90° orients the map so that east is up.

#### Returns

`number`

The map's current bearing.

#### See

[Navigate the map with game-like controls](https://maplibre.org/maplibre-gl-js/docs/examples/navigate-the-map-with-game-like-controls/)

#### Inherited from

`maplibreMap.getBearing`

***

### getBounds()

> **getBounds**(): `LngLatBounds`

Returns the map's geographical bounds. When the bearing or pitch is non-zero, the visible region is not
an axis-aligned rectangle, and the result is the smallest bounds that encompasses the visible region.

#### Returns

`LngLatBounds`

The geographical bounds of the map as LngLatBounds.

#### Example

```ts
let bounds = map.getBounds();
```

#### Inherited from

`maplibreMap.getBounds`

***

### getCameraTargetElevation()

> **getCameraTargetElevation**(): `number`

Returns the elevation for the point where the camera is looking.
This value corresponds to:
"meters above sea level" * "exaggeration"

#### Returns

`number`

The elevation.

#### Inherited from

`maplibreMap.getCameraTargetElevation`

***

### getCanvas()

> **getCanvas**(): `HTMLCanvasElement`

Returns the map's `<canvas>` element.

#### Returns

`HTMLCanvasElement`

The map's `<canvas>` element.

#### See

 - [Measure distances](https://maplibre.org/maplibre-gl-js/docs/examples/measure-distances/)
 - [Display a popup on hover](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/)
 - [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-the-map-on-a-clicked-symbol/)

#### Inherited from

`maplibreMap.getCanvas`

***

### getCanvasContainer()

> **getCanvasContainer**(): `HTMLElement`

Returns the HTML element containing the map's `<canvas>` element.

If you want to add non-GL overlays to the map, you should append them to this element.

This is the element to which event bindings for map interactivity (such as panning and zooming) are
attached. It will receive bubbled events from child elements such as the `<canvas>`, but not from
map controls.

#### Returns

`HTMLElement`

The container of the map's `<canvas>`.

#### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

#### Inherited from

`maplibreMap.getCanvasContainer`

***

### getCenter()

> **getCenter**(): `LngLat`

Returns the map's geographical centerpoint.

#### Returns

`LngLat`

The map's geographical centerpoint.

#### Example

Return a LngLat object such as `{lng: 0, lat: 0}`
```ts
let center = map.getCenter();
// access longitude and latitude values directly
let {lng, lat} = map.getCenter();
```

#### Inherited from

`maplibreMap.getCenter`

***

### getCenterClampedToGround()

> **getCenterClampedToGround**(): `boolean`

Returns the value of `centerClampedToGround`.

If true, the elevation of the center point will automatically be set to the terrain elevation
(or zero if terrain is not enabled). If false, the elevation of the center point will default
to sea level and will not automatically update. Defaults to true. Needs to be set to false to
keep the camera above ground when pitch \> 90 degrees.

#### Returns

`boolean`

#### Inherited from

`maplibreMap.getCenterClampedToGround`

***

### getCenterElevation()

> **getCenterElevation**(): `number`

Returns the elevation of the map's center point.

#### Returns

`number`

The elevation of the map's center point, in meters above sea level.

#### Inherited from

`maplibreMap.getCenterElevation`

***

### getContainer()

> **getContainer**(): `HTMLElement`

Returns the map's containing HTML element.

#### Returns

`HTMLElement`

The map's container.

#### Inherited from

`maplibreMap.getContainer`

***

### getFeatureState()

> **getFeatureState**(`feature`: [`FeatureIdentifier`](../type-aliases/FeatureIdentifier.md)): `any`

Gets the `state` of a feature.
A feature's `state` is a set of user-defined key-value pairs that are assigned to a feature at runtime.
Features are identified by their `feature.id` attribute, which can be any number or string.

!!! note
    To access the values in a feature's state object for the purposes of styling the feature, use the [`feature-state` expression](https://maplibre.org/maplibre-style-spec/expressions/#feature-state).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `feature` | [`FeatureIdentifier`](../type-aliases/FeatureIdentifier.md) | Feature identifier. Feature objects returned from [Map.queryRenderedFeatures](#queryrenderedfeatures) or event handlers can be used as feature identifiers. |

#### Returns

`any`

The state of the feature: a set of key-value pairs that was assigned to the feature at runtime.

#### Example

When the mouse moves over the `my-layer` layer,
get the feature state for the feature under the mouse
```ts
map.on('mousemove', 'my-layer', (e) => {
  if (e.features.length > 0) {
    map.getFeatureState({
      source: 'my-source',
      sourceLayer: 'my-source-layer',
      id: e.features[0].id
    });
  }
});
```

#### Inherited from

`maplibreMap.getFeatureState`

***

### getFilter()

> **getFilter**(`layerId`: `string`): `void` \| `FilterSpecification`

Returns the filter applied to the specified style layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the style layer whose filter to get. |

#### Returns

`void` \| `FilterSpecification`

The layer's filter.

#### Inherited from

`maplibreMap.getFilter`

***

### getGlobalState()

> **getGlobalState**(): `Record`\<`string`, `any`\>

Returns the global map state

#### Returns

`Record`\<`string`, `any`\>

The map state object.

#### Inherited from

`maplibreMap.getGlobalState`

***

### getGlyphs()

> **getGlyphs**(): `null` \| `string`

Returns the value of the style's glyphs URL

#### Returns

`null` \| `string`

glyphs Style's glyphs url

#### Inherited from

`maplibreMap.getGlyphs`

***

### getImage()

> **getImage**(`id`: `string`): [`StyleImage`](../type-aliases/StyleImage.md)

Returns an image, specified by ID, currently available in the map.
This includes both images from the style's original sprite
and any images that have been added at runtime using [Map.addImage](#addimage).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the image. |

#### Returns

[`StyleImage`](../type-aliases/StyleImage.md)

An image in the map with the specified ID.

#### Example

```ts
let coffeeShopIcon = map.getImage("coffee_cup");
```

#### Inherited from

`maplibreMap.getImage`

***

### getLayer()

> **getLayer**(`id`: `string`): `undefined` \| [`StyleLayer`](StyleLayer.md)

Returns the layer with the specified ID in the map's style.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the layer to get. |

#### Returns

`undefined` \| [`StyleLayer`](StyleLayer.md)

The layer with the specified ID, or `undefined`
if the ID corresponds to no existing layers.

#### Example

```ts
let stateDataLayer = map.getLayer('state-data');
```

#### See

 - [Filter symbols by toggling a list](https://maplibre.org/maplibre-gl-js/docs/examples/filter-symbols-by-toggling-a-list/)
 - [Filter symbols by text input](https://maplibre.org/maplibre-gl-js/docs/examples/filter-symbols-by-text-input/)

#### Inherited from

`maplibreMap.getLayer`

***

### getLayersOrder()

> **getLayersOrder**(): `string`[]

Return the ids of all layers currently in the style, including custom layers, in order.

#### Returns

`string`[]

ids of layers, in order

#### Example

```ts
const orderedLayerIds = map.getLayersOrder();
```

#### Inherited from

`maplibreMap.getLayersOrder`

***

### getLayoutProperty()

> **getLayoutProperty**(`layerId`: `string`, `name`: `string`): `any`

Returns the value of a layout property in the specified style layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to get the layout property from. |
| `name` | `string` | The name of the layout property to get. |

#### Returns

`any`

The value of the specified layout property.

#### Inherited from

`maplibreMap.getLayoutProperty`

***

### getLight()

> **getLight**(): `LightSpecification`

Returns the value of the light object.

#### Returns

`LightSpecification`

light Light properties of the style.

#### Inherited from

`maplibreMap.getLight`

***

### getMaxBounds()

> **getMaxBounds**(): `null` \| `LngLatBounds`

Returns the maximum geographical bounds the map is constrained to, or `null` if none set.

#### Returns

`null` \| `LngLatBounds`

The map object.

#### Example

```ts
let maxBounds = map.getMaxBounds();
```

#### Inherited from

`maplibreMap.getMaxBounds`

***

### getMaxPitch()

> **getMaxPitch**(): `number`

Returns the map's maximum allowable pitch.

#### Returns

`number`

The maxPitch

#### Inherited from

`maplibreMap.getMaxPitch`

***

### getMaxZoom()

> **getMaxZoom**(): `number`

Returns the map's maximum allowable zoom level.

#### Returns

`number`

The maxZoom

#### Example

```ts
let maxZoom = map.getMaxZoom();
```

#### Inherited from

`maplibreMap.getMaxZoom`

***

### getMinPitch()

> **getMinPitch**(): `number`

Returns the map's minimum allowable pitch.

#### Returns

`number`

The minPitch

#### Inherited from

`maplibreMap.getMinPitch`

***

### getMinZoom()

> **getMinZoom**(): `number`

Returns the map's minimum allowable zoom level.

#### Returns

`number`

minZoom

#### Example

```ts
let minZoom = map.getMinZoom();
```

#### Inherited from

`maplibreMap.getMinZoom`

***

### getPadding()

> **getPadding**(): [`PaddingOptions`](../type-aliases/PaddingOptions.md)

Returns the current padding applied around the map viewport.

#### Returns

[`PaddingOptions`](../type-aliases/PaddingOptions.md)

The current padding around the map viewport.

#### Inherited from

`maplibreMap.getPadding`

***

### getPaintProperty()

> **getPaintProperty**(`layerId`: `string`, `name`: `string`): `unknown`

Returns the value of a paint property in the specified style layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to get the paint property from. |
| `name` | `string` | The name of a paint property to get. |

#### Returns

`unknown`

The value of the specified paint property.

#### Inherited from

`maplibreMap.getPaintProperty`

***

### getPitch()

> **getPitch**(): `number`

Returns the map's current pitch (tilt).

#### Returns

`number`

The map's current pitch, measured in degrees away from the plane of the screen.

#### Inherited from

`maplibreMap.getPitch`

***

### getPixelRatio()

> **getPixelRatio**(): `number`

Returns the map's pixel ratio.
Note that the pixel ratio actually applied may be lower to respect maxCanvasSize.

#### Returns

`number`

The pixel ratio.

#### Inherited from

`maplibreMap.getPixelRatio`

***

### getProjection()

> **getProjection**(): `ProjectionSpecification`

Gets the ProjectionSpecification.

#### Returns

`ProjectionSpecification`

the projection specification.

#### Example

```ts
let projection = map.getProjection();
```

#### Inherited from

`maplibreMap.getProjection`

***

### getRenderWorldCopies()

> **getRenderWorldCopies**(): `boolean`

Returns the state of `renderWorldCopies`. If `true`, multiple copies of the world will be rendered side by side beyond -180 and 180 degrees longitude. If set to `false`:

- When the map is zoomed out far enough that a single representation of the world does not fill the map's entire
container, there will be blank space beyond 180 and -180 degrees longitude.
- Features that cross 180 and -180 degrees longitude will be cut in two (with one portion on the right edge of the
map and the other on the left edge of the map) at every zoom level.

#### Returns

`boolean`

The renderWorldCopies

#### Example

```ts
let worldCopiesRendered = map.getRenderWorldCopies();
```

#### See

[Render world copies](https://maplibre.org/maplibre-gl-js/docs/examples/render-world-copies/)

#### Inherited from

`maplibreMap.getRenderWorldCopies`

***

### getRoll()

> **getRoll**(): `number`

Returns the map's current roll angle.

#### Returns

`number`

The map's current roll, measured in degrees about the camera boresight.

#### Inherited from

`maplibreMap.getRoll`

***

### getSky()

> **getSky**(): `SkySpecification`

Returns the value of the style's sky.

#### Returns

`SkySpecification`

the sky properties of the style.

#### Example

```ts
map.getSky();
```

#### Inherited from

`maplibreMap.getSky`

***

### getSource()

> **getSource**\<`TSource`\>(`id`: `string`): `undefined` \| `TSource`

Returns the source with the specified ID in the map's style.

This method is often used to update a source using the instance members for the relevant
source type as defined in classes that derive from [Source](../interfaces/Source.md).
For example, setting the `data` for a GeoJSON source or updating the `url` and `coordinates`
of an image source.

#### Type Parameters

| Type Parameter |
| ------ |
| `TSource` *extends* [`Source`](../interfaces/Source.md) |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the source to get. |

#### Returns

`undefined` \| `TSource`

The style source with the specified ID or `undefined` if the ID
corresponds to no existing sources.
The shape of the object varies by source type.
A list of options for each source type is available on the MapLibre Style Specification's
[Sources](https://maplibre.org/maplibre-style-spec/sources/) page.

#### Example

```ts
let sourceObject = map.getSource('points');
```

#### See

 - [Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)
 - [Animate a point](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-point/)
 - [Add live realtime data](https://maplibre.org/maplibre-gl-js/docs/examples/add-live-realtime-data/)

#### Inherited from

`maplibreMap.getSource`

***

### getSprite()

> **getSprite**(): `object`[]

Returns the as-is value of the style's sprite.

#### Returns

`object`[]

style's sprite list of id-url pairs

#### Inherited from

`maplibreMap.getSprite`

***

### getStates()

> **getStates**(): `GlobalStatesListSpecification`

Gets the list of active global states.

#### Returns

`GlobalStatesListSpecification`

The list of active global states.

***

### getStyle()

> **getStyle**(): `StyleSpecification`

Returns the map's MapLibre style object, a JSON object which can be used to recreate the map's style.

#### Returns

`StyleSpecification`

The map's style JSON object.

#### Example

```ts
let styleJson = map.getStyle();
```

#### Inherited from

`maplibreMap.getStyle`

***

### getTerrain()

> **getTerrain**(): `null` \| `TerrainSpecification`

Get the terrain-options if terrain is loaded

#### Returns

`null` \| `TerrainSpecification`

the TerrainSpecification passed to setTerrain

#### Example

```ts
map.getTerrain(); // { source: 'terrain' };
```

#### Inherited from

`maplibreMap.getTerrain`

***

### getVerticalFieldOfView()

> **getVerticalFieldOfView**(): `number`

Returns the map's current vertical field of view, in degrees.

#### Returns

`number`

The map's current vertical field of view.

#### Default Value

```ts
36.87
```

#### Example

```ts
const verticalFieldOfView = map.getVerticalFieldOfView();
```

#### Inherited from

`maplibreMap.getVerticalFieldOfView`

***

### getZoom()

> **getZoom**(): `number`

Returns the map's current zoom level.

#### Returns

`number`

The map's current zoom level.

#### Example

```ts
map.getZoom();
```

#### Inherited from

`maplibreMap.getZoom`

***

### hasControl()

> **hasControl**(`control`: `IControl`): `boolean`

Checks if a control exists on the map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `control` | `IControl` | The [IControl](../interfaces/IControl.md) to check. |

#### Returns

`boolean`

true if map contains control.

#### Example

```ts
// Define a new navigation control.
let navigation = new NavigationControl();
// Add zoom and rotation controls to the map.
map.addControl(navigation);
// Check that the navigation control exists on the map.
map.hasControl(navigation);
```

#### Inherited from

`maplibreMap.hasControl`

***

### hasImage()

> **hasImage**(`id`: `string`): `boolean`

Check whether or not an image with a specific ID exists in the style. This checks both images
in the style's original sprite and any images
that have been added at runtime using [Map.addImage](#addimage).

An [ErrorEvent](ErrorEvent.md) will be fired if the image parameter is invalid.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the image. |

#### Returns

`boolean`

A Boolean indicating whether the image exists.

#### Example

Check if an image with the ID 'cat' exists in the style's sprite.
```ts
let catIconExists = map.hasImage('cat');
```

#### Inherited from

`maplibreMap.hasImage`

***

### isMoving()

> **isMoving**(): `boolean`

Returns true if the map is panning, zooming, rotating, or pitching due to a camera animation or user gesture.

#### Returns

`boolean`

true if the map is moving.

#### Example

```ts
let isMoving = map.isMoving();
```

#### Inherited from

`maplibreMap.isMoving`

***

### isRotating()

> **isRotating**(): `boolean`

Returns true if the map is rotating due to a camera animation or user gesture.

#### Returns

`boolean`

true if the map is rotating.

#### Example

```ts
map.isRotating();
```

#### Inherited from

`maplibreMap.isRotating`

***

### isSourceLoaded()

> **isSourceLoaded**(`id`: `string`): `boolean`

Returns a Boolean indicating whether the source is loaded. Returns `true` if the source with
the given ID in the map's style has no outstanding network requests, otherwise `false`.

A [ErrorEvent](ErrorEvent.md) event will be fired if there is no source wit the specified ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the source to be checked. |

#### Returns

`boolean`

A Boolean indicating whether the source is loaded.

#### Example

```ts
let sourceLoaded = map.isSourceLoaded('bathymetry-data');
```

#### Inherited from

`maplibreMap.isSourceLoaded`

***

### isStyleLoaded()

> **isStyleLoaded**(): `boolean` \| `void`

Returns a Boolean indicating whether the map's style is fully loaded.

#### Returns

`boolean` \| `void`

A Boolean indicating whether the style is fully loaded.

#### Example

```ts
let styleLoadStatus = map.isStyleLoaded();
```

#### Inherited from

`maplibreMap.isStyleLoaded`

***

### isZooming()

> **isZooming**(): `boolean`

Returns true if the map is zooming due to a camera animation or user gesture.

#### Returns

`boolean`

true if the map is zooming.

#### Example

```ts
let isZooming = map.isZooming();
```

#### Inherited from

`maplibreMap.isZooming`

***

### jumpTo()

> **jumpTo**(`options`: [`JumpToOptions`](../type-aliases/JumpToOptions.md), `eventData?`: `any`): `this`

Changes any combination of center, zoom, bearing, pitch, and roll, without
an animated transition. The map will retain its current values for any
details not specified in `options`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend`, `pitchstart`,
`pitch`, `pitchend`, `rollstart`, `roll`, `rollend` and `rotate`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`JumpToOptions`](../type-aliases/JumpToOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

```ts
// jump to coordinates at current zoom
map.jumpTo({center: [0, 0]});
// jump with zoom, pitch, and bearing options
map.jumpTo({
  center: [0, 0],
  zoom: 8,
  pitch: 45,
  bearing: 90
});
```

#### See

 - [Jump to a series of locations](https://maplibre.org/maplibre-gl-js/docs/examples/jump-to-a-series-of-locations/)
 - [Update a feature in realtime](https://maplibre.org/maplibre-gl-js/docs/examples/update-a-feature-in-realtime/)

#### Inherited from

`maplibreMap.jumpTo`

***

### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

#### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

#### Inherited from

`maplibreMap.listens`

***

### listImages()

> **listImages**(): `string`[]

Returns an Array of strings containing the IDs of all images currently available in the map.
This includes both images from the style's original sprite
and any images that have been added at runtime using [Map.addImage](#addimage).

#### Returns

`string`[]

An Array of strings containing the names of all sprites/images currently available in the map.

#### Example

```ts
let allImages = map.listImages();
```

#### Inherited from

`maplibreMap.listImages`

***

### loaded()

> **loaded**(): `boolean`

Returns a Boolean indicating whether the map is fully loaded.

Returns `false` if the style is not yet fully loaded,
or if there has been a change to the sources or style that
has not yet fully loaded.

#### Returns

`boolean`

A Boolean indicating whether the map is fully loaded.

#### Inherited from

`maplibreMap.loaded`

***

### loadImage()

> **loadImage**(`url`: `string`): `Promise`\<[`GetResourceResponse`](../type-aliases/GetResourceResponse.md)\<`HTMLImageElement` \| `ImageBitmap`\>\>

Load an image from an external URL to be used with [Map.addImage](#addimage). External
domains must support [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The URL of the image file. Image file must be in png, webp, or jpg format. |

#### Returns

`Promise`\<[`GetResourceResponse`](../type-aliases/GetResourceResponse.md)\<`HTMLImageElement` \| `ImageBitmap`\>\>

a promise that is resolved when the image is loaded

#### Example

Load an image from an external URL.
```ts
const response = await map.loadImage('https://picsum.photos/50/50');
// Add the loaded image to the style's sprite with the ID 'photo'.
map.addImage('photo', response.data);
```

#### See

[Add an icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-an-icon-to-the-map/)

#### Inherited from

`maplibreMap.loadImage`

***

### moveLayer()

> **moveLayer**(`id`: `string`, `beforeId?`: `string`): `this`

Moves a layer to a different z-position.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | - |
| `beforeId?` | `string` | The ID of an existing layer to insert the new layer before. |

#### Returns

`this`

The map instance.

#### Overrides

`maplibreMap.moveLayer`

***

### panBy()

> **panBy**(`offset`: [`PointLike`](../type-aliases/PointLike.md), `options?`: [`EaseToOptions`](../type-aliases/EaseToOptions.md), `eventData?`: `any`): `this`

Pans the map by the specified offset.

Triggers the following events: `movestart` and `moveend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset` | [`PointLike`](../type-aliases/PointLike.md) | `x` and `y` coordinates by which to pan the map. |
| `options?` | [`EaseToOptions`](../type-aliases/EaseToOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### See

[Navigate the map with game-like controls](https://maplibre.org/maplibre-gl-js/docs/examples/navigate-the-map-with-game-like-controls/)

#### Inherited from

`maplibreMap.panBy`

***

### panTo()

> **panTo**(`lnglat`: [`LngLatLike`](../type-aliases/LngLatLike.md), `options?`: [`EaseToOptions`](../type-aliases/EaseToOptions.md), `eventData?`: `any`): `this`

Pans the map to the specified location with an animated transition.

Triggers the following events: `movestart` and `moveend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lnglat` | [`LngLatLike`](../type-aliases/LngLatLike.md) | The location to pan the map to. |
| `options?` | [`EaseToOptions`](../type-aliases/EaseToOptions.md) | Options describing the destination and animation of the transition. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

```ts
map.panTo([-74, 38]);
// Specify that the panTo animation should last 5000 milliseconds.
map.panTo([-74, 38], {duration: 5000});
```

#### See

[Update a feature in realtime](https://maplibre.org/maplibre-gl-js/docs/examples/update-a-feature-in-realtime/)

#### Inherited from

`maplibreMap.panTo`

***

### project()

> **project**(`lnglat`: [`LngLatLike`](../type-aliases/LngLatLike.md)): `Point`

Returns a [Point](https://github.com/mapbox/point-geometry) representing pixel coordinates, relative to the map's `container`,
that correspond to the specified geographical location.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lnglat` | [`LngLatLike`](../type-aliases/LngLatLike.md) | The geographical location to project. |

#### Returns

`Point`

The [Point](https://github.com/mapbox/point-geometry) corresponding to `lnglat`, relative to the map's `container`.

#### Example

```ts
let coordinate = [-122.420679, 37.772537];
let point = map.project(coordinate);
```

#### Inherited from

`maplibreMap.project`

***

### queryRenderedFeatures()

> **queryRenderedFeatures**(`geometryOrOptions?`: [`PointLike`](../type-aliases/PointLike.md) \| \[[`PointLike`](../type-aliases/PointLike.md), [`PointLike`](../type-aliases/PointLike.md)\] \| [`QueryRenderedFeaturesOptions`](../type-aliases/QueryRenderedFeaturesOptions.md), `options?`: [`QueryRenderedFeaturesOptions`](../type-aliases/QueryRenderedFeaturesOptions.md)): [`MapGeoJSONFeature`](../type-aliases/MapGeoJSONFeature.md)[]

Returns an array of MapGeoJSONFeature objects
representing visible features that satisfy the query parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `geometryOrOptions?` | [`PointLike`](../type-aliases/PointLike.md) \| \[[`PointLike`](../type-aliases/PointLike.md), [`PointLike`](../type-aliases/PointLike.md)\] \| [`QueryRenderedFeaturesOptions`](../type-aliases/QueryRenderedFeaturesOptions.md) | (optional) The geometry of the query region: either a single point or southwest and northeast points describing a bounding box. Omitting this parameter (i.e. calling [Map.queryRenderedFeatures](#queryrenderedfeatures) with zero arguments, or with only a `options` argument) is equivalent to passing a bounding box encompassing the entire map viewport. The geometryOrOptions can receive a [QueryRenderedFeaturesOptions](../type-aliases/QueryRenderedFeaturesOptions.md) only to support a situation where the function receives only one parameter which is the options parameter. |
| `options?` | [`QueryRenderedFeaturesOptions`](../type-aliases/QueryRenderedFeaturesOptions.md) | (optional) Options object. |

#### Returns

[`MapGeoJSONFeature`](../type-aliases/MapGeoJSONFeature.md)[]

An array of MapGeoJSONFeature objects.

The `properties` value of each returned feature object contains the properties of its source feature. For GeoJSON sources, only
string and numeric property values are supported (i.e. `null`, `Array`, and `Object` values are not supported).

Each feature includes top-level `layer`, `source`, and `sourceLayer` properties. The `layer` property is an object
representing the style layer to  which the feature belongs. Layout and paint properties in this object contain values
which are fully evaluated for the given zoom level and feature.

Only features that are currently rendered are included. Some features will **not** be included, like:

- Features from layers whose `visibility` property is `"none"`.
- Features from layers whose zoom range excludes the current zoom level.
- Symbol features that have been hidden due to text or icon collision.

Features from all other layers are included, including features that may have no visible
contribution to the rendered result; for example, because the layer's opacity or color alpha component is set to
0.

The topmost rendered feature appears first in the returned array, and subsequent features are sorted by
descending z-order. Features that are rendered multiple times (due to wrapping across the antemeridian at low
zoom levels) are returned only once (though subject to the following caveat).

Because features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature
geometries may be split or duplicated across tile boundaries and, as a result, features may appear multiple
times in query results. For example, suppose there is a highway running through the bounding rectangle of a query.
The results of the query will be those parts of the highway that lie within the map tiles covering the bounding
rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile
will be returned as a separate feature. Similarly, a point feature near a tile boundary may appear in multiple
tiles due to tile buffering.

#### Examples

Find all features at a point
```ts
let features = map.queryRenderedFeatures(
  [20, 35],
  { layers: ['my-layer-name'] }
);
```

Find all features within a static bounding box
```ts
let features = map.queryRenderedFeatures(
  [[10, 20], [30, 50]],
  { layers: ['my-layer-name'] }
);
```

Find all features within a bounding box around a point
```ts
let width = 10;
let height = 20;
let features = map.queryRenderedFeatures([
  [point.x - width / 2, point.y - height / 2],
  [point.x + width / 2, point.y + height / 2]
], { layers: ['my-layer-name'] });
```

Query all rendered features from a single layer
```ts
let features = map.queryRenderedFeatures({ layers: ['my-layer-name'] });
```

#### See

[Get features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-features-under-the-mouse-pointer/)

#### Inherited from

`maplibreMap.queryRenderedFeatures`

***

### querySourceFeatures()

> **querySourceFeatures**(`sourceId`: `string`, `parameters?`: `null` \| [`QuerySourceFeatureOptions`](../type-aliases/QuerySourceFeatureOptions.md)): [`GeoJSONFeature`](GeoJSONFeature.md)[]

Returns an array of MapGeoJSONFeature objects
representing features within the specified vector tile or GeoJSON source that satisfy the query parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sourceId` | `string` | The ID of the vector tile or GeoJSON source to query. |
| `parameters?` | `null` \| [`QuerySourceFeatureOptions`](../type-aliases/QuerySourceFeatureOptions.md) | The options object. |

#### Returns

[`GeoJSONFeature`](GeoJSONFeature.md)[]

An array of MapGeoJSONFeature objects.

In contrast to [Map.queryRenderedFeatures](#queryrenderedfeatures), this function returns all features matching the query parameters,
whether or not they are rendered by the current style (i.e. visible). The domain of the query includes all currently-loaded
vector tiles and GeoJSON source tiles: this function does not check tiles outside the currently
visible viewport.

Because features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature
geometries may be split or duplicated across tile boundaries and, as a result, features may appear multiple
times in query results. For example, suppose there is a highway running through the bounding rectangle of a query.
The results of the query will be those parts of the highway that lie within the map tiles covering the bounding
rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile
will be returned as a separate feature. Similarly, a point feature near a tile boundary may appear in multiple
tiles due to tile buffering.

#### Example

Find all features in one source layer in a vector source
```ts
let features = map.querySourceFeatures('your-source-id', {
  sourceLayer: 'your-source-layer'
});
```

#### Inherited from

`maplibreMap.querySourceFeatures`

***

### queryTerrainElevation()

> **queryTerrainElevation**(`lngLatLike`: [`LngLatLike`](../type-aliases/LngLatLike.md)): `null` \| `number`

Gets the elevation at a given location, in meters above sea level.
Returns null if terrain is not enabled.
If terrain is enabled with some exaggeration value, the value returned here will be reflective of (multiplied by) that exaggeration value.
This method should be used for proper positioning of custom 3d objects, as explained [here](https://maplibre.org/maplibre-gl-js/docs/examples/adding-3d-models-using-threejs-on-terrain/)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lngLatLike` | [`LngLatLike`](../type-aliases/LngLatLike.md) | [x,y] or LngLat coordinates of the location |

#### Returns

`null` \| `number`

elevation in meters

#### Inherited from

`maplibreMap.queryTerrainElevation`

***

### redraw()

> **redraw**(): `this`

Force a synchronous redraw of the map.

#### Returns

`this`

#### Example

```ts
map.redraw();
```

#### Inherited from

`maplibreMap.redraw`

***

### refreshTiles()

> **refreshTiles**(`sourceId`: `string`, `tileIds?`: `object`[]): `void`

Triggers a reload of the selected tiles

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sourceId` | `string` | The ID of the source |
| `tileIds?` | `object`[] | An array of tile IDs to be reloaded. If not defined, all tiles will be reloaded. |

#### Returns

`void`

#### Example

```ts
map.refreshTiles('satellite', [{x:1024, y: 1023, z: 11}, {x:1023, y: 1023, z: 11}]);
```

#### Inherited from

`maplibreMap.refreshTiles`

***

### remove()

> **remove**(): `this`

Removes the map from its parent container.

#### Returns

`this`

The map instance.

#### Overrides

`maplibreMap.remove`

***

### removeControl()

> **removeControl**(`control`: `IControl`): `Map$1`

Removes the control from the map.

An [ErrorEvent](ErrorEvent.md) will be fired if the image parameter is invalid.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `control` | `IControl` | The [IControl](../interfaces/IControl.md) to remove. |

#### Returns

`Map$1`

#### Example

```ts
// Define a new navigation control.
let navigation = new NavigationControl();
// Add zoom and rotation controls to the map.
map.addControl(navigation);
// Remove zoom and rotation controls from the map.
map.removeControl(navigation);
```

#### Inherited from

`maplibreMap.removeControl`

***

### removeFeatureState()

> **removeFeatureState**(`target`: [`FeatureIdentifier`](../type-aliases/FeatureIdentifier.md), `key?`: `string`): `this`

Removes the `state` of a feature, setting it back to the default behavior.
If only a `target.source` is specified, it will remove the state for all features from that source.
If `target.id` is also specified, it will remove all keys for that feature's state.
If `key` is also specified, it removes only that key from that feature's state.
Features are identified by their `feature.id` attribute, which can be any number or string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | [`FeatureIdentifier`](../type-aliases/FeatureIdentifier.md) | Identifier of where to remove state. It can be a source, a feature, or a specific key of feature. Feature objects returned from [Map.queryRenderedFeatures](#queryrenderedfeatures) or event handlers can be used as feature identifiers. |
| `key?` | `string` | (optional) The key in the feature state to reset. |

#### Returns

`this`

#### Examples

Reset the entire state object for all features in the `my-source` source
```ts
map.removeFeatureState({
  source: 'my-source'
});
```

When the mouse leaves the `my-layer` layer,
reset the entire state object for the
feature under the mouse
```ts
map.on('mouseleave', 'my-layer', (e) => {
  map.removeFeatureState({
    source: 'my-source',
    sourceLayer: 'my-source-layer',
    id: e.features[0].id
  });
});
```

When the mouse leaves the `my-layer` layer,
reset only the `hover` key-value pair in the
state for the feature under the mouse
```ts
map.on('mouseleave', 'my-layer', (e) => {
  map.removeFeatureState({
    source: 'my-source',
    sourceLayer: 'my-source-layer',
    id: e.features[0].id
  }, 'hover');
});
```

#### Inherited from

`maplibreMap.removeFeatureState`

***

### removeImage()

> **removeImage**(`id`: `string`): `void`

Remove an image from a style. This can be an image from the style's original
sprite or any images
that have been added at runtime using [Map.addImage](#addimage).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the image. |

#### Returns

`void`

#### Example

```ts
// If an image with the ID 'cat' exists in
// the style's sprite, remove it.
if (map.hasImage('cat')) map.removeImage('cat');
```

#### Inherited from

`maplibreMap.removeImage`

***

### removeLayer()

> **removeLayer**(`id`: `string`): `this`

Adds a layer to the map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The layer's ID. |

#### Returns

`this`

The map instance.

#### Overrides

`maplibreMap.removeLayer`

***

### removeSource()

> **removeSource**(`id`: `string`): `Map$1`

Removes a source from the map's style.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the source to remove. |

#### Returns

`Map$1`

#### Example

```ts
map.removeSource('bathymetry-data');
```

#### Inherited from

`maplibreMap.removeSource`

***

### removeSprite()

> **removeSprite**(`id`: `string`): `this`

Removes the sprite from the map's style. Fires the `style` event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the sprite to remove. If the sprite is declared as a single URL, the ID must be "default". |

#### Returns

`this`

#### Example

```ts
map.removeSprite('sprite-two');
map.removeSprite('default');
```

#### Inherited from

`maplibreMap.removeSprite`

***

### resetNorth()

> **resetNorth**(`options?`: [`AnimationOptions`](../type-aliases/AnimationOptions.md), `eventData?`: `any`): `this`

Rotates the map so that north is up (0° bearing), with an animated transition.

Triggers the following events: `movestart`, `moveend`, and `rotate`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AnimationOptions`](../type-aliases/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Inherited from

`maplibreMap.resetNorth`

***

### resetNorthPitch()

> **resetNorthPitch**(`options?`: [`AnimationOptions`](../type-aliases/AnimationOptions.md), `eventData?`: `any`): `this`

Rotates and pitches the map so that north is up (0° bearing) and pitch and roll are 0°, with an animated transition.

Triggers the following events: `movestart`, `move`, `moveend`, `pitchstart`, `pitch`, `pitchend`, `rollstart`, `roll`, `rollend`, and `rotate`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AnimationOptions`](../type-aliases/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Inherited from

`maplibreMap.resetNorthPitch`

***

### resize()

> **resize**(`eventData?`: `any`, `constrainTransform?`: `boolean`): `Map$1`

Resizes the map according to the dimensions of its
`container` element.

Checks if the map container size changed and updates the map if it has changed.
This method must be called after the map's `container` is resized programmatically
or when the map is shown after being initially hidden with CSS.

Triggers the following events: `movestart`, `move`, `moveend`, and `resize`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventData?` | `any` | Additional properties to be passed to `movestart`, `move`, `resize`, and `moveend` events that get triggered as a result of resize. This can be useful for differentiating the source of an event (for example, user-initiated or programmatically-triggered events). |
| `constrainTransform?` | `boolean` | - |

#### Returns

`Map$1`

#### Example

Resize the map when the map container is shown after being initially hidden with CSS.
```ts
let mapDiv = document.getElementById('map');
if (mapDiv.style.visibility === true) map.resize();
```

#### Inherited from

`maplibreMap.resize`

***

### rotateTo()

> **rotateTo**(`bearing`: `number`, `options?`: [`EaseToOptions`](../type-aliases/EaseToOptions.md), `eventData?`: `any`): `this`

Rotates the map to the specified bearing, with an animated transition. The bearing is the compass direction
that is "up"; for example, a bearing of 90° orients the map so that east is up.

Triggers the following events: `movestart`, `moveend`, and `rotate`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bearing` | `number` | The desired bearing. |
| `options?` | [`EaseToOptions`](../type-aliases/EaseToOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Inherited from

`maplibreMap.rotateTo`

***

### setBearing()

> **setBearing**(`bearing`: `number`, `eventData?`: `any`): `this`

Sets the map's bearing (rotation). The bearing is the compass direction that is "up"; for example, a bearing
of 90° orients the map so that east is up.

Equivalent to `jumpTo({bearing: bearing})`.

Triggers the following events: `movestart`, `moveend`, and `rotate`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bearing` | `number` | The desired bearing. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

Rotate the map to 90 degrees
```ts
map.setBearing(90);
```

#### Inherited from

`maplibreMap.setBearing`

***

### setCenter()

> **setCenter**(`center`: [`LngLatLike`](../type-aliases/LngLatLike.md), `eventData?`: `any`): `this`

Sets the map's geographical centerpoint. Equivalent to `jumpTo({center: center})`.

Triggers the following events: `movestart` and `moveend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `center` | [`LngLatLike`](../type-aliases/LngLatLike.md) | The centerpoint to set. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

```ts
map.setCenter([-74, 38]);
```

#### Inherited from

`maplibreMap.setCenter`

***

### setCenterClampedToGround()

> **setCenterClampedToGround**(`centerClampedToGround`: `boolean`): `void`

Sets the value of `centerClampedToGround`.

If true, the elevation of the center point will automatically be set to the terrain elevation
(or zero if terrain is not enabled). If false, the elevation of the center point will default
to sea level and will not automatically update. Defaults to true. Needs to be set to false to
keep the camera above ground when pitch \> 90 degrees.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `centerClampedToGround` | `boolean` |

#### Returns

`void`

#### Inherited from

`maplibreMap.setCenterClampedToGround`

***

### setCenterElevation()

> **setCenterElevation**(`elevation`: `number`, `eventData?`: `any`): `this`

Sets the elevation of the map's center point, in meters above sea level. Equivalent to `jumpTo({elevation: elevation})`.

Triggers the following events: `movestart` and `moveend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `elevation` | `number` | The elevation to set, in meters above sea level. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Inherited from

`maplibreMap.setCenterElevation`

***

### setContainer()

> **setContainer**(`container`: `string` \| `HTMLElement`): `this`

Sets the container for the map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `container` | `string` \| `HTMLElement` | The container element or the ID of the container element. |

#### Returns

`this`

The map instance.

***

### setEventedParent()

> **setEventedParent**(`parent?`: `null` \| `Evented`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | `null` \| `Evented` |
| `data?` | `any` |

#### Returns

`this`

#### Inherited from

`maplibreMap.setEventedParent`

***

### setFeatureState()

> **setFeatureState**(`feature`: [`FeatureIdentifier`](../type-aliases/FeatureIdentifier.md), `state`: `any`): `this`

Sets the `state` of a feature.
A feature's `state` is a set of user-defined key-value pairs that are assigned to a feature at runtime.
When using this method, the `state` object is merged with any existing key-value pairs in the feature's state.
Features are identified by their `feature.id` attribute, which can be any number or string.

This method can only be used with sources that have a `feature.id` attribute. The `feature.id` attribute can be defined in three ways:

- For vector or GeoJSON sources, including an `id` attribute in the original data file.
- For vector or GeoJSON sources, using the [`promoteId`](https://maplibre.org/maplibre-style-spec/sources/#promoteid) option at the time the source is defined.
- For GeoJSON sources, using the [`generateId`](https://maplibre.org/maplibre-style-spec/sources/#generateid) option to auto-assign an `id` based on the feature's index in the source data. If you change feature data using `map.getSource('some id').setData(..)`, you may need to re-apply state taking into account updated `id` values.

!!! note
    You can use the [`feature-state` expression](https://maplibre.org/maplibre-style-spec/expressions/#feature-state) to access the values in a feature's state object for the purposes of styling.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `feature` | [`FeatureIdentifier`](../type-aliases/FeatureIdentifier.md) | Feature identifier. Feature objects returned from [Map.queryRenderedFeatures](#queryrenderedfeatures) or event handlers can be used as feature identifiers. |
| `state` | `any` | A set of key-value pairs. The values should be valid JSON types. |

#### Returns

`this`

#### Example

```ts
// When the mouse moves over the `my-layer` layer, update
// the feature state for the feature under the mouse
map.on('mousemove', 'my-layer', (e) => {
  if (e.features.length > 0) {
    map.setFeatureState({
      source: 'my-source',
      sourceLayer: 'my-source-layer',
      id: e.features[0].id,
    }, {
      hover: true
    });
  }
});
```

#### See

[Create a hover effect](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/)

#### Inherited from

`maplibreMap.setFeatureState`

***

### setFilter()

> **setFilter**(`layerId`: `string`, `filter?`: `null` \| `FilterSpecification`, `options?`: [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md)): `this`

Sets the filter for the specified style layer.

Filters control which features a style layer renders from its source.
Any feature for which the filter expression evaluates to `true` will be
rendered on the map. Those that are false will be hidden.

Use `setFilter` to show a subset of your source data.

To clear the filter, pass `null` or `undefined` as the second parameter.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to which the filter will be applied. |
| `filter?` | `null` \| `FilterSpecification` | The filter, conforming to the MapLibre Style Specification's [filter definition](https://maplibre.org/maplibre-style-spec/layers/#filter). If `null` or `undefined` is provided, the function removes any existing filter from the layer. |
| `options?` | [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md) | Options object. |

#### Returns

`this`

#### Examples

Display only features with the 'name' property 'USA'
```ts
map.setFilter('my-layer', ['==', ['get', 'name'], 'USA']);
```

Display only features with five or more 'available-spots'
```ts
map.setFilter('bike-docks', ['>=', ['get', 'available-spots'], 5]);
```

Remove the filter for the 'bike-docks' style layer
```ts
map.setFilter('bike-docks', null);
```

#### See

[Create a timeline animation](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-time-slider/)

#### Inherited from

`maplibreMap.setFilter`

***

### setGlobalStateProperty()

> **setGlobalStateProperty**(`propertyName`: `string`, `value`: `any`): `this`

Sets a global state property that can be retrieved with the [`global-state` expression](https://maplibre.org/maplibre-style-spec/expressions/#global-state).
If the value is null, it resets the property to its default value defined in the [`state` style property](https://maplibre.org/maplibre-style-spec/root/#state).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `propertyName` | `string` | The name of the state property to set. |
| `value` | `any` | The value of the state property to set. |

#### Returns

`this`

#### Inherited from

`maplibreMap.setGlobalStateProperty`

***

### setGlyphs()

> **setGlyphs**(`glyphsUrl`: `null` \| `string`, `options?`: [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md)): `this`

Sets the value of the style's glyphs property.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `glyphsUrl` | `null` \| `string` | Glyph URL to set. Must conform to the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/glyphs/). |
| `options?` | [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md) | Options object. |

#### Returns

`this`

#### Example

```ts
map.setGlyphs('https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf');
```

#### Inherited from

`maplibreMap.setGlyphs`

***

### setLayerZoomRange()

> **setLayerZoomRange**(`layerId`: `string`, `minzoom`: `number`, `maxzoom`: `number`): `this`

Sets the zoom extent for the specified style layer. The zoom extent includes the
[minimum zoom level](https://maplibre.org/maplibre-style-spec/layers/#minzoom)
and [maximum zoom level](https://maplibre.org/maplibre-style-spec/layers/#maxzoom))
at which the layer will be rendered.

!!! note
    For style layers using vector sources, style layers cannot be rendered at zoom levels lower than the
    minimum zoom level of the _source layer_ because the data does not exist at those zoom levels. If the minimum
    zoom level of the source layer is higher than the minimum zoom level defined in the style layer, the style
    layer will not be rendered at all zoom levels in the zoom range.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to which the zoom extent will be applied. |
| `minzoom` | `number` | The minimum zoom to set (0-24). |
| `maxzoom` | `number` | The maximum zoom to set (0-24). |

#### Returns

`this`

#### Example

```ts
map.setLayerZoomRange('my-layer', 2, 5);
```

#### Inherited from

`maplibreMap.setLayerZoomRange`

***

### setLayoutProperty()

> **setLayoutProperty**(`layerId`: `string`, `name`: `string`, `value`: `any`, `options?`: [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md)): `this`

Sets the value of a layout property in the specified style layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to set the layout property in. |
| `name` | `string` | The name of the layout property to set. |
| `value` | `any` | The value of the layout property. Must be of a type appropriate for the property, as defined in the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/). |
| `options?` | [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md) | The options object. |

#### Returns

`this`

#### Example

```ts
map.setLayoutProperty('my-layer', 'visibility', 'none');
```

#### Inherited from

`maplibreMap.setLayoutProperty`

***

### setLight()

> **setLight**(`light`: `LightSpecification`, `options?`: [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md)): `this`

Sets the any combination of light values.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `light` | `LightSpecification` | Light properties to set. Must conform to the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/light). |
| `options?` | [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md) | Options object. |

#### Returns

`this`

#### Example

```ts
let layerVisibility = map.getLayoutProperty('my-layer', 'visibility');
```

#### Inherited from

`maplibreMap.setLight`

***

### setMaxBounds()

> **setMaxBounds**(`bounds?`: `null` \| [`LngLatBoundsLike`](../type-aliases/LngLatBoundsLike.md)): `Map$1`

Sets or clears the map's geographical bounds.

Pan and zoom operations are constrained within these bounds.
If a pan or zoom is performed that would
display regions outside these bounds, the map will
instead display a position and zoom level
as close as possible to the operation's request while still
remaining within the bounds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bounds?` | `null` \| [`LngLatBoundsLike`](../type-aliases/LngLatBoundsLike.md) | The maximum bounds to set. If `null` or `undefined` is provided, the function removes the map's maximum bounds. |

#### Returns

`Map$1`

#### Example

Define bounds that conform to the `LngLatBoundsLike` object as set the max bounds.
```ts
let bounds = [
  [-74.04728, 40.68392], // [west, south]
  [-73.91058, 40.87764]  // [east, north]
];
map.setMaxBounds(bounds);
```

#### Inherited from

`maplibreMap.setMaxBounds`

***

### setMaxPitch()

> **setMaxPitch**(`maxPitch?`: `null` \| `number`): `Map$1`

Sets or clears the map's maximum pitch.
If the map's current pitch is higher than the new maximum,
the map will pitch to the new maximum.

A [ErrorEvent](ErrorEvent.md) event will be fired if maxPitch is out of bounds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxPitch?` | `null` \| `number` | The maximum pitch to set (0-180). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. If `null` or `undefined` is provided, the function removes the current maximum pitch (sets it to 60). |

#### Returns

`Map$1`

#### Inherited from

`maplibreMap.setMaxPitch`

***

### setMaxZoom()

> **setMaxZoom**(`maxZoom?`: `null` \| `number`): `Map$1`

Sets or clears the map's maximum zoom level.
If the map's current zoom level is higher than the new maximum,
the map will zoom to the new maximum.

A [ErrorEvent](ErrorEvent.md) event will be fired if minZoom is out of bounds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxZoom?` | `null` \| `number` | The maximum zoom level to set. If `null` or `undefined` is provided, the function removes the current maximum zoom (sets it to 22). |

#### Returns

`Map$1`

#### Example

```ts
map.setMaxZoom(18.75);
```

#### Inherited from

`maplibreMap.setMaxZoom`

***

### setMinPitch()

> **setMinPitch**(`minPitch?`: `null` \| `number`): `Map$1`

Sets or clears the map's minimum pitch.
If the map's current pitch is lower than the new minimum,
the map will pitch to the new minimum.

A [ErrorEvent](ErrorEvent.md) event will be fired if minPitch is out of bounds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `minPitch?` | `null` \| `number` | The minimum pitch to set (0-180). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. If `null` or `undefined` is provided, the function removes the current minimum pitch (i.e. sets it to 0). |

#### Returns

`Map$1`

#### Inherited from

`maplibreMap.setMinPitch`

***

### setMinZoom()

> **setMinZoom**(`minZoom?`: `null` \| `number`): `Map$1`

Sets or clears the map's minimum zoom level.
If the map's current zoom level is lower than the new minimum,
the map will zoom to the new minimum.

It is not always possible to zoom out and reach the set `minZoom`.
Other factors such as map height may restrict zooming. For example,
if the map is 512px tall it will not be possible to zoom below zoom 0
no matter what the `minZoom` is set to.

A [ErrorEvent](ErrorEvent.md) event will be fired if minZoom is out of bounds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `minZoom?` | `null` \| `number` | The minimum zoom level to set (-2 - 24). If `null` or `undefined` is provided, the function removes the current minimum zoom (i.e. sets it to -2). |

#### Returns

`Map$1`

#### Example

```ts
map.setMinZoom(12.25);
```

#### Inherited from

`maplibreMap.setMinZoom`

***

### setPadding()

> **setPadding**(`padding`: [`PaddingOptions`](../type-aliases/PaddingOptions.md), `eventData?`: `any`): `this`

Sets the padding in pixels around the viewport.

Equivalent to `jumpTo({padding: padding})`.

Triggers the following events: `movestart` and `moveend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `padding` | [`PaddingOptions`](../type-aliases/PaddingOptions.md) | The desired padding. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

Sets a left padding of 300px, and a top padding of 50px
```ts
map.setPadding({ left: 300, top: 50 });
```

#### Inherited from

`maplibreMap.setPadding`

***

### setPaintProperty()

> **setPaintProperty**(`layerId`: `string`, `name`: `string`, `value`: `any`, `options?`: [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md)): `this`

Sets the value of a paint property in the specified style layer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to set the paint property in. |
| `name` | `string` | The name of the paint property to set. |
| `value` | `any` | The value of the paint property to set. Must be of a type appropriate for the property, as defined in the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/). Pass `null` to unset the existing value. |
| `options?` | [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md) | Options object. |

#### Returns

`this`

#### Example

```ts
map.setPaintProperty('my-layer', 'fill-color', '#faafee');
```

#### See

 - [Change a layer's color with buttons](https://maplibre.org/maplibre-gl-js/docs/examples/change-a-layers-color-with-buttons/)
 - [Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

#### Inherited from

`maplibreMap.setPaintProperty`

***

### setPitch()

> **setPitch**(`pitch`: `number`, `eventData?`: `any`): `this`

Sets the map's pitch (tilt). Equivalent to `jumpTo({pitch: pitch})`.

Triggers the following events: `movestart`, `moveend`, `pitchstart`, and `pitchend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pitch` | `number` | The pitch to set, measured in degrees away from the plane of the screen (0-60). |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Inherited from

`maplibreMap.setPitch`

***

### setPixelRatio()

> **setPixelRatio**(`pixelRatio`: `number`): `void`

Sets the map's pixel ratio. This allows to override `devicePixelRatio`.
After this call, the canvas' `width` attribute will be `container.clientWidth * pixelRatio`
and its height attribute will be `container.clientHeight * pixelRatio`.
Set this to null to disable `devicePixelRatio` override.
Note that the pixel ratio actually applied may be lower to respect maxCanvasSize.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixelRatio` | `number` | The pixel ratio. |

#### Returns

`void`

#### Inherited from

`maplibreMap.setPixelRatio`

***

### setProjection()

> **setProjection**(`projection`: `ProjectionSpecification`): `this`

Sets the ProjectionSpecification.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projection` | `ProjectionSpecification` | the projection specification to set |

#### Returns

`this`

#### Inherited from

`maplibreMap.setProjection`

***

### setRenderWorldCopies()

> **setRenderWorldCopies**(`renderWorldCopies?`: `null` \| `boolean`): `Map$1`

Sets the state of `renderWorldCopies`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `renderWorldCopies?` | `null` \| `boolean` | If `true`, multiple copies of the world will be rendered side by side beyond -180 and 180 degrees longitude. If set to `false`: - When the map is zoomed out far enough that a single representation of the world does not fill the map's entire container, there will be blank space beyond 180 and -180 degrees longitude. - Features that cross 180 and -180 degrees longitude will be cut in two (with one portion on the right edge of the map and the other on the left edge of the map) at every zoom level. `undefined` is treated as `true`, `null` is treated as `false`. |

#### Returns

`Map$1`

#### Example

```ts
map.setRenderWorldCopies(true);
```

#### See

[Render world copies](https://maplibre.org/maplibre-gl-js/docs/examples/render-world-copies/)

#### Inherited from

`maplibreMap.setRenderWorldCopies`

***

### setRoll()

> **setRoll**(`roll`: `number`, `eventData?`: `any`): `this`

Sets the map's roll angle. Equivalent to `jumpTo({roll: roll})`.

Triggers the following events: `movestart`, `moveend`, `rollstart`, and `rollend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roll` | `number` | The roll to set, measured in degrees about the camera boresight |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Inherited from

`maplibreMap.setRoll`

***

### setSky()

> **setSky**(`sky`: `SkySpecification`, `options?`: [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md)): `this`

Sets the value of style's sky properties.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sky` | `SkySpecification` | Sky properties to set. Must conform to the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/sky/). |
| `options?` | [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md) | Options object. |

#### Returns

`this`

#### Example

```ts
map.setSky({'atmosphere-blend': 1.0});
```

#### Inherited from

`maplibreMap.setSky`

***

### setSourceTileLodParams()

> **setSourceTileLodParams**(`maxZoomLevelsOnScreen`: `number`, `tileCountMaxMinRatio`: `number`, `sourceId?`: `string`): `this`

Change the tile Level of Detail behavior of the specified source. These parameters have no effect when
pitch == 0, and the largest effect when the horizon is visible on screen.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxZoomLevelsOnScreen` | `number` | The maximum number of distinct zoom levels allowed on screen at a time. There will generally be fewer zoom levels on the screen, the maximum can only be reached when the horizon is at the top of the screen. Increasing the maximum number of zoom levels causes the zoom level to decay faster toward the horizon. |
| `tileCountMaxMinRatio` | `number` | The ratio of the maximum number of tiles loaded (at high pitch) to the minimum number of tiles loaded. Increasing this ratio allows more tiles to be loaded at high pitch angles. If the ratio would otherwise be exceeded, the zoom level is reduced uniformly to keep the number of tiles within the limit. |
| `sourceId?` | `string` | The ID of the source to set tile LOD parameters for. All sources will be updated if unspecified. If `sourceId` is specified but a corresponding source does not exist, an error is thrown. |

#### Returns

`this`

#### Example

```ts
map.setSourceTileLodParams(4.0, 3.0, 'terrain');
```

#### See

[Modify Level of Detail behavior](https://maplibre.org/maplibre-gl-js/docs/examples/level-of-detail-control/)

#### Inherited from

`maplibreMap.setSourceTileLodParams`

***

### setSprite()

> **setSprite**(`spriteUrl`: `null` \| `string`, `options?`: [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md)): `this`

Sets the value of the style's sprite property.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `spriteUrl` | `null` \| `string` | Sprite URL to set. |
| `options?` | [`StyleSetterOptions`](../type-aliases/StyleSetterOptions.md) | Options object. |

#### Returns

`this`

#### Example

```ts
map.setSprite('YOUR_SPRITE_URL');
```

#### Inherited from

`maplibreMap.setSprite`

***

### setStates()

> **setStates**(`statesActive`: `GlobalStatesListSpecification`): `this`

Sets the active global states.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `statesActive` | `GlobalStatesListSpecification` | The list of states to activate. |

#### Returns

`this`

The map instance.

***

### setStyle()

> **setStyle**(`style`: `string` \| `StyleSpecification`, `options?`: [`StyleSwapOptions`](../type-aliases/StyleSwapOptions.md) & [`StyleOptions`](../type-aliases/StyleOptions.md), `update?`: `boolean`): `this`

Sets the style of the map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `style` | `string` \| `StyleSpecification` | The style to set. |
| `options?` | [`StyleSwapOptions`](../type-aliases/StyleSwapOptions.md) & [`StyleOptions`](../type-aliases/StyleOptions.md) | Additional options for the style. |
| `update?` | `boolean` | - |

#### Returns

`this`

The map instance.

#### Overrides

`maplibreMap.setStyle`

***

### setTerrain()

> **setTerrain**(`options`: `null` \| `TerrainSpecification`): `this`

Loads a 3D terrain mesh, based on a "raster-dem" source.

Triggers the `terrain` event.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `null` \| `TerrainSpecification` | Options object. |

#### Returns

`this`

#### Example

```ts
map.setTerrain({ source: 'terrain' });
```

#### Inherited from

`maplibreMap.setTerrain`

***

### setTransformConstrain()

> **setTransformConstrain**(`constrain?`: `null` \| [`TransformConstrainFunction`](../type-aliases/TransformConstrainFunction.md)): `Map$1`

Sets or clears the callback overriding how the map constrains the viewport's lnglat and zoom to respect the longitude and latitude bounds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constrain?` | `null` \| [`TransformConstrainFunction`](../type-aliases/TransformConstrainFunction.md) | A [TransformConstrainFunction](../type-aliases/TransformConstrainFunction.md) callback defining how the viewport should respect the bounds. `null` clears the callback and reverses the override of the map transform's default constrain function. |

#### Returns

`Map$1`

#### Example

```ts
function customTransformConstrain(lngLat, zoom) {
  return {center: lngLat, zoom: zoom ?? 0};
};
map.setTransformConstrain(customTransformConstrain);
```

#### See

[Customize the map transform constrain](https://maplibre.org/maplibre-gl-js/docs/examples/customize-the-map-transform-constrain/)

#### Inherited from

`maplibreMap.setTransformConstrain`

***

### setTransformRequest()

> **setTransformRequest**(`transformRequest`: `null` \| [`RequestTransformFunction`](../type-aliases/RequestTransformFunction.md)): `this`

Updates the requestManager's transform request with a new function

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transformRequest` | `null` \| [`RequestTransformFunction`](../type-aliases/RequestTransformFunction.md) | A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests. Expected to return an object with a `url` property and optionally `headers` and `credentials` properties |

#### Returns

`this`

#### Example

```ts
map.setTransformRequest((url: string, resourceType: string) => {});
```

#### Inherited from

`maplibreMap.setTransformRequest`

***

### setVerticalFieldOfView()

> **setVerticalFieldOfView**(`fov`: `number`, `eventData?`: `any`): `this`

Sets the map's vertical field of view, in degrees.

Triggers the following events: `movestart`, `move`, and `moveend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fov` | `number` | The vertical field of view to set, in degrees (0-180). |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Default Value

```ts
36.87
```

#### Example

Change vertical field of view to 30 degrees
```ts
map.setVerticalFieldOfView(30);
```

#### Inherited from

`maplibreMap.setVerticalFieldOfView`

***

### setZoom()

> **setZoom**(`zoom`: `number`, `eventData?`: `any`): `this`

Sets the map's zoom level. Equivalent to `jumpTo({zoom: zoom})`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zoom` | `number` | The zoom level to set (0-20). |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

Zoom to the zoom level 5 without an animated transition
```ts
map.setZoom(5);
```

#### Inherited from

`maplibreMap.setZoom`

***

### snapToNorth()

> **snapToNorth**(`options?`: [`AnimationOptions`](../type-aliases/AnimationOptions.md), `eventData?`: `any`): `this`

Snaps the map so that north is up (0° bearing), if the current bearing is close enough to it (i.e. within the
`bearingSnap` threshold).

Triggers the following events: `movestart`, `moveend`, and `rotate`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AnimationOptions`](../type-aliases/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Inherited from

`maplibreMap.snapToNorth`

***

### stop()

> **stop**(): `this`

Stops any animated transition underway.

#### Returns

`this`

#### Inherited from

`maplibreMap.stop`

***

### triggerRepaint()

> **triggerRepaint**(): `void`

Trigger the rendering of a single frame. Use this method with custom layers to
repaint the map when the layer changes. Calling this multiple times before the
next frame is rendered will still result in only a single frame being rendered.

#### Returns

`void`

#### Example

```ts
map.triggerRepaint();
```

#### See

 - [Add a 3D model](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-3d-model-using-threejs/)
 - [Add an animated icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-an-animated-icon-to-the-map/)

#### Inherited from

`maplibreMap.triggerRepaint`

***

### unproject()

> **unproject**(`point`: [`PointLike`](../type-aliases/PointLike.md)): `LngLat`

Returns a LngLat representing geographical coordinates that correspond
to the specified pixel coordinates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `point` | [`PointLike`](../type-aliases/PointLike.md) | The pixel coordinates to unproject. |

#### Returns

`LngLat`

The LngLat corresponding to `point`.

#### Example

```ts
map.on('click', (e) => {
  // When the map is clicked, get the geographic coordinate.
  let coordinate = map.unproject(e.point);
});
```

#### Inherited from

`maplibreMap.unproject`

***

### updateImage()

> **updateImage**(`id`: `string`, `image`: `HTMLImageElement` \| `ImageBitmap` \| `ImageData` \| [`StyleImageInterface`](../interfaces/StyleImageInterface.md) \| \{ `data`: `Uint8Array`\<`ArrayBufferLike`\> \| `Uint8ClampedArray`\<`ArrayBufferLike`\>; `height`: `number`; `width`: `number`; \}): `this`

Update an existing image in a style. This image can be displayed on the map like any other icon in the style's
sprite using the image's ID with
[`icon-image`](https://maplibre.org/maplibre-style-spec/layers/#layout-symbol-icon-image),
[`background-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-background-background-pattern),
[`fill-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-fill-fill-pattern),
or [`line-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-line-line-pattern).

An [ErrorEvent](ErrorEvent.md) will be fired if the image parameter is invalid.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the image. |
| `image` | `HTMLImageElement` \| `ImageBitmap` \| `ImageData` \| [`StyleImageInterface`](../interfaces/StyleImageInterface.md) \| \{ `data`: `Uint8Array`\<`ArrayBufferLike`\> \| `Uint8ClampedArray`\<`ArrayBufferLike`\>; `height`: `number`; `width`: `number`; \} | The image as an `HTMLImageElement`, `ImageData`, `ImageBitmap` or object with `width`, `height`, and `data` properties with the same format as `ImageData`. |

#### Returns

`this`

#### Example

```ts
// If an image with the ID 'cat' already exists in the style's sprite,
// replace that image with a new image, 'other-cat-icon.png'.
if (map.hasImage('cat')) map.updateImage('cat', './other-cat-icon.png');
```

#### Inherited from

`maplibreMap.updateImage`

***

### zoomIn()

> **zoomIn**(`options?`: [`AnimationOptions`](../type-aliases/AnimationOptions.md), `eventData?`: `any`): `this`

Increases the map's zoom level by 1.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AnimationOptions`](../type-aliases/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

Zoom the map in one level with a custom animation duration
```ts
map.zoomIn({duration: 1000});
```

#### Inherited from

`maplibreMap.zoomIn`

***

### zoomOut()

> **zoomOut**(`options?`: [`AnimationOptions`](../type-aliases/AnimationOptions.md), `eventData?`: `any`): `this`

Decreases the map's zoom level by 1.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AnimationOptions`](../type-aliases/AnimationOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

Zoom the map out one level with a custom animation offset
```ts
map.zoomOut({offset: [80, 60]});
```

#### Inherited from

`maplibreMap.zoomOut`

***

### zoomTo()

> **zoomTo**(`zoom`: `number`, `options?`: `null` \| [`EaseToOptions`](../type-aliases/EaseToOptions.md), `eventData?`: `any`): `this`

Zooms the map to the specified zoom level, with an animated transition.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zoom` | `number` | The zoom level to transition to. |
| `options?` | `null` \| [`EaseToOptions`](../type-aliases/EaseToOptions.md) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

#### Returns

`this`

#### Example

```ts
// Zoom to the zoom level 5 without an animated transition
map.zoomTo(5);
// Zoom to the zoom level 8 with an animated transition
map.zoomTo(8, {
  duration: 2000,
  offset: [100, 50]
});
```

#### Inherited from

`maplibreMap.zoomTo`

## Properties

### boxZoom

> **boxZoom**: `BoxZoomHandler`

The map's BoxZoomHandler, which implements zooming using a drag gesture with the Shift key pressed.
Find more details and examples using `boxZoom` in the BoxZoomHandler section.

#### Inherited from

`maplibreMap.boxZoom`

***

### cancelPendingTileRequestsWhileZooming

> **cancelPendingTileRequestsWhileZooming**: `boolean`

The map's property which determines whether to cancel, or retain, tiles from the current viewport which are still loading but which belong to a farther (smaller) zoom level than the current one.
* If `true`, when zooming in, tiles which didn't manage to load for previous zoom levels will become canceled. This might save some computing resources for slower devices, but the map details might appear more abruptly at the end of the zoom.
* If `false`, when zooming in, the previous zoom level(s) tiles will progressively appear, giving a smoother map details experience. However, more tiles will be rendered in a short period of time.

#### Default Value

```ts
true
```

#### Inherited from

`maplibreMap.cancelPendingTileRequestsWhileZooming`

***

### cooperativeGestures

> **cooperativeGestures**: `CooperativeGesturesHandler`

The map's CooperativeGesturesHandler, which allows the user to see cooperative gesture info when user tries to zoom in/out.
Find more details and examples using `cooperativeGestures` in the CooperativeGesturesHandler section.

#### Inherited from

`maplibreMap.cooperativeGestures`

***

### doubleClickZoom

> **doubleClickZoom**: `DoubleClickZoomHandler`

The map's DoubleClickZoomHandler, which allows the user to zoom by double clicking.
Find more details and examples using `doubleClickZoom` in the DoubleClickZoomHandler section.

#### Inherited from

`maplibreMap.doubleClickZoom`

***

### dragPan

> **dragPan**: `DragPanHandler`

The map's DragPanHandler, which implements dragging the map with a mouse or touch gesture.
Find more details and examples using `dragPan` in the DragPanHandler section.

#### Inherited from

`maplibreMap.dragPan`

***

### dragRotate

> **dragRotate**: `DragRotateHandler`

The map's DragRotateHandler, which implements rotating the map while dragging with the right
mouse button or with the Control key pressed. Find more details and examples using `dragRotate`
in the DragRotateHandler section.

#### Inherited from

`maplibreMap.dragRotate`

***

### keyboard

> **keyboard**: `KeyboardHandler`

The map's KeyboardHandler, which allows the user to zoom, rotate, and pan the map using keyboard
shortcuts. Find more details and examples using `keyboard` in the KeyboardHandler section.

#### Inherited from

`maplibreMap.keyboard`

***

### scrollZoom

> **scrollZoom**: `ScrollZoomHandler`

The map's ScrollZoomHandler, which implements zooming in and out with a scroll wheel or trackpad.
Find more details and examples using `scrollZoom` in the ScrollZoomHandler section.

#### Inherited from

`maplibreMap.scrollZoom`

***

### touchPitch

> **touchPitch**: `TwoFingersTouchPitchHandler`

The map's TwoFingersTouchPitchHandler, which allows the user to pitch the map with touch gestures.
Find more details and examples using `touchPitch` in the TwoFingersTouchPitchHandler section.

#### Inherited from

`maplibreMap.touchPitch`

***

### touchZoomRotate

> **touchZoomRotate**: `TwoFingersTouchZoomRotateHandler`

The map's TwoFingersTouchZoomRotateHandler, which allows the user to zoom or rotate the map with touch gestures.
Find more details and examples using `touchZoomRotate` in the TwoFingersTouchZoomRotateHandler section.

#### Inherited from

`maplibreMap.touchZoomRotate`

***

### transformCameraUpdate

> **transformCameraUpdate**: `null` \| [`CameraUpdateTransformFunction`](../type-aliases/CameraUpdateTransformFunction.md)

A callback used to defer camera updates or apply arbitrary constraints.
If specified, this Camera instance can be used as a stateless component in React etc.

#### Inherited from

`maplibreMap.transformCameraUpdate`

***

### transformConstrain

> **transformConstrain**: `null` \| [`TransformConstrainFunction`](../type-aliases/TransformConstrainFunction.md)

The map transform's callback that overrides the default constrain function.

#### Default Value

```ts
null
```

#### Inherited from

`maplibreMap.transformConstrain`
