// I prefer iterating over recursivity in almost all cases.
// Is a good exercise to do some things with recursivity tho.

export function min(...numbers: readonly number[]) {
  let smaller = Infinity;

  for (const num of numbers) {
    if (num < smaller) {
      smaller = num;
    }
  }

  return smaller;
}

export function minRecursive(...numbers: readonly number[]) {
  const finder = (min: number, idx: number) => {
    if (idx >= numbers.length) {
      return min;
    }

    if (numbers[idx] < min) {
      min = numbers[idx];
    }

    return finder(min, idx + 1);
  };

  return finder(Infinity, 0);
}
