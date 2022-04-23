import { isEven } from "./is_even.ts";
import { assert, assertThrows } from "../../deps.ts";

Deno.test("[isEven]", () => {
  assert(isEven(2));
  assert(!isEven(11));
  assert(isEven(24));
  assert(isEven(24));
  assert(isEven(50));
  assert(!isEven(75));
  assert(!isEven(75));

  assertThrows(() => isEven(-3));

  // @ts-expect-error Should throw
  assertThrows(() => isEven("a"));
});
