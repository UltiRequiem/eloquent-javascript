export function counChar(text: string, charToSearch: string) {
  const occurences = [...text].filter((letter) => letter === charToSearch);
  return occurences.length;
}

export function counterOcurrencesCreator(charToSearch: string) {
  return (text: string) => counChar(text, charToSearch);
}

export const countBs = counterOcurrencesCreator("B");
