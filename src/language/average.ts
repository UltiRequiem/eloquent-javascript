export function average(array: readonly number[]) {
  return array.reduce((a, b) => a + b) / array.length;
}

export function averageFor(array: readonly number[]) {
  let count = 0;

  for (const value of array) {
    count += value;
  }

  return count / array.length;
}
