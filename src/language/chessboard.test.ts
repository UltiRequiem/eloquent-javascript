import { chessboard } from "./chessboard.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("[chessboard]", () => {
  assertEquals(chessboard().length, 71);
});
