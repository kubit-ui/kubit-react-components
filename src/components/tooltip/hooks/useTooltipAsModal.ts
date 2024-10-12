import { useMemo } from 'react';

// Order to get the value:
// 1st: We get by props the value
// 2nd: We get by theme the value
// 3rd: We dont get nothing, then We return false and tooltip acts like a tooltip
export const useTooltipAsModal = ({
  propTooltipAsModal,
  styleTooltipAsModal,
}: {
  propTooltipAsModal?: boolean;
  styleTooltipAsModal?: boolean;
}): boolean => {
  return useMemo(
    () => propTooltipAsModal ?? styleTooltipAsModal ?? false,
    [propTooltipAsModal, styleTooltipAsModal]
  );
};
