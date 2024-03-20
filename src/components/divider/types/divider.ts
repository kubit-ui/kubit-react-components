import { IElementOrIcon } from '@/components/elementOrIcon';
import { IText } from '@/components/text';
import { ITooltipUnControlled } from '@/components/tooltip/types';
import { CustomTokenTypes } from '@/types';

import { DividerEmbebed } from './dividerEmbebed';
import { DividerVariantStylesProps } from './dividerTheme';

export type DividerLabelsType = Omit<IText<string>, 'children'> & {
  content?: string;
};

export type DividerIconTooltipType = Omit<ITooltipUnControlled, 'children' | 'variant'> & {
  variant?: string;
};

/**
 * @name IDivider
 * @description
 * Interface for the Divider component

 */
export interface IDividerStandAlone {
  styles: DividerVariantStylesProps;
  icon?: IElementOrIcon;
  iconTooltip?: DividerIconTooltipType;
  leftIcon?: IElementOrIcon;
  leftLabel?: DividerLabelsType;
  rightLabel?: DividerLabelsType;
  leftSublabel?: DividerLabelsType;
  rightSublabel?: DividerLabelsType;
  dataTestId?: string;
  customComponent?: React.ReactNode;
  embebed?: DividerEmbebed;
}

/**
 * @name IDivider
 * @description
 * Interface for the Divider component
 * @property {string} variant - The variant of the divider
 * @property {DividerVariantStylesProps} styles - The styles of the divider
 * @property {string} dataTestId - The data test id of the divider
 */

export interface IDivider<V = undefined extends string ? unknown : string>
  extends Omit<IDividerStandAlone, 'styles'>,
    Omit<CustomTokenTypes<DividerVariantStylesProps>, 'cts' | 'extraCt'> {
  variant: V;
}
