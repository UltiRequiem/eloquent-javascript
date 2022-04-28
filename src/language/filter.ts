export type FilterCallback<T> = (
  item: T,
  index: number,
  array: readonly T[],
) => boolean;

export function filter<T>(array: readonly T[], test: FilterCallback<T>) {
  const result: T[] = [];

  for (const [index, value] of array.entries()) {
    if (test(value, index, array)) {
      result.push(value);
    }
  }

  return result;
}
