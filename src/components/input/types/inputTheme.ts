import { IconHighlightedSizeType } from '@/components/iconHighlighted/types/size';
import { CommonStyleType, DeviceBreakpointsType, IconTypes, TypographyTypes } from '@/types';
import { POSITIONS } from '@/types/positions';

// enums
export enum InputState {
  EMPTY = 'EMPTY',
  ACTIVE = 'ACTIVE',
  FILLED = 'FILLED',
  ERROR_EMPTY = 'ERROR_EMPTY',
  ERROR_FILLED = 'ERROR_FILLED',
  ERROR_FILLED_WITH_INFO = 'ERROR_FILLED_WITH_INFO',
  ERROR_ACTIVE = 'ERROR_ACTIVE',
  DISABLED_FILLED = 'DISABLED_FILLED',
  DISABLED_EMPTY = 'DISABLED_EMPTY',
  DISABLED_FILLED_WITH_INFO = 'DISABLED_FILLED_WITH_INFO',
}

export enum LABEL_TYPE {
  STANDARD = 'STANDARD',
  OUTLINED = 'OUTLINED',
  FILLED = 'FILLED',
}

export enum InputHelpMessagePosition {
  TOP = POSITIONS.TOP,
  BOTTOM = POSITIONS.BOTTOM,
}

export enum InputIconPosition {
  RIGHT = POSITIONS.RIGHT,
  LEFT = POSITIONS.LEFT,
}

export enum InputContentPosition {
  INNER = 'INNER',
  OUT = 'OUT',
}

export type InputBasicStateProps = {
  inputWrapperContainer?: CommonStyleType;
  topContentContainer?: CommonStyleType;
  input?: TypographyTypes;
  inputContainer?: CommonStyleType;
  inputIcon?: IconTypes;
  inputIconContainer?: CommonStyleType;
  inputIconContainerRight?: CommonStyleType;
  label?: TypographyTypes & {
    type?: LABEL_TYPE;
  };
  labelContainer?: CommonStyleType;
  placeholder?: TypographyTypes;
  asterisk?: TypographyTypes;
  loader?: TypographyTypes;
  loaderContainer?: CommonStyleType;
  loaderIcon?: IconTypes;
  loaderVariant?: string;
  title?: TypographyTypes;
  titleContainer?: CommonStyleType;
  informationAssociated?: TypographyTypes;
  informationAssociatedTextAndDecorativeContainer?: CommonStyleType;
  informationAssociatedContainer?: CommonStyleType;
  informationAssociatedIcon?: IconTypes;
  informationAssociatedIconHightlight?: {
    variant: string;
    color: string;
    size: IconHighlightedSizeType;
    backgroundColor?: string;
  };
  informationAssociatedIconHightlightContainer?: CommonStyleType;
  informationAssociatedButton?: {
    variant: string;
    size: string;
  };
  informationAssociatedButtonContainer?: CommonStyleType;
  errorMessage?: TypographyTypes;
  errorMessageContainer?: CommonStyleType;
  errorMessageIcon?: IconTypes;
  errorMessageIconContainer?: CommonStyleType;
  helpMessage?: TypographyTypes & {
    position?: InputHelpMessagePosition;
  };
  helpMessageContainer?: CommonStyleType;
  inputCaretColor?: { [key in DeviceBreakpointsType]?: string };
};

export type InputBasicStylesProps = {
  [state in InputState]?: InputBasicStateProps;
};

export type InputStylesType<V extends string | number | symbol> = {
  [variant in V]: InputBasicStylesProps;
};
