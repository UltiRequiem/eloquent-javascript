import {
  countBs,
  countChar,
  counterOcurrencesCreator,
} from "./bean_counting.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("[countBs]", () => {
  assertEquals(countBs("BBBaB"), 4);
  assertEquals(countBs("111aaa"), 0);
});

Deno.test("[countChar]", () => {
  assertEquals(countChar("BBBa", "B"), 3);
});

Deno.test("[counterOcurrencesCreator]", () => {
  const countEs = counterOcurrencesCreator("E");

  assertEquals(countEs("EEEEaaa33"), 4);
});
