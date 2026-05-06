# Maptoolkit Maps JS

Maps JS is the Maptoolkit JavaScript library for embedding interactive maps in web applications. It is built on top of [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) and extends it with Maptoolkit-specific controls, styles, and services.

## Installation

```bash
npm install @maptoolkit/maps
```

## Basic usage

```javascript
import { Map } from "@maptoolkit/maps";
import "@maptoolkit/maps/css";

const map = new Map({
  container: "map",
  apiKey: "your-api-key",
  center: [16.37, 48.21],
  zoom: 12,
});
```

## 🔑 API Key Required

While this SDK is open-source under the BSD 3-Clause License, using the underlying geospatial services (APIs) requires a valid API key.

[Get your API Key here](https://www.maptoolkit.com/)

[Read the Developer Documentation](https://docs.maptoolkit.net/)
