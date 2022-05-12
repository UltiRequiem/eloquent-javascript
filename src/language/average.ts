export function average(array: readonly number[]) {
  return array.reduce((a, b) => a + b) / array.length;
}

export function averageIterative(array: readonly number[]) {
  let count = 0;

  for (let index = 0; index < count; index++) {
    count += array[index];
  }

  return count / array.length;
}
