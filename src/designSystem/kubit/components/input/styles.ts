import { IconHighlightedSizeType } from '@/components/iconHighlighted/types';
import {
  InputHelpMessagePosition,
  InputState,
  InputStylesType,
  LABEL_TYPE,
} from '@/components/input/types';
import { DeviceBreakpointsType } from '@/types';

import {
  BORDERS,
  COLORS,
  FONT_WEIGHT,
  PARAGRAPH,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
} from '../../foundations';
import { LoaderVariantType } from '../loader/variants';
import { TextVariantType } from '../text';
import { ButtonSizeType, ButtonVariantType, IconHighlightedVariantType } from '../variants';
import { InputVariantType } from './variants';

const commonProps = {
  topContentContainer: {
    margin_bottom: SPACINGS.spacing_150,
  },
  label: {
    type: LABEL_TYPE.STANDARD,
    font_weight: FONT_WEIGHT.font_weight_500,
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  asterisk: {
    font_weight: FONT_WEIGHT.font_weight_500,
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    color: COLORS.BRAND.color_brand_font_50,
  },
  input: {
    font_weight: FONT_WEIGHT.font_weight_400,
    font_size: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].font_size,
    line_height: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].line_height,
  },
  inputContainer: {
    opacity: '1',
    padding: SPACINGS.spacing_250,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    border_width: BORDERS.border_50,
    border_color: COLORS.NEUTRAL.color_neutral_border_50,
    border_radius: SPACINGS.spacing_0,
    border_style: 'solid',
  },
  placeholder: {
    font_variant: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].font_size,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  helpMessage: {
    text_align: TEXT_ALIGN.left,
    font_weight: FONT_WEIGHT.font_weight_300,
    color: COLORS.NEUTRAL.color_neutral_font_100,
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
    position: InputHelpMessagePosition.BOTTOM,
  },
  informationAssociatedIconHightlight: {
    size: IconHighlightedSizeType.LARGE,
    color: COLORS.SECONDARY.color_secondary_bg_100,
    variant: IconHighlightedVariantType.ROUND,
  },
  helpMessageContainer: {
    margin_top: SPACINGS.spacing_100,
    padding: SPACINGS.spacing_0,
    padding_left: SPACINGS.spacing_0,
    display: 'flex',
    flex_direction: 'row',
    justify_content: 'space-between',
  },
  inputIcon: {
    color: COLORS.ACCENT.color_accent_default_icon_100,
    width: SIZES.size_250,
    height: SIZES.size_250,
  },
  inputIconContainer: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0%, -50%)',
    left: SPACINGS.spacing_250,
  },
  inputIconContainerRight: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0%, -50%)',
    left: 'auto',
    right: SPACINGS.spacing_250,
  },
  loaderContainer: {
    position: 'absolute',
    top: '50%',
    left: 'auto',
    right: '1.1rem',
    transform: 'translate(0%, -50%)',
  },
  loaderIcon: {
    width: SIZES.size_250,
    height: SIZES.size_250,
  },
  loaderVariant: LoaderVariantType.PRIMARY_RED,
};

const informationAssociatedProps = {
  informationAssociated: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    font_weight: FONT_WEIGHT.font_weight_400,
  },
  informationAssociatedContainer: {
    justify_content: 'space-between',
    align_items: 'flex-start',
    display: 'flex',
    background_color: COLORS.NEUTRAL.color_neutral_bg_200,
    padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
  },
  informationAssociatedIcon: {
    width: SIZES.size_250,
    height: SIZES.size_250,
    color: COLORS.NEUTRAL.color_neutral_icon_50,
  },
  informationAssociatedTextAndDecorativeContainer: {
    display: 'flex',
    gap: SPACINGS.spacing_150,
  },
};

const informationAssociatedErrorProps = {
  ...informationAssociatedProps,
  informationAssociatedIcon: {
    ...informationAssociatedProps.informationAssociatedIcon,
    color: COLORS.FEEDBACK.color_feedbackError_icon_100,
  },
  informationAssociatedButton: {
    variant: ButtonVariantType.ACTION_SECONDARY_ALT,
    size: ButtonSizeType.LARGE,
  },
};

const errorProps = {
  input: {
    ...commonProps.input,
    color: COLORS.FEEDBACK.color_feedbackError_font_50,
  },
  inputContainer: {
    ...commonProps.inputContainer,
    border_color: COLORS.FEEDBACK.color_feedbackError_border_100,
  },
  errorMessage: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXPANDED,
    font_weight: FONT_WEIGHT.font_weight_300,
    font_align: TEXT_ALIGN.left,
    color: COLORS.FEEDBACK.color_feedbackError_font_50,
  },
  errorMessageContainer: {
    display: 'flex',
    flex_direction: 'row',
    gap: SPACINGS.spacing_100,
    margin_top: SPACINGS.spacing_150,
    margin_bottom: SPACINGS.spacing_150,
    padding_left: SPACINGS.spacing_0,
  },
  errorMessageIcon: {
    width: SIZES.size_150,
    height: SIZES.size_150,
    color: COLORS.FEEDBACK.color_feedbackError_icon_100,
  },
  placeholder: {
    ...commonProps.placeholder,
    color: COLORS.FEEDBACK.color_feedbackError_font_50,
  },
};

const disabledCommonProps = {
  inputContainer: {
    ...commonProps.inputContainer,
    container_background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
    container_border_size: BORDERS.border_100,
    container_border_color: COLORS.DISABLED.color_accentDisabled_border_100,
  },
  input: {
    color: COLORS.DISABLED.color_accentDisabled_font_50,
  },
  label: {
    ...commonProps.label,
    color: COLORS.DISABLED.color_accentDisabled_font_50,
  },
  placeholder: {
    ...commonProps.placeholder,
    color: COLORS.DISABLED.color_accentDisabled_font_50,
  },
  helpMessage: {
    ...commonProps.helpMessage,
    color: COLORS.DISABLED.color_accentDisabled_font_50,
  },
  inputIcon: {
    ...commonProps.inputIcon,
    color: COLORS.DISABLED.color_accentDisabled_icon_50,
  },
};

export const INPUT_STYLES: InputStylesType<InputVariantType> = {
  [InputVariantType.DEFAULT]: {
    [InputState.EMPTY]: {
      ...commonProps,
    },
    [InputState.ACTIVE]: {
      ...commonProps,
      inputContainer: {
        ...commonProps.inputContainer,
        border_width: BORDERS.border_100,
      },
    },
    [InputState.FILLED]: {
      ...commonProps,
      ...informationAssociatedProps,
    },
    [InputState.ERROR_EMPTY]: {
      ...commonProps,
      ...errorProps,
    },
    [InputState.ERROR_FILLED]: {
      ...commonProps,
      ...errorProps,
    },
    [InputState.ERROR_ACTIVE]: {
      ...commonProps,
      ...errorProps,
      inputContainer: {
        ...errorProps.inputContainer,
        border_width: BORDERS.border_100,
      },
    },
    [InputState.ERROR_FILLED_WITH_INFO]: {
      ...commonProps,
      ...informationAssociatedErrorProps,
    },
    [InputState.DISABLED_FILLED]: {
      ...commonProps,
      ...disabledCommonProps,
    },
    [InputState.DISABLED_EMPTY]: {
      ...commonProps,
      ...disabledCommonProps,
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...commonProps,
      ...disabledCommonProps,
      ...informationAssociatedProps,
    },
  },
};
