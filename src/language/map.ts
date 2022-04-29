export type MapCallback<T = never> = (
  value: T,
  index: number,
  array: T[],
) => unknown;

export function map<T>(array: T[], transform: MapCallback<T>) {
  const result: unknown[] = [];

  for (const [index, value] of array.entries()) {
    result.push(transform(value, index, array));
  }

  return result;
}

[].map;
