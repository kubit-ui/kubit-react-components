import { CustomTokenTypes } from '@/types/customToken/customToken';

import { DotSizePropsType, DotVariantStylesType } from './dotTheme';

/**
 * @interface IDotStyled
 * @extends {DotVariantStylesType}
 * @extends {DotSizePropsType}
 */
export interface IDotStyled {
  styles: DotVariantStylesType;
  sizeStyles: DotSizePropsType;
  $width?: string;
  $height?: string;
}

/**
 * @interface IDotStandAlone
 * @extends {IDotStyled}
 *
 */
export interface IDotStandAlone {
  styles: DotVariantStylesType;
  sizeStyles: DotSizePropsType;
  formatedNumber?: number | string;
  width?: string;
  height?: string;
  label?: string;
  dataTestId?: string;
}

/**
 * @interface IDot
 * @extends {Omit<IDotStandAlone, 'styles' | 'sizeStyles' | 'formatedNumber'>}
 * @template V
 * @template S
 */
export interface IDot<
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
> extends Omit<IDotStandAlone, 'styles' | 'sizeStyles' | 'formatedNumber'>,
    Omit<CustomTokenTypes<DotVariantStylesType, DotSizePropsType>, 'extraCt'> {
  variant: V;
  size: S;
  number?: number;
  maxNumber?: number;
  ref?: React.ForwardedRef<HTMLSpanElement> | undefined | null;
}
