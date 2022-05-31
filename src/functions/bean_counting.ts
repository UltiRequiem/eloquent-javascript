export function countCharCool(text: string, charToSearch: string) {
  const { length } = [...text].filter((letter) => letter === charToSearch);
  return length;
}

// Almost 9 times faster!
export function countChar(text: string, charToSearch: string) {
  const expression = new RegExp(charToSearch, "gi");
  const { length } = text.match(expression) ?? [];
  return length;
}

export function counterOcurrencesCreator(charToSearch: string) {
  return (text: string) => countChar(text, charToSearch);
}

export const countBs = counterOcurrencesCreator("B");
