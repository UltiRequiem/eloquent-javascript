import { reverseArray, reverseArrayInPlace } from "./reversing_array.ts";
import { assertEquals, assertNotEquals } from "../../deps.ts";

Deno.test("[reverseArray]", () => {
  const exampleArray = [1, 2, 3, 4, 5];
  const inversedArray = reverseArray(exampleArray);

  // It returns a new copy
  assertNotEquals(exampleArray, inversedArray);

  const stdReversed = [...exampleArray].reverse();

  assertEquals(inversedArray.length, stdReversed.length);

  assertEquals(inversedArray, stdReversed);
});

Deno.test("[reverseArrayInPlace]", () => {
  const exampleArray = [1, 2, 3, 4, 5];
  const expectedResult = [5, 4, 3, 2, 1];
  const result = reverseArrayInPlace(exampleArray);

  // It's same because it mutates the same array and then returns it
  assertEquals(exampleArray, result);

  assertEquals(exampleArray.length, result.length);

  assertEquals(result, expectedResult);
});
