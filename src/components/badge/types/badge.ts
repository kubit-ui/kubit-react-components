import { IDot } from '@/components/dot';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IPopoverControlled } from '@/components/popover';
import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';

import { BadgeSizePropsType, BadgeStatusIcon, BadgeVariantStylesType } from './badgeTheme';

export type BadgeLabelType = Omit<IText<string>, 'children'> & {
  content?: string;
};

export type BadgePopoverType = Omit<IPopoverControlled, 'children'> & {
  content: JSX.Element;
};

export interface IBadgeStandAlone {
  styles: BadgeVariantStylesType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onBadgeBlur: React.FocusEventHandler<HTMLDivElement>;
  dot?: IDot;
  hasDot?: boolean;
  icon: IElementOrIcon;
  label?: BadgeLabelType;
  labelIcon?: IElementOrIcon;
  open: boolean;
  ['aria-label']: string;
  ariaLiveText?: string;
  dataTestId?: string;
  sizeStyles: BadgeSizePropsType;
  iconStyles?: BadgeStatusIcon;
  customDotTranslate?: string;
  popover: BadgePopoverType;
}

type propsBadgeControlledToOmit = 'styles' | 'sizeStyles' | 'iconStyles';

/**
 * @description
 * interface for the badge controlled
 * @interface IBadgeControlled
 * @template V
 * @template S
 * @property {V} variant - Variant of the badge.
 * @property {S} size - Size of the badge.
 */
export interface IBadgeControlled<
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
> extends Omit<IBadgeStandAlone, propsBadgeControlledToOmit>,
    Omit<CustomTokenTypes<BadgeVariantStylesType, BadgeSizePropsType>, 'extraCt'> {
  variant: V;
  size: S;
}

type propsBadgeUnControlledToOmit = 'open' | 'onClick' | 'onPopoverCloseInternally' | 'onBadgeBlur';

/**
 * @description
 * interface for the badge uncontrolled
 * @interface IBadgeUnControlled
 * @template V
 * @template S
 * @property {V} variant - Variant of the badge.
 * @property {S} size - Size of the badge.
 */
export interface IBadgeUnControlled<
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
> extends Omit<IBadgeControlled<V, S>, propsBadgeUnControlledToOmit> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type DotUseStateType = {
  dotWidth: number;
  dotHeight: number;
};
