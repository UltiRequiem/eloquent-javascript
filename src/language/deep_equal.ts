// deno-lint-ignore-file no-explicit-any

export function deepEqual(first: any, second: any) {
  const [firstType, secondType] = [typeof first, typeof second];

  const [firstObject, secondObject] = [
    firstType === "object",
    secondType === "object",
  ];

  const [firstIsObject, secondIsObject] = [
    firstObject && first !== null,
    secondObject && second !== null,
  ];

  if (!firstIsObject || !secondIsObject) {
    return first === second;
  }

  const [firstKeys, secondKeys] = [first, second].map(Object.keys);

  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  for (const key of firstKeys) {
    if (!secondKeys.includes(key)) {
      return false;
    }

    if (!deepEqual(first[key], second[key])) {
      return false;
    }
  }

  return true;
}
