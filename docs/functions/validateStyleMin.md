[Maptoolkit JS](../README.md) / validateStyleMin

# validateStyleMin()

> **validateStyleMin**(`style`: `StyleSpecification`, `styleSpec?`: `object`): `ValidationError`[]

Validate a MapLibre style against the style specification.
Use this when running in the browser.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `style` | `StyleSpecification` | The style to be validated. |
| `styleSpec?` | \{ `$root`: \{ `bearing`: \{ `default`: `number`; `doc`: `string`; `example`: `number`; `period`: `number`; `type`: `string`; `units`: `string`; \}; `center`: \{ `doc`: `string`; `example`: `number`[]; `type`: `string`; `value`: `string`; \}; `centerAltitude`: \{ `doc`: `string`; `example`: `number`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `glyphs`: \{ `doc`: `string`; `example`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `omit to use local fonts`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `layers`: \{ `doc`: `string`; `example`: `object`[]; `required`: `boolean`; `type`: `string`; `value`: `string`; \}; `light`: \{ `doc`: `string`; `example`: \{ `anchor`: `string`; `color`: `string`; `intensity`: `number`; \}; `type`: `string`; \}; `metadata`: \{ `doc`: `string`; `example`: \{ `example:object`: \{ `Boolean`: `boolean`; `Number`: `number`; `String`: `string`; \}; `styleeditor:comment`: `string`; `styleeditor:slimmode`: `boolean`; `styleeditor:version`: `string`; \}; `type`: `string`; \}; `name`: \{ `doc`: `string`; `example`: `string`; `type`: `string`; \}; `pitch`: \{ `default`: `number`; `doc`: `string`; `example`: `number`; `sdk-support`: \{ `0-180 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `0-60 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `0-85 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `projection`: \{ `doc`: `string`; `example`: \{ `type`: (`string` \| `number` \| `string`[])[]; \}; `type`: `string`; \}; `roll`: \{ `default`: `number`; `doc`: `string`; `example`: `number`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `sky`: \{ `doc`: `string`; `example`: \{ `atmosphere-blend`: (`string` \| `number` \| `string`[])[]; `fog-color`: `string`; `fog-ground-blend`: `number`; `horizon-color`: `string`; `horizon-fog-blend`: `number`; `sky-color`: `string`; `sky-horizon-blend`: `number`; \}; `type`: `string`; \}; `sources`: \{ `doc`: `string`; `example`: \{ `maplibre-demotiles`: \{ `type`: `string`; `url`: `string`; \}; `maplibre-streets`: \{ `maxzoom`: `number`; `tiles`: `string`[]; `type`: `string`; \}; `maplibre-tilejson`: \{ `type`: `string`; `url`: `string`; \}; `wms-imagery`: \{ `tiles`: `string`[]; `tileSize`: `number`; `type`: `string`; \}; \}; `required`: `boolean`; `type`: `string`; \}; `sprite`: \{ `doc`: `string`; `example`: `string`; `type`: `string`; \}; `state`: \{ `default`: \{ \}; `doc`: `string`; `example`: \{ `chargerType`: \{ `default`: `string`[]; \}; `minPreferredChargingSpeed`: \{ `default`: `number`; \}; \}; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `terrain`: \{ `doc`: `string`; `example`: \{ `exaggeration`: `number`; `source`: `string`; \}; `type`: `string`; \}; `transition`: \{ `doc`: `string`; `example`: \{ `delay`: `number`; `duration`: `number`; \}; `type`: `string`; \}; `version`: \{ `doc`: `string`; `example`: `number`; `required`: `boolean`; `type`: `string`; `values`: `number`[]; \}; `zoom`: \{ `doc`: `string`; `example`: `number`; `type`: `string`; \}; \}; `$version`: `number`; `expression`: \{ `doc`: `string`; `minimum`: `number`; `type`: `string`; `value`: `string`; \}; `expression_name`: \{ `doc`: `string`; `type`: `string`; `values`: \{ `-`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `!`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `!=`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `boolean`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `*`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `/`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `%`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `^`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `+`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `<`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `<=`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `==`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `>`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `>=`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `abs`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `accumulated`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `acos`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `all`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `any`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `array`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `asin`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `at`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `atan`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `boolean`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `boolean` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `case`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| `boolean` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `ceil`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `coalesce`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `collator`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `case-sensitive`: `boolean`; `diacritic-sensitive`: `boolean`; `locale`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `concat`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `cos`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `distance`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `coordinates`: `number`[]; `type`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `downcase`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `e`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `feature-state`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `floor`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `format`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| ...[])[] \| \{ `font-scale`: `number`; `vertical-align?`: `undefined`; \} \| \{ `font-scale?`: `undefined`; `vertical-align?`: `undefined`; \} \| \{ `font-scale`: `number`; `vertical-align`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `font-scale`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `image`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `text-color`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `text-font`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `vertical-align`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `geometry-type`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `get`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `global-state`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `has`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `heatmap-density`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `id`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `image`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `in`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `index-of`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `interpolate`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `interpolate-hcl`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `interpolate-lab`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `is-supported-script`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `length`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `let`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `line-progress`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `literal`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `ln`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `ln2`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `log10`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `log2`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `match`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `max`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `min`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `number`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `number-format`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[] \| \{ `max-fraction-digits`: `number`; `min-fraction-digits`: `number`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `object`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `pi`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `properties`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `resolved-locale`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| \{ `case-sensitive`: ...; `diacritic-sensitive`: ...; `locale`: ...; \})[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `rgb`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `rgba`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `round`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `sin`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `slice`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `sqrt`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `step`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `string`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `tan`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-boolean`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-color`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-number`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-rgba`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-string`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `typeof`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `upcase`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `var`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `within`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `coordinates`: ...[][]; `type`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `zoom`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; \}; \}; `filter`: \{ `doc`: `string`; `type`: `string`; `value`: `string`; \}; `filter_operator`: \{ `doc`: `string`; `type`: `string`; `values`: \{ `!=`: \{ `doc`: `string`; \}; `!has`: \{ `doc`: `string`; \}; `!in`: \{ `doc`: `string`; \}; `<`: \{ `doc`: `string`; \}; `<=`: \{ `doc`: `string`; \}; `==`: \{ `doc`: `string`; \}; `>`: \{ `doc`: `string`; \}; `>=`: \{ `doc`: `string`; \}; `all`: \{ `doc`: `string`; \}; `any`: \{ `doc`: `string`; \}; `has`: \{ `doc`: `string`; \}; `in`: \{ `doc`: `string`; \}; `none`: \{ `doc`: `string`; \}; \}; \}; `function`: \{ `base`: \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; \}; `colorSpace`: \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `hcl`: \{ `doc`: `string`; \}; `lab`: \{ `doc`: `string`; \}; `rgb`: \{ `doc`: `string`; \}; \}; \}; `default`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \}; `expression`: \{ `doc`: `string`; `type`: `string`; \}; `property`: \{ `default`: `string`; `doc`: `string`; `type`: `string`; \}; `stops`: \{ `doc`: `string`; `type`: `string`; `value`: `string`; \}; `type`: \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `categorical`: \{ `doc`: `string`; \}; `exponential`: \{ `doc`: `string`; \}; `identity`: \{ `doc`: `string`; \}; `interval`: \{ `doc`: `string`; \}; \}; \}; \}; `function_stop`: \{ `doc`: `string`; `length`: `number`; `maximum`: `number`; `minimum`: `number`; `type`: `string`; `value`: `string`[]; \}; `geometry_type`: \{ `doc`: `string`; `type`: `string`; `values`: \{ `LineString`: \{ `doc`: `string`; \}; `Point`: \{ `doc`: `string`; \}; `Polygon`: \{ `doc`: `string`; \}; \}; \}; `layer`: \{ `filter`: \{ `doc`: `string`; `type`: `string`; \}; `id`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \}; `layout`: \{ `doc`: `string`; `type`: `string`; \}; `maxzoom`: \{ `doc`: `string`; `maximum`: `number`; `minimum`: `number`; `type`: `string`; \}; `metadata`: \{ `doc`: `string`; `example`: \{ `source:comment`: `string`; \}; `type`: `string`; \}; `minzoom`: \{ `doc`: `string`; `maximum`: `number`; `minimum`: `number`; `type`: `string`; \}; `paint`: \{ `doc`: `string`; `type`: `string`; \}; `source`: \{ `doc`: `string`; `type`: `string`; \}; `source-layer`: \{ `doc`: `string`; `type`: `string`; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `background`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `circle`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `fill`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `fill-extrusion`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `heatmap`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `hillshade`: \{ `doc`: `string`; `sdk-support`: \{ `additional methods`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `line`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `raster`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `symbol`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; \}; \}; \}; `layout`: `string`[]; `layout_background`: \{ `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \}; `layout_circle`: \{ `circle-sort-key`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \}; `layout_fill`: \{ `fill-sort-key`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \}; `layout_fill-extrusion`: \{ `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \}; `layout_heatmap`: \{ `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \}; `layout_hillshade`: \{ `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \}; `layout_line`: \{ `line-cap`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `butt`: \{ `doc`: `string`; \}; `round`: \{ `doc`: `string`; \}; `square`: \{ `doc`: `string`; \}; \}; \}; `line-join`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `bevel`: \{ `doc`: `string`; \}; `miter`: \{ `doc`: `string`; \}; `round`: \{ `doc`: `string`; \}; \}; \}; `line-miter-limit`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `line-round-limit`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `line-sort-key`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \}; `layout_raster`: \{ `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \}; `layout_symbol`: \{ `icon-allow-overlap`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `icon-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \}; \}; `icon-ignore-placement`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `icon-image`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `tokens`: `boolean`; `type`: `string`; \}; `icon-keep-upright`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `icon-rotation-alignment`: `string`; `symbol-placement?`: `undefined`; \} \| \{ `icon-rotation-alignment?`: `undefined`; `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `icon-offset`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; \}; `icon-optional`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `icon-overlap`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `always`: \{ `doc`: `string`; \}; `cooperative`: \{ `doc`: `string`; \}; `never`: \{ `doc`: `string`; \}; \}; \}; `icon-padding`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `icon-pitch-alignment`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `icon-rotate`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `period`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `icon-rotation-alignment`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `icon-size`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `icon-text-fit`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `stretchable icons`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `both`: \{ `doc`: `string`; \}; `height`: \{ `doc`: `string`; \}; `none`: \{ `doc`: `string`; \}; `width`: \{ `doc`: `string`; \}; \}; \}; `icon-text-fit-padding`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: (`string` \| \{ `icon-text-fit`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; `value`: `string`; \}; `symbol-avoid-edges`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `symbol-placement`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `` `line-center` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `line`: \{ `doc`: `string`; \}; `line-center`: \{ `doc`: `string`; \}; `point`: \{ `doc`: `string`; \}; \}; \}; `symbol-sort-key`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `symbol-spacing`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `symbol-z-order`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `source`: \{ `doc`: `string`; \}; `viewport-y`: \{ `doc`: `string`; \}; \}; \}; `text-allow-overlap`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `text-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \}; \}; `text-field`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `tokens`: `boolean`; `type`: `string`; \}; `text-font`: \{ `default`: `string`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `local fonts`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; \}; `text-ignore-placement`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `text-justify`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `auto`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; \}; \}; `text-keep-upright`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement?`: `undefined`; `text-rotation-alignment`: `string`; \} \| \{ `symbol-placement`: `string`[]; `text-rotation-alignment?`: `undefined`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `text-letter-spacing`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-line-height`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-max-angle`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-max-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-offset`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; `value`: `string`; \}; `text-optional`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `text-overlap`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `always`: \{ `doc`: `string`; \}; `cooperative`: \{ `doc`: `string`; \}; `never`: \{ `doc`: `string`; \}; \}; \}; `text-padding`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-pitch-alignment`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `text-radial-offset`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-rotate`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `period`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-rotation-alignment`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `` `viewport-glyph` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; `viewport-glyph`: \{ `doc`: `string`; \}; \}; \}; `text-size`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-transform`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `lowercase`: \{ `doc`: `string`; \}; `none`: \{ `doc`: `string`; \}; `uppercase`: \{ `doc`: `string`; \}; \}; \}; `text-variable-anchor`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; `values`: \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \}; \}; `text-variable-anchor-offset`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `text-writing-mode`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; `values`: \{ `horizontal`: \{ `doc`: `string`; \}; `vertical`: \{ `doc`: `string`; \}; \}; \}; `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \}; `light`: \{ `anchor`: \{ `default`: `string`; `doc`: `string`; `example`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `intensity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `position`: \{ `default`: `number`[]; `doc`: `string`; `example`: `number`[]; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `value`: `string`; \}; \}; `paint`: `string`[]; `paint_background`: \{ `background-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `background-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `background-pattern`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \}; `transition`: `boolean`; `type`: `string`; \}; \}; `paint_circle`: \{ `circle-blur`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `circle-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `circle-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `circle-pitch-alignment`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `circle-pitch-scale`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `circle-radius`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `circle-stroke-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `circle-stroke-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `circle-stroke-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `circle-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `circle-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; \}; `paint_fill`: \{ `fill-antialias`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `fill-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-outline-color`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (\{ `!`: `string`; `fill-antialias?`: `undefined`; \} \| \{ `!?`: `undefined`; `fill-antialias`: `boolean`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-pattern`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `fill-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; \}; `paint_fill-extrusion`: \{ `fill-extrusion-base`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `fill-extrusion-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-extrusion-height`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `fill-extrusion-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-extrusion-pattern`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-extrusion-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `fill-extrusion-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `fill-extrusion-vertical-gradient`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; \}; `paint_heatmap`: \{ `heatmap-color`: \{ `default`: (`string` \| `number` \| `string`[])[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \}; `transition`: `boolean`; `type`: `string`; \}; `heatmap-intensity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `heatmap-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `heatmap-radius`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `heatmap-weight`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; \}; `paint_hillshade`: \{ `hillshade-accent-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `hillshade-exaggeration`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `hillshade-highlight-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `hillshade-illumination-altitude`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `hillshade-illumination-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `hillshade-illumination-direction`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `hillshade-method`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `basic`: \{ `doc`: `string`; \}; `combined`: \{ `doc`: `string`; \}; `igor`: \{ `doc`: `string`; \}; `multidirectional`: \{ `doc`: `string`; \}; `standard`: \{ `doc`: `string`; \}; \}; \}; `hillshade-shadow-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; \}; `paint_line`: \{ `line-blur`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `line-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `line-dasharray`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `line-gap-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `line-gradient`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (\{ `!`: `string`; `has?`: `undefined`; `source?`: `undefined`; \} \| \{ `!?`: `undefined`; `has`: \{ `lineMetrics`: `boolean`; \}; `source`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \}; `transition`: `boolean`; `type`: `string`; \}; `line-offset`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `line-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `line-pattern`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `line-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `line-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `line-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; \}; `paint_raster`: \{ `raster-brightness-max`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `raster-brightness-min`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `raster-contrast`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `raster-fade-duration`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `raster-hue-rotate`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `period`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `raster-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `raster-resampling`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `linear`: \{ `doc`: `string`; \}; `nearest`: \{ `doc`: `string`; \}; \}; \}; `raster-saturation`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; \}; `paint_symbol`: \{ `icon-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `icon-halo-blur`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `icon-halo-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `icon-halo-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `icon-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `icon-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `icon-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `text-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `overridable`: `boolean`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `text-halo-blur`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `text-halo-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `text-halo-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `text-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `text-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `text-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; \}; `projection`: \{ `type`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; \}; `promoteId`: \{ `*`: \{ `doc`: `string`; `type`: `string`; \}; \}; `property-type`: \{ `color-ramp`: \{ `doc`: `string`; `type`: `string`; \}; `constant`: \{ `doc`: `string`; `type`: `string`; \}; `cross-faded`: \{ `doc`: `string`; `type`: `string`; \}; `cross-faded-data-driven`: \{ `doc`: `string`; `type`: `string`; \}; `data-constant`: \{ `doc`: `string`; `type`: `string`; \}; `data-driven`: \{ `doc`: `string`; `type`: `string`; \}; \}; `sky`: \{ `atmosphere-blend`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `fog-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `fog-ground-blend`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `horizon-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `horizon-fog-blend`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `sky-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `sky-horizon-blend`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; \}; `source`: `string`[]; `source_geojson`: \{ `attribution`: \{ `doc`: `string`; `type`: `string`; \}; `buffer`: \{ `default`: `number`; `doc`: `string`; `maximum`: `number`; `minimum`: `number`; `type`: `string`; \}; `cluster`: \{ `default`: `boolean`; `doc`: `string`; `type`: `string`; \}; `clusterMaxZoom`: \{ `doc`: `string`; `type`: `string`; \}; `clusterMinPoints`: \{ `doc`: `string`; `type`: `string`; \}; `clusterProperties`: \{ `doc`: `string`; `type`: `string`; \}; `clusterRadius`: \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; \}; `data`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \}; `filter`: \{ `doc`: `string`; `type`: `string`; \}; `generateId`: \{ `default`: `boolean`; `doc`: `string`; `type`: `string`; \}; `lineMetrics`: \{ `default`: `boolean`; `doc`: `string`; `type`: `string`; \}; `maxzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `promoteId`: \{ `doc`: `string`; `type`: `string`; \}; `tolerance`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `geojson`: \{ `doc`: `string`; \}; \}; \}; \}; `source_image`: \{ `coordinates`: \{ `doc`: `string`; `length`: `number`; `required`: `boolean`; `type`: `string`; `value`: \{ `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `image`: \{ `doc`: `string`; \}; \}; \}; `url`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \}; \}; `source_raster`: \{ `*`: \{ `doc`: `string`; `type`: `string`; \}; `attribution`: \{ `doc`: `string`; `type`: `string`; \}; `bounds`: \{ `default`: `number`[]; `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; `maxzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `minzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `scheme`: \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `tms`: \{ `doc`: `string`; \}; `xyz`: \{ `doc`: `string`; \}; \}; \}; `tiles`: \{ `doc`: `string`; `type`: `string`; `value`: `string`; \}; `tileSize`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; `units`: `string`; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `raster`: \{ `doc`: `string`; \}; \}; \}; `url`: \{ `doc`: `string`; `type`: `string`; \}; `volatile`: \{ `default`: `boolean`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; \}; `source_raster_dem`: \{ `*`: \{ `doc`: `string`; `type`: `string`; \}; `attribution`: \{ `doc`: `string`; `type`: `string`; \}; `baseShift`: \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `blueFactor`: \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `bounds`: \{ `default`: `number`[]; `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; `encoding`: \{ `default`: `string`; `doc`: `string`; `sdk-support`: \{ `custom`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `mapbox, terrarium`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `custom`: \{ `doc`: `string`; \}; `mapbox`: \{ `doc`: `string`; \}; `terrarium`: \{ `doc`: `string`; \}; \}; \}; `greenFactor`: \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `maxzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `minzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `redFactor`: \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `tiles`: \{ `doc`: `string`; `type`: `string`; `value`: `string`; \}; `tileSize`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; `units`: `string`; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `raster-dem`: \{ `doc`: `string`; \}; \}; \}; `url`: \{ `doc`: `string`; `type`: `string`; \}; `volatile`: \{ `default`: `boolean`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; \}; `source_vector`: \{ `*`: \{ `doc`: `string`; `type`: `string`; \}; `attribution`: \{ `doc`: `string`; `type`: `string`; \}; `bounds`: \{ `default`: `number`[]; `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; `maxzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `minzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `promoteId`: \{ `doc`: `string`; `type`: `string`; \}; `scheme`: \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `tms`: \{ `doc`: `string`; \}; `xyz`: \{ `doc`: `string`; \}; \}; \}; `tiles`: \{ `doc`: `string`; `type`: `string`; `value`: `string`; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `vector`: \{ `doc`: `string`; \}; \}; \}; `url`: \{ `doc`: `string`; `type`: `string`; \}; `volatile`: \{ `default`: `boolean`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; \}; `source_video`: \{ `coordinates`: \{ `doc`: `string`; `length`: `number`; `required`: `boolean`; `type`: `string`; `value`: \{ `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `video`: \{ `doc`: `string`; \}; \}; \}; `urls`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `value`: `string`; \}; \}; `sources`: \{ `*`: \{ `doc`: `string`; `type`: `string`; \}; \}; `terrain`: \{ `exaggeration`: \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `source`: \{ `doc`: `string`; `required`: `boolean`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; \}; `transition`: \{ `delay`: \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; `units`: `string`; \}; `duration`: \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; `units`: `string`; \}; \}; \} | The style specification to validate against. If omitted, the latest style spec is used. |
| `styleSpec.$root?` | \{ `bearing`: \{ `default`: `number`; `doc`: `string`; `example`: `number`; `period`: `number`; `type`: `string`; `units`: `string`; \}; `center`: \{ `doc`: `string`; `example`: `number`[]; `type`: `string`; `value`: `string`; \}; `centerAltitude`: \{ `doc`: `string`; `example`: `number`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `glyphs`: \{ `doc`: `string`; `example`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `omit to use local fonts`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `layers`: \{ `doc`: `string`; `example`: `object`[]; `required`: `boolean`; `type`: `string`; `value`: `string`; \}; `light`: \{ `doc`: `string`; `example`: \{ `anchor`: `string`; `color`: `string`; `intensity`: `number`; \}; `type`: `string`; \}; `metadata`: \{ `doc`: `string`; `example`: \{ `example:object`: \{ `Boolean`: `boolean`; `Number`: `number`; `String`: `string`; \}; `styleeditor:comment`: `string`; `styleeditor:slimmode`: `boolean`; `styleeditor:version`: `string`; \}; `type`: `string`; \}; `name`: \{ `doc`: `string`; `example`: `string`; `type`: `string`; \}; `pitch`: \{ `default`: `number`; `doc`: `string`; `example`: `number`; `sdk-support`: \{ `0-180 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `0-60 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `0-85 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `projection`: \{ `doc`: `string`; `example`: \{ `type`: (`string` \| `number` \| `string`[])[]; \}; `type`: `string`; \}; `roll`: \{ `default`: `number`; `doc`: `string`; `example`: `number`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `sky`: \{ `doc`: `string`; `example`: \{ `atmosphere-blend`: (`string` \| `number` \| `string`[])[]; `fog-color`: `string`; `fog-ground-blend`: `number`; `horizon-color`: `string`; `horizon-fog-blend`: `number`; `sky-color`: `string`; `sky-horizon-blend`: `number`; \}; `type`: `string`; \}; `sources`: \{ `doc`: `string`; `example`: \{ `maplibre-demotiles`: \{ `type`: `string`; `url`: `string`; \}; `maplibre-streets`: \{ `maxzoom`: `number`; `tiles`: `string`[]; `type`: `string`; \}; `maplibre-tilejson`: \{ `type`: `string`; `url`: `string`; \}; `wms-imagery`: \{ `tiles`: `string`[]; `tileSize`: `number`; `type`: `string`; \}; \}; `required`: `boolean`; `type`: `string`; \}; `sprite`: \{ `doc`: `string`; `example`: `string`; `type`: `string`; \}; `state`: \{ `default`: \{ \}; `doc`: `string`; `example`: \{ `chargerType`: \{ `default`: `string`[]; \}; `minPreferredChargingSpeed`: \{ `default`: `number`; \}; \}; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `terrain`: \{ `doc`: `string`; `example`: \{ `exaggeration`: `number`; `source`: `string`; \}; `type`: `string`; \}; `transition`: \{ `doc`: `string`; `example`: \{ `delay`: `number`; `duration`: `number`; \}; `type`: `string`; \}; `version`: \{ `doc`: `string`; `example`: `number`; `required`: `boolean`; `type`: `string`; `values`: `number`[]; \}; `zoom`: \{ `doc`: `string`; `example`: `number`; `type`: `string`; \}; \} | - |
| `styleSpec.$root.bearing?` | \{ `default`: `number`; `doc`: `string`; `example`: `number`; `period`: `number`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.$root.bearing.default?` | `number` | - |
| `styleSpec.$root.bearing.doc?` | `string` | - |
| `styleSpec.$root.bearing.example?` | `number` | - |
| `styleSpec.$root.bearing.period?` | `number` | - |
| `styleSpec.$root.bearing.type?` | `string` | - |
| `styleSpec.$root.bearing.units?` | `string` | - |
| `styleSpec.$root.center?` | \{ `doc`: `string`; `example`: `number`[]; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.$root.center.doc?` | `string` | - |
| `styleSpec.$root.center.example?` | `number`[] | - |
| `styleSpec.$root.center.type?` | `string` | - |
| `styleSpec.$root.center.value?` | `string` | - |
| `styleSpec.$root.centerAltitude?` | \{ `doc`: `string`; `example`: `number`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.$root.centerAltitude.doc?` | `string` | - |
| `styleSpec.$root.centerAltitude.example?` | `number` | - |
| `styleSpec.$root.centerAltitude.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.$root.centerAltitude.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.$root.centerAltitude.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.$root.centerAltitude.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.$root.centerAltitude.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.$root.centerAltitude.type?` | `string` | - |
| `styleSpec.$root.glyphs?` | \{ `doc`: `string`; `example`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `omit to use local fonts`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.$root.glyphs.doc?` | `string` | - |
| `styleSpec.$root.glyphs.example?` | `string` | - |
| `styleSpec.$root.glyphs.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `omit to use local fonts`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.$root.glyphs.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.$root.glyphs.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.$root.glyphs.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.$root.glyphs.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.$root.glyphs.sdk-support.omit to use local fonts?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.$root.glyphs.sdk-support.omit to use local fonts.android?` | `string` | - |
| `styleSpec.$root.glyphs.sdk-support.omit to use local fonts.ios?` | `string` | - |
| `styleSpec.$root.glyphs.sdk-support.omit to use local fonts.js?` | `string` | - |
| `styleSpec.$root.glyphs.type?` | `string` | - |
| `styleSpec.$root.layers?` | \{ `doc`: `string`; `example`: `object`[]; `required`: `boolean`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.$root.layers.doc?` | `string` | - |
| `styleSpec.$root.layers.example?` | `object`[] | - |
| `styleSpec.$root.layers.required?` | `boolean` | - |
| `styleSpec.$root.layers.type?` | `string` | - |
| `styleSpec.$root.layers.value?` | `string` | - |
| `styleSpec.$root.light?` | \{ `doc`: `string`; `example`: \{ `anchor`: `string`; `color`: `string`; `intensity`: `number`; \}; `type`: `string`; \} | - |
| `styleSpec.$root.light.doc?` | `string` | - |
| `styleSpec.$root.light.example?` | \{ `anchor`: `string`; `color`: `string`; `intensity`: `number`; \} | - |
| `styleSpec.$root.light.example.anchor?` | `string` | - |
| `styleSpec.$root.light.example.color?` | `string` | - |
| `styleSpec.$root.light.example.intensity?` | `number` | - |
| `styleSpec.$root.light.type?` | `string` | - |
| `styleSpec.$root.metadata?` | \{ `doc`: `string`; `example`: \{ `example:object`: \{ `Boolean`: `boolean`; `Number`: `number`; `String`: `string`; \}; `styleeditor:comment`: `string`; `styleeditor:slimmode`: `boolean`; `styleeditor:version`: `string`; \}; `type`: `string`; \} | - |
| `styleSpec.$root.metadata.doc?` | `string` | - |
| `styleSpec.$root.metadata.example?` | \{ `example:object`: \{ `Boolean`: `boolean`; `Number`: `number`; `String`: `string`; \}; `styleeditor:comment`: `string`; `styleeditor:slimmode`: `boolean`; `styleeditor:version`: `string`; \} | - |
| `styleSpec.$root.metadata.example.example:object?` | \{ `Boolean`: `boolean`; `Number`: `number`; `String`: `string`; \} | - |
| `styleSpec.$root.metadata.example.example:object.Boolean?` | `boolean` | - |
| `styleSpec.$root.metadata.example.example:object.Number?` | `number` | - |
| `styleSpec.$root.metadata.example.example:object.String?` | `string` | - |
| `styleSpec.$root.metadata.example.styleeditor:comment?` | `string` | - |
| `styleSpec.$root.metadata.example.styleeditor:slimmode?` | `boolean` | - |
| `styleSpec.$root.metadata.example.styleeditor:version?` | `string` | - |
| `styleSpec.$root.metadata.type?` | `string` | - |
| `styleSpec.$root.name?` | \{ `doc`: `string`; `example`: `string`; `type`: `string`; \} | - |
| `styleSpec.$root.name.doc?` | `string` | - |
| `styleSpec.$root.name.example?` | `string` | - |
| `styleSpec.$root.name.type?` | `string` | - |
| `styleSpec.$root.pitch?` | \{ `default`: `number`; `doc`: `string`; `example`: `number`; `sdk-support`: \{ `0-180 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `0-60 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `0-85 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.$root.pitch.default?` | `number` | - |
| `styleSpec.$root.pitch.doc?` | `string` | - |
| `styleSpec.$root.pitch.example?` | `number` | - |
| `styleSpec.$root.pitch.sdk-support?` | \{ `0-180 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `0-60 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `0-85 degrees`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.$root.pitch.sdk-support.0-180 degrees?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.$root.pitch.sdk-support.0-180 degrees.android?` | `string` | - |
| `styleSpec.$root.pitch.sdk-support.0-180 degrees.ios?` | `string` | - |
| `styleSpec.$root.pitch.sdk-support.0-180 degrees.js?` | `string` | - |
| `styleSpec.$root.pitch.sdk-support.0-60 degrees?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.$root.pitch.sdk-support.0-60 degrees.android?` | `string` | - |
| `styleSpec.$root.pitch.sdk-support.0-60 degrees.ios?` | `string` | - |
| `styleSpec.$root.pitch.sdk-support.0-60 degrees.js?` | `string` | - |
| `styleSpec.$root.pitch.sdk-support.0-85 degrees?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.$root.pitch.sdk-support.0-85 degrees.android?` | `string` | - |
| `styleSpec.$root.pitch.sdk-support.0-85 degrees.ios?` | `string` | - |
| `styleSpec.$root.pitch.sdk-support.0-85 degrees.js?` | `string` | - |
| `styleSpec.$root.pitch.type?` | `string` | - |
| `styleSpec.$root.pitch.units?` | `string` | - |
| `styleSpec.$root.projection?` | \{ `doc`: `string`; `example`: \{ `type`: (`string` \| `number` \| `string`[])[]; \}; `type`: `string`; \} | - |
| `styleSpec.$root.projection.doc?` | `string` | - |
| `styleSpec.$root.projection.example?` | \{ `type`: (`string` \| `number` \| `string`[])[]; \} | - |
| `styleSpec.$root.projection.example.type?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.$root.projection.type?` | `string` | - |
| `styleSpec.$root.roll?` | \{ `default`: `number`; `doc`: `string`; `example`: `number`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.$root.roll.default?` | `number` | - |
| `styleSpec.$root.roll.doc?` | `string` | - |
| `styleSpec.$root.roll.example?` | `number` | - |
| `styleSpec.$root.roll.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.$root.roll.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.$root.roll.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.$root.roll.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.$root.roll.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.$root.roll.type?` | `string` | - |
| `styleSpec.$root.roll.units?` | `string` | - |
| `styleSpec.$root.sky?` | \{ `doc`: `string`; `example`: \{ `atmosphere-blend`: (`string` \| `number` \| `string`[])[]; `fog-color`: `string`; `fog-ground-blend`: `number`; `horizon-color`: `string`; `horizon-fog-blend`: `number`; `sky-color`: `string`; `sky-horizon-blend`: `number`; \}; `type`: `string`; \} | - |
| `styleSpec.$root.sky.doc?` | `string` | - |
| `styleSpec.$root.sky.example?` | \{ `atmosphere-blend`: (`string` \| `number` \| `string`[])[]; `fog-color`: `string`; `fog-ground-blend`: `number`; `horizon-color`: `string`; `horizon-fog-blend`: `number`; `sky-color`: `string`; `sky-horizon-blend`: `number`; \} | - |
| `styleSpec.$root.sky.example.atmosphere-blend?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.$root.sky.example.fog-color?` | `string` | - |
| `styleSpec.$root.sky.example.fog-ground-blend?` | `number` | - |
| `styleSpec.$root.sky.example.horizon-color?` | `string` | - |
| `styleSpec.$root.sky.example.horizon-fog-blend?` | `number` | - |
| `styleSpec.$root.sky.example.sky-color?` | `string` | - |
| `styleSpec.$root.sky.example.sky-horizon-blend?` | `number` | - |
| `styleSpec.$root.sky.type?` | `string` | - |
| `styleSpec.$root.sources?` | \{ `doc`: `string`; `example`: \{ `maplibre-demotiles`: \{ `type`: `string`; `url`: `string`; \}; `maplibre-streets`: \{ `maxzoom`: `number`; `tiles`: `string`[]; `type`: `string`; \}; `maplibre-tilejson`: \{ `type`: `string`; `url`: `string`; \}; `wms-imagery`: \{ `tiles`: `string`[]; `tileSize`: `number`; `type`: `string`; \}; \}; `required`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.$root.sources.doc?` | `string` | - |
| `styleSpec.$root.sources.example?` | \{ `maplibre-demotiles`: \{ `type`: `string`; `url`: `string`; \}; `maplibre-streets`: \{ `maxzoom`: `number`; `tiles`: `string`[]; `type`: `string`; \}; `maplibre-tilejson`: \{ `type`: `string`; `url`: `string`; \}; `wms-imagery`: \{ `tiles`: `string`[]; `tileSize`: `number`; `type`: `string`; \}; \} | - |
| `styleSpec.$root.sources.example.maplibre-demotiles?` | \{ `type`: `string`; `url`: `string`; \} | - |
| `styleSpec.$root.sources.example.maplibre-demotiles.type?` | `string` | - |
| `styleSpec.$root.sources.example.maplibre-demotiles.url?` | `string` | - |
| `styleSpec.$root.sources.example.maplibre-streets?` | \{ `maxzoom`: `number`; `tiles`: `string`[]; `type`: `string`; \} | - |
| `styleSpec.$root.sources.example.maplibre-streets.maxzoom?` | `number` | - |
| `styleSpec.$root.sources.example.maplibre-streets.tiles?` | `string`[] | - |
| `styleSpec.$root.sources.example.maplibre-streets.type?` | `string` | - |
| `styleSpec.$root.sources.example.maplibre-tilejson?` | \{ `type`: `string`; `url`: `string`; \} | - |
| `styleSpec.$root.sources.example.maplibre-tilejson.type?` | `string` | - |
| `styleSpec.$root.sources.example.maplibre-tilejson.url?` | `string` | - |
| `styleSpec.$root.sources.example.wms-imagery?` | \{ `tiles`: `string`[]; `tileSize`: `number`; `type`: `string`; \} | - |
| `styleSpec.$root.sources.example.wms-imagery.tiles?` | `string`[] | - |
| `styleSpec.$root.sources.example.wms-imagery.tileSize?` | `number` | - |
| `styleSpec.$root.sources.example.wms-imagery.type?` | `string` | - |
| `styleSpec.$root.sources.required?` | `boolean` | - |
| `styleSpec.$root.sources.type?` | `string` | - |
| `styleSpec.$root.sprite?` | \{ `doc`: `string`; `example`: `string`; `type`: `string`; \} | - |
| `styleSpec.$root.sprite.doc?` | `string` | - |
| `styleSpec.$root.sprite.example?` | `string` | - |
| `styleSpec.$root.sprite.type?` | `string` | - |
| `styleSpec.$root.state?` | \{ `default`: \{ \}; `doc`: `string`; `example`: \{ `chargerType`: \{ `default`: `string`[]; \}; `minPreferredChargingSpeed`: \{ `default`: `number`; \}; \}; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.$root.state.default?` | \{ \} | - |
| `styleSpec.$root.state.doc?` | `string` | - |
| `styleSpec.$root.state.example?` | \{ `chargerType`: \{ `default`: `string`[]; \}; `minPreferredChargingSpeed`: \{ `default`: `number`; \}; \} | - |
| `styleSpec.$root.state.example.chargerType?` | \{ `default`: `string`[]; \} | - |
| `styleSpec.$root.state.example.chargerType.default?` | `string`[] | - |
| `styleSpec.$root.state.example.minPreferredChargingSpeed?` | \{ `default`: `number`; \} | - |
| `styleSpec.$root.state.example.minPreferredChargingSpeed.default?` | `number` | - |
| `styleSpec.$root.state.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.$root.state.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.$root.state.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.$root.state.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.$root.state.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.$root.state.type?` | `string` | - |
| `styleSpec.$root.terrain?` | \{ `doc`: `string`; `example`: \{ `exaggeration`: `number`; `source`: `string`; \}; `type`: `string`; \} | - |
| `styleSpec.$root.terrain.doc?` | `string` | - |
| `styleSpec.$root.terrain.example?` | \{ `exaggeration`: `number`; `source`: `string`; \} | - |
| `styleSpec.$root.terrain.example.exaggeration?` | `number` | - |
| `styleSpec.$root.terrain.example.source?` | `string` | - |
| `styleSpec.$root.terrain.type?` | `string` | - |
| `styleSpec.$root.transition?` | \{ `doc`: `string`; `example`: \{ `delay`: `number`; `duration`: `number`; \}; `type`: `string`; \} | - |
| `styleSpec.$root.transition.doc?` | `string` | - |
| `styleSpec.$root.transition.example?` | \{ `delay`: `number`; `duration`: `number`; \} | - |
| `styleSpec.$root.transition.example.delay?` | `number` | - |
| `styleSpec.$root.transition.example.duration?` | `number` | - |
| `styleSpec.$root.transition.type?` | `string` | - |
| `styleSpec.$root.version?` | \{ `doc`: `string`; `example`: `number`; `required`: `boolean`; `type`: `string`; `values`: `number`[]; \} | - |
| `styleSpec.$root.version.doc?` | `string` | - |
| `styleSpec.$root.version.example?` | `number` | - |
| `styleSpec.$root.version.required?` | `boolean` | - |
| `styleSpec.$root.version.type?` | `string` | - |
| `styleSpec.$root.version.values?` | `number`[] | - |
| `styleSpec.$root.zoom?` | \{ `doc`: `string`; `example`: `number`; `type`: `string`; \} | - |
| `styleSpec.$root.zoom.doc?` | `string` | - |
| `styleSpec.$root.zoom.example?` | `number` | - |
| `styleSpec.$root.zoom.type?` | `string` | - |
| `styleSpec.$version?` | `number` | - |
| `styleSpec.expression?` | \{ `doc`: `string`; `minimum`: `number`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.expression.doc?` | `string` | - |
| `styleSpec.expression.minimum?` | `number` | - |
| `styleSpec.expression.type?` | `string` | - |
| `styleSpec.expression.value?` | `string` | - |
| `styleSpec.expression_name?` | \{ `doc`: `string`; `type`: `string`; `values`: \{ `-`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `!`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `!=`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `boolean`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `*`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `/`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `%`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `^`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `+`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `<`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `<=`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `==`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `>`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `>=`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `abs`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `accumulated`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `acos`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `all`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `any`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `array`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `asin`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `at`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `atan`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `boolean`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `boolean` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `case`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| `boolean` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `ceil`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `coalesce`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `collator`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `case-sensitive`: `boolean`; `diacritic-sensitive`: `boolean`; `locale`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `concat`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `cos`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `distance`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `coordinates`: `number`[]; `type`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `downcase`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `e`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `feature-state`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `floor`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `format`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| ...[])[] \| \{ `font-scale`: `number`; `vertical-align?`: `undefined`; \} \| \{ `font-scale?`: `undefined`; `vertical-align?`: `undefined`; \} \| \{ `font-scale`: `number`; `vertical-align`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `font-scale`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `image`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `text-color`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `text-font`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `vertical-align`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `geometry-type`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `get`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `global-state`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `has`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `heatmap-density`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `id`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `image`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `in`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `index-of`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `interpolate`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `interpolate-hcl`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `interpolate-lab`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `is-supported-script`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `length`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `let`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `line-progress`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `literal`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `ln`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `ln2`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `log10`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `log2`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `match`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `max`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `min`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `number`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `number-format`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[] \| \{ `max-fraction-digits`: `number`; `min-fraction-digits`: `number`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `object`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `pi`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `properties`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `resolved-locale`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| \{ `case-sensitive`: ...; `diacritic-sensitive`: ...; `locale`: ...; \})[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `rgb`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `rgba`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `round`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `sin`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `slice`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `sqrt`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `step`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `string`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `tan`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-boolean`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-color`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-number`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-rgba`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-string`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `typeof`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `upcase`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `var`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `within`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `coordinates`: ...[][]; `type`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `zoom`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; \}; \} | - |
| `styleSpec.expression_name.doc?` | `string` | - |
| `styleSpec.expression_name.type?` | `string` | - |
| `styleSpec.expression_name.values?` | \{ `-`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `!`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `!=`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `boolean`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `*`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `/`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `%`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `^`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `+`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `<`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `<=`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `==`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `>`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `>=`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `abs`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `accumulated`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `acos`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `all`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `any`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `array`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `asin`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `at`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `atan`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `boolean`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `boolean` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `case`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| `boolean` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `ceil`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `coalesce`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `collator`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `case-sensitive`: `boolean`; `diacritic-sensitive`: `boolean`; `locale`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `concat`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `cos`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `distance`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `coordinates`: `number`[]; `type`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `downcase`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `e`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `feature-state`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `floor`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `format`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| ...[])[] \| \{ `font-scale`: `number`; `vertical-align?`: `undefined`; \} \| \{ `font-scale?`: `undefined`; `vertical-align?`: `undefined`; \} \| \{ `font-scale`: `number`; `vertical-align`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `font-scale`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `image`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `text-color`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `text-font`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `vertical-align`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `geometry-type`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `get`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `global-state`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `has`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `heatmap-density`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `id`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `image`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `in`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `index-of`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `interpolate`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `interpolate-hcl`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `interpolate-lab`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `is-supported-script`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `length`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `let`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `line-progress`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `literal`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `ln`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `ln2`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `log10`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `log2`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `match`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `max`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `min`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `number`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `number-format`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[] \| \{ `max-fraction-digits`: `number`; `min-fraction-digits`: `number`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `object`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `pi`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `properties`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `resolved-locale`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| \{ `case-sensitive`: ...; `diacritic-sensitive`: ...; `locale`: ...; \})[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `rgb`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `rgba`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `round`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `sin`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `slice`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `sqrt`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `step`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `string`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `tan`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-boolean`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-color`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-number`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-rgba`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `to-string`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `typeof`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `upcase`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `var`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `within`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `coordinates`: ...[][]; `type`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `zoom`: \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; \} | - |
| `styleSpec.expression_name.values.-?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.-.doc?` | `string` | - |
| `styleSpec.expression_name.values.-.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.-.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.-.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.-.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.-.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.-.group?` | `string` | - |
| `styleSpec.expression_name.values.-.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.-.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.-.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.-.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.-.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.!?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.!.doc?` | `string` | - |
| `styleSpec.expression_name.values.!.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.!.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.!.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.!.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.!.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.!.group?` | `string` | - |
| `styleSpec.expression_name.values.!.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.!.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.!.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.!.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.!.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.!=?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `boolean`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.!=.doc?` | `string` | - |
| `styleSpec.expression_name.values.!=.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `boolean`)[]; \} | - |
| `styleSpec.expression_name.values.!=.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.!=.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.!=.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.!=.example.value?` | (`string` \| `boolean`)[] | - |
| `styleSpec.expression_name.values.!=.group?` | `string` | - |
| `styleSpec.expression_name.values.!=.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.!=.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.!=.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.!=.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.!=.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.!=.sdk-support.collator?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.!=.sdk-support.collator.android?` | `string` | - |
| `styleSpec.expression_name.values.!=.sdk-support.collator.ios?` | `string` | - |
| `styleSpec.expression_name.values.!=.sdk-support.collator.js?` | `string` | - |
| `styleSpec.expression_name.values.*?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.*.doc?` | `string` | - |
| `styleSpec.expression_name.values.*.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.*.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.*.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.*.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.*.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.*.group?` | `string` | - |
| `styleSpec.expression_name.values.*.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.*.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.*.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.*.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.*.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values./?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values./.doc?` | `string` | - |
| `styleSpec.expression_name.values./.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values./.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values./.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values./.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values./.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values./.group?` | `string` | - |
| `styleSpec.expression_name.values./.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values./.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values./.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values./.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values./.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.%?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.%.doc?` | `string` | - |
| `styleSpec.expression_name.values.%.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.%.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.%.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.%.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.%.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.%.group?` | `string` | - |
| `styleSpec.expression_name.values.%.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.%.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.%.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.%.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.%.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.^?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.^.doc?` | `string` | - |
| `styleSpec.expression_name.values.^.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.^.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.^.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.^.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.^.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.^.group?` | `string` | - |
| `styleSpec.expression_name.values.^.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.^.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.^.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.^.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.^.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.+?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.+.doc?` | `string` | - |
| `styleSpec.expression_name.values.+.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.+.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.+.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.+.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.+.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.+.group?` | `string` | - |
| `styleSpec.expression_name.values.+.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.+.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.+.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.+.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.+.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.<?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.<.doc?` | `string` | - |
| `styleSpec.expression_name.values.<.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.<.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.<.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.<.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.<.example.value?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.expression_name.values.<.group?` | `string` | - |
| `styleSpec.expression_name.values.<.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.<.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.<.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.<.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.<.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.<.sdk-support.collator?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.<.sdk-support.collator.android?` | `string` | - |
| `styleSpec.expression_name.values.<.sdk-support.collator.ios?` | `string` | - |
| `styleSpec.expression_name.values.<.sdk-support.collator.js?` | `string` | - |
| `styleSpec.expression_name.values.<=?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.<=.doc?` | `string` | - |
| `styleSpec.expression_name.values.<=.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.<=.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.<=.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.<=.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.<=.example.value?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.expression_name.values.<=.group?` | `string` | - |
| `styleSpec.expression_name.values.<=.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.<=.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.<=.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.<=.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.<=.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.<=.sdk-support.collator?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.<=.sdk-support.collator.android?` | `string` | - |
| `styleSpec.expression_name.values.<=.sdk-support.collator.ios?` | `string` | - |
| `styleSpec.expression_name.values.<=.sdk-support.collator.js?` | `string` | - |
| `styleSpec.expression_name.values.==?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.==.doc?` | `string` | - |
| `styleSpec.expression_name.values.==.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.==.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.==.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.==.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.==.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.==.group?` | `string` | - |
| `styleSpec.expression_name.values.==.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.==.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.==.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.==.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.==.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.==.sdk-support.collator?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.==.sdk-support.collator.android?` | `string` | - |
| `styleSpec.expression_name.values.==.sdk-support.collator.ios?` | `string` | - |
| `styleSpec.expression_name.values.==.sdk-support.collator.js?` | `string` | - |
| `styleSpec.expression_name.values.>?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.>.doc?` | `string` | - |
| `styleSpec.expression_name.values.>.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.>.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.>.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.>.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.>.example.value?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.expression_name.values.>.group?` | `string` | - |
| `styleSpec.expression_name.values.>.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.>.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.>.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.>.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.>.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.>.sdk-support.collator?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.>.sdk-support.collator.android?` | `string` | - |
| `styleSpec.expression_name.values.>.sdk-support.collator.ios?` | `string` | - |
| `styleSpec.expression_name.values.>.sdk-support.collator.js?` | `string` | - |
| `styleSpec.expression_name.values.>=?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.>=.doc?` | `string` | - |
| `styleSpec.expression_name.values.>=.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.>=.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.>=.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.>=.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.>=.example.value?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.expression_name.values.>=.group?` | `string` | - |
| `styleSpec.expression_name.values.>=.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `collator`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.>=.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.>=.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.>=.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.>=.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.>=.sdk-support.collator?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.>=.sdk-support.collator.android?` | `string` | - |
| `styleSpec.expression_name.values.>=.sdk-support.collator.ios?` | `string` | - |
| `styleSpec.expression_name.values.>=.sdk-support.collator.js?` | `string` | - |
| `styleSpec.expression_name.values.abs?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.abs.doc?` | `string` | - |
| `styleSpec.expression_name.values.abs.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.abs.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.abs.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.abs.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.abs.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.abs.group?` | `string` | - |
| `styleSpec.expression_name.values.abs.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.abs.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.abs.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.abs.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.abs.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.accumulated?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.accumulated.doc?` | `string` | - |
| `styleSpec.expression_name.values.accumulated.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.accumulated.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.accumulated.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.accumulated.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.accumulated.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.accumulated.group?` | `string` | - |
| `styleSpec.expression_name.values.accumulated.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.accumulated.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.accumulated.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.accumulated.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.accumulated.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.acos?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.acos.doc?` | `string` | - |
| `styleSpec.expression_name.values.acos.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.acos.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.acos.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.acos.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.acos.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.acos.group?` | `string` | - |
| `styleSpec.expression_name.values.acos.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.acos.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.acos.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.acos.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.acos.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.all?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.all.doc?` | `string` | - |
| `styleSpec.expression_name.values.all.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| `number` \| ...[])[])[]; \} | - |
| `styleSpec.expression_name.values.all.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.all.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.all.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.all.example.value?` | (`string` \| (`string` \| `number` \| ...[])[])[] | - |
| `styleSpec.expression_name.values.all.group?` | `string` | - |
| `styleSpec.expression_name.values.all.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.all.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.all.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.all.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.all.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.any?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.any.doc?` | `string` | - |
| `styleSpec.expression_name.values.any.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| `number` \| ...[])[])[]; \} | - |
| `styleSpec.expression_name.values.any.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.any.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.any.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.any.example.value?` | (`string` \| (`string` \| `number` \| ...[])[])[] | - |
| `styleSpec.expression_name.values.any.group?` | `string` | - |
| `styleSpec.expression_name.values.any.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.any.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.any.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.any.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.any.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.array?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.array.doc?` | `string` | - |
| `styleSpec.expression_name.values.array.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| ...[])[])[]; \} | - |
| `styleSpec.expression_name.values.array.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.array.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.array.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.array.example.value?` | (`string` \| `number` \| (`string` \| ...[])[])[] | - |
| `styleSpec.expression_name.values.array.group?` | `string` | - |
| `styleSpec.expression_name.values.array.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.array.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.array.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.array.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.array.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.asin?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.asin.doc?` | `string` | - |
| `styleSpec.expression_name.values.asin.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.asin.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.asin.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.asin.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.asin.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.asin.group?` | `string` | - |
| `styleSpec.expression_name.values.asin.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.asin.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.asin.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.asin.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.asin.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.at?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.at.doc?` | `string` | - |
| `styleSpec.expression_name.values.at.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| ...[])[])[]; \} | - |
| `styleSpec.expression_name.values.at.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.at.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.at.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.at.example.value?` | (`string` \| `number` \| (`string` \| ...[])[])[] | - |
| `styleSpec.expression_name.values.at.group?` | `string` | - |
| `styleSpec.expression_name.values.at.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.at.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.at.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.at.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.at.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.atan?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.atan.doc?` | `string` | - |
| `styleSpec.expression_name.values.atan.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.atan.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.atan.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.atan.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.atan.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.atan.group?` | `string` | - |
| `styleSpec.expression_name.values.atan.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.atan.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.atan.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.atan.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.atan.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.boolean?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `boolean` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.boolean.doc?` | `string` | - |
| `styleSpec.expression_name.values.boolean.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `boolean` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.boolean.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.boolean.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.boolean.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.boolean.example.value?` | (`string` \| `boolean` \| `string`[])[] | - |
| `styleSpec.expression_name.values.boolean.group?` | `string` | - |
| `styleSpec.expression_name.values.boolean.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.boolean.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.boolean.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.boolean.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.boolean.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.case?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| `boolean` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.case.doc?` | `string` | - |
| `styleSpec.expression_name.values.case.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| `boolean` \| ...[])[])[]; \} | - |
| `styleSpec.expression_name.values.case.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.case.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.case.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.case.example.value?` | (`string` \| `number` \| (`string` \| `boolean` \| ...[])[])[] | - |
| `styleSpec.expression_name.values.case.group?` | `string` | - |
| `styleSpec.expression_name.values.case.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.case.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.case.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.case.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.case.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.ceil?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.ceil.doc?` | `string` | - |
| `styleSpec.expression_name.values.ceil.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.ceil.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.ceil.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.ceil.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.ceil.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.ceil.group?` | `string` | - |
| `styleSpec.expression_name.values.ceil.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.ceil.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.ceil.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.ceil.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.ceil.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.coalesce?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.coalesce.doc?` | `string` | - |
| `styleSpec.expression_name.values.coalesce.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| ...[])[])[]; \} | - |
| `styleSpec.expression_name.values.coalesce.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.coalesce.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.coalesce.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.coalesce.example.value?` | (`string` \| (`string` \| ...[])[])[] | - |
| `styleSpec.expression_name.values.coalesce.group?` | `string` | - |
| `styleSpec.expression_name.values.coalesce.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.coalesce.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.coalesce.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.coalesce.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.coalesce.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.collator?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `case-sensitive`: `boolean`; `diacritic-sensitive`: `boolean`; `locale`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.collator.doc?` | `string` | - |
| `styleSpec.expression_name.values.collator.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `case-sensitive`: `boolean`; `diacritic-sensitive`: `boolean`; `locale`: `string`; \})[]; \} | - |
| `styleSpec.expression_name.values.collator.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.collator.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.collator.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.collator.example.value?` | (`string` \| \{ `case-sensitive`: `boolean`; `diacritic-sensitive`: `boolean`; `locale`: `string`; \})[] | - |
| `styleSpec.expression_name.values.collator.group?` | `string` | - |
| `styleSpec.expression_name.values.collator.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.collator.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.collator.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.collator.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.collator.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.concat?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.concat.doc?` | `string` | - |
| `styleSpec.expression_name.values.concat.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.concat.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.concat.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.concat.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.concat.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.concat.group?` | `string` | - |
| `styleSpec.expression_name.values.concat.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.concat.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.concat.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.concat.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.concat.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.cos?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.cos.doc?` | `string` | - |
| `styleSpec.expression_name.values.cos.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.cos.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.cos.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.cos.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.cos.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.cos.group?` | `string` | - |
| `styleSpec.expression_name.values.cos.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.cos.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.cos.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.cos.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.cos.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.distance?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `coordinates`: `number`[]; `type`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.distance.doc?` | `string` | - |
| `styleSpec.expression_name.values.distance.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `coordinates`: `number`[]; `type`: `string`; \})[]; \} | - |
| `styleSpec.expression_name.values.distance.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.distance.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.distance.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.distance.example.value?` | (`string` \| \{ `coordinates`: `number`[]; `type`: `string`; \})[] | - |
| `styleSpec.expression_name.values.distance.group?` | `string` | - |
| `styleSpec.expression_name.values.distance.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.distance.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.distance.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.distance.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.distance.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.downcase?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.downcase.doc?` | `string` | - |
| `styleSpec.expression_name.values.downcase.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.downcase.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.downcase.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.downcase.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.downcase.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.downcase.group?` | `string` | - |
| `styleSpec.expression_name.values.downcase.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.downcase.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.downcase.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.downcase.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.downcase.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.e?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.e.doc?` | `string` | - |
| `styleSpec.expression_name.values.e.example?` | \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.e.example.syntax?` | \{ `method`: `any`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.e.example.syntax.method?` | `any`[] | - |
| `styleSpec.expression_name.values.e.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.e.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.e.group?` | `string` | - |
| `styleSpec.expression_name.values.e.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.e.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.e.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.e.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.e.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.feature-state?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.feature-state.doc?` | `string` | - |
| `styleSpec.expression_name.values.feature-state.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.feature-state.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.feature-state.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.feature-state.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.feature-state.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.feature-state.group?` | `string` | - |
| `styleSpec.expression_name.values.feature-state.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.feature-state.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.feature-state.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.feature-state.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.feature-state.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.floor?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.floor.doc?` | `string` | - |
| `styleSpec.expression_name.values.floor.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.floor.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.floor.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.floor.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.floor.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.floor.group?` | `string` | - |
| `styleSpec.expression_name.values.floor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.floor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.floor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.floor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.floor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.format?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| ...[])[] \| \{ `font-scale`: `number`; `vertical-align?`: `undefined`; \} \| \{ `font-scale?`: `undefined`; `vertical-align?`: `undefined`; \} \| \{ `font-scale`: `number`; `vertical-align`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `font-scale`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `image`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `text-color`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `text-font`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `vertical-align`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.format.doc?` | `string` | - |
| `styleSpec.expression_name.values.format.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| ...[])[] \| \{ `font-scale`: `number`; `vertical-align?`: `undefined`; \} \| \{ `font-scale?`: `undefined`; `vertical-align?`: `undefined`; \} \| \{ `font-scale`: `number`; `vertical-align`: `string`; \})[]; \} | - |
| `styleSpec.expression_name.values.format.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.format.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.format.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.format.example.value?` | (`string` \| (`string` \| ...[])[] \| \{ `font-scale`: `number`; `vertical-align?`: `undefined`; \} \| \{ `font-scale?`: `undefined`; `vertical-align?`: `undefined`; \} \| \{ `font-scale`: `number`; `vertical-align`: `string`; \})[] | - |
| `styleSpec.expression_name.values.format.group?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `font-scale`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `image`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `text-color`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `text-font`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `vertical-align`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.format.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.format.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.font-scale?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.format.sdk-support.font-scale.android?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.font-scale.ios?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.font-scale.js?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.image?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.format.sdk-support.image.android?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.image.ios?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.image.js?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.text-color?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.format.sdk-support.text-color.android?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.text-color.ios?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.text-color.js?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.text-font?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.format.sdk-support.text-font.android?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.text-font.ios?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.text-font.js?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.vertical-align?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.format.sdk-support.vertical-align.android?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.vertical-align.ios?` | `string` | - |
| `styleSpec.expression_name.values.format.sdk-support.vertical-align.js?` | `string` | - |
| `styleSpec.expression_name.values.geometry-type?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.geometry-type.doc?` | `string` | - |
| `styleSpec.expression_name.values.geometry-type.example?` | \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.geometry-type.example.syntax?` | \{ `method`: `any`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.geometry-type.example.syntax.method?` | `any`[] | - |
| `styleSpec.expression_name.values.geometry-type.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.geometry-type.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.geometry-type.group?` | `string` | - |
| `styleSpec.expression_name.values.geometry-type.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.geometry-type.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.geometry-type.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.geometry-type.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.geometry-type.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.get?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.get.doc?` | `string` | - |
| `styleSpec.expression_name.values.get.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.get.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.get.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.get.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.get.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.get.group?` | `string` | - |
| `styleSpec.expression_name.values.get.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.get.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.get.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.get.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.get.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.global-state?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.global-state.doc?` | `string` | - |
| `styleSpec.expression_name.values.global-state.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.global-state.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.global-state.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.global-state.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.global-state.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.global-state.group?` | `string` | - |
| `styleSpec.expression_name.values.global-state.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.global-state.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.global-state.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.global-state.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.global-state.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.has?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.has.doc?` | `string` | - |
| `styleSpec.expression_name.values.has.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.has.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.has.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.has.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.has.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.has.group?` | `string` | - |
| `styleSpec.expression_name.values.has.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.has.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.has.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.has.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.has.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.heatmap-density?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.heatmap-density.doc?` | `string` | - |
| `styleSpec.expression_name.values.heatmap-density.example?` | \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.heatmap-density.example.syntax?` | \{ `method`: `any`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.heatmap-density.example.syntax.method?` | `any`[] | - |
| `styleSpec.expression_name.values.heatmap-density.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.heatmap-density.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.heatmap-density.group?` | `string` | - |
| `styleSpec.expression_name.values.heatmap-density.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.heatmap-density.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.heatmap-density.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.heatmap-density.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.heatmap-density.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.id?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.id.doc?` | `string` | - |
| `styleSpec.expression_name.values.id.example?` | \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.id.example.syntax?` | \{ `method`: `any`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.id.example.syntax.method?` | `any`[] | - |
| `styleSpec.expression_name.values.id.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.id.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.id.group?` | `string` | - |
| `styleSpec.expression_name.values.id.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.id.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.id.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.id.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.id.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.image?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.image.doc?` | `string` | - |
| `styleSpec.expression_name.values.image.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.image.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.image.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.image.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.image.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.image.group?` | `string` | - |
| `styleSpec.expression_name.values.image.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.image.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.image.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.image.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.image.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.in?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.in.doc?` | `string` | - |
| `styleSpec.expression_name.values.in.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.in.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.in.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.in.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.in.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.in.group?` | `string` | - |
| `styleSpec.expression_name.values.in.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.in.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.in.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.in.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.in.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.index-of?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.index-of.doc?` | `string` | - |
| `styleSpec.expression_name.values.index-of.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.index-of.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.index-of.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.index-of.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.index-of.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.index-of.group?` | `string` | - |
| `styleSpec.expression_name.values.index-of.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.index-of.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.index-of.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.index-of.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.index-of.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.interpolate?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.interpolate.doc?` | `string` | - |
| `styleSpec.expression_name.values.interpolate.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.interpolate.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.interpolate.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.interpolate.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.interpolate.example.value?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.expression_name.values.interpolate.group?` | `string` | - |
| `styleSpec.expression_name.values.interpolate.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.interpolate.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.interpolate.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.interpolate.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.interpolate.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-hcl?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.interpolate-hcl.doc?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-hcl.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.interpolate-hcl.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.interpolate-hcl.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.interpolate-hcl.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-hcl.example.value?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.expression_name.values.interpolate-hcl.group?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-hcl.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.interpolate-hcl.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.interpolate-hcl.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-hcl.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-hcl.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-lab?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.interpolate-lab.doc?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-lab.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.interpolate-lab.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.interpolate-lab.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.interpolate-lab.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-lab.example.value?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.expression_name.values.interpolate-lab.group?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-lab.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.interpolate-lab.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.interpolate-lab.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-lab.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.interpolate-lab.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.is-supported-script?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.is-supported-script.doc?` | `string` | - |
| `styleSpec.expression_name.values.is-supported-script.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.is-supported-script.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.is-supported-script.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.is-supported-script.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.is-supported-script.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.is-supported-script.group?` | `string` | - |
| `styleSpec.expression_name.values.is-supported-script.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.is-supported-script.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.is-supported-script.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.is-supported-script.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.is-supported-script.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.length?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.length.doc?` | `string` | - |
| `styleSpec.expression_name.values.length.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.length.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.length.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.length.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.length.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.length.group?` | `string` | - |
| `styleSpec.expression_name.values.length.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.length.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.length.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.length.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.length.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.let?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| `number` \| ...[])[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.let.doc?` | `string` | - |
| `styleSpec.expression_name.values.let.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| (`string` \| `number` \| ...[])[])[]; \} | - |
| `styleSpec.expression_name.values.let.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.let.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.let.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.let.example.value?` | (`string` \| `number` \| (`string` \| `number` \| ...[])[])[] | - |
| `styleSpec.expression_name.values.let.group?` | `string` | - |
| `styleSpec.expression_name.values.let.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.let.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.let.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.let.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.let.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.line-progress?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.line-progress.doc?` | `string` | - |
| `styleSpec.expression_name.values.line-progress.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.line-progress.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.line-progress.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.line-progress.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.line-progress.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.line-progress.group?` | `string` | - |
| `styleSpec.expression_name.values.line-progress.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.line-progress.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.line-progress.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.line-progress.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.line-progress.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.literal?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.literal.doc?` | `string` | - |
| `styleSpec.expression_name.values.literal.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.literal.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.literal.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.literal.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.literal.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.literal.group?` | `string` | - |
| `styleSpec.expression_name.values.literal.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.literal.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.literal.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.literal.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.literal.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.ln?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.ln.doc?` | `string` | - |
| `styleSpec.expression_name.values.ln.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.ln.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.ln.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.ln.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.ln.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.ln.group?` | `string` | - |
| `styleSpec.expression_name.values.ln.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.ln.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.ln.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.ln.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.ln.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.ln2?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.ln2.doc?` | `string` | - |
| `styleSpec.expression_name.values.ln2.example?` | \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.ln2.example.syntax?` | \{ `method`: `any`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.ln2.example.syntax.method?` | `any`[] | - |
| `styleSpec.expression_name.values.ln2.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.ln2.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.ln2.group?` | `string` | - |
| `styleSpec.expression_name.values.ln2.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.ln2.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.ln2.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.ln2.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.ln2.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.log10?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.log10.doc?` | `string` | - |
| `styleSpec.expression_name.values.log10.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.log10.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.log10.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.log10.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.log10.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.log10.group?` | `string` | - |
| `styleSpec.expression_name.values.log10.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.log10.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.log10.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.log10.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.log10.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.log2?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.log2.doc?` | `string` | - |
| `styleSpec.expression_name.values.log2.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.log2.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.log2.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.log2.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.log2.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.log2.group?` | `string` | - |
| `styleSpec.expression_name.values.log2.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.log2.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.log2.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.log2.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.log2.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.match?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.match.doc?` | `string` | - |
| `styleSpec.expression_name.values.match.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.match.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.match.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.match.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.match.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.match.group?` | `string` | - |
| `styleSpec.expression_name.values.match.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.match.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.match.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.match.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.match.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.max?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.max.doc?` | `string` | - |
| `styleSpec.expression_name.values.max.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.max.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.max.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.max.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.max.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.max.group?` | `string` | - |
| `styleSpec.expression_name.values.max.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.max.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.max.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.max.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.max.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.min?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.min.doc?` | `string` | - |
| `styleSpec.expression_name.values.min.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.min.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.min.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.min.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.min.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.min.group?` | `string` | - |
| `styleSpec.expression_name.values.min.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.min.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.min.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.min.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.min.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.number?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.number.doc?` | `string` | - |
| `styleSpec.expression_name.values.number.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.number.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.number.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.number.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.number.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.number.group?` | `string` | - |
| `styleSpec.expression_name.values.number.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.number.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.number.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.number.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.number.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.number-format?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[] \| \{ `max-fraction-digits`: `number`; `min-fraction-digits`: `number`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.number-format.doc?` | `string` | - |
| `styleSpec.expression_name.values.number-format.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[] \| \{ `max-fraction-digits`: `number`; `min-fraction-digits`: `number`; \})[]; \} | - |
| `styleSpec.expression_name.values.number-format.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.number-format.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.number-format.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.number-format.example.value?` | (`string` \| `string`[] \| \{ `max-fraction-digits`: `number`; `min-fraction-digits`: `number`; \})[] | - |
| `styleSpec.expression_name.values.number-format.group?` | `string` | - |
| `styleSpec.expression_name.values.number-format.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.number-format.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.number-format.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.number-format.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.number-format.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.object?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.object.doc?` | `string` | - |
| `styleSpec.expression_name.values.object.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.object.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.object.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.object.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.object.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.object.group?` | `string` | - |
| `styleSpec.expression_name.values.object.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.object.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.object.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.object.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.object.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.pi?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.pi.doc?` | `string` | - |
| `styleSpec.expression_name.values.pi.example?` | \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.pi.example.syntax?` | \{ `method`: `any`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.pi.example.syntax.method?` | `any`[] | - |
| `styleSpec.expression_name.values.pi.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.pi.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.pi.group?` | `string` | - |
| `styleSpec.expression_name.values.pi.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.pi.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.pi.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.pi.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.pi.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.properties?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.properties.doc?` | `string` | - |
| `styleSpec.expression_name.values.properties.example?` | \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.properties.example.syntax?` | \{ `method`: `any`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.properties.example.syntax.method?` | `any`[] | - |
| `styleSpec.expression_name.values.properties.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.properties.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.properties.group?` | `string` | - |
| `styleSpec.expression_name.values.properties.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.properties.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.properties.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.properties.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.properties.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.resolved-locale?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| \{ `case-sensitive`: ...; `diacritic-sensitive`: ...; `locale`: ...; \})[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.resolved-locale.doc?` | `string` | - |
| `styleSpec.expression_name.values.resolved-locale.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| (`string` \| \{ `case-sensitive`: ...; `diacritic-sensitive`: ...; `locale`: ...; \})[])[]; \} | - |
| `styleSpec.expression_name.values.resolved-locale.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.resolved-locale.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.resolved-locale.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.resolved-locale.example.value?` | (`string` \| (`string` \| \{ `case-sensitive`: ...; `diacritic-sensitive`: ...; `locale`: ...; \})[])[] | - |
| `styleSpec.expression_name.values.resolved-locale.group?` | `string` | - |
| `styleSpec.expression_name.values.resolved-locale.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.resolved-locale.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.resolved-locale.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.resolved-locale.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.resolved-locale.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.rgb?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.rgb.doc?` | `string` | - |
| `styleSpec.expression_name.values.rgb.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.rgb.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.rgb.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.rgb.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.rgb.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.rgb.group?` | `string` | - |
| `styleSpec.expression_name.values.rgb.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.rgb.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.rgb.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.rgb.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.rgb.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.rgba?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.rgba.doc?` | `string` | - |
| `styleSpec.expression_name.values.rgba.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.rgba.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.rgba.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.rgba.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.rgba.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.rgba.group?` | `string` | - |
| `styleSpec.expression_name.values.rgba.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.rgba.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.rgba.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.rgba.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.rgba.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.round?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.round.doc?` | `string` | - |
| `styleSpec.expression_name.values.round.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.round.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.round.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.round.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.round.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.round.group?` | `string` | - |
| `styleSpec.expression_name.values.round.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.round.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.round.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.round.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.round.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.sin?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.sin.doc?` | `string` | - |
| `styleSpec.expression_name.values.sin.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.sin.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.sin.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.sin.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.sin.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.sin.group?` | `string` | - |
| `styleSpec.expression_name.values.sin.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.sin.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.sin.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.sin.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.sin.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.slice?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.slice.doc?` | `string` | - |
| `styleSpec.expression_name.values.slice.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.slice.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.slice.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.slice.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.slice.example.value?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.expression_name.values.slice.group?` | `string` | - |
| `styleSpec.expression_name.values.slice.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.slice.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.slice.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.slice.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.slice.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.sqrt?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.sqrt.doc?` | `string` | - |
| `styleSpec.expression_name.values.sqrt.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.sqrt.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.sqrt.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.sqrt.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.sqrt.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.sqrt.group?` | `string` | - |
| `styleSpec.expression_name.values.sqrt.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.sqrt.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.sqrt.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.sqrt.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.sqrt.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.step?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.step.doc?` | `string` | - |
| `styleSpec.expression_name.values.step.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.step.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.step.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.step.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.step.example.value?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.expression_name.values.step.group?` | `string` | - |
| `styleSpec.expression_name.values.step.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.step.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.step.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.step.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.step.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.string?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.string.doc?` | `string` | - |
| `styleSpec.expression_name.values.string.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.string.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.string.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.string.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.string.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.string.group?` | `string` | - |
| `styleSpec.expression_name.values.string.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.string.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.string.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.string.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.string.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.tan?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.tan.doc?` | `string` | - |
| `styleSpec.expression_name.values.tan.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `number`)[]; \} | - |
| `styleSpec.expression_name.values.tan.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.tan.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.tan.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.tan.example.value?` | (`string` \| `number`)[] | - |
| `styleSpec.expression_name.values.tan.group?` | `string` | - |
| `styleSpec.expression_name.values.tan.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.tan.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.tan.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.tan.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.tan.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.to-boolean?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.to-boolean.doc?` | `string` | - |
| `styleSpec.expression_name.values.to-boolean.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.to-boolean.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.to-boolean.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.to-boolean.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.to-boolean.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.to-boolean.group?` | `string` | - |
| `styleSpec.expression_name.values.to-boolean.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.to-boolean.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.to-boolean.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.to-boolean.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.to-boolean.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.to-color?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.to-color.doc?` | `string` | - |
| `styleSpec.expression_name.values.to-color.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.to-color.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.to-color.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.to-color.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.to-color.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.to-color.group?` | `string` | - |
| `styleSpec.expression_name.values.to-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.to-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.to-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.to-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.to-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.to-number?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.to-number.doc?` | `string` | - |
| `styleSpec.expression_name.values.to-number.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.to-number.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.to-number.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.to-number.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.to-number.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.to-number.group?` | `string` | - |
| `styleSpec.expression_name.values.to-number.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.to-number.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.to-number.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.to-number.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.to-number.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.to-rgba?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.to-rgba.doc?` | `string` | - |
| `styleSpec.expression_name.values.to-rgba.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.to-rgba.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.to-rgba.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.to-rgba.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.to-rgba.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.to-rgba.group?` | `string` | - |
| `styleSpec.expression_name.values.to-rgba.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.to-rgba.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.to-rgba.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.to-rgba.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.to-rgba.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.to-string?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.to-string.doc?` | `string` | - |
| `styleSpec.expression_name.values.to-string.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.to-string.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.to-string.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.to-string.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.to-string.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.to-string.group?` | `string` | - |
| `styleSpec.expression_name.values.to-string.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.to-string.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.to-string.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.to-string.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.to-string.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.typeof?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.typeof.doc?` | `string` | - |
| `styleSpec.expression_name.values.typeof.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.typeof.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.typeof.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.typeof.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.typeof.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.typeof.group?` | `string` | - |
| `styleSpec.expression_name.values.typeof.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.typeof.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.typeof.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.typeof.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.typeof.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.upcase?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.upcase.doc?` | `string` | - |
| `styleSpec.expression_name.values.upcase.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.upcase.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.upcase.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.upcase.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.upcase.example.value?` | (`string` \| `string`[])[] | - |
| `styleSpec.expression_name.values.upcase.group?` | `string` | - |
| `styleSpec.expression_name.values.upcase.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.upcase.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.upcase.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.upcase.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.upcase.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.var?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.var.doc?` | `string` | - |
| `styleSpec.expression_name.values.var.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: `string`[]; \} | - |
| `styleSpec.expression_name.values.var.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.var.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.var.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.var.example.value?` | `string`[] | - |
| `styleSpec.expression_name.values.var.group?` | `string` | - |
| `styleSpec.expression_name.values.var.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.var.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.var.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.var.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.var.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.within?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `coordinates`: ...[][]; `type`: `string`; \})[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.within.doc?` | `string` | - |
| `styleSpec.expression_name.values.within.example?` | \{ `syntax`: \{ `method`: `string`[]; `result`: `string`; \}; `value`: (`string` \| \{ `coordinates`: ...[][]; `type`: `string`; \})[]; \} | - |
| `styleSpec.expression_name.values.within.example.syntax?` | \{ `method`: `string`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.within.example.syntax.method?` | `string`[] | - |
| `styleSpec.expression_name.values.within.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.within.example.value?` | (`string` \| \{ `coordinates`: ...[][]; `type`: `string`; \})[] | - |
| `styleSpec.expression_name.values.within.group?` | `string` | - |
| `styleSpec.expression_name.values.within.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.within.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.within.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.within.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.within.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.expression_name.values.zoom?` | \{ `doc`: `string`; `example`: \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \}; `group`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.expression_name.values.zoom.doc?` | `string` | - |
| `styleSpec.expression_name.values.zoom.example?` | \{ `syntax`: \{ `method`: `any`[]; `result`: `string`; \}; `value`: (`string` \| `number` \| `string`[])[]; \} | - |
| `styleSpec.expression_name.values.zoom.example.syntax?` | \{ `method`: `any`[]; `result`: `string`; \} | - |
| `styleSpec.expression_name.values.zoom.example.syntax.method?` | `any`[] | - |
| `styleSpec.expression_name.values.zoom.example.syntax.result?` | `string` | - |
| `styleSpec.expression_name.values.zoom.example.value?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.expression_name.values.zoom.group?` | `string` | - |
| `styleSpec.expression_name.values.zoom.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.expression_name.values.zoom.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.expression_name.values.zoom.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.expression_name.values.zoom.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.expression_name.values.zoom.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.filter?` | \{ `doc`: `string`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.filter.doc?` | `string` | - |
| `styleSpec.filter.type?` | `string` | - |
| `styleSpec.filter.value?` | `string` | - |
| `styleSpec.filter_operator?` | \{ `doc`: `string`; `type`: `string`; `values`: \{ `!=`: \{ `doc`: `string`; \}; `!has`: \{ `doc`: `string`; \}; `!in`: \{ `doc`: `string`; \}; `<`: \{ `doc`: `string`; \}; `<=`: \{ `doc`: `string`; \}; `==`: \{ `doc`: `string`; \}; `>`: \{ `doc`: `string`; \}; `>=`: \{ `doc`: `string`; \}; `all`: \{ `doc`: `string`; \}; `any`: \{ `doc`: `string`; \}; `has`: \{ `doc`: `string`; \}; `in`: \{ `doc`: `string`; \}; `none`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.filter_operator.doc?` | `string` | - |
| `styleSpec.filter_operator.type?` | `string` | - |
| `styleSpec.filter_operator.values?` | \{ `!=`: \{ `doc`: `string`; \}; `!has`: \{ `doc`: `string`; \}; `!in`: \{ `doc`: `string`; \}; `<`: \{ `doc`: `string`; \}; `<=`: \{ `doc`: `string`; \}; `==`: \{ `doc`: `string`; \}; `>`: \{ `doc`: `string`; \}; `>=`: \{ `doc`: `string`; \}; `all`: \{ `doc`: `string`; \}; `any`: \{ `doc`: `string`; \}; `has`: \{ `doc`: `string`; \}; `in`: \{ `doc`: `string`; \}; `none`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.filter_operator.values.!=?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.!=.doc?` | `string` | - |
| `styleSpec.filter_operator.values.!has?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.!has.doc?` | `string` | - |
| `styleSpec.filter_operator.values.!in?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.!in.doc?` | `string` | - |
| `styleSpec.filter_operator.values.<?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.<.doc?` | `string` | - |
| `styleSpec.filter_operator.values.<=?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.<=.doc?` | `string` | - |
| `styleSpec.filter_operator.values.==?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.==.doc?` | `string` | - |
| `styleSpec.filter_operator.values.>?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.>.doc?` | `string` | - |
| `styleSpec.filter_operator.values.>=?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.>=.doc?` | `string` | - |
| `styleSpec.filter_operator.values.all?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.all.doc?` | `string` | - |
| `styleSpec.filter_operator.values.any?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.any.doc?` | `string` | - |
| `styleSpec.filter_operator.values.has?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.has.doc?` | `string` | - |
| `styleSpec.filter_operator.values.in?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.in.doc?` | `string` | - |
| `styleSpec.filter_operator.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.filter_operator.values.none.doc?` | `string` | - |
| `styleSpec.function?` | \{ `base`: \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; \}; `colorSpace`: \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `hcl`: \{ `doc`: `string`; \}; `lab`: \{ `doc`: `string`; \}; `rgb`: \{ `doc`: `string`; \}; \}; \}; `default`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \}; `expression`: \{ `doc`: `string`; `type`: `string`; \}; `property`: \{ `default`: `string`; `doc`: `string`; `type`: `string`; \}; `stops`: \{ `doc`: `string`; `type`: `string`; `value`: `string`; \}; `type`: \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `categorical`: \{ `doc`: `string`; \}; `exponential`: \{ `doc`: `string`; \}; `identity`: \{ `doc`: `string`; \}; `interval`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.function.base?` | \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; \} | - |
| `styleSpec.function.base.default?` | `number` | - |
| `styleSpec.function.base.doc?` | `string` | - |
| `styleSpec.function.base.minimum?` | `number` | - |
| `styleSpec.function.base.type?` | `string` | - |
| `styleSpec.function.colorSpace?` | \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `hcl`: \{ `doc`: `string`; \}; `lab`: \{ `doc`: `string`; \}; `rgb`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.function.colorSpace.default?` | `string` | - |
| `styleSpec.function.colorSpace.doc?` | `string` | - |
| `styleSpec.function.colorSpace.type?` | `string` | - |
| `styleSpec.function.colorSpace.values?` | \{ `hcl`: \{ `doc`: `string`; \}; `lab`: \{ `doc`: `string`; \}; `rgb`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.function.colorSpace.values.hcl?` | \{ `doc`: `string`; \} | - |
| `styleSpec.function.colorSpace.values.hcl.doc?` | `string` | - |
| `styleSpec.function.colorSpace.values.lab?` | \{ `doc`: `string`; \} | - |
| `styleSpec.function.colorSpace.values.lab.doc?` | `string` | - |
| `styleSpec.function.colorSpace.values.rgb?` | \{ `doc`: `string`; \} | - |
| `styleSpec.function.colorSpace.values.rgb.doc?` | `string` | - |
| `styleSpec.function.default?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.function.default.doc?` | `string` | - |
| `styleSpec.function.default.required?` | `boolean` | - |
| `styleSpec.function.default.type?` | `string` | - |
| `styleSpec.function.expression?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.function.expression.doc?` | `string` | - |
| `styleSpec.function.expression.type?` | `string` | - |
| `styleSpec.function.property?` | \{ `default`: `string`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.function.property.default?` | `string` | - |
| `styleSpec.function.property.doc?` | `string` | - |
| `styleSpec.function.property.type?` | `string` | - |
| `styleSpec.function.stops?` | \{ `doc`: `string`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.function.stops.doc?` | `string` | - |
| `styleSpec.function.stops.type?` | `string` | - |
| `styleSpec.function.stops.value?` | `string` | - |
| `styleSpec.function.type?` | \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `categorical`: \{ `doc`: `string`; \}; `exponential`: \{ `doc`: `string`; \}; `identity`: \{ `doc`: `string`; \}; `interval`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.function.type.default?` | `string` | - |
| `styleSpec.function.type.doc?` | `string` | - |
| `styleSpec.function.type.type?` | `string` | - |
| `styleSpec.function.type.values?` | \{ `categorical`: \{ `doc`: `string`; \}; `exponential`: \{ `doc`: `string`; \}; `identity`: \{ `doc`: `string`; \}; `interval`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.function.type.values.categorical?` | \{ `doc`: `string`; \} | - |
| `styleSpec.function.type.values.categorical.doc?` | `string` | - |
| `styleSpec.function.type.values.exponential?` | \{ `doc`: `string`; \} | - |
| `styleSpec.function.type.values.exponential.doc?` | `string` | - |
| `styleSpec.function.type.values.identity?` | \{ `doc`: `string`; \} | - |
| `styleSpec.function.type.values.identity.doc?` | `string` | - |
| `styleSpec.function.type.values.interval?` | \{ `doc`: `string`; \} | - |
| `styleSpec.function.type.values.interval.doc?` | `string` | - |
| `styleSpec.function_stop?` | \{ `doc`: `string`; `length`: `number`; `maximum`: `number`; `minimum`: `number`; `type`: `string`; `value`: `string`[]; \} | - |
| `styleSpec.function_stop.doc?` | `string` | - |
| `styleSpec.function_stop.length?` | `number` | - |
| `styleSpec.function_stop.maximum?` | `number` | - |
| `styleSpec.function_stop.minimum?` | `number` | - |
| `styleSpec.function_stop.type?` | `string` | - |
| `styleSpec.function_stop.value?` | `string`[] | - |
| `styleSpec.geometry_type?` | \{ `doc`: `string`; `type`: `string`; `values`: \{ `LineString`: \{ `doc`: `string`; \}; `Point`: \{ `doc`: `string`; \}; `Polygon`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.geometry_type.doc?` | `string` | - |
| `styleSpec.geometry_type.type?` | `string` | - |
| `styleSpec.geometry_type.values?` | \{ `LineString`: \{ `doc`: `string`; \}; `Point`: \{ `doc`: `string`; \}; `Polygon`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.geometry_type.values.LineString?` | \{ `doc`: `string`; \} | - |
| `styleSpec.geometry_type.values.LineString.doc?` | `string` | - |
| `styleSpec.geometry_type.values.Point?` | \{ `doc`: `string`; \} | - |
| `styleSpec.geometry_type.values.Point.doc?` | `string` | - |
| `styleSpec.geometry_type.values.Polygon?` | \{ `doc`: `string`; \} | - |
| `styleSpec.geometry_type.values.Polygon.doc?` | `string` | - |
| `styleSpec.layer?` | \{ `filter`: \{ `doc`: `string`; `type`: `string`; \}; `id`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \}; `layout`: \{ `doc`: `string`; `type`: `string`; \}; `maxzoom`: \{ `doc`: `string`; `maximum`: `number`; `minimum`: `number`; `type`: `string`; \}; `metadata`: \{ `doc`: `string`; `example`: \{ `source:comment`: `string`; \}; `type`: `string`; \}; `minzoom`: \{ `doc`: `string`; `maximum`: `number`; `minimum`: `number`; `type`: `string`; \}; `paint`: \{ `doc`: `string`; `type`: `string`; \}; `source`: \{ `doc`: `string`; `type`: `string`; \}; `source-layer`: \{ `doc`: `string`; `type`: `string`; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `background`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `circle`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `fill`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `fill-extrusion`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `heatmap`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `hillshade`: \{ `doc`: `string`; `sdk-support`: \{ `additional methods`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `line`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `raster`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `symbol`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; \}; \}; \} | - |
| `styleSpec.layer.filter?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.layer.filter.doc?` | `string` | - |
| `styleSpec.layer.filter.type?` | `string` | - |
| `styleSpec.layer.id?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.layer.id.doc?` | `string` | - |
| `styleSpec.layer.id.required?` | `boolean` | - |
| `styleSpec.layer.id.type?` | `string` | - |
| `styleSpec.layer.layout?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.layer.layout.doc?` | `string` | - |
| `styleSpec.layer.layout.type?` | `string` | - |
| `styleSpec.layer.maxzoom?` | \{ `doc`: `string`; `maximum`: `number`; `minimum`: `number`; `type`: `string`; \} | - |
| `styleSpec.layer.maxzoom.doc?` | `string` | - |
| `styleSpec.layer.maxzoom.maximum?` | `number` | - |
| `styleSpec.layer.maxzoom.minimum?` | `number` | - |
| `styleSpec.layer.maxzoom.type?` | `string` | - |
| `styleSpec.layer.metadata?` | \{ `doc`: `string`; `example`: \{ `source:comment`: `string`; \}; `type`: `string`; \} | - |
| `styleSpec.layer.metadata.doc?` | `string` | - |
| `styleSpec.layer.metadata.example?` | \{ `source:comment`: `string`; \} | - |
| `styleSpec.layer.metadata.example.source:comment?` | `string` | - |
| `styleSpec.layer.metadata.type?` | `string` | - |
| `styleSpec.layer.minzoom?` | \{ `doc`: `string`; `maximum`: `number`; `minimum`: `number`; `type`: `string`; \} | - |
| `styleSpec.layer.minzoom.doc?` | `string` | - |
| `styleSpec.layer.minzoom.maximum?` | `number` | - |
| `styleSpec.layer.minzoom.minimum?` | `number` | - |
| `styleSpec.layer.minzoom.type?` | `string` | - |
| `styleSpec.layer.paint?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.layer.paint.doc?` | `string` | - |
| `styleSpec.layer.paint.type?` | `string` | - |
| `styleSpec.layer.source?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.layer.source.doc?` | `string` | - |
| `styleSpec.layer.source.type?` | `string` | - |
| `styleSpec.layer.source-layer?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.layer.source-layer.doc?` | `string` | - |
| `styleSpec.layer.source-layer.type?` | `string` | - |
| `styleSpec.layer.type?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `background`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `circle`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `fill`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `fill-extrusion`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `heatmap`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `hillshade`: \{ `doc`: `string`; `sdk-support`: \{ `additional methods`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `line`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `raster`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `symbol`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; \}; \} | - |
| `styleSpec.layer.type.doc?` | `string` | - |
| `styleSpec.layer.type.required?` | `boolean` | - |
| `styleSpec.layer.type.type?` | `string` | - |
| `styleSpec.layer.type.values?` | \{ `background`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `circle`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `fill`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `fill-extrusion`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `heatmap`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `hillshade`: \{ `doc`: `string`; `sdk-support`: \{ `additional methods`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `line`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `raster`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; `symbol`: \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \}; \} | - |
| `styleSpec.layer.type.values.background?` | \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.layer.type.values.background.doc?` | `string` | - |
| `styleSpec.layer.type.values.background.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layer.type.values.background.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layer.type.values.background.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layer.type.values.background.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layer.type.values.background.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layer.type.values.circle?` | \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.layer.type.values.circle.doc?` | `string` | - |
| `styleSpec.layer.type.values.circle.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layer.type.values.circle.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layer.type.values.circle.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layer.type.values.circle.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layer.type.values.circle.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layer.type.values.fill?` | \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.layer.type.values.fill.doc?` | `string` | - |
| `styleSpec.layer.type.values.fill.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layer.type.values.fill.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layer.type.values.fill.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layer.type.values.fill.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layer.type.values.fill.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layer.type.values.fill-extrusion?` | \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.layer.type.values.fill-extrusion.doc?` | `string` | - |
| `styleSpec.layer.type.values.fill-extrusion.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layer.type.values.fill-extrusion.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layer.type.values.fill-extrusion.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layer.type.values.fill-extrusion.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layer.type.values.fill-extrusion.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layer.type.values.heatmap?` | \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.layer.type.values.heatmap.doc?` | `string` | - |
| `styleSpec.layer.type.values.heatmap.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layer.type.values.heatmap.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layer.type.values.heatmap.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layer.type.values.heatmap.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layer.type.values.heatmap.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layer.type.values.hillshade?` | \{ `doc`: `string`; `sdk-support`: \{ `additional methods`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.layer.type.values.hillshade.doc?` | `string` | - |
| `styleSpec.layer.type.values.hillshade.sdk-support?` | \{ `additional methods`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layer.type.values.hillshade.sdk-support.additional methods?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layer.type.values.hillshade.sdk-support.additional methods.android?` | `string` | - |
| `styleSpec.layer.type.values.hillshade.sdk-support.additional methods.ios?` | `string` | - |
| `styleSpec.layer.type.values.hillshade.sdk-support.additional methods.js?` | `string` | - |
| `styleSpec.layer.type.values.hillshade.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layer.type.values.hillshade.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layer.type.values.hillshade.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layer.type.values.hillshade.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layer.type.values.line?` | \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.layer.type.values.line.doc?` | `string` | - |
| `styleSpec.layer.type.values.line.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layer.type.values.line.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layer.type.values.line.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layer.type.values.line.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layer.type.values.line.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layer.type.values.raster?` | \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.layer.type.values.raster.doc?` | `string` | - |
| `styleSpec.layer.type.values.raster.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layer.type.values.raster.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layer.type.values.raster.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layer.type.values.raster.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layer.type.values.raster.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layer.type.values.symbol?` | \{ `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; \} | - |
| `styleSpec.layer.type.values.symbol.doc?` | `string` | - |
| `styleSpec.layer.type.values.symbol.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layer.type.values.symbol.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layer.type.values.symbol.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layer.type.values.symbol.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layer.type.values.symbol.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout?` | `string`[] | - |
| `styleSpec.layout_background?` | \{ `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.layout_background.visibility?` | \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_background.visibility.default?` | `string` | - |
| `styleSpec.layout_background.visibility.doc?` | `string` | - |
| `styleSpec.layout_background.visibility.property-type?` | `string` | - |
| `styleSpec.layout_background.visibility.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_background.visibility.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_background.visibility.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_background.visibility.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_background.visibility.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_background.visibility.type?` | `string` | - |
| `styleSpec.layout_background.visibility.values?` | \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_background.visibility.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_background.visibility.values.none.doc?` | `string` | - |
| `styleSpec.layout_background.visibility.values.visible?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_background.visibility.values.visible.doc?` | `string` | - |
| `styleSpec.layout_circle?` | \{ `circle-sort-key`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.layout_circle.circle-sort-key?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_circle.circle-sort-key.doc?` | `string` | - |
| `styleSpec.layout_circle.circle-sort-key.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_circle.circle-sort-key.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_circle.circle-sort-key.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_circle.circle-sort-key.property-type?` | `string` | - |
| `styleSpec.layout_circle.circle-sort-key.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_circle.circle-sort-key.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_circle.circle-sort-key.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_circle.circle-sort-key.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_circle.circle-sort-key.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_circle.circle-sort-key.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_circle.circle-sort-key.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_circle.circle-sort-key.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_circle.circle-sort-key.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_circle.circle-sort-key.type?` | `string` | - |
| `styleSpec.layout_circle.visibility?` | \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_circle.visibility.default?` | `string` | - |
| `styleSpec.layout_circle.visibility.doc?` | `string` | - |
| `styleSpec.layout_circle.visibility.property-type?` | `string` | - |
| `styleSpec.layout_circle.visibility.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_circle.visibility.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_circle.visibility.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_circle.visibility.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_circle.visibility.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_circle.visibility.type?` | `string` | - |
| `styleSpec.layout_circle.visibility.values?` | \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_circle.visibility.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_circle.visibility.values.none.doc?` | `string` | - |
| `styleSpec.layout_circle.visibility.values.visible?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_circle.visibility.values.visible.doc?` | `string` | - |
| `styleSpec.layout_fill?` | \{ `fill-sort-key`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.layout_fill.fill-sort-key?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_fill.fill-sort-key.doc?` | `string` | - |
| `styleSpec.layout_fill.fill-sort-key.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_fill.fill-sort-key.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_fill.fill-sort-key.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_fill.fill-sort-key.property-type?` | `string` | - |
| `styleSpec.layout_fill.fill-sort-key.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_fill.fill-sort-key.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_fill.fill-sort-key.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_fill.fill-sort-key.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_fill.fill-sort-key.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_fill.fill-sort-key.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_fill.fill-sort-key.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_fill.fill-sort-key.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_fill.fill-sort-key.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_fill.fill-sort-key.type?` | `string` | - |
| `styleSpec.layout_fill.visibility?` | \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_fill.visibility.default?` | `string` | - |
| `styleSpec.layout_fill.visibility.doc?` | `string` | - |
| `styleSpec.layout_fill.visibility.property-type?` | `string` | - |
| `styleSpec.layout_fill.visibility.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_fill.visibility.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_fill.visibility.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_fill.visibility.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_fill.visibility.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_fill.visibility.type?` | `string` | - |
| `styleSpec.layout_fill.visibility.values?` | \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_fill.visibility.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_fill.visibility.values.none.doc?` | `string` | - |
| `styleSpec.layout_fill.visibility.values.visible?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_fill.visibility.values.visible.doc?` | `string` | - |
| `styleSpec.layout_fill-extrusion?` | \{ `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.layout_fill-extrusion.visibility?` | \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_fill-extrusion.visibility.default?` | `string` | - |
| `styleSpec.layout_fill-extrusion.visibility.doc?` | `string` | - |
| `styleSpec.layout_fill-extrusion.visibility.property-type?` | `string` | - |
| `styleSpec.layout_fill-extrusion.visibility.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_fill-extrusion.visibility.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_fill-extrusion.visibility.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_fill-extrusion.visibility.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_fill-extrusion.visibility.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_fill-extrusion.visibility.type?` | `string` | - |
| `styleSpec.layout_fill-extrusion.visibility.values?` | \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_fill-extrusion.visibility.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_fill-extrusion.visibility.values.none.doc?` | `string` | - |
| `styleSpec.layout_fill-extrusion.visibility.values.visible?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_fill-extrusion.visibility.values.visible.doc?` | `string` | - |
| `styleSpec.layout_heatmap?` | \{ `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.layout_heatmap.visibility?` | \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_heatmap.visibility.default?` | `string` | - |
| `styleSpec.layout_heatmap.visibility.doc?` | `string` | - |
| `styleSpec.layout_heatmap.visibility.property-type?` | `string` | - |
| `styleSpec.layout_heatmap.visibility.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_heatmap.visibility.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_heatmap.visibility.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_heatmap.visibility.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_heatmap.visibility.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_heatmap.visibility.type?` | `string` | - |
| `styleSpec.layout_heatmap.visibility.values?` | \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_heatmap.visibility.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_heatmap.visibility.values.none.doc?` | `string` | - |
| `styleSpec.layout_heatmap.visibility.values.visible?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_heatmap.visibility.values.visible.doc?` | `string` | - |
| `styleSpec.layout_hillshade?` | \{ `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.layout_hillshade.visibility?` | \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_hillshade.visibility.default?` | `string` | - |
| `styleSpec.layout_hillshade.visibility.doc?` | `string` | - |
| `styleSpec.layout_hillshade.visibility.property-type?` | `string` | - |
| `styleSpec.layout_hillshade.visibility.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_hillshade.visibility.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_hillshade.visibility.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_hillshade.visibility.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_hillshade.visibility.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_hillshade.visibility.type?` | `string` | - |
| `styleSpec.layout_hillshade.visibility.values?` | \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_hillshade.visibility.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_hillshade.visibility.values.none.doc?` | `string` | - |
| `styleSpec.layout_hillshade.visibility.values.visible?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_hillshade.visibility.values.visible.doc?` | `string` | - |
| `styleSpec.layout_line?` | \{ `line-cap`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `butt`: \{ `doc`: `string`; \}; `round`: \{ `doc`: `string`; \}; `square`: \{ `doc`: `string`; \}; \}; \}; `line-join`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `bevel`: \{ `doc`: `string`; \}; `miter`: \{ `doc`: `string`; \}; `round`: \{ `doc`: `string`; \}; \}; \}; `line-miter-limit`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `line-round-limit`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `line-sort-key`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.layout_line.line-cap?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `butt`: \{ `doc`: `string`; \}; `round`: \{ `doc`: `string`; \}; `square`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_line.line-cap.default?` | `string` | - |
| `styleSpec.layout_line.line-cap.doc?` | `string` | - |
| `styleSpec.layout_line.line-cap.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_line.line-cap.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_line.line-cap.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_line.line-cap.property-type?` | `string` | - |
| `styleSpec.layout_line.line-cap.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_line.line-cap.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_line.line-cap.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_line.line-cap.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_line.line-cap.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_line.line-cap.type?` | `string` | - |
| `styleSpec.layout_line.line-cap.values?` | \{ `butt`: \{ `doc`: `string`; \}; `round`: \{ `doc`: `string`; \}; `square`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_line.line-cap.values.butt?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_line.line-cap.values.butt.doc?` | `string` | - |
| `styleSpec.layout_line.line-cap.values.round?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_line.line-cap.values.round.doc?` | `string` | - |
| `styleSpec.layout_line.line-cap.values.square?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_line.line-cap.values.square.doc?` | `string` | - |
| `styleSpec.layout_line.line-join?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `bevel`: \{ `doc`: `string`; \}; `miter`: \{ `doc`: `string`; \}; `round`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_line.line-join.default?` | `string` | - |
| `styleSpec.layout_line.line-join.doc?` | `string` | - |
| `styleSpec.layout_line.line-join.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_line.line-join.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_line.line-join.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_line.line-join.property-type?` | `string` | - |
| `styleSpec.layout_line.line-join.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_line.line-join.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_line.line-join.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_line.line-join.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_line.line-join.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_line.line-join.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_line.line-join.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_line.line-join.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_line.line-join.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_line.line-join.type?` | `string` | - |
| `styleSpec.layout_line.line-join.values?` | \{ `bevel`: \{ `doc`: `string`; \}; `miter`: \{ `doc`: `string`; \}; `round`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_line.line-join.values.bevel?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_line.line-join.values.bevel.doc?` | `string` | - |
| `styleSpec.layout_line.line-join.values.miter?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_line.line-join.values.miter.doc?` | `string` | - |
| `styleSpec.layout_line.line-join.values.round?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_line.line-join.values.round.doc?` | `string` | - |
| `styleSpec.layout_line.line-miter-limit?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_line.line-miter-limit.default?` | `number` | - |
| `styleSpec.layout_line.line-miter-limit.doc?` | `string` | - |
| `styleSpec.layout_line.line-miter-limit.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_line.line-miter-limit.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_line.line-miter-limit.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_line.line-miter-limit.property-type?` | `string` | - |
| `styleSpec.layout_line.line-miter-limit.requires?` | `object`[] | - |
| `styleSpec.layout_line.line-miter-limit.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_line.line-miter-limit.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_line.line-miter-limit.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_line.line-miter-limit.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_line.line-miter-limit.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_line.line-miter-limit.type?` | `string` | - |
| `styleSpec.layout_line.line-round-limit?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_line.line-round-limit.default?` | `number` | - |
| `styleSpec.layout_line.line-round-limit.doc?` | `string` | - |
| `styleSpec.layout_line.line-round-limit.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_line.line-round-limit.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_line.line-round-limit.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_line.line-round-limit.property-type?` | `string` | - |
| `styleSpec.layout_line.line-round-limit.requires?` | `object`[] | - |
| `styleSpec.layout_line.line-round-limit.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_line.line-round-limit.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_line.line-round-limit.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_line.line-round-limit.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_line.line-round-limit.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_line.line-round-limit.type?` | `string` | - |
| `styleSpec.layout_line.line-sort-key?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_line.line-sort-key.doc?` | `string` | - |
| `styleSpec.layout_line.line-sort-key.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_line.line-sort-key.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_line.line-sort-key.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_line.line-sort-key.property-type?` | `string` | - |
| `styleSpec.layout_line.line-sort-key.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_line.line-sort-key.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_line.line-sort-key.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_line.line-sort-key.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_line.line-sort-key.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_line.line-sort-key.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_line.line-sort-key.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_line.line-sort-key.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_line.line-sort-key.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_line.line-sort-key.type?` | `string` | - |
| `styleSpec.layout_line.visibility?` | \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_line.visibility.default?` | `string` | - |
| `styleSpec.layout_line.visibility.doc?` | `string` | - |
| `styleSpec.layout_line.visibility.property-type?` | `string` | - |
| `styleSpec.layout_line.visibility.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_line.visibility.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_line.visibility.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_line.visibility.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_line.visibility.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_line.visibility.type?` | `string` | - |
| `styleSpec.layout_line.visibility.values?` | \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_line.visibility.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_line.visibility.values.none.doc?` | `string` | - |
| `styleSpec.layout_line.visibility.values.visible?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_line.visibility.values.visible.doc?` | `string` | - |
| `styleSpec.layout_raster?` | \{ `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.layout_raster.visibility?` | \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_raster.visibility.default?` | `string` | - |
| `styleSpec.layout_raster.visibility.doc?` | `string` | - |
| `styleSpec.layout_raster.visibility.property-type?` | `string` | - |
| `styleSpec.layout_raster.visibility.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_raster.visibility.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_raster.visibility.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_raster.visibility.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_raster.visibility.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_raster.visibility.type?` | `string` | - |
| `styleSpec.layout_raster.visibility.values?` | \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_raster.visibility.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_raster.visibility.values.none.doc?` | `string` | - |
| `styleSpec.layout_raster.visibility.values.visible?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_raster.visibility.values.visible.doc?` | `string` | - |
| `styleSpec.layout_symbol?` | \{ `icon-allow-overlap`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `icon-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \}; \}; `icon-ignore-placement`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `icon-image`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `tokens`: `boolean`; `type`: `string`; \}; `icon-keep-upright`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `icon-rotation-alignment`: `string`; `symbol-placement?`: `undefined`; \} \| \{ `icon-rotation-alignment?`: `undefined`; `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `icon-offset`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; \}; `icon-optional`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `icon-overlap`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `always`: \{ `doc`: `string`; \}; `cooperative`: \{ `doc`: `string`; \}; `never`: \{ `doc`: `string`; \}; \}; \}; `icon-padding`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `icon-pitch-alignment`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `icon-rotate`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `period`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `icon-rotation-alignment`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `icon-size`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `icon-text-fit`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `stretchable icons`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `both`: \{ `doc`: `string`; \}; `height`: \{ `doc`: `string`; \}; `none`: \{ `doc`: `string`; \}; `width`: \{ `doc`: `string`; \}; \}; \}; `icon-text-fit-padding`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: (`string` \| \{ `icon-text-fit`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; `value`: `string`; \}; `symbol-avoid-edges`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `symbol-placement`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `` `line-center` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `line`: \{ `doc`: `string`; \}; `line-center`: \{ `doc`: `string`; \}; `point`: \{ `doc`: `string`; \}; \}; \}; `symbol-sort-key`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `symbol-spacing`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `symbol-z-order`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `source`: \{ `doc`: `string`; \}; `viewport-y`: \{ `doc`: `string`; \}; \}; \}; `text-allow-overlap`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `text-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \}; \}; `text-field`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `tokens`: `boolean`; `type`: `string`; \}; `text-font`: \{ `default`: `string`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `local fonts`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; \}; `text-ignore-placement`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `text-justify`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `auto`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; \}; \}; `text-keep-upright`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement?`: `undefined`; `text-rotation-alignment`: `string`; \} \| \{ `symbol-placement`: `string`[]; `text-rotation-alignment?`: `undefined`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `text-letter-spacing`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-line-height`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-max-angle`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-max-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-offset`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; `value`: `string`; \}; `text-optional`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `text-overlap`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `always`: \{ `doc`: `string`; \}; `cooperative`: \{ `doc`: `string`; \}; `never`: \{ `doc`: `string`; \}; \}; \}; `text-padding`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-pitch-alignment`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `text-radial-offset`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-rotate`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `period`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-rotation-alignment`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `` `viewport-glyph` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; `viewport-glyph`: \{ `doc`: `string`; \}; \}; \}; `text-size`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \}; `text-transform`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `lowercase`: \{ `doc`: `string`; \}; `none`: \{ `doc`: `string`; \}; `uppercase`: \{ `doc`: `string`; \}; \}; \}; `text-variable-anchor`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; `values`: \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \}; \}; `text-variable-anchor-offset`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `text-writing-mode`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; `values`: \{ `horizontal`: \{ `doc`: `string`; \}; `vertical`: \{ `doc`: `string`; \}; \}; \}; `visibility`: \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.layout_symbol.icon-allow-overlap?` | \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-allow-overlap.default?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-allow-overlap.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-allow-overlap.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-allow-overlap.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-allow-overlap.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-allow-overlap.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-allow-overlap.requires?` | (`string` \| \{ `!`: `string`; \})[] | - |
| `styleSpec.layout_symbol.icon-allow-overlap.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-allow-overlap.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-allow-overlap.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-allow-overlap.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-allow-overlap.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-allow-overlap.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.icon-anchor.default?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-anchor.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-anchor.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-anchor.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-anchor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-anchor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-anchor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-anchor.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.values?` | \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-anchor.values.bottom?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-anchor.values.bottom.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.values.bottom-left?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-anchor.values.bottom-left.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.values.bottom-right?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-anchor.values.bottom-right.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.values.center?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-anchor.values.center.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.values.left?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-anchor.values.left.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.values.right?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-anchor.values.right.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.values.top?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-anchor.values.top.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.values.top-left?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-anchor.values.top-left.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-anchor.values.top-right?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-anchor.values.top-right.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-ignore-placement?` | \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-ignore-placement.default?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-ignore-placement.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-ignore-placement.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-ignore-placement.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-ignore-placement.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-ignore-placement.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-ignore-placement.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-ignore-placement.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-ignore-placement.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-ignore-placement.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-ignore-placement.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-ignore-placement.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-ignore-placement.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-image?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `tokens`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-image.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-image.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-image.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-image.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-image.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-image.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-image.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-image.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-image.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-image.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-image.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-image.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-image.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-image.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-image.tokens?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-image.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-keep-upright?` | \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `icon-rotation-alignment`: `string`; `symbol-placement?`: `undefined`; \} \| \{ `icon-rotation-alignment?`: `undefined`; `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-keep-upright.default?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-keep-upright.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-keep-upright.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-keep-upright.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-keep-upright.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-keep-upright.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-keep-upright.requires?` | (`string` \| \{ `icon-rotation-alignment`: `string`; `symbol-placement?`: `undefined`; \} \| \{ `icon-rotation-alignment?`: `undefined`; `symbol-placement`: `string`[]; \})[] | - |
| `styleSpec.layout_symbol.icon-keep-upright.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-keep-upright.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-keep-upright.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-keep-upright.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-keep-upright.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-keep-upright.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-offset?` | \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-offset.default?` | `number`[] | - |
| `styleSpec.layout_symbol.icon-offset.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-offset.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-offset.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-offset.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-offset.length?` | `number` | - |
| `styleSpec.layout_symbol.icon-offset.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-offset.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-offset.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-offset.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-offset.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-offset.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-offset.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-offset.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-offset.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-offset.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-offset.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-offset.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-offset.value?` | `string` | - |
| `styleSpec.layout_symbol.icon-optional?` | \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-optional.default?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-optional.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-optional.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-optional.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-optional.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-optional.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-optional.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-optional.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-optional.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-optional.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-optional.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-optional.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-optional.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-overlap?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `always`: \{ `doc`: `string`; \}; `cooperative`: \{ `doc`: `string`; \}; `never`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.icon-overlap.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-overlap.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-overlap.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-overlap.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-overlap.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-overlap.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-overlap.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-overlap.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-overlap.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-overlap.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-overlap.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-overlap.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-overlap.values?` | \{ `always`: \{ `doc`: `string`; \}; `cooperative`: \{ `doc`: `string`; \}; `never`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-overlap.values.always?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-overlap.values.always.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-overlap.values.cooperative?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-overlap.values.cooperative.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-overlap.values.never?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-overlap.values.never.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-padding?` | \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-padding.default?` | `number`[] | - |
| `styleSpec.layout_symbol.icon-padding.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-padding.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-padding.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-padding.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-padding.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-padding.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-padding.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-padding.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-padding.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-padding.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-padding.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-padding.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-padding.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-padding.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-padding.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-padding.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-padding.units?` | `string` | - |
| `styleSpec.layout_symbol.icon-pitch-alignment?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.default?` | `string` | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.values?` | \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.values.auto?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.values.auto.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.values.map.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-pitch-alignment.values.viewport.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotate?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `period`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-rotate.default?` | `number` | - |
| `styleSpec.layout_symbol.icon-rotate.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotate.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-rotate.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-rotate.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-rotate.period?` | `number` | - |
| `styleSpec.layout_symbol.icon-rotate.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotate.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-rotate.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-rotate.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-rotate.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotate.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotate.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotate.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-rotate.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotate.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotate.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotate.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotate.units?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.default?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.sdk-support?` | \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `` styleSpec.layout_symbol.icon-rotation-alignment.sdk-support.`auto` value? `` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `` styleSpec.layout_symbol.icon-rotation-alignment.sdk-support.`auto` value.android? `` | `string` | - |
| `` styleSpec.layout_symbol.icon-rotation-alignment.sdk-support.`auto` value.ios? `` | `string` | - |
| `` styleSpec.layout_symbol.icon-rotation-alignment.sdk-support.`auto` value.js? `` | `string` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.values?` | \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.values.auto?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.values.auto.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.values.map.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-rotation-alignment.values.viewport.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-size?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-size.default?` | `number` | - |
| `styleSpec.layout_symbol.icon-size.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-size.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-size.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-size.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-size.minimum?` | `number` | - |
| `styleSpec.layout_symbol.icon-size.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-size.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-size.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-size.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-size.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-size.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-size.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-size.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-size.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-size.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-size.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-size.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-size.units?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `stretchable icons`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `both`: \{ `doc`: `string`; \}; `height`: \{ `doc`: `string`; \}; `none`: \{ `doc`: `string`; \}; `width`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.icon-text-fit.default?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-text-fit.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-text-fit.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-text-fit.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-text-fit.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `stretchable icons`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-text-fit.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-text-fit.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.sdk-support.stretchable icons?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-text-fit.sdk-support.stretchable icons.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.sdk-support.stretchable icons.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.sdk-support.stretchable icons.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.values?` | \{ `both`: \{ `doc`: `string`; \}; `height`: \{ `doc`: `string`; \}; `none`: \{ `doc`: `string`; \}; `width`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-text-fit.values.both?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-text-fit.values.both.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.values.height?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-text-fit.values.height.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-text-fit.values.none.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit.values.width?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-text-fit.values.width.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit-padding?` | \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: (`string` \| \{ `icon-text-fit`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; `value`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.default?` | `number`[] | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.doc?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.length?` | `number` | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.property-type?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.requires?` | (`string` \| \{ `icon-text-fit`: `string`[]; \})[] | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.type?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.units?` | `string` | - |
| `styleSpec.layout_symbol.icon-text-fit-padding.value?` | `string` | - |
| `styleSpec.layout_symbol.symbol-avoid-edges?` | \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.default?` | `boolean` | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.doc?` | `string` | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.property-type?` | `string` | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.symbol-avoid-edges.type?` | `string` | - |
| `styleSpec.layout_symbol.symbol-placement?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `` `line-center` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `line`: \{ `doc`: `string`; \}; `line-center`: \{ `doc`: `string`; \}; `point`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.symbol-placement.default?` | `string` | - |
| `styleSpec.layout_symbol.symbol-placement.doc?` | `string` | - |
| `styleSpec.layout_symbol.symbol-placement.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.symbol-placement.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.symbol-placement.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.symbol-placement.property-type?` | `string` | - |
| `styleSpec.layout_symbol.symbol-placement.sdk-support?` | \{ `` `line-center` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `` styleSpec.layout_symbol.symbol-placement.sdk-support.`line-center` value? `` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `` styleSpec.layout_symbol.symbol-placement.sdk-support.`line-center` value.android? `` | `string` | - |
| `` styleSpec.layout_symbol.symbol-placement.sdk-support.`line-center` value.ios? `` | `string` | - |
| `` styleSpec.layout_symbol.symbol-placement.sdk-support.`line-center` value.js? `` | `string` | - |
| `styleSpec.layout_symbol.symbol-placement.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-placement.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.symbol-placement.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.symbol-placement.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.symbol-placement.type?` | `string` | - |
| `styleSpec.layout_symbol.symbol-placement.values?` | \{ `line`: \{ `doc`: `string`; \}; `line-center`: \{ `doc`: `string`; \}; `point`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.symbol-placement.values.line?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-placement.values.line.doc?` | `string` | - |
| `styleSpec.layout_symbol.symbol-placement.values.line-center?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-placement.values.line-center.doc?` | `string` | - |
| `styleSpec.layout_symbol.symbol-placement.values.point?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-placement.values.point.doc?` | `string` | - |
| `styleSpec.layout_symbol.symbol-sort-key?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-sort-key.doc?` | `string` | - |
| `styleSpec.layout_symbol.symbol-sort-key.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.symbol-sort-key.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.symbol-sort-key.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.symbol-sort-key.property-type?` | `string` | - |
| `styleSpec.layout_symbol.symbol-sort-key.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.symbol-sort-key.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-sort-key.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.symbol-sort-key.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.symbol-sort-key.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.symbol-sort-key.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-sort-key.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.symbol-sort-key.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.symbol-sort-key.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.symbol-sort-key.type?` | `string` | - |
| `styleSpec.layout_symbol.symbol-spacing?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-spacing.default?` | `number` | - |
| `styleSpec.layout_symbol.symbol-spacing.doc?` | `string` | - |
| `styleSpec.layout_symbol.symbol-spacing.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.symbol-spacing.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.symbol-spacing.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.symbol-spacing.minimum?` | `number` | - |
| `styleSpec.layout_symbol.symbol-spacing.property-type?` | `string` | - |
| `styleSpec.layout_symbol.symbol-spacing.requires?` | `object`[] | - |
| `styleSpec.layout_symbol.symbol-spacing.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.symbol-spacing.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-spacing.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.symbol-spacing.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.symbol-spacing.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.symbol-spacing.type?` | `string` | - |
| `styleSpec.layout_symbol.symbol-spacing.units?` | `string` | - |
| `styleSpec.layout_symbol.symbol-z-order?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `source`: \{ `doc`: `string`; \}; `viewport-y`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.symbol-z-order.default?` | `string` | - |
| `styleSpec.layout_symbol.symbol-z-order.doc?` | `string` | - |
| `styleSpec.layout_symbol.symbol-z-order.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.symbol-z-order.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.symbol-z-order.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.symbol-z-order.property-type?` | `string` | - |
| `styleSpec.layout_symbol.symbol-z-order.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.symbol-z-order.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-z-order.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.symbol-z-order.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.symbol-z-order.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.symbol-z-order.type?` | `string` | - |
| `styleSpec.layout_symbol.symbol-z-order.values?` | \{ `auto`: \{ `doc`: `string`; \}; `source`: \{ `doc`: `string`; \}; `viewport-y`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.symbol-z-order.values.auto?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-z-order.values.auto.doc?` | `string` | - |
| `styleSpec.layout_symbol.symbol-z-order.values.source?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-z-order.values.source.doc?` | `string` | - |
| `styleSpec.layout_symbol.symbol-z-order.values.viewport-y?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.symbol-z-order.values.viewport-y.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-allow-overlap?` | \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.text-allow-overlap.default?` | `boolean` | - |
| `styleSpec.layout_symbol.text-allow-overlap.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-allow-overlap.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-allow-overlap.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-allow-overlap.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-allow-overlap.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-allow-overlap.requires?` | (`string` \| \{ `!`: `string`; \})[] | - |
| `styleSpec.layout_symbol.text-allow-overlap.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-allow-overlap.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-allow-overlap.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-allow-overlap.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-allow-overlap.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-allow-overlap.type?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.text-anchor.default?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-anchor.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-anchor.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-anchor.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.requires?` | (`string` \| \{ `!`: `string`; \})[] | - |
| `styleSpec.layout_symbol.text-anchor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-anchor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-anchor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-anchor.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.type?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.values?` | \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-anchor.values.bottom?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-anchor.values.bottom.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.values.bottom-left?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-anchor.values.bottom-left.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.values.bottom-right?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-anchor.values.bottom-right.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.values.center?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-anchor.values.center.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.values.left?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-anchor.values.left.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.values.right?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-anchor.values.right.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.values.top?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-anchor.values.top.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.values.top-left?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-anchor.values.top-left.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-anchor.values.top-right?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-anchor.values.top-right.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-field?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `tokens`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.text-field.default?` | `string` | - |
| `styleSpec.layout_symbol.text-field.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-field.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-field.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-field.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-field.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-field.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-field.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-field.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-field.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-field.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-field.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-field.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-field.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-field.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-field.tokens?` | `boolean` | - |
| `styleSpec.layout_symbol.text-field.type?` | `string` | - |
| `styleSpec.layout_symbol.text-font?` | \{ `default`: `string`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `local fonts`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.layout_symbol.text-font.default?` | `string`[] | - |
| `styleSpec.layout_symbol.text-font.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-font.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-font.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-font.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-font.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-font.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-font.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `local fonts`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-font.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-font.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-font.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-font.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-font.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-font.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-font.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-font.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-font.sdk-support.local fonts?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-font.sdk-support.local fonts.android?` | `string` | - |
| `styleSpec.layout_symbol.text-font.sdk-support.local fonts.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-font.sdk-support.local fonts.js?` | `string` | - |
| `styleSpec.layout_symbol.text-font.type?` | `string` | - |
| `styleSpec.layout_symbol.text-font.value?` | `string` | - |
| `styleSpec.layout_symbol.text-ignore-placement?` | \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.text-ignore-placement.default?` | `boolean` | - |
| `styleSpec.layout_symbol.text-ignore-placement.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-ignore-placement.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-ignore-placement.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-ignore-placement.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-ignore-placement.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-ignore-placement.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-ignore-placement.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-ignore-placement.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-ignore-placement.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-ignore-placement.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-ignore-placement.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-ignore-placement.type?` | `string` | - |
| `styleSpec.layout_symbol.text-justify?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `auto`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.text-justify.default?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-justify.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-justify.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-justify.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-justify.sdk-support?` | \{ `auto`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.auto?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.auto.android?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.auto.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.auto.js?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.type?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.values?` | \{ `auto`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-justify.values.auto?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-justify.values.auto.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.values.center?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-justify.values.center.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.values.left?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-justify.values.left.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-justify.values.right?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-justify.values.right.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-keep-upright?` | \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement?`: `undefined`; `text-rotation-alignment`: `string`; \} \| \{ `symbol-placement`: `string`[]; `text-rotation-alignment?`: `undefined`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.text-keep-upright.default?` | `boolean` | - |
| `styleSpec.layout_symbol.text-keep-upright.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-keep-upright.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-keep-upright.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-keep-upright.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-keep-upright.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-keep-upright.requires?` | (`string` \| \{ `symbol-placement?`: `undefined`; `text-rotation-alignment`: `string`; \} \| \{ `symbol-placement`: `string`[]; `text-rotation-alignment?`: `undefined`; \})[] | - |
| `styleSpec.layout_symbol.text-keep-upright.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-keep-upright.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-keep-upright.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-keep-upright.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-keep-upright.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-keep-upright.type?` | `string` | - |
| `styleSpec.layout_symbol.text-letter-spacing?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.text-letter-spacing.default?` | `number` | - |
| `styleSpec.layout_symbol.text-letter-spacing.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-letter-spacing.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-letter-spacing.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-letter-spacing.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-letter-spacing.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-letter-spacing.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-letter-spacing.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-letter-spacing.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-letter-spacing.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-letter-spacing.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-letter-spacing.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-letter-spacing.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-letter-spacing.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-letter-spacing.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-letter-spacing.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-letter-spacing.type?` | `string` | - |
| `styleSpec.layout_symbol.text-letter-spacing.units?` | `string` | - |
| `styleSpec.layout_symbol.text-line-height?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.text-line-height.default?` | `number` | - |
| `styleSpec.layout_symbol.text-line-height.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-line-height.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-line-height.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-line-height.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-line-height.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-line-height.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-line-height.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-line-height.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-line-height.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-line-height.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-line-height.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-line-height.type?` | `string` | - |
| `styleSpec.layout_symbol.text-line-height.units?` | `string` | - |
| `styleSpec.layout_symbol.text-max-angle?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.text-max-angle.default?` | `number` | - |
| `styleSpec.layout_symbol.text-max-angle.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-max-angle.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-max-angle.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-max-angle.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-max-angle.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-max-angle.requires?` | (`string` \| \{ `symbol-placement`: `string`[]; \})[] | - |
| `styleSpec.layout_symbol.text-max-angle.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-max-angle.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-max-angle.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-max-angle.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-max-angle.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-max-angle.type?` | `string` | - |
| `styleSpec.layout_symbol.text-max-angle.units?` | `string` | - |
| `styleSpec.layout_symbol.text-max-width?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.text-max-width.default?` | `number` | - |
| `styleSpec.layout_symbol.text-max-width.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-max-width.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-max-width.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-max-width.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-max-width.minimum?` | `number` | - |
| `styleSpec.layout_symbol.text-max-width.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-max-width.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-max-width.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-max-width.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-max-width.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-max-width.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-max-width.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-max-width.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-max-width.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-max-width.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-max-width.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-max-width.type?` | `string` | - |
| `styleSpec.layout_symbol.text-max-width.units?` | `string` | - |
| `styleSpec.layout_symbol.text-offset?` | \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: (`string` \| \{ `!`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; `value`: `string`; \} | - |
| `styleSpec.layout_symbol.text-offset.default?` | `number`[] | - |
| `styleSpec.layout_symbol.text-offset.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-offset.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-offset.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-offset.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-offset.length?` | `number` | - |
| `styleSpec.layout_symbol.text-offset.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-offset.requires?` | (`string` \| \{ `!`: `string`; \})[] | - |
| `styleSpec.layout_symbol.text-offset.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-offset.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-offset.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-offset.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-offset.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-offset.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-offset.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-offset.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-offset.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-offset.type?` | `string` | - |
| `styleSpec.layout_symbol.text-offset.units?` | `string` | - |
| `styleSpec.layout_symbol.text-offset.value?` | `string` | - |
| `styleSpec.layout_symbol.text-optional?` | \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.text-optional.default?` | `boolean` | - |
| `styleSpec.layout_symbol.text-optional.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-optional.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-optional.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-optional.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-optional.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-optional.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-optional.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-optional.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-optional.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-optional.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-optional.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-optional.type?` | `string` | - |
| `styleSpec.layout_symbol.text-overlap?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `always`: \{ `doc`: `string`; \}; `cooperative`: \{ `doc`: `string`; \}; `never`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.text-overlap.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-overlap.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-overlap.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-overlap.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-overlap.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-overlap.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-overlap.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-overlap.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-overlap.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-overlap.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-overlap.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-overlap.type?` | `string` | - |
| `styleSpec.layout_symbol.text-overlap.values?` | \{ `always`: \{ `doc`: `string`; \}; `cooperative`: \{ `doc`: `string`; \}; `never`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-overlap.values.always?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-overlap.values.always.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-overlap.values.cooperative?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-overlap.values.cooperative.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-overlap.values.never?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-overlap.values.never.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-padding?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.text-padding.default?` | `number` | - |
| `styleSpec.layout_symbol.text-padding.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-padding.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-padding.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-padding.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-padding.minimum?` | `number` | - |
| `styleSpec.layout_symbol.text-padding.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-padding.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-padding.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-padding.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-padding.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-padding.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-padding.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-padding.type?` | `string` | - |
| `styleSpec.layout_symbol.text-padding.units?` | `string` | - |
| `styleSpec.layout_symbol.text-pitch-alignment?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.text-pitch-alignment.default?` | `string` | - |
| `styleSpec.layout_symbol.text-pitch-alignment.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-pitch-alignment.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-pitch-alignment.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-pitch-alignment.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-pitch-alignment.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-pitch-alignment.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-pitch-alignment.sdk-support?` | \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `` styleSpec.layout_symbol.text-pitch-alignment.sdk-support.`auto` value? `` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `` styleSpec.layout_symbol.text-pitch-alignment.sdk-support.`auto` value.android? `` | `string` | - |
| `` styleSpec.layout_symbol.text-pitch-alignment.sdk-support.`auto` value.ios? `` | `string` | - |
| `` styleSpec.layout_symbol.text-pitch-alignment.sdk-support.`auto` value.js? `` | `string` | - |
| `styleSpec.layout_symbol.text-pitch-alignment.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-pitch-alignment.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-pitch-alignment.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-pitch-alignment.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-pitch-alignment.type?` | `string` | - |
| `styleSpec.layout_symbol.text-pitch-alignment.values?` | \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-pitch-alignment.values.auto?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-pitch-alignment.values.auto.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-pitch-alignment.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-pitch-alignment.values.map.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-pitch-alignment.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-pitch-alignment.values.viewport.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-radial-offset?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.text-radial-offset.default?` | `number` | - |
| `styleSpec.layout_symbol.text-radial-offset.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-radial-offset.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-radial-offset.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-radial-offset.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-radial-offset.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-radial-offset.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-radial-offset.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-radial-offset.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-radial-offset.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-radial-offset.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-radial-offset.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-radial-offset.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-radial-offset.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-radial-offset.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-radial-offset.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-radial-offset.type?` | `string` | - |
| `styleSpec.layout_symbol.text-radial-offset.units?` | `string` | - |
| `styleSpec.layout_symbol.text-rotate?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `period`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.text-rotate.default?` | `number` | - |
| `styleSpec.layout_symbol.text-rotate.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-rotate.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-rotate.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-rotate.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-rotate.period?` | `number` | - |
| `styleSpec.layout_symbol.text-rotate.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-rotate.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-rotate.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-rotate.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-rotate.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-rotate.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-rotate.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-rotate.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-rotate.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-rotate.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-rotate.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-rotate.type?` | `string` | - |
| `styleSpec.layout_symbol.text-rotate.units?` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `` `viewport-glyph` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; `viewport-glyph`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.text-rotation-alignment.default?` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-rotation-alignment.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-rotation-alignment.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-rotation-alignment.sdk-support?` | \{ `` `auto` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `` `viewport-glyph` value ``: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `` styleSpec.layout_symbol.text-rotation-alignment.sdk-support.`auto` value? `` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `` styleSpec.layout_symbol.text-rotation-alignment.sdk-support.`auto` value.android? `` | `string` | - |
| `` styleSpec.layout_symbol.text-rotation-alignment.sdk-support.`auto` value.ios? `` | `string` | - |
| `` styleSpec.layout_symbol.text-rotation-alignment.sdk-support.`auto` value.js? `` | `string` | - |
| `` styleSpec.layout_symbol.text-rotation-alignment.sdk-support.`viewport-glyph` value? `` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `` styleSpec.layout_symbol.text-rotation-alignment.sdk-support.`viewport-glyph` value.android? `` | `string` | - |
| `` styleSpec.layout_symbol.text-rotation-alignment.sdk-support.`viewport-glyph` value.ios? `` | `string` | - |
| `` styleSpec.layout_symbol.text-rotation-alignment.sdk-support.`viewport-glyph` value.js? `` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-rotation-alignment.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.type?` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.values?` | \{ `auto`: \{ `doc`: `string`; \}; `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; `viewport-glyph`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-rotation-alignment.values.auto?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-rotation-alignment.values.auto.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-rotation-alignment.values.map.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-rotation-alignment.values.viewport.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-rotation-alignment.values.viewport-glyph?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-rotation-alignment.values.viewport-glyph.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-size?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.layout_symbol.text-size.default?` | `number` | - |
| `styleSpec.layout_symbol.text-size.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-size.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-size.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-size.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-size.minimum?` | `number` | - |
| `styleSpec.layout_symbol.text-size.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-size.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-size.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-size.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-size.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-size.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-size.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-size.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-size.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-size.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-size.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-size.type?` | `string` | - |
| `styleSpec.layout_symbol.text-size.units?` | `string` | - |
| `styleSpec.layout_symbol.text-transform?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `lowercase`: \{ `doc`: `string`; \}; `none`: \{ `doc`: `string`; \}; `uppercase`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.text-transform.default?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-transform.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-transform.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-transform.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.requires?` | `string`[] | - |
| `styleSpec.layout_symbol.text-transform.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-transform.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-transform.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-transform.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.type?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.values?` | \{ `lowercase`: \{ `doc`: `string`; \}; `none`: \{ `doc`: `string`; \}; `uppercase`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-transform.values.lowercase?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-transform.values.lowercase.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-transform.values.none.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-transform.values.uppercase?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-transform.values.uppercase.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; `values`: \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-variable-anchor.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-variable-anchor.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.requires?` | (`string` \| \{ `symbol-placement`: `string`[]; \})[] | - |
| `styleSpec.layout_symbol.text-variable-anchor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.type?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.value?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.values?` | \{ `bottom`: \{ `doc`: `string`; \}; `bottom-left`: \{ `doc`: `string`; \}; `bottom-right`: \{ `doc`: `string`; \}; `center`: \{ `doc`: `string`; \}; `left`: \{ `doc`: `string`; \}; `right`: \{ `doc`: `string`; \}; `top`: \{ `doc`: `string`; \}; `top-left`: \{ `doc`: `string`; \}; `top-right`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.bottom?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.bottom.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.bottom-left?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.bottom-left.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.bottom-right?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.bottom-right.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.center?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.center.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.left?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.left.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.right?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.right.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.top?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.top.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.top-left?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.top-left.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.top-right?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor.values.top-right.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.requires?` | (`string` \| \{ `symbol-placement`: `string`[]; \})[] | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.layout_symbol.text-variable-anchor-offset.type?` | `string` | - |
| `styleSpec.layout_symbol.text-writing-mode?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (`string` \| \{ `symbol-placement`: `string`[]; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `value`: `string`; `values`: \{ `horizontal`: \{ `doc`: `string`; \}; `vertical`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.text-writing-mode.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-writing-mode.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.layout_symbol.text-writing-mode.expression.interpolated?` | `boolean` | - |
| `styleSpec.layout_symbol.text-writing-mode.expression.parameters?` | `string`[] | - |
| `styleSpec.layout_symbol.text-writing-mode.property-type?` | `string` | - |
| `styleSpec.layout_symbol.text-writing-mode.requires?` | (`string` \| \{ `symbol-placement`: `string`[]; \})[] | - |
| `styleSpec.layout_symbol.text-writing-mode.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-writing-mode.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.text-writing-mode.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.text-writing-mode.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.text-writing-mode.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.text-writing-mode.type?` | `string` | - |
| `styleSpec.layout_symbol.text-writing-mode.value?` | `string` | - |
| `styleSpec.layout_symbol.text-writing-mode.values?` | \{ `horizontal`: \{ `doc`: `string`; \}; `vertical`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.text-writing-mode.values.horizontal?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-writing-mode.values.horizontal.doc?` | `string` | - |
| `styleSpec.layout_symbol.text-writing-mode.values.vertical?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.text-writing-mode.values.vertical.doc?` | `string` | - |
| `styleSpec.layout_symbol.visibility?` | \{ `default`: `string`; `doc`: `string`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.layout_symbol.visibility.default?` | `string` | - |
| `styleSpec.layout_symbol.visibility.doc?` | `string` | - |
| `styleSpec.layout_symbol.visibility.property-type?` | `string` | - |
| `styleSpec.layout_symbol.visibility.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.visibility.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.layout_symbol.visibility.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.layout_symbol.visibility.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.layout_symbol.visibility.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.layout_symbol.visibility.type?` | `string` | - |
| `styleSpec.layout_symbol.visibility.values?` | \{ `none`: \{ `doc`: `string`; \}; `visible`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.layout_symbol.visibility.values.none?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.visibility.values.none.doc?` | `string` | - |
| `styleSpec.layout_symbol.visibility.values.visible?` | \{ `doc`: `string`; \} | - |
| `styleSpec.layout_symbol.visibility.values.visible.doc?` | `string` | - |
| `styleSpec.light?` | \{ `anchor`: \{ `default`: `string`; `doc`: `string`; `example`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `intensity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `position`: \{ `default`: `number`[]; `doc`: `string`; `example`: `number`[]; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `value`: `string`; \}; \} | - |
| `styleSpec.light.anchor?` | \{ `default`: `string`; `doc`: `string`; `example`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.light.anchor.default?` | `string` | - |
| `styleSpec.light.anchor.doc?` | `string` | - |
| `styleSpec.light.anchor.example?` | `string` | - |
| `styleSpec.light.anchor.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.light.anchor.expression.interpolated?` | `boolean` | - |
| `styleSpec.light.anchor.expression.parameters?` | `string`[] | - |
| `styleSpec.light.anchor.property-type?` | `string` | - |
| `styleSpec.light.anchor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.light.anchor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.light.anchor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.light.anchor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.light.anchor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.light.anchor.transition?` | `boolean` | - |
| `styleSpec.light.anchor.type?` | `string` | - |
| `styleSpec.light.anchor.values?` | \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.light.anchor.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.light.anchor.values.map.doc?` | `string` | - |
| `styleSpec.light.anchor.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.light.anchor.values.viewport.doc?` | `string` | - |
| `styleSpec.light.color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.light.color.default?` | `string` | - |
| `styleSpec.light.color.doc?` | `string` | - |
| `styleSpec.light.color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.light.color.expression.interpolated?` | `boolean` | - |
| `styleSpec.light.color.expression.parameters?` | `string`[] | - |
| `styleSpec.light.color.property-type?` | `string` | - |
| `styleSpec.light.color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.light.color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.light.color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.light.color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.light.color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.light.color.transition?` | `boolean` | - |
| `styleSpec.light.color.type?` | `string` | - |
| `styleSpec.light.intensity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.light.intensity.default?` | `number` | - |
| `styleSpec.light.intensity.doc?` | `string` | - |
| `styleSpec.light.intensity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.light.intensity.expression.interpolated?` | `boolean` | - |
| `styleSpec.light.intensity.expression.parameters?` | `string`[] | - |
| `styleSpec.light.intensity.maximum?` | `number` | - |
| `styleSpec.light.intensity.minimum?` | `number` | - |
| `styleSpec.light.intensity.property-type?` | `string` | - |
| `styleSpec.light.intensity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.light.intensity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.light.intensity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.light.intensity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.light.intensity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.light.intensity.transition?` | `boolean` | - |
| `styleSpec.light.intensity.type?` | `string` | - |
| `styleSpec.light.position?` | \{ `default`: `number`[]; `doc`: `string`; `example`: `number`[]; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.light.position.default?` | `number`[] | - |
| `styleSpec.light.position.doc?` | `string` | - |
| `styleSpec.light.position.example?` | `number`[] | - |
| `styleSpec.light.position.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.light.position.expression.interpolated?` | `boolean` | - |
| `styleSpec.light.position.expression.parameters?` | `string`[] | - |
| `styleSpec.light.position.length?` | `number` | - |
| `styleSpec.light.position.property-type?` | `string` | - |
| `styleSpec.light.position.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.light.position.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.light.position.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.light.position.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.light.position.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.light.position.transition?` | `boolean` | - |
| `styleSpec.light.position.type?` | `string` | - |
| `styleSpec.light.position.value?` | `string` | - |
| `styleSpec.paint?` | `string`[] | - |
| `styleSpec.paint_background?` | \{ `background-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `background-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `background-pattern`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \}; `transition`: `boolean`; `type`: `string`; \}; \} | - |
| `styleSpec.paint_background.background-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_background.background-color.default?` | `string` | - |
| `styleSpec.paint_background.background-color.doc?` | `string` | - |
| `styleSpec.paint_background.background-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_background.background-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_background.background-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_background.background-color.property-type?` | `string` | - |
| `styleSpec.paint_background.background-color.requires?` | `object`[] | - |
| `styleSpec.paint_background.background-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_background.background-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_background.background-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_background.background-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_background.background-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_background.background-color.transition?` | `boolean` | - |
| `styleSpec.paint_background.background-color.type?` | `string` | - |
| `styleSpec.paint_background.background-opacity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_background.background-opacity.default?` | `number` | - |
| `styleSpec.paint_background.background-opacity.doc?` | `string` | - |
| `styleSpec.paint_background.background-opacity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_background.background-opacity.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_background.background-opacity.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_background.background-opacity.maximum?` | `number` | - |
| `styleSpec.paint_background.background-opacity.minimum?` | `number` | - |
| `styleSpec.paint_background.background-opacity.property-type?` | `string` | - |
| `styleSpec.paint_background.background-opacity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_background.background-opacity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_background.background-opacity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_background.background-opacity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_background.background-opacity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_background.background-opacity.transition?` | `boolean` | - |
| `styleSpec.paint_background.background-opacity.type?` | `string` | - |
| `styleSpec.paint_background.background-pattern?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_background.background-pattern.doc?` | `string` | - |
| `styleSpec.paint_background.background-pattern.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_background.background-pattern.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_background.background-pattern.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_background.background-pattern.property-type?` | `string` | - |
| `styleSpec.paint_background.background-pattern.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \} | - |
| `styleSpec.paint_background.background-pattern.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_background.background-pattern.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_background.background-pattern.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_background.background-pattern.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_background.background-pattern.sdk-support.data-driven styling?` | \{ \} | - |
| `styleSpec.paint_background.background-pattern.transition?` | `boolean` | - |
| `styleSpec.paint_background.background-pattern.type?` | `string` | - |
| `styleSpec.paint_circle?` | \{ `circle-blur`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `circle-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `circle-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `circle-pitch-alignment`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `circle-pitch-scale`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `circle-radius`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `circle-stroke-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `circle-stroke-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `circle-stroke-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `circle-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `circle-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.paint_circle.circle-blur?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_circle.circle-blur.default?` | `number` | - |
| `styleSpec.paint_circle.circle-blur.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-blur.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_circle.circle-blur.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_circle.circle-blur.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_circle.circle-blur.property-type?` | `string` | - |
| `styleSpec.paint_circle.circle-blur.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-blur.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-blur.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_circle.circle-blur.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-blur.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_circle.circle-blur.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-blur.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_circle.circle-blur.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-blur.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_circle.circle-blur.transition?` | `boolean` | - |
| `styleSpec.paint_circle.circle-blur.type?` | `string` | - |
| `styleSpec.paint_circle.circle-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_circle.circle-color.default?` | `string` | - |
| `styleSpec.paint_circle.circle-color.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_circle.circle-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_circle.circle-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_circle.circle-color.property-type?` | `string` | - |
| `styleSpec.paint_circle.circle-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_circle.circle-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_circle.circle-color.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-color.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_circle.circle-color.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-color.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_circle.circle-color.transition?` | `boolean` | - |
| `styleSpec.paint_circle.circle-color.type?` | `string` | - |
| `styleSpec.paint_circle.circle-opacity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_circle.circle-opacity.default?` | `number` | - |
| `styleSpec.paint_circle.circle-opacity.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-opacity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_circle.circle-opacity.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_circle.circle-opacity.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_circle.circle-opacity.maximum?` | `number` | - |
| `styleSpec.paint_circle.circle-opacity.minimum?` | `number` | - |
| `styleSpec.paint_circle.circle-opacity.property-type?` | `string` | - |
| `styleSpec.paint_circle.circle-opacity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-opacity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-opacity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_circle.circle-opacity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-opacity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_circle.circle-opacity.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-opacity.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_circle.circle-opacity.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-opacity.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_circle.circle-opacity.transition?` | `boolean` | - |
| `styleSpec.paint_circle.circle-opacity.type?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-alignment?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.paint_circle.circle-pitch-alignment.default?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-alignment.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-alignment.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_circle.circle-pitch-alignment.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_circle.circle-pitch-alignment.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_circle.circle-pitch-alignment.property-type?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-alignment.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-pitch-alignment.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-pitch-alignment.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-alignment.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-alignment.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-alignment.type?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-alignment.values?` | \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-pitch-alignment.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_circle.circle-pitch-alignment.values.map.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-alignment.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_circle.circle-pitch-alignment.values.viewport.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-scale?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.paint_circle.circle-pitch-scale.default?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-scale.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-scale.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_circle.circle-pitch-scale.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_circle.circle-pitch-scale.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_circle.circle-pitch-scale.property-type?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-scale.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-pitch-scale.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-pitch-scale.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-scale.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-scale.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-scale.type?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-scale.values?` | \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-pitch-scale.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_circle.circle-pitch-scale.values.map.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-pitch-scale.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_circle.circle-pitch-scale.values.viewport.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-radius?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_circle.circle-radius.default?` | `number` | - |
| `styleSpec.paint_circle.circle-radius.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-radius.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_circle.circle-radius.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_circle.circle-radius.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_circle.circle-radius.minimum?` | `number` | - |
| `styleSpec.paint_circle.circle-radius.property-type?` | `string` | - |
| `styleSpec.paint_circle.circle-radius.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-radius.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-radius.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_circle.circle-radius.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-radius.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_circle.circle-radius.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-radius.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_circle.circle-radius.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-radius.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_circle.circle-radius.transition?` | `boolean` | - |
| `styleSpec.paint_circle.circle-radius.type?` | `string` | - |
| `styleSpec.paint_circle.circle-radius.units?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_circle.circle-stroke-color.default?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-color.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_circle.circle-stroke-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_circle.circle-stroke-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_circle.circle-stroke-color.property-type?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-stroke-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-stroke-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-color.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-stroke-color.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-color.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-color.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-color.transition?` | `boolean` | - |
| `styleSpec.paint_circle.circle-stroke-color.type?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-opacity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_circle.circle-stroke-opacity.default?` | `number` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_circle.circle-stroke-opacity.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_circle.circle-stroke-opacity.maximum?` | `number` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.minimum?` | `number` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.property-type?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-stroke-opacity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-stroke-opacity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-stroke-opacity.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.transition?` | `boolean` | - |
| `styleSpec.paint_circle.circle-stroke-opacity.type?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-width?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_circle.circle-stroke-width.default?` | `number` | - |
| `styleSpec.paint_circle.circle-stroke-width.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-width.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_circle.circle-stroke-width.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_circle.circle-stroke-width.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_circle.circle-stroke-width.minimum?` | `number` | - |
| `styleSpec.paint_circle.circle-stroke-width.property-type?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-width.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-stroke-width.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-stroke-width.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-width.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-width.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-width.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-stroke-width.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-width.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-width.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-width.transition?` | `boolean` | - |
| `styleSpec.paint_circle.circle-stroke-width.type?` | `string` | - |
| `styleSpec.paint_circle.circle-stroke-width.units?` | `string` | - |
| `styleSpec.paint_circle.circle-translate?` | \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \} | - |
| `styleSpec.paint_circle.circle-translate.default?` | `number`[] | - |
| `styleSpec.paint_circle.circle-translate.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-translate.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_circle.circle-translate.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_circle.circle-translate.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_circle.circle-translate.length?` | `number` | - |
| `styleSpec.paint_circle.circle-translate.property-type?` | `string` | - |
| `styleSpec.paint_circle.circle-translate.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-translate.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-translate.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_circle.circle-translate.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-translate.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_circle.circle-translate.transition?` | `boolean` | - |
| `styleSpec.paint_circle.circle-translate.type?` | `string` | - |
| `styleSpec.paint_circle.circle-translate.units?` | `string` | - |
| `styleSpec.paint_circle.circle-translate.value?` | `string` | - |
| `styleSpec.paint_circle.circle-translate-anchor?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.paint_circle.circle-translate-anchor.default?` | `string` | - |
| `styleSpec.paint_circle.circle-translate-anchor.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-translate-anchor.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_circle.circle-translate-anchor.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_circle.circle-translate-anchor.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_circle.circle-translate-anchor.property-type?` | `string` | - |
| `styleSpec.paint_circle.circle-translate-anchor.requires?` | `string`[] | - |
| `styleSpec.paint_circle.circle-translate-anchor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-translate-anchor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_circle.circle-translate-anchor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_circle.circle-translate-anchor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_circle.circle-translate-anchor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_circle.circle-translate-anchor.type?` | `string` | - |
| `styleSpec.paint_circle.circle-translate-anchor.values?` | \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.paint_circle.circle-translate-anchor.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_circle.circle-translate-anchor.values.map.doc?` | `string` | - |
| `styleSpec.paint_circle.circle-translate-anchor.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_circle.circle-translate-anchor.values.viewport.doc?` | `string` | - |
| `styleSpec.paint_fill?` | \{ `fill-antialias`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `fill-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-outline-color`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (\{ `!`: `string`; `fill-antialias?`: `undefined`; \} \| \{ `!?`: `undefined`; `fill-antialias`: `boolean`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-pattern`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `fill-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.paint_fill.fill-antialias?` | \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.paint_fill.fill-antialias.default?` | `boolean` | - |
| `styleSpec.paint_fill.fill-antialias.doc?` | `string` | - |
| `styleSpec.paint_fill.fill-antialias.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill.fill-antialias.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill.fill-antialias.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill.fill-antialias.property-type?` | `string` | - |
| `styleSpec.paint_fill.fill-antialias.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill.fill-antialias.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill.fill-antialias.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill.fill-antialias.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill.fill-antialias.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill.fill-antialias.type?` | `string` | - |
| `styleSpec.paint_fill.fill-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_fill.fill-color.default?` | `string` | - |
| `styleSpec.paint_fill.fill-color.doc?` | `string` | - |
| `styleSpec.paint_fill.fill-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill.fill-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill.fill-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill.fill-color.property-type?` | `string` | - |
| `styleSpec.paint_fill.fill-color.requires?` | `object`[] | - |
| `styleSpec.paint_fill.fill-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill.fill-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill.fill-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill.fill-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill.fill-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill.fill-color.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill.fill-color.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_fill.fill-color.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_fill.fill-color.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_fill.fill-color.transition?` | `boolean` | - |
| `styleSpec.paint_fill.fill-color.type?` | `string` | - |
| `styleSpec.paint_fill.fill-opacity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_fill.fill-opacity.default?` | `number` | - |
| `styleSpec.paint_fill.fill-opacity.doc?` | `string` | - |
| `styleSpec.paint_fill.fill-opacity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill.fill-opacity.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill.fill-opacity.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill.fill-opacity.maximum?` | `number` | - |
| `styleSpec.paint_fill.fill-opacity.minimum?` | `number` | - |
| `styleSpec.paint_fill.fill-opacity.property-type?` | `string` | - |
| `styleSpec.paint_fill.fill-opacity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill.fill-opacity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill.fill-opacity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill.fill-opacity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill.fill-opacity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill.fill-opacity.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill.fill-opacity.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_fill.fill-opacity.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_fill.fill-opacity.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_fill.fill-opacity.transition?` | `boolean` | - |
| `styleSpec.paint_fill.fill-opacity.type?` | `string` | - |
| `styleSpec.paint_fill.fill-outline-color?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (\{ `!`: `string`; `fill-antialias?`: `undefined`; \} \| \{ `!?`: `undefined`; `fill-antialias`: `boolean`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_fill.fill-outline-color.doc?` | `string` | - |
| `styleSpec.paint_fill.fill-outline-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill.fill-outline-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill.fill-outline-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill.fill-outline-color.property-type?` | `string` | - |
| `styleSpec.paint_fill.fill-outline-color.requires?` | (\{ `!`: `string`; `fill-antialias?`: `undefined`; \} \| \{ `!?`: `undefined`; `fill-antialias`: `boolean`; \})[] | - |
| `styleSpec.paint_fill.fill-outline-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill.fill-outline-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill.fill-outline-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill.fill-outline-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill.fill-outline-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill.fill-outline-color.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill.fill-outline-color.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_fill.fill-outline-color.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_fill.fill-outline-color.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_fill.fill-outline-color.transition?` | `boolean` | - |
| `styleSpec.paint_fill.fill-outline-color.type?` | `string` | - |
| `styleSpec.paint_fill.fill-pattern?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_fill.fill-pattern.doc?` | `string` | - |
| `styleSpec.paint_fill.fill-pattern.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill.fill-pattern.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill.fill-pattern.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill.fill-pattern.property-type?` | `string` | - |
| `styleSpec.paint_fill.fill-pattern.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill.fill-pattern.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill.fill-pattern.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill.fill-pattern.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill.fill-pattern.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill.fill-pattern.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill.fill-pattern.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_fill.fill-pattern.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_fill.fill-pattern.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_fill.fill-pattern.transition?` | `boolean` | - |
| `styleSpec.paint_fill.fill-pattern.type?` | `string` | - |
| `styleSpec.paint_fill.fill-translate?` | \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \} | - |
| `styleSpec.paint_fill.fill-translate.default?` | `number`[] | - |
| `styleSpec.paint_fill.fill-translate.doc?` | `string` | - |
| `styleSpec.paint_fill.fill-translate.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill.fill-translate.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill.fill-translate.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill.fill-translate.length?` | `number` | - |
| `styleSpec.paint_fill.fill-translate.property-type?` | `string` | - |
| `styleSpec.paint_fill.fill-translate.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill.fill-translate.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill.fill-translate.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill.fill-translate.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill.fill-translate.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill.fill-translate.transition?` | `boolean` | - |
| `styleSpec.paint_fill.fill-translate.type?` | `string` | - |
| `styleSpec.paint_fill.fill-translate.units?` | `string` | - |
| `styleSpec.paint_fill.fill-translate.value?` | `string` | - |
| `styleSpec.paint_fill.fill-translate-anchor?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.paint_fill.fill-translate-anchor.default?` | `string` | - |
| `styleSpec.paint_fill.fill-translate-anchor.doc?` | `string` | - |
| `styleSpec.paint_fill.fill-translate-anchor.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill.fill-translate-anchor.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill.fill-translate-anchor.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill.fill-translate-anchor.property-type?` | `string` | - |
| `styleSpec.paint_fill.fill-translate-anchor.requires?` | `string`[] | - |
| `styleSpec.paint_fill.fill-translate-anchor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill.fill-translate-anchor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill.fill-translate-anchor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill.fill-translate-anchor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill.fill-translate-anchor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill.fill-translate-anchor.type?` | `string` | - |
| `styleSpec.paint_fill.fill-translate-anchor.values?` | \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.paint_fill.fill-translate-anchor.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_fill.fill-translate-anchor.values.map.doc?` | `string` | - |
| `styleSpec.paint_fill.fill-translate-anchor.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_fill.fill-translate-anchor.values.viewport.doc?` | `string` | - |
| `styleSpec.paint_fill-extrusion?` | \{ `fill-extrusion-base`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `fill-extrusion-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-extrusion-height`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `fill-extrusion-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-extrusion-pattern`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `fill-extrusion-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `fill-extrusion-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `fill-extrusion-vertical-gradient`: \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.default?` | `number` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.doc?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.minimum?` | `number` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.property-type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.requires?` | `string`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.transition?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-base.units?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.default?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.doc?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.property-type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.requires?` | `object`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.transition?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-color.type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.default?` | `number` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.doc?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.minimum?` | `number` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.property-type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.transition?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-height.units?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.default?` | `number` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.doc?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.maximum?` | `number` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.minimum?` | `number` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.property-type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.transition?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-opacity.type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.doc?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.property-type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.transition?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-pattern.type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate?` | \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.default?` | `number`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.doc?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.length?` | `number` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.property-type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.transition?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.units?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate.value?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.default?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.doc?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.property-type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.requires?` | `string`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.values?` | \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.values.map.doc?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-translate-anchor.values.viewport.doc?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient?` | \{ `default`: `boolean`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.default?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.doc?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.property-type?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.transition?` | `boolean` | - |
| `styleSpec.paint_fill-extrusion.fill-extrusion-vertical-gradient.type?` | `string` | - |
| `styleSpec.paint_heatmap?` | \{ `heatmap-color`: \{ `default`: (`string` \| `number` \| `string`[])[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \}; `transition`: `boolean`; `type`: `string`; \}; `heatmap-intensity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `heatmap-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `heatmap-radius`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `heatmap-weight`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; \} | - |
| `styleSpec.paint_heatmap.heatmap-color?` | \{ `default`: (`string` \| `number` \| `string`[])[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-color.default?` | (`string` \| `number` \| `string`[])[] | - |
| `styleSpec.paint_heatmap.heatmap-color.doc?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_heatmap.heatmap-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_heatmap.heatmap-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_heatmap.heatmap-color.property-type?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \} | - |
| `styleSpec.paint_heatmap.heatmap-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-color.sdk-support.data-driven styling?` | \{ \} | - |
| `styleSpec.paint_heatmap.heatmap-color.transition?` | `boolean` | - |
| `styleSpec.paint_heatmap.heatmap-color.type?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-intensity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-intensity.default?` | `number` | - |
| `styleSpec.paint_heatmap.heatmap-intensity.doc?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-intensity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_heatmap.heatmap-intensity.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_heatmap.heatmap-intensity.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_heatmap.heatmap-intensity.minimum?` | `number` | - |
| `styleSpec.paint_heatmap.heatmap-intensity.property-type?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-intensity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_heatmap.heatmap-intensity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-intensity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-intensity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-intensity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-intensity.transition?` | `boolean` | - |
| `styleSpec.paint_heatmap.heatmap-intensity.type?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-opacity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-opacity.default?` | `number` | - |
| `styleSpec.paint_heatmap.heatmap-opacity.doc?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-opacity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_heatmap.heatmap-opacity.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_heatmap.heatmap-opacity.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_heatmap.heatmap-opacity.maximum?` | `number` | - |
| `styleSpec.paint_heatmap.heatmap-opacity.minimum?` | `number` | - |
| `styleSpec.paint_heatmap.heatmap-opacity.property-type?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-opacity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_heatmap.heatmap-opacity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-opacity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-opacity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-opacity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-opacity.transition?` | `boolean` | - |
| `styleSpec.paint_heatmap.heatmap-opacity.type?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-radius?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-radius.default?` | `number` | - |
| `styleSpec.paint_heatmap.heatmap-radius.doc?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-radius.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_heatmap.heatmap-radius.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_heatmap.heatmap-radius.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_heatmap.heatmap-radius.minimum?` | `number` | - |
| `styleSpec.paint_heatmap.heatmap-radius.property-type?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-radius.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_heatmap.heatmap-radius.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-radius.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-radius.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-radius.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-radius.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-radius.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-radius.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-radius.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-radius.transition?` | `boolean` | - |
| `styleSpec.paint_heatmap.heatmap-radius.type?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-radius.units?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-weight?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-weight.default?` | `number` | - |
| `styleSpec.paint_heatmap.heatmap-weight.doc?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-weight.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_heatmap.heatmap-weight.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_heatmap.heatmap-weight.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_heatmap.heatmap-weight.minimum?` | `number` | - |
| `styleSpec.paint_heatmap.heatmap-weight.property-type?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-weight.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_heatmap.heatmap-weight.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-weight.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-weight.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-weight.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-weight.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_heatmap.heatmap-weight.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-weight.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-weight.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_heatmap.heatmap-weight.transition?` | `boolean` | - |
| `styleSpec.paint_heatmap.heatmap-weight.type?` | `string` | - |
| `styleSpec.paint_hillshade?` | \{ `hillshade-accent-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `hillshade-exaggeration`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `hillshade-highlight-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `hillshade-illumination-altitude`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `hillshade-illumination-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `hillshade-illumination-direction`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `hillshade-method`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `basic`: \{ `doc`: `string`; \}; `combined`: \{ `doc`: `string`; \}; `igor`: \{ `doc`: `string`; \}; `multidirectional`: \{ `doc`: `string`; \}; `standard`: \{ `doc`: `string`; \}; \}; \}; `hillshade-shadow-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-accent-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.default?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.property-type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.transition?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-accent-color.type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.default?` | `number` | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.maximum?` | `number` | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.minimum?` | `number` | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.property-type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.transition?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-exaggeration.type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.default?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.property-type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.sdk-support.multidirectional?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.sdk-support.multidirectional.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.sdk-support.multidirectional.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.sdk-support.multidirectional.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.transition?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-highlight-color.type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.default?` | `number` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.maximum?` | `number` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.minimum?` | `number` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.property-type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.sdk-support.multidirectional?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.sdk-support.multidirectional.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.sdk-support.multidirectional.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.sdk-support.multidirectional.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.transition?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-altitude.type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.default?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.property-type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.values?` | \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.values.map.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-anchor.values.viewport.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.default?` | `number` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.maximum?` | `number` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.minimum?` | `number` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.property-type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.sdk-support.multidirectional?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.sdk-support.multidirectional.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.sdk-support.multidirectional.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.sdk-support.multidirectional.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.transition?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-illumination-direction.type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `basic`: \{ `doc`: `string`; \}; `combined`: \{ `doc`: `string`; \}; `igor`: \{ `doc`: `string`; \}; `multidirectional`: \{ `doc`: `string`; \}; `standard`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-method.default?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_hillshade.hillshade-method.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-method.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_hillshade.hillshade-method.property-type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-method.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-method.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method.type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method.values?` | \{ `basic`: \{ `doc`: `string`; \}; `combined`: \{ `doc`: `string`; \}; `igor`: \{ `doc`: `string`; \}; `multidirectional`: \{ `doc`: `string`; \}; `standard`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-method.values.basic?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-method.values.basic.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method.values.combined?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-method.values.combined.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method.values.igor?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-method.values.igor.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method.values.multidirectional?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-method.values.multidirectional.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-method.values.standard?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-method.values.standard.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.default?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.doc?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.property-type?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `multidirectional`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.sdk-support.multidirectional?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.sdk-support.multidirectional.android?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.sdk-support.multidirectional.ios?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.sdk-support.multidirectional.js?` | `string` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.transition?` | `boolean` | - |
| `styleSpec.paint_hillshade.hillshade-shadow-color.type?` | `string` | - |
| `styleSpec.paint_line?` | \{ `line-blur`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `line-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `line-dasharray`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `line-gap-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `line-gradient`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (\{ `!`: `string`; `has?`: `undefined`; `source?`: `undefined`; \} \| \{ `!?`: `undefined`; `has`: \{ `lineMetrics`: `boolean`; \}; `source`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \}; `transition`: `boolean`; `type`: `string`; \}; `line-offset`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `line-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `line-pattern`: \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `line-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `line-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `line-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-blur?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_line.line-blur.default?` | `number` | - |
| `styleSpec.paint_line.line-blur.doc?` | `string` | - |
| `styleSpec.paint_line.line-blur.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_line.line-blur.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_line.line-blur.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_line.line-blur.minimum?` | `number` | - |
| `styleSpec.paint_line.line-blur.property-type?` | `string` | - |
| `styleSpec.paint_line.line-blur.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-blur.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-blur.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_line.line-blur.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_line.line-blur.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_line.line-blur.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-blur.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_line.line-blur.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_line.line-blur.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_line.line-blur.transition?` | `boolean` | - |
| `styleSpec.paint_line.line-blur.type?` | `string` | - |
| `styleSpec.paint_line.line-blur.units?` | `string` | - |
| `styleSpec.paint_line.line-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_line.line-color.default?` | `string` | - |
| `styleSpec.paint_line.line-color.doc?` | `string` | - |
| `styleSpec.paint_line.line-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_line.line-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_line.line-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_line.line-color.property-type?` | `string` | - |
| `styleSpec.paint_line.line-color.requires?` | `object`[] | - |
| `styleSpec.paint_line.line-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_line.line-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_line.line-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_line.line-color.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-color.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_line.line-color.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_line.line-color.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_line.line-color.transition?` | `boolean` | - |
| `styleSpec.paint_line.line-color.type?` | `string` | - |
| `styleSpec.paint_line.line-dasharray?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `object`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \} | - |
| `styleSpec.paint_line.line-dasharray.doc?` | `string` | - |
| `styleSpec.paint_line.line-dasharray.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_line.line-dasharray.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_line.line-dasharray.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_line.line-dasharray.minimum?` | `number` | - |
| `styleSpec.paint_line.line-dasharray.property-type?` | `string` | - |
| `styleSpec.paint_line.line-dasharray.requires?` | `object`[] | - |
| `styleSpec.paint_line.line-dasharray.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-dasharray.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-dasharray.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_line.line-dasharray.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_line.line-dasharray.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_line.line-dasharray.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-dasharray.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_line.line-dasharray.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_line.line-dasharray.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_line.line-dasharray.transition?` | `boolean` | - |
| `styleSpec.paint_line.line-dasharray.type?` | `string` | - |
| `styleSpec.paint_line.line-dasharray.units?` | `string` | - |
| `styleSpec.paint_line.line-dasharray.value?` | `string` | - |
| `styleSpec.paint_line.line-gap-width?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_line.line-gap-width.default?` | `number` | - |
| `styleSpec.paint_line.line-gap-width.doc?` | `string` | - |
| `styleSpec.paint_line.line-gap-width.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_line.line-gap-width.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_line.line-gap-width.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_line.line-gap-width.minimum?` | `number` | - |
| `styleSpec.paint_line.line-gap-width.property-type?` | `string` | - |
| `styleSpec.paint_line.line-gap-width.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-gap-width.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-gap-width.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_line.line-gap-width.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_line.line-gap-width.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_line.line-gap-width.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-gap-width.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_line.line-gap-width.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_line.line-gap-width.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_line.line-gap-width.transition?` | `boolean` | - |
| `styleSpec.paint_line.line-gap-width.type?` | `string` | - |
| `styleSpec.paint_line.line-gap-width.units?` | `string` | - |
| `styleSpec.paint_line.line-gradient?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: (\{ `!`: `string`; `has?`: `undefined`; `source?`: `undefined`; \} \| \{ `!?`: `undefined`; `has`: \{ `lineMetrics`: `boolean`; \}; `source`: `string`; \})[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_line.line-gradient.doc?` | `string` | - |
| `styleSpec.paint_line.line-gradient.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_line.line-gradient.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_line.line-gradient.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_line.line-gradient.property-type?` | `string` | - |
| `styleSpec.paint_line.line-gradient.requires?` | (\{ `!`: `string`; `has?`: `undefined`; `source?`: `undefined`; \} \| \{ `!?`: `undefined`; `has`: \{ `lineMetrics`: `boolean`; \}; `source`: `string`; \})[] | - |
| `styleSpec.paint_line.line-gradient.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ \}; \} | - |
| `styleSpec.paint_line.line-gradient.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-gradient.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_line.line-gradient.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_line.line-gradient.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_line.line-gradient.sdk-support.data-driven styling?` | \{ \} | - |
| `styleSpec.paint_line.line-gradient.transition?` | `boolean` | - |
| `styleSpec.paint_line.line-gradient.type?` | `string` | - |
| `styleSpec.paint_line.line-offset?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_line.line-offset.default?` | `number` | - |
| `styleSpec.paint_line.line-offset.doc?` | `string` | - |
| `styleSpec.paint_line.line-offset.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_line.line-offset.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_line.line-offset.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_line.line-offset.property-type?` | `string` | - |
| `styleSpec.paint_line.line-offset.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-offset.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-offset.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_line.line-offset.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_line.line-offset.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_line.line-offset.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-offset.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_line.line-offset.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_line.line-offset.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_line.line-offset.transition?` | `boolean` | - |
| `styleSpec.paint_line.line-offset.type?` | `string` | - |
| `styleSpec.paint_line.line-offset.units?` | `string` | - |
| `styleSpec.paint_line.line-opacity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_line.line-opacity.default?` | `number` | - |
| `styleSpec.paint_line.line-opacity.doc?` | `string` | - |
| `styleSpec.paint_line.line-opacity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_line.line-opacity.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_line.line-opacity.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_line.line-opacity.maximum?` | `number` | - |
| `styleSpec.paint_line.line-opacity.minimum?` | `number` | - |
| `styleSpec.paint_line.line-opacity.property-type?` | `string` | - |
| `styleSpec.paint_line.line-opacity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-opacity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-opacity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_line.line-opacity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_line.line-opacity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_line.line-opacity.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-opacity.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_line.line-opacity.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_line.line-opacity.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_line.line-opacity.transition?` | `boolean` | - |
| `styleSpec.paint_line.line-opacity.type?` | `string` | - |
| `styleSpec.paint_line.line-pattern?` | \{ `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_line.line-pattern.doc?` | `string` | - |
| `styleSpec.paint_line.line-pattern.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_line.line-pattern.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_line.line-pattern.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_line.line-pattern.property-type?` | `string` | - |
| `styleSpec.paint_line.line-pattern.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-pattern.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-pattern.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_line.line-pattern.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_line.line-pattern.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_line.line-pattern.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-pattern.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_line.line-pattern.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_line.line-pattern.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_line.line-pattern.transition?` | `boolean` | - |
| `styleSpec.paint_line.line-pattern.type?` | `string` | - |
| `styleSpec.paint_line.line-translate?` | \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \} | - |
| `styleSpec.paint_line.line-translate.default?` | `number`[] | - |
| `styleSpec.paint_line.line-translate.doc?` | `string` | - |
| `styleSpec.paint_line.line-translate.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_line.line-translate.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_line.line-translate.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_line.line-translate.length?` | `number` | - |
| `styleSpec.paint_line.line-translate.property-type?` | `string` | - |
| `styleSpec.paint_line.line-translate.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-translate.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-translate.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_line.line-translate.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_line.line-translate.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_line.line-translate.transition?` | `boolean` | - |
| `styleSpec.paint_line.line-translate.type?` | `string` | - |
| `styleSpec.paint_line.line-translate.units?` | `string` | - |
| `styleSpec.paint_line.line-translate.value?` | `string` | - |
| `styleSpec.paint_line.line-translate-anchor?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.paint_line.line-translate-anchor.default?` | `string` | - |
| `styleSpec.paint_line.line-translate-anchor.doc?` | `string` | - |
| `styleSpec.paint_line.line-translate-anchor.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_line.line-translate-anchor.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_line.line-translate-anchor.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_line.line-translate-anchor.property-type?` | `string` | - |
| `styleSpec.paint_line.line-translate-anchor.requires?` | `string`[] | - |
| `styleSpec.paint_line.line-translate-anchor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-translate-anchor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-translate-anchor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_line.line-translate-anchor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_line.line-translate-anchor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_line.line-translate-anchor.type?` | `string` | - |
| `styleSpec.paint_line.line-translate-anchor.values?` | \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-translate-anchor.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_line.line-translate-anchor.values.map.doc?` | `string` | - |
| `styleSpec.paint_line.line-translate-anchor.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_line.line-translate-anchor.values.viewport.doc?` | `string` | - |
| `styleSpec.paint_line.line-width?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_line.line-width.default?` | `number` | - |
| `styleSpec.paint_line.line-width.doc?` | `string` | - |
| `styleSpec.paint_line.line-width.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_line.line-width.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_line.line-width.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_line.line-width.minimum?` | `number` | - |
| `styleSpec.paint_line.line-width.property-type?` | `string` | - |
| `styleSpec.paint_line.line-width.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_line.line-width.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-width.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_line.line-width.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_line.line-width.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_line.line-width.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_line.line-width.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_line.line-width.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_line.line-width.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_line.line-width.transition?` | `boolean` | - |
| `styleSpec.paint_line.line-width.type?` | `string` | - |
| `styleSpec.paint_line.line-width.units?` | `string` | - |
| `styleSpec.paint_raster?` | \{ `raster-brightness-max`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `raster-brightness-min`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `raster-contrast`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `raster-fade-duration`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `raster-hue-rotate`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `period`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `raster-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `raster-resampling`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `linear`: \{ `doc`: `string`; \}; `nearest`: \{ `doc`: `string`; \}; \}; \}; `raster-saturation`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; \} | - |
| `styleSpec.paint_raster.raster-brightness-max?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_raster.raster-brightness-max.default?` | `number` | - |
| `styleSpec.paint_raster.raster-brightness-max.doc?` | `string` | - |
| `styleSpec.paint_raster.raster-brightness-max.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_raster.raster-brightness-max.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_raster.raster-brightness-max.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_raster.raster-brightness-max.maximum?` | `number` | - |
| `styleSpec.paint_raster.raster-brightness-max.minimum?` | `number` | - |
| `styleSpec.paint_raster.raster-brightness-max.property-type?` | `string` | - |
| `styleSpec.paint_raster.raster-brightness-max.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_raster.raster-brightness-max.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_raster.raster-brightness-max.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_raster.raster-brightness-max.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_raster.raster-brightness-max.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_raster.raster-brightness-max.transition?` | `boolean` | - |
| `styleSpec.paint_raster.raster-brightness-max.type?` | `string` | - |
| `styleSpec.paint_raster.raster-brightness-min?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_raster.raster-brightness-min.default?` | `number` | - |
| `styleSpec.paint_raster.raster-brightness-min.doc?` | `string` | - |
| `styleSpec.paint_raster.raster-brightness-min.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_raster.raster-brightness-min.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_raster.raster-brightness-min.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_raster.raster-brightness-min.maximum?` | `number` | - |
| `styleSpec.paint_raster.raster-brightness-min.minimum?` | `number` | - |
| `styleSpec.paint_raster.raster-brightness-min.property-type?` | `string` | - |
| `styleSpec.paint_raster.raster-brightness-min.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_raster.raster-brightness-min.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_raster.raster-brightness-min.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_raster.raster-brightness-min.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_raster.raster-brightness-min.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_raster.raster-brightness-min.transition?` | `boolean` | - |
| `styleSpec.paint_raster.raster-brightness-min.type?` | `string` | - |
| `styleSpec.paint_raster.raster-contrast?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_raster.raster-contrast.default?` | `number` | - |
| `styleSpec.paint_raster.raster-contrast.doc?` | `string` | - |
| `styleSpec.paint_raster.raster-contrast.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_raster.raster-contrast.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_raster.raster-contrast.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_raster.raster-contrast.maximum?` | `number` | - |
| `styleSpec.paint_raster.raster-contrast.minimum?` | `number` | - |
| `styleSpec.paint_raster.raster-contrast.property-type?` | `string` | - |
| `styleSpec.paint_raster.raster-contrast.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_raster.raster-contrast.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_raster.raster-contrast.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_raster.raster-contrast.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_raster.raster-contrast.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_raster.raster-contrast.transition?` | `boolean` | - |
| `styleSpec.paint_raster.raster-contrast.type?` | `string` | - |
| `styleSpec.paint_raster.raster-fade-duration?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_raster.raster-fade-duration.default?` | `number` | - |
| `styleSpec.paint_raster.raster-fade-duration.doc?` | `string` | - |
| `styleSpec.paint_raster.raster-fade-duration.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_raster.raster-fade-duration.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_raster.raster-fade-duration.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_raster.raster-fade-duration.minimum?` | `number` | - |
| `styleSpec.paint_raster.raster-fade-duration.property-type?` | `string` | - |
| `styleSpec.paint_raster.raster-fade-duration.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_raster.raster-fade-duration.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_raster.raster-fade-duration.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_raster.raster-fade-duration.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_raster.raster-fade-duration.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_raster.raster-fade-duration.transition?` | `boolean` | - |
| `styleSpec.paint_raster.raster-fade-duration.type?` | `string` | - |
| `styleSpec.paint_raster.raster-fade-duration.units?` | `string` | - |
| `styleSpec.paint_raster.raster-hue-rotate?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `period`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_raster.raster-hue-rotate.default?` | `number` | - |
| `styleSpec.paint_raster.raster-hue-rotate.doc?` | `string` | - |
| `styleSpec.paint_raster.raster-hue-rotate.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_raster.raster-hue-rotate.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_raster.raster-hue-rotate.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_raster.raster-hue-rotate.period?` | `number` | - |
| `styleSpec.paint_raster.raster-hue-rotate.property-type?` | `string` | - |
| `styleSpec.paint_raster.raster-hue-rotate.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_raster.raster-hue-rotate.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_raster.raster-hue-rotate.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_raster.raster-hue-rotate.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_raster.raster-hue-rotate.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_raster.raster-hue-rotate.transition?` | `boolean` | - |
| `styleSpec.paint_raster.raster-hue-rotate.type?` | `string` | - |
| `styleSpec.paint_raster.raster-hue-rotate.units?` | `string` | - |
| `styleSpec.paint_raster.raster-opacity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_raster.raster-opacity.default?` | `number` | - |
| `styleSpec.paint_raster.raster-opacity.doc?` | `string` | - |
| `styleSpec.paint_raster.raster-opacity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_raster.raster-opacity.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_raster.raster-opacity.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_raster.raster-opacity.maximum?` | `number` | - |
| `styleSpec.paint_raster.raster-opacity.minimum?` | `number` | - |
| `styleSpec.paint_raster.raster-opacity.property-type?` | `string` | - |
| `styleSpec.paint_raster.raster-opacity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_raster.raster-opacity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_raster.raster-opacity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_raster.raster-opacity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_raster.raster-opacity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_raster.raster-opacity.transition?` | `boolean` | - |
| `styleSpec.paint_raster.raster-opacity.type?` | `string` | - |
| `styleSpec.paint_raster.raster-resampling?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `linear`: \{ `doc`: `string`; \}; `nearest`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.paint_raster.raster-resampling.default?` | `string` | - |
| `styleSpec.paint_raster.raster-resampling.doc?` | `string` | - |
| `styleSpec.paint_raster.raster-resampling.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_raster.raster-resampling.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_raster.raster-resampling.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_raster.raster-resampling.property-type?` | `string` | - |
| `styleSpec.paint_raster.raster-resampling.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_raster.raster-resampling.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_raster.raster-resampling.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_raster.raster-resampling.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_raster.raster-resampling.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_raster.raster-resampling.type?` | `string` | - |
| `styleSpec.paint_raster.raster-resampling.values?` | \{ `linear`: \{ `doc`: `string`; \}; `nearest`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.paint_raster.raster-resampling.values.linear?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_raster.raster-resampling.values.linear.doc?` | `string` | - |
| `styleSpec.paint_raster.raster-resampling.values.nearest?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_raster.raster-resampling.values.nearest.doc?` | `string` | - |
| `styleSpec.paint_raster.raster-saturation?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_raster.raster-saturation.default?` | `number` | - |
| `styleSpec.paint_raster.raster-saturation.doc?` | `string` | - |
| `styleSpec.paint_raster.raster-saturation.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_raster.raster-saturation.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_raster.raster-saturation.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_raster.raster-saturation.maximum?` | `number` | - |
| `styleSpec.paint_raster.raster-saturation.minimum?` | `number` | - |
| `styleSpec.paint_raster.raster-saturation.property-type?` | `string` | - |
| `styleSpec.paint_raster.raster-saturation.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_raster.raster-saturation.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_raster.raster-saturation.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_raster.raster-saturation.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_raster.raster-saturation.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_raster.raster-saturation.transition?` | `boolean` | - |
| `styleSpec.paint_raster.raster-saturation.type?` | `string` | - |
| `styleSpec.paint_symbol?` | \{ `icon-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `icon-halo-blur`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `icon-halo-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `icon-halo-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `icon-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `icon-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `icon-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; `text-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `overridable`: `boolean`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `text-halo-blur`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `text-halo-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `text-halo-width`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \}; `text-opacity`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \}; `text-translate`: \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \}; `text-translate-anchor`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.paint_symbol.icon-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-color.default?` | `string` | - |
| `styleSpec.paint_symbol.icon-color.doc?` | `string` | - |
| `styleSpec.paint_symbol.icon-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.icon-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-color.property-type?` | `string` | - |
| `styleSpec.paint_symbol.icon-color.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.icon-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-color.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-color.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-color.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-color.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-color.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-color.type?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-blur?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-halo-blur.default?` | `number` | - |
| `styleSpec.paint_symbol.icon-halo-blur.doc?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-blur.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.icon-halo-blur.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-halo-blur.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-halo-blur.minimum?` | `number` | - |
| `styleSpec.paint_symbol.icon-halo-blur.property-type?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-blur.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-halo-blur.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.icon-halo-blur.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-halo-blur.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-blur.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-blur.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-blur.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-halo-blur.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-blur.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-blur.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-blur.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-halo-blur.type?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-blur.units?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-halo-color.default?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-color.doc?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.icon-halo-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-halo-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-halo-color.property-type?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-color.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-halo-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.icon-halo-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-halo-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-color.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-halo-color.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-color.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-color.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-color.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-halo-color.type?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-width?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-halo-width.default?` | `number` | - |
| `styleSpec.paint_symbol.icon-halo-width.doc?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-width.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.icon-halo-width.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-halo-width.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-halo-width.minimum?` | `number` | - |
| `styleSpec.paint_symbol.icon-halo-width.property-type?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-width.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-halo-width.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.icon-halo-width.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-halo-width.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-width.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-width.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-width.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-halo-width.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-width.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-width.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-width.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-halo-width.type?` | `string` | - |
| `styleSpec.paint_symbol.icon-halo-width.units?` | `string` | - |
| `styleSpec.paint_symbol.icon-opacity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-opacity.default?` | `number` | - |
| `styleSpec.paint_symbol.icon-opacity.doc?` | `string` | - |
| `styleSpec.paint_symbol.icon-opacity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.icon-opacity.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-opacity.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-opacity.maximum?` | `number` | - |
| `styleSpec.paint_symbol.icon-opacity.minimum?` | `number` | - |
| `styleSpec.paint_symbol.icon-opacity.property-type?` | `string` | - |
| `styleSpec.paint_symbol.icon-opacity.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-opacity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.icon-opacity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-opacity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-opacity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-opacity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-opacity.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-opacity.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-opacity.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-opacity.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-opacity.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-opacity.type?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate?` | \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-translate.default?` | `number`[] | - |
| `styleSpec.paint_symbol.icon-translate.doc?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.icon-translate.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-translate.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-translate.length?` | `number` | - |
| `styleSpec.paint_symbol.icon-translate.property-type?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-translate.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.icon-translate.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-translate.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-translate.type?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate.units?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate.value?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate-anchor?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.paint_symbol.icon-translate-anchor.default?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate-anchor.doc?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate-anchor.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.icon-translate-anchor.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.icon-translate-anchor.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-translate-anchor.property-type?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate-anchor.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.icon-translate-anchor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.icon-translate-anchor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-translate-anchor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate-anchor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate-anchor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate-anchor.type?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate-anchor.values?` | \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.icon-translate-anchor.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-translate-anchor.values.map.doc?` | `string` | - |
| `styleSpec.paint_symbol.icon-translate-anchor.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_symbol.icon-translate-anchor.values.viewport.doc?` | `string` | - |
| `styleSpec.paint_symbol.text-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `overridable`: `boolean`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_symbol.text-color.default?` | `string` | - |
| `styleSpec.paint_symbol.text-color.doc?` | `string` | - |
| `styleSpec.paint_symbol.text-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.text-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.text-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.text-color.overridable?` | `boolean` | - |
| `styleSpec.paint_symbol.text-color.property-type?` | `string` | - |
| `styleSpec.paint_symbol.text-color.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.text-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.text-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.text-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.text-color.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-color.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_symbol.text-color.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-color.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_symbol.text-color.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.text-color.type?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-blur?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_symbol.text-halo-blur.default?` | `number` | - |
| `styleSpec.paint_symbol.text-halo-blur.doc?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-blur.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.text-halo-blur.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.text-halo-blur.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.text-halo-blur.minimum?` | `number` | - |
| `styleSpec.paint_symbol.text-halo-blur.property-type?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-blur.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.text-halo-blur.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.text-halo-blur.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-halo-blur.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-blur.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-blur.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-blur.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-halo-blur.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-blur.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-blur.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-blur.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.text-halo-blur.type?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-blur.units?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_symbol.text-halo-color.default?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-color.doc?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.text-halo-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.text-halo-color.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.text-halo-color.property-type?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-color.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.text-halo-color.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.text-halo-color.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-halo-color.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-color.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-color.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-color.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-halo-color.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-color.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-color.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-color.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.text-halo-color.type?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-width?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.paint_symbol.text-halo-width.default?` | `number` | - |
| `styleSpec.paint_symbol.text-halo-width.doc?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-width.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.text-halo-width.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.text-halo-width.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.text-halo-width.minimum?` | `number` | - |
| `styleSpec.paint_symbol.text-halo-width.property-type?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-width.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.text-halo-width.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.text-halo-width.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-halo-width.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-width.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-width.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-width.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-halo-width.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-width.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-width.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-width.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.text-halo-width.type?` | `string` | - |
| `styleSpec.paint_symbol.text-halo-width.units?` | `string` | - |
| `styleSpec.paint_symbol.text-opacity?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.paint_symbol.text-opacity.default?` | `number` | - |
| `styleSpec.paint_symbol.text-opacity.doc?` | `string` | - |
| `styleSpec.paint_symbol.text-opacity.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.text-opacity.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.text-opacity.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.text-opacity.maximum?` | `number` | - |
| `styleSpec.paint_symbol.text-opacity.minimum?` | `number` | - |
| `styleSpec.paint_symbol.text-opacity.property-type?` | `string` | - |
| `styleSpec.paint_symbol.text-opacity.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.text-opacity.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `data-driven styling`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.text-opacity.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-opacity.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.text-opacity.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-opacity.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.text-opacity.sdk-support.data-driven styling?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-opacity.sdk-support.data-driven styling.android?` | `string` | - |
| `styleSpec.paint_symbol.text-opacity.sdk-support.data-driven styling.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-opacity.sdk-support.data-driven styling.js?` | `string` | - |
| `styleSpec.paint_symbol.text-opacity.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.text-opacity.type?` | `string` | - |
| `styleSpec.paint_symbol.text-translate?` | \{ `default`: `number`[]; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `length`: `number`; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `transition`: `boolean`; `type`: `string`; `units`: `string`; `value`: `string`; \} | - |
| `styleSpec.paint_symbol.text-translate.default?` | `number`[] | - |
| `styleSpec.paint_symbol.text-translate.doc?` | `string` | - |
| `styleSpec.paint_symbol.text-translate.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.text-translate.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.text-translate.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.text-translate.length?` | `number` | - |
| `styleSpec.paint_symbol.text-translate.property-type?` | `string` | - |
| `styleSpec.paint_symbol.text-translate.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.text-translate.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.text-translate.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-translate.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.text-translate.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-translate.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.text-translate.transition?` | `boolean` | - |
| `styleSpec.paint_symbol.text-translate.type?` | `string` | - |
| `styleSpec.paint_symbol.text-translate.units?` | `string` | - |
| `styleSpec.paint_symbol.text-translate.value?` | `string` | - |
| `styleSpec.paint_symbol.text-translate-anchor?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `requires`: `string`[]; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.paint_symbol.text-translate-anchor.default?` | `string` | - |
| `styleSpec.paint_symbol.text-translate-anchor.doc?` | `string` | - |
| `styleSpec.paint_symbol.text-translate-anchor.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.paint_symbol.text-translate-anchor.expression.interpolated?` | `boolean` | - |
| `styleSpec.paint_symbol.text-translate-anchor.expression.parameters?` | `string`[] | - |
| `styleSpec.paint_symbol.text-translate-anchor.property-type?` | `string` | - |
| `styleSpec.paint_symbol.text-translate-anchor.requires?` | `string`[] | - |
| `styleSpec.paint_symbol.text-translate-anchor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.text-translate-anchor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.paint_symbol.text-translate-anchor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.paint_symbol.text-translate-anchor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.paint_symbol.text-translate-anchor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.paint_symbol.text-translate-anchor.type?` | `string` | - |
| `styleSpec.paint_symbol.text-translate-anchor.values?` | \{ `map`: \{ `doc`: `string`; \}; `viewport`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.paint_symbol.text-translate-anchor.values.map?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_symbol.text-translate-anchor.values.map.doc?` | `string` | - |
| `styleSpec.paint_symbol.text-translate-anchor.values.viewport?` | \{ `doc`: `string`; \} | - |
| `styleSpec.paint_symbol.text-translate-anchor.values.viewport.doc?` | `string` | - |
| `styleSpec.projection?` | \{ `type`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; \} | - |
| `styleSpec.projection.type?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.projection.type.default?` | `string` | - |
| `styleSpec.projection.type.doc?` | `string` | - |
| `styleSpec.projection.type.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.projection.type.expression.interpolated?` | `boolean` | - |
| `styleSpec.projection.type.expression.parameters?` | `string`[] | - |
| `styleSpec.projection.type.property-type?` | `string` | - |
| `styleSpec.projection.type.transition?` | `boolean` | - |
| `styleSpec.projection.type.type?` | `string` | - |
| `styleSpec.promoteId?` | \{ `*`: \{ `doc`: `string`; `type`: `string`; \}; \} | - |
| `styleSpec.promoteId.*?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.promoteId.*.doc?` | `string` | - |
| `styleSpec.promoteId.*.type?` | `string` | - |
| `styleSpec.property-type?` | \{ `color-ramp`: \{ `doc`: `string`; `type`: `string`; \}; `constant`: \{ `doc`: `string`; `type`: `string`; \}; `cross-faded`: \{ `doc`: `string`; `type`: `string`; \}; `cross-faded-data-driven`: \{ `doc`: `string`; `type`: `string`; \}; `data-constant`: \{ `doc`: `string`; `type`: `string`; \}; `data-driven`: \{ `doc`: `string`; `type`: `string`; \}; \} | - |
| `styleSpec.property-type.color-ramp?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.property-type.color-ramp.doc?` | `string` | - |
| `styleSpec.property-type.color-ramp.type?` | `string` | - |
| `styleSpec.property-type.constant?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.property-type.constant.doc?` | `string` | - |
| `styleSpec.property-type.constant.type?` | `string` | - |
| `styleSpec.property-type.cross-faded?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.property-type.cross-faded.doc?` | `string` | - |
| `styleSpec.property-type.cross-faded.type?` | `string` | - |
| `styleSpec.property-type.cross-faded-data-driven?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.property-type.cross-faded-data-driven.doc?` | `string` | - |
| `styleSpec.property-type.cross-faded-data-driven.type?` | `string` | - |
| `styleSpec.property-type.data-constant?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.property-type.data-constant.doc?` | `string` | - |
| `styleSpec.property-type.data-constant.type?` | `string` | - |
| `styleSpec.property-type.data-driven?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.property-type.data-driven.doc?` | `string` | - |
| `styleSpec.property-type.data-driven.type?` | `string` | - |
| `styleSpec.sky?` | \{ `atmosphere-blend`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `fog-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `fog-ground-blend`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `horizon-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `horizon-fog-blend`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `sky-color`: \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; `sky-horizon-blend`: \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \}; \} | - |
| `styleSpec.sky.atmosphere-blend?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.sky.atmosphere-blend.default?` | `number` | - |
| `styleSpec.sky.atmosphere-blend.doc?` | `string` | - |
| `styleSpec.sky.atmosphere-blend.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.sky.atmosphere-blend.expression.interpolated?` | `boolean` | - |
| `styleSpec.sky.atmosphere-blend.expression.parameters?` | `string`[] | - |
| `styleSpec.sky.atmosphere-blend.maximum?` | `number` | - |
| `styleSpec.sky.atmosphere-blend.minimum?` | `number` | - |
| `styleSpec.sky.atmosphere-blend.property-type?` | `string` | - |
| `styleSpec.sky.atmosphere-blend.transition?` | `boolean` | - |
| `styleSpec.sky.atmosphere-blend.type?` | `string` | - |
| `styleSpec.sky.fog-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.sky.fog-color.default?` | `string` | - |
| `styleSpec.sky.fog-color.doc?` | `string` | - |
| `styleSpec.sky.fog-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.sky.fog-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.sky.fog-color.expression.parameters?` | `string`[] | - |
| `styleSpec.sky.fog-color.property-type?` | `string` | - |
| `styleSpec.sky.fog-color.transition?` | `boolean` | - |
| `styleSpec.sky.fog-color.type?` | `string` | - |
| `styleSpec.sky.fog-ground-blend?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.sky.fog-ground-blend.default?` | `number` | - |
| `styleSpec.sky.fog-ground-blend.doc?` | `string` | - |
| `styleSpec.sky.fog-ground-blend.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.sky.fog-ground-blend.expression.interpolated?` | `boolean` | - |
| `styleSpec.sky.fog-ground-blend.expression.parameters?` | `string`[] | - |
| `styleSpec.sky.fog-ground-blend.maximum?` | `number` | - |
| `styleSpec.sky.fog-ground-blend.minimum?` | `number` | - |
| `styleSpec.sky.fog-ground-blend.property-type?` | `string` | - |
| `styleSpec.sky.fog-ground-blend.transition?` | `boolean` | - |
| `styleSpec.sky.fog-ground-blend.type?` | `string` | - |
| `styleSpec.sky.horizon-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.sky.horizon-color.default?` | `string` | - |
| `styleSpec.sky.horizon-color.doc?` | `string` | - |
| `styleSpec.sky.horizon-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.sky.horizon-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.sky.horizon-color.expression.parameters?` | `string`[] | - |
| `styleSpec.sky.horizon-color.property-type?` | `string` | - |
| `styleSpec.sky.horizon-color.transition?` | `boolean` | - |
| `styleSpec.sky.horizon-color.type?` | `string` | - |
| `styleSpec.sky.horizon-fog-blend?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.sky.horizon-fog-blend.default?` | `number` | - |
| `styleSpec.sky.horizon-fog-blend.doc?` | `string` | - |
| `styleSpec.sky.horizon-fog-blend.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.sky.horizon-fog-blend.expression.interpolated?` | `boolean` | - |
| `styleSpec.sky.horizon-fog-blend.expression.parameters?` | `string`[] | - |
| `styleSpec.sky.horizon-fog-blend.maximum?` | `number` | - |
| `styleSpec.sky.horizon-fog-blend.minimum?` | `number` | - |
| `styleSpec.sky.horizon-fog-blend.property-type?` | `string` | - |
| `styleSpec.sky.horizon-fog-blend.transition?` | `boolean` | - |
| `styleSpec.sky.horizon-fog-blend.type?` | `string` | - |
| `styleSpec.sky.sky-color?` | \{ `default`: `string`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.sky.sky-color.default?` | `string` | - |
| `styleSpec.sky.sky-color.doc?` | `string` | - |
| `styleSpec.sky.sky-color.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.sky.sky-color.expression.interpolated?` | `boolean` | - |
| `styleSpec.sky.sky-color.expression.parameters?` | `string`[] | - |
| `styleSpec.sky.sky-color.property-type?` | `string` | - |
| `styleSpec.sky.sky-color.transition?` | `boolean` | - |
| `styleSpec.sky.sky-color.type?` | `string` | - |
| `styleSpec.sky.sky-horizon-blend?` | \{ `default`: `number`; `doc`: `string`; `expression`: \{ `interpolated`: `boolean`; `parameters`: `string`[]; \}; `maximum`: `number`; `minimum`: `number`; `property-type`: `string`; `transition`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.sky.sky-horizon-blend.default?` | `number` | - |
| `styleSpec.sky.sky-horizon-blend.doc?` | `string` | - |
| `styleSpec.sky.sky-horizon-blend.expression?` | \{ `interpolated`: `boolean`; `parameters`: `string`[]; \} | - |
| `styleSpec.sky.sky-horizon-blend.expression.interpolated?` | `boolean` | - |
| `styleSpec.sky.sky-horizon-blend.expression.parameters?` | `string`[] | - |
| `styleSpec.sky.sky-horizon-blend.maximum?` | `number` | - |
| `styleSpec.sky.sky-horizon-blend.minimum?` | `number` | - |
| `styleSpec.sky.sky-horizon-blend.property-type?` | `string` | - |
| `styleSpec.sky.sky-horizon-blend.transition?` | `boolean` | - |
| `styleSpec.sky.sky-horizon-blend.type?` | `string` | - |
| `styleSpec.source?` | `string`[] | - |
| `styleSpec.source_geojson?` | \{ `attribution`: \{ `doc`: `string`; `type`: `string`; \}; `buffer`: \{ `default`: `number`; `doc`: `string`; `maximum`: `number`; `minimum`: `number`; `type`: `string`; \}; `cluster`: \{ `default`: `boolean`; `doc`: `string`; `type`: `string`; \}; `clusterMaxZoom`: \{ `doc`: `string`; `type`: `string`; \}; `clusterMinPoints`: \{ `doc`: `string`; `type`: `string`; \}; `clusterProperties`: \{ `doc`: `string`; `type`: `string`; \}; `clusterRadius`: \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; \}; `data`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \}; `filter`: \{ `doc`: `string`; `type`: `string`; \}; `generateId`: \{ `default`: `boolean`; `doc`: `string`; `type`: `string`; \}; `lineMetrics`: \{ `default`: `boolean`; `doc`: `string`; `type`: `string`; \}; `maxzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `promoteId`: \{ `doc`: `string`; `type`: `string`; \}; `tolerance`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `geojson`: \{ `doc`: `string`; \}; \}; \}; \} | - |
| `styleSpec.source_geojson.attribution?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.attribution.doc?` | `string` | - |
| `styleSpec.source_geojson.attribution.type?` | `string` | - |
| `styleSpec.source_geojson.buffer?` | \{ `default`: `number`; `doc`: `string`; `maximum`: `number`; `minimum`: `number`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.buffer.default?` | `number` | - |
| `styleSpec.source_geojson.buffer.doc?` | `string` | - |
| `styleSpec.source_geojson.buffer.maximum?` | `number` | - |
| `styleSpec.source_geojson.buffer.minimum?` | `number` | - |
| `styleSpec.source_geojson.buffer.type?` | `string` | - |
| `styleSpec.source_geojson.cluster?` | \{ `default`: `boolean`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.cluster.default?` | `boolean` | - |
| `styleSpec.source_geojson.cluster.doc?` | `string` | - |
| `styleSpec.source_geojson.cluster.type?` | `string` | - |
| `styleSpec.source_geojson.clusterMaxZoom?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.clusterMaxZoom.doc?` | `string` | - |
| `styleSpec.source_geojson.clusterMaxZoom.type?` | `string` | - |
| `styleSpec.source_geojson.clusterMinPoints?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.clusterMinPoints.doc?` | `string` | - |
| `styleSpec.source_geojson.clusterMinPoints.type?` | `string` | - |
| `styleSpec.source_geojson.clusterProperties?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.clusterProperties.doc?` | `string` | - |
| `styleSpec.source_geojson.clusterProperties.type?` | `string` | - |
| `styleSpec.source_geojson.clusterRadius?` | \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.clusterRadius.default?` | `number` | - |
| `styleSpec.source_geojson.clusterRadius.doc?` | `string` | - |
| `styleSpec.source_geojson.clusterRadius.minimum?` | `number` | - |
| `styleSpec.source_geojson.clusterRadius.type?` | `string` | - |
| `styleSpec.source_geojson.data?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.data.doc?` | `string` | - |
| `styleSpec.source_geojson.data.required?` | `boolean` | - |
| `styleSpec.source_geojson.data.type?` | `string` | - |
| `styleSpec.source_geojson.filter?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.filter.doc?` | `string` | - |
| `styleSpec.source_geojson.filter.type?` | `string` | - |
| `styleSpec.source_geojson.generateId?` | \{ `default`: `boolean`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.generateId.default?` | `boolean` | - |
| `styleSpec.source_geojson.generateId.doc?` | `string` | - |
| `styleSpec.source_geojson.generateId.type?` | `string` | - |
| `styleSpec.source_geojson.lineMetrics?` | \{ `default`: `boolean`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.lineMetrics.default?` | `boolean` | - |
| `styleSpec.source_geojson.lineMetrics.doc?` | `string` | - |
| `styleSpec.source_geojson.lineMetrics.type?` | `string` | - |
| `styleSpec.source_geojson.maxzoom?` | \{ `default`: `number`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.maxzoom.default?` | `number` | - |
| `styleSpec.source_geojson.maxzoom.doc?` | `string` | - |
| `styleSpec.source_geojson.maxzoom.type?` | `string` | - |
| `styleSpec.source_geojson.promoteId?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.promoteId.doc?` | `string` | - |
| `styleSpec.source_geojson.promoteId.type?` | `string` | - |
| `styleSpec.source_geojson.tolerance?` | \{ `default`: `number`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_geojson.tolerance.default?` | `number` | - |
| `styleSpec.source_geojson.tolerance.doc?` | `string` | - |
| `styleSpec.source_geojson.tolerance.type?` | `string` | - |
| `styleSpec.source_geojson.type?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `geojson`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.source_geojson.type.doc?` | `string` | - |
| `styleSpec.source_geojson.type.required?` | `boolean` | - |
| `styleSpec.source_geojson.type.type?` | `string` | - |
| `styleSpec.source_geojson.type.values?` | \{ `geojson`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.source_geojson.type.values.geojson?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_geojson.type.values.geojson.doc?` | `string` | - |
| `styleSpec.source_image?` | \{ `coordinates`: \{ `doc`: `string`; `length`: `number`; `required`: `boolean`; `type`: `string`; `value`: \{ `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `image`: \{ `doc`: `string`; \}; \}; \}; `url`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \}; \} | - |
| `styleSpec.source_image.coordinates?` | \{ `doc`: `string`; `length`: `number`; `required`: `boolean`; `type`: `string`; `value`: \{ `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; \} | - |
| `styleSpec.source_image.coordinates.doc?` | `string` | - |
| `styleSpec.source_image.coordinates.length?` | `number` | - |
| `styleSpec.source_image.coordinates.required?` | `boolean` | - |
| `styleSpec.source_image.coordinates.type?` | `string` | - |
| `styleSpec.source_image.coordinates.value?` | \{ `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.source_image.coordinates.value.doc?` | `string` | - |
| `styleSpec.source_image.coordinates.value.length?` | `number` | - |
| `styleSpec.source_image.coordinates.value.type?` | `string` | - |
| `styleSpec.source_image.coordinates.value.value?` | `string` | - |
| `styleSpec.source_image.type?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `image`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.source_image.type.doc?` | `string` | - |
| `styleSpec.source_image.type.required?` | `boolean` | - |
| `styleSpec.source_image.type.type?` | `string` | - |
| `styleSpec.source_image.type.values?` | \{ `image`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.source_image.type.values.image?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_image.type.values.image.doc?` | `string` | - |
| `styleSpec.source_image.url?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; \} | - |
| `styleSpec.source_image.url.doc?` | `string` | - |
| `styleSpec.source_image.url.required?` | `boolean` | - |
| `styleSpec.source_image.url.type?` | `string` | - |
| `styleSpec.source_raster?` | \{ `*`: \{ `doc`: `string`; `type`: `string`; \}; `attribution`: \{ `doc`: `string`; `type`: `string`; \}; `bounds`: \{ `default`: `number`[]; `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; `maxzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `minzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `scheme`: \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `tms`: \{ `doc`: `string`; \}; `xyz`: \{ `doc`: `string`; \}; \}; \}; `tiles`: \{ `doc`: `string`; `type`: `string`; `value`: `string`; \}; `tileSize`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; `units`: `string`; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `raster`: \{ `doc`: `string`; \}; \}; \}; `url`: \{ `doc`: `string`; `type`: `string`; \}; `volatile`: \{ `default`: `boolean`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; \} | - |
| `styleSpec.source_raster.*?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_raster.*.doc?` | `string` | - |
| `styleSpec.source_raster.*.type?` | `string` | - |
| `styleSpec.source_raster.attribution?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_raster.attribution.doc?` | `string` | - |
| `styleSpec.source_raster.attribution.type?` | `string` | - |
| `styleSpec.source_raster.bounds?` | \{ `default`: `number`[]; `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.source_raster.bounds.default?` | `number`[] | - |
| `styleSpec.source_raster.bounds.doc?` | `string` | - |
| `styleSpec.source_raster.bounds.length?` | `number` | - |
| `styleSpec.source_raster.bounds.type?` | `string` | - |
| `styleSpec.source_raster.bounds.value?` | `string` | - |
| `styleSpec.source_raster.maxzoom?` | \{ `default`: `number`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_raster.maxzoom.default?` | `number` | - |
| `styleSpec.source_raster.maxzoom.doc?` | `string` | - |
| `styleSpec.source_raster.maxzoom.type?` | `string` | - |
| `styleSpec.source_raster.minzoom?` | \{ `default`: `number`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_raster.minzoom.default?` | `number` | - |
| `styleSpec.source_raster.minzoom.doc?` | `string` | - |
| `styleSpec.source_raster.minzoom.type?` | `string` | - |
| `styleSpec.source_raster.scheme?` | \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `tms`: \{ `doc`: `string`; \}; `xyz`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.source_raster.scheme.default?` | `string` | - |
| `styleSpec.source_raster.scheme.doc?` | `string` | - |
| `styleSpec.source_raster.scheme.type?` | `string` | - |
| `styleSpec.source_raster.scheme.values?` | \{ `tms`: \{ `doc`: `string`; \}; `xyz`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.source_raster.scheme.values.tms?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_raster.scheme.values.tms.doc?` | `string` | - |
| `styleSpec.source_raster.scheme.values.xyz?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_raster.scheme.values.xyz.doc?` | `string` | - |
| `styleSpec.source_raster.tiles?` | \{ `doc`: `string`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.source_raster.tiles.doc?` | `string` | - |
| `styleSpec.source_raster.tiles.type?` | `string` | - |
| `styleSpec.source_raster.tiles.value?` | `string` | - |
| `styleSpec.source_raster.tileSize?` | \{ `default`: `number`; `doc`: `string`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.source_raster.tileSize.default?` | `number` | - |
| `styleSpec.source_raster.tileSize.doc?` | `string` | - |
| `styleSpec.source_raster.tileSize.type?` | `string` | - |
| `styleSpec.source_raster.tileSize.units?` | `string` | - |
| `styleSpec.source_raster.type?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `raster`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.source_raster.type.doc?` | `string` | - |
| `styleSpec.source_raster.type.required?` | `boolean` | - |
| `styleSpec.source_raster.type.type?` | `string` | - |
| `styleSpec.source_raster.type.values?` | \{ `raster`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.source_raster.type.values.raster?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_raster.type.values.raster.doc?` | `string` | - |
| `styleSpec.source_raster.url?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_raster.url.doc?` | `string` | - |
| `styleSpec.source_raster.url.type?` | `string` | - |
| `styleSpec.source_raster.volatile?` | \{ `default`: `boolean`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.source_raster.volatile.default?` | `boolean` | - |
| `styleSpec.source_raster.volatile.doc?` | `string` | - |
| `styleSpec.source_raster.volatile.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.source_raster.volatile.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.source_raster.volatile.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.source_raster.volatile.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.source_raster.volatile.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.source_raster.volatile.type?` | `string` | - |
| `styleSpec.source_raster_dem?` | \{ `*`: \{ `doc`: `string`; `type`: `string`; \}; `attribution`: \{ `doc`: `string`; `type`: `string`; \}; `baseShift`: \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `blueFactor`: \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `bounds`: \{ `default`: `number`[]; `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; `encoding`: \{ `default`: `string`; `doc`: `string`; `sdk-support`: \{ `custom`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `mapbox, terrarium`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `custom`: \{ `doc`: `string`; \}; `mapbox`: \{ `doc`: `string`; \}; `terrarium`: \{ `doc`: `string`; \}; \}; \}; `greenFactor`: \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `maxzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `minzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `redFactor`: \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `tiles`: \{ `doc`: `string`; `type`: `string`; `value`: `string`; \}; `tileSize`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; `units`: `string`; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `raster-dem`: \{ `doc`: `string`; \}; \}; \}; `url`: \{ `doc`: `string`; `type`: `string`; \}; `volatile`: \{ `default`: `boolean`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; \} | - |
| `styleSpec.source_raster_dem.*?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_raster_dem.*.doc?` | `string` | - |
| `styleSpec.source_raster_dem.*.type?` | `string` | - |
| `styleSpec.source_raster_dem.attribution?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_raster_dem.attribution.doc?` | `string` | - |
| `styleSpec.source_raster_dem.attribution.type?` | `string` | - |
| `styleSpec.source_raster_dem.baseShift?` | \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.source_raster_dem.baseShift.default?` | `number` | - |
| `styleSpec.source_raster_dem.baseShift.doc?` | `string` | - |
| `styleSpec.source_raster_dem.baseShift.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.source_raster_dem.baseShift.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.source_raster_dem.baseShift.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.source_raster_dem.baseShift.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.source_raster_dem.baseShift.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.source_raster_dem.baseShift.type?` | `string` | - |
| `styleSpec.source_raster_dem.blueFactor?` | \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.source_raster_dem.blueFactor.default?` | `number` | - |
| `styleSpec.source_raster_dem.blueFactor.doc?` | `string` | - |
| `styleSpec.source_raster_dem.blueFactor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.source_raster_dem.blueFactor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.source_raster_dem.blueFactor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.source_raster_dem.blueFactor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.source_raster_dem.blueFactor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.source_raster_dem.blueFactor.type?` | `string` | - |
| `styleSpec.source_raster_dem.bounds?` | \{ `default`: `number`[]; `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.source_raster_dem.bounds.default?` | `number`[] | - |
| `styleSpec.source_raster_dem.bounds.doc?` | `string` | - |
| `styleSpec.source_raster_dem.bounds.length?` | `number` | - |
| `styleSpec.source_raster_dem.bounds.type?` | `string` | - |
| `styleSpec.source_raster_dem.bounds.value?` | `string` | - |
| `styleSpec.source_raster_dem.encoding?` | \{ `default`: `string`; `doc`: `string`; `sdk-support`: \{ `custom`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `mapbox, terrarium`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; `values`: \{ `custom`: \{ `doc`: `string`; \}; `mapbox`: \{ `doc`: `string`; \}; `terrarium`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.source_raster_dem.encoding.default?` | `string` | - |
| `styleSpec.source_raster_dem.encoding.doc?` | `string` | - |
| `styleSpec.source_raster_dem.encoding.sdk-support?` | \{ `custom`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; `mapbox, terrarium`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.source_raster_dem.encoding.sdk-support.custom?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.source_raster_dem.encoding.sdk-support.custom.android?` | `string` | - |
| `styleSpec.source_raster_dem.encoding.sdk-support.custom.ios?` | `string` | - |
| `styleSpec.source_raster_dem.encoding.sdk-support.custom.js?` | `string` | - |
| `styleSpec.source_raster_dem.encoding.sdk-support.mapbox, terrarium?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.source_raster_dem.encoding.sdk-support.mapbox, terrarium.android?` | `string` | - |
| `styleSpec.source_raster_dem.encoding.sdk-support.mapbox, terrarium.ios?` | `string` | - |
| `styleSpec.source_raster_dem.encoding.sdk-support.mapbox, terrarium.js?` | `string` | - |
| `styleSpec.source_raster_dem.encoding.type?` | `string` | - |
| `styleSpec.source_raster_dem.encoding.values?` | \{ `custom`: \{ `doc`: `string`; \}; `mapbox`: \{ `doc`: `string`; \}; `terrarium`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.source_raster_dem.encoding.values.custom?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_raster_dem.encoding.values.custom.doc?` | `string` | - |
| `styleSpec.source_raster_dem.encoding.values.mapbox?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_raster_dem.encoding.values.mapbox.doc?` | `string` | - |
| `styleSpec.source_raster_dem.encoding.values.terrarium?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_raster_dem.encoding.values.terrarium.doc?` | `string` | - |
| `styleSpec.source_raster_dem.greenFactor?` | \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.source_raster_dem.greenFactor.default?` | `number` | - |
| `styleSpec.source_raster_dem.greenFactor.doc?` | `string` | - |
| `styleSpec.source_raster_dem.greenFactor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.source_raster_dem.greenFactor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.source_raster_dem.greenFactor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.source_raster_dem.greenFactor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.source_raster_dem.greenFactor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.source_raster_dem.greenFactor.type?` | `string` | - |
| `styleSpec.source_raster_dem.maxzoom?` | \{ `default`: `number`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_raster_dem.maxzoom.default?` | `number` | - |
| `styleSpec.source_raster_dem.maxzoom.doc?` | `string` | - |
| `styleSpec.source_raster_dem.maxzoom.type?` | `string` | - |
| `styleSpec.source_raster_dem.minzoom?` | \{ `default`: `number`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_raster_dem.minzoom.default?` | `number` | - |
| `styleSpec.source_raster_dem.minzoom.doc?` | `string` | - |
| `styleSpec.source_raster_dem.minzoom.type?` | `string` | - |
| `styleSpec.source_raster_dem.redFactor?` | \{ `default`: `number`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.source_raster_dem.redFactor.default?` | `number` | - |
| `styleSpec.source_raster_dem.redFactor.doc?` | `string` | - |
| `styleSpec.source_raster_dem.redFactor.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.source_raster_dem.redFactor.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.source_raster_dem.redFactor.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.source_raster_dem.redFactor.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.source_raster_dem.redFactor.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.source_raster_dem.redFactor.type?` | `string` | - |
| `styleSpec.source_raster_dem.tiles?` | \{ `doc`: `string`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.source_raster_dem.tiles.doc?` | `string` | - |
| `styleSpec.source_raster_dem.tiles.type?` | `string` | - |
| `styleSpec.source_raster_dem.tiles.value?` | `string` | - |
| `styleSpec.source_raster_dem.tileSize?` | \{ `default`: `number`; `doc`: `string`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.source_raster_dem.tileSize.default?` | `number` | - |
| `styleSpec.source_raster_dem.tileSize.doc?` | `string` | - |
| `styleSpec.source_raster_dem.tileSize.type?` | `string` | - |
| `styleSpec.source_raster_dem.tileSize.units?` | `string` | - |
| `styleSpec.source_raster_dem.type?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `raster-dem`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.source_raster_dem.type.doc?` | `string` | - |
| `styleSpec.source_raster_dem.type.required?` | `boolean` | - |
| `styleSpec.source_raster_dem.type.type?` | `string` | - |
| `styleSpec.source_raster_dem.type.values?` | \{ `raster-dem`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.source_raster_dem.type.values.raster-dem?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_raster_dem.type.values.raster-dem.doc?` | `string` | - |
| `styleSpec.source_raster_dem.url?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_raster_dem.url.doc?` | `string` | - |
| `styleSpec.source_raster_dem.url.type?` | `string` | - |
| `styleSpec.source_raster_dem.volatile?` | \{ `default`: `boolean`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.source_raster_dem.volatile.default?` | `boolean` | - |
| `styleSpec.source_raster_dem.volatile.doc?` | `string` | - |
| `styleSpec.source_raster_dem.volatile.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.source_raster_dem.volatile.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.source_raster_dem.volatile.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.source_raster_dem.volatile.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.source_raster_dem.volatile.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.source_raster_dem.volatile.type?` | `string` | - |
| `styleSpec.source_vector?` | \{ `*`: \{ `doc`: `string`; `type`: `string`; \}; `attribution`: \{ `doc`: `string`; `type`: `string`; \}; `bounds`: \{ `default`: `number`[]; `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; `maxzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `minzoom`: \{ `default`: `number`; `doc`: `string`; `type`: `string`; \}; `promoteId`: \{ `doc`: `string`; `type`: `string`; \}; `scheme`: \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `tms`: \{ `doc`: `string`; \}; `xyz`: \{ `doc`: `string`; \}; \}; \}; `tiles`: \{ `doc`: `string`; `type`: `string`; `value`: `string`; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `vector`: \{ `doc`: `string`; \}; \}; \}; `url`: \{ `doc`: `string`; `type`: `string`; \}; `volatile`: \{ `default`: `boolean`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; \} | - |
| `styleSpec.source_vector.*?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_vector.*.doc?` | `string` | - |
| `styleSpec.source_vector.*.type?` | `string` | - |
| `styleSpec.source_vector.attribution?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_vector.attribution.doc?` | `string` | - |
| `styleSpec.source_vector.attribution.type?` | `string` | - |
| `styleSpec.source_vector.bounds?` | \{ `default`: `number`[]; `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.source_vector.bounds.default?` | `number`[] | - |
| `styleSpec.source_vector.bounds.doc?` | `string` | - |
| `styleSpec.source_vector.bounds.length?` | `number` | - |
| `styleSpec.source_vector.bounds.type?` | `string` | - |
| `styleSpec.source_vector.bounds.value?` | `string` | - |
| `styleSpec.source_vector.maxzoom?` | \{ `default`: `number`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_vector.maxzoom.default?` | `number` | - |
| `styleSpec.source_vector.maxzoom.doc?` | `string` | - |
| `styleSpec.source_vector.maxzoom.type?` | `string` | - |
| `styleSpec.source_vector.minzoom?` | \{ `default`: `number`; `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_vector.minzoom.default?` | `number` | - |
| `styleSpec.source_vector.minzoom.doc?` | `string` | - |
| `styleSpec.source_vector.minzoom.type?` | `string` | - |
| `styleSpec.source_vector.promoteId?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_vector.promoteId.doc?` | `string` | - |
| `styleSpec.source_vector.promoteId.type?` | `string` | - |
| `styleSpec.source_vector.scheme?` | \{ `default`: `string`; `doc`: `string`; `type`: `string`; `values`: \{ `tms`: \{ `doc`: `string`; \}; `xyz`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.source_vector.scheme.default?` | `string` | - |
| `styleSpec.source_vector.scheme.doc?` | `string` | - |
| `styleSpec.source_vector.scheme.type?` | `string` | - |
| `styleSpec.source_vector.scheme.values?` | \{ `tms`: \{ `doc`: `string`; \}; `xyz`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.source_vector.scheme.values.tms?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_vector.scheme.values.tms.doc?` | `string` | - |
| `styleSpec.source_vector.scheme.values.xyz?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_vector.scheme.values.xyz.doc?` | `string` | - |
| `styleSpec.source_vector.tiles?` | \{ `doc`: `string`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.source_vector.tiles.doc?` | `string` | - |
| `styleSpec.source_vector.tiles.type?` | `string` | - |
| `styleSpec.source_vector.tiles.value?` | `string` | - |
| `styleSpec.source_vector.type?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `vector`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.source_vector.type.doc?` | `string` | - |
| `styleSpec.source_vector.type.required?` | `boolean` | - |
| `styleSpec.source_vector.type.type?` | `string` | - |
| `styleSpec.source_vector.type.values?` | \{ `vector`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.source_vector.type.values.vector?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_vector.type.values.vector.doc?` | `string` | - |
| `styleSpec.source_vector.url?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.source_vector.url.doc?` | `string` | - |
| `styleSpec.source_vector.url.type?` | `string` | - |
| `styleSpec.source_vector.volatile?` | \{ `default`: `boolean`; `doc`: `string`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.source_vector.volatile.default?` | `boolean` | - |
| `styleSpec.source_vector.volatile.doc?` | `string` | - |
| `styleSpec.source_vector.volatile.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.source_vector.volatile.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.source_vector.volatile.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.source_vector.volatile.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.source_vector.volatile.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.source_vector.volatile.type?` | `string` | - |
| `styleSpec.source_video?` | \{ `coordinates`: \{ `doc`: `string`; `length`: `number`; `required`: `boolean`; `type`: `string`; `value`: \{ `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; \}; `type`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `video`: \{ `doc`: `string`; \}; \}; \}; `urls`: \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `value`: `string`; \}; \} | - |
| `styleSpec.source_video.coordinates?` | \{ `doc`: `string`; `length`: `number`; `required`: `boolean`; `type`: `string`; `value`: \{ `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \}; \} | - |
| `styleSpec.source_video.coordinates.doc?` | `string` | - |
| `styleSpec.source_video.coordinates.length?` | `number` | - |
| `styleSpec.source_video.coordinates.required?` | `boolean` | - |
| `styleSpec.source_video.coordinates.type?` | `string` | - |
| `styleSpec.source_video.coordinates.value?` | \{ `doc`: `string`; `length`: `number`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.source_video.coordinates.value.doc?` | `string` | - |
| `styleSpec.source_video.coordinates.value.length?` | `number` | - |
| `styleSpec.source_video.coordinates.value.type?` | `string` | - |
| `styleSpec.source_video.coordinates.value.value?` | `string` | - |
| `styleSpec.source_video.type?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `values`: \{ `video`: \{ `doc`: `string`; \}; \}; \} | - |
| `styleSpec.source_video.type.doc?` | `string` | - |
| `styleSpec.source_video.type.required?` | `boolean` | - |
| `styleSpec.source_video.type.type?` | `string` | - |
| `styleSpec.source_video.type.values?` | \{ `video`: \{ `doc`: `string`; \}; \} | - |
| `styleSpec.source_video.type.values.video?` | \{ `doc`: `string`; \} | - |
| `styleSpec.source_video.type.values.video.doc?` | `string` | - |
| `styleSpec.source_video.urls?` | \{ `doc`: `string`; `required`: `boolean`; `type`: `string`; `value`: `string`; \} | - |
| `styleSpec.source_video.urls.doc?` | `string` | - |
| `styleSpec.source_video.urls.required?` | `boolean` | - |
| `styleSpec.source_video.urls.type?` | `string` | - |
| `styleSpec.source_video.urls.value?` | `string` | - |
| `styleSpec.sources?` | \{ `*`: \{ `doc`: `string`; `type`: `string`; \}; \} | - |
| `styleSpec.sources.*?` | \{ `doc`: `string`; `type`: `string`; \} | - |
| `styleSpec.sources.*.doc?` | `string` | - |
| `styleSpec.sources.*.type?` | `string` | - |
| `styleSpec.terrain?` | \{ `exaggeration`: \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; `source`: \{ `doc`: `string`; `required`: `boolean`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \}; \} | - |
| `styleSpec.terrain.exaggeration?` | \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.terrain.exaggeration.default?` | `number` | - |
| `styleSpec.terrain.exaggeration.doc?` | `string` | - |
| `styleSpec.terrain.exaggeration.minimum?` | `number` | - |
| `styleSpec.terrain.exaggeration.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.terrain.exaggeration.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.terrain.exaggeration.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.terrain.exaggeration.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.terrain.exaggeration.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.terrain.exaggeration.type?` | `string` | - |
| `styleSpec.terrain.source?` | \{ `doc`: `string`; `required`: `boolean`; `sdk-support`: \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \}; `type`: `string`; \} | - |
| `styleSpec.terrain.source.doc?` | `string` | - |
| `styleSpec.terrain.source.required?` | `boolean` | - |
| `styleSpec.terrain.source.sdk-support?` | \{ `basic functionality`: \{ `android`: `string`; `ios`: `string`; `js`: `string`; \}; \} | - |
| `styleSpec.terrain.source.sdk-support.basic functionality?` | \{ `android`: `string`; `ios`: `string`; `js`: `string`; \} | - |
| `styleSpec.terrain.source.sdk-support.basic functionality.android?` | `string` | - |
| `styleSpec.terrain.source.sdk-support.basic functionality.ios?` | `string` | - |
| `styleSpec.terrain.source.sdk-support.basic functionality.js?` | `string` | - |
| `styleSpec.terrain.source.type?` | `string` | - |
| `styleSpec.transition?` | \{ `delay`: \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; `units`: `string`; \}; `duration`: \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; `units`: `string`; \}; \} | - |
| `styleSpec.transition.delay?` | \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.transition.delay.default?` | `number` | - |
| `styleSpec.transition.delay.doc?` | `string` | - |
| `styleSpec.transition.delay.minimum?` | `number` | - |
| `styleSpec.transition.delay.type?` | `string` | - |
| `styleSpec.transition.delay.units?` | `string` | - |
| `styleSpec.transition.duration?` | \{ `default`: `number`; `doc`: `string`; `minimum`: `number`; `type`: `string`; `units`: `string`; \} | - |
| `styleSpec.transition.duration.default?` | `number` | - |
| `styleSpec.transition.duration.doc?` | `string` | - |
| `styleSpec.transition.duration.minimum?` | `number` | - |
| `styleSpec.transition.duration.type?` | `string` | - |
| `styleSpec.transition.duration.units?` | `string` | - |

## Returns

`ValidationError`[]

an array of errors, or an empty array if no errors are found.

## Example

```ts
const validate = require('@maplibre/maplibre-gl-style-spec/').validateStyleMin;
  const errors = validate(style);
```
