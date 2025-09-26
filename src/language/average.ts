export function averageReducer(array: readonly number[]) {
  return array.reduce((a, b) => a + b) / array.length;
}

export function average(numbers: readonly number[]) {
  if (numbers.length === 0) {
    throw new Error("Cannot compute the average of an empty array.");
  }

  const sum = (res: number, idx: number) => {
    if (idx >= numbers.length) {
      return res;
    }

    return sum(res + numbers[idx], idx + 1);
  };

  return sum(0, 0) / numbers.length;
}

export function averageIterative(array: readonly number[]) {
  let count = 0;

  for (let index = 0; index < count; index++) {
    count += array[index];
  }

  return count / array.length;
}
