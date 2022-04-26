export const isDivisbleBy = (n: number, divisor: number) => n % divisor === 0;

export function fizzBuzz(max = 100) {
  const result = [];

  for (let number = 1; number <= max; number++) {
    const fizz = isDivisbleBy(number, 3);
    const buzz = isDivisbleBy(number, 5);

    const fizzBuzz = fizz && buzz;

    if (fizz) {
      result.push("Fizz");
    } else if (buzz) {
      result.push("Buzz");
    } else {
      result.push(number);
    }

    if (fizzBuzz) {
      result.push("FizzBuzz");
    }
  }

  return result;
}
