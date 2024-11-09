import { OliveMenuStylesType } from '@/components/oliveMenu/types/oliveMenuTheme';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { POSITIONS } from '@/types/positions/positions';

import { SPACINGS } from '../../foundations/spacings';
import {
  ActionBottomSheetVariantType,
  ButtonSizeType,
  ListOptionsVariantType,
  OptionVariantType,
  PopoverVariantType,
} from '../variants';
import { OliveMenuVariant } from './variants';

export const OLIVE_MENU_STYLES: OliveMenuStylesType<OliveMenuVariant> = {
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
    popover: {
      [DeviceBreakpointsType.DESKTOP]: {
        left: '0px',
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
      variant: ListOptionsVariantType.SIDE_MENU_SECTION,
      optionVariant: OptionVariantType.SIDE_MENU_LEVEL_2,
    },
  },
};
