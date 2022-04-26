// deno-lint-ignore-file no-explicit-any

export function unless<T extends (...params: any[]) => any>(test: T, then: T) {
  if (test()) {
    return then() as ReturnType<T>;
  }
}
