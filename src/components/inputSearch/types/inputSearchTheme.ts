import { InputBasicStateProps, InputState } from '@/components/input/types/inputTheme';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

export type InputSearchStateProps = InputBasicStateProps & {
  inputVariant?: string;
  popoverVariant?: { [key in DeviceBreakpointsType]?: string };
  useActionBottomSheet?: { [key in DeviceBreakpointsType]?: boolean };
  actionBottomSheetVariant?: string;
  loaderExpandedContainer?: CommonStyleType;
  loaderContractedContainer?: CommonStyleType;
  searchListContainer?: CommonStyleType;
  searchListSubContainer?: CommonStyleType;
  noResultsTextContainer?: CommonStyleType;
  noResultsText?: TypographyTypes;
  loader?: {
    variant?: string;
    width?: string;
  };
  loadingText?: TypographyTypes;
};

export type InputSearchListOptionsProps = {
  variant?: string;
  optionVariant?: string;
  hightlightedOptionVariant?: string;
};

export type InputSearchStylesProps = {
  [state in InputState]?: InputSearchStateProps;
} & {
  listOptions?: InputSearchListOptionsProps;
};

export type InputSearchVariantType<V extends string | number | symbol> = {
  [variant in V]: InputSearchStylesProps;
};
