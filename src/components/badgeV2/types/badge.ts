import { CustomTokenTypes } from '@/types/customToken/customToken';
import { ROLES } from '@/types/role/role';

import { IDot } from '../../dot/types/dot';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IText } from '../../text/types/text';
import { BadgeSizePropsType, BadgeVariantStylesType } from './badgeTheme';

export type BadgeLabelType = Omit<IText<string>, 'children'> & {
  content?: string;
};

type BadgeAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-controls' | 'aria-expanded' | 'aria-hidden'
>;

export interface IBadgeStandAlone extends BadgeAriaAttributes {
  styles: BadgeVariantStylesType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBadgeBlur?: React.FocusEventHandler<HTMLDivElement>;
  dot?: IDot;
  hasDot?: boolean;
  icon: IElementOrIcon;
  label?: BadgeLabelType;
  labelIcon?: IElementOrIcon;
  ariaLiveText?: string;
  dataTestId?: string;
  sizeStyles: BadgeSizePropsType;
  customDotTranslate?: string;
  role?: ROLES;
  active?: boolean;
}

type propsBadgeToOmit = 'styles' | 'sizeStyles' | 'iconStyles' | 'active';

/**
 * @description
 * interface for the badge
 * @interface IBadge
 * @template V
 * @template S
 * @property {V} variant - Variant of the badge.
 * @property {S} size - Size of the badge.
 */
export interface IBadge<
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
> extends Omit<IBadgeStandAlone, propsBadgeToOmit>,
    Omit<CustomTokenTypes<BadgeVariantStylesType, BadgeSizePropsType>, 'extraCt'> {
  variant: V;
  size: S;
}
