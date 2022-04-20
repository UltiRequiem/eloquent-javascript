function areNumbers(values: unknown[]): values is number[] {
  return values.every(Number.isInteger);
}

export function range(start: number, end: number, step = 1): number[] {
  if (!areNumbers([start, end, step])) {
    throw new TypeError("Exepected all parameters to be numbers.");
  }

  const result: number[] = [];

  const positiveStep = step >= 1;

  for (
    let item = start;
    item <= end;
    positiveStep ? (item += step) : (item -= step)
  ) {
    result.push(item);
  }

  return result;
}
