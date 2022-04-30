export type MapCallback<T> = (
  value: T,
  index: number,
  array: readonly T[],
) => unknown;

export function map<T, F extends MapCallback<T>>(array: T[], transform: F) {
  const result = [];

  const entries = array.entries();

  for (const [index, value] of entries) {
    result.push(transform(value, index, array));
  }

  return result as ReturnType<F>[];
}
