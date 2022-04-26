// deno-lint-ignore-file no-explicit-any

export function noisy<T extends (...args: any) => any>(
  func: T,
  { mute } = { mute: false },
) {
  return (...args: Parameters<T>) => {
    if (!mute) {
      console.log(`Calling "${func.name ?? ""}" with args: ${args}.`);
    }

    // const result = func(...args);

    const result = func.apply(undefined, args);

    if (!mute) {
      console.log(`Result: ${result}.`);
    }

    return result as ReturnType<T>;
  };
}
