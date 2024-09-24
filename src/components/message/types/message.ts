import * as React from 'react';

import { IButton } from '@/components/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IElementOrillustration } from '@/components/elementOrIllustration';
import { ILink, LinkTargetType } from '@/components/link';
import { ITag } from '@/components/tag';
import { IText } from '@/components/text';
import { GenericLinkType } from '@/provider/genericComponents';
import { AriaLiveOptionType, CustomTokenTypes, ROLES } from '@/types';

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
