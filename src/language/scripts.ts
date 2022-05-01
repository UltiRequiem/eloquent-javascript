import scripts from "./scripts.json" assert { type: "json" };

import { reduce } from "./reduce.ts";

export function characterCount(script: typeof scripts[number]) {
  return reduce(script.ranges, (count, [from, to]) => count + (to - from), 0);
}

const result = scripts.reduce((pre, current) => {
  return characterCount(pre) < characterCount(current) ? current : pre;
});

console.log(result);
