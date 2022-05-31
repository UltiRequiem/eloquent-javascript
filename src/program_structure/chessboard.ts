export function chessboard(length = 8) {
  let result = "";

  const totalLines = length - 1;

  for (let line = 0; line < length; line++) {
    const oddLine = line % 2;

    for (let character = 0; character < length; character++) {
      result += oddLine === character % 2 ? " " : "#";
    }

    if (line < totalLines) {
      result += "\n";
    }
  }

  return result;
}
