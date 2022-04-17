import { reverseArray, reverseArrayInPlace } from "./reversing_array.ts";
import { assert } from "./testing.ts";

Deno.test("[reverseArray]", () => {
  const exampleArray = [1, 2, 3, 4, 5];
  const inversedArray = reverseArray(exampleArray);

  // It returns a new copy
  assert(exampleArray !== inversedArray);

  const stdReversed = [...exampleArray].reverse();

  assert(inversedArray.length === stdReversed.length);

  for (let i = 0; i < inversedArray.length; i++) {
    assert(inversedArray[i] === stdReversed[i]);
  }
});

Deno.test("[reverseArrayInPlace]", () => {
  const exampleArray = [1, 2, 3, 4, 5];
  const expectedResult = [5, 4, 3, 2, 1];
  const result = reverseArrayInPlace(exampleArray);

  // It's same because it mutates the same array and then returns it
  assert(exampleArray === result);

  assert(exampleArray.length === result.length);

  for (let i = 0; i < result.length; i++) {
    assert(result[i] === expectedResult[i]);
  }
});
