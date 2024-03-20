import { InputBasicStateProps, InputState } from '@/components/input/types/inputTheme';
import { DeviceBreakpointsType } from '@/types';

export type InputDateStateProps = InputBasicStateProps & {
  inputVariant?: string;
  actionBottomSheetVariant?: string;
  popoverVariant?: { [key in DeviceBreakpointsType]?: string };
  useActionBottomSheet?: { [key in DeviceBreakpointsType]?: boolean };
};

export type InputDateStylesProps = {
  [state in InputState]?: InputDateStateProps;
};

export type InputDateStylesType<V extends string | number | symbol> = {
  [variant in V]: InputDateStylesProps;
};
