import { sum } from "./sum.ts";
import { assert } from "./testing.ts";

Deno.test("[sum]", () => {
  const result = sum(1, 10, 23, 46);
  const expectedResult = 80;
  assert(result === expectedResult);
});
