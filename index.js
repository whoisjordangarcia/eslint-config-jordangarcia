/**
 * eslint-config-jordangarcia
 *
 * Shareable ESLint 9 flat config for TypeScript + React projects.
 * Provides two composable layers — use what you need:
 *
 *   import { coreSafety, typescriptStrict } from "eslint-config-jordangarcia";
 *
 * Or spread the default export for everything:
 *
 *   import eslintConfig from "eslint-config-jordangarcia";
 */

// ── Core JS best practices ──
// Catches: leftover debugging, loose equality, unreachable code,
// accidental mutation, string concatenation, and common AI-generated mistakes.
export const coreSafety = {
  name: "jordangarcia/core-safety",
  rules: {
    "no-console": "warn",
    "no-debugger": "error",
    "no-alert": "error",
    eqeqeq: ["error", "always"],
    "no-eval": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "warn",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-new-wrappers": "error",
    "no-useless-rename": "error",
    "object-shorthand": "warn",
    "prefer-template": "warn",
  },
};

// ── TypeScript type-checked rules ──
// Requires: typescript-eslint parser with projectService enabled.
// Catches: forgotten await, async misuse, unnecessary casts, dead conditions.
export const typescriptStrict = {
  name: "jordangarcia/typescript-strict",
  files: ["**/*.ts", "**/*.tsx"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false } },
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
  },
};

// Default export — spread into your flat config for everything.
export default [coreSafety, typescriptStrict];
