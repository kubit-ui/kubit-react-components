import { SnackbarMessageType, SnackbarStylesType } from '@/components/snackbar/types';
import { TextDecorationType } from '@/components/text/types';
import { POSITIONS } from '@/types';

import { BORDERS, COLORS, FONT_WEIGHT, RADIUS, SHADOW, SIZES, SPACINGS } from '../../foundations';
import {
  ButtonSizeType,
  ButtonVariantType,
  LinkVariantType,
  PopoverVariantType,
  TextVariantType,
} from '../variants';
import { SnackbarVariant } from './variants';

const commonProps = {
  container: {
    padding: SPACINGS.spacing_300,
    border_radius: RADIUS.radius_50,
    border_style: 'solid',
    border_width: BORDERS.border_50,
    display: 'flex',
    gap: SPACINGS.spacing_100,
    align_items: 'flex-start',
    box_shadow: SHADOW.shadow_10,
  },
  iconTitleContainer: {
    display: 'flex',
    flex_direction: 'row',
    gap: SPACINGS.spacing_100,
  },
  icon: {
    width: SIZES.size_250,
    height: SIZES.size_250,
    color: COLORS.NEUTRAL.color_neutral_icon_50,
  },
  title: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_600,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  description: {
    font_variant: TextVariantType.PARAGRAPH_CAPTION_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  closeIcon: {
    color: COLORS.NEUTRAL.color_neutral_icon_50,
    width: SIZES.size_250,
    height: SIZES.size_250,
  },
  link: {
    variant: LinkVariantType.SECONDARY,
    decoration: TextDecorationType.UNDERLINE,
  },
};

export const SNACKBAR_STYLES: SnackbarStylesType<SnackbarVariant, SnackbarMessageType> = {
  [SnackbarVariant.DEFAULT]: {
    [SnackbarMessageType.ERROR]: {
      ...commonProps,
      container: {
        ...commonProps.container,
        background_color: COLORS.FEEDBACK.color_feedback_error_bg_50,
        border_color: COLORS.FEEDBACK.color_feedbackError_border_100,
      },
      popoverVariants: {
        [POSITIONS.TOP_CENTER_FIXED]: PopoverVariantType.SNACKBAR_TOP,
        [POSITIONS.BOTTOM_CENTER_FIXED]: PopoverVariantType.SNACKBAR_BOTTOM,
      },
    },
    [SnackbarMessageType.INFORMATIVE]: {
      ...commonProps,
      container: {
        ...commonProps.container,
        background_color: COLORS.FEEDBACK.color_feedback_info_bg_50,
        border_color: COLORS.FEEDBACK.color_feedbackInfo_border_100,
      },
      popoverVariants: {
        [POSITIONS.TOP_CENTER_FIXED]: PopoverVariantType.SNACKBAR_TOP,
        [POSITIONS.BOTTOM_CENTER_FIXED]: PopoverVariantType.SNACKBAR_BOTTOM,
      },
    },
    [SnackbarMessageType.SUCCESS]: {
      ...commonProps,
      container: {
        ...commonProps.container,
        background_color: COLORS.FEEDBACK.color_feedback_success_bg_50,
        border_color: COLORS.FEEDBACK.color_feedbackSuccess_border_100,
      },
      popoverVariants: {
        [POSITIONS.TOP_CENTER_FIXED]: PopoverVariantType.SNACKBAR_TOP,
        [POSITIONS.BOTTOM_CENTER_FIXED]: PopoverVariantType.SNACKBAR_BOTTOM,
      },
    },
    [SnackbarMessageType.WARNING]: {
      ...commonProps,
      container: {
        ...commonProps.container,
        background_color: COLORS.FEEDBACK.color_feedback_warning_bg_50,
        border_color: COLORS.FEEDBACK.color_feedbackWarning_border_100,
      },
      popoverVariants: {
        [POSITIONS.TOP_CENTER_FIXED]: PopoverVariantType.SNACKBAR_TOP,
        [POSITIONS.BOTTOM_CENTER_FIXED]: PopoverVariantType.SNACKBAR_BOTTOM,
      },
    },
  },
  [SnackbarVariant.TESTING_WITH_ACTION_BUTTON_VARIANT]: {
    [SnackbarMessageType.ERROR]: {
      ...commonProps,
      actionButton: {
        variant: ButtonVariantType.PRIMARY,
        size: ButtonSizeType.LARGE,
      },
    },
    [SnackbarMessageType.INFORMATIVE]: {
      ...commonProps,
      actionButton: {
        variant: ButtonVariantType.PRIMARY,
        size: ButtonSizeType.LARGE,
      },
    },
    [SnackbarMessageType.SUCCESS]: {
      ...commonProps,
      actionButton: {
        variant: ButtonVariantType.PRIMARY,
        size: ButtonSizeType.LARGE,
      },
    },
    [SnackbarMessageType.WARNING]: {
      ...commonProps,
      actionButton: {
        variant: ButtonVariantType.PRIMARY,
        size: ButtonSizeType.LARGE,
      },
    },
  },
};
