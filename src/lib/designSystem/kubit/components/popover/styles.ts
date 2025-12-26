import type { PopoverStyleProps } from '@/components/popover/types/popoverTheme';

export const POPOVER: PopoverStyleProps = {
  _arrow: {
    position: 'absolute',
  },
  background: 'transparent',
  display: 'flex',
  flex_direction: 'column',
  max_height: 'var(--100dvh, 100vh)',
};
