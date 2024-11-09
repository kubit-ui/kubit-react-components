import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IDot } from '../../dot/types/dot';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { ILink } from '../../link/types/link';
import { IText } from '../../text/types/text';
import { AvatarContentStylesType, AvatarSizeStylesType } from './avatarTheme';
import { AvatarBackgroundColor, AvatarContentType } from './content';

export type AvatarInitialsType = Omit<IText<string>, 'children'> & {
  content?: string;
};

export type AvatarLinkType = Omit<ILink, 'children'> & {
  content?: string;
};

type AvatarAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-describedby' | 'aria-hidden'
>;
/**
 * @description
 * interface for the action bottom sheet stand alone
 * @interface ActionBottomSheetProps
 * @template V
 */
export interface IAvatarStandAlone extends AvatarAriaAttributes {
  styles?: AvatarContentStylesType;
  dot?: IDot;
  image?: string;
  icon?: IElementOrIcon;
  initials?: AvatarInitialsType;
  link?: AvatarLinkType;
  contentType: AvatarContentType;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  backgroundColor?: AvatarBackgroundColor;
  dataTestId?: string;
  maxLengthInitials?: number;
}

/**
 * @description
 * interface for the action bottom sheet controlled
 * @interface ActionBottomSheetProps
 * @template V
 */
export interface IAvatar<S = undefined extends string ? unknown : string>
  extends Omit<IAvatarStandAlone, 'styles' | 'contentType'>,
    Omit<CustomTokenTypes<undefined, AvatarSizeStylesType>, 'ctv' | 'extraCt'> {
  size: S;
}
