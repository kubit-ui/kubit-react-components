import { CSSProp } from 'styled-components';

/**
 * @name IInputStructure
 * @description
 * interface for the input structure
 * @interface IInputStructure
 */
export interface IInputStructure {
  topContent?: string | JSX.Element;
  topExtraStyles?: CSSProp;
  leftContent?: string | JSX.Element;
  leftExtraStyles?: CSSProp;
  bottomContent?: string | JSX.Element;
  bottomExtraStyles?: CSSProp;
  rightContent?: string | JSX.Element;
  rightExtraStyles?: CSSProp;
  centerContent: string | JSX.Element;
  centerExtraStyles?: CSSProp;
  onBlurStructure?: React.FocusEventHandler<HTMLDivElement>;
  onFocusStructure?: React.FocusEventHandler<HTMLDivElement>;
  dataTestIdParentContainer?: string;
}
