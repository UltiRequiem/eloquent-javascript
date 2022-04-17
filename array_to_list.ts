export interface List<T> {
  value: T;
  rest: List<T> | null;
}
export function arrayToList<T>(values: T[]): List<T> {
  const [hey] = values;
  return { value: hey, rest: null };
}
