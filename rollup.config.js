import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const isProduction = process.env.BUILD === "production";

export default [
  // UMD module
  {
    input: "src/index.ts",
    plugins: [esbuild({ minify: isProduction }), resolve(), commonjs()],
    output: {
      format: "umd",
      name: "maptoolkit",
      file: `dist/maptoolkit.js`,
      indent: false,
      minifyInternalExports: isProduction,
      sourcemap: !isProduction,
    },
  },
  // ES module
  {
    input: "src/index.ts",
    plugins: [esbuild({ minify: isProduction }), resolve(), commonjs()],
    output: {
      format: "es",
      file: `dist/maptoolkit.mjs`,
      sourcemap: !isProduction,
      minifyInternalExports: isProduction,
    },
  },
  // Types
  {
    plugins: [dts()],
    output: {
      file: `dist/maptoolkit.d.ts`,
      format: "es",
    },
    input: "src/index.ts",
  },
];
