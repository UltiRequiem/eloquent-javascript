import { assertEquals, assertThrows } from "../../deps.ts";
import {
  arrayToList,
  arrayToListFor,
  arrayToListReduce,
  nth,
  prepend,
} from "./list.ts";

const rest = {
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
  assertEquals(arrayToList([1, 2, 3]), rest);
});

Deno.test("[arrayToListFor]", () => {
  assertEquals(arrayToListFor([1, 2, 3]), rest);
});

Deno.test("[arrayToListReduce]", () => {
  assertEquals(arrayToListReduce([1, 2, 3]), rest);
});

Deno.test("[nth]", () => {
  const nth3 = nth(rest, 2);
  assertEquals(nth3, 3);

  assertThrows(
    () => {
      nth(rest, 5);
    },
    RangeError,
    "Index out of range",
  );
});

Deno.test("[prepend]", () => {
  assertEquals(prepend(4, rest), { value: 4, rest });
});
