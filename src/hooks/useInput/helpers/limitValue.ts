const minorValue = (value: string | number, min: string | number | undefined) => {
  if (!min) {
    return false;
  }
  const minorThanMin = Number(value) < Number(min);
  return minorThanMin;
};

const maxValue = (value: string | number, max: string | number | undefined) => {
  if (!max) {
    return false;
  }
  const higherThanMax = Number(value) > Number(max);
  return higherThanMax;
};

const maxLengthLimit = (value: string | number, maxLength: number | undefined) => {
  if (!maxLength) {
    return value;
  }
  let valueLimited = value;
  if (String(value).length > maxLength) {
    valueLimited = String(value).substring(
      0,
      String(value).length - (String(value).length - maxLength)
    );
  }
  return valueLimited;
};

export const limitValue = (
  value: string | number,
  min: string | number | undefined,
  max: string | number | undefined,
  maxLength: number | undefined
): string | number => {
  let limit: string | number = value;
  const minorThanMin = minorValue(value, min);
  const higherThanMax = maxValue(value, max);

  if (min && minorThanMin) {
    limit = min;
  } else if (max && higherThanMax) {
    limit = max;
  }

  const limited = maxLengthLimit(limit, maxLength);
  return limited;
};
