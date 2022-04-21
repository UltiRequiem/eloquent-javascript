import { deepEqual } from "./deep_equal.ts";
import { assert } from "../../deps.ts";

const obj = { here: { is: "an" }, object: 2 };

Deno.test("deepEqual", () => {
  assert(deepEqual(obj, obj));
  assert(!deepEqual(obj, { here: 1, object: 2 }));
  assert(deepEqual(obj, { here: { is: "an" }, object: 2 }));
});
