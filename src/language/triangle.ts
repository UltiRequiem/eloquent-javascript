export function triangle(length = 3) {
  return Array.from({ length }, (_, time) => "#".repeat(time + 1)).join("\n");
}

export function triangleFor(rows = 3) {
  let result = "";

  for (let i = 1; i <= rows; i++) {
    result += "#".repeat(i) + "\n";
  }

  return result;
}
