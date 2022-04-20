import { isEven } from "./is_even.ts";
import { assert } from "../../deps.ts";

Deno.test("[isEven]", () => {
  assert(isEven(2));
  assert(!isEven(11));
  assert(isEven(24));
  assert(isEven(24));
  assert(isEven(50));
  assert(!isEven(75));
});
