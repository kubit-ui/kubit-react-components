import { useEffect, useState } from 'react';

export const useTooltipAsModalAriaLabel = (
  ref: React.RefObject<HTMLDivElement>
): string | undefined => {
  const [ariaLabel, setArialabel] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    setArialabel(ref.current.innerText);
  });

  return ariaLabel;
};
