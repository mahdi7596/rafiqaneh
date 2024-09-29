export function trimByChar(string: string|null, character: string) {
    if (!string) return string;
    const first = [...string].findIndex(char => char !== character);
    const last = [...string].reverse().findIndex(char => char !== character);
    return string.substring(first, string.length - last);
  }