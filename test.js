import { describe, it } from "node:test";
import assert from "node:assert/strict";
import config, { coreSafety, typescriptStrict } from "./index.js";

describe("eslint-config-jordangarcia", () => {
  it("exports coreSafety with a name and rules", () => {
    assert.equal(coreSafety.name, "jordangarcia/core-safety");
    assert.ok(Object.keys(coreSafety.rules).length > 10);
  });

  it("exports typescriptStrict with a name, files, and rules", () => {
    assert.equal(typescriptStrict.name, "jordangarcia/typescript-strict");
    assert.deepEqual(typescriptStrict.files, ["**/*.ts", "**/*.tsx"]);
    assert.ok(Object.keys(typescriptStrict.rules).length > 5);
  });

  it("default export is an array of both configs", () => {
    assert.ok(Array.isArray(config));
    assert.equal(config.length, 2);
    assert.equal(config[0], coreSafety);
    assert.equal(config[1], typescriptStrict);
  });

  it("coreSafety enforces strict equality", () => {
    assert.deepEqual(coreSafety.rules.eqeqeq, ["error", "always"]);
  });

  it("coreSafety prevents parameter mutation", () => {
    assert.deepEqual(coreSafety.rules["no-param-reassign"], [
      "error",
      { props: false },
    ]);
  });

  it("coreSafety disables no-shadow in favor of TS version", () => {
    assert.equal(coreSafety.rules["no-shadow"], "off");
    assert.equal(
      typescriptStrict.rules["@typescript-eslint/no-shadow"],
      "error",
    );
  });

  it("typescriptStrict catches floating promises", () => {
    assert.equal(
      typescriptStrict.rules["@typescript-eslint/no-floating-promises"],
      "error",
    );
  });

  it("typescriptStrict allows async onClick in JSX", () => {
    const rule =
      typescriptStrict.rules["@typescript-eslint/no-misused-promises"];
    assert.equal(rule[0], "error");
    assert.equal(rule[1].checksVoidReturn.attributes, false);
  });

  it("typescriptStrict enforces exhaustive switches", () => {
    assert.equal(
      typescriptStrict.rules["@typescript-eslint/switch-exhaustiveness-check"],
      "error",
    );
  });

  it("typescriptStrict prefers nullish coalescing over ||", () => {
    assert.equal(
      typescriptStrict.rules["@typescript-eslint/prefer-nullish-coalescing"],
      "warn",
    );
  });
});
