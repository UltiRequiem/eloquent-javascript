// Benchmarking Lover

import { average, averageFor } from "./average.ts";

const BENCH_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

Deno.bench("[average] Reduce", { group: "average" }, () => {
  average(BENCH_DATA);
});

Deno.bench("[average] For", { group: "average" }, () => {
  averageFor(BENCH_DATA);
});
