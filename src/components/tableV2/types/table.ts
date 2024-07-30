import { CustomTokenTypes } from '@/types';

import { TablePropsStylesTypeV2 } from './tableTheme';

type TableScrollAriasType = {
  ['aria-label']?: string;
  ['aria-labelledby']?: string;
};

export interface ITableStandAloneV2 extends TableScrollAriasType {
  styles?: TablePropsStylesTypeV2;
  hasScrollDisabled?: boolean;
  hasScroll?: boolean;
  sticky?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: string | React.ComponentType<any>;
  dataTestId?: string;
}

export interface ITableV2
  extends Omit<ITableStandAloneV2, 'styles' | 'hasScroll'>,
    Omit<CustomTokenTypes<TablePropsStylesTypeV2>, 'cts' | 'extraCt'> {
  variant?: string;
  autoRightStickyCalc?: boolean;
  autoLeftStickyCalc?: boolean;
  disableShadowEffects?: boolean;
}
