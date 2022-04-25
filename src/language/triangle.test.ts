import { triangle, triangleFor } from "./triangle.ts";
import { assertEquals } from "../../deps.ts";

const expected = `#
##
###`;

Deno.test("[triangle]", () => {
  assertEquals(triangle(), expected);
});

Deno.test("[triangleFor]", () => {
  assertEquals(triangleFor(), expected);
});

Deno.test("[triangle vs triangleFor]", () => {
  assertEquals(triangle(), triangleFor());
});
