import { BUZZ, divisibleBy, FIZZ, FIZZ_BUZZ, fizzBuzz } from "./fizzbuzz.ts";
import { assert, assertEquals, assertFalse } from "../../deps.ts";

Deno.test("[fizzBuzz]", () => {
  const expected = [
    1,
    2,
    FIZZ,
    4,
    BUZZ,
    FIZZ,
    7,
    8,
    FIZZ,
    BUZZ,
    11,
    FIZZ,
    13,
    14,
    FIZZ_BUZZ,
  ];

  assertEquals(fizzBuzz(15), expected);
});

Deno.test("[fizzBuzz] spot check", () => {
  const result = fizzBuzz(20);

  assertEquals(result[2], FIZZ);
  assertEquals(result[4], BUZZ);
  assertEquals(result[14], FIZZ_BUZZ);
  assertEquals(result[19], BUZZ);
});

Deno.test("[isDivisbleBy]", () => {
  assert(divisibleBy(15, 3));
  assert(divisibleBy(15, 5));
  assertFalse(divisibleBy(15, 7));
});
