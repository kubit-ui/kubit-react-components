import { useState } from 'react';

interface ParamsType {
  initialChecked: boolean;
  disabled: boolean;
}

interface ReturnType {
  isChecked: boolean;
  handleToggleIsChecked: () => void;
}

/**
 * Custom hook for managing checkbox checked state.
 *
 * @param params - Configuration object
 * @param params.initialChecked - Initial checked state
 * @param params.disabled - Whether the checkbox is disabled
 * @returns Object with checked state and toggle handler
 */
export const useCheckbox = ({
  disabled,
  initialChecked,
}: ParamsType): ReturnType => {
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
