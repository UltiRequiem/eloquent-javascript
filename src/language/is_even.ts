export function isEven(numberToTest: number) {
  if (!Number.isInteger(numberToTest) || numberToTest <= -1) {
    throw new TypeError("Only positive numbers are allowed.");
  }

  function isEvenCore(coreNumber: number): boolean {
    if (coreNumber === 0) {
      return true;
    }

    if (coreNumber === 1) {
      return false;
    }

    return isEvenCore(coreNumber - 2);
  }

  return isEvenCore(numberToTest);
}
