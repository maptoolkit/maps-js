[Maptoolkit JS](../README.md) / FlyToOptions

# FlyToOptions

> **FlyToOptions** = [`AnimationOptions`](AnimationOptions.md) & [`CameraOptions`](CameraOptions.md) & `object`

The [Map#flyTo](../classes/Map.md#flyto) options object

## Type declaration

### curve?

> `optional` **curve**: `number`

The zooming "curve" that will occur along the
flight path. A high value maximizes zooming for an exaggerated animation, while a low
value minimizes zooming for an effect closer to [Map#easeTo](../classes/Map.md#easeto). 1.42 is the average
value selected by participants in the user study discussed in
[van Wijk (2003)](https://www.win.tue.nl/~vanwijk/zoompan.pdf). A value of
`Math.pow(6, 0.25)` would be equivalent to the root mean squared average velocity. A
value of 1 would produce a circular motion.

#### Default Value

```ts
1.42
```

### maxDuration?

> `optional` **maxDuration**: `number`

The animation's maximum duration, measured in milliseconds.
If duration exceeds maximum duration, it resets to 0.

### minZoom?

> `optional` **minZoom**: `number`

The zero-based zoom level at the peak of the flight path. If
`options.curve` is specified, this option is ignored.

### padding?

> `optional` **padding**: `number` \| [`PaddingOptions`](PaddingOptions.md)

The amount of padding in pixels to add to the given bounds.

### screenSpeed?

> `optional` **screenSpeed**: `number`

The average speed of the animation measured in screenfuls
per second, assuming a linear timing curve. If `options.speed` is specified, this option is ignored.

### speed?

> `optional` **speed**: `number`

The average speed of the animation defined in relation to
`options.curve`. A speed of 1.2 means that the map appears to move along the flight path
by 1.2 times `options.curve` screenfuls every second. A _screenful_ is the map's visible span.
It does not correspond to a fixed physical distance, but varies by zoom level.

#### Default Value

```ts
1.2
```
