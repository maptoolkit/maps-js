[Maptoolkit JS](../README.md) / MapProjectionEvent

# MapProjectionEvent

> **MapProjectionEvent** = `object`

The map projection event

## Properties

### newProjection

> **newProjection**: `ProjectionSpecification`\[`"type"`\]

Specifies the name of the new projection.
For example:

 - `globe` to describe globe that has internally switched to mercator
 - `vertical-perspective` to describe a globe that doesn't change to mercator
 - `mercator` to describe mercator projection
