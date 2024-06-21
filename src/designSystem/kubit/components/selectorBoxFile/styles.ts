import { IconPositionType } from '@/components/button';
import { SelectorBoxFileStateType, SelectorBoxFileStylesType } from '@/components/selectorBoxFile';
import { TextDecorationType } from '@/components/text';

// fundations
import { BORDERS, COLORS, FONT_WEIGHT, SPACINGS } from '../../foundations';
import { LoaderVariantType } from '../loader';
import { TextVariantType } from '../text';
import { TooltipVariantType } from '../tooltip';
import { ButtonSizeType, ButtonVariantType } from '../variants';
import { SelectorBoxFileVariantType } from './variants';

const defaultProps = {
  header: {
    display: 'flex',
    flex_direction: 'column',
    gap: SPACINGS.spacing_300,
  },
  titleSubtitleContainer: {
    display: 'flex',
    flex_direction: 'column',
    gap: SPACINGS.spacing_150,
  },
  title: {
    font_variant: TextVariantType.PARAGRAPH_LARGE_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_bg_50,
    font_weight: FONT_WEIGHT.font_weight_600,
  },
  subtitle: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_bg_50,
    font_weight: FONT_WEIGHT.font_weight_400,
  },
  descriptionContainer: {
    display: 'flex',
    flex_direction: 'column',
    align_items: 'baseline',
    gap: SPACINGS.spacing_150,
  },
  description: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_bg_50,
    font_weight: FONT_WEIGHT.font_weight_400,
  },
  button: {
    variant: ButtonVariantType.ACTION_SECONDARY,
    size: ButtonSizeType.SMALL,
    iconPosition: IconPositionType.LEFT,
  },
  tooltipIconContainer: {
    display: 'inline',
    margin_left: SPACINGS.spacing_100,
  },
  tooltip: {
    variant: TooltipVariantType.DEFAULT,
  },
  tooltipIcon: {
    width: SPACINGS.spacing_400,
    height: SPACINGS.spacing_400,
  },
  errorMessageContainer: {
    display: 'flex',
    flex_direction: 'row',
    align_items: 'start',
    gap: SPACINGS.spacing_100,
    margin_top: SPACINGS.spacing_150,
  },
  errorMessageIcon: {
    width: SPACINGS.spacing_300,
    height: SPACINGS.spacing_300,
  },
  errorMessage: {
    font_variant: TextVariantType.DEFAULT,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.FEEDBACK.color_feedbackError_font_50,
  },
};

const containerBoxCommonProps = {
  containerBoxContainer: {
    display: 'flex',
    flex_direction: 'row',
    align_items: 'center',
    padding: SPACINGS.spacing_450,
    gap: SPACINGS.spacing_300,
    cursor: 'pointer',
    border: `${BORDERS.border_50} dashed ${COLORS.SECONDARY.color_secondary_border_50}`,
  },
  containerBoxLoader: {
    variant: LoaderVariantType.PRIMARY_BLACK,
    width: SPACINGS.spacing_450,
  },
  containerBoxIcon: {
    width: SPACINGS.spacing_450,
    height: SPACINGS.spacing_450,
  },
  containerBoxTextsContainer: {
    display: 'flex',
    flex_direction: 'column',
  },
  containerBoxFilename: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_bg_50,
    font_weight: FONT_WEIGHT.font_weight_400,
  },
  containerActionContainer: {
    display: 'flex',
    flex_direction: 'row',
    justify_content: 'space-between',
  },
  actionIcon: {
    display: 'inline',
    margin_right: SPACINGS.spacing_350,
    width: SPACINGS.spacing_350,
    height: SPACINGS.spacing_350,
  },
  actionIconAndActionTextContainer: {
    display: 'flex',
    gap: SPACINGS.spacing_100,
  },
  containerBoxActionText: {
    display: 'flex',
    flex_direction: 'row',
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    text_decoration: TextDecorationType.UNDERLINE,
    padding_left: SPACINGS.spacing_150,
  },
  containerBoxDescription: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    font_weight: FONT_WEIGHT.font_weight_400,
    gap: SPACINGS.spacing_600,
  },
};

export const SELECTOR_BOX_FILE_STYLES: SelectorBoxFileStylesType<SelectorBoxFileVariantType> = {
  [SelectorBoxFileVariantType.DEFAULT]: {
    ...defaultProps,
    states: {
      [SelectorBoxFileStateType.DEFAULT]: {
        ...containerBoxCommonProps,
        containerBoxTextsContainer: {
          ...containerBoxCommonProps.containerBoxTextsContainer,
        },
        containerBoxActionText: {
          ...containerBoxCommonProps.containerBoxActionText,
          text_decoration: TextDecorationType.NONE,
        },
        containerBoxDescription: {
          ...containerBoxCommonProps.containerBoxDescription,
        },
      },
      [SelectorBoxFileStateType.LOADING]: {
        ...containerBoxCommonProps,
        containerBoxActionText: {
          ...containerBoxCommonProps.containerBoxActionText,
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
          color: COLORS.ACCENT.color_accent_default_font_100,
        },
      },
      [SelectorBoxFileStateType.SUCCESS]: {
        ...containerBoxCommonProps,
        containerBoxContainer: {
          ...containerBoxCommonProps.containerBoxContainer,
        },
        containerBoxIcon: {
          ...containerBoxCommonProps.containerBoxIcon,
        },
        containerBoxActionText: {
          ...containerBoxCommonProps.containerBoxActionText,
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
          color: COLORS.ACCENT.color_accent_default_font_100,
        },
        actionIcon: {
          ...containerBoxCommonProps.actionIcon,
        },
        actionIconAndActionTextContainer: {
          ...containerBoxCommonProps.actionIconAndActionTextContainer,
        },
      },
      [SelectorBoxFileStateType.ERROR]: {
        ...containerBoxCommonProps,
        containerBoxContainer: {
          ...containerBoxCommonProps.containerBoxContainer,
          border: `${BORDERS.border_50} dashed ${COLORS.SECONDARY.color_secondary_border_100}`,
        },
        containerBoxIcon: {
          ...containerBoxCommonProps.containerBoxIcon,
        },
        containerBoxActionText: {
          ...containerBoxCommonProps.containerBoxActionText,
          font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
          color: COLORS.ACCENT.color_accent_default_font_100,
        },
        actionIcon: {
          ...containerBoxCommonProps.actionIcon,
        },
        actionIconAndActionTextContainer: {
          ...containerBoxCommonProps.actionIconAndActionTextContainer,
        },
      },
      [SelectorBoxFileStateType.DISABLED]: {
        ...containerBoxCommonProps,
        containerBoxContainer: {
          ...containerBoxCommonProps.containerBoxContainer,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_150,
          border: `${BORDERS.border_50} dashed ${COLORS.DISABLED.color_accentDisabled_border_50}`,
        },
        containerBoxIcon: {
          ...containerBoxCommonProps.containerBoxIcon,
        },
        containerBoxFilename: {
          ...containerBoxCommonProps.containerBoxFilename,
        },
        containerBoxActionText: {
          ...containerBoxCommonProps.containerBoxActionText,
          text_decoration: TextDecorationType.NONE,
        },
        containerBoxDescription: {
          ...containerBoxCommonProps.containerBoxDescription,
        },
      },
    },
  },
};
