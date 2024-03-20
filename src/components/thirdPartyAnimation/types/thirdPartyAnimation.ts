// type
import { ThirdPartyAnimationThemePropsType } from './thirdPartyAnimationTheme';

/**
 * @name IThirdPartyAnimationStandAlone
 * @description
 * Interface for the ThirdPartyAnimation component
 */
export interface IThirdPartyAnimationStandAlone {
  ['aria-label']: string;
  dataTestId?: string;
  height: string;
  width: string;
}

/**
 * @name IThirdPartyAnimationStyled
 * @description
 * Interface for the ThirdPartyAnimation component
 */
export interface IThirdPartyAnimationStyled {
  $height: string;
  $width: string;
}

/**
 * @name IThirdPartyAnimation
 * @description
 * Interface for the ThirdPartyAnimation component
 */
export type IThirdPartyAnimation<V = undefined extends string ? unknown : string> =
  ThirdPartyAnimationThemePropsType<V>;
