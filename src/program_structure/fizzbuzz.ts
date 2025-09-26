/**
 * @private
 */
export const divisibleBy = (n: number, divisor: number) => n % divisor === 0;

export const FIZZ = "Fizz";
export const BUZZ = "Buzz";
export const FIZZ_BUZZ = "FizzBuzz";

export type FizzBuzz = typeof FIZZ | typeof BUZZ | typeof FIZZ_BUZZ | number;

export function fizzBuzz(max = 100) {
  const result: FizzBuzz[] = [];

  for (let number = 1; number <= max; number++) {
    const fizz = divisibleBy(number, 3);
    const buzz = divisibleBy(number, 5);

    if (fizz && buzz) {
      result.push(FIZZ_BUZZ);
    } else if (fizz) {
      result.push(FIZZ);
    } else if (buzz) {
      result.push(BUZZ);
    } else {
      result.push(number);
    }
  }

  return result;
}
