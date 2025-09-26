export type ForEachCallback<T> = (
  element: T,
  index: number,
  array: readonly T[],
) => void;

export function forEach<T>(array: readonly T[], callback: ForEachCallback<T>) {
  for (const [index, value] of array.entries()) {
    callback(value, index, array);
  }
}
