import { greaterThan } from "./greater_than.ts";

Deno.bench("greaterThan", () => {
  const greaterOne = greaterThan(1);

  for (let i = 0; i < 100; i++) {
    greaterOne(i);
  }
});
