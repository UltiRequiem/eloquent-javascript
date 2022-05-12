import { average, averageIterative } from "./average.ts";

const BENCH_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Deno.bench("Reduce", { group: "average" }, () => {
  average(BENCH_DATA);
});

Deno.bench("Iterative", { group: "average" }, () => {
  averageIterative(BENCH_DATA);
});
