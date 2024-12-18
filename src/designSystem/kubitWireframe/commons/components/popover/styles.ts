import { CssAnimationTimingFunction } from '@/components/cssAnimation/types/cssAnimation';
import { CssAnimationVariants } from '@/components/cssAnimation/types/variant';
import { PopoverStylesType } from '@/components/popover/types/popoverTheme';
import { PopoverPositionVariantType } from '@/components/popover/types/positionVariant';
import { Z_INDEX } from '@/designSystem/kubitWireframe/commons/foundations/zIndex';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { POSITIONS } from '@/types/positions/positions';

import { PopoverVariantType } from './variants';

export const POPOVER_STYLES: PopoverStylesType<PopoverVariantType> = {
  [PopoverVariantType.DEFAULT]: {
    zIndex: Z_INDEX.AUTO,
  },
  [PopoverVariantType.TOOLTIP]: {
    zIndex: Z_INDEX.OVERLAY,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
    },
    [DeviceBreakpointsType.TABLET]: {
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_FIXED,
      fullWidth: true,
    },
    [DeviceBreakpointsType.MOBILE]: {
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_FIXED,
      fullWidth: true,
    },
  },
  [PopoverVariantType.BADGE]: {
    zIndex: Z_INDEX.POPUP,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      align: POSITIONS.BOTTOM_CENTER,
    },
    [DeviceBreakpointsType.TABLET]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      align: POSITIONS.BOTTOM_GAP_RIGHT,
    },
    [DeviceBreakpointsType.MOBILE]: {
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_FIXED,
      fullWidth: true,
    },
  },
  [PopoverVariantType.MODAL]: {
    zIndex: Z_INDEX.MODAL,
    [DeviceBreakpointsType.DESKTOP]: {
      overlay: 'DEFAULT',
    },
    [DeviceBreakpointsType.TABLET]: {
      overlay: 'DEFAULT',
      align: POSITIONS.BOTTOM_FIXED,
      fullWidth: true,
    },
    [DeviceBreakpointsType.MOBILE]: {
      overlay: 'DEFAULT',
      align: POSITIONS.BOTTOM_FIXED,
      fullWidth: true,
    },
  },
  [PopoverVariantType.MODAL_ABSOLUTE]: {
    zIndex: 1,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      align: POSITIONS.TOP_LEFT,
    },
    [DeviceBreakpointsType.TABLET]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      fullWidth: true,
      align: POSITIONS.TOP_LEFT,
    },
    [DeviceBreakpointsType.MOBILE]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      fullWidth: true,
      align: POSITIONS.TOP_LEFT,
    },
  },
  [PopoverVariantType.INPUT_SEARCH]: {
    zIndex: Z_INDEX.MODAL,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      align: POSITIONS.BOTTOM_CENTER,
      fullWidth: true,
    },
    [DeviceBreakpointsType.TABLET]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      align: POSITIONS.BOTTOM_CENTER,
      fullWidth: true,
    },
    [DeviceBreakpointsType.MOBILE]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      align: POSITIONS.BOTTOM_CENTER,
      fullWidth: true,
    },
  },
  [PopoverVariantType.INPUT_DROPDOWN_LEVEL_ONE]: {
    zIndex: Z_INDEX.MODAL,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      align: POSITIONS.BOTTOM_CENTER,
      fullWidth: true,
    },
    [DeviceBreakpointsType.TABLET]: {
      overlay: 'DEFAULT',
      align: POSITIONS.BOTTOM_FIXED,
      positionVariant: PopoverPositionVariantType.FIXED,
      fullWidth: true,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.3,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '100%',
        animationXStartPosition: '0%',
        animationYEndPosition: '0%',
        animationXEndPosition: '0%',
      },
    },
    [DeviceBreakpointsType.MOBILE]: {
      overlay: 'DEFAULT',
      align: POSITIONS.BOTTOM_FIXED,
      positionVariant: PopoverPositionVariantType.FIXED,
      fullWidth: true,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.3,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '100%',
        animationXStartPosition: '0%',
        animationYEndPosition: '0%',
        animationXEndPosition: '0%',
      },
    },
  },
  [PopoverVariantType.INPUT_DROPDOWN_LEVEL_TWO]: {
    zIndex: Z_INDEX.INTERN_2,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      align: POSITIONS.BOTTOM_CENTER,
      fullWidth: true,
    },
    [DeviceBreakpointsType.TABLET]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      align: POSITIONS.BOTTOM_CENTER,
      fullWidth: true,
    },
    [DeviceBreakpointsType.MOBILE]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      align: POSITIONS.BOTTOM_CENTER,
      fullWidth: true,
    },
  },
  [PopoverVariantType.SNACKBAR_BOTTOM]: {
    zIndex: Z_INDEX.TOAST,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_CENTER_FIXED,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.3,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationRotationInDeg: 500,
        animationYStartPosition: '100%',
        animationXStartPosition: '-50%',
        animationYEndPosition: '0%',
        animationXEndPosition: '-50%',
      },
    },
    [DeviceBreakpointsType.TABLET]: {
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_CENTER_FIXED,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.3,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationRotationInDeg: 500,
        animationYStartPosition: '100%',
        animationXStartPosition: '-50%',
        animationYEndPosition: '0%',
        animationXEndPosition: '-50%',
      },
    },
    [DeviceBreakpointsType.MOBILE]: {
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_CENTER_FIXED,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.3,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationRotationInDeg: 500,
        animationYStartPosition: '100%',
        animationXStartPosition: '-50%',
        animationYEndPosition: '0%',
        animationXEndPosition: '-50%',
      },
    },
  },
  [PopoverVariantType.SNACKBAR_TOP]: {
    zIndex: Z_INDEX.AUTO,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: 'relative',
      align: POSITIONS.TOP_CENTER_FIXED,
    },
    [DeviceBreakpointsType.TABLET]: {
      positionVariant: 'relative',
      align: POSITIONS.TOP_CENTER_FIXED,
    },
    [DeviceBreakpointsType.MOBILE]: {
      positionVariant: 'relative',
      align: POSITIONS.TOP_CENTER_FIXED,
    },
  },
  [PopoverVariantType.SNACKBAR_TOP_FIXED]: {
    zIndex: Z_INDEX.AUTO,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: 'fixed',
      align: POSITIONS.TOP_CENTER_FIXED,
    },
    [DeviceBreakpointsType.TABLET]: {
      positionVariant: 'fixed',
      align: POSITIONS.TOP_CENTER_FIXED,
    },
    [DeviceBreakpointsType.MOBILE]: {
      positionVariant: 'fixed',
      align: POSITIONS.TOP_CENTER_FIXED,
    },
  },
  [PopoverVariantType.ACTION_BOTTOM_SHEET]: {
    zIndex: Z_INDEX.MODAL,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: PopoverPositionVariantType.ABSOLUTE,
      align: POSITIONS.BOTTOM_LEFT,
    },
    [DeviceBreakpointsType.TABLET]: {
      overlay: 'DEFAULT',
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_FIXED,
      fullWidth: true,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.3,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '100%',
        animationXStartPosition: '0%',
        animationYEndPosition: '0%',
        animationXEndPosition: '0%',
      },
    },
    [DeviceBreakpointsType.MOBILE]: {
      overlay: 'DEFAULT',
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_FIXED,
      fullWidth: true,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.3,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '100%',
        animationXStartPosition: '0%',
        animationYEndPosition: '0%',
        animationXEndPosition: '0%',
      },
    },
  },
  [PopoverVariantType.ACTION_BOTTOM_SHEET_RELATIVE]: {
    zIndex: Z_INDEX.INTERN_1,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: 'relative',
      align: POSITIONS.BOTTOM_LEFT,
    },
    [DeviceBreakpointsType.TABLET]: {
      overlay: 'DEFAULT',
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_FIXED,
      fullWidth: true,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.3,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '100%',
        animationXStartPosition: '0%',
        animationYEndPosition: '0%',
        animationXEndPosition: '0%',
      },
    },
    [DeviceBreakpointsType.MOBILE]: {
      overlay: 'DEFAULT',
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_FIXED,
      fullWidth: true,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.3,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '100%',
        animationXStartPosition: '0%',
        animationYEndPosition: '0%',
        animationXEndPosition: '0%',
      },
    },
  },
  [PopoverVariantType.DRAWER_LEFT]: {
    zIndex: Z_INDEX.INTERN_1,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: 'relative',
      align: POSITIONS.LEFT_FIXED,
      fullWidth: false,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.5,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '0%',
        animationXStartPosition: '-100%',
        animationYEndPosition: '0',
        animationXEndPosition: '0',
      },
    },
  },
  [PopoverVariantType.DRAWER_RIGHT]: {
    zIndex: Z_INDEX.MODAL,
    [DeviceBreakpointsType.DESKTOP]: {
      overlay: 'DEFAULT',
      positionVariant: 'fixed',
      align: POSITIONS.RIGHT_FIXED,
      fullWidth: false,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.5,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '0%',
        animationXStartPosition: '100%',
        animationYEndPosition: '0',
        animationXEndPosition: '0',
      },
    },
    [DeviceBreakpointsType.TABLET]: {
      overlay: 'DEFAULT',
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.RIGHT_FIXED,
      fullWidth: false,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.5,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '0%',
        animationXStartPosition: '100%',
        animationYEndPosition: '0',
        animationXEndPosition: '0',
      },
    },
    [DeviceBreakpointsType.MOBILE]: {
      overlay: 'DEFAULT',
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.RIGHT_FIXED,
      fullWidth: true,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.5,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '0%',
        animationXStartPosition: '100%',
        animationYEndPosition: '0',
        animationXEndPosition: '0',
      },
    },
  },
  [PopoverVariantType.DRAWER_BOTTOM]: {
    zIndex: Z_INDEX.MODAL,
    [DeviceBreakpointsType.DESKTOP]: {
      positionVariant: 'relative',
      align: POSITIONS.RIGHT_FIXED,
      fullWidth: false,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.5,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '0%',
        animationXStartPosition: '100%',
        animationYEndPosition: '0',
        animationXEndPosition: '0',
      },
    },
    [DeviceBreakpointsType.TABLET]: {
      overlay: 'DEFAULT',
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_FIXED,
      fullWidth: true,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.5,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '100%',
        animationXStartPosition: '0',
        animationYEndPosition: '0%',
        animationXEndPosition: '0',
      },
    },
    [DeviceBreakpointsType.MOBILE]: {
      overlay: 'DEFAULT',
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.BOTTOM_FIXED,
      fullWidth: true,
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.5,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.LINEAR,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '100%',
        animationXStartPosition: '0',
        animationYEndPosition: '0%',
        animationXEndPosition: '0',
      },
    },
  },
  [PopoverVariantType.DRAWER_NO_ANIMATION]: {
    zIndex: Z_INDEX.MODAL,
    [DeviceBreakpointsType.DESKTOP]: {
      overlay: 'DEFAULT',
      positionVariant: 'relative',
      align: POSITIONS.RIGHT_FIXED,
      fullWidth: false,
    },
    [DeviceBreakpointsType.TABLET]: {
      overlay: 'DEFAULT',
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.RIGHT_FIXED,
      fullWidth: false,
    },
    [DeviceBreakpointsType.MOBILE]: {
      overlay: 'DEFAULT',
      positionVariant: PopoverPositionVariantType.FIXED,
      align: POSITIONS.RIGHT_FIXED,
      fullWidth: true,
    },
  },
};
