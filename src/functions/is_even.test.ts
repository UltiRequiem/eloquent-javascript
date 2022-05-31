import { isEven } from "./is_even.ts";
import { assert, assertFalse, assertThrows } from "../../deps.ts";

Deno.test("[isEven]", () => {
  assert(isEven(2));
  assertFalse(isEven(11));
  assert(isEven(24));
  assert(isEven(24));
  assert(isEven(50));
  assertFalse(isEven(75));
  assertFalse(isEven(75));

  assertThrows(() => isEven(-3));

  // @ts-expect-error Should throw
  assertThrows(() => isEven("a"));
});
