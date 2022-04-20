export function isEven(numberToTest: number): boolean {
  if (!Number.isInteger(numberToTest) || numberToTest <= -1) {
    throw new Error("Only positive numbers are allowed.");
  }

  if (numberToTest === 0) {
    return true;
  }

  if (numberToTest == 1) {
    return false;
  }

  return isEven(numberToTest - 2);
}
