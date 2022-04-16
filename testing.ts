export function assert(condition: unknown): asserts condition is true {
  if (!condition) {
    throw new Error("Codition is false!");
  }
}
