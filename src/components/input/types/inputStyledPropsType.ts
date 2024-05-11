import { InputStateProps, InputStylesProps } from './input';
import { InputIconPosition, InputState, LABEL_TYPE } from './inputTheme';

export type TitleStyledProps = {
  $titleStyles?: InputStateProps;
};

export type LabelStyledProps = {
  marginLeft?: string;
  styles?: InputStateProps;
  $placeholder?: string;
  $maxLabelSize?: string;
  state?: InputState;
  leftExtraStyles?: boolean;
  topExtraStyles?: boolean;
};

export type InformationAssociatedStyledProps = {
  iconPosition?: InputIconPosition;
  styles?: InputStateProps;
};

export type ErrorMessageStyledProps = {
  styles?: InputStateProps;
};

export type HelpMessageStyledProps = {
  styles?: InputStateProps;
  align?: string;
};

export type TextCounterStyledProps = {
  $marginRight?: string;
};

export type LoaderStyledProps = {
  loading?: boolean;
  styles?: InputStateProps;
};

export type InputIconStyledProps = {
  iconPosition?: InputIconPosition;
  styles?: InputStateProps;
};

// Input
export type TopContentWrapperStyledProps = {
  styles?: InputStateProps;
};

export type InputStyledProps = {
  state: InputState;
  styles?: InputStylesProps;
  cursorPointer?: string;
  icon?: JSX.Element | HTMLElement | React.ReactNode | string;
  iconPosition?: InputIconPosition;
  labelType?: LABEL_TYPE;
  placeholder?: string;
};

export type InputWrapperStyledProps = {
  iconPosition?: InputIconPosition;
  styles?: InputStateProps;
  labelType?: LABEL_TYPE;
};
