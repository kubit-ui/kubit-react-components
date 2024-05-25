import { IconHighlightedSizeType } from '@/components/iconHighlighted/types';
import {
  InputHelpMessagePosition,
  InputState,
  InputStylesType,
  LABEL_TYPE,
} from '@/components/input/types';
import { LoaderVariantType } from '@/designSystem/kubit/components/variants';
import { DeviceBreakpointsType } from '@/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import {
  BORDERS,
  FONT_WEIGHT,
  PARAGRAPH,
  RADIUS,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
} from '../../foundations';
import { IconHighlightedVariantType, TextVariantType } from '../variants';
import { InputVariantType } from './variants';

const commonProps = COLORS => ({
  label: {
    type: LABEL_TYPE.STANDARD,
    font_weight: FONT_WEIGHT.font_weight_500,
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  input: {
    font_weight: FONT_WEIGHT.font_weight_400,
    font_size: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].font_size,
    line_height: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].line_height,
  },
  inputWrapperContainer: {
    ...transformShadow(RADIUS.radius_300),
    ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
  },
  inputContainer: {
    opacity: '1',
    padding_left: SPACINGS.spacing_50,
    padding: SPACINGS.spacing_250,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    border_width: BORDERS.border_50,
    border_color: COLORS.NEUTRAL.color_neutral_border_50,
    border_radius: RADIUS.radius_300,
    border_style: 'solid',
  },
  placeholder: {
    font_variant: PARAGRAPH.SMALL[DeviceBreakpointsType.DESKTOP].font_size,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  helpMessage: {
    font_align: TEXT_ALIGN.left,
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
    color: COLORS.NEUTRAL.color_neutral_icon_50,
    width: SIZES.size_250,
    height: SIZES.size_250,
  },
  inputIconContainer: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0%, -50%)',
    left: '0.625rem',
  },
  inputIconContainerRight: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0%, -50%)',
    left: 'auto',
    right: '1.1rem',
  },
  loaderIcon: {
    width: SIZES.size_250,
    height: SIZES.size_250,
  },
  loaderVariant: LoaderVariantType.PRIMARY_WHITE,
});

const informationAssociatedProps = COLORS => ({
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
    margin_top: SPACINGS.spacing_150,
    ...transformShadow(RADIUS.radius_300),
    ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
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
});

export const getInputStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): InputStylesType<InputVariantType> => {
  return {
    [InputVariantType.DEFAULT]: {
      [InputState.EMPTY]: {
        ...commonProps(COLORS),
      },
      [InputState.ACTIVE]: {
        ...commonProps(COLORS),
      },
      [InputState.FILLED]: {
        ...commonProps(COLORS),
        ...informationAssociatedProps(COLORS),
      },
      [InputState.ERROR_EMPTY]: {
        ...commonProps(COLORS),
        errorMessageContainer: {
          margin_top: SPACINGS.spacing_150,
        },
      },
      [InputState.ERROR_FILLED]: {
        ...commonProps(COLORS),
        errorMessageContainer: {
          margin_top: SPACINGS.spacing_150,
        },
      },
      [InputState.ERROR_ACTIVE]: {
        ...commonProps(COLORS),
        errorMessageContainer: {
          margin_top: SPACINGS.spacing_150,
        },
      },
      [InputState.ERROR_FILLED_WITH_INFO]: {
        ...commonProps(COLORS),
        errorMessageContainer: {
          margin_top: SPACINGS.spacing_150,
        },
      },
      [InputState.DISABLED_FILLED]: {
        ...commonProps(COLORS),
      },
      [InputState.DISABLED_EMPTY]: {
        ...commonProps(COLORS),
      },
      [InputState.DISABLED_FILLED_WITH_INFO]: {
        ...commonProps(COLORS),
      },
    },
  };
};
