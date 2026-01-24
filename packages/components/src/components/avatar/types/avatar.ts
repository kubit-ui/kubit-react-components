import type {
  GenericLinkProps,
  GenericLinkType,
} from '@/lib/provider/genericComponentsProvider/types/genericComponentsProvider';
import type { CommonIconProps } from '@/lib/types/commons/icon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { DotProps } from '../../dot/types/dot';
import type { AvatarBackgroundColor, AvatarContentType } from './content';

type AvatarCssClasses = ComponentSelected<ComponentsTypesComponents['AVATAR']>;

export type AvatarLinkProps = Pick<
  GenericLinkProps,
  'role' | 'target' | 'url' | 'onClick'
>;

type AvatarAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-describedby' | 'aria-hidden'
>;

/**
 * Props for the standalone Avatar component.
 * This component is self-contained and does not depend on external state.
 */
export interface AvatarStandAloneProps
  extends AvatarAriaAttributes, DataAttributes {
  dot?: DotProps;
  image?: string;
  icon?: CommonIconProps;
  initials?: CommonTextProps;
  link?: AvatarLinkProps;
  linkComponent: GenericLinkType;
  contentType: AvatarContentType;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  backgroundColor?: AvatarBackgroundColor;
  maxLengthInitials?: number;
  cssClasses?: AvatarCssClasses;
}

/**
 * Props for the Avatar component, which extends the standalone avatar with additional options.
 * @template Size - Optional size type for the avatar.
 */
export interface AvatarProps<Size = string> extends Omit<
  AvatarStandAloneProps,
  'contentType' | 'linkComponent'
> {
  size?: Size;
  additionalClasses?: Partial<AvatarCssClasses>;
}
