[Maptoolkit JS](../README.md) / MapOptions

# MapOptions

> **MapOptions** = `Omit`\<`maplibreMapOptions`, `"container"` \| `"attributionControl"`\> & `object`

The [Map](../classes/Map.md) options object.

## Type declaration

### apiKey?

> `optional` **apiKey**: `string`

Maptoolkit API key.

### attributionControl?

> `optional` **attributionControl**: `false` \| [`AttributionControlOptions`](AttributionControlOptions.md)

[AttributionControlOptions](AttributionControlOptions.md) for the map's default [AttributionControl](../classes/AttributionControl.md). Pass `false` to disable.

#### Default Value

See [AttributionControlOptions](AttributionControlOptions.md).

### container?

> `optional` **container**: `HTMLElement` \| `string`

The HTML element in which the map will be rendered, or the element's string `id`. The specified element must have no children.
Alternatively the container can be set using the [Map.setContainer](../classes/Map.md#setcontainer) method after initialization.

### locale?

> `optional` **locale**: `LocaleSpecification` \| `string`

A locale string that specifies the language for string translations. Currently supported locales are `en` and `de`.
Alternatively, it can be an object mapping string IDs to translations, allowing you to override or add to the default localization table.

#### Default Value

See Config

### logoControl?

> `optional` **logoControl**: `false` \| [`LogoControlOptions`](LogoControlOptions.md)

[LogoControlOptions](LogoControlOptions.md) for the map's default [LogoControl](../classes/LogoControl.md). Pass `false` to disable.

#### Default Value

See [LogoControlOptions](LogoControlOptions.md).
