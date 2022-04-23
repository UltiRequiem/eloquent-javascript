import { deepEqual } from "./deep_equal.ts";
import { assert } from "../../deps.ts";

Deno.test("[deepEqual]", () => {
  const obj = { here: { is: "an" }, object: 2 };

  assert(deepEqual(obj, obj));

  assert(deepEqual("a", "a"));

  assert(!deepEqual(23, 34));

  assert(!deepEqual(obj, { here: 1, object: 2 }));

  assert(deepEqual(obj, { here: { is: "an" }, object: 2 }));

  assert(!deepEqual({ a: "b" }, { c: "d" }));

  assert(!deepEqual({ hey: "rosa", chales: "diah" }, { me: "eliaz" }));
});
