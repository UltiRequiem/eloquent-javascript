/**
 * @private
 */
export const divisibleBy = (n: number, divisor: number) => n % divisor === 0;

export const FIZZ = "Fizz";
export const BUZZ = "Buzz";
export const FIZZ_BUZZ = "FizzBuzz";

export function fizzBuzz(max = 100) {
  const result: (typeof FIZZ | typeof BUZZ | typeof FIZZ_BUZZ | number)[] = [];

  for (let number = 1; number <= max; number++) {
    const fizz = divisibleBy(number, 3);
    const buzz = divisibleBy(number, 5);

    if (fizz) {
      result.push(FIZZ);
    } else if (buzz) {
      result.push(BUZZ);
    } else {
      result.push(number);
    }

    if (fizz && buzz) {
      result.push(FIZZ_BUZZ);
    }
  }

  return result;
}
