import { fizzBuzz, isDivisbleBy } from "./fizzbuzz.ts";
import { assert, assertEquals } from "../../deps.ts";

Deno.test("[fizzBuzz]", () => {
  const result = fizzBuzz(15);

  const F = "Fizz";
  const B = "Buzz";
  const FB = `${F}${B}` as const;

  const expected = [1, 2, F, 4, B, F, 7, 8, F, B, 11, F, 13, 14, F, FB];

  assertEquals(result, expected);
});

Deno.test("[isDivisbleBy]", () => {
  assert(isDivisbleBy(15, 3));
  assert(isDivisbleBy(15, 5));
  assert(!isDivisbleBy(15, 7));
});
