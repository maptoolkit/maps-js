# MTK Maps SDK v11

## What is this project?
- **Maptoolkit Maps SDK** — a commercial JavaScript Maps SDK by Toursprung/Maptoolkit (Innsbruck, Austria)
- Provides developers with a simple API to embed interactive maps with Maptoolkit services into websites
- Built on **MapLibre GL JS v5.10**, extending it with Maptoolkit-specific functionality:
  - Pre-built map styles (Terrain, Light, Dark, City, Green, Winter)
  - UI controls (Navigation, Style-Switcher, Isochrone, Geocoder, Directions, …)
  - Service layer for Maptoolkit APIs (Geocoding, Routing, Isochrone, Static Maps)
  - Automatic API key management and host configuration
- Target audience: web developers who want to use Maptoolkit maps + services without wiring up MapLibre GL + REST APIs manually
- Published as npm package `@maptoolkit/maps-sdk`, or included as UMD bundle (`maptoolkit.js`) via script tag
- Repo: `github.com/maptoolkit/maptoolkit-js`

## Tech Stack
- **TypeScript** — strict typing, all public APIs are fully typed
- **MapLibre GL JS v5.10** — WebGL-based map rendering, vector tiles
- **Rollup** — bundling (UMD + ESM + `.d.ts`)
- **PostCSS** — CSS bundling with `postcss-import`
- **Playwright** — E2E tests
- **Turf.js** — geometry operations (difference, distance, length, union)
- Monorepo-ish layout: `maps-sdk-js/` contains the SDK, `MTK-APIs/` contains API documentation

## Architecture

### Project Structure
- `maps-sdk-js/src/js/core/` — Config (singleton), Locale (de/en), Map (extends maplibreMap), Utils, Styles, Terrain, Protocols
- `maps-sdk-js/src/js/control/` — UI controls implementing `IControl` (onAdd/onRemove pattern)
- `maps-sdk-js/src/js/service/` — Pure API clients (no Map/UI dependency): GeocodingService, RoutingService
- `maps-sdk-js/src/css/control/` — Per-control CSS files
- `maps-sdk-js/src/index.ts` — All exports (classes + types)
- `maps-sdk-js/src/index.css` — All CSS imports
- `maps-sdk-js/examples/` — HTML demo pages (one per control/service)
- `maps-sdk-js/test/` — Playwright E2E tests (auto-discovers all `examples/*.html`)

