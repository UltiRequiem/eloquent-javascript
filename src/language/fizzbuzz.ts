export const divisibleBy = (n: number, divisor: number) => n % divisor === 0;

export function fizzBuzz(max = 100) {
  const result = [];

  for (let number = 1; number <= max; number++) {
    const fizz = divisibleBy(number, 3);
    const buzz = divisibleBy(number, 5);

    if (fizz) {
      result.push("Fizz");
    } else if (buzz) {
      result.push("Buzz");
    } else {
      result.push(number);
    }

    if (fizz && buzz) {
      result.push("FizzBuzz");
    }
  }

  return result;
}
