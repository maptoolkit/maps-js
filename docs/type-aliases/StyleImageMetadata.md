[Maptoolkit JS](../README.md) / StyleImageMetadata

# StyleImageMetadata

> **StyleImageMetadata** = `object`

The style's image metadata

## Properties

### content?

> `optional` **content**: \[`number`, `number`, `number`, `number`\]

If `icon-text-fit` is used in a layer with this image, this option defines the part of the image that can be covered by the content in `text-field`.

***

### pixelRatio

> **pixelRatio**: `number`

The ratio of pixels in the image to physical pixels on the screen

***

### sdf

> **sdf**: `boolean`

Whether the image should be interpreted as an SDF image

***

### stretchX?

> `optional` **stretchX**: \[`number`, `number`\][]

If `icon-text-fit` is used in a layer with this image, this option defines the part(s) of the image that can be stretched horizontally.

***

### stretchY?

> `optional` **stretchY**: \[`number`, `number`\][]

If `icon-text-fit` is used in a layer with this image, this option defines the part(s) of the image that can be stretched vertically.

***

### textFitHeight?

> `optional` **textFitHeight**: [`TextFit`](../enumerations/TextFit.md)

If `icon-text-fit` is used in a layer with this image, this option defines constraints on the vertical scaling of the image.

***

### textFitWidth?

> `optional` **textFitWidth**: [`TextFit`](../enumerations/TextFit.md)

If `icon-text-fit` is used in a layer with this image, this option defines constraints on the horizontal scaling of the image.
