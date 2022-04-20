import {
  countBs,
  countChar,
  counterOcurrencesCreator,
} from "./bean_counting.ts";
import { assert } from "./testing.ts";

Deno.test("[countBs]", () => {
  assert(countBs("BBBaB") === 4);
  assert(countBs("111aaa") === 0);
});

Deno.test("[countChar]", () => {
  assert(countChar("BBBa", "B") === 3);
});

Deno.test("[counterOcurrencesCreator]", () => {
  const countEs = counterOcurrencesCreator("E");

  assert(countEs("EEEEaaa33") == 4);
});
