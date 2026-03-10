# eslint-config-jordangarcia

Shareable ESLint 9 flat config for TypeScript + React projects. Two composable layers of rules focused on catching real bugs, not stylistic opinions.

## Install

```bash
npm install --save-dev eslint-config-jordangarcia eslint typescript-eslint
```

## Usage

### Everything (recommended)

```js
// eslint.config.mjs
import eslintConfig from "eslint-config-jordangarcia";

export default [
  // ...your framework config (e.g. eslint-config-next)
  ...eslintConfig,
];
```

### Pick what you need

```js
import { coreSafety, typescriptStrict } from "eslint-config-jordangarcia";

export default [
  coreSafety,         // JS best practices only
  typescriptStrict,   // Type-checked TS rules only
];
```

### With Next.js

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import eslintConfig from "eslint-config-jordangarcia";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  ...eslintConfig,
  globalIgnores([".next/**"]),
  {
    // Type-checked rules need the project service
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

### With Vite / vanilla React

```js
import eslintConfig from "eslint-config-jordangarcia";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...tseslint.configs.recommended,
  ...eslintConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
```

## What's included

### `coreSafety` — JS best practices

| Rule | Catches |
|------|---------|
| `no-console` (warn) | Leftover debug logging |
| `no-debugger` / `no-alert` | Debugging artifacts in production |
| `eqeqeq` | `==` instead of `===` |
| `curly` | Missing braces on multi-line blocks |
| `no-eval` | Security vulnerabilities |
| `no-param-reassign` | Mutating function parameters |
| `no-sequences` | Comma operator (almost always a bug) |
| `no-throw-literal` | Throwing strings instead of `Error` objects |
| `no-unneeded-ternary` | `x ? true : false` instead of `x` |
| `no-useless-return` | Dead return statements |
| `prefer-const` / `no-var` | Accidental mutation |
| `prefer-promise-reject-errors` | Rejecting with non-Error values |
| `no-constant-binary-expression` | Always-truthy/falsy conditions |
| `no-template-curly-in-string` | `'${name}'` with single quotes |
| `no-self-compare` | Likely NaN check bugs |
| `no-unreachable-loop` | Loops that always break first iteration |
| `prefer-template` (warn) | String concatenation |
| `prefer-object-has-own` (warn) | Modern `Object.hasOwn()` |
| `object-shorthand` (warn) | `{ x: x }` instead of `{ x }` |

### `typescriptStrict` — Type-checked TS rules

Requires `parserOptions.projectService: true` in your config.

| Rule | Catches |
|------|---------|
| `no-floating-promises` | Forgotten `await` |
| `no-misused-promises` | Async functions where sync expected |
| `await-thenable` | `await`-ing non-promises |
| `switch-exhaustiveness-check` | Missing cases in switch on unions/enums |
| `no-shadow` | Variable shadowing across scopes |
| `prefer-nullish-coalescing` (warn) | `\|\|` where `??` is correct (`0` and `""` treated as falsy) |
| `prefer-optional-chain` (warn) | `a && a.b && a.b.c` instead of `a?.b?.c` |
| `restrict-template-expressions` (warn) | Objects in template literals |
| `require-await` (warn) | `async` without `await` |
| `no-unnecessary-type-assertion` (warn) | Redundant `as` casts |
| `no-unnecessary-condition` (warn) | Dead code from impossible conditions |
| `consistent-type-imports` (warn) | Missing `import type` |

## License

MIT
