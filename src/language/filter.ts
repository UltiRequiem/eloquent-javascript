export type FilterCallback<T = never> = (
  item: T,
  index: number,
  array: readonly T[],
) => unknown;

export function filter<T>(array: readonly T[], test: FilterCallback<T>) {
  const result = [];

  const entries = array.entries();

  for (const [index, value] of entries) {
    if (test(value, index, array)) {
      result.push(value);
    }
  }

  return result;
}
