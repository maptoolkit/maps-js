[Maptoolkit JS](../README.md) / BuildingsLayer

# BuildingsLayer

Displays the Maptoolkit watermark.

## Implements

- [`CustomLayerInterface`](../interfaces/CustomLayerInterface.md)

## Constructors

### Constructor

> **new BuildingsLayer**(`options?`: [`BuildingsLayerOptions`](../type-aliases/BuildingsLayerOptions.md)): `BuildingsLayer`

Creates an instance of BuildingsLayer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`BuildingsLayerOptions`](../type-aliases/BuildingsLayerOptions.md) | Options for configuring the custom buildings layer. |

#### Returns

`BuildingsLayer`

## Methods

### onAdd()

> **onAdd**(`map`: [`Map`](Map.md), `gl`: `WebGLRenderingContext` \| `WebGL2RenderingContext`): `void`

Optional method called when the layer has been added to the Map with [Map.addLayer](Map.md#addlayer). This
gives the layer a chance to initialize gl resources and register event listeners.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | [`Map`](Map.md) | The Map this custom layer was just added to. |
| `gl` | `WebGLRenderingContext` \| `WebGL2RenderingContext` | The gl context for the map. |

#### Returns

`void`

#### Implementation of

[`CustomLayerInterface`](../interfaces/CustomLayerInterface.md).[`onAdd`](../interfaces/CustomLayerInterface.md#onadd)

***

### render()

> **render**(`gl`: `WebGLRenderingContext` \| `WebGL2RenderingContext`, `options`: [`CustomRenderMethodInput`](../type-aliases/CustomRenderMethodInput.md)): `void`

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

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gl` | `WebGLRenderingContext` \| `WebGL2RenderingContext` |
| `options` | [`CustomRenderMethodInput`](../type-aliases/CustomRenderMethodInput.md) |

#### Returns

`void`

#### Implementation of

`maplibreCustomLayerInterface.render`

## Properties

### id

> **id**: `string`

A unique layer id.

#### Implementation of

[`CustomLayerInterface`](../interfaces/CustomLayerInterface.md).[`id`](../interfaces/CustomLayerInterface.md#id)

***

### type

> **type**: `"custom"`

The layer's type. Must be `"custom"`.

#### Implementation of

[`CustomLayerInterface`](../interfaces/CustomLayerInterface.md).[`type`](../interfaces/CustomLayerInterface.md#type)
