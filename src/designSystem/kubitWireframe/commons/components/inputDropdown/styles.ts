import { InputState } from '@/components/input/types';
import { InputDropdownVariantType } from '@/components/inputDropdown/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, FONT_WEIGHT, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { InputVariantType } from '../input/variants';
import { PopoverVariantType } from '../popover/variants';
import {
  ActionBottomSheetVariantType,
  ListOptionsVariantType,
  OptionVariantType,
} from '../variants';
import { InputDropdownVariant } from './variants';

const commonProps = COLORS => ({
  allowSearch: false,
  inputVariant: InputVariantType.DEFAULT,
  useActionBottomSheet: {
    [DeviceBreakpointsType.DESKTOP]: false,
    [DeviceBreakpointsType.TABLET]: false,
    [DeviceBreakpointsType.MOBILE]: false,
  },
  actionBottomSheetVariant: ActionBottomSheetVariantType.DEFAULT,
  popoverVariant: {
    [DeviceBreakpointsType.DESKTOP]: PopoverVariantType.INPUT_DROPDOWN_LEVEL_TWO,
    [DeviceBreakpointsType.TABLET]: PopoverVariantType.INPUT_DROPDOWN_LEVEL_TWO,
    [DeviceBreakpointsType.MOBILE]: PopoverVariantType.INPUT_DROPDOWN_LEVEL_TWO,
  },
  label: {
    font_weight: FONT_WEIGHT.font_weight_600,
  },
  input: {
    color: COLORS.NEUTRAL.color_neutral_font_250,
  },
  inputIcon: {
    color: COLORS.ACCENT.color_accent_default_icon_150,
    height: SIZES.size_250,
    width: SIZES.size_250,
  },
  searchListContainer: {
    margin_top: SPACINGS.spacing_100,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
    border_radius: RADIUS.radius_00,
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

export const getInputDropdownStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): InputDropdownVariantType<InputDropdownVariant> => {
  return {
    [InputDropdownVariant.DEFAULT]: {
      [InputState.EMPTY]: {
        ...commonProps(COLORS),
      },
      [InputState.ACTIVE]: {
        ...commonProps(COLORS),
      },
      [InputState.FILLED]: {
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
      [InputState.DISABLED_EMPTY]: {
        ...commonProps(COLORS),
      },
      [InputState.DISABLED_FILLED]: {
        ...commonProps(COLORS),
      },
      [InputState.DISABLED_FILLED_WITH_INFO]: {
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
