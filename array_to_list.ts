export interface List<T> {
  value: T;
  rest: List<T> | null;
}

// Recursivity FTW 🚀🚀🚀
export function arrayToList<T>([value, ...values]: T[]): List<T> | null {
  return value ? { value, rest: arrayToList(values) } : null;
}
