import { range } from "./range.ts";
import { assert } from "./testing.ts";

Deno.test("[range] Main", () => {
  const result = range(1, 3);
  const expectedResult = [1, 2, 3];

  for (let i = 0; i < result.length; i++) {
    assert(result[i] === expectedResult[i]);
  }
});

Deno.test("[range] Step", () => {
  const result = range(1, 10, 2);
  const expectedResult = [1, 3, 5, 7, 9];

  for (let i = 0; i < result.length; i++) {
    assert(result[i] === expectedResult[i]);
  }
});

Deno.test("[range] Negative numbers", () => {
  const result = range(5, 2, -1);
  const expectedResult = [5, 4, 3, 2];

  for (let i = 0; i < result.length; i++) {
    assert(result[i] === expectedResult[i]);
  }
});
