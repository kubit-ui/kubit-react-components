import type { ListDaysStateType } from './state';

export interface ListStyleProps {
  labelFontColor?: string;
  labelFontSize?: string;
  labelFontWeight?: number;
  labelFontAlign?: string;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  radiusSize?: string;
  backgroundColor?: string;
  gapDays?: string;
}

export type ListVariantStyles<Variant extends ListDaysStateType> = {
  [key in Variant]?: ListStyleProps;
};

export type ListCssClasses = ListVariantStyles<ListDaysStateType>;
