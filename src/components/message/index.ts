export type {
  IMessageStandAlone,
  IMessageControlled,
  IMessageUnControlled,
  MessageActionButtonType,
  MessageExtraActionButtonType,
  MessageContentType,
  MessageTitleType,
  MessageTagType,
  MessageLinkType,
  MessagePropsThemeType,
  MessageStylesType,
  MessageContainerAsLinkType,
} from './types';

export { MessageControlled } from './messageControlled';
export { MessageUnControlled as Message } from './messageUnControlled';
export { ParentContainerStyled as MessageStyled } from './message.styled';
