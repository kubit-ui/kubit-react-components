import type { AriaAttributes } from 'react';

import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

export interface ScreenReaderOnlyProps extends DataAttributes {
  children?: React.ReactNode;
  id?: string;
  show?: boolean;
  ariaLive?: AriaAttributes['aria-live'];
  role?: React.AriaRole;
}
