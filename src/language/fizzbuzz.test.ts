import { divisibleBy, fizzBuzz } from "./fizzbuzz.ts";
import { assert, assertEquals, assertFalse } from "../../deps.ts";

Deno.test("[fizzBuzz]", () => {
  const F = "Fizz";
  const B = "Buzz";
  const FB = "FizzBuzz";

  const expected = [1, 2, F, 4, B, F, 7, 8, F, B, 11, F, 13, 14, F, FB];

  assertEquals(fizzBuzz(15), expected);
});

Deno.test("[isDivisbleBy]", () => {
  assert(divisibleBy(15, 3));
  assert(divisibleBy(15, 5));
  assertFalse(divisibleBy(15, 7));
});
