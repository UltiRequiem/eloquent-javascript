export interface List<T> {
  value: T;
  rest: List<T> | null;
}

export function arrayToList<T>([value, ...values]: T[]): List<T> | null {
  return value ? { value, rest: arrayToList(values) } : null;
}

export function arrayToListReduce<T>(values: T[]) {
  // it would enter on one line if this were plain JS 🥲
  return values.reduceRight<List<T> | null>(
    (rest, value) => ({ value, rest }),
    null,
  );
}

export function arrayToListFor<T>(values: T[]) {
  let rest = {};

  for (let i = values.length - 1; i >= 0; i--) {
    rest = { value: values[i], rest };
  }

  return rest as List<T>;
}
