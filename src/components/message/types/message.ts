import { ReactNode } from 'react';

import { IButton } from '@/components/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IElementOrillustration } from '@/components/elementOrIllustration';
import { ITag } from '@/components/tag';
import { IText } from '@/components/text';
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
  content: string | ReactNode;
};

export type MessageTitleType = Omit<IText<string>, 'children'> & {
  content: string;
};

export type MessageTagType = Omit<ITag, 'children'> & {
  content: string;
};

export interface IMessageStandAlone {
  illustration?: IElementOrillustration;
  infoIcon?: IElementOrIcon;
  actionButton?: MessageActionButtonType;
  extraActionButton?: MessageExtraActionButtonType;
  content: MessageContentType;
  title?: MessageTitleType;
  tag?: MessageTagType;
  ariaMessageId?: string;
  closeIcon?: IElementOrIcon;
  dataTestId?: string;
  maxContentLength?: number;
  open: boolean;
  styles: MessagePropsThemeType;
  role?: ROLES.STATUS | ROLES.ALERT;
  id?: string;
  ariaLive?: AriaLiveOptionType;
}

export interface IMessageControlled<V = undefined extends string ? unknown : string>
  extends Omit<IMessageStandAlone, 'styles'>,
    Omit<CustomTokenTypes<MessagePropsThemeType>, 'cts' | 'extraCt'> {
  open: boolean;
  variant: V;
}

export interface IMessageUnControlled<V = undefined extends string ? unknown : string>
  extends Omit<IMessageControlled<V>, 'open' | 'onClose'> {
  defaultOpen?: boolean;
}
