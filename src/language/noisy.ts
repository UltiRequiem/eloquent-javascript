// deno-lint-ignore-file no-explicit-any

export function noisy<F extends (...args: any) => any>(func: F) {
  return (...args: Parameters<F>) => {
    const functionName = func.name ?? "the function";

    console.log(`Calling "${functionName}" with args: ${args}.`);

    const result = func.apply(undefined, args);

    console.log(`Result: ${result}.`);

    return result as ReturnType<F>;
  };
}
