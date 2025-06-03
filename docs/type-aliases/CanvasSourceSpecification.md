[Maptoolkit JS](../README.md) / CanvasSourceSpecification

# CanvasSourceSpecification

> **CanvasSourceSpecification** = `object`

Options to add a canvas source type to the map.

## Properties

### animate?

> `optional` **animate**: `boolean`

Whether the canvas source is animated. If the canvas is static (i.e. pixels do not need to be re-read on every frame), `animate` should be set to `false` to improve performance.

#### Default Value

```ts
true
```

***

### canvas?

> `optional` **canvas**: `string` \| `HTMLCanvasElement`

Canvas source from which to read pixels. Can be a string representing the ID of the canvas element, or the `HTMLCanvasElement` itself.

***

### coordinates

> **coordinates**: \[\[`number`, `number`\], \[`number`, `number`\], \[`number`, `number`\], \[`number`, `number`\]\]

Four geographical coordinates denoting where to place the corners of the canvas, specified in `[longitude, latitude]` pairs.

***

### type

> **type**: `"canvas"`

Source type. Must be `"canvas"`.
