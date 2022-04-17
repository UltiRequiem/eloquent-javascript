export function assert(
  condition: unknown,
  message = "Codition is false!",
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}
