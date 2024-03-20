export const maxCountBetweenChars = (charCount: string, value?: string): number => {
  if (!value) {
    return 0;
  }

  const arrayString = value.split('');
  let max = -1;
  let aux = 0;

  arrayString.forEach((char, index) => {
    if (char === charCount && value.charAt(index + 1) !== charCount) {
      arrayString.slice(index + 1).some(charCom => {
        if (char !== charCom) {
          aux++;
          return false;
        }
        return true;
      });
      if (max < aux) {
        max = aux;
      }
      aux = 0;
    }
  });
  return max;
};
