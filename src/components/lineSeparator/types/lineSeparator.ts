import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';

import {
  LineSeparatorLabelPropsStylesType,
  LineSeparatorLinePropsStylesType,
} from './lineSeparatorTheme';

/**
 * @description
 * interface for the lineSeparator
 * @interface ILineSeparatorLabelStyled
 * @extends {LineSeparatorLabelPropsStylesType}
 */
export interface ILineSeparatorLabelStyled {
  styles: LineSeparatorLabelPropsStylesType;
}

/**
 * @description
 * interface for the lineSeparator
 * @interface ILineSeparatorLineStyled
 */
export interface ILineSeparatorLineStyled {
  styles: LineSeparatorLinePropsStylesType;
}

export type LineSeparatorLabelType = Omit<IText<string>, 'children'> & {
  content?: string;
};

/**
 * @description
 * interface for the lineSeparator
 * @interface ILineSeparatorStandAlone
 */
export interface ILineSeparatorStandAlone {
  labelStyles: LineSeparatorLabelPropsStylesType | undefined;
  lineStyles: LineSeparatorLinePropsStylesType;
  label?: LineSeparatorLabelType;
  dataTestId?: string;
  externalNodeTag?: React.ElementType;
  internalNodeTag?: React.ElementType;
}

/**
 * @description
 * interface for the lineSeparator
 * @interface ILineSeparator
 * @template V
 * @template S
 * @interface ILineSeparator
 * @extends {Omit<ILineSeparatorStandAlone, 'lineStyles' | 'labelStyles'>}
 */
export interface ILineSeparator<
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
> extends Omit<ILineSeparatorStandAlone, 'lineStyles' | 'labelStyles'>,
    Omit<
      CustomTokenTypes<
        LineSeparatorLabelPropsStylesType,
        undefined,
        LineSeparatorLinePropsStylesType
      >,
      'cts'
    > {
  labelVariant?: V;
  lineVariant: S;
}
