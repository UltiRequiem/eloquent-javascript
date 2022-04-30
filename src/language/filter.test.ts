import { filter } from "./filter.ts";
import { assertEquals } from "../../deps.ts";

const data = [1, 2, 3, 4, 5];

const cb = (item: number) => item % 2 === 0;

Deno.test("[filter] Main", () => {
  const result = filter(data, cb);

  assertEquals(result, [2, 4]);
});

Deno.test("[filter] Object", () => {
  const example = [{ hey: true, value: "x" }, { hey: false }];

  const cb = (item: typeof example[number]) => item.hey;

  const result = filter(example, cb);
  const expected = example.filter(cb);

  assertEquals(result, [{ hey: true, value: "x" }]);
  assertEquals(result, expected);
});

Deno.test("[filter] Versus Array.filter", () => {
  const expected = data.filter(cb);
  const result = filter(data, cb);

  assertEquals(result, expected);
});
