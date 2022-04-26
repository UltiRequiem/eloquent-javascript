// deno-lint-ignore-file no-explicit-any

export function repeat<T extends (...args: any) => any>(
  times: number,
  action: T,
) {
  const results = [];

  for (let i = 0; i < times; i++) {
    const result = action(i);

    results.push(result as ReturnType<T>);
  }

  return results;
}
