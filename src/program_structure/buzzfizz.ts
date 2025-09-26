function fizzBuzzExpected(max: number) {
  return Array.from({ length: max }, (_, i) => {
    const n = i + 1;

    if (n % 15 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";

    return n;
  });
}
