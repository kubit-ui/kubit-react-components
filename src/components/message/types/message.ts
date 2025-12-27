import type { AriaAttributes, AriaRole } from 'react';

import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';
import type { GenericLinkType } from '@/lib/provider/genericComponentsProvider/types/genericComponentsProvider';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { ButtonProps } from '../../button/types/button';
import type { LinkProps } from '../../link/types/link';
import type { TagProps } from '../../tag/types/tag';

type MessageCssClasses = ComponentSelected<
  ComponentsTypesComponents['MESSAGE']
>;

/**
 * Represents the type for the action button in the Message component.
 */
export type MessageActionButtonProps = Omit<
  ButtonProps,
  'children' | 'size'
> & {
  content?: React.ReactNode;
  size?: string;
};

/**
 * Represents the type for the extra action button in the Message component.
 */
export type MessageExtraActionButtonProps = Omit<ButtonProps, 'children'> & {
  content?: React.ReactNode;
};

/**
 * Represents the type for the tag in the Message component.
 */
export type MessageTagProps = Omit<TagProps, 'children'> & {
  content: string;
};

/**
 * Represents the type for the link in the Message component.
 */
export type MessageLinkProps = Omit<LinkProps, 'children'> & {
  content?: string;
};

/**
 * Represents the type for the container as a link in the Message component.
 */
export interface MessageContainerAsLinkProps {
  onClick?: () => void;
  url?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

/**
 * Interface for the standalone Message component.
 * Includes properties for icons, buttons, links, tags, and CSS classes.
 */
export interface MessageStandAloneProps extends DataAttributes {
  linkComponent: GenericLinkType;
  messageContainerProps?: MessageContainerAsLinkProps;
  titleAndContentContainerProps?: MessageContainerAsLinkProps;
  titleAndContentRole?: AriaRole;
  infoIcon?: ElementOrIconProps;
  actionButton?: MessageActionButtonProps;
  extraActionButton?: MessageExtraActionButtonProps;
  content: CommonTextProps;
  inlineLink?: MessageLinkProps;
  title?: CommonTextProps;
  tag?: MessageTagProps;
  ariaMessageId?: string;
  closeIcon?: ElementOrIconProps;
  maxContentLength?: number;
  open: boolean;
  role?: React.AriaRole;
  id?: string;
  ariaLive?: AriaAttributes['aria-live'];
  links?: MessageLinkProps[];
  cssClasses?: MessageCssClasses;
}

/**
 * Interface for the controlled Message component.
 * Extends the MessageStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Message.
 */
export interface MessageProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<MessageStandAloneProps, 'linkComponent'> {
  open: boolean;
  variant?: Variant;
  additionalClasses?: Partial<MessageCssClasses>;
}

/**
 * Interface for the uncontrolled Message component.
 * Extends the MessageProps interface and omits specific properties.
 *
 * @template Variant - The type of the variant for the Message.
 */
export interface MessageUnControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<MessageProps<Variant>, 'open'> {
  defaultOpen?: boolean;
}
