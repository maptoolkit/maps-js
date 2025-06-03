[Maptoolkit JS](../README.md) / StyleOptions

# StyleOptions

> **StyleOptions** = `object`

The options object related to the [Map](../classes/Map.md)'s style related methods

## Properties

### localIdeographFontFamily?

> `optional` **localIdeographFontFamily**: `string` \| `false`

Defines a CSS
font-family for locally overriding generation of Chinese, Japanese, and Korean characters.
For these characters, font settings from the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold).
Set to `false`, to enable font settings from the map's style for these glyph ranges.
Forces a full update.

***

### validate?

> `optional` **validate**: `boolean`

If false, style validation will be skipped. Useful in production environment.
