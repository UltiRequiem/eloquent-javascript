export type ForEachCallback<T> = (
  element: T,
  index: number,
  array: readonly T[],
) => void;

export function forEach<T>(array: T[], callback: ForEachCallback<T>) {
  const entries = array.entries();

  for (const [index, value] of entries) {
    callback(value, index, array);
  }
}
