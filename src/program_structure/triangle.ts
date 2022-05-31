export function coolTriangle(length = 3) {
  return Array.from({ length }, (_, time) => "#".repeat(time + 1)).join("\n");
}

// Almost 3 times faster!
export function triangle(rows = 3) {
  let result = "";

  for (let index = 1; index < rows; index++) {
    result += "#".repeat(index) + "\n";
  }

  result += "#".repeat(rows);

  return result;
}
