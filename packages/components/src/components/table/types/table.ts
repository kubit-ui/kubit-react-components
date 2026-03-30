import type { AriaAttributes, ComponentType } from 'react';

import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type TableCssClasses = ComponentSelected<ComponentsTypesComponents['TABLE']>;

export interface TableStandAloneProps
  extends
    Pick<AriaAttributes, 'aria-label' | 'aria-labelledby' | 'aria-hidden'>,
    DataAttributes {
  cssClasses?: TableCssClasses;
  hasScrollDisabled?: boolean;
  hasScroll?: boolean;
  sticky?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | ComponentType<any>;
}

export interface TableProps extends Omit<TableStandAloneProps, 'hasScroll'> {
  variant?: string;
  autoRightStickyCalc?: boolean;
  autoLeftStickyCalc?: boolean;
  disableShadowEffects?: boolean;
  additionalClasses?: Partial<TableCssClasses>;
}