### Key Patterns
- **Config singleton:** `src/js/core/config.ts` — private `_prop`, getter, setter that fires `config.prop.set` event. Extends `Evented`.
- **Locale:** Flat key-value per language, keys follow `"ControlName.Key"` pattern. `getDefaultLocale()` returns strings for `config.locale`.
- **Controls:** Implement `IControl` interface from `./control.ts` (wraps maplibre's IControl). Use `map._getUIString()` for locale strings. CSS class naming: `maptoolkit-ctrl-{name}`, `maptoolkit-ctrl-{name}-{element}`.
- **Services:** Stateless API clients. Use `config.{host}` + `config.apiKey`. URL construction via `new URL(path, host)` + `searchParams.set()`. Support `AbortSignal` for cancellation.
- **Style re-render:** Controls listen to `map.on("style.set", ...)` and re-add sources/layers after `map.once("idle", ...)`.
- **CSS conventions:** `border-radius: 10px`, `box-shadow: 0 2px 5px 0 rgba(0,0,0,0.25)`, `36px` button height, SVG icons as `background-image` data URIs.

### API Hosts
- Geocoding: `https://geocoder.maptoolkit.net` (`config.geocodingHost`)
- Routing/Isochrone/Matrix: `https://routing.maptoolkit.net` (`config.routingHost`)
- All API requests require `api_key` query parameter

## Development

### Commands
- `npm install` — Install dependencies (run from `maps-sdk-js/`)
- `npm run build` — Build JS (Rollup) + CSS (PostCSS) → `dist/`
- `npm run serve` — Start http-server on port 8080 for examples
- `npm test` — Playwright E2E tests (requires `npx playwright install chromium` first)

### Build Output
- `dist/maptoolkit.js` — UMD bundle (global `maptoolkit`)
- `dist/maptoolkit.mjs` — ESM bundle
- `dist/maptoolkit.d.ts` — TypeScript declarations
- `dist/maptoolkit.css` — Combined CSS

### Testing
- E2E tests in `test/examples.test.ts` auto-discover all `examples/*.html` files
- Tests check: no console errors, no page errors, canvas visible, map container exists
- Tests require WebGL — headless Chrome may fail if GPU not available

## Important: Working with Maptoolkit APIs
- **Always read the API docs in `MTK-APIs/` before integrating a new API or changing an existing integration.** The docs describe endpoints, parameters, response formats, and coordinate conventions.
- API docs can be inaccurate (e.g. routing docs claim 3D polylines but actual responses are 2D) — verify against real API responses when in doubt.
- Key API doc files:
  - `MTK-APIs/geocoding-api.md` — Geocoding (forward + reverse)
  - `MTK-APIs/routing.md` — Routing, Isochrone, Matrix

## Gotchas

### Routing API — Polyline Encoding
- The routing API returns encoded polylines in `paths[0].points` with `points_encoded: true`
- **Polylines are 2D** (lat, lng only) — do NOT decode as 3D despite API docs mentioning "elevation"
- Decoding as 3D shifts all coordinates because the 3rd-dimension bytes consume subsequent lat/lng deltas
- Coordinate order in encoded polyline: **lat, lng** (Google standard)
- Output for GeoJSON must be **lng, lat** — the `decodePolyline()` utility handles this swap

### Routing API — Point Format
- API expects points as `lat,lng` (NOT `lng,lat`)
- Instruction coordinates from API are also `[lat, lng]` — must swap to `[lng, lat]` for MapLibre

### Geocoding API
- Forward: `/search?q=...&api_key=...` — returns array of results
- Reverse: `/reverse?lat=...&lon=...&api_key=...` — returns single object (not array)
- Response uses `display_name`, `lat`/`lon` as strings (must parseFloat)

### MapLibre / Map Class
- `Map` constructor accepts `container` as optional — can use `setContainer()` after init
- Map fires custom events: `"style.set"`, `"feature.click"`, `"feature.mouseover"`, `"feature.mouseout"`
- Controls fire events on the map instance: `"geocoder.result"`, `"directions.route"`

## Open Items

### E2E Tests broken (pre-existing)
- All 13 Playwright tests fail with `window.map.once is not a function`
- Affects ALL examples (including original ones like `map.html`), not just the new ones
- Root cause: Map doesn't fully initialize in headless Chrome (no WebGL / canvas stays blank)
- The test in `test/examples.test.ts` waits for `window.map.once("idle", ...)` which fails because the map object returned by `setContainer()` is `this` (the Map), but `.once()` isn't available on it in the headless context
- Needs investigation: possibly a MapLibre GL + headless Chrome compatibility issue

### Dedicated E2E Tests (planned, not yet created)
- `test/geocoder.test.ts` — Geocoder-specific tests: input visible, typing triggers results dropdown, selecting a result places marker
- `test/directions.test.ts` — Directions-specific tests: route type buttons render, waypoint inputs render, setting two waypoints triggers route display

### GeocoderControl — Pending Refinements
- Collapsed mode: basic CSS + expand-on-click exists, but no collapse-on-blur or collapse-on-escape when empty
- No loading indicator during geocoding requests
- No error state shown in UI when API request fails (only logged to console)
- `reverseGeocode` option: works but conflicts with DirectionsControl map click handler if both are on the same map — needs coordination or priority mechanism

### DirectionsControl — Pending Refinements
- No loading/spinner state during route calculation
- No error UI — "No route found" text is shown, but no retry or detailed error info
- `language` option: waypoint geocoding and route instructions should use `config.locale` automatically but this is not wired up yet
- Overlay layers (`Satellite`, `Hiking`, etc.) from StyleControl are not listed in the plan — route layer may render below overlay layers depending on layer order
- Route line layer IDs are hardcoded (`maptoolkit-ctrl-directions-route-*`) — only one DirectionsControl instance per map is supported

### RoutingService — Pending Refinements
- `match()` method: implemented but untested — needs a dedicated example or test
- `toGeoJSON()` currently only returns a `LineString` — multi-leg routes with via points could benefit from `MultiLineString` or a `FeatureCollection` with per-leg features
- No support for `weighting` parameter (bike: `networks` / `shortest` / `fastest`)
- No support for `format=gpx` or `format=kml` response formats
- No support for `finish_instruction` parameter

### GeocodingService — Pending Refinements
- No support for `polygon` parameter (output polygon outlines)
- Forward results don't expose all API fields (e.g. `licence`, `osm_id` are partially mapped)

### Documentation
- TypeDoc (`npm run generate-docs`) not tested with new modules — JSDoc comments are in place but generated output not verified
- README.md is empty (just a title) — no usage docs for the SDK yet

---
*Last updated: 2026-02-10*
