import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import pkg from "./package.json" with { type: "json" };

const isProduction = process.env.BUILD === "production";

const banner = `
/**
 * Maptoolkit Maps JS v${pkg.version}
 * Copyright (c) 2026 Maptoolkit - Toursprung GmbH
 * @license BSD-3-Clause
 * Full license text: https://github.com/maptoolkit/maps-js/blob/main/LICENSE
 */
`;

export default [
  // UMD module
  {
    input: "src/index.ts",
    plugins: [esbuild({ minify: isProduction }), resolve(), commonjs(), json()],
    output: {
      format: "umd",
      name: "maps",
      file: "dist/maps.js",
      indent: false,
      minifyInternalExports: isProduction,
      sourcemap: true,
      banner,
    },
  },
  // ES module
  {
    input: "src/index.ts",
    plugins: [esbuild({ minify: isProduction }), resolve(), commonjs(), json()],
    output: {
      format: "es",
      file: "dist/maps.mjs",
      sourcemap: true,
      minifyInternalExports: isProduction,
      banner,
    },
  },
  // Types
  {
    plugins: [json(), dts()],
    output: {
      file: "dist/maps.d.ts",
      format: "es",
      banner,
    },
    input: "src/index.ts",
  },
];
