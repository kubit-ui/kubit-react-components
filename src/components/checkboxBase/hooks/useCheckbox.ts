import { useState } from 'react';

interface ParamsType {
  initialChecked: boolean;
  disabled: boolean;
}

interface ReturnType {
  isChecked: boolean;
  handleToggleIsChecked: () => void;
}

export const useCheckbox = ({ disabled, initialChecked }: ParamsType): ReturnType => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggleIsChecked: () => void = () => {
    if (!disabled) {
      setIsChecked(!isChecked);
    }
  };

  return {
    handleToggleIsChecked,
    isChecked,
  };
};
