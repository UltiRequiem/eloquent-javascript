import { coolTriangle, triangle } from "./triangle.ts";

Deno.bench("[triangle]", { group: "Triangle" }, () => {
  triangle(300);
});

Deno.bench("[coolTriangle]", { group: "Triangle" }, () => {
  coolTriangle(300);
});
