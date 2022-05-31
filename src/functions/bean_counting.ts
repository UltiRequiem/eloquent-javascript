export function countChar(text: string, charToSearch: string) {
  const { length } = [...text].filter((letter) => letter === charToSearch);
  return length;
}

export function counterOcurrencesCreator(charToSearch: string) {
  return (text: string) => countChar(text, charToSearch);
}

export const countBs = counterOcurrencesCreator("B");
