import { InputBasicStateProps, InputState } from '@/components/input/types/inputTheme';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

export type InputDropdownStateProps = InputBasicStateProps & {
  allowSearch?: boolean;
  inputVariant?: string;
  popoverVariant?: { [key in DeviceBreakpointsType]?: string };
  useActionBottomSheet?: { [key in DeviceBreakpointsType]?: boolean };
  actionBottomSheetVariant?: string;
  inputDropdownContainer?: CommonStyleType;
  searchListContainer?: CommonStyleType;
  searchListSubContainer?: CommonStyleType;
  loaderExpandedContainer?: CommonStyleType;
  loaderContractedContainer?: CommonStyleType;
  loader?: {
    variant?: string;
    width?: string;
  };
  noResultsTextContainer?: CommonStyleType;
  noResultsText?: TypographyTypes;
  loadingText?: TypographyTypes;
};

export type InputDropdownListOptionsProps = {
  variant?: string;
  optionVariant?: string;
  hightlightedOptionVariant?: string;
};

export type InputDropdownStylesProps = {
  [state in InputState]?: InputDropdownStateProps;
} & {
  listOptions?: InputDropdownListOptionsProps;
};

export type InputDropdownVariantType<V extends string | number | symbol> = {
  [variant in V]: InputDropdownStylesProps;
};
