import type { TooltipMainContentType } from '../types/tooltip';

interface MainContentAccessibility {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  role?: string;
  tabIndex?: number;
}

export const getMainContentAccessibility = (
  mainContent: TooltipMainContentType,
  contentHasScroll = false,
): MainContentAccessibility => {
  return {
    'aria-label': contentHasScroll
      ? mainContent?.scrollableAccessibility?.['aria-label']
      : undefined,
    'aria-labelledby': contentHasScroll
      ? mainContent?.scrollableAccessibility?.['aria-labelledby']
      : undefined,
    role: mainContent?.role ?? (contentHasScroll ? 'region' : undefined),
    tabIndex: mainContent?.tabIndex ?? (contentHasScroll ? 0 : undefined),
  };
};
