import { InputState } from '@/components/input/types';
import { InputSearchVariantType } from '@/components/inputSearch/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, FONT_WEIGHT, RADIUS, SPACINGS } from '../../foundations';
import { InputVariantType } from '../input/variants';
import { PopoverVariantType } from '../popover/variants';
import { ListOptionsVariantType, OptionVariantType, TextVariantType } from '../variants';
import { InputSearchVariant } from './variants';

const commonProps = COLORS => ({
  inputVariant: InputVariantType.DEFAULT,
  label: {
    font_weight: FONT_WEIGHT.font_weight_600,
    font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
  },
  labelContainer: {
    margin_bottom: SPACINGS.spacing_100,
  },
  popoverVariant: {
    [DeviceBreakpointsType.DESKTOP]: PopoverVariantType.INPUT_SEARCH,
    [DeviceBreakpointsType.TABLET]: PopoverVariantType.INPUT_SEARCH,
    [DeviceBreakpointsType.MOBILE]: PopoverVariantType.INPUT_SEARCH,
  },
  useActionBottomSheet: {
    [DeviceBreakpointsType.DESKTOP]: false,
    [DeviceBreakpointsType.TABLET]: false,
    [DeviceBreakpointsType.MOBILE]: false,
  },
  searchListContainer: {
    margin_top: SPACINGS.spacing_100,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
    border_radius: RADIUS.radius_150,
    height: '100%',
    ...transformShadow(RADIUS.radius_150),
    ...shadowAfterStyles(RADIUS.radius_150, COLORS.BRAND.color_brand_bg_50, '2px'),
    [DeviceBreakpointsType.DESKTOP]: {
      margin_top: `${SPACINGS.spacing_150}`,
      padding_bottom: SPACINGS.spacing_150,
    },
    [DeviceBreakpointsType.TABLET]: {
      margin_top: `${SPACINGS.spacing_150}`,
      padding_bottom: SPACINGS.spacing_150,
    },
    [DeviceBreakpointsType.MOBILE]: {
      margin_top: `${SPACINGS.spacing_150}`,
      padding_bottom: SPACINGS.spacing_150,
    },
  },
  searchListSubContainer: {
    border_radius: RADIUS.radius_150,
    margin_top: SPACINGS.spacing_150,
    padding_bottom: SPACINGS.spacing_150,
  },
});

export const getInputSearchStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): InputSearchVariantType<InputSearchVariant> => {
  return {
    [InputSearchVariant.DEFAULT]: {
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
      listOptions: {
        variant: ListOptionsVariantType.INPUT,
        optionVariant: OptionVariantType.INPUT,
        hightlightedOptionVariant: OptionVariantType.INPUT_HIGHTLIGHTED,
      },
    },
  };
};
