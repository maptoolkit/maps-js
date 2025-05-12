import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      import: importPlugin,
      "@typescript-eslint": tseslint,
    },
    rules: {
      "no-console": "off",
      "no-empty": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-undef": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "warn",
      "prefer-const": "error",
      "no-magic-numbers": "off",
      "no-implicit-globals": "error",
      "consistent-return": "off",
      "no-eval": "error",
      "no-new-func": "error",
      "prefer-template": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  //{
  //  files: ["**/*.test.{js,ts}", "**/*.spec.{js,ts}"],
  //  languageOptions: {
  //    globals: {
  //      ...globals.jest,
  //    },
  //  },
  //},
  prettier,
]);
