import {
  countBs,
  countChar,
  countCharCool,
  counterOcurrencesCreator,
} from "./bean_counting.ts";
import { assertEquals } from "../../deps.ts";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

Deno.test("[countBs]", () => {
  assertEquals(countBs("BBBaB"), 4);
  assertEquals(countBs(lorem), 0);
});

Deno.test("[countCharCool]", () => {
  assertEquals(countCharCool(lorem, "o"), 4);
});

Deno.test("[countChar]", () => {
  assertEquals(countChar(lorem, "s"), 4);
});

Deno.test("[counterOcurrencesCreator]", () => {
  const countEs = counterOcurrencesCreator("e");

  assertEquals(countEs(lorem), 5);
});

Deno.test("[countChar vs countCharCool]", () => {
  assertEquals(countCharCool(lorem, "c"), countChar(lorem, "c"));
});
