import { OliveMenuStylesType } from '@/components/oliveMenu/types/oliveMenuTheme';
import { SPACINGS } from '@/designSystem/kubitWireframe/commons/foundations/spacings';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { POSITIONS } from '@/types/positions/positions';

import {
  ActionBottomSheetVariantType,
  ButtonSizeType,
  ListOptionsVariantType,
  OptionVariantType,
  PopoverVariantType,
} from '../variants';
import { OliveMenuVariant } from './variants';

export const getOliveMenuStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): OliveMenuStylesType<OliveMenuVariant> => {
  return {
    [OliveMenuVariant.DEFAULT]: {
      container: {
        position: 'relative',
        display: 'inline-flex',
      },
      buttonContainer: {
        [DeviceBreakpointsType.DESKTOP]: {
          margin_bottom: SPACINGS.spacing_250,
        },
      },
      button: {
        [DeviceBreakpointsType.DESKTOP]: {
          size: ButtonSizeType.MEDIUM,
        },
        [DeviceBreakpointsType.TABLET]: {
          size: ButtonSizeType.MEDIUM,
        },
        [DeviceBreakpointsType.MOBILE]: {
          size: ButtonSizeType.MEDIUM,
        },
      },
      listOptionsContainer: {
        display: 'flex',
        flex_direction: 'column',
        [DeviceBreakpointsType.DESKTOP]: {
          gap: SPACINGS.spacing_0,
        },
        [DeviceBreakpointsType.TABLET]: {
          gap: SPACINGS.spacing_0,
        },
        [DeviceBreakpointsType.MOBILE]: {
          gap: SPACINGS.spacing_0,
        },
      },
      popoverVariant: PopoverVariantType.ACTION_BOTTOM_SHEET,
      actionBottomSheet: {
        variant: ActionBottomSheetVariantType.DEFAULT,
        [DeviceBreakpointsType.DESKTOP]: {
          alignTitle: POSITIONS.CENTER,
        },
        [DeviceBreakpointsType.TABLET]: {
          alignTitle: POSITIONS.CENTER,
        },
        [DeviceBreakpointsType.MOBILE]: {
          alignTitle: POSITIONS.CENTER,
        },
      },
      listOptions: {
        variant: ListOptionsVariantType.DEFAULT,
        optionVariant: OptionVariantType.DEFAULT,
      },
    },
  };
};
