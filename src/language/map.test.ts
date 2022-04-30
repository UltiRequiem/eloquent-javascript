import { map } from "./map.ts";
import { assert, assertEquals } from "../../deps.ts";

const TEST_DATA = [1, 2, 3, 4, 5];

Deno.test("[map] Versus Array.map", () => {
  const result = map(TEST_DATA, (x) => x * 2);
  const expected = TEST_DATA.map((x) => x * 2);

  assertEquals(result, expected);
});

Deno.test("[map] Chaning Types", () => {
  const result = map(TEST_DATA, (x) => `${x}`);
  const expected = TEST_DATA.map((x) => `${x}`);

  assert(result.every((x) => typeof x === "string"));

  assertEquals(result, expected);
});
