// Benchmarking Lover

import { average, averageFor } from "./average.ts";

const BENCH_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

Deno.bench("average", { group: "average" }, () => {
  average(BENCH_DATA);
});

Deno.bench("averageFor", { group: "average" }, () => {
  averageFor(BENCH_DATA);
});
