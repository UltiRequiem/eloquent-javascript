import { coolTriangle, triangle } from "./triangle.ts";
import { assertEquals } from "../../deps.ts";

const expected = `#
##
###`;

Deno.test("[triangle]", () => {
  assertEquals(triangle(), expected);
});

Deno.test("[coolTriangle]", () => {
  assertEquals(coolTriangle(), expected);
});

Deno.test("[triangle vs coolTriangle]", () => {
  assertEquals(triangle(), coolTriangle());
});
