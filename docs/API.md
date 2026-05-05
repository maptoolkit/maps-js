# API Reference

*v11.0.0-alpha.beta.7*

**Map**

- [Map](#map)
- [MapOptions](#mapoptions)

**Controls**

- [AttributionControl](#attributioncontrol)
- [CompassControl](#compasscontrol)
- [FullscreenControl](#fullscreencontrol)
- [GeolocateControl](#geolocatecontrol)
- [GlobeControl](#globecontrol)
- [IsochroneControl](#isochronecontrol)
- [LogoControl](#logocontrol)
- [NavigationControl](#navigationcontrol)
- [PitchControl](#pitchcontrol)
- [ScaleControl](#scalecontrol)
- [StyleControl](#stylecontrol)
- [TerrainControl](#terraincontrol)
- [IControl](#icontrol)
- [AttributionControlOptions](#attributioncontroloptions)
- [CompassControlOptions](#compasscontroloptions)
- [ControlPosition](#controlposition)
- [FullscreenControlOptions](#fullscreencontroloptions)
- [GeolocateControlOptions](#geolocatecontroloptions)
- [IsochroneControlOptions](#isochronecontroloptions)
- [IsochroneType](#isochronetype)
- [LogoControlOptions](#logocontroloptions)
- [NavigationControlOptions](#navigationcontroloptions)
- [PitchControlOptions](#pitchcontroloptions)
- [ScaleControlOptions](#scalecontroloptions)
- [StyleControlOptions](#stylecontroloptions)
- [StyleDefSpecification](#styledefspecification)
- [TerrainControlOptions](#terraincontroloptions)

**Markers and Popups**

- [Marker](#marker)
- [Popup](#popup)
- [MarkerOptions](#markeroptions)
- [PopupOptions](#popupoptions)

**Sources**

- [CanvasSource](#canvassource)
- [GeoJSONSource](#geojsonsource)
- [ImageSource](#imagesource)
- [RasterDEMTileSource](#rasterdemtilesource)
- [RasterTileSource](#rastertilesource)
- [VectorTileSource](#vectortilesource)
- [VideoSource](#videosource)

**Coordinates**

- [Point](#point)
- [EdgeInsets](#edgeinsets)
- [LngLat](#lnglat)
- [LngLatBounds](#lnglatbounds)
- [MercatorCoordinate](#mercatorcoordinate)
- [Point](#point-1)
- [LngLatBoundsLike](#lnglatboundslike)
- [LngLatLike](#lnglatlike)
- [PointLike](#pointlike)

**Events**

- [Evented](#evented)
- [MapMouseEvent](#mapmouseevent)
- [MapTouchEvent](#maptouchevent)
- [MapWheelEvent](#mapwheelevent)
- [MapContextEvent](#mapcontextevent)
- [MapDataEvent](#mapdataevent)
- [MapEventType](#mapeventtype)
- [MapLayerEventType](#maplayereventtype)
- [MapLayerMouseEvent](#maplayermouseevent)
- [MapLayerTouchEvent](#maplayertouchevent)
- [MapLibreEvent](#maplibreevent)
- [MapLibreZoomEvent](#maplibrezoomevent)
- [MapProjectionEvent](#mapprojectionevent)
- [MapSourceDataEvent](#mapsourcedataevent)
- [MapStyleDataEvent](#mapstyledataevent)
- [MapStyleImageMissingEvent](#mapstyleimagemissingevent)
- [MapTerrainEvent](#mapterrainevent)

**User Interaction Handlers**

- [BoxZoomHandler](#boxzoomhandler)
- [CooperativeGesturesHandler](#cooperativegestureshandler)
- [DoubleClickZoomHandler](#doubleclickzoomhandler)
- [DragPanHandler](#dragpanhandler)
- [DragRotateHandler](#dragrotatehandler)
- [KeyboardHandler](#keyboardhandler)
- [ScrollZoomHandler](#scrollzoomhandler)
- [TwoFingersTouchPitchHandler](#twofingerstouchpitchhandler)
- [TwoFingersTouchRotateHandler](#twofingerstouchrotatehandler)
- [TwoFingersTouchZoomHandler](#twofingerstouchzoomhandler)
- [TwoFingersTouchZoomRotateHandler](#twofingerstouchzoomrotatehandler)
- [DragPanOptions](#dragpanoptions)

**Configuration**

- [Config](#config)
- [LocaleSpecification](#localespecification)
- [config](#config-1)
- [locale](#locale)
- [STYLES](#styles)
- [TERRAIN](#terrain)

**Properties and Options**

- [CustomLayerInterface](#customlayerinterface)
- [StyleImageInterface](#styleimageinterface)
- [AnimationOptions](#animationoptions)
- [AroundCenterOptions](#aroundcenteroptions)
- [CameraForBoundsOptions](#cameraforboundsoptions)
- [CameraOptions](#cameraoptions)
- [CameraUpdateTransformFunction](#cameraupdatetransformfunction)
- [CoveringTilesOptions](#coveringtilesoptions)
- [EaseToOptions](#easetooptions)
- [FitBoundsOptions](#fitboundsoptions)
- [FlyToOptions](#flytooptions)
- [JumpToOptions](#jumptooptions)
- [PaddingOptions](#paddingoptions)
- [QueryRenderedFeaturesOptions](#queryrenderedfeaturesoptions)
- [QuerySourceFeatureOptions](#querysourcefeatureoptions)
- [RequestParameters](#requestparameters)
- [RequestTransformFunction](#requesttransformfunction)
- [SetClusterOptions](#setclusteroptions)
- [StyleOptions](#styleoptions)
- [StyleSetterOptions](#stylesetteroptions)
- [StyleSwapOptions](#styleswapoptions)
- [TransformConstrainFunction](#transformconstrainfunction)
- [UpdateImageOptions](#updateimageoptions)
- [version](#version)
- [addProtocol](#addprotocol)
- [addSourceType](#addsourcetype)
- [clearPrewarmedResources](#clearprewarmedresources)
- [getMaxParallelImageRequests](#getmaxparallelimagerequests)
- [getRTLTextPluginStatus](#getrtltextpluginstatus)
- [getVersion](#getversion)
- [getWorkerCount](#getworkercount)
- [getWorkerUrl](#getworkerurl)
- [importScriptInWorkers](#importscriptinworkers)
- [prewarm](#prewarm)
- [removeProtocol](#removeprotocol)
- [setMaxParallelImageRequests](#setmaxparallelimagerequests)
- [setRTLTextPlugin](#setrtltextplugin)
- [setWorkerCount](#setworkercount)
- [setWorkerUrl](#setworkerurl)

## Map

Extends the maplibre-gl map class with additional functionality.

#### Constructor

> **new Map**(`options?`: [`MapOptions`](#mapoptions)): `Map`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`MapOptions`](#mapoptions) | The [MapOptions](#mapoptions) object. |

##### Returns

`Map`

#### off()

> **off**\<keyof [`MapLayerEventType`](#maplayereventtype)\>(`type`: keyof [`MapLayerEventType`](#maplayereventtype), `layer`: `string`, `listener`: (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void`): `this`

Removes an event listener for events previously added with `{@link Map.on}`.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | keyof [`MapLayerEventType`](#maplayereventtype) | The event type previously used to install the listener. |
| `layer` | `string` | The layer ID or listener previously used to install the listener. |
| `listener` | (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void` | The function previously installed as a listener. |

###### Returns

`this`

> **off**\<keyof [`MapLayerEventType`](#maplayereventtype)\>(`type`: keyof [`MapLayerEventType`](#maplayereventtype), `layers`: `string`[], `listener`: (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void`): `this`

Overload of the `off` method that allows to remove an event created with multiple layers.
Provide the same layer IDs as to `on` or `once`, when the listener was registered.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | keyof [`MapLayerEventType`](#maplayereventtype) | The type of the event. |
| `layers` | `string`[] | The layer IDs previously used to install the listener. |
| `listener` | (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void` | The function previously installed as a listener. |

###### Returns

`this`

> **off**\<keyof [`MapEventType`](#mapeventtype)\>(`type`: keyof [`MapEventType`](#mapeventtype), `listener`: (`ev`: [`MapEventType`](#mapeventtype)\[keyof [`MapEventType`](#mapeventtype)\] & `Object`) => `void`): `this`

Overload of the `off` method that allows to remove an event created without specifying a layer.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | keyof [`MapEventType`](#mapeventtype) | The type of the event. |
| `listener` | (`ev`: [`MapEventType`](#mapeventtype)\[keyof [`MapEventType`](#mapeventtype)\] & `Object`) => `void` | The function previously installed as a listener. |

###### Returns

`this`

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Overload of the `off` method that allows to remove an event created without specifying a layer.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of the event. |
| `listener` | `Listener` | The function previously installed as a listener. |

###### Returns

`this`

***

#### on()

> **on**\<keyof [`MapLayerEventType`](#maplayereventtype)\>(`type`: keyof [`MapLayerEventType`](#maplayereventtype), `layer`: `string`, `listener`: (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void`): `Subscription`

Adds a listener for events of a specified type, optionally limited to features in a specified style layer(s).
See [MapEventType](#mapeventtype) and [MapLayerEventType](#maplayereventtype) for a full list of events and their description.

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

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | keyof [`MapLayerEventType`](#maplayereventtype) | The event type to listen for. Events compatible with the optional `layerId` parameter are triggered when the cursor enters a visible portion of the specified layer from outside that layer or outside the map canvas. |
| `layer` | `string` | The ID of a style layer or a listener if no ID is provided. Event will only be triggered if its location is within a visible feature in this layer. The event will have a `features` property containing an array of the matching features. If `layer` is not supplied, the event will not have a `features` property. Please note that many event types are not compatible with the optional `layer` parameter. |
| `listener` | (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void` | The function to be called when the event is fired. |

###### Returns

`Subscription`

###### Examples

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

###### See

 - [Display popup on click](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-click/)
 - [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-the-map-on-a-clicked-symbol/)
 - [Create a hover effect](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/)
 - [Create a draggable marker](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

> **on**\<keyof [`MapLayerEventType`](#maplayereventtype)\>(`type`: keyof [`MapLayerEventType`](#maplayereventtype), `layerIds`: `string`[], `listener`: (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void`): `Subscription`

Overload of the `on` method that allows to listen to events specifying multiple layers.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | keyof [`MapLayerEventType`](#maplayereventtype) | The type of the event. |
| `layerIds` | `string`[] | The array of style layer IDs. |
| `listener` | (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void` | The listener callback. |

###### Returns

`Subscription`

> **on**\<keyof [`MapEventType`](#mapeventtype)\>(`type`: keyof [`MapEventType`](#mapeventtype), `listener`: (`ev`: [`MapEventType`](#mapeventtype)\[keyof [`MapEventType`](#mapeventtype)\] & `Object`) => `void`): `Subscription`

Overload of the `on` method that allows to listen to events without specifying a layer.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | keyof [`MapEventType`](#mapeventtype) | The type of the event. |
| `listener` | (`ev`: [`MapEventType`](#mapeventtype)\[keyof [`MapEventType`](#mapeventtype)\] & `Object`) => `void` | The listener callback. |

###### Returns

`Subscription`

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Overload of the `on` method that allows to listen to events without specifying a layer.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of the event. |
| `listener` | `Listener` | The listener callback. |

###### Returns

`Subscription`

***

#### once()

> **once**\<keyof [`MapLayerEventType`](#maplayereventtype)\>(`type`: keyof [`MapLayerEventType`](#maplayereventtype), `layer`: `string`, `listener?`: (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void`): `Map` \| `Promise`\<[`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`\>

Adds a listener that will be called only once to a specified event type, optionally limited to features in a specified style layer.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | keyof [`MapLayerEventType`](#maplayereventtype) | The event type to listen for; one of `'mousedown'`, `'mouseup'`, `'click'`, `'dblclick'`, `'mousemove'`, `'mouseenter'`, `'mouseleave'`, `'mouseover'`, `'mouseout'`, `'contextmenu'`, `'touchstart'`, `'touchend'`, or `'touchcancel'`. `mouseenter` and `mouseover` events are triggered when the cursor enters a visible portion of the specified layer from outside that layer or outside the map canvas. `mouseleave` and `mouseout` events are triggered when the cursor leaves a visible portion of the specified layer, or leaves the map canvas. |
| `layer` | `string` | The ID of a style layer or a listener if no ID is provided. Only events whose location is within a visible feature in this layer will trigger the listener. The event will have a `features` property containing an array of the matching features. |
| `listener?` | (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void` | The function to be called when the event is fired. |

###### Returns

`Map` \| `Promise`\<[`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`\>

`this` if listener is provided, promise otherwise to allow easier usage of async/await

> **once**\<keyof [`MapLayerEventType`](#maplayereventtype)\>(`type`: keyof [`MapLayerEventType`](#maplayereventtype), `layerIds`: `string`[], `listener?`: (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void`): `Promise`\<`any`\> \| `Map`

Overload of the `once` method that allows to listen to events specifying multiple layers.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | keyof [`MapLayerEventType`](#maplayereventtype) | The type of the event. |
| `layerIds` | `string`[] | The array of style layer IDs. |
| `listener?` | (`ev`: [`MapLayerEventType`](#maplayereventtype)\[keyof [`MapLayerEventType`](#maplayereventtype)\] & `Object`) => `void` | The listener callback. |

###### Returns

`Promise`\<`any`\> \| `Map`

> **once**\<keyof [`MapEventType`](#mapeventtype)\>(`type`: keyof [`MapEventType`](#mapeventtype), `listener?`: (`ev`: [`MapEventType`](#mapeventtype)\[keyof [`MapEventType`](#mapeventtype)\] & `Object`) => `void`): `Promise`\<`any`\> \| `Map`

Overload of the `once` method that allows to listen to events without specifying a layer.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | keyof [`MapEventType`](#mapeventtype) | The type of the event. |
| `listener?` | (`ev`: [`MapEventType`](#mapeventtype)\[keyof [`MapEventType`](#mapeventtype)\] & `Object`) => `void` | The listener callback. |

###### Returns

`Promise`\<`any`\> \| `Map`

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `Map`

Overload of the `once` method that allows to listen to events without specifying a layer.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The type of the event. |
| `listener?` | `Listener` | The listener callback. |

###### Returns

`Promise`\<`any`\> \| `Map`

#### version

> **get** **version**(): `string`

Returns the package version of the library

###### Returns

`string`

Package version of the library

version

### Accessors

#### repaint

> **get** **repaint**(): `boolean`

Gets and sets a Boolean indicating whether the map will
continuously repaint. This information is useful for analyzing performance.

###### Returns

`boolean`

***

#### showCollisionBoxes

> **get** **showCollisionBoxes**(): `boolean`

Gets and sets a Boolean indicating whether the map will render boxes
around all symbols in the data source, revealing which symbols
were rendered or which were hidden due to collisions.
This information is useful for debugging.

###### Returns

`boolean`

***

#### showOverdrawInspector

> **get** **showOverdrawInspector**(): `boolean`

Gets and sets a Boolean indicating whether the map should color-code
each fragment to show how many times it has been shaded.
White fragments have been shaded 8 or more times.
Black fragments have been shaded 0 times.
This information is useful for debugging.

###### Returns

`boolean`

***

#### showPadding

> **get** **showPadding**(): `boolean`

Gets and sets a Boolean indicating whether the map will visualize
the padding offsets.

###### Returns

`boolean`

***

#### showTileBoundaries

> **get** **showTileBoundaries**(): `boolean`

Gets and sets a Boolean indicating whether the map will render an outline
around each tile and the tile ID. These tile boundaries are useful for
debugging.

The uncompressed file size of the first vector source is drawn in the top left
corner of each tile, next to the tile ID.

###### Example

```ts
map.showTileBoundaries = true;
```

###### Returns

`boolean`

### Methods

#### addControl() <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **addControl**(`control`: [`IControl`](#icontrol), `position?`: [`ControlPosition`](#controlposition)): `this`

Adds a control to the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `control` | [`IControl`](#icontrol) | The control to add. |
| `position?` | [`ControlPosition`](#controlposition) | The position to add the control. |

##### Returns

`this`

The map instance.

***

#### addImage()

> **addImage**(`id`: `string`, `image`: `HTMLImageElement` \| `ImageBitmap` \| `ImageData` \| \{ `data`: `Uint8Array`\<`ArrayBufferLike`\> \| `Uint8ClampedArray`\<`ArrayBufferLike`\>; `height`: `number`; `width`: `number`; \} \| [`StyleImageInterface`](#styleimageinterface), `options?`: `Partial`\<`StyleImageMetadata`\>): `this`

Add an image to the style. This image can be displayed on the map like any other icon in the style's
sprite using the image's ID with
[`icon-image`](https://maplibre.org/maplibre-style-spec/layers/#layout-symbol-icon-image),
[`background-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-background-background-pattern),
[`fill-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-fill-fill-pattern),
or [`line-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-line-line-pattern).

A ErrorEvent event will be fired if the image parameter is invalid or there is not enough space in the sprite to add this image.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the image. |
| `image` | `HTMLImageElement` \| `ImageBitmap` \| `ImageData` \| \{ `data`: `Uint8Array`\<`ArrayBufferLike`\> \| `Uint8ClampedArray`\<`ArrayBufferLike`\>; `height`: `number`; `width`: `number`; \} \| [`StyleImageInterface`](#styleimageinterface) | The image as an `HTMLImageElement`, `ImageData`, `ImageBitmap` or object with `width`, `height`, and `data` properties with the same format as `ImageData`. |
| `options?` | `Partial`\<`StyleImageMetadata`\> | Options object. |

##### Returns

`this`

##### Example

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

##### See

 - Use `HTMLImageElement`: [Add an icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-an-icon-to-the-map/)
 - Use `ImageData`: [Add a generated icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-generated-icon-to-the-map/)

***

#### addLayer()

> **addLayer**(`layer`: `AddLayerObject`, `beforeId?`: `string`): `this`

Adds a [MapLibre style layer](https://maplibre.org/maplibre-style-spec/layers)
to the map's style.

A layer defines how data from a specified source will be styled. Read more about layer types
and available paint and layout properties in the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/layers).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layer` | `AddLayerObject` | The layer to add, conforming to either the MapLibre Style Specification's [layer definition](https://maplibre.org/maplibre-style-spec/layers) or, less commonly, the [CustomLayerInterface](#customlayerinterface) specification. Can also be a layer definition with an embedded source definition. The MapLibre Style Specification's layer definition is appropriate for most layers. |
| `beforeId?` | `string` | The ID of an existing layer to insert the new layer before, resulting in the new layer appearing visually beneath the existing layer. If this argument is not specified, the layer will be appended to the end of the layers array and appear visually above all other layers. |

##### Returns

`this`

##### Examples

Add a circle layer with a vector source
```ts
map.addLayer({
  id: 'points-of-interest',
  source: {
    type: 'vector',
    url: 'https://demotiles.maplibre.org/tiles/tiles.json'
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
```

Define a source before using it to create a new layer
```ts
map.addSource('state-data', {
  type: 'geojson',
  data: 'path/to/data.geojson'
});

map.addLayer({
  id: 'states',
  // References the GeoJSON source defined above
  // and does not require a `source-layer`
  source: 'state-data',
  type: 'symbol',
  layout: {
    // Set the label content to the
    // feature's `name` property
    text-field: ['get', 'name']
  }
});
```

Add a new symbol layer before an existing layer
```ts
map.addLayer({
  id: 'states',
  // References a source that's already been defined
  source: 'state-data',
  type: 'symbol',
  layout: {
    // Set the label content to the
    // feature's `name` property
    text-field: ['get', 'name']
  }
// Add the layer before the existing `cities` layer
}, 'cities');
```

##### See

 - [Create and style clusters](https://maplibre.org/maplibre-gl-js/docs/examples/create-and-style-clusters/)
 - [Add a vector tile source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-vector-tile-source/)
 - [Add a WMS source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-wms-source/)

***

#### addSource()

> **addSource**(`id`: `string`, `source`: `SourceSpecification` \| `CanvasSourceSpecification`): `this`

Adds a source to the map's style.

Events triggered:

Triggers the `source.add` event.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the source to add. Must not conflict with existing sources. |
| `source` | `SourceSpecification` \| `CanvasSourceSpecification` | The source object, conforming to the MapLibre Style Specification's [source definition](https://maplibre.org/maplibre-style-spec/sources) or CanvasSourceSpecification. |

##### Returns

`this`

##### Examples

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

##### See

GeoJSON source: [Add live realtime data](https://maplibre.org/maplibre-gl-js/docs/examples/add-live-realtime-data/)

***

#### addSprite()

> **addSprite**(`id`: `string`, `url`: `string`, `options?`: [`StyleSetterOptions`](#stylesetteroptions)): `this`

Adds a sprite to the map's style. Fires the `style` event.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the sprite to add. Must not conflict with existing sprites. |
| `url` | `string` | The URL to load the sprite from |
| `options?` | [`StyleSetterOptions`](#stylesetteroptions) | Options object. |

##### Returns

`this`

##### Example

```ts
map.addSprite('sprite-two', 'http://example.com/sprite-two');
```

***

#### areTilesLoaded()

> **areTilesLoaded**(): `boolean`

Returns a Boolean indicating whether all tiles in the viewport from all sources on
the style are loaded.

##### Returns

`boolean`

A Boolean indicating whether all tiles are loaded.

##### Example

```ts
let tilesLoaded = map.areTilesLoaded();
```

***

#### calculateCameraOptionsFromCameraLngLatAltRotation()

> **calculateCameraOptionsFromCameraLngLatAltRotation**(`cameraLngLat`: [`LngLatLike`](#lnglatlike), `cameraAlt`: `number`, `bearing`: `number`, `pitch`: `number`, `roll?`: `number`): [`CameraOptions`](#cameraoptions)

Given a camera position and rotation, calculates zoom and center point and returns them as [CameraOptions](#cameraoptions).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cameraLngLat` | [`LngLatLike`](#lnglatlike) | The lng, lat of the camera to look from |
| `cameraAlt` | `number` | The altitude of the camera to look from, in meters above sea level |
| `bearing` | `number` | Bearing of the camera, in degrees |
| `pitch` | `number` | Pitch of the camera, in degrees |
| `roll?` | `number` | Roll of the camera, in degrees |

##### Returns

[`CameraOptions`](#cameraoptions)

the calculated camera options

##### Example

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

***

#### calculateCameraOptionsFromTo()

> **calculateCameraOptionsFromTo**(`from`: [`LngLat`](#lnglat), `altitudeFrom`: `number`, `to`: [`LngLat`](#lnglat), `altitudeTo?`: `number`): [`CameraOptions`](#cameraoptions)

Given a camera 'from' position and a position to look at (`to`), calculates zoom and camera rotation and returns them as [CameraOptions](#cameraoptions).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `from` | [`LngLat`](#lnglat) | The camera to look from |
| `altitudeFrom` | `number` | The altitude of the camera to look from |
| `to` | [`LngLat`](#lnglat) | The center to look at |
| `altitudeTo?` | `number` | Optional altitude of the center to look at. If none given the ground height will be used. |

##### Returns

[`CameraOptions`](#cameraoptions)

the calculated camera options

##### Example

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

***

#### cameraForBounds()

> **cameraForBounds**(`bounds`: [`LngLatBoundsLike`](#lnglatboundslike), `options?`: [`CameraForBoundsOptions`](#cameraforboundsoptions)): `CenterZoomBearing` \| `undefined`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bounds` | [`LngLatBoundsLike`](#lnglatboundslike) | Calculate the center for these bounds in the viewport and use the highest zoom level up to and including [Map.getMaxZoom](#getmaxzoom) that fits in the viewport. LngLatBounds represent a box that is always axis-aligned with bearing 0. Bounds will be taken in [sw, ne] order. Southwest point will always be to the left of the northeast point. |
| `options?` | [`CameraForBoundsOptions`](#cameraforboundsoptions) | Options object |

##### Returns

`CenterZoomBearing` \| `undefined`

If map is able to fit to provided bounds, returns `center`, `zoom`, and `bearing`.
If map is unable to fit, method will warn and return undefined.

##### Example

```ts
let bbox = [[-79, 43], [-73, 45]];
let newCameraTransform = map.cameraForBounds(bbox, {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

***

#### coveringTiles()

> **coveringTiles**(`options`: [`CoveringTilesOptions`](#coveringtilesoptions)): `OverscaledTileID`[]

Returns an array of `OverscaledTileID` objects that cover the current viewport for a given tile size.
This method is useful for determining which tiles are visible in the current viewport.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`CoveringTilesOptions`](#coveringtilesoptions) | Options for calculating the covering tiles. |

##### Returns

`OverscaledTileID`[]

An array of `OverscaledTileID` objects.

##### Example

```ts
// Get the tiles to cover the view for a 512x512px tile source
const tiles = map.coveringTiles({tileSize: 512});
```

***

#### easeTo()

> **easeTo**(`options`: [`EaseToOptions`](#easetooptions), `eventData?`: `any`): `this`

Changes any combination of `center`, `zoom`, `bearing`, `pitch`, `roll`, and `padding` with an animated transition
between old and new values. The map will retain its current values for any
details not specified in `options`.

!!! note "Reduced Motion"
    The transition will happen instantly if the user has enabled
    the `reduced motion` accessibility feature enabled in their operating system,
    unless `options` includes `essential: true`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend`, `pitchstart`,
`pitch`, `pitchend`, `rollstart`, `roll`, `rollend`, and `rotate`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`EaseToOptions`](#easetooptions) | Options describing the destination and animation of the transition. Accepts [CameraOptions](#cameraoptions) and [AnimationOptions](#animationoptions). |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### See

[Navigate the map with game-like controls](https://maplibre.org/maplibre-gl-js/docs/examples/navigate-the-map-with-game-like-controls/)

***

#### fitBounds()

> **fitBounds**(`bounds`: [`LngLatBoundsLike`](#lnglatboundslike), `options?`: [`FitBoundsOptions`](#fitboundsoptions), `eventData?`: `any`): `this`

Pans and zooms the map to contain its visible area within the specified geographical bounds.
This function will also reset the map's bearing to 0 if bearing is nonzero.

Triggers the following events: `movestart` and `moveend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bounds` | [`LngLatBoundsLike`](#lnglatboundslike) | Center these bounds in the viewport and use the highest zoom level up to and including [Map.getMaxZoom](#getmaxzoom) that fits them in the viewport. Bounds will be taken in [sw, ne] order. Southwest point will always be to the left of the northeast point. |
| `options?` | [`FitBoundsOptions`](#fitboundsoptions) | Options supports all properties from [AnimationOptions](#animationoptions) and [CameraOptions](#cameraoptions) in addition to the fields below. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

```ts
let bbox = [[-79, 43], [-73, 45]];
map.fitBounds(bbox, {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

##### See

[Fit a map to a bounding box](https://maplibre.org/maplibre-gl-js/docs/examples/fit-a-map-to-a-bounding-box/)

***

#### fitScreenCoordinates()

> **fitScreenCoordinates**(`p0`: [`PointLike`](#pointlike), `p1`: [`PointLike`](#pointlike), `bearing`: `number`, `options?`: [`FitBoundsOptions`](#fitboundsoptions), `eventData?`: `any`): `this`

Pans, rotates and zooms the map to to fit the box made by points p0 and p1
once the map is rotated to the specified bearing. To zoom without rotating,
pass in the current map bearing.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend` and `rotate`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p0` | [`PointLike`](#pointlike) | First point on screen, in pixel coordinates |
| `p1` | [`PointLike`](#pointlike) | Second point on screen, in pixel coordinates |
| `bearing` | `number` | Desired map bearing at end of animation, in degrees |
| `options?` | [`FitBoundsOptions`](#fitboundsoptions) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

```ts
let p0 = [220, 400];
let p1 = [500, 900];
map.fitScreenCoordinates(p0, p1, map.getBearing(), {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

##### See

Used by [BoxZoomHandler](#boxzoomhandler)

***

#### flyTo()

> **flyTo**(`options`: [`FlyToOptions`](#flytooptions), `eventData?`: `any`): `this`

Changes any combination of center, zoom, bearing, pitch, and roll, animating the transition along a curve that
evokes flight. The animation seamlessly incorporates zooming and panning to help
the user maintain her bearings even after traversing a great distance.

!!! note "Reduced Motion"
    The animation will be skipped, and this will behave equivalently to `jumpTo`
    if the user has the `reduced motion` accessibility feature enabled in their operating system,
    unless 'options' includes `essential: true`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend`, `pitchstart`,
`pitch`, `pitchend`, `rollstart`, `roll`, `rollend`, and `rotate`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`FlyToOptions`](#flytooptions) | Options describing the destination and animation of the transition. Accepts [CameraOptions](#cameraoptions), [AnimationOptions](#animationoptions), and the following additional options. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

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

##### See

 - [Fly to a location](https://maplibre.org/maplibre-gl-js/docs/examples/fly-to-a-location/)
 - [Slowly fly to a location](https://maplibre.org/maplibre-gl-js/docs/examples/slowly-fly-to-a-location/)
 - [Fly to a location based on scroll position](https://maplibre.org/maplibre-gl-js/docs/examples/fly-to-a-location-based-on-scroll-position/)

***

#### getAnisotropicFilterPitch()

> **getAnisotropicFilterPitch**(): `number`

Returns the map's anisotropic filter pitch.
If the map is pitched beyond this threshold, anisotropic filtering will be applied to all raster layers.

##### Returns

`number`

The anisotropicFilterPitch

##### Example

```ts
let anisotropicFilterPitch = map.getAnisotropicFilterPitch();
```

***

#### getBearing()

> **getBearing**(): `number`

Returns the map's current bearing. The bearing is the compass direction that is "up"; for example, a bearing
of 90° orients the map so that east is up.

##### Returns

`number`

The map's current bearing.

##### See

[Navigate the map with game-like controls](https://maplibre.org/maplibre-gl-js/docs/examples/navigate-the-map-with-game-like-controls/)

***

#### getBounds()

> **getBounds**(): [`LngLatBounds`](#lnglatbounds)

Returns the map's geographical bounds. When the bearing or pitch is non-zero, the visible region is not
an axis-aligned rectangle, and the result is the smallest bounds that encompasses the visible region.

##### Returns

[`LngLatBounds`](#lnglatbounds)

The geographical bounds of the map as [LngLatBounds](#lnglatbounds).

##### Example

```ts
let bounds = map.getBounds();
```

***

#### getCameraTargetElevation()

> **getCameraTargetElevation**(): `number`

Returns the elevation for the point where the camera is looking.
This value corresponds to:
"meters above sea level" * "exaggeration"

##### Returns

`number`

The elevation.

***

#### getCanvas()

> **getCanvas**(): `HTMLCanvasElement`

Returns the map's `<canvas>` element.

##### Returns

`HTMLCanvasElement`

The map's `<canvas>` element.

##### See

 - [Measure distances](https://maplibre.org/maplibre-gl-js/docs/examples/measure-distances/)
 - [Display a popup on hover](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/)
 - [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-the-map-on-a-clicked-symbol/)

***

#### getCanvasContainer()

> **getCanvasContainer**(): `HTMLElement`

Returns the HTML element containing the map's `<canvas>` element.

If you want to add non-GL overlays to the map, you should append them to this element.

This is the element to which event bindings for map interactivity (such as panning and zooming) are
attached. It will receive bubbled events from child elements such as the `<canvas>`, but not from
map controls.

##### Returns

`HTMLElement`

The container of the map's `<canvas>`.

##### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

#### getCenter()

> **getCenter**(): [`LngLat`](#lnglat)

Returns the map's geographical centerpoint.

##### Returns

[`LngLat`](#lnglat)

The map's geographical centerpoint.

##### Example

Return a LngLat object such as `{lng: 0, lat: 0}`
```ts
let center = map.getCenter();
// access longitude and latitude values directly
let {lng, lat} = map.getCenter();
```

***

#### getCenterClampedToGround()

> **getCenterClampedToGround**(): `boolean`

Returns the value of `centerClampedToGround`.

If true, the elevation of the center point will automatically be set to the terrain elevation
(or zero if terrain is not enabled). If false, the elevation of the center point will default
to sea level and will not automatically update. Defaults to true. Needs to be set to false to
keep the camera above ground when pitch \> 90 degrees.

##### Returns

`boolean`

***

#### getCenterElevation()

> **getCenterElevation**(): `number`

Returns the elevation of the map's center point.

##### Returns

`number`

The elevation of the map's center point, in meters above sea level.

***

#### getContainer()

> **getContainer**(): `HTMLElement`

Returns the map's containing HTML element.

##### Returns

`HTMLElement`

The map's container.

***

#### getFeatureState()

> **getFeatureState**(`feature`: `FeatureIdentifier`): `any`

Gets the `state` of a feature.
A feature's `state` is a set of user-defined key-value pairs that are assigned to a feature at runtime.
Features are identified by their `feature.id` attribute, which can be any number or string.

!!! note
    To access the values in a feature's state object for the purposes of styling the feature, use the [`feature-state` expression](https://maplibre.org/maplibre-style-spec/expressions/#feature-state).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `feature` | `FeatureIdentifier` | Feature identifier. Feature objects returned from [Map.queryRenderedFeatures](#queryrenderedfeatures) or event handlers can be used as feature identifiers. |

##### Returns

`any`

The state of the feature: a set of key-value pairs that was assigned to the feature at runtime.

##### Example

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

***

#### getFilter()

> **getFilter**(`layerId`: `string`): `void` \| `FilterSpecification`

Returns the filter applied to the specified style layer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the style layer whose filter to get. |

##### Returns

`void` \| `FilterSpecification`

The layer's filter.

***

#### getGlobalState()

> **getGlobalState**(): `Record`\<`string`, `any`\>

Returns the global map state

##### Returns

`Record`\<`string`, `any`\>

The map state object.

***

#### getGlyphs()

> **getGlyphs**(): `string` \| `null`

Returns the value of the style's glyphs URL

##### Returns

`string` \| `null`

glyphs Style's glyphs url, or `null` if glyphs are unset.

***

#### getImage()

> **getImage**(`id`: `string`): `StyleImage`

Returns an image, specified by ID, currently available in the map.
This includes both images from the style's original sprite
and any images that have been added at runtime using [Map.addImage](#addimage).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the image. |

##### Returns

`StyleImage`

An image in the map with the specified ID.

##### Example

```ts
let coffeeShopIcon = map.getImage("coffee_cup");
```

***

#### getLayer()

> **getLayer**(`id`: `string`): `StyleLayer` \| `undefined`

Returns the layer with the specified ID in the map's style.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the layer to get. |

##### Returns

`StyleLayer` \| `undefined`

The layer with the specified ID, or `undefined`
if the ID corresponds to no existing layers.

##### Example

```ts
let stateDataLayer = map.getLayer('state-data');
```

##### See

 - [Filter symbols by toggling a list](https://maplibre.org/maplibre-gl-js/docs/examples/filter-symbols-by-toggling-a-list/)
 - [Filter symbols by text input](https://maplibre.org/maplibre-gl-js/docs/examples/filter-symbols-by-text-input/)

***

#### getLayersOrder()

> **getLayersOrder**(): `string`[]

Return the ids of all layers currently in the style, including custom layers, in order.

##### Returns

`string`[]

ids of layers, in order

##### Example

```ts
const orderedLayerIds = map.getLayersOrder();
```

***

#### getLayoutProperty()

> **getLayoutProperty**(`layerId`: `string`, `name`: `string`): `any`

Returns the value of a layout property in the specified style layer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to get the layout property from. |
| `name` | `string` | The name of the layout property to get. |

##### Returns

`any`

The value of the specified layout property.

***

#### getLight()

> **getLight**(): `LightSpecification`

Returns the value of the light object.

##### Returns

`LightSpecification`

light Light properties of the style.

***

#### getMaxBounds()

> **getMaxBounds**(): [`LngLatBounds`](#lnglatbounds) \| `null`

Returns the maximum geographical bounds the map is constrained to, or `null` if none set.

##### Returns

[`LngLatBounds`](#lnglatbounds) \| `null`

The map object.

##### Example

```ts
let maxBounds = map.getMaxBounds();
```

***

#### getMaxPitch()

> **getMaxPitch**(): `number`

Returns the map's maximum allowable pitch.

##### Returns

`number`

The maxPitch

***

#### getMaxZoom()

> **getMaxZoom**(): `number`

Returns the map's maximum allowable zoom level.

##### Returns

`number`

The maxZoom

##### Example

```ts
let maxZoom = map.getMaxZoom();
```

***

#### getMinPitch()

> **getMinPitch**(): `number`

Returns the map's minimum allowable pitch.

##### Returns

`number`

The minPitch

***

#### getMinZoom()

> **getMinZoom**(): `number`

Returns the map's minimum allowable zoom level.

##### Returns

`number`

minZoom

##### Example

```ts
let minZoom = map.getMinZoom();
```

***

#### getPadding()

> **getPadding**(): [`PaddingOptions`](#paddingoptions)

Returns the current padding applied around the map viewport.

##### Returns

[`PaddingOptions`](#paddingoptions)

The current padding around the map viewport.

***

#### getPaintProperty()

> **getPaintProperty**(`layerId`: `string`, `name`: `string`): `unknown`

Returns the value of a paint property in the specified style layer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to get the paint property from. |
| `name` | `string` | The name of a paint property to get. |

##### Returns

`unknown`

The value of the specified paint property.

***

#### getPitch()

> **getPitch**(): `number`

Returns the map's current pitch (tilt).

##### Returns

`number`

The map's current pitch, measured in degrees away from the plane of the screen.

***

#### getPixelRatio()

> **getPixelRatio**(): `number`

Returns the map's pixel ratio.
Note that the pixel ratio actually applied may be lower to respect maxCanvasSize.

##### Returns

`number`

The pixel ratio.

***

#### getProjection()

> **getProjection**(): `ProjectionSpecification`

Gets the ProjectionSpecification.

##### Returns

`ProjectionSpecification`

the projection specification.

##### Example

```ts
let projection = map.getProjection();
```

***

#### getRenderWorldCopies()

> **getRenderWorldCopies**(): `boolean`

Returns the state of `renderWorldCopies`. If `true`, multiple copies of the world will be rendered side by side beyond -180 and 180 degrees longitude. If set to `false`:

- When the map is zoomed out far enough that a single representation of the world does not fill the map's entire
container, there will be blank space beyond 180 and -180 degrees longitude.
- Features that cross 180 and -180 degrees longitude will be cut in two (with one portion on the right edge of the
map and the other on the left edge of the map) at every zoom level.

##### Returns

`boolean`

The renderWorldCopies

##### Example

```ts
let worldCopiesRendered = map.getRenderWorldCopies();
```

##### See

[Render world copies](https://maplibre.org/maplibre-gl-js/docs/examples/render-world-copies/)

***

#### getRoll()

> **getRoll**(): `number`

Returns the map's current roll angle.

##### Returns

`number`

The map's current roll, measured in degrees about the camera boresight.

***

#### getSky()

> **getSky**(): `SkySpecification`

Returns the value of the style's sky.

##### Returns

`SkySpecification`

the sky properties of the style.

##### Example

```ts
map.getSky();
```

***

#### getSource()

> **getSource**\<`Source`\>(`id`: `string`): `Source` \| `undefined`

Returns the source with the specified ID in the map's style.

This method is often used to update a source using the instance members for the relevant
source type as defined in classes that derive from Source.
For example, setting the `data` for a GeoJSON source or updating the `url` and `coordinates`
of an image source.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the source to get. |

##### Returns

`Source` \| `undefined`

The style source with the specified ID or `undefined` if the ID
corresponds to no existing sources.
The shape of the object varies by source type.
A list of options for each source type is available on the MapLibre Style Specification's
[Sources](https://maplibre.org/maplibre-style-spec/sources/) page.

##### Example

```ts
let sourceObject = map.getSource('points');
```

##### See

 - [Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)
 - [Animate a point](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-point/)
 - [Add live realtime data](https://maplibre.org/maplibre-gl-js/docs/examples/add-live-realtime-data/)

***

#### getSprite()

> **getSprite**(): `object`[]

Returns the as-is value of the style's sprite.

##### Returns

`object`[]

style's sprite list of id-url pairs

***

#### getStyle()

> **getStyle**(): `StyleSpecification`

Returns the map's MapLibre style object, a JSON object which can be used to recreate the map's style.

##### Returns

`StyleSpecification`

The map's style JSON object.

##### Example

```ts
let styleJson = map.getStyle();
```

***

#### getTerrain()

> **getTerrain**(): `TerrainSpecification` \| `null`

Get the terrain-options if terrain is loaded

##### Returns

`TerrainSpecification` \| `null`

the TerrainSpecification passed to setTerrain

##### Example

```ts
map.getTerrain(); // { source: 'terrain' };
```

***

#### getVerticalFieldOfView()

> **getVerticalFieldOfView**(): `number`

Returns the map's current vertical field of view, in degrees.

##### Returns

`number`

The map's current vertical field of view.

##### Default Value

```ts
36.87
```

##### Example

```ts
const verticalFieldOfView = map.getVerticalFieldOfView();
```

***

#### getZoom()

> **getZoom**(): `number`

Returns the map's current zoom level.

##### Returns

`number`

The map's current zoom level.

##### Example

```ts
map.getZoom();
```

***

#### getZoomSnap()

> **getZoomSnap**(): `number`

Returns the map's current zoom snap level.

##### Returns

`number`

The map's current zoom snap level.

***

#### hasControl()

> **hasControl**(`control`: `IControl`): `boolean`

Checks if a control exists on the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `control` | `IControl` | The [IControl](#icontrol) to check. |

##### Returns

`boolean`

true if map contains control.

##### Example

```ts
// Define a new navigation control.
let navigation = new NavigationControl();
// Add zoom and rotation controls to the map.
map.addControl(navigation);
// Check that the navigation control exists on the map.
map.hasControl(navigation);
```

***

#### hasImage()

> **hasImage**(`id`: `string`): `boolean`

Check whether or not an image with a specific ID exists in the style. This checks both images
in the style's original sprite and any images
that have been added at runtime using [Map.addImage](#addimage).

An ErrorEvent will be fired if the image ID is missing.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the image. |

##### Returns

`boolean`

A Boolean indicating whether the image exists.

##### Example

Check if an image with the ID 'cat' exists in the style's sprite.
```ts
let catIconExists = map.hasImage('cat');
```

***

#### isMoving()

> **isMoving**(): `boolean`

Returns true if the map is panning, zooming, rotating, or pitching due to a camera animation or user gesture.

##### Returns

`boolean`

true if the map is moving.

##### Example

```ts
let isMoving = map.isMoving();
```

***

#### isRotating()

> **isRotating**(): `boolean`

Returns true if the map is rotating due to a camera animation or user gesture.

##### Returns

`boolean`

true if the map is rotating.

##### Example

```ts
map.isRotating();
```

***

#### isSourceLoaded()

> **isSourceLoaded**(`id`: `string`): `boolean`

Returns a Boolean indicating whether the source is loaded. Returns `true` if the source with
the given ID in the map's style has no outstanding network requests, otherwise `false`.

A ErrorEvent event will be fired if there is no source with the specified ID.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the source to be checked. |

##### Returns

`boolean`

A Boolean indicating whether the source is loaded.

##### Example

```ts
let sourceLoaded = map.isSourceLoaded('bathymetry-data');
```

***

#### isStyleLoaded()

> **isStyleLoaded**(): `boolean` \| `void`

Returns a Boolean indicating whether the map's style is fully loaded.

##### Returns

`boolean` \| `void`

A Boolean indicating whether the style is fully loaded.

##### Example

```ts
let styleLoadStatus = map.isStyleLoaded();
```

***

#### isZooming()

> **isZooming**(): `boolean`

Returns true if the map is zooming due to a camera animation or user gesture.

##### Returns

`boolean`

true if the map is zooming.

##### Example

```ts
let isZooming = map.isZooming();
```

***

#### jumpTo()

> **jumpTo**(`options`: [`JumpToOptions`](#jumptooptions), `eventData?`: `any`): `this`

Changes any combination of center, zoom, bearing, pitch, and roll, without
an animated transition. The map will retain its current values for any
details not specified in `options`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, `zoomend`, `pitchstart`,
`pitch`, `pitchend`, `rollstart`, `roll`, `rollend` and `rotate`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`JumpToOptions`](#jumptooptions) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

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

##### See

 - [Jump to a series of locations](https://maplibre.org/maplibre-gl-js/docs/examples/jump-to-a-series-of-locations/)
 - [Update a feature in realtime](https://maplibre.org/maplibre-gl-js/docs/examples/update-a-feature-in-realtime/)

***

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### listImages()

> **listImages**(): `string`[]

Returns an Array of strings containing the IDs of all images currently available in the map.
This includes both images from the style's original sprite
and any images that have been added at runtime using [Map.addImage](#addimage).

##### Returns

`string`[]

An Array of strings containing the names of all sprites/images currently available in the map.

##### Example

```ts
let allImages = map.listImages();
```

***

#### loaded()

> **loaded**(): `boolean`

Returns a Boolean indicating whether the map is fully loaded.

Returns `false` if the style is not yet fully loaded,
or if there has been a change to the sources or style that
has not yet fully loaded.

##### Returns

`boolean`

A Boolean indicating whether the map is fully loaded.

***

#### loadImage()

> **loadImage**(`url`: `string`): `Promise`\<`GetResourceResponse`\<`HTMLImageElement` \| `ImageBitmap`\>\>

Load an image from an external URL to be used with [Map.addImage](#addimage). External
domains must support [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | The URL of the image file. Image file must be in png, webp, or jpg format. |

##### Returns

`Promise`\<`GetResourceResponse`\<`HTMLImageElement` \| `ImageBitmap`\>\>

a promise that is resolved when the image is loaded

##### Example

Load an image from an external URL.
```ts
const response = await map.loadImage('https://picsum.photos/50/50');
// Add the loaded image to the style's sprite with the ID 'photo'.
map.addImage('photo', response.data);
```

##### See

[Add an icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-an-icon-to-the-map/)

***

#### moveLayer()

> **moveLayer**(`id`: `string`, `beforeId?`: `string`): `this`

Moves a layer to a different z-position.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the layer to move. |
| `beforeId?` | `string` | The ID of an existing layer to insert the new layer before. When viewing the map, the `id` layer will appear beneath the `beforeId` layer. If `beforeId` is omitted, the layer will be appended to the end of the layers array and appear above all other layers on the map. |

##### Returns

`this`

##### Example

Move a layer with ID 'polygon' before the layer with ID 'country-label'. The `polygon` layer will appear beneath the `country-label` layer on the map.
```ts
map.moveLayer('polygon', 'country-label');
```

***

#### panBy()

> **panBy**(`offset`: [`PointLike`](#pointlike), `options?`: [`EaseToOptions`](#easetooptions), `eventData?`: `any`): `this`

Pans the map by the specified offset.

Triggers the following events: `movestart` and `moveend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset` | [`PointLike`](#pointlike) | `x` and `y` coordinates by which to pan the map. |
| `options?` | [`EaseToOptions`](#easetooptions) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### See

[Navigate the map with game-like controls](https://maplibre.org/maplibre-gl-js/docs/examples/navigate-the-map-with-game-like-controls/)

***

#### panTo()

> **panTo**(`lnglat`: [`LngLatLike`](#lnglatlike), `options?`: [`EaseToOptions`](#easetooptions), `eventData?`: `any`): `this`

Pans the map to the specified location with an animated transition.

Triggers the following events: `movestart` and `moveend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lnglat` | [`LngLatLike`](#lnglatlike) | The location to pan the map to. |
| `options?` | [`EaseToOptions`](#easetooptions) | Options describing the destination and animation of the transition. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

```ts
map.panTo([-74, 38]);
// Specify that the panTo animation should last 5000 milliseconds.
map.panTo([-74, 38], {duration: 5000});
```

##### See

[Update a feature in realtime](https://maplibre.org/maplibre-gl-js/docs/examples/update-a-feature-in-realtime/)

***

#### project()

> **project**(`lnglat`: [`LngLatLike`](#lnglatlike)): [`Point`](#point-1)

Returns a [Point](https://github.com/mapbox/point-geometry) representing pixel coordinates, relative to the map's `container`,
that correspond to the specified geographical location.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lnglat` | [`LngLatLike`](#lnglatlike) | The geographical location to project. |

##### Returns

[`Point`](#point-1)

The [Point](https://github.com/mapbox/point-geometry) corresponding to `lnglat`, relative to the map's `container`.

##### Example

```ts
let coordinate = [-122.420679, 37.772537];
let point = map.project(coordinate);
```

***

#### queryRenderedFeatures()

> **queryRenderedFeatures**(`geometryOrOptions?`: [`PointLike`](#pointlike) \| \[[`PointLike`](#pointlike), [`PointLike`](#pointlike)\] \| [`QueryRenderedFeaturesOptions`](#queryrenderedfeaturesoptions), `options?`: [`QueryRenderedFeaturesOptions`](#queryrenderedfeaturesoptions)): `MapGeoJSONFeature`[]

Returns an array of MapGeoJSONFeature objects
representing visible features that satisfy the query parameters.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `geometryOrOptions?` | [`PointLike`](#pointlike) \| \[[`PointLike`](#pointlike), [`PointLike`](#pointlike)\] \| [`QueryRenderedFeaturesOptions`](#queryrenderedfeaturesoptions) | (optional) The geometry of the query region in pixel points within the map viewport: either a single pixel point or a pair of top-left and bottom-right pixel points describing a bounding box. The origin of the pixel points is at the top-left of the map viewport. Omitting this parameter (i.e. calling [Map.queryRenderedFeatures](#queryrenderedfeatures) with zero arguments, or with only a `options` argument) is equivalent to passing a bounding box encompassing the entire map viewport. The geometryOrOptions can receive a [QueryRenderedFeaturesOptions](#queryrenderedfeaturesoptions) only to support a situation where the function receives only one parameter which is the options parameter. |
| `options?` | [`QueryRenderedFeaturesOptions`](#queryrenderedfeaturesoptions) | (optional) Options object. |

##### Returns

`MapGeoJSONFeature`[]

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

##### Examples

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

##### See

[Get features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-features-under-the-mouse-pointer/)

***

#### querySourceFeatures()

> **querySourceFeatures**(`sourceId`: `string`, `parameters?`: [`QuerySourceFeatureOptions`](#querysourcefeatureoptions) \| `null`): `GeoJSONFeature`[]

Returns an array of MapGeoJSONFeature objects
representing features within the specified vector tile or GeoJSON source that satisfy the query parameters.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sourceId` | `string` | The ID of the vector tile or GeoJSON source to query. |
| `parameters?` | [`QuerySourceFeatureOptions`](#querysourcefeatureoptions) \| `null` | The options object. |

##### Returns

`GeoJSONFeature`[]

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

##### Example

Find all features in one source layer in a vector source
```ts
let features = map.querySourceFeatures('your-source-id', {
  sourceLayer: 'your-source-layer'
});
```

***

#### queryTerrainElevation()

> **queryTerrainElevation**(`lngLatLike`: [`LngLatLike`](#lnglatlike)): `number` \| `null`

Gets the elevation at a given location, in meters above sea level.
Returns null if terrain is not enabled.
If terrain is enabled with some exaggeration value, the value returned here will be reflective of (multiplied by) that exaggeration value.
This method should be used for proper positioning of custom 3d objects, as explained [here](https://maplibre.org/maplibre-gl-js/docs/examples/adding-3d-models-using-threejs-on-terrain/)

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lngLatLike` | [`LngLatLike`](#lnglatlike) | [x,y] or LngLat coordinates of the location |

##### Returns

`number` \| `null`

elevation in meters

***

#### redraw()

> **redraw**(): `this`

Force a synchronous redraw of the map.

##### Returns

`this`

##### Example

```ts
map.redraw();
```

***

#### refreshTiles()

> **refreshTiles**(`sourceId`: `string`, `tileIds?`: `object`[]): `void`

Triggers a reload of the selected tiles

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sourceId` | `string` | The ID of the source |
| `tileIds?` | `object`[] | An array of tile IDs to be reloaded. If not defined, all tiles will be reloaded. |

##### Returns

`void`

##### Example

```ts
map.refreshTiles('satellite', [{x:1024, y: 1023, z: 11}, {x:1023, y: 1023, z: 11}]);
```

***

#### remove() <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **remove**(): `this`

Removes the map from its parent container.

##### Returns

`this`

The map instance.

***

#### removeControl()

> **removeControl**(`control`: `IControl`): `this`

Removes the control from the map.

An ErrorEvent will be fired if the control is invalid.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `control` | `IControl` | The [IControl](#icontrol) to remove. |

##### Returns

`this`

##### Example

```ts
// Define a new navigation control.
let navigation = new NavigationControl();
// Add zoom and rotation controls to the map.
map.addControl(navigation);
// Remove zoom and rotation controls from the map.
map.removeControl(navigation);
```

***

#### removeFeatureState()

> **removeFeatureState**(`target`: `FeatureIdentifier`, `key?`: `string`): `this`

Removes the `state` of a feature, setting it back to the default behavior.
If only a `target.source` is specified, it will remove the state for all features from that source.
If `target.id` is also specified, it will remove all keys for that feature's state.
If `key` is also specified, it removes only that key from that feature's state.
Features are identified by their `feature.id` attribute, which can be any number or string.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `FeatureIdentifier` | Identifier of where to remove state. It can be a source, a feature, or a specific key of feature. Feature objects returned from [Map.queryRenderedFeatures](#queryrenderedfeatures) or event handlers can be used as feature identifiers. |
| `key?` | `string` | (optional) The key in the feature state to reset. |

##### Returns

`this`

##### Examples

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

***

#### removeImage()

> **removeImage**(`id`: `string`): `void`

Remove an image from a style. This can be an image from the style's original
sprite or any images
that have been added at runtime using [Map.addImage](#addimage).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the image. |

##### Returns

`void`

##### Example

```ts
// If an image with the ID 'cat' exists in
// the style's sprite, remove it.
if (map.hasImage('cat')) map.removeImage('cat');
```

***

#### removeLayer()

> **removeLayer**(`id`: `string`): `this`

Removes the layer with the given ID from the map's style.

An ErrorEvent will be fired if no such layer exists.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the layer to remove |

##### Returns

`this`

##### Example

If a layer with ID 'state-data' exists, remove it.
```ts
if (map.getLayer('state-data')) map.removeLayer('state-data');
```

***

#### removeSource()

> **removeSource**(`id`: `string`): `this`

Removes a source from the map's style.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the source to remove. |

##### Returns

`this`

##### Example

```ts
map.removeSource('bathymetry-data');
```

***

#### removeSprite()

> **removeSprite**(`id`: `string`): `this`

Removes the sprite from the map's style. Fires the `style` event.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the sprite to remove. If the sprite is declared as a single URL, the ID must be "default". |

##### Returns

`this`

##### Example

```ts
map.removeSprite('sprite-two');
map.removeSprite('default');
```

***

#### resetNorth()

> **resetNorth**(`options?`: [`AnimationOptions`](#animationoptions), `eventData?`: `any`): `this`

Rotates the map so that north is up (0° bearing), with an animated transition.

Triggers the following events: `movestart`, `moveend`, and `rotate`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AnimationOptions`](#animationoptions) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

***

#### resetNorthPitch()

> **resetNorthPitch**(`options?`: [`AnimationOptions`](#animationoptions), `eventData?`: `any`): `this`

Rotates and pitches the map so that north is up (0° bearing) and pitch and roll are 0°, with an animated transition.

Triggers the following events: `movestart`, `move`, `moveend`, `pitchstart`, `pitch`, `pitchend`, `rollstart`, `roll`, `rollend`, and `rotate`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AnimationOptions`](#animationoptions) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

***

#### resize()

> **resize**(`eventData?`: `any`, `constrainTransform?`: `boolean`): `this`

Resizes the map according to the dimensions of its
`container` element.

Checks if the map container size changed and updates the map if it has changed.
This method must be called after the map's `container` is resized programmatically
or when the map is shown after being initially hidden with CSS.

Triggers the following events: `movestart`, `move`, `moveend`, and `resize`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventData?` | `any` | Additional properties to be passed to `movestart`, `move`, `resize`, and `moveend` events that get triggered as a result of resize. This can be useful for differentiating the source of an event (for example, user-initiated or programmatically-triggered events). |
| `constrainTransform?` | `boolean` | - |

##### Returns

`this`

##### Example

Resize the map when the map container is shown after being initially hidden with CSS.
```ts
let mapDiv = document.getElementById('map');
if (mapDiv.style.visibility === true) map.resize();
```

***

#### rotateTo()

> **rotateTo**(`bearing`: `number`, `options?`: [`EaseToOptions`](#easetooptions), `eventData?`: `any`): `this`

Rotates the map to the specified bearing, with an animated transition. The bearing is the compass direction
that is "up"; for example, a bearing of 90° orients the map so that east is up.

Triggers the following events: `movestart`, `moveend`, and `rotate`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bearing` | `number` | The desired bearing. |
| `options?` | [`EaseToOptions`](#easetooptions) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

***

#### setAnisotropicFilterPitch()

> **setAnisotropicFilterPitch**(`anisotropicFilterPitch?`: `number` \| `null`): `this`

Sets the map's anisotropic filter pitch or reverts it to its default.

A ErrorEvent event will be fired if anisotropicFilterPitch is out of bounds.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `anisotropicFilterPitch?` | `number` \| `null` | The pitch above which to apply anisotropic filtering to the map's raster layers (0-180). If `null` or `undefined` is provided, the function reverts to the default pitch threshold (20). |

##### Returns

`this`

##### Example

```ts
map.setAnisotropicFilterPitch(85);
```

***

#### setBearing()

> **setBearing**(`bearing`: `number`, `eventData?`: `any`): `this`

Sets the map's bearing (rotation). The bearing is the compass direction that is "up"; for example, a bearing
of 90° orients the map so that east is up.

Equivalent to `jumpTo({bearing: bearing})`.

Triggers the following events: `movestart`, `moveend`, and `rotate`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bearing` | `number` | The desired bearing. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

Rotate the map to 90 degrees
```ts
map.setBearing(90);
```

***

#### setCenter()

> **setCenter**(`center`: [`LngLatLike`](#lnglatlike), `eventData?`: `any`): `this`

Sets the map's geographical centerpoint. Equivalent to `jumpTo({center: center})`.

Triggers the following events: `movestart` and `moveend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `center` | [`LngLatLike`](#lnglatlike) | The centerpoint to set. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

```ts
map.setCenter([-74, 38]);
```

***

#### setCenterClampedToGround()

> **setCenterClampedToGround**(`centerClampedToGround`: `boolean`): `void`

Sets the value of `centerClampedToGround`.

If true, the elevation of the center point will automatically be set to the terrain elevation
(or zero if terrain is not enabled). If false, the elevation of the center point will default
to sea level and will not automatically update. Defaults to true. Needs to be set to false to
keep the camera above ground when pitch \> 90 degrees.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `centerClampedToGround` | `boolean` |

##### Returns

`void`

***

#### setCenterElevation()

> **setCenterElevation**(`elevation`: `number`, `eventData?`: `any`): `this`

Sets the elevation of the map's center point, in meters above sea level. Equivalent to `jumpTo({elevation: elevation})`.

Triggers the following events: `movestart` and `moveend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `elevation` | `number` | The elevation to set, in meters above sea level. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

***

#### setContainer() <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **setContainer**(`container`: `string` \| `HTMLElement`): `this`

Sets the container for the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `container` | `string` \| `HTMLElement` | The container element or the ID of the container element. |

##### Returns

`this`

The map instance.

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

***

#### setFeatureState()

> **setFeatureState**(`feature`: `FeatureIdentifier`, `state`: `any`): `this`

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

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `feature` | `FeatureIdentifier` | Feature identifier. Feature objects returned from [Map.queryRenderedFeatures](#queryrenderedfeatures) or event handlers can be used as feature identifiers. |
| `state` | `any` | A set of key-value pairs. The values should be valid JSON types. |

##### Returns

`this`

##### Example

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

##### See

[Create a hover effect](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/)

***

#### setFilter()

> **setFilter**(`layerId`: `string`, `filter?`: `FilterSpecification` \| `null`, `options?`: [`StyleSetterOptions`](#stylesetteroptions)): `this`

Sets the filter for the specified style layer.

Filters control which features a style layer renders from its source.
Any feature for which the filter expression evaluates to `true` will be
rendered on the map. Those that are false will be hidden.

Use `setFilter` to show a subset of your source data.

To clear the filter, pass `null` or `undefined` as the second parameter.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to which the filter will be applied. |
| `filter?` | `FilterSpecification` \| `null` | The filter, conforming to the MapLibre Style Specification's [filter definition](https://maplibre.org/maplibre-style-spec/layers/#filter). If `null` or `undefined` is provided, the function removes any existing filter from the layer. |
| `options?` | [`StyleSetterOptions`](#stylesetteroptions) | Options object. |

##### Returns

`this`

##### Examples

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

##### See

[Create a timeline animation](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-time-slider/)

***

#### setGlobalStateProperty()

> **setGlobalStateProperty**(`propertyName`: `string`, `value`: `any`): `this`

Sets a global state property that can be retrieved with the [`global-state` expression](https://maplibre.org/maplibre-style-spec/expressions/#global-state).
If the value is null, it resets the property to its default value defined in the [`state` style property](https://maplibre.org/maplibre-style-spec/root/#state).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `propertyName` | `string` | The name of the state property to set. |
| `value` | `any` | The value of the state property to set. |

##### Returns

`this`

***

#### setGlyphs()

> **setGlyphs**(`glyphsUrl`: `string` \| `null` \| `undefined`, `options?`: [`StyleSetterOptions`](#stylesetteroptions)): `this`

Sets the value of the style's glyphs property. Pass a falsy value (null or undefined)
to unset glyphs.
 *
 *

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `glyphsUrl` | `string` \| `null` \| `undefined` | Glyph URL to set. Must conform to the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/glyphs/). * |
| `options?` | [`StyleSetterOptions`](#stylesetteroptions) | Options object. * |

##### Returns

`this`

##### Example

* ```ts
 * map.setGlyphs('https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf');
 * ```

***

#### setLayerZoomRange()

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

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to which the zoom extent will be applied. |
| `minzoom` | `number` | The minimum zoom to set (0-24). |
| `maxzoom` | `number` | The maximum zoom to set (0-24). |

##### Returns

`this`

##### Example

```ts
map.setLayerZoomRange('my-layer', 2, 5);
```

***

#### setLayoutProperty()

> **setLayoutProperty**(`layerId`: `string`, `name`: `string`, `value`: `any`, `options?`: [`StyleSetterOptions`](#stylesetteroptions)): `this`

Sets the value of a layout property in the specified style layer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to set the layout property in. |
| `name` | `string` | The name of the layout property to set. |
| `value` | `any` | The value of the layout property. Must be of a type appropriate for the property, as defined in the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/). |
| `options?` | [`StyleSetterOptions`](#stylesetteroptions) | The options object. |

##### Returns

`this`

##### Example

```ts
map.setLayoutProperty('my-layer', 'visibility', 'none');
```

***

#### setLight()

> **setLight**(`light`: `LightSpecification`, `options?`: [`StyleSetterOptions`](#stylesetteroptions)): `this`

Sets the any combination of light values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `light` | `LightSpecification` | Light properties to set. Must conform to the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/light). |
| `options?` | [`StyleSetterOptions`](#stylesetteroptions) | Options object. |

##### Returns

`this`

##### Example

```ts
let layerVisibility = map.getLayoutProperty('my-layer', 'visibility');
```

***

#### setMaxBounds()

> **setMaxBounds**(`bounds?`: [`LngLatBoundsLike`](#lnglatboundslike) \| `null`): `this`

Sets or clears the map's geographical bounds.

Pan and zoom operations are constrained within these bounds.
If a pan or zoom is performed that would
display regions outside these bounds, the map will
instead display a position and zoom level
as close as possible to the operation's request while still
remaining within the bounds.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `bounds?` | [`LngLatBoundsLike`](#lnglatboundslike) \| `null` | The maximum bounds to set. If `null` or `undefined` is provided, the function removes the map's maximum bounds. |

##### Returns

`this`

##### Example

Define bounds that conform to the `LngLatBoundsLike` object as set the max bounds.
```ts
let bounds = [
  [-74.04728, 40.68392], // [west, south]
  [-73.91058, 40.87764]  // [east, north]
];
map.setMaxBounds(bounds);
```

***

#### setMaxPitch()

> **setMaxPitch**(`maxPitch?`: `number` \| `null`): `this`

Sets or clears the map's maximum pitch.
If the map's current pitch is higher than the new maximum,
the map will pitch to the new maximum and trigger the following events:
`movestart`, `move`, `moveend`, `pitchstart`, `pitch`, and `pitchend`.

A ErrorEvent event will be fired if maxPitch is out of bounds.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxPitch?` | `number` \| `null` | The maximum pitch to set (0-180). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. If `null` or `undefined` is provided, the function removes the current maximum pitch (sets it to 60). |

##### Returns

`this`

***

#### setMaxZoom()

> **setMaxZoom**(`maxZoom?`: `number` \| `null`): `this`

Sets or clears the map's maximum zoom level.
If the map's current zoom level is higher than the new maximum,
the map will zoom to the new maximum and trigger the following events:
`movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

A ErrorEvent event will be fired if minZoom is out of bounds.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxZoom?` | `number` \| `null` | The maximum zoom level to set. If `null` or `undefined` is provided, the function removes the current maximum zoom (sets it to 22). |

##### Returns

`this`

##### Example

```ts
map.setMaxZoom(18.75);
```

***

#### setMinPitch()

> **setMinPitch**(`minPitch?`: `number` \| `null`): `this`

Sets or clears the map's minimum pitch.
If the map's current pitch is lower than the new minimum,
the map will pitch to the new minimum and trigger the following events:
`movestart`, `move`, `moveend`, `pitchstart`, `pitch`, and `pitchend`.

A ErrorEvent event will be fired if minPitch is out of bounds.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `minPitch?` | `number` \| `null` | The minimum pitch to set (0-180). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. If `null` or `undefined` is provided, the function removes the current minimum pitch (i.e. sets it to 0). |

##### Returns

`this`

***

#### setMinZoom()

> **setMinZoom**(`minZoom?`: `number` \| `null`): `this`

Sets or clears the map's minimum zoom level.
If the map's current zoom level is lower than the new minimum,
the map will zoom to the new minimum and trigger the following events:
`movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

It is not always possible to zoom out and reach the set `minZoom`.
Other factors such as map height may restrict zooming. For example,
if the map is 512px tall it will not be possible to zoom below zoom 0
no matter what the `minZoom` is set to.

A ErrorEvent event will be fired if minZoom is out of bounds.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `minZoom?` | `number` \| `null` | The minimum zoom level to set (-2 - 24). If `null` or `undefined` is provided, the function removes the current minimum zoom (i.e. sets it to -2). |

##### Returns

`this`

##### Example

```ts
map.setMinZoom(12.25);
```

***

#### setPadding()

> **setPadding**(`padding`: [`PaddingOptions`](#paddingoptions), `eventData?`: `any`): `this`

Sets the padding in pixels around the viewport.

Equivalent to `jumpTo({padding: padding})`.

Triggers the following events: `movestart` and `moveend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `padding` | [`PaddingOptions`](#paddingoptions) | The desired padding. |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

Sets a left padding of 300px, and a top padding of 50px
```ts
map.setPadding({ left: 300, top: 50 });
```

***

#### setPaintProperty()

> **setPaintProperty**(`layerId`: `string`, `name`: `string`, `value`: `any`, `options?`: [`StyleSetterOptions`](#stylesetteroptions)): `this`

Sets the value of a paint property in the specified style layer.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `layerId` | `string` | The ID of the layer to set the paint property in. |
| `name` | `string` | The name of the paint property to set. |
| `value` | `any` | The value of the paint property to set. Must be of a type appropriate for the property, as defined in the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/). Pass `null` to unset the existing value. |
| `options?` | [`StyleSetterOptions`](#stylesetteroptions) | Options object. |

##### Returns

`this`

##### Example

```ts
map.setPaintProperty('my-layer', 'fill-color', '#faafee');
```

##### See

 - [Change a layer's color with buttons](https://maplibre.org/maplibre-gl-js/docs/examples/change-a-layers-color-with-buttons/)
 - [Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

#### setPitch()

> **setPitch**(`pitch`: `number`, `eventData?`: `any`): `this`

Sets the map's pitch (tilt). Equivalent to `jumpTo({pitch: pitch})`.

Triggers the following events: `movestart`, `moveend`, `pitchstart`, and `pitchend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pitch` | `number` | The pitch to set, measured in degrees away from the plane of the screen (0-60). |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

***

#### setPixelRatio()

> **setPixelRatio**(`pixelRatio`: `number`): `void`

Sets the map's pixel ratio. This allows to override `devicePixelRatio`.
After this call, the canvas' `width` attribute will be `container.clientWidth * pixelRatio`
and its height attribute will be `container.clientHeight * pixelRatio`.
Set this to null to disable `devicePixelRatio` override.
Note that the pixel ratio actually applied may be lower to respect maxCanvasSize.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixelRatio` | `number` | The pixel ratio. |

##### Returns

`void`

***

#### setProjection()

> **setProjection**(`projection`: `ProjectionSpecification`): `this`

Sets the ProjectionSpecification.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projection` | `ProjectionSpecification` | the projection specification to set |

##### Returns

`this`

***

#### setRenderWorldCopies()

> **setRenderWorldCopies**(`renderWorldCopies?`: `boolean` \| `null`): `this`

Sets the state of `renderWorldCopies`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `renderWorldCopies?` | `boolean` \| `null` | If `true`, multiple copies of the world will be rendered side by side beyond -180 and 180 degrees longitude. If set to `false`: - When the map is zoomed out far enough that a single representation of the world does not fill the map's entire container, there will be blank space beyond 180 and -180 degrees longitude. - Features that cross 180 and -180 degrees longitude will be cut in two (with one portion on the right edge of the map and the other on the left edge of the map) at every zoom level. `undefined` is treated as `true`, `null` is treated as `false`. |

##### Returns

`this`

##### Example

```ts
map.setRenderWorldCopies(true);
```

##### See

[Render world copies](https://maplibre.org/maplibre-gl-js/docs/examples/render-world-copies/)

***

#### setRoll()

> **setRoll**(`roll`: `number`, `eventData?`: `any`): `this`

Sets the map's roll angle. Equivalent to `jumpTo({roll: roll})`.

Triggers the following events: `movestart`, `moveend`, `rollstart`, and `rollend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `roll` | `number` | The roll to set, measured in degrees about the camera boresight |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

***

#### setSky()

> **setSky**(`sky`: `SkySpecification`, `options?`: [`StyleSetterOptions`](#stylesetteroptions)): `this`

Sets the value of style's sky properties.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sky` | `SkySpecification` | Sky properties to set. Must conform to the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/sky/). |
| `options?` | [`StyleSetterOptions`](#stylesetteroptions) | Options object. |

##### Returns

`this`

##### Example

```ts
map.setSky({'atmosphere-blend': 1.0});
```

***

#### setSourceTileLodParams()

> **setSourceTileLodParams**(`maxZoomLevelsOnScreen`: `number`, `tileCountMaxMinRatio`: `number`, `sourceId?`: `string`): `this`

Change the tile Level of Detail behavior of the specified source. These parameters have no effect when
pitch == 0, and the largest effect when the horizon is visible on screen.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxZoomLevelsOnScreen` | `number` | The maximum number of distinct zoom levels allowed on screen at a time. There will generally be fewer zoom levels on the screen, the maximum can only be reached when the horizon is at the top of the screen. Increasing the maximum number of zoom levels causes the zoom level to decay faster toward the horizon. |
| `tileCountMaxMinRatio` | `number` | The ratio of the maximum number of tiles loaded (at high pitch) to the minimum number of tiles loaded. Increasing this ratio allows more tiles to be loaded at high pitch angles. If the ratio would otherwise be exceeded, the zoom level is reduced uniformly to keep the number of tiles within the limit. |
| `sourceId?` | `string` | The ID of the source to set tile LOD parameters for. All sources will be updated if unspecified. If `sourceId` is specified but a corresponding source does not exist, an error is thrown. |

##### Returns

`this`

##### Example

```ts
map.setSourceTileLodParams(4.0, 3.0, 'terrain');
```

##### See

[Modify Level of Detail behavior](https://maplibre.org/maplibre-gl-js/docs/examples/level-of-detail-control/)

***

#### setSprite()

> **setSprite**(`spriteUrl`: `string` \| `null`, `options?`: [`StyleSetterOptions`](#stylesetteroptions)): `this`

Sets the value of the style's sprite property.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `spriteUrl` | `string` \| `null` | Sprite URL to set. |
| `options?` | [`StyleSetterOptions`](#stylesetteroptions) | Options object. |

##### Returns

`this`

##### Example

```ts
map.setSprite('YOUR_SPRITE_URL');
```

***

#### setStyle() <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **setStyle**(`style`: `string` \| `StyleSpecification`, `options?`: [`StyleSwapOptions`](#styleswapoptions) & [`StyleOptions`](#styleoptions)): `this`

Sets the style of the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `style` | `string` \| `StyleSpecification` | The style to set. |
| `options?` | [`StyleSwapOptions`](#styleswapoptions) & [`StyleOptions`](#styleoptions) | Additional options for the style. |

##### Returns

`this`

The map instance.

***

#### setTerrain()

> **setTerrain**(`options`: `TerrainSpecification` \| `null`): `this`

Loads a 3D terrain mesh, based on a "raster-dem" source.

Triggers the `terrain` event.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `TerrainSpecification` \| `null` | Options object. |

##### Returns

`this`

##### Example

```ts
map.setTerrain({ source: 'terrain' });
```

***

#### setTransformConstrain()

> **setTransformConstrain**(`constrain?`: [`TransformConstrainFunction`](#transformconstrainfunction) \| `null`): `this`

Sets or clears the callback overriding how the map constrains the viewport's lnglat and zoom to respect the longitude and latitude bounds.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constrain?` | [`TransformConstrainFunction`](#transformconstrainfunction) \| `null` | A [TransformConstrainFunction](#transformconstrainfunction) callback defining how the viewport should respect the bounds. `null` clears the callback and reverts the constrain to the map transform's default constrain function. |

##### Returns

`this`

##### Example

```ts
function customTransformConstrain(lngLat, zoom) {
  return {center: lngLat, zoom: zoom ?? 0};
};
map.setTransformConstrain(customTransformConstrain);
```

##### See

[Customize the map transform constrain](https://maplibre.org/maplibre-gl-js/docs/examples/customize-the-map-transform-constrain/)

***

#### setTransformRequest()

> **setTransformRequest**(`transformRequest`: [`RequestTransformFunction`](#requesttransformfunction) \| `null`): `this`

Updates the requestManager's transform request with a new function

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transformRequest` | [`RequestTransformFunction`](#requesttransformfunction) \| `null` | A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests. Expected to return an object with a `url` property and optionally `headers` and `credentials` properties |

##### Returns

`this`

##### Example

```ts
map.setTransformRequest((url: string, resourceType: string) => {});
```

***

#### setVerticalFieldOfView()

> **setVerticalFieldOfView**(`fov`: `number`, `eventData?`: `any`): `this`

Sets the map's vertical field of view, in degrees.

Triggers the following events: `movestart`, `move`, and `moveend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fov` | `number` | The vertical field of view to set, in degrees (0-180). |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Default Value

```ts
36.87
```

##### Example

Change vertical field of view to 30 degrees
```ts
map.setVerticalFieldOfView(30);
```

***

#### setZoom()

> **setZoom**(`zoom`: `number`, `eventData?`: `any`): `this`

Sets the map's zoom level. Equivalent to `jumpTo({zoom: zoom})`.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zoom` | `number` | The zoom level to set (0-20). |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

Zoom to the zoom level 5 without an animated transition
```ts
map.setZoom(5);
```

***

#### setZoomSnap()

> **setZoomSnap**(`snap`: `number`): `this`

Sets the map's zoom snap level.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `snap` | `number` | The zoom snap level to set. |

##### Returns

`this`

***

#### snapToNorth()

> **snapToNorth**(`options?`: [`AnimationOptions`](#animationoptions), `eventData?`: `any`): `this`

Snaps the map so that north is up (0° bearing), if the current bearing is close enough to it (i.e. within the
`bearingSnap` threshold).

Triggers the following events: `movestart`, `moveend`, and `rotate`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AnimationOptions`](#animationoptions) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

***

#### stop()

> **stop**(): `this`

Stops any animated transition underway.

##### Returns

`this`

***

#### triggerRepaint()

> **triggerRepaint**(): `void`

Trigger the rendering of a single frame. Use this method with custom layers to
repaint the map when the layer changes. Calling this multiple times before the
next frame is rendered will still result in only a single frame being rendered.

##### Returns

`void`

##### Example

```ts
map.triggerRepaint();
```

##### See

 - [Add a 3D model](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-3d-model-using-threejs/)
 - [Add an animated icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/add-an-animated-icon-to-the-map/)

***

#### unproject()

> **unproject**(`point`: [`PointLike`](#pointlike)): [`LngLat`](#lnglat)

Returns a [LngLat](#lnglat) representing geographical coordinates that correspond
to the specified pixel coordinates.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `point` | [`PointLike`](#pointlike) | The pixel coordinates to unproject. |

##### Returns

[`LngLat`](#lnglat)

The [LngLat](#lnglat) corresponding to `point`.

##### Example

```ts
map.on('click', (e) => {
  // When the map is clicked, get the geographic coordinate.
  let coordinate = map.unproject(e.point);
});
```

***

#### updateImage()

> **updateImage**(`id`: `string`, `image`: `HTMLImageElement` \| `ImageBitmap` \| `ImageData` \| [`StyleImageInterface`](#styleimageinterface) \| \{ `data`: `Uint8Array`\<`ArrayBufferLike`\> \| `Uint8ClampedArray`\<`ArrayBufferLike`\>; `height`: `number`; `width`: `number`; \}): `this`

Update an existing image in a style. This image can be displayed on the map like any other icon in the style's
sprite using the image's ID with
[`icon-image`](https://maplibre.org/maplibre-style-spec/layers/#layout-symbol-icon-image),
[`background-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-background-background-pattern),
[`fill-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-fill-fill-pattern),
or [`line-pattern`](https://maplibre.org/maplibre-style-spec/layers/#paint-line-line-pattern).

An ErrorEvent will be fired if the image parameter is invalid.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The ID of the image. |
| `image` | `HTMLImageElement` \| `ImageBitmap` \| `ImageData` \| [`StyleImageInterface`](#styleimageinterface) \| \{ `data`: `Uint8Array`\<`ArrayBufferLike`\> \| `Uint8ClampedArray`\<`ArrayBufferLike`\>; `height`: `number`; `width`: `number`; \} | The image as an `HTMLImageElement`, `ImageData`, `ImageBitmap` or object with `width`, `height`, and `data` properties with the same format as `ImageData`. |

##### Returns

`this`

##### Example

```ts
// If an image with the ID 'cat' already exists in the style's sprite,
// replace that image with a new image, 'other-cat-icon.png'.
if (map.hasImage('cat')) map.updateImage('cat', './other-cat-icon.png');
```

***

#### zoomIn()

> **zoomIn**(`options?`: [`AnimationOptions`](#animationoptions), `eventData?`: `any`): `this`

Incrementally increases the map's zoom level by 1, first snapping to the nearest `zoomSnap` increment.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AnimationOptions`](#animationoptions) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

Zoom the map in one level with a custom animation duration
```ts
map.zoomIn({duration: 1000});
```

***

#### zoomOut()

> **zoomOut**(`options?`: [`AnimationOptions`](#animationoptions), `eventData?`: `any`): `this`

Decreases the map's zoom level by 1, first snapping to the nearest `zoomSnap` increment.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AnimationOptions`](#animationoptions) | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

Zoom the map out one level with a custom animation offset
```ts
map.zoomOut({offset: [80, 60]});
```

***

#### zoomTo()

> **zoomTo**(`zoom`: `number`, `options?`: [`EaseToOptions`](#easetooptions) \| `null`, `eventData?`: `any`): `this`

Zooms the map to the specified zoom level, with an animated transition.

Triggers the following events: `movestart`, `move`, `moveend`, `zoomstart`, `zoom`, and `zoomend`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zoom` | `number` | The zoom level to transition to. |
| `options?` | [`EaseToOptions`](#easetooptions) \| `null` | Options object |
| `eventData?` | `any` | Additional properties to be added to event objects of events triggered by this method. |

##### Returns

`this`

##### Example

```ts
// Zoom to the zoom level 5 without an animated transition
map.zoomTo(5);
// Zoom to the zoom level 8 with an animated transition
map.zoomTo(8, {
  duration: 2000,
  offset: [100, 50]
});
```

### Properties

#### boxZoom

> **boxZoom**: [`BoxZoomHandler`](#boxzoomhandler)

The map's [BoxZoomHandler](#boxzoomhandler), which implements zooming using a drag gesture with the Shift key pressed.
Find more details and examples using `boxZoom` in the [BoxZoomHandler](#boxzoomhandler) section.

***

#### cancelPendingTileRequestsWhileZooming

> **cancelPendingTileRequestsWhileZooming**: `boolean`

The map's property which determines whether to cancel, or retain, tiles from the current viewport which are still loading but which belong to a farther (smaller) zoom level than the current one.
* If `true`, when zooming in, tiles which didn't manage to load for previous zoom levels will become canceled. This might save some computing resources for slower devices, but the map details might appear more abruptly at the end of the zoom.
* If `false`, when zooming in, the previous zoom level(s) tiles will progressively appear, giving a smoother map details experience. However, more tiles will be rendered in a short period of time.

##### Default Value

```ts
true
```

***

#### cooperativeGestures

> **cooperativeGestures**: [`CooperativeGesturesHandler`](#cooperativegestureshandler)

The map's [CooperativeGesturesHandler](#cooperativegestureshandler), which allows the user to see cooperative gesture info when user tries to zoom in/out.
Find more details and examples using `cooperativeGestures` in the [CooperativeGesturesHandler](#cooperativegestureshandler) section.

***

#### doubleClickZoom

> **doubleClickZoom**: [`DoubleClickZoomHandler`](#doubleclickzoomhandler)

The map's [DoubleClickZoomHandler](#doubleclickzoomhandler), which allows the user to zoom by double clicking.
Find more details and examples using `doubleClickZoom` in the [DoubleClickZoomHandler](#doubleclickzoomhandler) section.

***

#### dragPan

> **dragPan**: [`DragPanHandler`](#dragpanhandler)

The map's [DragPanHandler](#dragpanhandler), which implements dragging the map with a mouse or touch gesture.
Find more details and examples using `dragPan` in the [DragPanHandler](#dragpanhandler) section.

***

#### dragRotate

> **dragRotate**: [`DragRotateHandler`](#dragrotatehandler)

The map's [DragRotateHandler](#dragrotatehandler), which implements rotating the map while dragging with the right
mouse button or with the Control key pressed. Find more details and examples using `dragRotate`
in the [DragRotateHandler](#dragrotatehandler) section.

***

#### keyboard

> **keyboard**: [`KeyboardHandler`](#keyboardhandler)

The map's [KeyboardHandler](#keyboardhandler), which allows the user to zoom, rotate, and pan the map using keyboard
shortcuts. Find more details and examples using `keyboard` in the [KeyboardHandler](#keyboardhandler) section.

***

#### scrollZoom

> **scrollZoom**: [`ScrollZoomHandler`](#scrollzoomhandler)

The map's [ScrollZoomHandler](#scrollzoomhandler), which implements zooming in and out with a scroll wheel or trackpad.
Find more details and examples using `scrollZoom` in the [ScrollZoomHandler](#scrollzoomhandler) section.

***

#### touchPitch

> **touchPitch**: [`TwoFingersTouchPitchHandler`](#twofingerstouchpitchhandler)

The map's [TwoFingersTouchPitchHandler](#twofingerstouchpitchhandler), which allows the user to pitch the map with touch gestures.
Find more details and examples using `touchPitch` in the [TwoFingersTouchPitchHandler](#twofingerstouchpitchhandler) section.

***

#### touchZoomRotate

> **touchZoomRotate**: [`TwoFingersTouchZoomRotateHandler`](#twofingerstouchzoomrotatehandler)

The map's [TwoFingersTouchZoomRotateHandler](#twofingerstouchzoomrotatehandler), which allows the user to zoom or rotate the map with touch gestures.
Find more details and examples using `touchZoomRotate` in the [TwoFingersTouchZoomRotateHandler](#twofingerstouchzoomrotatehandler) section.

***

#### transformCameraUpdate

> **transformCameraUpdate**: [`CameraUpdateTransformFunction`](#cameraupdatetransformfunction) \| `null`

A callback used to defer camera updates or apply arbitrary constraints.
If specified, this Camera instance can be used as a stateless component in React etc.

***

#### transformConstrain

> **transformConstrain**: [`TransformConstrainFunction`](#transformconstrainfunction) \| `null`

The map transform's callback that overrides the default constrain function.

##### Default Value

```ts
null
```

#### Constructor

> **new Map**(`options?`: [`MapOptions`](#mapoptions)): `Map`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`MapOptions`](#mapoptions) | The [MapOptions](#mapoptions) object. |

##### Returns

`Map`

## MapOptions

> **MapOptions** = `Omit`\<`maplibreMapOptions`, `"container"` \| `"attributionControl"`\> & `object`

The [Map](#map) options object.

### Type Declaration

#### apiKey? <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> `optional` **apiKey?**: `string`

Maptoolkit API key.

#### attributionControl? <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> `optional` **attributionControl?**: `false` \| [`AttributionControlOptions`](#attributioncontroloptions)

[AttributionControlOptions](#attributioncontroloptions) for the map's default [AttributionControl](#attributioncontrol). Pass `false` to disable.

##### Default Value

See [AttributionControlOptions](#attributioncontroloptions).

#### container? <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> `optional` **container?**: `HTMLElement` \| `string`

The HTML element in which the map will be rendered, or the element's string `id`. The specified element must have no children.
Alternatively the container can be set using the [Map.setContainer](#setcontainer) method after initialization.

#### locale? <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> `optional` **locale?**: [`LocaleSpecification`](#localespecification) \| `string`

A locale string that specifies the language for string translations. Currently supported locales are `en` and `de`.
Alternatively, it can be an object mapping string IDs to translations, allowing you to override or add to the default localization table.

##### Default Value

See [Config](#config)

#### logoControl? <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> `optional` **logoControl?**: `false` \| [`LogoControlOptions`](#logocontroloptions)

[LogoControlOptions](#logocontroloptions) for the map's default [LogoControl](#logocontrol). Pass `false` to disable.

##### Default Value

See [LogoControlOptions](#logocontroloptions).

## AttributionControl <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

Presents the map's attribution information and optionally its current scale.

#### Constructor

> **new AttributionControl**(`options?`: [`AttributionControlOptions`](#attributioncontroloptions)): `AttributionControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AttributionControlOptions`](#attributioncontroloptions) | Options for configuring the attribution control. |

##### Returns

`AttributionControl`

### Methods

#### getDefaultPosition()

> **getDefaultPosition**(): [`ControlPosition`](#controlposition)

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

##### Returns

[`ControlPosition`](#controlposition)

a control position, one of the values valid in addControl.

***

#### onAdd()

> **onAdd**(`map`: [`Map`](#map)): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](#map) | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

#### Constructor

> **new AttributionControl**(`options?`: [`AttributionControlOptions`](#attributioncontroloptions)): `AttributionControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`AttributionControlOptions`](#attributioncontroloptions) | Options for configuring the attribution control. |

##### Returns

`AttributionControl`

## CompassControl <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

Provides an interactable compass for the map's bearing.

Used by the [NavigationControl](#navigationcontrol) class.

#### Constructor

> **new CompassControl**(`options?`: [`CompassControlOptions`](#compasscontroloptions)): `CompassControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`CompassControlOptions`](#compasscontroloptions) | Options for configuring the compass control. |

##### Returns

`CompassControl`

### Methods

#### getDefaultPosition()

> **getDefaultPosition**(): `ControlPosition`

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

##### Returns

`ControlPosition`

a control position, one of the values valid in addControl.

***

#### onAdd()

> **onAdd**(`map`: [`Map`](#map)): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](#map) | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

#### Constructor

> **new CompassControl**(`options?`: [`CompassControlOptions`](#compasscontroloptions)): `CompassControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`CompassControlOptions`](#compasscontroloptions) | Options for configuring the compass control. |

##### Returns

`CompassControl`

## FullscreenControl

A `FullscreenControl` control contains a button for toggling the map in and out of fullscreen mode.
When [requestFullscreen](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen) is not supported, fullscreen is handled via CSS properties.
The map's `cooperativeGestures` option is temporarily disabled while the map
is in fullscreen mode, and is restored when the map exist fullscreen mode.

### Example

```ts
map.addControl(new FullscreenControl({container: document.querySelector('body')}));
```

### See

[View a fullscreen map](https://maplibre.org/maplibre-gl-js/docs/examples/view-a-fullscreen-map/)

**Event** `fullscreenstart` of type Event will be fired when fullscreen mode has started.

**Event** `fullscreenend` of type Event will be fired when fullscreen mode has ended.

#### Constructor

> **new FullscreenControl**(`options?`: [`FullscreenControlOptions`](#fullscreencontroloptions)): `FullscreenControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`FullscreenControlOptions`](#fullscreencontroloptions) | the control's options |

##### Returns

`FullscreenControl`

### Methods

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### onAdd()

> **onAdd**(`map`: `Map`): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `FullscreenControl`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Promise`\<`any`\> \| `FullscreenControl`

`this` or a promise if a listener is not provided

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

#### Constructor

> **new FullscreenControl**(`options?`: [`FullscreenControlOptions`](#fullscreencontroloptions)): `FullscreenControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`FullscreenControlOptions`](#fullscreencontroloptions) | the control's options |

##### Returns

`FullscreenControl`

## GeolocateControl

A `GeolocateControl` control provides a button that uses the browser's geolocation
API to locate the user on the map.

Not all browsers support geolocation,
and some users may disable the feature. Geolocation support for modern
browsers including Chrome requires sites to be served over HTTPS. If
geolocation support is not available, the `GeolocateControl` will show
as disabled.

The zoom level applied will depend on the accuracy of the geolocation provided by the device.

The `GeolocateControl` has two modes. If `trackUserLocation` is `false` (default) the control acts as a button, which when pressed will set the map's camera to target the user location. If the user moves, the map won't update. This is most suited for the desktop. If `trackUserLocation` is `true` the control acts as a toggle button that when active the user's location is actively monitored for changes. In this mode the `GeolocateControl` has three interaction states:
* active - the map's camera automatically updates as the user's location changes, keeping the location dot in the center. Initial state and upon clicking the `GeolocateControl` button.
* passive - the user's location dot automatically updates, but the map's camera does not. Occurs upon the user initiating a map movement.
* disabled - occurs if Geolocation is not available, disabled or denied.

These interaction states can't be controlled programmatically, rather they are set based on user interactions.

### State Diagram
![GeolocateControl state diagram](https://github.com/maplibre/maplibre-gl-js/assets/3269297/78e720e5-d781-4da8-9803-a7a0e6aaaa9f)

### Examples

```ts
map.addControl(new GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));
```

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when a trackuserlocationend event occurs.
geolocate.on('trackuserlocationend', () => {
  console.log('A trackuserlocationend event has occurred.')
});
```

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when a trackuserlocationstart event occurs.
geolocate.on('trackuserlocationstart', () => {
  console.log('A trackuserlocationstart event has occurred.')
});
```

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when an userlocationlostfocus event occurs.
geolocate.on('userlocationlostfocus', function() {
  console.log('An userlocationlostfocus event has occurred.')
});
```

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when an userlocationfocus event occurs.
geolocate.on('userlocationfocus', function() {
  console.log('An userlocationfocus event has occurred.')
});
```

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when a geolocate event occurs.
geolocate.on('geolocate', () => {
  console.log('A geolocate event has occurred.')
});
```

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when an error event occurs.
geolocate.on('error', () => {
  console.log('An error event has occurred.')
});
```

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
// Set an event listener that fires
// when an outofmaxbounds event occurs.
geolocate.on('outofmaxbounds', () => {
  console.log('An outofmaxbounds event has occurred.')
});
```

### See

[Locate the user](https://maplibre.org/maplibre-gl-js/docs/examples/locate-the-user/)

**Event** `trackuserlocationend` of type Event will be fired when the `GeolocateControl` changes to the background state, which happens when a user changes the camera during an active position lock. This only applies when `trackUserLocation` is `true`. In the background state, the dot on the map will update with location updates but the camera will not.

**Event** `trackuserlocationstart` of type Event will be fired when the `GeolocateControl` changes to the active lock state, which happens either upon first obtaining a successful Geolocation API position for the user (a `geolocate` event will follow), or the user clicks the geolocate button when in the background state which uses the last known position to recenter the map and enter active lock state (no `geolocate` event will follow unless the users's location changes).

**Event** `userlocationlostfocus` of type Event will be fired when the `GeolocateControl` changes to the background state, which happens when a user changes the camera during an active position lock. This only applies when `trackUserLocation` is `true`. In the background state, the dot on the map will update with location updates but the camera will not.

**Event** `userlocationfocus` of type Event will be fired when the `GeolocateControl` changes to the active lock state, which happens upon the user clicks the geolocate button when in the background state which uses the last known position to recenter the map and enter active lock state.

**Event** `geolocate` of type Event will be fired on each Geolocation API position update which returned as success.
`data` - The returned [Position](https://developer.mozilla.org/en-US/docs/Web/API/Position) object from the callback in [Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) or [Geolocation.watchPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition).

**Event** `error` of type Event will be fired on each Geolocation API position update which returned as an error.
`data` - The returned [PositionError](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) object from the callback in [Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) or [Geolocation.watchPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition).

**Event** `outofmaxbounds` of type Event will be fired on each Geolocation API position update which returned as success but user position is out of map `maxBounds`.
`data` - The returned [Position](https://developer.mozilla.org/en-US/docs/Web/API/Position) object from the callback in [Geolocation.getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) or [Geolocation.watchPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition).

#### Constructor

> **new GeolocateControl**(`options`: [`GeolocateControlOptions`](#geolocatecontroloptions)): `GeolocateControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`GeolocateControlOptions`](#geolocatecontroloptions) | the control's options |

##### Returns

`GeolocateControl`

### Methods

#### \_isOutOfMapMaxBounds()

> **\_isOutOfMapMaxBounds**(`position`: `GeolocationPosition`): `boolean`

Check if the Geolocation API Position is outside the map's `maxBounds`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | `GeolocationPosition` | the Geolocation API Position |

##### Returns

`boolean`

`true` if position is outside the map's `maxBounds`, otherwise returns `false`.

***

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### onAdd()

> **onAdd**(`map`: `Map`): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `GeolocateControl`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Promise`\<`any`\> \| `GeolocateControl`

`this` or a promise if a listener is not provided

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

***

#### trigger()

> **trigger**(): `boolean`

Programmatically request and move the map to the user's location.

##### Returns

`boolean`

`false` if called before control was added to a map, otherwise returns `true`.

##### Example

```ts
// Initialize the geolocate control.
let geolocate = new GeolocateControl({
 positionOptions: {
   enableHighAccuracy: true
 },
 trackUserLocation: true
});
// Add the control to the map.
map.addControl(geolocate);
map.on('load', () => {
  geolocate.trigger();
});
```

### Properties

#### \_onSuccess

> **\_onSuccess**: (`position`: `GeolocationPosition`) => `void`

When the Geolocation API returns a new location, update the `GeolocateControl`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | `GeolocationPosition` | the Geolocation API Position |

##### Returns

`void`

***

#### \_updateCamera

> **\_updateCamera**: (`position`: `GeolocationPosition`) => `void`

Update the camera location to center on the current position

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | `GeolocationPosition` | the Geolocation API Position |

##### Returns

`void`

***

#### \_updateMarker

> **\_updateMarker**: (`position?`: `GeolocationPosition` \| `null`) => `void`

Update the user location dot Marker to the current position

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position?` | `GeolocationPosition` \| `null` | the Geolocation API Position |

##### Returns

`void`

#### Constructor

> **new GeolocateControl**(`options`: [`GeolocateControlOptions`](#geolocatecontroloptions)): `GeolocateControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`GeolocateControlOptions`](#geolocatecontroloptions) | the control's options |

##### Returns

`GeolocateControl`

## GlobeControl

A `GlobeControl` control contains a button for toggling the map projection between "mercator" and "globe".

### Example

```ts
let map = new Map()
    .addControl(new GlobeControl());
```

### See

 - [Display a globe with a fill extrusion layer](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-globe-with-a-fill-extrusion-layer/)
 - [Sky, Fog, Terrain](https://maplibre.org/maplibre-gl-js/docs/examples/sky-fog-terrain/)

### Methods

#### onAdd()

> **onAdd**(`map`: `Map`): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

## IsochroneControl <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

Provides an draggable isochrone control.

Used by the [NavigationControl](#navigationcontrol) class.

#### Constructor

> **new IsochroneControl**(`options?`: [`IsochroneControlOptions`](#isochronecontroloptions)): `IsochroneControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`IsochroneControlOptions`](#isochronecontroloptions) | Options for configuring the isochrone control. |

##### Returns

`IsochroneControl`

### Methods

#### getDefaultPosition()

> **getDefaultPosition**(): `ControlPosition`

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

##### Returns

`ControlPosition`

a control position, one of the values valid in addControl.

***

#### onAdd()

> **onAdd**(`map`: [`Map`](#map)): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](#map) | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

#### Constructor

> **new IsochroneControl**(`options?`: [`IsochroneControlOptions`](#isochronecontroloptions)): `IsochroneControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`IsochroneControlOptions`](#isochronecontroloptions) | Options for configuring the isochrone control. |

##### Returns

`IsochroneControl`

## LogoControl <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

Displays the Maptoolkit watermark.

#### Constructor

> **new LogoControl**(`options?`: [`LogoControlOptions`](#logocontroloptions)): `LogoControl`

Creates an instance of LogoControl.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`LogoControlOptions`](#logocontroloptions) | Options for configuring the compass control. |

##### Returns

`LogoControl`

### Methods

#### getDefaultPosition()

> **getDefaultPosition**(): `ControlPosition`

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

##### Returns

`ControlPosition`

a control position, one of the values valid in addControl.

***

#### onAdd()

> **onAdd**(`map`: [`Map`](#map)): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](#map) | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

#### Constructor

> **new LogoControl**(`options?`: [`LogoControlOptions`](#logocontroloptions)): `LogoControl`

Creates an instance of LogoControl.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`LogoControlOptions`](#logocontroloptions) | Options for configuring the compass control. |

##### Returns

`LogoControl`

## NavigationControl <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

Composite control combining navigation, terrain, pitch, and compass controls.

### Methods

#### getDefaultPosition()

> **getDefaultPosition**(): `ControlPosition`

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

##### Returns

`ControlPosition`

a control position, one of the values valid in addControl.

***

#### onAdd()

> **onAdd**(`map`: [`Map`](#map)): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](#map) | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

## PitchControl <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

Provides an interactable slider for the map's pitch.

Used by the [NavigationControl](#navigationcontrol) class.

#### Constructor

> **new PitchControl**(`options?`: [`PitchControlOptions`](#pitchcontroloptions)): `PitchControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`PitchControlOptions`](#pitchcontroloptions) | Options for configuring the pitch control. |

##### Returns

`PitchControl`

### Methods

#### getDefaultPosition()

> **getDefaultPosition**(): `ControlPosition`

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

##### Returns

`ControlPosition`

a control position, one of the values valid in addControl.

***

#### onAdd()

> **onAdd**(`map`: [`Map`](#map)): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](#map) | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

#### Constructor

> **new PitchControl**(`options?`: [`PitchControlOptions`](#pitchcontroloptions)): `PitchControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`PitchControlOptions`](#pitchcontroloptions) | Options for configuring the pitch control. |

##### Returns

`PitchControl`

## ScaleControl

A `ScaleControl` control displays the ratio of a distance on the map to the corresponding distance on the ground.

### Example

```ts
let scale = new ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
});
map.addControl(scale);

scale.setUnit('metric');
```

#### Constructor

> **new ScaleControl**(`options?`: [`ScaleControlOptions`](#scalecontroloptions)): `ScaleControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`ScaleControlOptions`](#scalecontroloptions) | the control's options |

##### Returns

`ScaleControl`

### Methods

#### getDefaultPosition()

> **getDefaultPosition**(): `ControlPosition`

Optionally provide a default position for this control. If this method
is implemented and [Map.addControl](#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

##### Returns

`ControlPosition`

a control position, one of the values valid in addControl.

***

#### onAdd()

> **onAdd**(`map`: `Map`): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

### Properties

#### setUnit

> **setUnit**: (`unit`: `Unit`) => `void`

Set the scale's unit of the distance

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `unit` | `Unit` | Unit of the distance (`'imperial'`, `'metric'` or `'nautical'`). |

##### Returns

`void`

#### Constructor

> **new ScaleControl**(`options?`: [`ScaleControlOptions`](#scalecontroloptions)): `ScaleControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`ScaleControlOptions`](#scalecontroloptions) | the control's options |

##### Returns

`ScaleControl`

## StyleControl <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

Provides a style switcher control for the map.

### Methods

#### getDefaultPosition()

> **getDefaultPosition**(): `ControlPosition`

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

##### Returns

`ControlPosition`

a control position, one of the values valid in addControl.

***

#### onAdd()

> **onAdd**(`map`: [`Map`](#map)): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](#map) | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

## TerrainControl <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

Provides a button to toggle the map's terrain.

Used by the [NavigationControl](#navigationcontrol) class.

#### Constructor

> **new TerrainControl**(`options?`: [`TerrainControlOptions`](#terraincontroloptions)): `TerrainControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`TerrainControlOptions`](#terraincontroloptions) | Options for configuring the terrain control. |

##### Returns

`TerrainControl`

### Methods

#### getDefaultPosition()

> **getDefaultPosition**(): `ControlPosition`

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

##### Returns

`ControlPosition`

a control position, one of the values valid in addControl.

***

#### onAdd()

> **onAdd**(`map`: [`Map`](#map)): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](#map) | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### onRemove()

> **onRemove**(): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Returns

`void`

#### Constructor

> **new TerrainControl**(`options?`: [`TerrainControlOptions`](#terraincontroloptions)): `TerrainControl`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`TerrainControlOptions`](#terraincontroloptions) | Options for configuring the terrain control. |

##### Returns

`TerrainControl`

## IControl

Interface for interactive controls added to the map. This is a
specification for implementers to model: it is not
an exported method or class.

Controls must implement `onAdd` and `onRemove`, and must own an
element, which is often a `div` element. To use MapLibre GL JS's
default control styling, add the `maplibregl-ctrl` class to your control's
node.

### Example

```ts
class HelloWorldControl: IControl {
    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl';
        this._container.textContent = 'Hello, world';
        return this._container;
    }

    onRemove() {
        this._container.parentNode.removeChild(this._container);
        this._map = undefined;
    }
}
```

### Methods

#### onAdd()

> **onAdd**(`map`: [`Map`](#map)): `HTMLElement`

Register a control on the map and give it a chance to register event listeners
and resources. This method is called by [Map#addControl](#addcontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](#map) | the Map this control will be added to |

##### Returns

`HTMLElement`

The control's container element. This should
be created by the control and returned by onAdd without being attached
to the DOM: the map will insert the control's element into the DOM
as necessary.

***

#### onRemove()

> **onRemove**(`map`: [`Map`](#map)): `void`

Unregister a control on the map and give it a chance to detach event listeners
and resources. This method is called by [Map#removeControl](#removecontrol)
internally.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](#map) | the Map this control will be removed from |

##### Returns

`void`

### Properties

#### getDefaultPosition?

> `readonly` `optional` **getDefaultPosition?**: () => [`ControlPosition`](#controlposition)

Optionally provide a default position for this control. If this method
is implemented and [Map#addControl](#addcontrol) is called without the `position`
parameter, the value returned by getDefaultPosition will be used as the
control's position.

##### Returns

[`ControlPosition`](#controlposition)

a control position, one of the values valid in addControl.

## AttributionControlOptions <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **AttributionControlOptions** = `maplibreAttributionControlOptions` & `object`

Options for configuring the [AttributionControl](#attributioncontrol).

### Type Declaration

#### scale?

> `optional` **scale?**: `false` \| [`ScaleControlOptions`](#scalecontroloptions)

Options for configuring the [ScaleControl](#scalecontrol).
Set to `false` to disable.

##### Default Value

`{ maxWidth: 80, unit: "metric" }` for the maplibre.ScaleControlOptions

## CompassControlOptions <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **CompassControlOptions** = `object`

Options for configuring the [CompassControl](#compasscontrol).

## ControlPosition <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **ControlPosition** = `maplibreControlPosition` \| `"top-center"` \| `"bottom-center"`

A position defintion for the control to be placed.
When two or more controls are placed in the same location they are stacked.

## FullscreenControlOptions

> **FullscreenControlOptions** = `object`

The [FullscreenControl](#fullscreencontrol) options object

### Properties

#### container?

> `optional` **container?**: `HTMLElement`

`container` is the [compatible DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen#Compatible_elements) which should be made full screen. By default, the map container element will be made full screen.

***

#### pseudo?

> `optional` **pseudo?**: `boolean`

If `true`, the fullscreen control will always use pseudo fullscreen mode (CSS-based, expanding to browser viewport) instead of native fullscreen API.
This can be useful for faster transitions and to allow multiple maps to be "fullscreen" simultaneously in different browser windows.

##### Default Value

```ts
false
```

## GeolocateControlOptions

> **GeolocateControlOptions** = `object`

The [GeolocateControl](#geolocatecontrol) options object

### Properties

#### fitBoundsOptions?

> `optional` **fitBoundsOptions?**: [`FitBoundsOptions`](#fitboundsoptions)

A options object to use when the map is panned and zoomed to the user's location. The default is to use a `maxZoom` of 15 to limit how far the map will zoom in for very accurate locations.

***

#### positionOptions?

> `optional` **positionOptions?**: `PositionOptions`

A Geolocation API [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) object.

##### Default Value

`{enableHighAccuracy: false, timeout: 6000}`

***

#### showAccuracyCircle?

> `optional` **showAccuracyCircle?**: `boolean`

By default, if `showUserLocation` is `true`, a transparent circle will be drawn around the user location indicating the accuracy (95% confidence level) of the user's location. Set to `false` to disable. Always disabled when `showUserLocation` is `false`.

##### Default Value

```ts
true
```

***

#### showUserLocation?

> `optional` **showUserLocation?**: `boolean`

By default a dot will be shown on the map at the user's location. Set to `false` to disable.

##### Default Value

```ts
true
```

***

#### trackUserLocation?

> `optional` **trackUserLocation?**: `boolean`

If `true` the `GeolocateControl` becomes a toggle button and when active the map will receive updates to the user's location as it changes.

##### Default Value

```ts
false
```

## IsochroneControlOptions <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **IsochroneControlOptions** = `object`

Options for configuring the [IsochroneControl](#isochronecontrol).

### Properties

#### fitBounds?

> `optional` **fitBounds?**: `boolean` \| [`FitBoundsOptions`](#fitboundsoptions)

Whether the map bounds should fit the isochrone area. Alternatively accepts [FitBoundsOptions](#fitboundsoptions) object.

##### Default Value

`true`

***

#### range?

> `optional` **range?**: `number`

Time used for isochrone calculation. Value in minutes.

##### Default Value

`10` minutes

***

#### type?

> `optional` **type?**: [`IsochroneType`](#isochronetype)

Routing type used for isochrone request. Default value is `foot`.

##### Default Value

`10` minutes

## IsochroneType <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **IsochroneType** = `"foot"` \| `"bike"` \| `"car"`

The isochrone routing type.

## LogoControlOptions <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **LogoControlOptions** = `object`

Options for configuring the [LogoControl](#logocontrol).

## NavigationControlOptions <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **NavigationControlOptions** = `object`

Options for configuring the [NavigationControl](#navigationcontrol).

## PitchControlOptions <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **PitchControlOptions** = `object`

Options for configuring the [PitchControl](#pitchcontrol).

### Properties

#### autoHide?

> `optional` **autoHide?**: `boolean`

If set to `true`, the control will hide when the map's pitch is 0, with a delay of 400 ms.

##### Default Value

`false`

***

#### knobSize?

> `optional` **knobSize?**: `number`

The slider control's knob size in pixels.

##### Default Value

`16` pixels

***

#### sliderSize?

> `optional` **sliderSize?**: `number`

The slider control's vertical size in pixels.

##### Default Value

`52` pixels

## ScaleControlOptions

> **ScaleControlOptions** = `object`

The [ScaleControl](#scalecontrol) options object

### Properties

#### maxWidth?

> `optional` **maxWidth?**: `number`

The maximum length of the scale control in pixels.

##### Default Value

```ts
100
```

***

#### unit?

> `optional` **unit?**: `Unit`

Unit of the distance (`'imperial'`, `'metric'` or `'nautical'`).

##### Default Value

```ts
'metric'
```

## StyleControlOptions <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **StyleControlOptions** = `object`

Options for configuring the [StyleControl](#stylecontrol).

## StyleDefSpecification <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **StyleDefSpecification** = `object`

A style definition for use with the [StyleControl](#stylecontrol).

## TerrainControlOptions <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> **TerrainControlOptions** = `object`

Options for configuring the [TerrainControl](#terraincontrol).

### Properties

#### globe?

> `optional` **globe?**: `boolean`

Globe projection used on toggle.

##### Default Value

`false`

***

#### pitch?

> `optional` **pitch?**: `number`

Pitch value used on toggle.

##### Default Value

`60` degrees

## Marker

Creates a marker component

### Examples

```ts
let marker = new Marker()
  .setLngLat([30.5, 50.5])
  .addTo(map);
```

Set options
```ts
let marker = new Marker({
    color: "#FFFFFF",
    draggable: true
  }).setLngLat([30.5, 50.5])
  .addTo(map);
```

```css
.maplibregl-marker-covered {
    pointer-events: none;
    cursor: default;
}
```

### See

 - [Add a default marker](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-default-marker/)
 - [Add custom icons with Markers](https://maplibre.org/maplibre-gl-js/docs/examples/add-custom-icons-with-markers/)
 - [Create a draggable Marker](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-marker/)
 - [Animate a marker](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-marker/)
 - [Attach a popup to a marker instance](https://maplibre.org/maplibre-gl-js/docs/examples/attach-a-popup-to-a-marker-instance/)

**Event** `dragstart` of type Event will be fired when dragging starts.

**Event** `drag` of type Event will be fired while dragging.

**Event** `dragend` of type Event will be fired when the marker is finished being dragged.

**Event** `click` of type Event will be fired when the marker is clicked.

### CSS Classes

**CSS class** `maplibregl-marker-covered` is toggled on the marker element when the marker
is hidden behind 3D terrain or on the back of a globe.
Use this class to apply custom styles to covered markers.

#### Constructor

> **new Marker**(`options?`: [`MarkerOptions`](#markeroptions)): `Marker`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`MarkerOptions`](#markeroptions) | the options |

##### Returns

`Marker`

### Methods

#### addClassName()

> **addClassName**(`className`: `string`): `void`

Adds a CSS class to the marker element.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `className` | `string` | on-empty string with CSS class name to add to marker element |

##### Returns

`void`

##### Example

```
let marker = new Marker()
marker.addClassName('some-class')
```

***

#### addTo()

> **addTo**(`map`: `Map`): `this`

Attaches the `Marker` to a `Map` object.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | The MapLibre GL JS map to add the marker to. |

##### Returns

`this`

##### Example

```ts
let marker = new Marker()
  .setLngLat([30.5, 50.5])
  .addTo(map); // add the marker to the map
```

***

#### getElement()

> **getElement**(): `HTMLElement`

Returns the `Marker`'s HTML element.

##### Returns

`HTMLElement`

element

***

#### getLngLat()

> **getLngLat**(): [`LngLat`](#lnglat)

Get the marker's geographical location.

The longitude of the result may differ by a multiple of 360 degrees from the longitude previously
set by `setLngLat` because `Marker` wraps the anchor longitude across copies of the world to keep
the marker on screen.

##### Returns

[`LngLat`](#lnglat)

A [LngLat](#lnglat) describing the marker's location.

##### Example

```ts
// Store the marker's longitude and latitude coordinates in a variable
let lngLat = marker.getLngLat();
// Print the marker's longitude and latitude values in the console
console.log('Longitude: ' + lngLat.lng + ', Latitude: ' + lngLat.lat )
```

##### See

[Create a draggable Marker](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-marker/)

***

#### getOffset()

> **getOffset**(): [`Point`](#point-1)

Get the marker's offset.

##### Returns

[`Point`](#point-1)

The marker's screen coordinates in pixels.

***

#### getPitchAlignment()

> **getPitchAlignment**(): `Alignment`

Returns the current `pitchAlignment` property of the marker.

##### Returns

`Alignment`

The current pitch alignment of the marker in degrees.

***

#### getPopup()

> **getPopup**(): [`Popup`](#popup)

Returns the [Popup](#popup) instance that is bound to the Marker.

##### Returns

[`Popup`](#popup)

popup

##### Example

```ts
let marker = new Marker()
 .setLngLat([0, 0])
 .setPopup(new Popup().setHTML("<h1>Hello World!</h1>"))
 .addTo(map);

console.log(marker.getPopup()); // return the popup instance
```

***

#### getRotation()

> **getRotation**(): `number`

Returns the current rotation angle of the marker (in degrees).

##### Returns

`number`

The current rotation angle of the marker.

***

#### getRotationAlignment()

> **getRotationAlignment**(): `Alignment`

Returns the current `rotationAlignment` property of the marker.

##### Returns

`Alignment`

The current rotational alignment of the marker.

***

#### isDraggable()

> **isDraggable**(): `boolean`

Returns true if the marker can be dragged

##### Returns

`boolean`

True if the marker is draggable.

***

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `Marker`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Promise`\<`any`\> \| `Marker`

`this` or a promise if a listener is not provided

***

#### remove()

> **remove**(): `this`

Removes the marker from a map

##### Returns

`this`

##### Example

```ts
let marker = new Marker().addTo(map);
marker.remove();
```

***

#### removeClassName()

> **removeClassName**(`className`: `string`): `void`

Removes a CSS class from the marker element.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `className` | `string` | Non-empty string with CSS class name to remove from marker element |

##### Returns

`void`

##### Example

```ts
let marker = new Marker()
marker.removeClassName('some-class')
```

***

#### setDraggable()

> **setDraggable**(`shouldBeDraggable?`: `boolean`): `this`

Sets the `draggable` property and functionality of the marker

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shouldBeDraggable?` | `boolean` | Turns drag functionality on/off |

##### Returns

`this`

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

***

#### setLngLat()

> **setLngLat**(`lnglat`: [`LngLatLike`](#lnglatlike)): `this`

Set the marker's geographical position and move it.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lnglat` | [`LngLatLike`](#lnglatlike) | A [LngLat](#lnglat) describing where the marker should be located. |

##### Returns

`this`

##### Example

Create a new marker, set the longitude and latitude, and add it to the map
```ts
new Marker()
  .setLngLat([-65.017, -16.457])
  .addTo(map);
```

##### See

 - [Add custom icons with Markers](https://maplibre.org/maplibre-gl-js/docs/examples/add-custom-icons-with-markers/)
 - [Create a draggable Marker](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-marker/)

***

#### setOffset()

> **setOffset**(`offset`: [`PointLike`](#pointlike)): `this`

Sets the offset of the marker

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset` | [`PointLike`](#pointlike) | The offset in pixels as a [PointLike](#pointlike) object to apply relative to the element's center. Negatives indicate left and up. |

##### Returns

`this`

***

#### setOpacity()

> **setOpacity**(`opacity?`: `string` \| `number`, `opacityWhenCovered?`: `string` \| `number`): `this`

Sets the `opacity` and `opacityWhenCovered` properties of the marker.
When called without arguments, resets opacity and opacityWhenCovered to defaults

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opacity?` | `string` \| `number` | Sets the `opacity` property of the marker. |
| `opacityWhenCovered?` | `string` \| `number` | Sets the `opacityWhenCovered` property of the marker. |

##### Returns

`this`

***

#### setPitchAlignment()

> **setPitchAlignment**(`alignment?`: `Alignment`): `this`

Sets the `pitchAlignment` property of the marker.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `alignment?` | `Alignment` | Sets the `pitchAlignment` property of the marker. If alignment is 'auto', it will automatically match `rotationAlignment`. |

##### Returns

`this`

***

#### setPopup()

> **setPopup**(`popup?`: [`Popup`](#popup) \| `null`): `this`

Binds a [Popup](#popup) to the Marker.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `popup?` | [`Popup`](#popup) \| `null` | An instance of the [Popup](#popup) class. If undefined or null, any popup set on this Marker instance is unset. |

##### Returns

`this`

##### Example

```ts
let marker = new Marker()
 .setLngLat([0, 0])
 .setPopup(new Popup().setHTML("<h1>Hello World!</h1>")) // add popup
 .addTo(map);
```

##### See

[Attach a popup to a marker instance](https://maplibre.org/maplibre-gl-js/docs/examples/attach-a-popup-to-a-marker-instance/)

***

#### setRotation()

> **setRotation**(`rotation?`: `number`): `this`

Sets the `rotation` property of the marker.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rotation?` | `number` | The rotation angle of the marker (clockwise, in degrees), relative to its respective [Marker.setRotationAlignment](#setrotationalignment) setting. |

##### Returns

`this`

***

#### setRotationAlignment()

> **setRotationAlignment**(`alignment?`: `Alignment`): `this`

Sets the `rotationAlignment` property of the marker.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `alignment?` | `Alignment` | Sets the `rotationAlignment` property of the marker. defaults to 'auto' |

##### Returns

`this`

***

#### setSubpixelPositioning()

> **setSubpixelPositioning**(`value`: `boolean`): `this`

Set the option to allow subpixel positioning of the marker by passing a boolean

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `boolean` | when set to `true`, subpixel positioning is enabled for the marker. |

##### Returns

`this`

##### Example

```ts
let marker = new Marker()
marker.setSubpixelPositioning(true);
```

***

#### toggleClassName()

> **toggleClassName**(`className`: `string`): `boolean`

Add or remove the given CSS class on the marker element, depending on whether the element currently has that class.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `className` | `string` | Non-empty string with CSS class name to add/remove |

##### Returns

`boolean`

if the class was removed return false, if class was added, then return true

##### Example

```ts
let marker = new Marker()
marker.toggleClassName('toggleClass')
```

***

#### togglePopup()

> **togglePopup**(): `this`

Opens or closes the [Popup](#popup) instance that is bound to the Marker, depending on the current state of the [Popup](#popup).

##### Returns

`this`

##### Example

```ts
let marker = new Marker()
 .setLngLat([0, 0])
 .setPopup(new Popup().setHTML("<h1>Hello World!</h1>"))
 .addTo(map);

marker.togglePopup(); // toggle popup open or closed
```

#### Constructor

> **new Marker**(`options?`: [`MarkerOptions`](#markeroptions)): `Marker`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`MarkerOptions`](#markeroptions) | the options |

##### Returns

`Marker`

## Popup

A popup component.

### Examples

Create a popup
```ts
let popup = new Popup();
// Set an event listener that will fire
// any time the popup is opened
popup.on('open', () => {
  console.log('popup was opened');
});
```

Create a popup
```ts
let popup = new Popup();
// Set an event listener that will fire
// any time the popup is closed
popup.on('close', () => {
  console.log('popup was closed');
});
```

```ts
let markerHeight = 50, markerRadius = 10, linearOffset = 25;
let popupOffsets = {
 'top': [0, 0],
 'top-left': [0,0],
 'top-right': [0,0],
 'bottom': [0, -markerHeight],
 'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
 'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
 'left': [markerRadius, (markerHeight - markerRadius) * -1],
 'right': [-markerRadius, (markerHeight - markerRadius) * -1]
 };
let popup = new Popup({offset: popupOffsets, className: 'my-class'})
  .setLngLat(e.lngLat)
  .setHTML("<h1>Hello World!</h1>")
  .setMaxWidth("300px")
  .addTo(map);
```

### See

 - [Display a popup](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup/)
 - [Display a popup on hover](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/)
 - [Display a popup on click](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-click/)
 - [Attach a popup to a marker instance](https://maplibre.org/maplibre-gl-js/docs/examples/attach-a-popup-to-a-marker-instance/)
 - [Show polygon information on click](https://maplibre.org/maplibre-gl-js/docs/examples/show-polygon-information-on-click/)

**Event** `open` of type Event will be fired when the popup is opened manually or programmatically.

**Event** `close` of type Event will be fired when the popup is closed manually or programmatically.

#### Constructor

> **new Popup**(`options?`: [`PopupOptions`](#popupoptions)): `Popup`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`PopupOptions`](#popupoptions) | the options |

##### Returns

`Popup`

### Methods

#### addClassName()

> **addClassName**(`className`: `string`): `this`

Adds a CSS class to the popup container element.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `className` | `string` | Non-empty string with CSS class name to add to popup container |

##### Returns

`this`

##### Example

```ts
let popup = new Popup()
popup.addClassName('some-class')
```

***

#### addTo()

> **addTo**(`map`: `Map`): `this`

Adds the popup to a map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | The MapLibre GL JS map to add the popup to. |

##### Returns

`this`

##### Example

```ts
new Popup()
  .setLngLat([0, 0])
  .setHTML("<h1>Null Island</h1>")
  .addTo(map);
```

##### See

 - [Display a popup](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup/)
 - [Display a popup on hover](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/)
 - [Display a popup on click](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-click/)
 - [Show polygon information on click](https://maplibre.org/maplibre-gl-js/docs/examples/show-polygon-information-on-click/)

***

#### getElement()

> **getElement**(): `HTMLElement`

Returns the `Popup`'s HTML element.

##### Returns

`HTMLElement`

element

##### Example

Change the `Popup` element's font size
```ts
let popup = new Popup()
  .setLngLat([-96, 37.8])
  .setHTML("<p>Hello World!</p>")
  .addTo(map);
let popupElem = popup.getElement();
popupElem.style.fontSize = "25px";
```

***

#### getLngLat()

> **getLngLat**(): [`LngLat`](#lnglat)

Returns the geographical location of the popup's anchor.

The longitude of the result may differ by a multiple of 360 degrees from the longitude previously
set by `setLngLat` because `Popup` wraps the anchor longitude across copies of the world to keep
the popup on screen.

##### Returns

[`LngLat`](#lnglat)

The geographical location of the popup's anchor.

***

#### getMaxWidth()

> **getMaxWidth**(): `string`

Returns the popup's maximum width.

##### Returns

`string`

The maximum width of the popup.

***

#### isOpen()

> **isOpen**(): `boolean`

##### Returns

`boolean`

`true` if the popup is open, `false` if it is closed.

***

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `Popup`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Promise`\<`any`\> \| `Popup`

`this` or a promise if a listener is not provided

***

#### removeClassName()

> **removeClassName**(`className`: `string`): `this`

Removes a CSS class from the popup container element.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `className` | `string` | Non-empty string with CSS class name to remove from popup container |

##### Returns

`this`

##### Example

```ts
let popup = new Popup()
popup.removeClassName('some-class')
```

***

#### setDOMContent()

> **setDOMContent**(`htmlNode`: `Node`): `this`

Sets the popup's content to the element provided as a DOM node.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `htmlNode` | `Node` | A DOM node to be used as content for the popup. |

##### Returns

`this`

##### Example

Create an element with the popup content
```ts
let div = document.createElement('div');
div.innerHTML = 'Hello, world!';
let popup = new Popup()
  .setLngLat(e.lngLat)
  .setDOMContent(div)
  .addTo(map);
```

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

***

#### setHTML()

> **setHTML**(`html`: `string`): `this`

Sets the popup's content to the HTML provided as a string.

This method does not perform HTML filtering or sanitization, and must be
used only with trusted content. Consider [Popup.setText](#settext) if
the content is an untrusted text string.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `html` | `string` | A string representing HTML content for the popup. |

##### Returns

`this`

##### Example

```ts
let popup = new Popup()
  .setLngLat(e.lngLat)
  .setHTML("<h1>Hello World!</h1>")
  .addTo(map);
```

##### See

 - [Display a popup](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup/)
 - [Display a popup on hover](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/)
 - [Display a popup on click](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-click/)
 - [Attach a popup to a marker instance](https://maplibre.org/maplibre-gl-js/docs/examples/attach-a-popup-to-a-marker-instance/)

***

#### setLngLat()

> **setLngLat**(`lnglat`: [`LngLatLike`](#lnglatlike)): `this`

Sets the geographical location of the popup's anchor, and moves the popup to it. Replaces trackPointer() behavior.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lnglat` | [`LngLatLike`](#lnglatlike) | The geographical location to set as the popup's anchor. |

##### Returns

`this`

***

#### setMaxWidth()

> **setMaxWidth**(`maxWidth`: `string`): `this`

Sets the popup's maximum width. This is setting the CSS property `max-width`.
Available values can be found here: https://developer.mozilla.org/en-US/docs/Web/CSS/max-width

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxWidth` | `string` | A string representing the value for the maximum width. |

##### Returns

`this`

***

#### setOffset()

> **setOffset**(`offset?`: `Offset`): `this`

Sets the popup's offset.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offset?` | `Offset` | Sets the popup's offset. |

##### Returns

`this`

***

#### setPadding()

> **setPadding**(`padding?`: [`PaddingOptions`](#paddingoptions)): `void`

Sets the popup's padding constraints for positioning.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `padding?` | [`PaddingOptions`](#paddingoptions) | The padding to apply as a [PaddingOptions](#paddingoptions) object. |

##### Returns

`void`

##### Example

```ts
popup.setPadding({ top: 10, right: 20, bottom: 30, left: 40 });
```

***

#### setSubpixelPositioning()

> **setSubpixelPositioning**(`value`: `boolean`): `void`

Set the option to allow subpixel positioning of the popup by passing a boolean

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `boolean` | When boolean is true, subpixel positioning is enabled for the popup. |

##### Returns

`void`

##### Example

```ts
let popup = new Popup()
popup.setSubpixelPositioning(true);
```

***

#### setText()

> **setText**(`text`: `string`): `this`

Sets the popup's content to a string of text.

This function creates a [Text](https://developer.mozilla.org/en-US/docs/Web/API/Text) node in the DOM,
so it cannot insert raw HTML. Use this method for security against XSS
if the popup content is user-provided.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | Textual content for the popup. |

##### Returns

`this`

##### Example

```ts
let popup = new Popup()
  .setLngLat(e.lngLat)
  .setText('Hello, world!')
  .addTo(map);
```

***

#### toggleClassName()

> **toggleClassName**(`className`: `string`): `boolean` \| `undefined`

Add or remove the given CSS class on the popup container, depending on whether the container currently has that class.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `className` | `string` | Non-empty string with CSS class name to add/remove |

##### Returns

`boolean` \| `undefined`

if the class was removed return false, if class was added, then return true, undefined if there is no container

##### Example

```ts
let popup = new Popup()
popup.toggleClassName('toggleClass')
```

***

#### trackPointer()

> **trackPointer**(): `this`

Tracks the popup anchor to the cursor position on screens with a pointer device (it will be hidden on touchscreens). Replaces the `setLngLat` behavior.
For most use cases, set `closeOnClick` and `closeButton` to `false`.

##### Returns

`this`

##### Example

```ts
let popup = new Popup({ closeOnClick: false, closeButton: false })
  .setHTML("<h1>Hello World!</h1>")
  .trackPointer()
  .addTo(map);
```

### Properties

#### \_updateOpacity

> **\_updateOpacity**: () => `void`

Add opacity to popup if in globe projection and location is behind view

##### Returns

`void`

***

#### remove

> **remove**: () => `this`

Removes the popup from the map it has been added to.

##### Returns

`this`

##### Example

```ts
let popup = new Popup().addTo(map);
popup.remove();
```

#### Constructor

> **new Popup**(`options?`: [`PopupOptions`](#popupoptions)): `Popup`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`PopupOptions`](#popupoptions) | the options |

##### Returns

`Popup`

## MarkerOptions

> **MarkerOptions** = `object`

The [Marker](#marker) options object

### Properties

#### anchor?

> `optional` **anchor?**: `PositionAnchor`

A string indicating the part of the Marker that should be positioned closest to the coordinate set via [Marker.setLngLat](#setlnglat).
Options are `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-left'`, `'top-right'`, `'bottom-left'`, and `'bottom-right'`.

##### Default Value

```ts
'center'
```

***

#### className?

> `optional` **className?**: `string`

Space-separated CSS class names to add to marker element.

***

#### clickTolerance?

> `optional` **clickTolerance?**: `number`

The max number of pixels a user can shift the mouse pointer during a click on the marker for it to be considered a valid click (as opposed to a marker drag). The default is to inherit map's clickTolerance.

##### Default Value

```ts
0
```

***

#### color?

> `optional` **color?**: `string`

The color to use for the default marker if options.element is not provided. The default is light blue.

##### Default Value

```ts
'#3FB1CE'
```

***

#### draggable?

> `optional` **draggable?**: `boolean`

A boolean indicating whether or not a marker is able to be dragged to a new position on the map.

##### Default Value

```ts
false
```

***

#### element?

> `optional` **element?**: `HTMLElement`

DOM element to use as a marker. The default is a light blue, droplet-shaped SVG marker.

***

#### offset?

> `optional` **offset?**: [`PointLike`](#pointlike)

The offset in pixels as a [PointLike](#pointlike) object to apply relative to the element's center. Negatives indicate left and up.

***

#### opacity?

> `optional` **opacity?**: `string` \| `number`

Marker's opacity when it's in clear view (not behind 3d terrain)
Accepts any valid CSS opacity value as a number or string.

##### Default Value

```ts
1
```

***

#### opacityWhenCovered?

> `optional` **opacityWhenCovered?**: `string` \| `number`

Marker's opacity when it's behind 3d terrain
Accepts any valid CSS opacity value as a number or string.

##### Default Value

```ts
0.2
```

***

#### pitchAlignment?

> `optional` **pitchAlignment?**: `Alignment`

`map` aligns the `Marker` to the plane of the map. `viewport` aligns the `Marker` to the plane of the viewport. `auto` automatically matches the value of `rotationAlignment`.

##### Default Value

```ts
'auto'
```

***

#### rotation?

> `optional` **rotation?**: `number`

The rotation angle of the marker in degrees, relative to its respective `rotationAlignment` setting. A positive value will rotate the marker clockwise.

##### Default Value

```ts
0
```

***

#### rotationAlignment?

> `optional` **rotationAlignment?**: `Alignment`

`map` aligns the `Marker`'s rotation relative to the map, maintaining a bearing as the map rotates. `viewport` aligns the `Marker`'s rotation relative to the viewport, agnostic to map rotations. `auto` is equivalent to `viewport`.

##### Default Value

```ts
'auto'
```

***

#### scale?

> `optional` **scale?**: `number`

The scale to use for the default marker if options.element is not provided. The default scale corresponds to a height of `41px` and a width of `27px`.

##### Default Value

```ts
1
```

***

#### subpixelPositioning?

> `optional` **subpixelPositioning?**: `boolean`

If `true`, rounding is disabled for placement of the marker, allowing for
subpixel positioning and smoother movement when the marker is translated.

##### Default Value

```ts
false
```

## PopupOptions

> **PopupOptions** = `object`

The [Popup](#popup) options object

### Properties

#### anchor?

> `optional` **anchor?**: `PositionAnchor`

A string indicating the part of the Popup that should
be positioned closest to the coordinate set via [Popup.setLngLat](#setlnglat).
Options are `'center'`, `'top'`, `'bottom'`, `'left'`, `'right'`, `'top-left'`,
`'top-right'`, `'bottom-left'`, and `'bottom-right'`. If unset the anchor will be
dynamically set to ensure the popup falls within the map container with a preference
for `'bottom'`.

***

#### className?

> `optional` **className?**: `string`

Space-separated CSS class names to add to popup container

***

#### closeButton?

> `optional` **closeButton?**: `boolean`

If `true`, a close button will appear in the top right corner of the popup.

##### Default Value

```ts
true
```

***

#### closeOnClick?

> `optional` **closeOnClick?**: `boolean`

If `true`, the popup will closed when the map is clicked.

##### Default Value

```ts
true
```

***

#### closeOnMove?

> `optional` **closeOnMove?**: `boolean`

If `true`, the popup will closed when the map moves.

##### Default Value

```ts
false
```

***

#### focusAfterOpen?

> `optional` **focusAfterOpen?**: `boolean`

If `true`, the popup will try to focus the first focusable element inside the popup.

##### Default Value

```ts
true
```

***

#### locationOccludedOpacity?

> `optional` **locationOccludedOpacity?**: `number` \| `string`

Optional opacity when the location is behind the globe.
Note that if a number is provided, it will be converted to a string.

##### Default Value

```ts
undefined
```

***

#### maxWidth?

> `optional` **maxWidth?**: `string`

A string that sets the CSS property of the popup's maximum width, eg `'300px'`.
To ensure the popup resizes to fit its content, set this property to `'none'`.
Available values can be found here: https://developer.mozilla.org/en-US/docs/Web/CSS/max-width

##### Default Value

```ts
'240px'
```

***

#### offset?

> `optional` **offset?**: `Offset`

A pixel offset applied to the popup's location

***

#### padding?

> `optional` **padding?**: [`PaddingOptions`](#paddingoptions)

A pixel padding applied to the popup's positioning constraints.
The popup will be positioned to avoid being placed within this padding area
from the edges of the map container.

##### Default Value

```ts
undefined
```

***

#### subpixelPositioning?

> `optional` **subpixelPositioning?**: `boolean`

If `true`, rounding is disabled for placement of the popup, allowing for
subpixel positioning and smoother movement when the popup is translated.

##### Default Value

```ts
false
```

## CanvasSource

A data source containing the contents of an HTML canvas. See CanvasSourceSpecification for detailed documentation of options.

### Example

```ts
// add to map
map.addSource('some id', {
   type: 'canvas',
   canvas: 'idOfMyHTMLCanvas',
   animate: true,
   coordinates: [
       [-76.54, 39.18],
       [-76.52, 39.18],
       [-76.52, 39.17],
       [-76.54, 39.17]
   ]
});

// update
let mySource = map.getSource('some id');
mySource.setCoordinates([
    [-76.54335737228394, 39.18579907229748],
    [-76.52803659439087, 39.1838364847587],
    [-76.5295386314392, 39.17683392507606],
    [-76.54520273208618, 39.17876344106642]
]);

map.removeSource('some id');  // remove
```

### Methods

#### getCanvas()

> **getCanvas**(): `HTMLCanvasElement`

Returns the HTML `canvas` element.

##### Returns

`HTMLCanvasElement`

The HTML `canvas` element.

***

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### loaded()

> **loaded**(): `boolean`

True if the source is loaded, false otherwise.

##### Returns

`boolean`

***

#### loadTile()

> **loadTile**(`tile`: `Tile`): `Promise`\<`void`\>

This method does the heavy lifting of loading a tile.
In most cases it will defer the work to the relevant worker source.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to load |

##### Returns

`Promise`\<`void`\>

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `CanvasSource`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Promise`\<`any`\> \| `CanvasSource`

`this` or a promise if a listener is not provided

***

#### setCoordinates()

> **setCoordinates**(`coordinates`: `Coordinates`): `this`

Sets the image's coordinates and re-renders the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `coordinates` | `Coordinates` | Four geographical coordinates, represented as arrays of longitude and latitude numbers, which define the corners of the image. The coordinates start at the top left corner of the image and proceed in clockwise order. They do not have to represent a rectangle. |

##### Returns

`this`

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

***

#### updateImage()

> **updateImage**(`options`: [`UpdateImageOptions`](#updateimageoptions)): `this`

Updates the image URL and, optionally, the coordinates. To avoid having the image flash after changing,
set the `raster-fade-duration` paint property on the raster layer to 0.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`UpdateImageOptions`](#updateimageoptions) | The options object. |

##### Returns

`this`

### Properties

#### id

> **id**: `string`

The id for the source. Must not be used by any existing source.

***

#### maxzoom

> **maxzoom**: `number`

The maximum zoom level for the source.

***

#### minzoom

> **minzoom**: `number`

The minimum zoom level for the source.

***

#### pause

> **pause**: () => `void`

Disables animation. The map will display a static copy of the canvas image.

##### Returns

`void`

***

#### play

> **play**: () => `void`

Enables animation. The image will be copied from the canvas to the map on each frame.

##### Returns

`void`

***

#### terrainTileRanges

> **terrainTileRanges**: `object`

This object is used to store the range of terrain tiles that overlap with this tile.
It is relevant for image tiles, as the image exceeds single tile boundaries.

##### Index Signature

\[`zoom`: `string`\]: `CanonicalTileRange`

***

#### tileSize

> **tileSize**: `number`

The tile size for the source.

## GeoJSONSource

A source containing GeoJSON.
(See the [Style Specification](https://maplibre.org/maplibre-style-spec/#sources-geojson) for detailed documentation of options.)

### Examples

```ts
map.addSource('some id', {
    type: 'geojson',
    data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
});
```

```ts
map.addSource('some id', {
   type: 'geojson',
   data: {
       "type": "FeatureCollection",
       "features": [{
           "type": "Feature",
           "properties": {},
           "geometry": {
               "type": "Point",
               "coordinates": [
                   -76.53063297271729,
                   39.18174077994108
               ]
           }
       }]
   }
});
```

```ts
map.getSource('some id').setData({
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "properties": { "name": "Null Island" },
      "geometry": {
          "type": "Point",
          "coordinates": [ 0, 0 ]
      }
  }]
});
```

### See

 - [Draw GeoJSON points](https://maplibre.org/maplibre-gl-js/docs/examples/draw-geojson-points/)
 - [Add a GeoJSON line](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-geojson-line/)
 - [Create a heatmap from points](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-heatmap-layer/)
 - [Create and style clusters](https://maplibre.org/maplibre-gl-js/docs/examples/create-and-style-clusters/)

### Methods

#### \_updateWorkerData()

> **\_updateWorkerData**(): `Promise`\<`void`\>

Responsible for invoking WorkerSource's geojson.loadData target, which
handles loading the geojson data and preparing to serve it up as tiles,
using geojson-vt or supercluster as appropriate.

##### Returns

`Promise`\<`void`\>

***

#### abortTile()

> **abortTile**(`tile`: `Tile`): `Promise`\<`void`\>

Allows to abort a tile loading.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to abort |

##### Returns

`Promise`\<`void`\>

***

#### getBounds()

> **getBounds**(): `Promise`\<[`LngLatBounds`](#lnglatbounds)\>

Allows getting the source's boundaries.
If there's a problem with the source's data, it will return an empty [LngLatBounds](#lnglatbounds).

##### Returns

`Promise`\<[`LngLatBounds`](#lnglatbounds)\>

a promise which resolves to the source's boundaries

***

#### getClusterChildren()

> **getClusterChildren**(`clusterId`: `number`): `Promise`\<`Feature`\<`Geometry`, `GeoJsonProperties`\>[]\>

For clustered sources, fetches the children of the given cluster on the next zoom level (as an array of GeoJSON features).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clusterId` | `number` | The value of the cluster's `cluster_id` property. |

##### Returns

`Promise`\<`Feature`\<`Geometry`, `GeoJsonProperties`\>[]\>

a promise that is resolved when the features are retrieved

***

#### getClusterExpansionZoom()

> **getClusterExpansionZoom**(`clusterId`: `number`): `Promise`\<`number`\>

For clustered sources, fetches the zoom at which the given cluster expands.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clusterId` | `number` | The value of the cluster's `cluster_id` property. |

##### Returns

`Promise`\<`number`\>

a promise that is resolved with the zoom number

***

#### getClusterLeaves()

> **getClusterLeaves**(`clusterId`: `number`, `limit`: `number`, `offset`: `number`): `Promise`\<`Feature`\<`Geometry`, `GeoJsonProperties`\>[]\>

For clustered sources, fetches the original points that belong to the cluster (as an array of GeoJSON features).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clusterId` | `number` | The value of the cluster's `cluster_id` property. |
| `limit` | `number` | The maximum number of features to return. |
| `offset` | `number` | The number of features to skip (e.g. for pagination). |

##### Returns

`Promise`\<`Feature`\<`Geometry`, `GeoJsonProperties`\>[]\>

a promise that is resolved when the features are retrieved

##### Example

Retrieve cluster leaves on click
```ts
map.on('click', 'clusters', (e) => {
  let features = map.queryRenderedFeatures(e.point, {
    layers: ['clusters']
  });

  let clusterId = features[0].properties.cluster_id;
  let pointCount = features[0].properties.point_count;
  let clusterSource = map.getSource('clusters');

  const features = await clusterSource.getClusterLeaves(clusterId, pointCount);
  // Print cluster leaves in the console
  console.log('Cluster leaves:', features);
});
```

***

#### getData()

> **getData**(): `Promise`\<`GeoJSON`\<`Geometry`, `GeoJsonProperties`\>\>

Allows to get the source's actual GeoJSON data.

##### Returns

`Promise`\<`GeoJSON`\<`Geometry`, `GeoJsonProperties`\>\>

a promise which resolves to the source's actual GeoJSON data

***

#### hasTransition()

> **hasTransition**(): `boolean`

True if the source has transition, false otherwise.

##### Returns

`boolean`

***

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### loaded()

> **loaded**(): `boolean`

True if the source is loaded, false otherwise.

##### Returns

`boolean`

***

#### loadTile()

> **loadTile**(`tile`: `Tile`): `Promise`\<`void`\>

This method does the heavy lifting of loading a tile.
In most cases it will defer the work to the relevant worker source.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to load |

##### Returns

`Promise`\<`void`\>

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### onAdd()

> **onAdd**(`map`: `Map`): `void`

This method is called when the source is added to the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | The map instance |

##### Returns

`void`

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `GeoJSONSource`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Promise`\<`any`\> \| `GeoJSONSource`

`this` or a promise if a listener is not provided

***

#### onRemove()

> **onRemove**(): `void`

This method is called when the source is removed from the map.

##### Returns

`void`

***

#### serialize()

> **serialize**(): `GeoJSONSourceSpecification`

##### Returns

`GeoJSONSourceSpecification`

A plain (stringifiable) JS object representing the current state of the source.
Creating a source using the returned object as the `options` should result in a Source that is
equivalent to this one.

***

#### setClusterOptions()

> **setClusterOptions**(`options`: [`SetClusterOptions`](#setclusteroptions)): `this`

To disable/enable clustering on the source options

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`SetClusterOptions`](#setclusteroptions) | The options to set |

##### Returns

`this`

##### Example

```ts
map.getSource('some id').setClusterOptions({cluster: false});
map.getSource('some id').setClusterOptions({cluster: false, clusterRadius: 50, clusterMaxZoom: 14});
```

***

#### setData()

> **setData**(`data`: `string` \| `GeoJSON`\<`Geometry`, `GeoJsonProperties`\>, `waitForCompletion`: `true`): `Promise`\<`void`\>

Sets the GeoJSON data and re-renders the map.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `string` \| `GeoJSON`\<`Geometry`, `GeoJsonProperties`\> | A GeoJSON data object or a URL to one. The latter is preferable in the case of large GeoJSON files. |
| `waitForCompletion` | `true` | If true, the method will return a promise that resolves when set data is complete. |

###### Returns

`Promise`\<`void`\>

> **setData**(`data`: `string` \| `GeoJSON`\<`Geometry`, `GeoJsonProperties`\>, `waitForCompletion?`: `false`): `this`

Sets the GeoJSON data and re-renders the map.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `string` \| `GeoJSON`\<`Geometry`, `GeoJsonProperties`\> | A GeoJSON data object or a URL to one. The latter is preferable in the case of large GeoJSON files. |
| `waitForCompletion?` | `false` | If true, the method will return a promise that resolves when set data is complete. |

###### Returns

`this`

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

***

#### unloadTile()

> **unloadTile**(`tile`: `Tile`): `Promise`\<`void`\>

Allows to unload a tile.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to unload |

##### Returns

`Promise`\<`void`\>

***

#### updateData()

> **updateData**(`diff`: `GeoJSONSourceDiff`, `waitForCompletion`: `true`): `Promise`\<`void`\>

Updates the source's GeoJSON, and re-renders the map.

For sources with lots of features, this method can be used to make updates more quickly.

This approach requires unique IDs for every feature in the source. The IDs can either be specified on the feature,
or by using the promoteId option to specify which property should be used as the ID.

It is an error to call updateData on a source that did not have unique IDs for each of its features already.

Updates are applied on a best-effort basis, updating an ID that does not exist will not result in an error.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `diff` | `GeoJSONSourceDiff` | The changes that need to be applied. |
| `waitForCompletion` | `true` | If true, the method will return a promise that resolves when the update is complete. |

###### Returns

`Promise`\<`void`\>

> **updateData**(`diff`: `GeoJSONSourceDiff`, `waitForCompletion?`: `false`): `this`

Updates the source's GeoJSON, and re-renders the map.

For sources with lots of features, this method can be used to make updates more quickly.

This approach requires unique IDs for every feature in the source. The IDs can either be specified on the feature,
or by using the promoteId option to specify which property should be used as the ID.

It is an error to call updateData on a source that did not have unique IDs for each of its features already.

Updates are applied on a best-effort basis, updating an ID that does not exist will not result in an error.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `diff` | `GeoJSONSourceDiff` | The changes that need to be applied. |
| `waitForCompletion?` | `false` | If true, the method will return a promise that resolves when the update is complete. |

###### Returns

`this`

### Properties

#### attribution

> **attribution**: `string`

The attribution for the source.

***

#### id

> **id**: `string`

The id for the source. Must not be used by any existing source.

***

#### isTileClipped

> **isTileClipped**: `boolean`

`false` if tiles can be drawn outside their boundaries, `true` if they cannot.

***

#### maxzoom

> **maxzoom**: `number`

The maximum zoom level for the source.

***

#### minzoom

> **minzoom**: `number`

The minimum zoom level for the source.

***

#### reparseOverscaled

> **reparseOverscaled**: `boolean`

`true` if tiles should be sent back to the worker for each overzoomed zoom level, `false` if not.

***

#### tileSize

> **tileSize**: `number`

The tile size for the source.

## ImageSource

A data source containing an image.
(See the [Style Specification](https://maplibre.org/maplibre-style-spec/#sources-image) for detailed documentation of options.)

### Example

```ts
// add to map
map.addSource('some id', {
   type: 'image',
   url: 'https://www.maplibre.org/images/foo.png',
   coordinates: [
       [-76.54, 39.18],
       [-76.52, 39.18],
       [-76.52, 39.17],
       [-76.54, 39.17]
   ]
});

// update coordinates
let mySource = map.getSource('some id');
mySource.setCoordinates([
    [-76.54335737228394, 39.18579907229748],
    [-76.52803659439087, 39.1838364847587],
    [-76.5295386314392, 39.17683392507606],
    [-76.54520273208618, 39.17876344106642]
]);

// update url and coordinates simultaneously
mySource.updateImage({
   url: 'https://www.maplibre.org/images/bar.png',
   coordinates: [
       [-76.54335737228394, 39.18579907229748],
       [-76.52803659439087, 39.1838364847587],
       [-76.5295386314392, 39.17683392507606],
       [-76.54520273208618, 39.17876344106642]
   ]
})

map.removeSource('some id');  // remove
```

### Extended by

- [`CanvasSource`](#canvassource)
- [`VideoSource`](#videosource)

### Methods

#### hasTransition()

> **hasTransition**(): `boolean`

True if the source has transition, false otherwise.

##### Returns

`boolean`

***

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### loaded()

> **loaded**(): `boolean`

True if the source is loaded, false otherwise.

##### Returns

`boolean`

***

#### loadTile()

> **loadTile**(`tile`: `Tile`): `Promise`\<`void`\>

This method does the heavy lifting of loading a tile.
In most cases it will defer the work to the relevant worker source.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to load |

##### Returns

`Promise`\<`void`\>

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### onAdd()

> **onAdd**(`map`: `Map`): `void`

This method is called when the source is added to the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | The map instance |

##### Returns

`void`

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `ImageSource`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Promise`\<`any`\> \| `ImageSource`

`this` or a promise if a listener is not provided

***

#### onRemove()

> **onRemove**(): `void`

This method is called when the source is removed from the map.

##### Returns

`void`

***

#### prepare()

> **prepare**(): `void`

Allows to execute a prepare step before the source is used.

##### Returns

`void`

***

#### serialize()

> **serialize**(): `VideoSourceSpecification` \| `ImageSourceSpecification` \| `CanvasSourceSpecification`

##### Returns

`VideoSourceSpecification` \| `ImageSourceSpecification` \| `CanvasSourceSpecification`

A plain (stringifiable) JS object representing the current state of the source.
Creating a source using the returned object as the `options` should result in a Source that is
equivalent to this one.

***

#### setCoordinates()

> **setCoordinates**(`coordinates`: `Coordinates`): `this`

Sets the image's coordinates and re-renders the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `coordinates` | `Coordinates` | Four geographical coordinates, represented as arrays of longitude and latitude numbers, which define the corners of the image. The coordinates start at the top left corner of the image and proceed in clockwise order. They do not have to represent a rectangle. |

##### Returns

`this`

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

***

#### updateImage()

> **updateImage**(`options`: [`UpdateImageOptions`](#updateimageoptions)): `this`

Updates the image URL and, optionally, the coordinates. To avoid having the image flash after changing,
set the `raster-fade-duration` paint property on the raster layer to 0.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`UpdateImageOptions`](#updateimageoptions) | The options object. |

##### Returns

`this`

### Properties

#### id

> **id**: `string`

The id for the source. Must not be used by any existing source.

***

#### maxzoom

> **maxzoom**: `number`

The maximum zoom level for the source.

***

#### minzoom

> **minzoom**: `number`

The minimum zoom level for the source.

***

#### terrainTileRanges

> **terrainTileRanges**: `object`

This object is used to store the range of terrain tiles that overlap with this tile.
It is relevant for image tiles, as the image exceeds single tile boundaries.

##### Index Signature

\[`zoom`: `string`\]: `CanonicalTileRange`

***

#### tileSize

> **tileSize**: `number`

The tile size for the source.

## RasterDEMTileSource

A source containing raster DEM tiles (See the [Style Specification](https://maplibre.org/maplibre-style-spec/) for detailed documentation of options.)
This source can be used to show hillshading and 3D terrain

### Example

```ts
map.addSource('raster-dem-source', {
     type: 'raster-dem',
     url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
     tileSize: 256
});
```

### See

[3D Terrain](https://maplibre.org/maplibre-gl-js/docs/examples/3d-terrain/)

### Methods

#### abortTile()

> **abortTile**(`tile`: `Tile`): `Promise`\<`void`\>

Allows to abort a tile loading.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to abort |

##### Returns

`Promise`\<`void`\>

***

#### hasTile()

> **hasTile**(`tileID`: `OverscaledTileID`): `boolean`

True is the tile is part of the source, false otherwise.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tileID` | `OverscaledTileID` | The tile ID |

##### Returns

`boolean`

***

#### hasTransition()

> **hasTransition**(): `boolean`

True if the source has transition, false otherwise.

##### Returns

`boolean`

***

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### loaded()

> **loaded**(): `boolean`

True if the source is loaded, false otherwise.

##### Returns

`boolean`

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### onAdd()

> **onAdd**(`map`: `Map`): `void`

This method is called when the source is added to the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | The map instance |

##### Returns

`void`

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `RasterDEMTileSource`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Promise`\<`any`\> \| `RasterDEMTileSource`

`this` or a promise if a listener is not provided

***

#### onRemove()

> **onRemove**(): `void`

This method is called when the source is removed from the map.

##### Returns

`void`

***

#### serialize()

> **serialize**(): `RasterSourceSpecification` \| `RasterDEMSourceSpecification`

##### Returns

`RasterSourceSpecification` \| `RasterDEMSourceSpecification`

A plain (stringifiable) JS object representing the current state of the source.
Creating a source using the returned object as the `options` should result in a Source that is
equivalent to this one.

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

***

#### setTiles()

> **setTiles**(`tiles`: `string`[]): `this`

Sets the source `tiles` property and re-renders the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tiles` | `string`[] | An array of one or more tile source URLs, as in the raster tiles spec (See the [Style Specification](https://maplibre.org/maplibre-style-spec/) |

##### Returns

`this`

***

#### setUrl()

> **setUrl**(`url`: `string`): `this`

Sets the source `url` property and re-renders the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | A URL to a TileJSON resource. Supported protocols are `http:` and `https:`. |

##### Returns

`this`

### Properties

#### id

> **id**: `string`

The id for the source. Must not be used by any existing source.

***

#### maxzoom

> **maxzoom**: `number`

The maximum zoom level for the source.

***

#### minzoom

> **minzoom**: `number`

The minimum zoom level for the source.

***

#### roundZoom

> **roundZoom**: `boolean`

`true` if zoom levels are rounded to the nearest integer in the source data, `false` if they are floor-ed to the nearest integer.

***

#### tileSize

> **tileSize**: `number`

The tile size for the source.

## RasterTileSource

A source containing raster tiles (See the [raster source documentation](https://maplibre.org/maplibre-style-spec/sources/#raster) for detailed documentation of options.)

### Examples

```ts
map.addSource('raster-source', {
    'type': 'raster',
    'tiles': ['https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg'],
    'tileSize': 256, // Set this to match tile server output to avoid blurry rendering
});
```

```ts
map.addSource('wms-test-source', {
     'type': 'raster',
// use the tiles option to specify a WMS tile source URL
     'tiles': [
         'https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015'
     ],
     'tileSize': 256 // Important for WMS if tiles are 256px
});
```

### See

 - [Add a raster tile source](https://maplibre.org/maplibre-gl-js/docs/examples/map-tiles/)
 - [Add a WMS source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-wms-source/)
 - [Display a satellite map](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-satellite-map/)

### Extended by

- [`RasterDEMTileSource`](#rasterdemtilesource)

### Methods

#### abortTile()

> **abortTile**(`tile`: `Tile`): `Promise`\<`void`\>

Allows to abort a tile loading.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to abort |

##### Returns

`Promise`\<`void`\>

***

#### hasTile()

> **hasTile**(`tileID`: `OverscaledTileID`): `boolean`

True is the tile is part of the source, false otherwise.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tileID` | `OverscaledTileID` | The tile ID |

##### Returns

`boolean`

***

#### hasTransition()

> **hasTransition**(): `boolean`

True if the source has transition, false otherwise.

##### Returns

`boolean`

***

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### loaded()

> **loaded**(): `boolean`

True if the source is loaded, false otherwise.

##### Returns

`boolean`

***

#### loadTile()

> **loadTile**(`tile`: `Tile`): `Promise`\<`void`\>

This method does the heavy lifting of loading a tile.
In most cases it will defer the work to the relevant worker source.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to load |

##### Returns

`Promise`\<`void`\>

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### onAdd()

> **onAdd**(`map`: `Map`): `void`

This method is called when the source is added to the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | The map instance |

##### Returns

`void`

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `RasterTileSource`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Promise`\<`any`\> \| `RasterTileSource`

`this` or a promise if a listener is not provided

***

#### onRemove()

> **onRemove**(): `void`

This method is called when the source is removed from the map.

##### Returns

`void`

***

#### serialize()

> **serialize**(): `RasterSourceSpecification` \| `RasterDEMSourceSpecification`

##### Returns

`RasterSourceSpecification` \| `RasterDEMSourceSpecification`

A plain (stringifiable) JS object representing the current state of the source.
Creating a source using the returned object as the `options` should result in a Source that is
equivalent to this one.

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

***

#### setTiles()

> **setTiles**(`tiles`: `string`[]): `this`

Sets the source `tiles` property and re-renders the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tiles` | `string`[] | An array of one or more tile source URLs, as in the raster tiles spec (See the [Style Specification](https://maplibre.org/maplibre-style-spec/) |

##### Returns

`this`

***

#### setUrl()

> **setUrl**(`url`: `string`): `this`

Sets the source `url` property and re-renders the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | A URL to a TileJSON resource. Supported protocols are `http:` and `https:`. |

##### Returns

`this`

***

#### unloadTile()

> **unloadTile**(`tile`: `Tile`): `Promise`\<`void`\>

Allows to unload a tile.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to unload |

##### Returns

`Promise`\<`void`\>

### Properties

#### id

> **id**: `string`

The id for the source. Must not be used by any existing source.

***

#### maxzoom

> **maxzoom**: `number`

The maximum zoom level for the source.

***

#### minzoom

> **minzoom**: `number`

The minimum zoom level for the source.

***

#### roundZoom

> **roundZoom**: `boolean`

`true` if zoom levels are rounded to the nearest integer in the source data, `false` if they are floor-ed to the nearest integer.

***

#### tileSize

> **tileSize**: `number`

The tile size for the source.

## VectorTileSource

A source containing vector tiles in [Maplibre Vector Tile format](https://maplibre.org/maplibre-tile-spec/) or [Mapbox Vector Tile format](https://docs.mapbox.com/vector-tiles/reference/).
(See the [Style Specification](https://maplibre.org/maplibre-style-spec/) for detailed documentation of options.)

### Examples

```ts
map.addSource('some id', {
    type: 'vector',
    url: 'https://demotiles.maplibre.org/tiles/tiles.json'
});
```

```ts
map.addSource('some id', {
    type: 'vector',
    tiles: ['https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt'],
    minzoom: 6,
    maxzoom: 14
});
```

```ts
map.getSource('some id').setUrl("https://demotiles.maplibre.org/tiles/tiles.json");
```

```ts
map.getSource('some id').setTiles(['https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt']);
```

### See

[Add a vector tile source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-vector-tile-source/)

### Methods

#### abortTile()

> **abortTile**(`tile`: `Tile`): `Promise`\<`void`\>

Allows to abort a tile loading.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to abort |

##### Returns

`Promise`\<`void`\>

***

#### hasTile()

> **hasTile**(`tileID`: `OverscaledTileID`): `boolean`

True is the tile is part of the source, false otherwise.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tileID` | `OverscaledTileID` | The tile ID |

##### Returns

`boolean`

***

#### hasTransition()

> **hasTransition**(): `boolean`

True if the source has transition, false otherwise.

##### Returns

`boolean`

***

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### loaded()

> **loaded**(): `boolean`

True if the source is loaded, false otherwise.

##### Returns

`boolean`

***

#### loadTile()

> **loadTile**(`tile`: `Tile`): `Promise`\<`void` \| `LoadTileResult`\>

This method does the heavy lifting of loading a tile.
In most cases it will defer the work to the relevant worker source.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to load |

##### Returns

`Promise`\<`void` \| `LoadTileResult`\>

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### onAdd()

> **onAdd**(`map`: `Map`): `void`

This method is called when the source is added to the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | The map instance |

##### Returns

`void`

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `VectorTileSource`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Promise`\<`any`\> \| `VectorTileSource`

`this` or a promise if a listener is not provided

***

#### onRemove()

> **onRemove**(): `void`

This method is called when the source is removed from the map.

##### Returns

`void`

***

#### serialize()

> **serialize**(): `VectorSourceSpecification`

##### Returns

`VectorSourceSpecification`

A plain (stringifiable) JS object representing the current state of the source.
Creating a source using the returned object as the `options` should result in a Source that is
equivalent to this one.

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

***

#### setTiles()

> **setTiles**(`tiles`: `string`[]): `this`

Sets the source `tiles` property and re-renders the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tiles` | `string`[] | An array of one or more tile source URLs, as in the TileJSON spec. |

##### Returns

`this`

***

#### setUrl()

> **setUrl**(`url`: `string`): `this`

Sets the source `url` property and re-renders the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `url` | `string` | A URL to a TileJSON resource. Supported protocols are `http:` and `https:`. |

##### Returns

`this`

***

#### unloadTile()

> **unloadTile**(`tile`: `Tile`): `Promise`\<`void`\>

Allows to unload a tile.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to unload |

##### Returns

`Promise`\<`void`\>

### Properties

#### id

> **id**: `string`

The id for the source. Must not be used by any existing source.

***

#### isTileClipped

> **isTileClipped**: `boolean`

`false` if tiles can be drawn outside their boundaries, `true` if they cannot.

***

#### maxzoom

> **maxzoom**: `number`

The maximum zoom level for the source.

***

#### minzoom

> **minzoom**: `number`

The minimum zoom level for the source.

***

#### reparseOverscaled

> **reparseOverscaled**: `boolean`

`true` if tiles should be sent back to the worker for each overzoomed zoom level, `false` if not.

***

#### tileSize

> **tileSize**: `number`

The tile size for the source.

## VideoSource

A data source containing video.
(See the [Style Specification](https://maplibre.org/maplibre-style-spec/#sources-video) for detailed documentation of options.)

### Example

```ts
// add to map
map.addSource('some id', {
   type: 'video',
   url: [
       'https://www.mapbox.com/blog/assets/baltimore-smoke.mp4',
       'https://www.mapbox.com/blog/assets/baltimore-smoke.webm'
   ],
   coordinates: [
       [-76.54, 39.18],
       [-76.52, 39.18],
       [-76.52, 39.17],
       [-76.54, 39.17]
   ]
});

// update
let mySource = map.getSource('some id');
mySource.setCoordinates([
    [-76.54335737228394, 39.18579907229748],
    [-76.52803659439087, 39.1838364847587],
    [-76.5295386314392, 39.17683392507606],
    [-76.54520273208618, 39.17876344106642]
]);

map.removeSource('some id');  // remove
```

### See

[Add a video](https://maplibre.org/maplibre-gl-js/docs/examples/video-on-a-map/)

Note that when rendered as a raster layer, the layer's `raster-fade-duration` property will cause the video to fade in.
This happens when playback is started, paused and resumed, or when the video's coordinates are updated. To avoid this behavior,
set the layer's `raster-fade-duration` property to `0`.

### Methods

#### getVideo()

> **getVideo**(): `HTMLVideoElement`

Returns the HTML `video` element.

##### Returns

`HTMLVideoElement`

The HTML `video` element.

***

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### loaded()

> **loaded**(): `boolean`

True if the source is loaded, false otherwise.

##### Returns

`boolean`

***

#### loadTile()

> **loadTile**(`tile`: `Tile`): `Promise`\<`void`\>

This method does the heavy lifting of loading a tile.
In most cases it will defer the work to the relevant worker source.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tile` | `Tile` | The tile to load |

##### Returns

`Promise`\<`void`\>

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Promise`\<`any`\> \| `VideoSource`

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Promise`\<`any`\> \| `VideoSource`

`this` or a promise if a listener is not provided

***

#### pause()

> **pause**(): `void`

Pauses the video.

##### Returns

`void`

***

#### play()

> **play**(): `void`

Plays the video.

##### Returns

`void`

***

#### prepare()

> **prepare**(): `this`

Sets the video's coordinates and re-renders the map.

##### Returns

`this`

***

#### seek()

> **seek**(`seconds`: `number`): `void`

Sets playback to a timestamp, in seconds.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `seconds` | `number` |

##### Returns

`void`

***

#### setCoordinates()

> **setCoordinates**(`coordinates`: `Coordinates`): `this`

Sets the image's coordinates and re-renders the map.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `coordinates` | `Coordinates` | Four geographical coordinates, represented as arrays of longitude and latitude numbers, which define the corners of the image. The coordinates start at the top left corner of the image and proceed in clockwise order. They do not have to represent a rectangle. |

##### Returns

`this`

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

***

#### updateImage()

> **updateImage**(`options`: [`UpdateImageOptions`](#updateimageoptions)): `this`

Updates the image URL and, optionally, the coordinates. To avoid having the image flash after changing,
set the `raster-fade-duration` paint property on the raster layer to 0.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`UpdateImageOptions`](#updateimageoptions) | The options object. |

##### Returns

`this`

### Properties

#### id

> **id**: `string`

The id for the source. Must not be used by any existing source.

***

#### maxzoom

> **maxzoom**: `number`

The maximum zoom level for the source.

***

#### minzoom

> **minzoom**: `number`

The minimum zoom level for the source.

***

#### terrainTileRanges

> **terrainTileRanges**: `object`

This object is used to store the range of terrain tiles that overlap with this tile.
It is relevant for image tiles, as the image exceeds single tile boundaries.

##### Index Signature

\[`zoom`: `string`\]: `CanonicalTileRange`

***

#### tileSize

> **tileSize**: `number`

The tile size for the source.

## Point

Point

### Functions

- [convert](functions/convert.md)

## EdgeInsets

An `EdgeInset` object represents screen space padding applied to the edges of the viewport.
This shifts the apparent center or the vanishing point of the map. This is useful for adding floating UI elements
on top of the map and having the vanishing point shift as UI elements resize.

### Methods

#### getCenter()

> **getCenter**(`width`: `number`, `height`: `number`): [`Point`](#point-1)

Utility method that computes the new apparent center or vanishing point after applying insets.
This is in pixels and with the top left being (0.0) and +y being downwards.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | the width |
| `height` | `number` | the height |

##### Returns

[`Point`](#point-1)

the point

***

#### interpolate()

> **interpolate**(`start`: [`PaddingOptions`](#paddingoptions) \| `EdgeInsets`, `target`: [`PaddingOptions`](#paddingoptions), `t`: `number`): `this`

Interpolates the inset in-place.
This maintains the current inset value for any inset not present in `target`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start` | [`PaddingOptions`](#paddingoptions) \| `EdgeInsets` | interpolation start |
| `target` | [`PaddingOptions`](#paddingoptions) | interpolation target |
| `t` | `number` | interpolation step/weight |

##### Returns

`this`

the insets

***

#### toJSON()

> **toJSON**(): `Complete`\<[`PaddingOptions`](#paddingoptions)\>

Returns the current state as json, useful when you want to have a
read-only representation of the inset.

##### Returns

`Complete`\<[`PaddingOptions`](#paddingoptions)\>

state as json

### Properties

#### bottom

> **bottom**: `number`

##### Default Value

```ts
0
```

***

#### left

> **left**: `number`

##### Default Value

```ts
0
```

***

#### right

> **right**: `number`

##### Default Value

```ts
0
```

***

#### top

> **top**: `number`

##### Default Value

```ts
0
```

## LngLat

A `LngLat` object represents a given longitude and latitude coordinate, measured in degrees.
These coordinates are based on the [WGS84 (EPSG:4326) standard](https://en.wikipedia.org/wiki/World_Geodetic_System#WGS84).

MapLibre GL JS uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match the
[GeoJSON specification](https://tools.ietf.org/html/rfc7946).

Note that any MapLibre GL JS method that accepts a `LngLat` object as an argument or option
can also accept an `Array` of two numbers and will perform an implicit conversion.
This flexible type is documented as [LngLatLike](#lnglatlike).

### Example

```ts
let ll = new LngLat(-123.9749, 40.7736);
ll.lng; // = -123.9749
```

### See

[Get coordinates of the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-coordinates-of-the-mouse-pointer/)

#### Constructor

> **new LngLat**(`lng`: `number`, `lat`: `number`): `LngLat`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lng` | `number` | Longitude, measured in degrees. |
| `lat` | `number` | Latitude, measured in degrees. |

##### Returns

`LngLat`

### Methods

#### distanceTo()

> **distanceTo**(`lngLat`: `LngLat`): `number`

Returns the approximate distance between a pair of coordinates in meters
Uses the Haversine Formula (from R.W. Sinnott, "Virtues of the Haversine", Sky and Telescope, vol. 68, no. 2, 1984, p. 159)

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lngLat` | `LngLat` | coordinates to compute the distance to |

##### Returns

`number`

Distance in meters between the two coordinates.

##### Example

```ts
let new_york = new LngLat(-74.0060, 40.7128);
let los_angeles = new LngLat(-118.2437, 34.0522);
new_york.distanceTo(los_angeles); // = 3935751.690893987, "true distance" using a non-spherical approximation is ~3966km
```

***

#### toArray()

> **toArray**(): \[`number`, `number`\]

Returns the coordinates represented as an array of two numbers.

##### Returns

\[`number`, `number`\]

The coordinates represented as an array of longitude and latitude.

##### Example

```ts
let ll = new LngLat(-73.9749, 40.7736);
ll.toArray(); // = [-73.9749, 40.7736]
```

***

#### wrap()

> **wrap**(): `LngLat`

Returns a new `LngLat` object whose longitude is wrapped to the range (-180, 180).

##### Returns

`LngLat`

The wrapped `LngLat` object.

##### Example

```ts
let ll = new LngLat(286.0251, 40.7736);
let wrapped = ll.wrap();
wrapped.lng; // = -73.9749
```

***

#### convert()

> `static` **convert**(`input`: [`LngLatLike`](#lnglatlike)): `LngLat`

Converts an array of two numbers or an object with `lng` and `lat` or `lon` and `lat` properties
to a `LngLat` object.

If a `LngLat` object is passed in, the function returns it unchanged.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`LngLatLike`](#lnglatlike) | An array of two numbers or object to convert, or a `LngLat` object to return. |

##### Returns

`LngLat`

A new `LngLat` object, if a conversion occurred, or the original `LngLat` object.

##### Example

```ts
let arr = [-73.9749, 40.7736];
let ll = LngLat.convert(arr);
ll;   // = LngLat {lng: -73.9749, lat: 40.7736}
```

### Properties

#### lat

> **lat**: `number`

Latitude, measured in degrees.

***

#### lng

> **lng**: `number`

Longitude, measured in degrees.

#### Constructor

> **new LngLat**(`lng`: `number`, `lat`: `number`): `LngLat`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lng` | `number` | Longitude, measured in degrees. |
| `lat` | `number` | Latitude, measured in degrees. |

##### Returns

`LngLat`

### function toString() { [native code] }

#### toString()

> **toString**(): `string`

Returns the coordinates represent as a string.

##### Returns

`string`

The coordinates represented as a string of the format `'LngLat(lng, lat)'`.

##### Example

```ts
let ll = new LngLat(-73.9749, 40.7736);
ll.toString(); // = "LngLat(-73.9749, 40.7736)"
```

## LngLatBounds

A `LngLatBounds` object represents a geographical bounding box,
defined by its southwest and northeast points in longitude and latitude.

If no arguments are provided to the constructor, a `null` bounding box is created.

Note that any MapLibre GL method that accepts a `LngLatBounds` object as an argument or option
can also accept an `Array` of two [LngLatLike](#lnglatlike) constructs and will perform an implicit conversion.
This flexible type is documented as [LngLatBoundsLike](#lnglatboundslike).

### Example

```ts
let sw = new LngLat(-73.9876, 40.7661);
let ne = new LngLat(-73.9397, 40.8002);
let llb = new LngLatBounds(sw, ne);
```

### See

[Fit to the bounds of a LineString](https://maplibre.org/maplibre-gl-js/docs/examples/fit-to-the-bounds-of-a-linestring/)

#### Constructor

> **new LngLatBounds**(`sw?`: \[`number`, `number`, `number`, `number`\] \| [`LngLatLike`](#lnglatlike) \| \[[`LngLatLike`](#lnglatlike), [`LngLatLike`](#lnglatlike)\], `ne?`: [`LngLatLike`](#lnglatlike)): `LngLatBounds`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sw?` | \[`number`, `number`, `number`, `number`\] \| [`LngLatLike`](#lnglatlike) \| \[[`LngLatLike`](#lnglatlike), [`LngLatLike`](#lnglatlike)\] | The southwest corner of the bounding box. OR array of 4 numbers in the order of west, south, east, north OR array of 2 LngLatLike: [sw,ne] |
| `ne?` | [`LngLatLike`](#lnglatlike) | The northeast corner of the bounding box. |

##### Returns

`LngLatBounds`

##### Example

```ts
let sw = new LngLat(-73.9876, 40.7661);
let ne = new LngLat(-73.9397, 40.8002);
let llb = new LngLatBounds(sw, ne);
```
OR
```ts
let llb = new LngLatBounds([-73.9876, 40.7661, -73.9397, 40.8002]);
```
OR
```ts
let llb = new LngLatBounds([sw, ne]);
```

### Methods

#### adjustAntiMeridian()

> **adjustAntiMeridian**(): `LngLatBounds`

Adjusts the given bounds to handle the case where the bounds cross the 180th meridian (antimeridian).

##### Returns

`LngLatBounds`

The adjusted LngLatBounds

##### Example

```ts
let bounds = new LngLatBounds([175.813127, -20.157768], [-178. 340903, -15.449124]);
let adjustedBounds = bounds.adjustAntiMeridian();
// adjustedBounds will be: [[175.813127, -20.157768], [181.659097, -15.449124]]
```

***

#### contains()

> **contains**(`lnglat`: [`LngLatLike`](#lnglatlike)): `boolean`

Check if the point is within the bounding box.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lnglat` | [`LngLatLike`](#lnglatlike) | geographic point to check against. |

##### Returns

`boolean`

`true` if the point is within the bounding box.

##### Example

```ts
let llb = new LngLatBounds(
  new LngLat(-73.9876, 40.7661),
  new LngLat(-73.9397, 40.8002)
);

let ll = new LngLat(-73.9567, 40.7789);

console.log(llb.contains(ll)); // = true
```

***

#### extend()

> **extend**(`obj`: [`LngLatBoundsLike`](#lnglatboundslike) \| [`LngLatLike`](#lnglatlike)): `this`

Extend the bounds to include a given LngLatLike or LngLatBoundsLike.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | [`LngLatBoundsLike`](#lnglatboundslike) \| [`LngLatLike`](#lnglatlike) | object to extend to |

##### Returns

`this`

***

#### getCenter()

> **getCenter**(): [`LngLat`](#lnglat)

Returns the geographical coordinate equidistant from the bounding box's corners.

##### Returns

[`LngLat`](#lnglat)

The bounding box's center.

##### Example

```ts
let llb = new LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.getCenter(); // = LngLat {lng: -73.96365, lat: 40.78315}
```

***

#### getEast()

> **getEast**(): `number`

Returns the east edge of the bounding box.

##### Returns

`number`

The east edge of the bounding box.

***

#### getNorth()

> **getNorth**(): `number`

Returns the north edge of the bounding box.

##### Returns

`number`

The north edge of the bounding box.

***

#### getNorthEast()

> **getNorthEast**(): [`LngLat`](#lnglat)

Returns the northeast corner of the bounding box.

##### Returns

[`LngLat`](#lnglat)

The northeast corner of the bounding box.

***

#### getNorthWest()

> **getNorthWest**(): [`LngLat`](#lnglat)

Returns the northwest corner of the bounding box.

##### Returns

[`LngLat`](#lnglat)

The northwest corner of the bounding box.

***

#### getSouth()

> **getSouth**(): `number`

Returns the south edge of the bounding box.

##### Returns

`number`

The south edge of the bounding box.

***

#### getSouthEast()

> **getSouthEast**(): [`LngLat`](#lnglat)

Returns the southeast corner of the bounding box.

##### Returns

[`LngLat`](#lnglat)

The southeast corner of the bounding box.

***

#### getSouthWest()

> **getSouthWest**(): [`LngLat`](#lnglat)

Returns the southwest corner of the bounding box.

##### Returns

[`LngLat`](#lnglat)

The southwest corner of the bounding box.

***

#### getWest()

> **getWest**(): `number`

Returns the west edge of the bounding box.

##### Returns

`number`

The west edge of the bounding box.

***

#### intersects()

> **intersects**(`other`: [`LngLatBoundsLike`](#lnglatboundslike)): `boolean`

Checks if this bounding box intersects with another bounding box.

Returns true if the bounding boxes share any area, including cases where
they only touch along an edge or at a corner.

This method properly handles cases where either or both bounding boxes cross
the antimeridian (date line).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | [`LngLatBoundsLike`](#lnglatboundslike) |

##### Returns

`boolean`

***

#### isEmpty()

> **isEmpty**(): `boolean`

Check if the bounding box is an empty/`null`-type box.

##### Returns

`boolean`

True if bounds have been defined, otherwise false.

***

#### setNorthEast()

> **setNorthEast**(`ne`: [`LngLatLike`](#lnglatlike)): `this`

Set the northeast corner of the bounding box

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ne` | [`LngLatLike`](#lnglatlike) | a [LngLatLike](#lnglatlike) object describing the northeast corner of the bounding box. |

##### Returns

`this`

***

#### setSouthWest()

> **setSouthWest**(`sw`: [`LngLatLike`](#lnglatlike)): `this`

Set the southwest corner of the bounding box

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sw` | [`LngLatLike`](#lnglatlike) | a [LngLatLike](#lnglatlike) object describing the southwest corner of the bounding box. |

##### Returns

`this`

***

#### toArray()

> **toArray**(): \[\[`number`, `number`\], \[`number`, `number`\]\]

Returns the bounding box represented as an array.

##### Returns

\[\[`number`, `number`\], \[`number`, `number`\]\]

The bounding box represented as an array, consisting of the
southwest and northeast coordinates of the bounding represented as arrays of numbers.

##### Example

```ts
let llb = new LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.toArray(); // = [[-73.9876, 40.7661], [-73.9397, 40.8002]]
```

***

#### convert()

> `static` **convert**(`input`: [`LngLatBoundsLike`](#lnglatboundslike) \| `null`): `LngLatBounds`

Converts an array to a `LngLatBounds` object.

If a `LngLatBounds` object is passed in, the function returns it unchanged.

Internally, the function calls [LngLat.convert](#convert) to convert arrays to `LngLat` values.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | [`LngLatBoundsLike`](#lnglatboundslike) \| `null` | An array of two coordinates to convert, or a `LngLatBounds` object to return. |

##### Returns

`LngLatBounds`

A new `LngLatBounds` object, if a conversion occurred, or the original `LngLatBounds` object.

##### Example

```ts
let arr = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
let llb = LngLatBounds.convert(arr); // = LngLatBounds {_sw: LngLat {lng: -73.9876, lat: 40.7661}, _ne: LngLat {lng: -73.9397, lat: 40.8002}}
```

***

#### fromLngLat()

> `static` **fromLngLat**(`center`: [`LngLat`](#lnglat), `radius?`: `number`): `LngLatBounds`

Returns a `LngLatBounds` from the coordinates extended by a given `radius`. The returned `LngLatBounds` completely contains the `radius`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `center` | [`LngLat`](#lnglat) | center coordinates of the new bounds. |
| `radius?` | `number` | Distance in meters from the coordinates to extend the bounds. |

##### Returns

`LngLatBounds`

A new `LngLatBounds` object representing the coordinates extended by the `radius`.

##### Example

```ts
let center = new LngLat(-73.9749, 40.7736);
LngLatBounds.fromLngLat(100).toArray(); // = [[-73.97501862141328, 40.77351016847229], [-73.97478137858673, 40.77368983152771]]
```

#### Constructor

> **new LngLatBounds**(`sw?`: \[`number`, `number`, `number`, `number`\] \| [`LngLatLike`](#lnglatlike) \| \[[`LngLatLike`](#lnglatlike), [`LngLatLike`](#lnglatlike)\], `ne?`: [`LngLatLike`](#lnglatlike)): `LngLatBounds`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `sw?` | \[`number`, `number`, `number`, `number`\] \| [`LngLatLike`](#lnglatlike) \| \[[`LngLatLike`](#lnglatlike), [`LngLatLike`](#lnglatlike)\] | The southwest corner of the bounding box. OR array of 4 numbers in the order of west, south, east, north OR array of 2 LngLatLike: [sw,ne] |
| `ne?` | [`LngLatLike`](#lnglatlike) | The northeast corner of the bounding box. |

##### Returns

`LngLatBounds`

##### Example

```ts
let sw = new LngLat(-73.9876, 40.7661);
let ne = new LngLat(-73.9397, 40.8002);
let llb = new LngLatBounds(sw, ne);
```
OR
```ts
let llb = new LngLatBounds([-73.9876, 40.7661, -73.9397, 40.8002]);
```
OR
```ts
let llb = new LngLatBounds([sw, ne]);
```

### function toString() { [native code] }

#### toString()

> **toString**(): `string`

Return the bounding box represented as a string.

##### Returns

`string`

The bounding box represents as a string of the format
`'LngLatBounds(LngLat(lng, lat), LngLat(lng, lat))'`.

##### Example

```ts
let llb = new LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
llb.toString(); // = "LngLatBounds(LngLat(-73.9876, 40.7661), LngLat(-73.9397, 40.8002))"
```

## MercatorCoordinate

A `MercatorCoordinate` object represents a projected three dimensional position.

`MercatorCoordinate` uses the web mercator projection ([EPSG:3857](https://epsg.io/3857)) with slightly different units:

- the size of 1 unit is the width of the projected world instead of the "mercator meter"
- the origin of the coordinate space is at the north-west corner instead of the middle

For example, `MercatorCoordinate(0, 0, 0)` is the north-west corner of the mercator world and
`MercatorCoordinate(1, 1, 0)` is the south-east corner. If you are familiar with
[vector tiles](https://github.com/mapbox/vector-tile-spec) it may be helpful to think
of the coordinate space as the `0/0/0` tile with an extent of `1`.

The `z` dimension of `MercatorCoordinate` is conformal. A cube in the mercator coordinate space would be rendered as a cube.

### Example

```ts
let nullIsland = new MercatorCoordinate(0.5, 0.5, 0);
```

### See

 - [Add a custom style layer](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-custom-style-layer/)
 - [Add a 3D model using three.js](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-3d-model-using-threejs/)
 - [Add a simple custom layer on a globe](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-simple-custom-layer-on-a-globe/)

#### Constructor

> **new MercatorCoordinate**(`x`: `number`, `y`: `number`, `z?`: `number`): `MercatorCoordinate`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | The x component of the position. |
| `y` | `number` | The y component of the position. |
| `z?` | `number` | The z component of the position. |

##### Returns

`MercatorCoordinate`

### Methods

#### meterInMercatorCoordinateUnits()

> **meterInMercatorCoordinateUnits**(): `number`

Returns the distance of 1 meter in `MercatorCoordinate` units at this latitude.

For coordinates in real world units using meters, this naturally provides the scale
to transform into `MercatorCoordinate`s.

##### Returns

`number`

Distance of 1 meter in `MercatorCoordinate` units.

***

#### toAltitude()

> **toAltitude**(): `number`

Returns the altitude in meters of the coordinate.

##### Returns

`number`

The altitude in meters.

##### Example

```ts
let coord = new MercatorCoordinate(0, 0, 0.02);
coord.toAltitude(); // 6914.281956295339
```

***

#### toLngLat()

> **toLngLat**(): [`LngLat`](#lnglat)

Returns the `LngLat` for the coordinate.

##### Returns

[`LngLat`](#lnglat)

The `LngLat` object.

##### Example

```ts
let coord = new MercatorCoordinate(0.5, 0.5, 0);
let lngLat = coord.toLngLat(); // LngLat(0, 0)
```

***

#### fromLngLat()

> `static` **fromLngLat**(`lngLatLike`: [`LngLatLike`](#lnglatlike), `altitude?`: `number`): `MercatorCoordinate`

Project a `LngLat` to a `MercatorCoordinate`.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `lngLatLike` | [`LngLatLike`](#lnglatlike) | The location to project. |
| `altitude?` | `number` | The altitude in meters of the position. |

##### Returns

`MercatorCoordinate`

The projected mercator coordinate.

##### Example

```ts
let coord = MercatorCoordinate.fromLngLat({ lng: 0, lat: 0}, 0);
coord; // MercatorCoordinate(0.5, 0.5, 0)
```

#### Constructor

> **new MercatorCoordinate**(`x`: `number`, `y`: `number`, `z?`: `number`): `MercatorCoordinate`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | The x component of the position. |
| `y` | `number` | The y component of the position. |
| `z?` | `number` | The z component of the position. |

##### Returns

`MercatorCoordinate`

## Point

A standalone point geometry with useful accessor, comparison, and
modification methods.

### Example

```ts
const point = new Point(-77, 38);
```

#### Constructor

> **new Point**(`x`: `number`, `y`: `number`): `Point`

A standalone point geometry with useful accessor, comparison, and
modification methods.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | the x-coordinate. This could be longitude or screen pixels, or any other sort of unit. |
| `y` | `number` | the y-coordinate. This could be latitude or screen pixels, or any other sort of unit. |

##### Returns

`Point`

##### Example

```ts
const point = new Point(-77, 38);
```

### Methods

#### \_add()

> **\_add**(`p`: `Point`): `this`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p` | `Point` | - |

##### Returns

`this`

***

#### \_div()

> **\_div**(`k`: `number`): `this`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `k` | `number` | - |

##### Returns

`this`

***

#### \_divByPoint()

> **\_divByPoint**(`p`: `Point`): `this`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p` | `Point` | - |

##### Returns

`this`

***

#### \_matMult()

> **\_matMult**(`m`: \[`number`, `number`, `number`, `number`\]): `this`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `m` | \[`number`, `number`, `number`, `number`\] | - |

##### Returns

`this`

***

#### \_mult()

> **\_mult**(`k`: `number`): `this`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `k` | `number` | - |

##### Returns

`this`

***

#### \_multByPoint()

> **\_multByPoint**(`p`: `Point`): `this`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p` | `Point` | - |

##### Returns

`this`

***

#### \_rotate()

> **\_rotate**(`angle`: `number`): `this`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `angle` | `number` | - |

##### Returns

`this`

***

#### \_rotateAround()

> **\_rotateAround**(`angle`: `number`, `p`: `Point`): `this`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `angle` | `number` | - |
| `p` | `Point` | - |

##### Returns

`this`

***

#### \_sub()

> **\_sub**(`p`: `Point`): `this`

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p` | `Point` | - |

##### Returns

`this`

***

#### add()

> **add**(`p`: `Point`): `Point`

Add this point's x & y coordinates to another point,
yielding a new point.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p` | `Point` | the other point |

##### Returns

`Point`

output point

***

#### angle()

> **angle**(): `number`

Get the angle from the 0, 0 coordinate to this point, in radians
coordinates.

##### Returns

`number`

angle

***

#### angleTo()

> **angleTo**(`b`: `Point`): `number`

Get the angle from this point to another point, in radians

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `b` | `Point` | the other point |

##### Returns

`number`

angle

***

#### angleWith()

> **angleWith**(`b`: `Point`): `number`

Get the angle between this point and another point, in radians

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `b` | `Point` | the other point |

##### Returns

`number`

angle

***

#### angleWithSep()

> **angleWithSep**(`x`: `number`, `y`: `number`): `number`

Find the angle of the two vectors, solving the formula for
the cross product a x b = |a||b|sin(θ) for θ.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | the x-coordinate |
| `y` | `number` | the y-coordinate |

##### Returns

`number`

the angle in radians

***

#### clone()

> **clone**(): `Point`

Clone this point, returning a new point that can be modified
without affecting the old one.

##### Returns

`Point`

the clone

***

#### dist()

> **dist**(`p`: `Point`): `number`

Calculate the distance from this point to another point

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p` | `Point` | the other point |

##### Returns

`number`

distance

***

#### distSqr()

> **distSqr**(`p`: `Point`): `number`

Calculate the distance from this point to another point,
without the square root step. Useful if you're comparing
relative distances.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p` | `Point` | the other point |

##### Returns

`number`

distance

***

#### div()

> **div**(`k`: `number`): `Point`

Divide this point's x & y coordinates by a factor,
yielding a new point.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `k` | `number` | factor |

##### Returns

`Point`

output point

***

#### divByPoint()

> **divByPoint**(`p`: `Point`): `Point`

Divide this point's x & y coordinates by point,
yielding a new point.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p` | `Point` | the other point |

##### Returns

`Point`

output point

***

#### equals()

> **equals**(`other`: `Point`): `boolean`

Judge whether this point is equal to another point, returning
true or false.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `other` | `Point` | the other point |

##### Returns

`boolean`

whether the points are equal

***

#### mag()

> **mag**(): `number`

Return the magnitude of this point: this is the Euclidean
distance from the 0, 0 coordinate to this point's x and y
coordinates.

##### Returns

`number`

magnitude

***

#### matMult()

> **matMult**(`m`: \[`number`, `number`, `number`, `number`\]): `Point`

Multiply this point by a 4x1 transformation matrix

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `m` | \[`number`, `number`, `number`, `number`\] | transformation matrix |

##### Returns

`Point`

output point

***

#### mult()

> **mult**(`k`: `number`): `Point`

Multiply this point's x & y coordinates by a factor,
yielding a new point.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `k` | `number` | factor |

##### Returns

`Point`

output point

***

#### multByPoint()

> **multByPoint**(`p`: `Point`): `Point`

Multiply this point's x & y coordinates by point,
yielding a new point.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p` | `Point` | the other point |

##### Returns

`Point`

output point

***

#### perp()

> **perp**(): `Point`

Compute a perpendicular point, where the new y coordinate
is the old x coordinate and the new x coordinate is the old y
coordinate multiplied by -1

##### Returns

`Point`

perpendicular point

***

#### rotate()

> **rotate**(`a`: `number`): `Point`

Rotate this point around the 0, 0 origin by an angle a,
given in radians

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `number` | angle to rotate around, in radians |

##### Returns

`Point`

output point

***

#### rotateAround()

> **rotateAround**(`a`: `number`, `p`: `Point`): `Point`

Rotate this point around p point by an angle a,
given in radians

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `number` | angle to rotate around, in radians |
| `p` | `Point` | Point to rotate around |

##### Returns

`Point`

output point

***

#### round()

> **round**(): `Point`

Return a version of this point with the x & y coordinates
rounded to integers.

##### Returns

`Point`

rounded point

***

#### sub()

> **sub**(`p`: `Point`): `Point`

Subtract this point's x & y coordinates to from point,
yielding a new point.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `p` | `Point` | the other point |

##### Returns

`Point`

output point

***

#### unit()

> **unit**(): `Point`

Calculate this point but as a unit vector from 0, 0, meaning
that the distance from the resulting point to the 0, 0
coordinate will be equal to 1 and the angle from the resulting
point to the 0, 0 coordinate will be the same as before.

##### Returns

`Point`

unit vector point

#### Constructor

> **new Point**(`x`: `number`, `y`: `number`): `Point`

A standalone point geometry with useful accessor, comparison, and
modification methods.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | the x-coordinate. This could be longitude or screen pixels, or any other sort of unit. |
| `y` | `number` | the y-coordinate. This could be latitude or screen pixels, or any other sort of unit. |

##### Returns

`Point`

##### Example

```ts
const point = new Point(-77, 38);
```

## LngLatBoundsLike

> **LngLatBoundsLike** = [`LngLatBounds`](#lnglatbounds) \| \[[`LngLatLike`](#lnglatlike), [`LngLatLike`](#lnglatlike)\] \| \[`number`, `number`, `number`, `number`\]

A [LngLatBounds](#lnglatbounds) object, an array of [LngLatLike](#lnglatlike) objects in [sw, ne] order,
or an array of numbers in [west, south, east, north] order.

### Example

```ts
let v1 = new LngLatBounds(
  new LngLat(-73.9876, 40.7661),
  new LngLat(-73.9397, 40.8002)
);
let v2 = new LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002])
let v3 = [[-73.9876, 40.7661], [-73.9397, 40.8002]];
```

## LngLatLike

> **LngLatLike** = [`LngLat`](#lnglat) \| \{ `lat`: `number`; `lng`: `number`; \} \| \{ `lat`: `number`; `lon`: `number`; \} \| \[`number`, `number`\]

A [LngLat](#lnglat) object, an array of two numbers representing longitude and latitude,
or an object with `lng` and `lat` or `lon` and `lat` properties.

### Example

```ts
let v1 = new LngLat(-122.420679, 37.772537);
let v2 = [-122.420679, 37.772537];
let v3 = {lon: -122.420679, lat: 37.772537};
```

## PointLike

> **PointLike** = [`Point`](#point-1) \| \[`number`, `number`\]

A [Point](https://github.com/mapbox/point-geometry) or an array of two numbers representing `x` and `y` screen coordinates in pixels.

### Example

```ts
let p1 = new Point(-77, 38); // a PointLike which is a Point
let p2 = [-77, 38]; // a PointLike which is an array of two numbers
```

## Evented

Methods mixed in to other classes for event capabilities.

### Extended by

- `StyleLayer`
- [`GeolocateControl`](#geolocatecontrol)
- [`FullscreenControl`](#fullscreencontrol)
- [`Popup`](#popup)
- [`Marker`](#marker)
- [`GeoJSONSource`](#geojsonsource)
- [`ImageSource`](#imagesource)
- [`RasterTileSource`](#rastertilesource)
- [`VectorTileSource`](#vectortilesource)
- [`Config`](#config)

### Methods

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Evented` \| `Promise`\<`any`\>

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Evented` \| `Promise`\<`any`\>

`this` or a promise if a listener is not provided

***

#### setEventedParent()

> **setEventedParent**(`parent?`: `Evented` \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | `Evented` \| `null` |
| `data?` | `any` |

##### Returns

`this`

## MapMouseEvent

`MapMouseEvent` is the event type for mouse-related map events.

### Example

```ts
// The `click` event is an example of a `MapMouseEvent`.
// Set up an event listener on the map.
map.on('click', (e) => {
  // The event object (e) contains information like the
  // coordinates of the point on the map that was clicked.
  console.log('A click event has occurred at ' + e.lngLat);
});
```

### Accessors

#### defaultPrevented

> **get** **defaultPrevented**(): `boolean`

`true` if `preventDefault` has been called.

###### Returns

`boolean`

### Methods

#### preventDefault()

> **preventDefault**(): `void`

Prevents subsequent default processing of the event by the map.

Calling this method will prevent the following default map behaviors:

  * On `mousedown` events, the behavior of [DragPanHandler](#dragpanhandler)
  * On `mousedown` events, the behavior of [DragRotateHandler](#dragrotatehandler)
  * On `mousedown` events, the behavior of [BoxZoomHandler](#boxzoomhandler)
  * On `dblclick` events, the behavior of [DoubleClickZoomHandler](#doubleclickzoomhandler)

##### Returns

`void`

### Properties

#### lngLat

> **lngLat**: [`LngLat`](#lnglat)

The geographic location on the map of the mouse cursor.

***

#### originalEvent

> **originalEvent**: `MouseEvent`

The DOM event which caused the map event.

***

#### point

> **point**: [`Point`](#point-1)

The pixel coordinates of the mouse cursor, relative to the map and measured from the top left corner.

***

#### target

> **target**: `Map`

The `Map` object that fired the event.

***

#### type

> **type**: `"click"` \| `"contextmenu"` \| `"dblclick"` \| `"mousemove"` \| `"mouseup"` \| `"mousedown"` \| `"mouseout"` \| `"mouseover"` \| `"mouseenter"` \| `"mouseleave"`

The event type

## MapTouchEvent

`MapTouchEvent` is the event type for touch-related map events.

### Accessors

#### defaultPrevented

> **get** **defaultPrevented**(): `boolean`

`true` if `preventDefault` has been called.

###### Returns

`boolean`

### Methods

#### preventDefault()

> **preventDefault**(): `void`

Prevents subsequent default processing of the event by the map.

Calling this method will prevent the following default map behaviors:

  * On `touchstart` events, the behavior of [DragPanHandler](#dragpanhandler)
  * On `touchstart` events, the behavior of [TwoFingersTouchZoomRotateHandler](#twofingerstouchzoomrotatehandler)

##### Returns

`void`

### Properties

#### lngLat

> **lngLat**: [`LngLat`](#lnglat)

The geographic location on the map of the center of the touch event points.

***

#### lngLats

> **lngLats**: [`LngLat`](#lnglat)[]

The geographical locations on the map corresponding to a
[touch event's `touches`](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches) property.

***

#### originalEvent

> **originalEvent**: `TouchEvent`

The DOM event which caused the map event.

***

#### point

> **point**: [`Point`](#point-1)

The pixel coordinates of the center of the touch event points, relative to the map and measured from the top left
corner.

***

#### points

> **points**: [`Point`](#point-1)[]

The array of pixel coordinates corresponding to a
[touch event's `touches`](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches) property.

***

#### target

> **target**: `Map`

The `Map` object that fired the event.

***

#### type

> **type**: `"touchcancel"` \| `"touchmove"` \| `"touchend"` \| `"touchstart"`

The event type.

## MapWheelEvent

`MapWheelEvent` is the event type for the `wheel` map event.

#### Constructor

> **new MapWheelEvent**(`type`: `string`, `map`: `Map`, `originalEvent`: `WheelEvent`): `MapWheelEvent`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `map` | `Map` |
| `originalEvent` | `WheelEvent` |

##### Returns

`MapWheelEvent`

### Accessors

#### defaultPrevented

> **get** **defaultPrevented**(): `boolean`

`true` if `preventDefault` has been called.

###### Returns

`boolean`

### Methods

#### preventDefault()

> **preventDefault**(): `void`

Prevents subsequent default processing of the event by the map.

Calling this method will prevent the behavior of [ScrollZoomHandler](#scrollzoomhandler).

##### Returns

`void`

### Properties

#### originalEvent

> **originalEvent**: `WheelEvent`

The DOM event which caused the map event.

***

#### target

> **target**: `Map`

The `Map` object that fired the event.

***

#### type

> **type**: `"wheel"`

The event type.

#### Constructor

> **new MapWheelEvent**(`type`: `string`, `map`: `Map`, `originalEvent`: `WheelEvent`): `MapWheelEvent`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `map` | `Map` |
| `originalEvent` | `WheelEvent` |

##### Returns

`MapWheelEvent`

## MapContextEvent

> **MapContextEvent** = `object`

An event related to the web gl context

## MapDataEvent

> **MapDataEvent** = `object`

A `MapDataEvent` object is emitted with the `data`
and `dataloading` events. Possible values for
`dataType`s are:

- `'source'`: The non-tile data associated with any source
- `'style'`: The [style](https://maplibre.org/maplibre-style-spec/) used by the map

Possible values for `sourceDataType`s are:

- `'metadata'`: indicates that any necessary source metadata has been loaded (such as TileJSON) and it is ok to start loading tiles
- `'content'`: indicates the source data has changed (such as when source.setData() has been called on GeoJSONSource)
- `'visibility'`: send when the source becomes used when at least one of its layers becomes visible in style sense (inside the layer's zoom range and with layout.visibility set to 'visible')
- `'idle'`: indicates that no new source data has been fetched (but the source has done loading)

### Example

```ts
// The sourcedata event is an example of MapDataEvent.
// Set up an event listener on the map.
map.on('sourcedata', (e) => {
   if (e.isSourceLoaded) {
       // Do something when the source has finished loading
   }
});
```

### Properties

#### dataType

> **dataType**: `string`

The type of data that has changed. One of `'source'`, `'style'`.

***

#### sourceDataType

> **sourceDataType**: `MapSourceDataType`

Included if the event has a `dataType` of `source` and the event signals that internal data has been received or changed. Possible values are `metadata`, `content`, `visibility` and `idle`.

***

#### type

> **type**: `string`

The event type.

## MapEventType

> **MapEventType** = `object`

`MapEventType` - a mapping between the event name and the event value.
These events are used with the [Map.on](#on) method.
When using a `layerId` with [Map.on](#on) method, please refer to [MapLayerEventType](#maplayereventtype).
The following example can be used for all the events.

### Example

```ts
// Initialize the map
let map = new Map({ // map options });
// Set an event listener
map.on('the-event-name', () => {
  console.log('An event has occurred!');
});
```

### Properties

#### boxzoomcancel

> **boxzoomcancel**: [`MapLibreZoomEvent`](#maplibrezoomevent)

Fired when the user cancels a "box zoom" interaction, or when the bounding box does not meet the minimum size threshold.
See [BoxZoomHandler](#boxzoomhandler).

***

#### boxzoomend

> **boxzoomend**: [`MapLibreZoomEvent`](#maplibrezoomevent)

Fired when a "box zoom" interaction ends.  See [BoxZoomHandler](#boxzoomhandler).

***

#### boxzoomstart

> **boxzoomstart**: [`MapLibreZoomEvent`](#maplibrezoomevent)

Fired when a "box zoom" interaction starts. See [BoxZoomHandler](#boxzoomhandler).

***

#### click

> **click**: [`MapMouseEvent`](#mapmouseevent)

Fired when a pointing device (usually a mouse) is pressed and released at the same point on the map.

##### See

 - [Measure distances](https://maplibre.org/maplibre-gl-js/docs/examples/measure-distances/)
 - [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-the-map-on-a-clicked-symbol/)

***

#### contextmenu

> **contextmenu**: [`MapMouseEvent`](#mapmouseevent)

Fired when the right button of the mouse is clicked or the context menu key is pressed within the map.

***

#### cooperativegestureprevented

> **cooperativegestureprevented**: [`MapLibreEvent`](#maplibreevent)\<`WheelEvent` \| `TouchEvent`\> & `object`

Fired whenever the cooperativeGestures option prevents a gesture from being handled by the map.
This is useful for showing your own UI when this happens.

##### Type Declaration

###### gestureType

> **gestureType**: `"wheel_zoom"` \| `"touch_pan"`

***

#### data

> **data**: [`MapDataEvent`](#mapdataevent)

Fired when any map data loads or changes. See [MapDataEvent](#mapdataevent) for more information.

##### See

[Display HTML clusters with custom properties](https://maplibre.org/maplibre-gl-js/docs/examples/display-html-clusters-with-custom-properties/)

***

#### dataabort

> **dataabort**: [`MapDataEvent`](#mapdataevent)

Fired when a request for one of the map's sources' tiles or data is aborted.

***

#### dataloading

> **dataloading**: [`MapDataEvent`](#mapdataevent)

Fired when any map data (style, source, tile, etc) begins loading or
changing asynchronously. All `dataloading` events are followed by a `data`,
`dataabort` or `error` event.

***

#### dblclick

> **dblclick**: [`MapMouseEvent`](#mapmouseevent)

Fired when a pointing device (usually a mouse) is pressed and released twice at the same point on the map in rapid succession.

!!! note
    Under normal conditions, this event will be preceded by two `click` events.

***

#### drag

> **drag**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `undefined`\>

Fired repeatedly during a "drag to pan" interaction. See [DragPanHandler](#dragpanhandler).

***

#### dragend

> **dragend**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `undefined`\>

Fired when a "drag to pan" interaction ends. See [DragPanHandler](#dragpanhandler).

##### See

[Create a draggable marker](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-marker/)

***

#### dragstart

> **dragstart**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `undefined`\>

Fired when a "drag to pan" interaction starts. See [DragPanHandler](#dragpanhandler).

***

#### error

> **error**: `ErrorEvent`

Fired when an error occurs. This is GL JS's primary error reporting
mechanism. We use an event instead of `throw` to better accommodate
asynchronous operations. If no listeners are bound to the `error` event, the
error will be printed to the console.

***

#### idle

> **idle**: [`MapLibreEvent`](#maplibreevent)

Fired after the last frame rendered before the map enters an
"idle" state:

- No camera transitions are in progress
- All currently requested tiles have loaded
- All fade/transition animations have completed

***

#### load

> **load**: [`MapLibreEvent`](#maplibreevent)

Fired immediately after all necessary resources have been downloaded
and the first visually complete rendering of the map has occurred.

##### See

 - [Draw GeoJSON points](https://maplibre.org/maplibre-gl-js/docs/examples/draw-geojson-points/)
 - [Add live realtime data](https://maplibre.org/maplibre-gl-js/docs/examples/add-live-realtime-data/)
 - [Animate a point](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-point/)

***

#### mousedown

> **mousedown**: [`MapMouseEvent`](#mapmouseevent)

Fired when a pointing device (usually a mouse) is pressed within the map.

##### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

#### mousemove

> **mousemove**: [`MapMouseEvent`](#mapmouseevent)

Fired when a pointing device (usually a mouse) is moved while the cursor is inside the map.
As you move the cursor across the map, the event will fire every time the cursor changes position within the map.

##### See

 - [Get coordinates of the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-coordinates-of-the-mouse-pointer/)
 - [Highlight features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/)
 - [Display a popup on over](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/)

***

#### mouseout

> **mouseout**: [`MapMouseEvent`](#mapmouseevent)

Fired when a point device (usually a mouse) leaves the map's canvas.

***

#### mouseover

> **mouseover**: [`MapMouseEvent`](#mapmouseevent)

Fired when a pointing device (usually a mouse) is moved within the map.
As you move the cursor across a web page containing a map,
the event will fire each time it enters the map or any child elements.

##### See

 - [Get coordinates of the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-coordinates-of-the-mouse-pointer/)
 - [Highlight features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/)
 - [Display a popup on hover](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/)

***

#### mouseup

> **mouseup**: [`MapMouseEvent`](#mapmouseevent)

Fired when a pointing device (usually a mouse) is released within the map.

##### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

#### move

> **move**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\>

Fired repeatedly during an animated transition from one view to
another, as the result of either user interaction or methods such as [Map.flyTo](#flyto).

##### See

[Display HTML clusters with custom properties](https://maplibre.org/maplibre-gl-js/docs/examples/display-html-clusters-with-custom-properties/)

***

#### moveend

> **moveend**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\>

Fired just after the map completes a transition from one
view to another, as the result of either user interaction or methods such as [Map.jumpTo](#jumpto).

##### See

[Display HTML clusters with custom properties](https://maplibre.org/maplibre-gl-js/docs/examples/display-html-clusters-with-custom-properties/)

***

#### movestart

> **movestart**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\>

Fired just before the map begins a transition from one
view to another, as the result of either user interaction or methods such as [Map.jumpTo](#jumpto).

***

#### pitch

> **pitch**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `undefined`\>

Fired repeatedly during the map's pitch (tilt) animation between
one state and another as the result of either user interaction
or methods such as [Map.flyTo](#flyto).

***

#### pitchend

> **pitchend**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `undefined`\>

Fired immediately after the map's pitch (tilt) finishes changing as
the result of either user interaction or methods such as [Map.flyTo](#flyto).

***

#### pitchstart

> **pitchstart**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `undefined`\>

Fired whenever the map's pitch (tilt) begins a change as
the result of either user interaction or methods such as [Map.flyTo](#flyto) .

***

#### projectiontransition

> **projectiontransition**: [`MapProjectionEvent`](#mapprojectionevent)

Fired when map's projection is modified in other ways than by map being moved.

***

#### remove

> **remove**: [`MapLibreEvent`](#maplibreevent)

Fired immediately after the map has been removed with [Map.remove](#remove).

***

#### render

> **render**: [`MapLibreEvent`](#maplibreevent)

Fired whenever the map is drawn to the screen, as the result of

- a change to the map's position, zoom, pitch, or bearing
- a change to the map's style
- a change to a GeoJSON source
- the loading of a vector tile, GeoJSON file, glyph, or sprite

***

#### resize

> **resize**: [`MapLibreEvent`](#maplibreevent)

Fired immediately after the map has been resized.

***

#### rotate

> **rotate**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `undefined`\>

Fired repeatedly during a "drag to rotate" interaction. See [DragRotateHandler](#dragrotatehandler).

***

#### rotateend

> **rotateend**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `undefined`\>

Fired when a "drag to rotate" interaction ends. See [DragRotateHandler](#dragrotatehandler).

***

#### rotatestart

> **rotatestart**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `undefined`\>

Fired when a "drag to rotate" interaction starts. See [DragRotateHandler](#dragrotatehandler).

***

#### sourcedata

> **sourcedata**: [`MapSourceDataEvent`](#mapsourcedataevent)

Fired when one of the map's sources loads or changes, including if a tile belonging
to a source loads or changes.

***

#### sourcedataabort

> **sourcedataabort**: [`MapSourceDataEvent`](#mapsourcedataevent)

Fired when a request for one of the map's sources' data is aborted.

***

#### sourcedataloading

> **sourcedataloading**: [`MapSourceDataEvent`](#mapsourcedataevent)

Fired when one of the map's sources begins loading or changing asynchronously.
All `sourcedataloading` events are followed by a `sourcedata`, `sourcedataabort` or `error` event.

***

#### styledata

> **styledata**: [`MapStyleDataEvent`](#mapstyledataevent)

Fired when the map's style loads or changes.

***

#### styledataloading

> **styledataloading**: [`MapStyleDataEvent`](#mapstyledataevent)

Fired when the map's style begins loading or changing asynchronously.
All `styledataloading` events are followed by a `styledata`
or `error` event.

***

#### styleimagemissing

> **styleimagemissing**: [`MapStyleImageMissingEvent`](#mapstyleimagemissingevent)

Fired when an icon or pattern needed by the style is missing. The missing image can
be added with [Map.addImage](#addimage) within this event listener callback to prevent the image from
being skipped. This event can be used to dynamically generate icons and patterns.

##### See

[Generate and add a missing icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/generate-and-add-a-missing-icon-to-the-map/)

***

#### terrain

> **terrain**: [`MapTerrainEvent`](#mapterrainevent)

Fired when terrain is changed

***

#### touchcancel

> **touchcancel**: [`MapTouchEvent`](#maptouchevent)

Fired when a [`touchcancel`](https://developer.mozilla.org/en-US/docs/Web/Events/touchcancel) event occurs within the map.

***

#### touchend

> **touchend**: [`MapTouchEvent`](#maptouchevent)

Fired when a [`touchend`](https://developer.mozilla.org/en-US/docs/Web/Events/touchend) event occurs within the map.

##### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

#### touchmove

> **touchmove**: [`MapTouchEvent`](#maptouchevent)

Fired when a [`touchmove`](https://developer.mozilla.org/en-US/docs/Web/Events/touchmove) event occurs within the map.

##### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

#### touchstart

> **touchstart**: [`MapTouchEvent`](#maptouchevent)

Fired when a [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) event occurs within the map.

##### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

#### webglcontextlost

> **webglcontextlost**: [`MapContextEvent`](#mapcontextevent)

Fired when the WebGL context is lost.

***

#### webglcontextrestored

> **webglcontextrestored**: [`MapContextEvent`](#mapcontextevent)

Fired when the WebGL context is restored.

***

#### wheel

> **wheel**: [`MapWheelEvent`](#mapwheelevent)

Fired when a [`wheel`](https://developer.mozilla.org/en-US/docs/Web/Events/wheel) event occurs within the map.

***

#### zoom

> **zoom**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\>

Fired repeatedly during an animated transition from one zoom level to another,
as the result of either user interaction or methods such as [Map.flyTo](#flyto).

***

#### zoomend

> **zoomend**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\>

Fired just after the map completes a transition from one zoom level to another,
as the result of either user interaction or methods such as [Map.flyTo](#flyto).

***

#### zoomstart

> **zoomstart**: [`MapLibreEvent`](#maplibreevent)\<`MouseEvent` \| `TouchEvent` \| `WheelEvent` \| `undefined`\>

Fired just before the map begins a transition from one zoom level to another,
as the result of either user interaction or methods such as [Map.flyTo](#flyto).

## MapLayerEventType

> **MapLayerEventType** = `object`

`MapLayerEventType` - a mapping between the event name and the event.
!!! note
    These events are compatible with the optional `layerId` parameter.
If `layerId` is included as the second argument in [Map.on](#on), the event listener will fire only when the
event action contains a visible portion of the specified layer.
The following example can be used for all the events.

### Example

```ts
// Initialize the map
let map = new Map({ // map options });
// Set an event listener for a specific layer
map.on('the-event-name', 'poi-label', (e) => {
  console.log('An event has occurred on a visible portion of the poi-label layer');
});
```

### Properties

#### click

> **click**: [`MapLayerMouseEvent`](#maplayermouseevent)

Fired when a pointing device (usually a mouse) is pressed and released contains a visible portion of the specified layer.

##### See

 - [Measure distances](https://maplibre.org/maplibre-gl-js/docs/examples/measure-distances/)
 - [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-the-map-on-a-clicked-symbol/)

***

#### contextmenu

> **contextmenu**: [`MapLayerMouseEvent`](#maplayermouseevent)

Fired when the right button of the mouse is clicked or the context menu key is pressed within visible portion of the specified layer.

***

#### dblclick

> **dblclick**: [`MapLayerMouseEvent`](#maplayermouseevent)

Fired when a pointing device (usually a mouse) is pressed and released twice contains a visible portion of the specified layer.

!!! note
    Under normal conditions, this event will be preceded by two `click` events.

***

#### mousedown

> **mousedown**: [`MapLayerMouseEvent`](#maplayermouseevent)

Fired when a pointing device (usually a mouse) is pressed while inside a visible portion of the specified layer.

##### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

#### mouseenter

> **mouseenter**: [`MapLayerMouseEvent`](#maplayermouseevent)

Fired when a pointing device (usually a mouse) enters a visible portion of a specified layer from
outside that layer or outside the map canvas.

##### See

 - [Center the map on a clicked symbol](https://maplibre.org/maplibre-gl-js/docs/examples/center-the-map-on-a-clicked-symbol/)
 - [Display a popup on click](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-click/)

***

#### mouseleave

> **mouseleave**: [`MapLayerMouseEvent`](#maplayermouseevent)

Fired when a pointing device (usually a mouse) leaves a visible portion of a specified layer, or leaves
the map canvas.

##### See

 - [Highlight features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/)
 - [Display a popup on click](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-click/)

***

#### mousemove

> **mousemove**: [`MapLayerMouseEvent`](#maplayermouseevent)

Fired when a pointing device (usually a mouse) is moved while the cursor is inside a visible portion of the specified layer.
As you move the cursor across the layer, the event will fire every time the cursor changes position within that layer.

##### See

 - [Get coordinates of the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-coordinates-of-the-mouse-pointer/)
 - [Highlight features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/)
 - [Display a popup on over](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/)
 - [Animate symbol to follow the mouse](https://maplibre.org/maplibre-gl-js/docs/examples/animate-symbol-to-follow-the-mouse/)

***

#### mouseout

> **mouseout**: [`MapLayerMouseEvent`](#maplayermouseevent)

Fired when a point device (usually a mouse) leaves the visible portion of the specified layer.

***

#### mouseover

> **mouseover**: [`MapLayerMouseEvent`](#maplayermouseevent)

Fired when a pointing device (usually a mouse) is moved inside a visible portion of the specified layer.

##### See

 - [Get coordinates of the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/get-coordinates-of-the-mouse-pointer/)
 - [Highlight features under the mouse pointer](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-hover-effect/)
 - [Display a popup on hover](https://maplibre.org/maplibre-gl-js/docs/examples/display-a-popup-on-hover/)

***

#### mouseup

> **mouseup**: [`MapLayerMouseEvent`](#maplayermouseevent)

Fired when a pointing device (usually a mouse) is released while inside a visible portion of the specified layer.

##### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

#### touchcancel

> **touchcancel**: [`MapLayerTouchEvent`](#maplayertouchevent)

Fired when a [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) event occurs within the visible portion of the specified layer.

##### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

#### touchend

> **touchend**: [`MapLayerTouchEvent`](#maplayertouchevent)

Fired when a [`touchend`](https://developer.mozilla.org/en-US/docs/Web/Events/touchend) event occurs within the visible portion of the specified layer.

##### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

***

#### touchstart

> **touchstart**: [`MapLayerTouchEvent`](#maplayertouchevent)

Fired when a [`touchstart`](https://developer.mozilla.org/en-US/docs/Web/Events/touchstart) event occurs within the visible portion of the specified layer.

##### See

[Create a draggable point](https://maplibre.org/maplibre-gl-js/docs/examples/create-a-draggable-point/)

## MapLayerMouseEvent

> **MapLayerMouseEvent** = [`MapMouseEvent`](#mapmouseevent) & `object`

An event from the mouse relevant to a specific layer.

### Type Declaration

#### features?

> `optional` **features?**: `MapGeoJSONFeature`[]

## MapLayerTouchEvent

> **MapLayerTouchEvent** = [`MapTouchEvent`](#maptouchevent) & `object`

An event from a touch device relevant to a specific layer.

### Type Declaration

#### features?

> `optional` **features?**: `MapGeoJSONFeature`[]

## MapLibreEvent\<TOrig\>

> **MapLibreEvent**\<`TOrig`\> = `object`

The base event for MapLibre

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TOrig` | `unknown` |

## MapLibreZoomEvent

> **MapLibreZoomEvent** = `object`

A `MapLibreZoomEvent` is the event type for the boxzoom-related map events emitted by the [BoxZoomHandler](#boxzoomhandler).

### Properties

#### originalEvent

> **originalEvent**: `MouseEvent`

The DOM event that triggered the boxzoom event. Can be a `MouseEvent` or `KeyboardEvent`

***

#### target

> **target**: `Map`

The `Map` instance that triggered the event

***

#### type

> **type**: `"boxzoomstart"` \| `"boxzoomend"` \| `"boxzoomcancel"`

The type of boxzoom event. One of `boxzoomstart`, `boxzoomend` or `boxzoomcancel`

## MapProjectionEvent

> **MapProjectionEvent** = `object`

The map projection event

### Properties

#### newProjection

> **newProjection**: `ProjectionSpecification`\[`"type"`\]

Specifies the name of the new projection.
For example:

 - `globe` to describe globe that has internally switched to mercator
 - `vertical-perspective` to describe a globe that doesn't change to mercator
 - `mercator` to describe mercator projection

## MapSourceDataEvent

> **MapSourceDataEvent** = [`MapLibreEvent`](#maplibreevent) & `object`

The source data event interface

### Type Declaration

#### dataType

> **dataType**: `"source"`

#### isSourceLoaded

> **isSourceLoaded**: `boolean`

True if the event has a `dataType` of `source` and the source has no outstanding network requests.

#### source

> **source**: `SourceSpecification`

The [style spec representation of the source](https://maplibre.org/maplibre-style-spec/#sources) if the event has a `dataType` of `source`.

#### sourceDataChanged?

> `optional` **sourceDataChanged?**: `boolean`

#### sourceDataType

> **sourceDataType**: `MapSourceDataType`

#### sourceId

> **sourceId**: `string`

#### tile

> **tile**: `any`

The tile being loaded or changed, if the event has a `dataType` of `source` and
the event is related to loading of a tile.

## MapStyleDataEvent

> **MapStyleDataEvent** = [`MapLibreEvent`](#maplibreevent) & `object`

The style data event

### Type Declaration

#### dataType

> **dataType**: `"style"`

## MapStyleImageMissingEvent

> **MapStyleImageMissingEvent** = [`MapLibreEvent`](#maplibreevent) & `object`

The style image missing event

### Type Declaration

#### id

> **id**: `string`

#### type

> **type**: `"styleimagemissing"`

### See

[Generate and add a missing icon to the map](https://maplibre.org/maplibre-gl-js/docs/examples/generate-and-add-a-missing-icon-to-the-map/)

## MapTerrainEvent

> **MapTerrainEvent** = `object`

The terrain event

## BoxZoomHandler

The `BoxZoomHandler` allows the user to zoom the map to fit within a bounding box.
The bounding box is defined by clicking and holding `shift` while dragging the cursor.

### Methods

#### disable()

> **disable**(): `void`

Disables the "box zoom" interaction.

##### Returns

`void`

##### Example

```ts
map.boxZoom.disable();
```

***

#### enable()

> **enable**(): `void`

Enables the "box zoom" interaction.

##### Returns

`void`

##### Example

```ts
map.boxZoom.enable();
```

***

#### isActive()

> **isActive**(): `boolean`

Returns a Boolean indicating whether the "box zoom" interaction is active, i.e. currently being used.

##### Returns

`boolean`

`true` if the "box zoom" interaction is active.

***

#### isEnabled()

> **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "box zoom" interaction is enabled.

##### Returns

`boolean`

`true` if the "box zoom" interaction is enabled.

***

#### reset()

> **reset**(): `void`

`reset` can be called by the manager at any time and must reset everything to it's original state

##### Returns

`void`

## CooperativeGesturesHandler

A `CooperativeGestureHandler` is a control that adds cooperative gesture info when user tries to zoom in/out.

When the CooperativeGestureHandler blocks a gesture, it will emit a `cooperativegestureprevented` event.

### Example

```ts
const map = new Map({
  cooperativeGestures: true
});
```

### See

[Example: cooperative gestures](https://maplibre.org/maplibre-gl-js/docs/examples/cooperative-gestures/)

### Methods

#### isActive()

> **isActive**(): `boolean`

This is used to indicate if the handler is currently active or not.
In case a handler is active, it will block other handlers from getting the relevant events.
There is an allow list of handlers that can be active at the same time, which is configured when adding a handler.

##### Returns

`boolean`

***

#### reset()

> **reset**(): `void`

`reset` can be called by the manager at any time and must reset everything to it's original state

##### Returns

`void`

### Properties

#### \_bypassKey

> **\_bypassKey**: `"metaKey"` \| `"ctrlKey"`

This is the key that will allow to bypass the cooperative gesture protection

## DoubleClickZoomHandler

The `DoubleClickZoomHandler` allows the user to zoom the map at a point by
double clicking or double tapping.

### Methods

#### disable()

> **disable**(): `void`

Disables the "double click to zoom" interaction.

##### Returns

`void`

##### Example

```ts
map.doubleClickZoom.disable();
```

***

#### enable()

> **enable**(): `void`

Enables the "double click to zoom" interaction.

##### Returns

`void`

##### Example

```ts
map.doubleClickZoom.enable();
```

***

#### isActive()

> **isActive**(): `boolean`

Returns a Boolean indicating whether the "double click to zoom" interaction is active, i.e. currently being used.

##### Returns

`boolean`

`true` if the "double click to zoom" interaction is active.

***

#### isEnabled()

> **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "double click to zoom" interaction is enabled.

##### Returns

`boolean`

`true` if the "double click to zoom" interaction is enabled.

## DragPanHandler

The `DragPanHandler` allows the user to pan the map by clicking and dragging
the cursor.

### Methods

#### disable()

> **disable**(): `void`

Disables the "drag to pan" interaction.

##### Returns

`void`

##### Example

```ts
map.dragPan.disable();
```

***

#### enable()

> **enable**(`options?`: `boolean` \| [`DragPanOptions`](#dragpanoptions)): `void`

Enables the "drag to pan" interaction.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | `boolean` \| [`DragPanOptions`](#dragpanoptions) | Options object |

##### Returns

`void`

##### Example

```ts
  map.dragPan.enable();
  map.dragPan.enable({
     linearity: 0.3,
     easing: bezier(0, 0, 0.3, 1),
     maxSpeed: 1400,
     deceleration: 2500,
  });
```

***

#### isActive()

> **isActive**(): `boolean`

Returns a Boolean indicating whether the "drag to pan" interaction is active, i.e. currently being used.

##### Returns

`boolean`

`true` if the "drag to pan" interaction is active.

***

#### isEnabled()

> **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "drag to pan" interaction is enabled.

##### Returns

`boolean`

`true` if the "drag to pan" interaction is enabled.

## DragRotateHandler

The `DragRotateHandler` allows the user to rotate the map by clicking and
dragging the cursor while holding the right mouse button or `ctrl` key.

### Methods

#### disable()

> **disable**(): `void`

Disables the "drag to rotate" interaction.

##### Returns

`void`

##### Example

```ts
map.dragRotate.disable();
```

***

#### enable()

> **enable**(): `void`

Enables the "drag to rotate" interaction.

##### Returns

`void`

##### Example

```ts
map.dragRotate.enable();
```

***

#### isActive()

> **isActive**(): `boolean`

Returns a Boolean indicating whether the "drag to rotate" interaction is active, i.e. currently being used.

##### Returns

`boolean`

`true` if the "drag to rotate" interaction is active.

***

#### isEnabled()

> **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "drag to rotate" interaction is enabled.

##### Returns

`boolean`

`true` if the "drag to rotate" interaction is enabled.

## KeyboardHandler

The `KeyboardHandler` allows the user to zoom, rotate, and pan the map using
the following keyboard shortcuts:

- `=` / `+`: Increase the zoom level by 1.
- `Shift-=` / `Shift-+`: Increase the zoom level by 2.
- `-`: Decrease the zoom level by 1.
- `Shift--`: Decrease the zoom level by 2.
- Arrow keys: Pan by 100 pixels.
- `Shift+⇢`: Increase the rotation by 15 degrees.
- `Shift+⇠`: Decrease the rotation by 15 degrees.
- `Shift+⇡`: Increase the pitch by 10 degrees.
- `Shift+⇣`: Decrease the pitch by 10 degrees.

### Methods

#### disable()

> **disable**(): `void`

Disables the "keyboard rotate and zoom" interaction.

##### Returns

`void`

##### Example

```ts
map.keyboard.disable();
```

***

#### disableRotation()

> **disableRotation**(): `void`

Disables the "keyboard pan/rotate" interaction, leaving the
"keyboard zoom" interaction enabled.

##### Returns

`void`

##### Example

```ts
map.keyboard.disableRotation();
```

***

#### enable()

> **enable**(): `void`

Enables the "keyboard rotate and zoom" interaction.

##### Returns

`void`

##### Example

```ts
map.keyboard.enable();
```

***

#### enableRotation()

> **enableRotation**(): `void`

Enables the "keyboard pan/rotate" interaction.

##### Returns

`void`

##### Example

```ts
map.keyboard.enable();
map.keyboard.enableRotation();
```

***

#### isActive()

> **isActive**(): `boolean`

Returns true if the handler is enabled and has detected the start of a
zoom/rotate gesture.

##### Returns

`boolean`

`true` if the handler is enabled and has detected the
start of a zoom/rotate gesture.

***

#### isEnabled()

> **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "keyboard rotate and zoom"
interaction is enabled.

##### Returns

`boolean`

`true` if the "keyboard rotate and zoom"
interaction is enabled.

***

#### reset()

> **reset**(): `void`

`reset` can be called by the manager at any time and must reset everything to it's original state

##### Returns

`void`

## ScrollZoomHandler

The `ScrollZoomHandler` allows the user to zoom the map by scrolling.

### Methods

#### \_shouldBePrevented()

> **\_shouldBePrevented**(`e`: `WheelEvent`): `boolean`

Determines whether or not the gesture is blocked due to cooperativeGestures.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `e` | `WheelEvent` |

##### Returns

`boolean`

***

#### disable()

> **disable**(): `void`

Disables the "scroll to zoom" interaction.

##### Returns

`void`

##### Example

```ts
map.scrollZoom.disable();
```

***

#### enable()

> **enable**(`options?`: `boolean` \| [`AroundCenterOptions`](#aroundcenteroptions)): `void`

Enables the "scroll to zoom" interaction.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | `boolean` \| [`AroundCenterOptions`](#aroundcenteroptions) | Options object. |

##### Returns

`void`

##### Example

```ts
map.scrollZoom.enable();
map.scrollZoom.enable({ around: 'center' })
```

***

#### isActive()

> **isActive**(): `boolean`

This is used to indicate if the handler is currently active or not.
In case a handler is active, it will block other handlers from getting the relevant events.
There is an allow list of handlers that can be active at the same time, which is configured when adding a handler.

##### Returns

`boolean`

***

#### isEnabled()

> **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "scroll to zoom" interaction is enabled.

##### Returns

`boolean`

`true` if the "scroll to zoom" interaction is enabled.

***

#### renderFrame()

> **renderFrame**(): `object`

`renderFrame` is the only non-dom event. It is called during render
frames and can be used to smooth camera changes (see scroll handler).

##### Returns

`object`

###### around

> **around**: [`Point`](#point-1)

###### needsRenderFrame

> **needsRenderFrame**: `boolean`

###### noInertia

> **noInertia**: `boolean`

###### originalEvent

> **originalEvent**: `any`

###### zoomDelta

> **zoomDelta**: `number`

***

#### reset()

> **reset**(): `void`

`reset` can be called by the manager at any time and must reset everything to it's original state

##### Returns

`void`

***

#### setWheelZoomRate()

> **setWheelZoomRate**(`wheelZoomRate`: `number`): `void`

Set the zoom rate of a mouse wheel

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `wheelZoomRate` | `number` | 1/450 The rate used to scale mouse wheel movement to a zoom value. |

##### Returns

`void`

##### Example

Slow down zoom of mouse wheel
```ts
map.scrollZoom.setWheelZoomRate(1/600);
```

***

#### setZoomRate()

> **setZoomRate**(`zoomRate`: `number`): `void`

Set the zoom rate of a trackpad

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zoomRate` | `number` | 1/100 The rate used to scale trackpad movement to a zoom value. |

##### Returns

`void`

##### Example

Speed up trackpad zoom
```ts
map.scrollZoom.setZoomRate(1/25);
```

## TwoFingersTouchPitchHandler

The `TwoFingersTouchPitchHandler` allows the user to pitch the map by dragging up and down with two fingers.

### Methods

#### disable()

> **disable**(): `void`

Disables the "drag to pitch" interaction.

##### Returns

`void`

##### Example

```ts
map.touchPitch.disable();
```

***

#### enable()

> **enable**(`options?`: `boolean` \| [`AroundCenterOptions`](#aroundcenteroptions) \| `null`): `void`

Enables the "drag to pitch" interaction.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | `boolean` \| [`AroundCenterOptions`](#aroundcenteroptions) \| `null` |

##### Returns

`void`

##### Example

```ts
map.touchPitch.enable();
```

***

#### isActive()

> **isActive**(): `boolean`

Returns a Boolean indicating whether the "drag to pitch" interaction is active, i.e. currently being used.

##### Returns

`boolean`

`true` if the "drag to pitch" interaction is active.

***

#### isEnabled()

> **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "drag to pitch" interaction is enabled.

##### Returns

`boolean`

`true` if the "drag to pitch" interaction is enabled.

## TwoFingersTouchRotateHandler

The `TwoFingersTouchHandler`s allows the user to rotate the map two fingers

### Methods

#### disable()

> **disable**(): `void`

Disables the "drag to pitch" interaction.

##### Returns

`void`

##### Example

```ts
map.touchPitch.disable();
```

***

#### enable()

> **enable**(`options?`: `boolean` \| [`AroundCenterOptions`](#aroundcenteroptions) \| `null`): `void`

Enables the "drag to pitch" interaction.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | `boolean` \| [`AroundCenterOptions`](#aroundcenteroptions) \| `null` |

##### Returns

`void`

##### Example

```ts
map.touchPitch.enable();
```

***

#### isActive()

> **isActive**(): `boolean`

Returns a Boolean indicating whether the "drag to pitch" interaction is active, i.e. currently being used.

##### Returns

`boolean`

`true` if the "drag to pitch" interaction is active.

***

#### isEnabled()

> **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "drag to pitch" interaction is enabled.

##### Returns

`boolean`

`true` if the "drag to pitch" interaction is enabled.

## TwoFingersTouchZoomHandler

The `TwoFingersTouchHandler`s allows the user to zoom the map two fingers

### Methods

#### disable()

> **disable**(): `void`

Disables the "drag to pitch" interaction.

##### Returns

`void`

##### Example

```ts
map.touchPitch.disable();
```

***

#### enable()

> **enable**(`options?`: `boolean` \| [`AroundCenterOptions`](#aroundcenteroptions) \| `null`): `void`

Enables the "drag to pitch" interaction.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | `boolean` \| [`AroundCenterOptions`](#aroundcenteroptions) \| `null` |

##### Returns

`void`

##### Example

```ts
map.touchPitch.enable();
```

***

#### isActive()

> **isActive**(): `boolean`

Returns a Boolean indicating whether the "drag to pitch" interaction is active, i.e. currently being used.

##### Returns

`boolean`

`true` if the "drag to pitch" interaction is active.

***

#### isEnabled()

> **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "drag to pitch" interaction is enabled.

##### Returns

`boolean`

`true` if the "drag to pitch" interaction is enabled.

***

#### setZoomRate()

> **setZoomRate**(`zoomRate?`: `number`): `void`

Sets the zoom rate of touch gestures.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zoomRate?` | `number` | 1 The rate used to scale touch movement to a zoom value. Set to `undefined` to restore the default. |

##### Returns

`void`

##### Example

Slow down touch zoom
```ts
map.touchZoomRotate.setZoomRate(0.5);
```

***

#### setZoomThreshold()

> **setZoomThreshold**(`zoomThreshold?`: `number`): `void`

Sets the threshold before a pinch gesture starts zooming.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zoomThreshold?` | `number` | 0.1 The minimum zoom delta before the pinch gesture becomes active. Set to `undefined` to restore the default. |

##### Returns

`void`

##### Example

Make pinch zoom less sensitive
```ts
map.touchZoomRotate.setZoomThreshold(0.3);
```

## TwoFingersTouchZoomRotateHandler

The `TwoFingersTouchZoomRotateHandler` allows the user to zoom and rotate the map by
pinching on a touchscreen.

They can zoom with one finger by double tapping and dragging. On the second tap,
hold the finger down and drag up or down to zoom in or out.

### Methods

#### disable()

> **disable**(): `void`

Disables the "pinch to rotate and zoom" interaction.

##### Returns

`void`

##### Example

```ts
map.touchZoomRotate.disable();
```

***

#### disableRotation()

> **disableRotation**(): `void`

Disables the "pinch to rotate" interaction, leaving the "pinch to zoom"
interaction enabled.

##### Returns

`void`

##### Example

```ts
map.touchZoomRotate.disableRotation();
```

***

#### enable()

> **enable**(`options?`: `boolean` \| [`AroundCenterOptions`](#aroundcenteroptions) \| `null`): `void`

Enables the "pinch to rotate and zoom" interaction.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | `boolean` \| [`AroundCenterOptions`](#aroundcenteroptions) \| `null` | Options object. |

##### Returns

`void`

##### Example

```ts
map.touchZoomRotate.enable();
map.touchZoomRotate.enable({ around: 'center' });
```

***

#### enableRotation()

> **enableRotation**(): `void`

Enables the "pinch to rotate" interaction.

##### Returns

`void`

##### Example

```ts
map.touchZoomRotate.enable();
map.touchZoomRotate.enableRotation();
```

***

#### isActive()

> **isActive**(): `boolean`

Returns true if the handler is enabled and has detected the start of a zoom/rotate gesture.

##### Returns

`boolean`

`true` if the handler is active, `false` otherwise

***

#### isEnabled()

> **isEnabled**(): `boolean`

Returns a Boolean indicating whether the "pinch to rotate and zoom" interaction is enabled.

##### Returns

`boolean`

`true` if the "pinch to rotate and zoom" interaction is enabled.

***

#### setZoomRate()

> **setZoomRate**(`zoomRate?`: `number`): `void`

Sets the zoom rate of touch gestures.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zoomRate?` | `number` | 1 The rate used to scale touch movement to a zoom value. Set to `undefined` to restore the default. |

##### Returns

`void`

##### Example

Slow down touch zoom
```ts
map.touchZoomRotate.setZoomRate(0.5);
```

***

#### setZoomThreshold()

> **setZoomThreshold**(`zoomThreshold?`: `number`): `void`

Sets the threshold before a pinch gesture starts zooming.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `zoomThreshold?` | `number` | 0.1 The minimum zoom delta before the pinch gesture becomes active. Set to `undefined` to restore the default. |

##### Returns

`void`

##### Example

Make pinch zoom less sensitive
```ts
map.touchZoomRotate.setZoomThreshold(0.3);
```

## DragPanOptions

> **DragPanOptions** = `object`

A [DragPanHandler](#dragpanhandler) options object

### Properties

#### deceleration?

> `optional` **deceleration?**: `number`

the maximum value of the drag velocity.

##### Default Value

```ts
1400
```

***

#### easing?

> `optional` **easing?**: (`t`: `number`) => `number`

easing function applied to `map.panTo` when applying the drag.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `t` | `number` | the easing function |

##### Returns

`number`

##### Default Value

```ts
bezier(0, 0, 0.3, 1)
```

***

#### linearity?

> `optional` **linearity?**: `number`

factor used to scale the drag velocity

##### Default Value

```ts
0
```

***

#### maxSpeed?

> `optional` **maxSpeed?**: `number`

the rate at which the speed reduces after the pan ends.

##### Default Value

```ts
2500
```

## Config <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

The `Config` class manages configuration settings for the whole library.
It provides access to settings such as API key, locale, and host URLs for various services.

#### locale

> **get** **locale**(): `string`

Gets the current locale.

###### Returns

`string`

The current locale.

> **set** **locale**(`value`: `string`): `void`

Sets the locale.

###### Fires

config.locale.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new locale to set. |

###### Returns

`void`

locale

### Accessors

#### apiKey

> **get** **apiKey**(): `string`

Gets the current Maptoolkit API key.

###### Throws

Logs a warning to the console if the API key is not set.

###### Returns

`string`

The current API key.

> **set** **apiKey**(`value`: `string`): `void`

Sets the Maptoolkit API key.

###### Fires

config.apiKey.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new API key to set. |

###### Returns

`void`

***

#### dataconnectorCdnHost

> **get** **dataconnectorCdnHost**(): `string`

Gets the base URL for the Maptoolkit data connector service.

###### Returns

`string`

The base data connector host URL.

> **set** **dataconnectorCdnHost**(`value`: `string`): `void`

Sets the base URL for the Maptoolkit data connector service.

###### Fires

config.dataconnectorHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new data connector host URL to set. |

###### Returns

`void`

***

#### dataconnectorHost

> **get** **dataconnectorHost**(): `string`

Gets the base URL for the Maptoolkit data connector service.

###### Returns

`string`

The base data connector host URL.

> **set** **dataconnectorHost**(`value`: `string`): `void`

Sets the base URL for the Maptoolkit data connector service.

###### Fires

config.dataconnectorHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new data connector host URL to set. |

###### Returns

`void`

***

#### dataHost

> **get** **dataHost**(): `string`

Gets the base URL for the Maptoolkit data connector service.

###### Returns

`string`

The base data connector host URL.

> **set** **dataHost**(`value`: `string`): `void`

Sets the base URL for the Maptoolkit data connector service.

###### Fires

config.dataHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new data connector host URL to set. |

###### Returns

`void`

***

#### geocoderHost

> **get** **geocoderHost**(): `string`

Gets the base URL for the Maptoolkit geocoding service.

###### Returns

`string`

The base geocoding host URL.

> **set** **geocoderHost**(`value`: `string`): `void`

Sets the base URL for the Maptoolkit geocoding service.

###### Fires

config.geocoderHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new geocoding host URL to set. |

###### Returns

`void`

***

#### iconsHost

> **get** **iconsHost**(): `string`

Gets the base URL for Maptoolkit icons.

###### Returns

`string`

The base icons host URL.

> **set** **iconsHost**(`value`: `string`): `void`

Sets the base URL for Maptoolkit icons.

###### Fires

config.iconsHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new icons host URL to set. |

###### Returns

`void`

***

#### pixelRatio

> **get** **pixelRatio**(): `number`

Gets the current pixel ratio setting.

###### Returns

`number`

The current pixel ratio.

> **set** **pixelRatio**(`value`: `number`): `void`

Sets the pixel ratio setting.

###### Fires

config.pixelRatio.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | The new pixel ratio to set. |

###### Returns

`void`

***

#### routingHost

> **get** **routingHost**(): `string`

Gets the base URL for the Maptoolkit routing service.

###### Returns

`string`

The base routing host URL.

> **set** **routingHost**(`value`: `string`): `void`

Sets the base URL for the Maptoolkit routing service.

###### Fires

config.routingHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new routing host URL to set. |

###### Returns

`void`

***

#### rtcCdnHost

> **get** **rtcCdnHost**(): `string`

Gets the base URL for the RTC CDN service.

###### Returns

`string`

The base RTC CDN host URL.

> **set** **rtcCdnHost**(`value`: `string`): `void`

Sets the base URL for the RTC CDN service.

###### Fires

config.rtcCdnHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new RTC CDN host URL to set. |

###### Returns

`void`

***

#### staticHost

> **get** **staticHost**(): `string`

Gets the base URL for static resources.

###### Returns

`string`

The base static host URL.

> **set** **staticHost**(`value`: `string`): `void`

Sets the base URL for static resources.

###### Fires

config.staticHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new static host URL to set. |

###### Returns

`void`

***

#### staticmapHost

> **get** **staticmapHost**(): `string`

Gets the base URL for the Maptoolkit static map service.

###### Returns

`string`

The base static map host URL.

> **set** **staticmapHost**(`value`: `string`): `void`

Sets the base URL for the Maptoolkit static map service.

###### Fires

config.staticmapHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new static map host URL to set. |

###### Returns

`void`

***

#### stylesHost

> **get** **stylesHost**(): `string`

Gets the base URL for Maptoolkit style resources.

###### Returns

`string`

The base styles host URL.

> **set** **stylesHost**(`value`: `string`): `void`

Sets the base URL for Maptoolkit style resources.

###### Fires

config.stylesHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new styles host URL to set. |

###### Returns

`void`

***

#### vtcCdnHost

> **get** **vtcCdnHost**(): `string`

Gets the base URL for the VTC CDN service.

###### Returns

`string`

The base VTC CDN host URL.

> **set** **vtcCdnHost**(`value`: `string`): `void`

Sets the base URL for the VTC CDN service.

###### Fires

config.vtcCdnHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new VTC CDN host URL to set. |

###### Returns

`void`

***

#### vtcHost

> **get** **vtcHost**(): `string`

Gets the base URL for the VTC service.

###### Returns

`string`

The base VTC host URL.

> **set** **vtcHost**(`value`: `string`): `void`

Sets the base URL for the VTC service.

###### Fires

config.vtcHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new VTC host URL to set. |

###### Returns

`void`

***

#### webHost

> **get** **webHost**(): `string`

Gets the base URL for the Maptoolkit website.

###### Returns

`string`

The base web host URL.

> **set** **webHost**(`value`: `string`): `void`

Sets the base URL for the Maptoolkit website.

###### Fires

config.webHost.set

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `string` | The new web host URL to set. |

###### Returns

`void`

### Methods

#### listens()

> **listens**(`type`: `string`): `boolean`

Returns a true if this instance of Evented or any forwardeed instances of Evented have a listener for the specified type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type |

##### Returns

`boolean`

`true` if there is at least one registered listener for specified event type, `false` otherwise

***

#### off()

> **off**(`type`: `string`, `listener`: `Listener`): `this`

Removes a previously registered event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to remove listeners for. |
| `listener` | `Listener` | The listener function to remove. |

##### Returns

`this`

***

#### on()

> **on**(`type`: `string`, `listener`: `Listener`): `Subscription`

Adds a listener to a specified event type.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to add a listen for. |
| `listener` | `Listener` | The function to be called when the event is fired. The listener function is called with the data object passed to `fire`, extended with `target` and `type` properties. |

##### Returns

`Subscription`

***

#### once()

> **once**(`type`: `string`, `listener?`: `Listener`): `Config` \| `Promise`\<`any`\>

Adds a listener that will be called only once to a specified event type.

The listener will be called first time the event fires after the listener is registered.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | `string` | The event type to listen for. |
| `listener?` | `Listener` | The function to be called when the event is fired the first time. |

##### Returns

`Config` \| `Promise`\<`any`\>

`this` or a promise if a listener is not provided

***

#### setEventedParent()

> **setEventedParent**(`parent?`: [`Evented`](#evented) \| `null`, `data?`: `any`): `this`

Bubble all events fired by this instance of Evented to this parent instance of Evented.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `parent?` | [`Evented`](#evented) \| `null` |
| `data?` | `any` |

##### Returns

`this`

## LocaleSpecification

> **LocaleSpecification** = `object`

LocaleSpecification

### Index Signature

\[`_`: `string`\]: `object`

## config <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> `const` **config**: [`Config`](#config)

The global configuration instance for the Maptoolkit SDK.

Use this singleton to set the API key, locale, and service host URLs.

### Example

```ts
import { config } from "@maptoolkit/maps";
config.apiKey = "YOUR_API_KEY";
```

## locale <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> `const` **locale**: [`LocaleSpecification`](#localespecification)

Locale translations for the application.

## STYLES <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> `const` **STYLES**: `object`

Collection of pre-defined map styles.

### Type Declaration

#### CITY

> **CITY**: `string` = `"maptoolkit://styles/citymaps2go/Ulmon"`

#### DARK

> **DARK**: `string` = `"maptoolkit://styles/toursprung/dark"`

#### GREEN

> **GREEN**: `string` = `"maptoolkit://styles/toursprung/printmaps-green"`

#### LIGHT

> **LIGHT**: `string` = `"maptoolkit://styles/toursprung/light"`

#### TERRAIN

> **TERRAIN**: `string` = `"maptoolkit://styles/toursprung/terrain"`

TERRAIN

#### WINTER

> **WINTER**: `string` = `"maptoolkit://styles/toursprung/terrainwinter"`

## TERRAIN <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> `const` **TERRAIN**: `maplibreSourceSpecification`

Terrain source specification.

## CustomLayerInterface

Interface for custom style layers. This is a specification for
implementers to model: it is not an exported method or class.

Custom layers allow a user to render directly into the map's GL context using the map's camera.
These layers can be added between any regular layers using [Map.addLayer](#addlayer).

Custom layers must have a unique `id` and must have the `type` of `"custom"`.
They must implement `render` and may implement `prerender`, `onAdd` and `onRemove`.
They can trigger rendering using [Map.triggerRepaint](#triggerrepaint)
and they should appropriately handle [MapContextEvent](#mapcontextevent) with `webglcontextlost` and `webglcontextrestored`.

The `renderingMode` property controls whether the layer is treated as a `"2d"` or `"3d"` map layer. Use:

- `"renderingMode": "3d"` to use the depth buffer and share it with other layers
- `"renderingMode": "2d"` to add a layer with no depth. If you need to use the depth buffer for a `"2d"` layer you must use an offscreen
  framebuffer and [CustomLayerInterface.prerender](#prerender)

### Example

Custom layer implemented as ES6 class
```ts
class NullIslandLayer {
    constructor() {
        this.id = 'null-island';
        this.type = 'custom';
        this.renderingMode = '2d';
    }

     onAdd(map: maplibregl.Map, gl: WebGLRenderingContext | WebGL2RenderingContext) {
        const vertexSource = `
        uniform mat4 u_matrix;
        void main() {
            gl_Position = u_matrix * vec4(0.5, 0.5, 0.0, 1.0);
            gl_PointSize = 20.0;
        }`;

        const fragmentSource = `
        void main() {
            fragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }`;

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexSource);
        gl.compileShader(vertexShader);
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentSource);
        gl.compileShader(fragmentShader);

        this.program = gl.createProgram();
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);
    }

    render({
     gl,
     modelViewProjectionMatrix: matrix
     }: {
     gl: WebGLRenderingContext | WebGL2RenderingContext;
     modelViewProjectionMatrix: Float32Array;
     }) {
        gl.useProgram(this.program);
        gl.uniformMatrix4fv(gl.getUniformLocation(this.program, "u_matrix"), false, matrix);
        gl.drawArrays(gl.POINTS, 0, 1);
    }
}

map.on('load', () => {
    map.addLayer(new NullIslandLayer());
});
```

### Methods

#### onAdd()?

> `optional` **onAdd**(`map`: `Map`, `gl`: `WebGLRenderingContext` \| `WebGL2RenderingContext`): `void`

Optional method called when the layer has been added to the Map with [Map.addLayer](#addlayer). This
gives the layer a chance to initialize gl resources and register event listeners.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | The Map this custom layer was just added to. |
| `gl` | `WebGLRenderingContext` \| `WebGL2RenderingContext` | The gl context for the map. |

##### Returns

`void`

***

#### onRemove()?

> `optional` **onRemove**(`map`: `Map`, `gl`: `WebGLRenderingContext` \| `WebGL2RenderingContext`): `void`

Optional method called when the layer has been removed from the Map with [Map.removeLayer](#removelayer). This
gives the layer a chance to clean up gl resources and event listeners.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | The Map this custom layer was just added to. |
| `gl` | `WebGLRenderingContext` \| `WebGL2RenderingContext` | The gl context for the map. |

##### Returns

`void`

### Properties

#### id

> **id**: `string`

A unique layer id.

***

#### prerender?

> `optional` **prerender?**: `CustomRenderMethod`

Optional method called during a render frame to allow a layer to prepare resources or render into a texture.

The layer cannot make any assumptions about the current GL state and must bind a framebuffer before rendering.

***

#### render

> **render**: `CustomRenderMethod`

Called during a render frame allowing the layer to draw into the GL context.

The layer can assume blending and depth state is set to allow the layer to properly
blend and clip other layers. The layer cannot make any other assumptions about the
current GL state.

If the layer needs to render to a texture, it should implement the `prerender` method
to do this and only use the `render` method for drawing directly into the main framebuffer.

The blend function is set to `gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)`. This expects
colors to be provided in premultiplied alpha form where the `r`, `g` and `b` values are already
multiplied by the `a` value. If you are unable to provide colors in premultiplied form you
may want to change the blend function to
`gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA)`.

***

#### renderingMode?

> `optional` **renderingMode?**: `"2d"` \| `"3d"`

Either `"2d"` or `"3d"`. Defaults to `"2d"`.

***

#### type

> **type**: `"custom"`

The layer's type. Must be `"custom"`.

## StyleImageInterface

Interface for dynamically generated style images. This is a specification for
implementers to model: it is not an exported method or class.

Images implementing this interface can be redrawn for every frame. They can be used to animate
icons and patterns or make them respond to user input. Style images can implement a
[StyleImageInterface.render](#render) method. The method is called every frame and
can be used to update the image.

### See

[Add an animated icon to the map.](https://maplibre.org/maplibre-gl-js/docs/examples/add-image-animated/)

### Example

```ts
let flashingSquare = {
    width: 64,
    height: 64,
    data: new Uint8Array(64 * 64 * 4),

    onAdd: function(map) {
        this.map = map;
    },

    render: function() {
        // keep repainting while the icon is on the map
        this.map.triggerRepaint();

        // alternate between black and white based on the time
        let value = Math.round(Date.now() / 1000) % 2 === 0  ? 255 : 0;

        // check if image needs to be changed
        if (value !== this.previousValue) {
            this.previousValue = value;

            let bytesPerPixel = 4;
            for (let x = 0; x < this.width; x++) {
                for (let y = 0; y < this.height; y++) {
                    let offset = (y * this.width + x) * bytesPerPixel;
                    this.data[offset + 0] = value;
                    this.data[offset + 1] = value;
                    this.data[offset + 2] = value;
                    this.data[offset + 3] = 255;
                }
            }

            // return true to indicate that the image changed
            return true;
        }
    }
 }

 map.addImage('flashing_square', flashingSquare);
```

### Properties

#### onAdd?

> `optional` **onAdd?**: (`map`: `Map`, `id`: `string`) => `void`

Optional method called when the layer has been added to the Map with [Map.addImage](#addimage).

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map` | The Map this custom layer was just added to. |
| `id` | `string` | - |

##### Returns

`void`

***

#### onRemove?

> `optional` **onRemove?**: () => `void`

Optional method called when the icon is removed from the map with [Map.removeImage](#removeimage).
This gives the image a chance to clean up resources and event listeners.

##### Returns

`void`

***

#### render?

> `optional` **render?**: () => `boolean`

This method is called once before every frame where the icon will be used.
The method can optionally update the image's `data` member with a new image.

If the method updates the image it must return `true` to commit the change.
If the method returns `false` or nothing the image is assumed to not have changed.

If updates are infrequent it maybe easier to use [Map.updateImage](#updateimage) to update
the image instead of implementing this method.

##### Returns

`boolean`

`true` if this method updated the image. `false` if the image was not changed.

## AnimationOptions

> **AnimationOptions** = `object`

Options common to map movement methods that involve animation, such as [Map.panBy](#panby) and
[Map.easeTo](#easeto), controlling the duration and easing function of the animation. All properties
are optional.

### Properties

#### animate?

> `optional` **animate?**: `boolean`

If `false`, no animation will occur.

***

#### duration?

> `optional` **duration?**: `number`

The animation's duration, measured in milliseconds.

***

#### easing?

> `optional` **easing?**: (`_`: `number`) => `number`

A function taking a time in the range 0..1 and returning a number where 0 is
the initial state and 1 is the final state.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `_` | `number` |

##### Returns

`number`

***

#### essential?

> `optional` **essential?**: `boolean`

If `true`, then the animation is considered essential and will not be affected by
[`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).

***

#### freezeElevation?

> `optional` **freezeElevation?**: `boolean`

Default false. Needed in 3D maps to let the camera stay in a constant
height based on sea-level. After the animation finished the zoom-level will be recalculated in respect of
the distance from the camera to the center-coordinate-altitude.

***

#### offset?

> `optional` **offset?**: [`PointLike`](#pointlike)

of the target center relative to real map container center at the end of animation.

## AroundCenterOptions

> **AroundCenterOptions** = `object`

An options object sent to the enable function of some of the handlers

### Properties

#### around

> **around**: `"center"`

If "center" is passed, map will zoom around the center of map

## CameraForBoundsOptions

> **CameraForBoundsOptions** = [`CameraOptions`](#cameraoptions) & `object`

A options object for the [Map.cameraForBounds](#cameraforbounds) method

### Type Declaration

#### maxZoom?

> `optional` **maxZoom?**: `number`

The maximum zoom level to allow when the camera would transition to the specified bounds.

#### offset?

> `optional` **offset?**: [`PointLike`](#pointlike)

The center of the given bounds relative to the map's center, measured in pixels.

##### Default Value

```ts
[0, 0]
```

#### padding?

> `optional` **padding?**: `number` \| [`PaddingOptions`](#paddingoptions)

The amount of padding in pixels to add to the given bounds.

## CameraOptions

> **CameraOptions** = `CenterZoomBearing` & `object`

Options common to [Map.jumpTo](#jumpto), [Map.easeTo](#easeto), and [Map.flyTo](#flyto), controlling the desired location,
zoom, bearing, pitch, and roll of the camera. All properties are optional, and when a property is omitted, the current
camera value for that property will remain unchanged.

### Type Declaration

#### elevation?

> `optional` **elevation?**: `number`

The elevation of the center point in meters above sea level.

#### pitch?

> `optional` **pitch?**: `number`

The desired pitch in degrees. The pitch is the angle towards the horizon
measured in degrees with a range between 0 and 60 degrees. For example, pitch: 0 provides the appearance
of looking straight down at the map, while pitch: 60 tilts the user's perspective towards the horizon.
Increasing the pitch value is often used to display 3D objects.

#### roll?

> `optional` **roll?**: `number`

The desired roll in degrees. The roll is the angle about the camera boresight.

### Example

Set the map's initial perspective with CameraOptions
```ts
let map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [-73.5804, 45.53483],
  pitch: 60,
  bearing: -60,
  zoom: 10
});
```

### See

 - [Set pitch and bearing](https://maplibre.org/maplibre-gl-js/docs/examples/set-pitch-and-bearing/)
 - [Jump to a series of locations](https://maplibre.org/maplibre-gl-js/docs/examples/jump-to-a-series-of-locations/)
 - [Fly to a location](https://maplibre.org/maplibre-gl-js/docs/examples/fly-to-a-location/)
 - [Display buildings in 3D](https://maplibre.org/maplibre-gl-js/docs/examples/display-buildings-in-3d/)

## CameraUpdateTransformFunction

> **CameraUpdateTransformFunction** = (`next`: `object`) => `object`

A callback hook that allows manipulating the camera and being notified about camera updates before they happen

### Parameters

| Parameter | Type |
| ------ | ------ |
| `next` | \{ `bearing`: `number`; `center`: [`LngLat`](#lnglat); `elevation`: `number`; `pitch`: `number`; `roll`: `number`; `zoom`: `number`; \} |
| `next.bearing` | `number` |
| `next.center` | [`LngLat`](#lnglat) |
| `next.elevation` | `number` |
| `next.pitch` | `number` |
| `next.roll` | `number` |
| `next.zoom` | `number` |

### Returns

`object`

#### bearing?

> `optional` **bearing?**: `number`

#### center?

> `optional` **center?**: [`LngLat`](#lnglat)

#### elevation?

> `optional` **elevation?**: `number`

#### pitch?

> `optional` **pitch?**: `number`

#### roll?

> `optional` **roll?**: `number`

#### zoom?

> `optional` **zoom?**: `number`

## CoveringTilesOptions

> **CoveringTilesOptions** = `object`

CoveringTilesOptions

### Properties

#### maxzoom?

> `optional` **maxzoom?**: `number`

Largest allowed tile zoom.

***

#### minzoom?

> `optional` **minzoom?**: `number`

Smallest allowed tile zoom.

***

#### roundZoom?

> `optional` **roundZoom?**: `boolean`

Whether to round or floor the target zoom level. If true, the value will be rounded to the closest integer. Otherwise the value will be floored.

***

#### tileSize

> **tileSize**: `number`

Tile size, expressed in screen pixels.

## EaseToOptions

> **EaseToOptions** = [`AnimationOptions`](#animationoptions) & [`CameraOptions`](#cameraoptions) & `object`

The [Map.easeTo](#easeto) options object

### Type Declaration

#### around?

> `optional` **around?**: [`LngLatLike`](#lnglatlike)

If `zoom` is specified, `around` determines the point around which the zoom is centered.

#### delayEndEvents?

> `optional` **delayEndEvents?**: `number`

#### easeId?

> `optional` **easeId?**: `string`

#### noMoveStart?

> `optional` **noMoveStart?**: `boolean`

#### padding?

> `optional` **padding?**: `number` \| [`PaddingOptions`](#paddingoptions)

## FitBoundsOptions

> **FitBoundsOptions** = [`FlyToOptions`](#flytooptions) & `object`

Options for [Map.fitBounds](#fitbounds) method

### Type Declaration

#### linear?

> `optional` **linear?**: `boolean`

If `true`, the map transitions using [Map.easeTo](#easeto). If `false`, the map transitions using [Map.flyTo](#flyto).
See those functions and [AnimationOptions](#animationoptions) for information about options available.

##### Default Value

```ts
false
```

#### maxZoom?

> `optional` **maxZoom?**: `number`

The maximum zoom level to allow when the map view transitions to the specified bounds.

#### offset?

> `optional` **offset?**: [`PointLike`](#pointlike)

The center of the given bounds relative to the map's center, measured in pixels.

##### Default Value

```ts
[0, 0]
```

## FlyToOptions

> **FlyToOptions** = [`AnimationOptions`](#animationoptions) & [`CameraOptions`](#cameraoptions) & `object`

The [Map.flyTo](#flyto) options object

### Type Declaration

#### curve?

> `optional` **curve?**: `number`

The zooming "curve" that will occur along the
flight path. A high value maximizes zooming for an exaggerated animation, while a low
value minimizes zooming for an effect closer to [Map.easeTo](#easeto). 1.42 is the average
value selected by participants in the user study discussed in
[van Wijk (2003)](https://www.win.tue.nl/~vanwijk/zoompan.pdf). A value of
`Math.pow(6, 0.25)` would be equivalent to the root mean squared average velocity. A
value of 1 would produce a circular motion.

##### Default Value

```ts
1.42
```

#### maxDuration?

> `optional` **maxDuration?**: `number`

The animation's maximum duration, measured in milliseconds.
If duration exceeds maximum duration, it resets to 0.

#### minZoom?

> `optional` **minZoom?**: `number`

The zero-based zoom level at the peak of the flight path. If
`options.curve` is specified, this option is ignored.

#### padding?

> `optional` **padding?**: `number` \| [`PaddingOptions`](#paddingoptions)

The amount of padding in pixels to add to the given bounds.

#### screenSpeed?

> `optional` **screenSpeed?**: `number`

The average speed of the animation measured in screenfulls
per second, assuming a linear timing curve. If `options.speed` is specified, this option is ignored.

#### speed?

> `optional` **speed?**: `number`

The average speed of the animation defined in relation to
`options.curve`. A speed of 1.2 means that the map appears to move along the flight path
by 1.2 times `options.curve` screenfulls every second. A _screenfull_ is the map's visible span.
It does not correspond to a fixed physical distance, but varies by zoom level.

##### Default Value

```ts
1.2
```

## JumpToOptions

> **JumpToOptions** = [`CameraOptions`](#cameraoptions) & `object`

The options object related to the [Map.jumpTo](#jumpto) method

### Type Declaration

#### padding?

> `optional` **padding?**: [`PaddingOptions`](#paddingoptions)

Dimensions in pixels applied on each side of the viewport for shifting the vanishing point.

## PaddingOptions

> **PaddingOptions** = `RequireAtLeastOne`\<\{ `bottom`: `number`; `left`: `number`; `right`: `number`; `top`: `number`; \}\>

Options for setting padding on calls to methods such as [Map.fitBounds](#fitbounds), [Map.fitScreenCoordinates](#fitscreencoordinates), and [Map.setPadding](#setpadding). Adjust these options to set the amount of padding in pixels added to the edges of the canvas. Set a uniform padding on all edges or individual values for each edge. All properties of this object must be
non-negative integers.

### Examples

```ts
let bbox = [[-79, 43], [-73, 45]];
map.fitBounds(bbox, {
  padding: {top: 10, bottom:25, left: 15, right: 5}
});
```

```ts
let bbox = [[-79, 43], [-73, 45]];
map.fitBounds(bbox, {
  padding: 20
});
```

### See

 - [Fit to the bounds of a LineString](https://maplibre.org/maplibre-gl-js/docs/examples/zoomto-linestring/)
 - [Fit a map to a bounding box](https://maplibre.org/maplibre-gl-js/docs/examples/fitbounds/)

## QueryRenderedFeaturesOptions

> **QueryRenderedFeaturesOptions** = `object`

Options to pass to query the map for the rendered features

### Properties

#### availableImages?

> `optional` **availableImages?**: `string`[]

An array of string representing the available images

***

#### filter?

> `optional` **filter?**: `FilterSpecification`

A [filter](https://maplibre.org/maplibre-style-spec/layers/#filter) to limit query results.

***

#### layers?

> `optional` **layers?**: `string`[] \| `Set`\<`string`\>

An array or set of [style layer IDs](https://maplibre.org/maplibre-style-spec/#layer-id) for the query to inspect.
Only features within these layers will be returned. If this parameter is undefined, all layers will be checked.

***

#### validate?

> `optional` **validate?**: `boolean`

Whether to check if the [options.filter] conforms to the MapLibre Style Specification. Disabling validation is a performance optimization that should only be used if you have previously validated the values you will be passing to this function.

## QuerySourceFeatureOptions

> **QuerySourceFeatureOptions** = `object`

The options object related to the [Map.querySourceFeatures](#querysourcefeatures) method

### Properties

#### filter?

> `optional` **filter?**: `FilterSpecification`

A [filter](https://maplibre.org/maplibre-style-spec/layers/#filter)
to limit query results.

***

#### sourceLayer?

> `optional` **sourceLayer?**: `string`

The name of the source layer to query. *For vector tile sources, this parameter is required.* For GeoJSON sources, it is ignored.

***

#### validate?

> `optional` **validate?**: `boolean`

Whether to check if the [parameters.filter] conforms to the MapLibre Style Specification. Disabling validation is a performance optimization that should only be used if you have previously validated the values you will be passing to this function.

##### Default Value

```ts
true
```

## RequestParameters

> **RequestParameters** = `object`

A `RequestParameters` object to be returned from Map.options.transformRequest callbacks.

### Example

```ts
// use transformRequest to modify requests that begin with `http://myHost`
transformRequest: function(url, resourceType) {
 if (resourceType === 'Source' && url.indexOf('http://myHost') > -1) {
   return {
     url: url.replace('http', 'https'),
     headers: { 'my-custom-header': true },
     credentials: 'include'  // Include cookies for cross-origin requests
   }
  }
}
```

### Properties

#### body?

> `optional` **body?**: `string`

Request body.

***

#### cache?

> `optional` **cache?**: `RequestCache`

Parameters supported only by browser fetch API. Property of the Request interface contains the cache mode of the request. It controls how the request will interact with the browser's HTTP cache. (https://developer.mozilla.org/en-US/docs/Web/API/Request/cache)

***

#### collectResourceTiming?

> `optional` **collectResourceTiming?**: `boolean`

If `true`, Resource Timing API information will be collected for these transformed requests and returned in a resourceTiming property of relevant data events.

***

#### credentials?

> `optional` **credentials?**: `"same-origin"` \| `"include"`

`'same-origin'|'include'` Use 'include' to send cookies with cross-origin requests.

***

#### headers?

> `optional` **headers?**: `any`

The headers to be sent with the request.

***

#### method?

> `optional` **method?**: `"GET"` \| `"POST"` \| `"PUT"`

Request method `'GET' | 'POST' | 'PUT'`.

***

#### referrerPolicy?

> `optional` **referrerPolicy?**: `ReferrerPolicy`

The referrer policy to use for the request. Controls how much referrer information is sent. (https://developer.mozilla.org/en-US/docs/Web/API/Request/referrerPolicy)

***

#### type?

> `optional` **type?**: `"string"` \| `"json"` \| `"arrayBuffer"` \| `"image"`

Response body type to be returned.

***

#### url

> **url**: `string`

The URL to be requested.

## RequestTransformFunction

> **RequestTransformFunction** = (`url`: `string`, `resourceType?`: `ResourceType`) => [`RequestParameters`](#requestparameters) \| `Promise`\<[`RequestParameters`](#requestparameters)\> \| `undefined`

This function is used to transform a request.
It is used just before executing the relevant request.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `resourceType?` | `ResourceType` |

### Returns

[`RequestParameters`](#requestparameters) \| `Promise`\<[`RequestParameters`](#requestparameters)\> \| `undefined`

## SetClusterOptions

> **SetClusterOptions** = `object`

The cluster options to set

### Properties

#### cluster?

> `optional` **cluster?**: `boolean`

Whether or not to cluster

***

#### clusterMaxZoom?

> `optional` **clusterMaxZoom?**: `number`

The cluster's max zoom.
Non-integer values are rounded to the closest integer due to supercluster integer value requirements.

***

#### clusterRadius?

> `optional` **clusterRadius?**: `number`

The cluster's radius

## StyleOptions

> **StyleOptions** = `object`

The options object related to the [Map](#map)'s style related methods

### Properties

#### localIdeographFontFamily?

> `optional` **localIdeographFontFamily?**: `string` \| `false`

Defines a CSS
font-family for locally overriding generation of Chinese, Japanese, and Korean characters.
For these characters, font settings from the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold).
Set to `false`, to enable font settings from the map's style for these glyph ranges.
Forces a full update.

***

#### validate?

> `optional` **validate?**: `boolean`

If false, style validation will be skipped. Useful in production environment.

## StyleSetterOptions

> **StyleSetterOptions** = `object`

Supporting type to add validation to another style related type

### Properties

#### validate?

> `optional` **validate?**: `boolean`

Whether to check if the filter conforms to the MapLibre Style Specification. Disabling validation is a performance optimization that should only be used if you have previously validated the values you will be passing to this function.

## StyleSwapOptions

> **StyleSwapOptions** = `object`

The options object related to the [Map](#map)'s style related methods

### Properties

#### diff?

> `optional` **diff?**: `boolean`

If false, force a 'full' update, removing the current style
and building the given one instead of attempting a diff-based update.

***

#### transformStyle?

> `optional` **transformStyle?**: `TransformStyleFunction`

TransformStyleFunction is a convenience function
that allows to modify a style after it is fetched but before it is committed to the map state. Refer to TransformStyleFunction.

## TransformConstrainFunction

> **TransformConstrainFunction** = (`lngLat`: [`LngLat`](#lnglat), `zoom`: `number`) => `object`

The callback defining how the transform constrains the viewport's lnglat and zoom to respect the longitude and latitude bounds.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `lngLat` | [`LngLat`](#lnglat) |
| `zoom` | `number` |

### Returns

`object`

#### center

> **center**: [`LngLat`](#lnglat)

#### zoom

> **zoom**: `number`

### See

[Customize the map transform constrain](https://maplibre.org/maplibre-gl-js/docs/examples/customize-the-map-transform-constrain/)

## UpdateImageOptions

> **UpdateImageOptions** = `object`

The options object for the [ImageSource.updateImage](#updateimage) method

### Properties

#### coordinates?

> `optional` **coordinates?**: `Coordinates`

The image coordinates

***

#### url

> **url**: `string`

Required image URL.

## version <img src="https://static.maptoolkit.net/admin/app/images/o-logo.svg" width="22" height="32" style="display:inline;width:22px;height:32px;margin:0" alt="Maptoolkit" />

> `const` **version**: `string` = `_sdkVersion`

The current version of the Maptoolkit Maps SDK.

## addProtocol()

> **addProtocol**(`customProtocol`: `string`, `loadFn`: `AddProtocolAction`): `void`

Adds a custom load resource function that will be called when using a URL that starts with a custom url schema.
This will happen in the main thread, and workers might call it if they don't know how to handle the protocol.
The example below will be triggered for custom:// urls defined in the sources list in the style definitions.
The function passed will receive the request parameters and should return with the resulting resource,
for example a pbf vector tile, non-compressed, represented as ArrayBuffer.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customProtocol` | `string` | the protocol to hook, for example 'custom' |
| `loadFn` | `AddProtocolAction` | the function to use when trying to fetch a tile specified by the customProtocol |

### Returns

`void`

### Example

```ts
// This will fetch a file using the fetch API (this is obviously a non interesting example...)
addProtocol('custom', async (params, abortController) => {
     const t = await fetch(`https://${params.url.split("://")[1]}`);
     if (t.status == 200) {
         const buffer = await t.arrayBuffer();
         return {data: buffer}
     } else {
         throw new Error(`Tile fetch error: ${t.statusText}`);
     }
 });
// the following is an example of a way to return an error when trying to load a tile
addProtocol('custom2', async (params, abortController) => {
     throw new Error('someErrorMessage');
});
```

### See

 - [Add a COG raster source](https://maplibre.org/maplibre-gl-js/docs/examples/add-a-cog-raster-source/)
 - [Add Contour Lines](https://maplibre.org/maplibre-gl-js/docs/examples/add-contour-lines/)
 - [PMTiles source and protocol](https://maplibre.org/maplibre-gl-js/docs/examples/pmtiles-source-and-protocol/)
 - [Use addProtocol to Transform Feature Properties](https://maplibre.org/maplibre-gl-js/docs/examples/use-addprotocol-to-transform-feature-properties/)

## addSourceType()

> **addSourceType**(`name`: `string`, `SourceType`: `SourceClass`): `Promise`\<`void`\>

Adds a custom source type, making it available for use with [Map.addSource](#addsource).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the source type; source definition objects use this name in the `{type: ...}` field. |
| `SourceType` | `SourceClass` | A SourceClass - which is a constructor for the `Source` interface. |

### Returns

`Promise`\<`void`\>

a promise that is resolved when the source type is ready or rejected with an error.

## clearPrewarmedResources()

> **clearPrewarmedResources**(): `void`

Clears up resources that have previously been created by `prewarm()`.
Note that this is typically not necessary. You should only call this function
if you expect the user of your app to not return to a Map view at any point
in your application.

### Returns

`void`

### Example

```ts
clearPrewarmedResources()
```

## getMaxParallelImageRequests()

> **getMaxParallelImageRequests**(): `number`

Gets and sets the maximum number of images (raster tiles, sprites, icons) to load in parallel,
which affects performance in raster-heavy maps. 16 by default.

### Returns

`number`

Number of parallel requests currently configured.

### Example

```ts
getMaxParallelImageRequests();
```

## getRTLTextPluginStatus()

> **getRTLTextPluginStatus**(): `string`

Gets the map's [RTL text plugin](https://www.mapbox.com/mapbox-gl-js/plugins/#mapbox-gl-rtl-text) status.
The status can be `unavailable` (i.e. not requested or removed), `loading`, `loaded` or `error`.
If the status is `loaded` and the plugin is requested again, an error will be thrown.

### Returns

`string`

### Example

```ts
const pluginStatus = getRTLTextPluginStatus();
```

## getVersion()

> **getVersion**(): `string`

Returns the package version of the library

### Returns

`string`

Package version of the library

## getWorkerCount()

> **getWorkerCount**(): `number`

Gets the number of web workers instantiated on a page with GL JS maps.
By default, workerCount is 1 except for Safari browser where it is set to half the number of CPU cores (capped at 3).
Make sure to set this property before creating any map instances for it to have effect.

### Returns

`number`

Number of workers currently configured.

### Example

```ts
const workerCount = getWorkerCount()
```

## getWorkerUrl()

> **getWorkerUrl**(): `string`

Gets the worker url

### Returns

`string`

The worker url

## importScriptInWorkers()

> **importScriptInWorkers**(`workerUrl`: `string`): `Promise`\<`void`[]\>

Allows loading javascript code in the worker thread.
*Note* that since this is using some very internal classes and flows it is considered experimental and can break at any point.

It can be useful for the following examples:
1. Using `self.addProtocol` in the worker thread - note that you might need to also register the protocol on the main thread.
2. Using `self.registerWorkerSource(workerSource: WorkerSource)` to register a worker source, which should come with `addSourceType` usually.
3. using `self.actor.registerMessageHandler` to override some internal worker operations

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workerUrl` | `string` | the worker url e.g. a url of a javascript file to load in the worker |

### Returns

`Promise`\<`void`[]\>

### Example

```ts
// below is an example of sending a js file to the worker to load the method there
// Note that you'll need to call the global function `addProtocol` in the worker to register the protocol there.
// add-protocol-worker.js
async function loadFn(params, abortController) {
    const t = await fetch(`https://${params.url.split("://")[1]}`);
    if (t.status == 200) {
        const buffer = await t.arrayBuffer();
        return {data: buffer}
    } else {
        throw new Error(`Tile fetch error: ${t.statusText}`);
    }
}
self.addProtocol('custom', loadFn);

// main.js
importScriptInWorkers('add-protocol-worker.js');
```

## prewarm()

> **prewarm**(): `void`

Initializes resources like WebWorkers that can be shared across maps to lower load
times in some situations. `setWorkerUrl()` and `setWorkerCount()`, if being
used, must be set before `prewarm()` is called to have an effect.

By default, the lifecycle of these resources is managed automatically, and they are
lazily initialized when a Map is first created. By invoking `prewarm()`, these
resources will be created ahead of time, and will not be cleared when the last Map
is removed from the page. This allows them to be re-used by new Map instances that
are created later. They can be manually cleared by calling
`clearPrewarmedResources()`. This is only necessary if your web page remains
active but stops using maps altogether.

This is primarily useful when using GL-JS maps in a single page app, wherein a user
would navigate between various views that can cause Map instances to constantly be
created and destroyed.

### Returns

`void`

### Example

```ts
prewarm()
```

## removeProtocol()

> **removeProtocol**(`customProtocol`: `string`): `void`

Removes a previously added protocol in the main thread.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customProtocol` | `string` | the custom protocol to remove registration for |

### Returns

`void`

### Example

```ts
removeProtocol('custom');
```

## setMaxParallelImageRequests()

> **setMaxParallelImageRequests**(`numRequests`: `number`): `void`

Sets the maximum number of images (raster tiles, sprites, icons) to load in parallel,
which affects performance in raster-heavy maps. 16 by default.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `numRequests` | `number` |

### Returns

`void`

### Example

```ts
setMaxParallelImageRequests(10);
```

## setRTLTextPlugin()

> **setRTLTextPlugin**(`pluginURL`: `string`, `lazy`: `boolean`): `Promise`\<`void`\>

Sets the map's [RTL text plugin](https://www.mapbox.com/mapbox-gl-js/plugins/#mapbox-gl-rtl-text).
Necessary for supporting the Arabic and Hebrew languages, which are written right-to-left.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pluginURL` | `string` | URL pointing to the Mapbox RTL text plugin source. |
| `lazy` | `boolean` | If set to `true`, maplibre will defer loading the plugin until rtl text is encountered, rtl text will then be rendered only after the plugin finishes loading. |

### Returns

`Promise`\<`void`\>

### Example

```ts
setRTLTextPlugin('https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.3.0/dist/mapbox-gl-rtl-text.js', false);
```

### See

 - [Add support for right-to-left scripts](https://maplibre.org/maplibre-gl-js/docs/examples/add-support-for-right-to-left-scripts/)
 - [Display and style rich text labels](https://maplibre.org/maplibre-gl-js/docs/examples/display-and-style-rich-text-labels/)

## setWorkerCount()

> **setWorkerCount**(`count`: `number`): `void`

Sets the number of web workers instantiated on a page with GL JS maps.
By default, workerCount is 1 except for Safari browser where it is set to half the number of CPU cores (capped at 3).
Make sure to set this property before creating any map instances for it to have effect.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `count` | `number` |

### Returns

`void`

### Example

```ts
setWorkerCount(2);
```

## setWorkerUrl()

> **setWorkerUrl**(`value`: `string`): `void`

Sets the worker url

### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

### Returns

`void`
