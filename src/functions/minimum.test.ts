import { min, minRecursive } from "./minimum.ts";

import { assertEquals } from "../../deps.ts";

Deno.test("[min]", () => {
  assertEquals(min(5, 3, 4, 2, 22), 2);

  assertEquals(min(5, 3, 4, 2, 22, -3), -3);
  assertEquals(min(-23, 5, 3, 4, 2, 22, -3), -23);
});

Deno.test("[minRecursive]", () => {
  assertEquals(minRecursive(5, 3, 4, 2, 22), 2);

  assertEquals(minRecursive(5, 3, 4, 2, 22, -3), -3);
});
