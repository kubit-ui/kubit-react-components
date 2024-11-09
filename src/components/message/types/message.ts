import React from 'react';

import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';
import { CustomTokenTypes } from '@/types/customToken/customToken';
import { ROLES } from '@/types/role/role';

import { GenericLinkType } from '../../../provider/genericComponents/genericComponents.type';
import { IButton } from '../../button/types/button';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IElementOrillustration } from '../../elementOrIllustration/types/elementOrIllustration';
import { ILink } from '../../link/types/link';
import { LinkTargetType } from '../../link/types/target';
import { ITag } from '../../tag/types/tag';
import { IText } from '../../text/types/text';
import { MessagePropsThemeType } from './messageTheme';

export type MessageActionButtonType = Omit<IButton, 'children' | 'size'> & {
  content?: React.ReactNode;
  size?: string;
};

export type MessageExtraActionButtonType = Omit<IButton, 'children'> & {
  content?: React.ReactNode;
};

export type MessageContentType = Omit<IText<string>, 'children'> & {
  content: React.ReactNode;
};

export type MessageTitleType = Omit<IText<string>, 'children'> & {
  content: React.ReactNode;
};

export type MessageTagType = Omit<ITag, 'children'> & {
  content: string;
};

export type MessageLinkType = Omit<ILink, 'children'> & {
  content?: string;
};

export type MessageContainerAsLinkType = {
  onClick?: () => void;
  url?: string;
  target?: LinkTargetType;
};

export interface IMessageStandAlone {
  illustration?: IElementOrillustration;
  linkComponent: GenericLinkType;
  messageContainerProps?: MessageContainerAsLinkType;
  titleAndContentContainerProps?: MessageContainerAsLinkType;
  titleAndContentRole?: ROLES;
  infoIcon?: IElementOrIcon;
  actionButton?: MessageActionButtonType;
  extraActionButton?: MessageExtraActionButtonType;
  content: MessageContentType;
  inlineLink?: MessageLinkType;
  title?: MessageTitleType;
  tag?: MessageTagType;
  ariaMessageId?: string;
  closeIcon?: IElementOrIcon;
  dataTestId?: string;
  maxContentLength?: number;
  open: boolean;
  styles: MessagePropsThemeType;
  role?: ROLES;
  id?: string;
  ariaLive?: AriaLiveOptionType;
  /**
   * @deprecated Use the new prop "links"
   */
  link?: MessageLinkType;
  links?: MessageLinkType[];
}

export interface IMessageControlled<V = undefined extends string ? unknown : string>
  extends Omit<IMessageStandAlone, 'styles' | 'linkComponent'>,
    Omit<CustomTokenTypes<MessagePropsThemeType>, 'cts' | 'extraCt'> {
  open: boolean;
  variant: V;
}

export interface IMessageUnControlled<V = undefined extends string ? unknown : string>
  extends Omit<IMessageControlled<V>, 'open' | 'onClose'> {
  defaultOpen?: boolean;
}
