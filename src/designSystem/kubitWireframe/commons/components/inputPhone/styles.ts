import { IconHighlightedSizeType } from '@/components/iconHighlighted/types';
import {
  InputContentPosition,
  InputHelpMessagePosition,
  InputState,
} from '@/components/input/types';
import { InputPhoneVariantProps } from '@/components/inputPhone/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';

import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { IconHighlightedVariantType } from '../iconHighlighted/variants';
import { TextVariantType } from '../text/variants';
import { InputPhoneVariant } from './variants';

const commonProps = COLORS => ({
  inputVariant: InputPhoneVariant.DEFAULT,
  affixContainer: {
    display: 'inline-flex',
    justify_content: 'center',
    align_items: 'center',
    width: 'auto',
    height: SPACINGS.spacing_550,
    padding: SPACINGS.spacing_250,
    gap: SPACINGS.spacing_100,
    border_radius: RADIUS.radius_300,
    border_width: BORDERS.border_50,
    border_color: COLORS.NEUTRAL.color_neutral_border_50,
    border_style: 'solid',
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    margin_right: SPACINGS.spacing_150,
    ...transformShadow(RADIUS.radius_300),
    ...shadowAfterStyles(RADIUS.radius_300, COLORS.BRAND.color_brand_bg_50, SPACINGS.spacing_50),
  },
  affixContainerPosition: InputContentPosition.OUT,
  affix: {
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  affixIcon: {
    height: SIZES.size_250,
    width: SIZES.size_250,
  },
  affixIconHighlighted: {
    variant: IconHighlightedVariantType.ROUND,
    size: IconHighlightedSizeType.EXTRA_SMALL,
    backgroundColor: COLORS.ACCENT.color_accent_default_icon_100,
  },
  affixIconContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  helpMessage: {
    position: InputHelpMessagePosition.BOTTOM,
  },
});

export const getInputPhoneStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): InputPhoneVariantProps<InputPhoneVariant> => {
  return {
    [InputPhoneVariant.DEFAULT]: {
      [InputState.EMPTY]: {
        ...commonProps(COLORS),
      },
      [InputState.FILLED]: {
        ...commonProps(COLORS),
      },
      [InputState.ACTIVE]: {
        ...commonProps(COLORS),
      },
      [InputState.DISABLED_EMPTY]: {
        ...commonProps(COLORS),
      },
      [InputState.DISABLED_FILLED]: {
        ...commonProps(COLORS),
      },
      [InputState.DISABLED_FILLED_WITH_INFO]: {
        ...commonProps(COLORS),
      },
      [InputState.ERROR_EMPTY]: {
        ...commonProps(COLORS),
      },
      [InputState.ERROR_FILLED]: {
        ...commonProps(COLORS),
      },
      [InputState.ERROR_ACTIVE]: {
        ...commonProps(COLORS),
      },
      [InputState.ERROR_FILLED_WITH_INFO]: {
        ...commonProps(COLORS),
      },
    },
  };
};
