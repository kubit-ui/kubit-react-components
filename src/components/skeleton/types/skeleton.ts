import { CustomTokenTypes } from '@/types';

import { SkeletonShapeStylesType, SkeletonVariantStylesType } from './skeletonTheme';

type SkeletonAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-describedby'
>;

/**
 * @description
 * Skeleton component props
 * @property {string} width - width of the skeleton
 * @property {string} height - height of the skeleton
 * @property {string} duration - duration of the skeleton animation
 * @property {SkeletonVariantStylesType} styles - styles of the skeleton
 * @property {string} dataTestId - data test id of the skeleton
 * @property {string} variant - variant of the skeleton
 *
 */
export interface ISkeletonStandAlone extends SkeletonAriaAttributes {
  width: string;
  height: string;
  duration?: string;
  styles?: SkeletonVariantStylesType;
  dataTestId?: string;
}

/**
 * @description
 * Skeleton component props
 */
export interface ISkeleton<V = undefined extends string ? unknown : string>
  extends Omit<ISkeletonStandAlone, 'styles'>,
    Omit<CustomTokenTypes<SkeletonShapeStylesType>, 'cts' | 'extraCt'> {
  variant: string;
  shapeVariant: V;
}
