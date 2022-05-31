import { chessboard } from "./chessboard.ts";
import { assertEquals } from "../../deps.ts";

const defaultBoard = ` # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # `;

Deno.test("[chessboard] Length", () => {
  assertEquals(defaultBoard, chessboard());
});

Deno.test("[chessboard] Length", () => {
  const { length: chessboardLength } = chessboard();

  assertEquals(chessboardLength, 71);
});
