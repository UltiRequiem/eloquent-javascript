export const isDivisbleBy = (n: number, divisor: number) => n % divisor === 0;

export function fizzBuzz(max = 100) {
  const result = [];

  for (let i = 1; i <= max; i++) {
    const isDivisibleBy3 = isDivisbleBy(i, 3);
    const isDivisibleBy5 = isDivisbleBy(i, 5);

    if (isDivisibleBy3) {
      result.push("Fizz");
    } else if (isDivisibleBy5 && !isDivisibleBy3) {
      result.push("Buzz");
    } else {
      result.push(i);
    }

    if (isDivisibleBy3 && isDivisibleBy5) {
      result.push("FizzBuzz");
    }
  }

  return result;
}
