import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

const isProduction = process.env.BUILD === "production";

export default [
  // UMD module
  {
    input: "src/index.ts",
    plugins: [esbuild({ minify: isProduction }), resolve(), commonjs(), json()],
    output: {
      format: "umd",
      name: "maptoolkit",
      file: "dist/maptoolkit.js",
      indent: false,
      minifyInternalExports: isProduction,
      sourcemap: true,
    },
  },
  // ES module
  {
    input: "src/index.ts",
    plugins: [esbuild({ minify: isProduction }), resolve(), commonjs(), json()],
    output: {
      format: "es",
      file: "dist/maptoolkit.mjs",
      sourcemap: true,
      minifyInternalExports: isProduction,
    },
  },
  // Types
  {
    plugins: [dts(), json()],
    output: {
      file: "dist/maptoolkit.d.ts",
      format: "es",
    },
    input: "src/index.ts",
  },
];
