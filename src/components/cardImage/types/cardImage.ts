import type { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { LinkProps } from '../../link/types/link';

type CardImageCssClasses = ComponentSelected<
  ComponentsTypesComponents['CARD_IMAGE']
>;

/**
 * Represents the type for responsive images based on device breakpoints.
 */
interface CardImageResponsiveImages {
  [DEVICE_BREAKPOINTS.DESKTOP]: string;
  [DEVICE_BREAKPOINTS.MOBILE]: string;
  [DEVICE_BREAKPOINTS.TABLET]: string;
}

/**
 * Represents the type for a link within the CardImage component.
 * Extends the LinkProps interface and includes content.
 */
export type CardImageLinkProps = Omit<LinkProps, 'children'> & {
  content: string;
};

/**
 * Interface for the standalone CardImage component.
 * Includes responsive images, title, description, optional link, and CSS classes.
 */
export interface CardImageStandAloneProps extends DataAttributes {
  image: CardImageResponsiveImages;
  title: CommonTextProps;
  description?: CommonTextProps;
  link?: CardImageLinkProps;
  device: string;
  imageAltText?: string;
  component?: string | React.ElementType;
  onClick?: React.MouseEventHandler;
  cssClasses?: CardImageCssClasses;
}

/**
 * Interface for the CardImage component with a variant.
 * Extends the CardImageStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the CardImage.
 */
export interface CardImageProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<CardImageStandAloneProps, 'device'> {
  variant?: Variant;
  additionalClasses?: CardImageCssClasses;
}
