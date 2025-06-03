[Maptoolkit JS](../README.md) / migrate

# migrate()

> **migrate**(`style`: `StyleSpecification`): `StyleSpecification`

Migrate a Mapbox/MapLibre GL Style to the latest version.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `style` | `StyleSpecification` | a MapLibre Style |

## Returns

`StyleSpecification`

a migrated style

## Example

```ts
const fs = require('fs');
const migrate = require('@maplibre/maplibre-gl-style-spec').migrate;
const style = fs.readFileSync('./style.json', 'utf8');
fs.writeFileSync('./style.json', JSON.stringify(migrate(style)));
```
