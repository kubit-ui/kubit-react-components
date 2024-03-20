// types
import { InputHelpMessagePosition, InputState } from '@/components/input/types';
import { InputDateStylesType } from '@/components/inputDate/types';
import { DeviceBreakpointsType } from '@/types';

import { COLORS } from '../../foundations';
import { ActionBottomSheetVariantType } from '../actionBottomSheet/variants';
import { PopoverVariantType } from '../popover/variants';
import { InputDateVariantType } from './variants';

InputState;

const commonProps = {
  inputVariant: InputDateVariantType.DEFAULT,
  helpMessage: {
    position: InputHelpMessagePosition.TOP,
  },
  actionBottomSheetVariant: ActionBottomSheetVariantType.DEFAULT,
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
};

export const INPUT_DATE_STYLES: InputDateStylesType<InputDateVariantType> = {
  [InputDateVariantType.DEFAULT]: {
    [InputState.EMPTY]: {
      ...commonProps,
      inputIcon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
    },
    [InputState.ACTIVE]: {
      ...commonProps,
    },
    [InputState.FILLED]: {
      ...commonProps,
      inputIcon: {
        color: COLORS.ACCENT.color_accent_default_icon_100,
      },
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
    [InputState.DISABLED_EMPTY]: {
      ...commonProps,
    },
    [InputState.DISABLED_FILLED]: {
      ...commonProps,
    },
    [InputState.DISABLED_FILLED_WITH_INFO]: {
      ...commonProps,
    },
  },
};
