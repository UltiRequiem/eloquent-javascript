function areNumbers(values: readonly unknown[]): values is number[] {
  return values.every(Number.isInteger);
}

function assertAreNumbers(
  values: readonly unknown[],
  message = "Expected all the items to be numbers.",
): asserts values is number[] {
  if (!areNumbers(values)) {
    throw new TypeError(message);
  }
}

export function range(start: number, end: number, step = 1): number[] {
  assertAreNumbers([start, end, step]);

  const result: number[] = [];

  const positiveStep = step >= 1;

  for (let i = start; positiveStep ? i <= end : i >= end; i += step) {
    result.push(i);
  }

  return result;
}
