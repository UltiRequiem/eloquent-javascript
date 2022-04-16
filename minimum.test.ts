import { min, minRecursive } from "./minimum.ts";

import { assert } from "./testing.ts";

Deno.test("main", () => {
  assert(min(5, 3, 4, 2, 22) === 2);

  assert(min(5, 3, 4, 2, 22, -3) === -3);
  assert(min(-23, 5, 3, 4, 2, 22, -3) === -23);
});

Deno.test("recursive", () => {
  assert(minRecursive(5, 3, 4, 2, 22) === 2);

  assert(minRecursive(5, 3, 4, 2, 22, -3) === -3);
});
