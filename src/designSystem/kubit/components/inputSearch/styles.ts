// types
import { InputState } from '@/components/input/types';
import { InputSearchVariantType } from '@/components/inputSearch/types';
import { DeviceBreakpointsType } from '@/types';

import { COLORS, FONT_WEIGHT, SIZES, SPACINGS } from '../../foundations';
import { InputVariantType } from '../input/variants';
import { ListOptionsVariantType } from '../listOptions/variants';
import { OptionVariantType } from '../option/variants';
import { PopoverVariantType } from '../popover/variants';
import { ActionBottomSheetVariantType, LoaderVariantType, TextVariantType } from '../variants';
import { InputSearchVariant } from './variants';

const commonProps = {
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
    [DeviceBreakpointsType.TABLET]: true,
    [DeviceBreakpointsType.MOBILE]: true,
  },
  actionBottomSheetVariant: ActionBottomSheetVariantType.INPUT_SEARCH,
  searchListContainer: {
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    margin_top: SPACINGS.spacing_100,
    [DeviceBreakpointsType.DESKTOP]: {
      border: `2px solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
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

export const INPUT_SEARCH_STYLES: InputSearchVariantType<InputSearchVariant> = {
  [InputSearchVariant.DEFAULT]: {
    [InputState.EMPTY]: {
      ...commonProps,
    },
    [InputState.FILLED]: {
      ...commonProps,
    },
    [InputState.ACTIVE]: {
      ...commonProps,
    },
    [InputState.DISABLED_EMPTY]: {
      ...commonProps,
    },
    [InputState.DISABLED_FILLED]: {
      ...commonProps,
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...commonProps,
    },
    [InputState.ERROR_EMPTY]: {
      ...commonProps,
    },
    [InputState.ERROR_FILLED]: {
      ...commonProps,
    },
    [InputState.ERROR_ACTIVE]: {
      ...commonProps,
    },
    listOptions: {
      variant: ListOptionsVariantType.INPUT_SEARCH,
      optionVariant: OptionVariantType.INPUT_OPTION,
      hightlightedOptionVariant: OptionVariantType.INPUT_OPTION_HIGHTLIGHTED,
    },
  },
};
