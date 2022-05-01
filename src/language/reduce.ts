// I don't like TypeScript Anymore, my mood: 😔 -> 😩 -> 😭

export type ReduceCallback<T, U> = (
  accumulator: U,
  value: T,
  index: number,
  array: readonly T[],
) => unknown;

export function reduce<
  T extends unknown[],
  F extends ReduceCallback<T, U>,
  U = unknown,
>(array: readonly T[], callback: F, initialValue?: U | T) {
  const copy = [...array];

  if (array.length >= 1 && initialValue === undefined) {
    initialValue = copy.shift();
  }

  let previous = initialValue;

  const entries = copy.entries();

  for (const [index, element] of entries) {
    previous = callback(previous as T & U, element, index, array) as U;
  }

  return previous as ReturnType<F>;
}
