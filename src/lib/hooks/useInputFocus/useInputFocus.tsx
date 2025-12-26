import { type RefObject, useState, useEffect } from 'react';

interface IUseFocus {
  inputRef: RefObject<HTMLInputElement>;
}

interface IUseFocusResponse {
  focused: boolean;
}

export const useInputFocus = ({ inputRef }: IUseFocus): IUseFocusResponse => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  useEffect(() => {
    inputRef.current?.addEventListener('focus', handleFocus);
    inputRef.current?.addEventListener('blur', handleBlur);

    return () => {
      inputRef.current?.removeEventListener('focus', handleFocus);
      inputRef.current?.removeEventListener('blur', handleBlur);
    };
  }, []);

  return {
    focused,
  };
};
