import { filter } from "./filter.ts";
import { assertEquals } from "../../deps.ts";

const data = [1, 2, 3, 4, 5];

const cb = (item: number) => item % 2 === 0;

Deno.test("[filter]", () => {
  const result = filter(data, cb);

  assertEquals(result, [2, 4]);
});

Deno.test("[filter vs Array.filter]", () => {
  const expected = data.filter(cb);
  const result = filter(data, cb);

  assertEquals(result, expected);
});
