export function greaterThan(base: number) {
  return (toTest: number) => toTest > base;
}

export function greaterThanOrEqual(base: number) {
  return (toTest: number) => toTest >= base;
}

export function greaterThanParameter(toTest: number, base: number) {
  if (!greaterThanParameter.checkers.has(base)) {
    greaterThanParameter.checkers.set(base, greaterThan(base));
  }

  const checker = greaterThanParameter.checkers.get(base)!;

  return checker(toTest);
}

greaterThanParameter.checkers = new Map<
  number,
  ReturnType<typeof greaterThan>
>();
