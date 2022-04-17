export function reverseArray<T>(array: T[]) {
  const result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

export function reverseArrayInPlace<T>(array: T[]) {
  const { length } = array;
  const values = [...array];

  for (let i = 0; i < length; i++) {
    array[i] = values[length - i - 1];
  }

  return array;
}
