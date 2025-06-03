[Maptoolkit JS](../README.md) / TextFit

# TextFit

Enumeration of possible values for StyleImageMetadata.textFitWidth and textFitHeight.

## Enumeration Members

### proportional

> **proportional**: `"proportional"`

The image will be resized on the specified axis to fit the content rectangle to the target text and
will resize the other axis to maintain the aspect ratio of the content rectangle.

***

### stretchOnly

> **stretchOnly**: `"stretchOnly"`

The image will be resized on the specified axis to fit the content rectangle to the target text, but will not
fall below the aspect ratio of the original content rectangle if the other axis is set to proportional.

***

### stretchOrShrink

> **stretchOrShrink**: `"stretchOrShrink"`

The image will be resized on the specified axis to tightly fit the content rectangle to target text.
This is the same as not being defined.
