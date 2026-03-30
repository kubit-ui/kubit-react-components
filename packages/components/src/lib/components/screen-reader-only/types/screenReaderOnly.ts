import type { AriaAttributes } from 'react';

import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

export interface ScreenReaderOnlyStandAloneProps extends DataAttributes {
  ariaAtomic?: AriaAttributes['aria-atomic'];
  ariaLive?: AriaAttributes['aria-live'];
  children?: React.ReactNode;
  className?: string;
  id?: string;
  role?: React.AriaRole;
}

export type ScreenReaderOnlyProps = ScreenReaderOnlyStandAloneProps;
