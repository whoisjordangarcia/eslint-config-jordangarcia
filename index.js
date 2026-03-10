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
    // -- Possible errors --
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "warn",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",

    // -- Best practices --
    curly: ["error", "multi-line"],
    eqeqeq: ["error", "always"],
    "no-eval": "error",
    "no-param-reassign": ["error", { props: false }],
    "no-return-assign": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unneeded-ternary": "error",
    "no-useless-return": "error",
    "prefer-promise-reject-errors": "error",

    // -- Variables --
    "no-shadow": "off", // Handled by @typescript-eslint/no-shadow
    "no-var": "error",
    "prefer-const": "error",

    // -- Style (warn, not error) --
    "no-console": "warn",
    "no-debugger": "error",
    "no-alert": "error",
    "no-new-wrappers": "error",
    "no-useless-concat": "warn",
    "no-useless-rename": "error",
    "object-shorthand": "warn",
    "prefer-object-has-own": "warn",
    "prefer-template": "warn",
  },
};

// ── TypeScript type-checked rules ──
// Requires: typescript-eslint parser with projectService enabled.
// Catches: forgotten await, async misuse, unnecessary casts, dead conditions,
// unsafe any propagation, and missing nullish coalescing.
export const typescriptStrict = {
  name: "jordangarcia/typescript-strict",
  files: ["**/*.ts", "**/*.tsx"],
  rules: {
    // -- Type-checked (require projectService) --
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false } },
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/restrict-template-expressions": [
      "warn",
      { allowNumber: true, allowBoolean: true },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",

    // -- Shadowing (TS-aware replacement for core no-shadow) --
    "@typescript-eslint/no-shadow": "error",

    // -- Import hygiene --
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
  },
};

// Default export — spread into your flat config for everything.
export default [coreSafety, typescriptStrict];
