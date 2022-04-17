import { range } from "./range.ts";
import { assert } from "./testing.ts";

Deno.test("[range]", () => {
  const result = range(1, 3);
  const expectedResult = [1, 2, 3];

  for (let i = 0; i < 3; i++) {
    assert(result[i] === expectedResult[i]);
  }

  const resultTwo = range(1, 10, 2);
  const expectedResultTwo = [1, 3, 5, 7, 9];
  console.log(resultTwo);

  for (let i = 0; i < 3; i++) {
    assert(resultTwo[i] === expectedResultTwo[i]);
  }
});
