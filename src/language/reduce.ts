export type ReduceCallback<T> = (
  accumulator: T,
  value: T,
  index: number,
  array: readonly T[],
) => unknown;

export function reduce<T, F extends ReduceCallback<T>>(
  array: T[],
  callback: F,
  initialValue?: unknown,
) {
  const copy = [...array];

  if (array.length >= 1) {
    initialValue = copy.shift();
  }

  let previous = initialValue;

  const entries = copy.entries();

  for (const [index, element] of entries) {
    previous = callback(previous as T, element, index, array);
  }

  return previous as ReturnType<F>;
}
