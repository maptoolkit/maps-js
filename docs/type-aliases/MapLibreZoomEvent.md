[Maptoolkit JS](../README.md) / MapLibreZoomEvent

# MapLibreZoomEvent

> **MapLibreZoomEvent** = `object`

A `MapLibreZoomEvent` is the event type for the boxzoom-related map events emitted by the BoxZoomHandler.

## Properties

### originalEvent

> **originalEvent**: `MouseEvent`

The DOM event that triggered the boxzoom event. Can be a `MouseEvent` or `KeyboardEvent`

***

### target

> **target**: `Map$1`

The `Map` instance that triggered the event

***

### type

> **type**: `"boxzoomstart"` \| `"boxzoomend"` \| `"boxzoomcancel"`

The type of boxzoom event. One of `boxzoomstart`, `boxzoomend` or `boxzoomcancel`
