import { LoaderStylesPropsType } from './loaderTheme';

/**
 * @description
 * interface for the loader
 * @interface ILoaderStyled
 */
export interface ILoaderStyled {
  $width?: string;
  styles: LoaderStylesPropsType;
  position?: string;
}

type LoaderAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-describedby'
>;

/**
 * @description
 * interface for the loader
 * @interface ILoaderStandAlone
 */
export interface ILoaderStandAlone extends LoaderAriaAttributes {
  width?: string;
  styles: LoaderStylesPropsType;
  dataTestId?: string;
  altText?: string;
  position?: string;
}

/**
 * @description
 * interface for the loader
 * @interface ILoader
 */
export interface ILoader<V = undefined extends string ? unknown : string>
  extends Omit<ILoaderStandAlone, 'styles'> {
  variant: V;
}
