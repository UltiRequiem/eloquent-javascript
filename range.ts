function areNumbers(values: unknown[]): values is number[] {
  return values.every(Number.isInteger);
}

export function range(start: number, end: number, step = 1): number[] {
  if (!areNumbers([start, end, step])) {
    throw new TypeError("Exepected all parameters to be numbers.");
  }

  const length = end - start + 1;

  let counter = 0;

  return Array.from({ length }, () => (counter += step));
}
