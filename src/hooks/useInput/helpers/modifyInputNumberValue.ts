type ModifyInputNumberValueProps = {
  value: string | number;
  min?: number;
  max?: number;
  maxLength?: number;
};

export const modifyInputNumberValue = ({
  value,
  min,
  max,
  maxLength,
}: ModifyInputNumberValueProps): boolean => {
  if (min && Number(value) < min) {
    return true;
  } else if (max && Number(value) > max) {
    return true;
  } else if (maxLength && String(value).length > maxLength) {
    return true;
  }
  return false;
};
