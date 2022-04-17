export function sum(...numbers: number[]) {
  return numbers.reduce((previous, current) => (previous += current));
}
