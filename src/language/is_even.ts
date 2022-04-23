export function isEven(numberToTest: number) {
  if (!Number.isInteger(numberToTest) || numberToTest <= -1) {
    throw new Error("Only positive numbers are allowed.");
  }

  function isEvenCore(number: number): boolean {
    if (numberToTest === 0) {
      return true;
    }

    if (numberToTest == 1) {
      return false;
    }

    return isEvenCore(number - 2);
  }

  return isEvenCore(numberToTest);
}
