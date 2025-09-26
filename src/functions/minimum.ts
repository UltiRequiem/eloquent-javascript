// I prefer iterating over recursivity in almost all cases.
// Is a good exercise to do some things with recursivity tho.

export function min(...numbers: number[]) {
  let smaller = Infinity;

  for (const num of numbers) {
    if (num < smaller) {
      smaller = num;
    }
  }

  return smaller;
}

export function minRecursive(...numbers: number[]) {
  const finder = (current: number, competitor?: number) => {
    if (!competitor) {
      return current;
    }

    if (competitor < current) {
      current = competitor;
    }

    return finder(current, numbers.pop());
  };

  return finder(Infinity, numbers.pop());
}
