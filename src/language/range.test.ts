import { range } from "./range.ts";
import { assertEquals, assertThrows } from "../../deps.ts";

Deno.test("[range] Main", () => {
  assertEquals(range(1, 3), [1, 2, 3]);
});

Deno.test("[range] Step", () => {
  assertEquals(range(1, 10, 3), [1, 4, 7, 10]);
});

Deno.test("[range] Negative numbers", () => {
  assertEquals(range(5, 2, -1), [5, 4, 3, 2]);
});

Deno.test("[range] Throws", () => {
  assertThrows(() => {
    // @ts-expect-error Should throw
    range(1, "a", 0);
  });
});
