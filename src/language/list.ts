export interface List<T> {
  value: T;
  rest: List<T> | null;
}

export function arrayToList<T>([value, ...values]: T[]): List<T> | null {
  return value ? { value, rest: arrayToList(values) } : null;
}

export function arrayToListReduce<T>(values: T[]) {
  // it would enter on one line if this were plain JS
  return values.reduceRight<List<T> | null>(
    (rest, value) => ({ value, rest }),
    null,
  );
}

export function arrayToListFor<T>(values: T[]) {
  let rest: List<T> | null = null;

  const reversedItems = values.reverse();

  for (const value of reversedItems) {
    rest = { value, rest };
  }

  return rest;
}

export function prepend<T>(value: T, rest: List<T>): List<T> {
  return { value, rest };
}

export function nth<T>(list: List<T>, index: number): T {
  if (index === 0) {
    return list.value;
  }

  if (list.rest === null) {
    throw new RangeError("Index out of range.");
  }

  return nth(list.rest, index - 1);
}
