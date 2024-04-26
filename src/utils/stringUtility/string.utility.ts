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

// The function is designed to convert a duration value, which could be a string or a number, into a numeric value representing milliseconds
// If duration is already a number, it simply returns the number.
export const convertDurationToNumber = (duration?: string | number): number => {
  if (!duration) {
    return 0;
  }
  if (typeof duration === 'number') {
    return duration;
  }

  // Remove "ms" or "s" from the duration and convert it to a number
  const value = Number(duration.replace('ms', '').replace('s', ''));

  // If the duration was in seconds, convert it to milliseconds
  if (duration.includes('s') && !duration.includes('ms')) {
    return value * 1000;
  }

  return value;
};
