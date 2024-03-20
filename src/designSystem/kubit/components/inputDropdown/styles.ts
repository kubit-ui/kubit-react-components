import { InputState } from '@/components/input/types';
import { InputDropdownVariantType } from '@/components/inputDropdown/types';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { ActionBottomSheetVariantType } from '../actionBottomSheet/variants';
import { InputVariantType } from '../input/variants';
import { ListOptionsVariantType } from '../listOptions/variants';
import { OptionVariantType } from '../option/variants';
import { PopoverVariantType } from '../popover/variants';
import { LoaderVariantType, TextVariantType } from '../variants';
import { InputDropdownVariant } from './variants';

const commonProps = {
  inputVariant: InputVariantType.DEFAULT,
  popoverVariant: {
    [DeviceBreakpointsType.DESKTOP]: PopoverVariantType.INPUT_DROPDOWN_DEFAULT,
    [DeviceBreakpointsType.TABLET]: PopoverVariantType.INPUT_DROPDOWN_DEFAULT,
    [DeviceBreakpointsType.MOBILE]: PopoverVariantType.INPUT_DROPDOWN_DEFAULT,
  },
  useActionBottomSheet: {
    [DeviceBreakpointsType.DESKTOP]: false,
    [DeviceBreakpointsType.TABLET]: true,
    [DeviceBreakpointsType.MOBILE]: true,
  },
  actionBottomSheetVariant: ActionBottomSheetVariantType.INPUT_DROPDOWN_DEFAULT,
  searchListContainer: {
    [DeviceBreakpointsType.DESKTOP]: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_200,
      border_style: 'solid',
      border_width: BORDERS.border_100,
      border_color: COLORS.NEUTRAL.color_neutral_border_50,
      margin_top: SPACINGS.spacing_100,
    },
    [DeviceBreakpointsType.TABLET]: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      border_width: BORDERS.border_00,
    },
    [DeviceBreakpointsType.MOBILE]: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      border_width: BORDERS.border_00,
    },
  },
  inputContainer: {
    opacity: '1',
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    [DeviceBreakpointsType.DESKTOP]: {
      input_padding_size: SPACINGS.spacing_0,
      border_bottom: BORDERS.border_00,
      background_color: COLORS.NEUTRAL.color_neutral_bg_100,
      margin_top: SPACINGS.spacing_100,
    },
    [DeviceBreakpointsType.TABLET]: {
      input_padding_size: SPACINGS.spacing_300,
      border_bottom: BORDERS.border_00,
      margin_top: SPACINGS.spacing_350,
      border_bottom_color: 'black',
      border_style: 'solid',
      border_width: BORDERS.border_50,
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    },
    [DeviceBreakpointsType.MOBILE]: {
      input_padding_size: SPACINGS.spacing_300,
      border_bottom: BORDERS.border_00,
      margin_top: SPACINGS.spacing_350,
      border_bottom_color: 'black',
      border_style: 'solid',
      border_width: BORDERS.border_50,
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    },
  },
  noResultsTextContainer: {
    padding: SPACINGS.spacing_300,
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
  },
  noResultsText: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  loadingText: {
    font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
    font_weight: FONT_WEIGHT.font_weight_400,
    color: COLORS.NEUTRAL.color_neutral_font_50,
  },
  loaderExpandedContainer: {
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300}`,
  },
  loaderContractedContainer: {
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    padding_top: SPACINGS.spacing_600,
    padding_bottom: SPACINGS.spacing_600,
    gap: SPACINGS.spacing_150,
  },
  loader: {
    variant: LoaderVariantType.PRIMARY_RED,
    width: SIZES.size_250,
  },
};

const errorCommonProps = {
  [DeviceBreakpointsType.DESKTOP]: {
    ...commonProps,
    inputContainer: {
      opacity: '1',
      border_bottom_color: COLORS.FEEDBACK.color_feedbackError_border_100,
    },
  },
};

const testCommonProps = {
  ...commonProps,
  popoverVariant: {
    [DeviceBreakpointsType.DESKTOP]: PopoverVariantType.INPUT_DROPDOWN_LEVEL_ONE,
    [DeviceBreakpointsType.TABLET]: PopoverVariantType.INPUT_DROPDOWN_LEVEL_ONE,
    [DeviceBreakpointsType.MOBILE]: PopoverVariantType.INPUT_DROPDOWN_LEVEL_ONE,
  },
  useActionBottomSheet: {
    [DeviceBreakpointsType.DESKTOP]: false,
    [DeviceBreakpointsType.TABLET]: true,
    [DeviceBreakpointsType.MOBILE]: true,
  },
  inputContainer: {
    ...commonProps.inputContainer,
    padding: SPACINGS.spacing_100,
    background_color: COLORS.NEUTRAL.color_neutral_bg_100,
    border_width: BORDERS.border_00,
  },
  searchListContainer: {
    ...commonProps.searchListContainer,
    [DeviceBreakpointsType.DESKTOP]: {
      border_width: BORDERS.border_00,
      background_color: COLORS.NEUTRAL.color_neutral_bg_100,
      margin_top: SPACINGS.spacing_100,
    },
  },
};

export const INPUT_DROPDOWN_STYLES: InputDropdownVariantType<InputDropdownVariant> = {
  [InputDropdownVariant.DEFAULT]: {
    [InputState.EMPTY]: {
      ...commonProps,
      allowSearch: false,
      inputIcon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
    },
    [InputState.ACTIVE]: {
      ...commonProps,
      allowSearch: false,
    },
    [InputState.FILLED]: {
      ...commonProps,
      allowSearch: false,
      inputIcon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
    },
    [InputState.ERROR_EMPTY]: {
      ...commonProps,
      ...errorCommonProps,
      allowSearch: false,
    },
    [InputState.ERROR_FILLED]: {
      ...commonProps,
      ...errorCommonProps,
      allowSearch: false,
    },
    [InputState.ERROR_ACTIVE]: {
      ...commonProps,
      ...errorCommonProps,
      allowSearch: false,
    },
    [InputState.DISABLED_EMPTY]: {
      ...commonProps,
      allowSearch: false,
    },
    [InputState.DISABLED_FILLED]: {
      ...commonProps,
      allowSearch: false,
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...commonProps,
      allowSearch: false,
    },
    listOptions: {
      variant: ListOptionsVariantType.INPUT_DROPDOWN_DEFAULT,
      optionVariant: OptionVariantType.INPUT_OPTION,
      hightlightedOptionVariant: OptionVariantType.INPUT_OPTION_HIGHTLIGHTED,
    },
  },
  [InputDropdownVariant.DEFAULT_SEARCH]: {
    [InputState.EMPTY]: {
      ...commonProps,
      allowSearch: true,
      inputIcon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
    },
    [InputState.ACTIVE]: {
      ...commonProps,
      allowSearch: true,
    },
    [InputState.FILLED]: {
      ...commonProps,
      allowSearch: true,
      inputIcon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
    },
    [InputState.ERROR_EMPTY]: {
      ...commonProps,
      ...errorCommonProps,
      allowSearch: true,
    },
    [InputState.ERROR_FILLED]: {
      ...commonProps,
      ...errorCommonProps,
      allowSearch: true,
    },
    [InputState.ERROR_ACTIVE]: {
      ...commonProps,
      ...errorCommonProps,
      allowSearch: true,
    },
    [InputState.DISABLED_EMPTY]: {
      ...commonProps,
      allowSearch: true,
    },
    [InputState.DISABLED_FILLED]: {
      ...commonProps,
      allowSearch: true,
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...commonProps,
      allowSearch: true,
    },
    listOptions: {
      variant: ListOptionsVariantType.INPUT_DROPDOWN_DEFAULT,
      optionVariant: OptionVariantType.INPUT_OPTION,
      hightlightedOptionVariant: OptionVariantType.INPUT_OPTION_HIGHTLIGHTED,
    },
  },
  [InputDropdownVariant.TEST]: {
    [InputState.EMPTY]: {
      ...testCommonProps,
    },
    [InputState.ACTIVE]: {
      ...testCommonProps,
    },
    [InputState.FILLED]: {
      ...testCommonProps,
    },
    [InputState.ERROR_EMPTY]: {
      ...testCommonProps,
      ...errorCommonProps,
    },
    [InputState.ERROR_FILLED]: {
      ...testCommonProps,
      ...errorCommonProps,
    },
    [InputState.ERROR_ACTIVE]: {
      ...testCommonProps,
      ...errorCommonProps,
    },
    [InputState.DISABLED_EMPTY]: {
      ...testCommonProps,
    },
    [InputState.DISABLED_FILLED]: {
      ...testCommonProps,
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...testCommonProps,
    },
    listOptions: {
      variant: ListOptionsVariantType.INPUT_DROPDOWN_SECTION,
      optionVariant: OptionVariantType.INPUT_DROPDOWN,
      hightlightedOptionVariant: OptionVariantType.INPUT_DROPDOWN,
    },
  },
};
