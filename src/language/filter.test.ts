import { filter } from "./filter.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("filter", () => {
  const data = filter([1, 2, 3, 4, 5], (item) => item % 2 === 0);
  assertEquals(data, [2, 4]);
});
