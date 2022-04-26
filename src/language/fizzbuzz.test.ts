import { fizzBuzz, isDivisbleBy } from "./fizzbuzz.ts";
import { assert, assertEquals } from "../../deps.ts";

Deno.test("[fizzBuzz]", () => {
  const result = fizzBuzz(10);
  const expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"];

  assertEquals(result, expected);
});

Deno.test("[isDivisbleBy]", () => {
  assert(isDivisbleBy(15, 3));
  assert(isDivisbleBy(15, 5));
  assert(!isDivisbleBy(15, 7));
});
