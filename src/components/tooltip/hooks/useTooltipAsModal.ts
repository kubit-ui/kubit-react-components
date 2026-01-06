import { useMemo } from 'react';

/**
 * Custom hook to determine if tooltip should behave as a modal.
 *
 * Priority order: prop value > theme value > false (default tooltip behavior).
 *
 * @param params - Configuration object
 * @param params.propTooltipAsModal - Tooltip as modal from props
 * @param params.styleTooltipAsModal - Tooltip as modal from theme
 * @returns Boolean indicating if tooltip should act as modal
 */
export const useTooltipAsModal = ({
  propTooltipAsModal,
  styleTooltipAsModal,
}: {
  propTooltipAsModal?: boolean;
  styleTooltipAsModal?: boolean;
}): boolean => {
  return useMemo(
    () => propTooltipAsModal ?? styleTooltipAsModal ?? false,
    [propTooltipAsModal, styleTooltipAsModal],
  );
};
