import { CustomTokenTypes } from '@/types';

import { TextCountPropsStylesType } from './textCountTheme';

/**
 * @name ITextCountStyled
 * @description
 * Interface for the TextCountStyled component
 */
export interface ITextCountStyled {
  styles?: TextCountPropsStylesType;
}

/**
 *  @name ITextCountStandAlone
 * @description
 * Interface for the TextCountStandAlone component
 */
export interface ITextCountStandAlone extends ITextCountStyled {
  dataTestId?: string;
  maxLength: number;
  currentCharacters: number;
  id: string;
  screenReaderText: string;
  textVariant?: string;
  leftWeight?: number;
  rightWeight?: number;
  leftColor?: string;
  rightColor?: string;
  marginTop?: string;
}

/**
 * @name ITextCount
 * @description
 * Interface for the TextCount component
 */
export interface ITextCountControlled<V = undefined extends string ? unknown : string>
  extends Omit<ITextCountStandAlone, 'styles'>,
    Omit<CustomTokenTypes<TextCountPropsStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
