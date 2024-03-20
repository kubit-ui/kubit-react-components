import { useState } from 'react';

type ParamsType = {
  initialChecked: boolean;
  disabled: boolean;
};

type ReturnType = {
  isChecked: boolean;
  handleToggleIsChecked: () => void;
};

export const useCheckbox = ({ initialChecked, disabled }: ParamsType): ReturnType => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggleIsChecked: () => void = () => {
    if (!disabled) {
      setIsChecked(!isChecked);
    }
  };

  return {
    isChecked,
    handleToggleIsChecked,
  };
};
