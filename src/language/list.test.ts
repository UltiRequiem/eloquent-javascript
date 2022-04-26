import { assertEquals, assertThrows } from "../../deps.ts";
import {
  arrayToList,
  arrayToListFor,
  arrayToListReduce,
  nth,
  prepend,
} from "./list.ts";

const EXAMPLE_LIST = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

Deno.test("[arrayToList]", () => {
  assertEquals(arrayToList([1, 2, 3]), EXAMPLE_LIST);
});

Deno.test("[arrayToListFor]", () => {
  assertEquals(arrayToListFor([1, 2, 3]), EXAMPLE_LIST);
});

Deno.test("[arrayToListReduce]", () => {
  assertEquals(arrayToListReduce([1, 2, 3]), EXAMPLE_LIST);
});

Deno.test("[nth]", () => {
  const nth3 = nth(EXAMPLE_LIST, 2);
  assertEquals(nth3, 3);

  assertThrows(
    () => {
      nth(EXAMPLE_LIST, 5);
    },
    RangeError,
    "Index out of range",
  );
});

Deno.test("[prepend]", () => {
  const prepended = prepend(4, EXAMPLE_LIST);

  assertEquals(prepended, {
    value: 4,
    rest: EXAMPLE_LIST,
  });
});
