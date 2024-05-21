import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["**/node_modules/", ".dist/", ".env"],
    languageOptions: {
      globals: {
        ...globals.node,
        process: "readonly",
      },
    },

    rules: {
      "no-unused-vars": "error",
      "prefer-const": "error",
      "no-undef": "error",
      "no-console": "warn",
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];