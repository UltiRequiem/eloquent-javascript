import { deepEqual } from "./deep_equal.ts";
import { assert, assertFalse } from "../../deps.ts";

Deno.test("deepEqual", () => {
  const obj = { here: { is: "an" }, object: 2 };

  assert(deepEqual(obj, obj));

  assert(deepEqual([1, 2, 3], [1, 2, 3]));

  assertFalse(deepEqual([1, 2, 3], [1, 3]));

  assertFalse(deepEqual([2, 1], [1, 2]));

  assert(deepEqual("a", "a"));

  assertFalse(deepEqual(23, 34));

  assertFalse(deepEqual(obj, { here: 1, object: 2 }));

  assert(deepEqual(obj, { here: { is: "an" }, object: 2 }));

  assertFalse(deepEqual({ a: "b" }, { c: "d" }));

  assertFalse(deepEqual({ hey: "rosa", chales: "diah" }, { me: "eliaz" }));
});
