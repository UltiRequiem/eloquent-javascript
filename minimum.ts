// I prefer iterating over recursivity in almost all cases.
// Is a good exercise to do some things with recursivity tho.

export function min(...numbers: number[]) {
  let smaller = Infinity;

  for (const number of numbers) {
    if (number < smaller) {
      smaller = number;
    }
  }

  return smaller;
}

export function minRecursive(...numbers: number[]) {
  function finder(current: number, competitor?: number): number {
    if (!competitor) {
      return current;
    }

    if (competitor < current) {
      current = competitor;
    }

    return finder(current, numbers.pop());
  }

  return finder(Infinity, numbers.pop());
}
