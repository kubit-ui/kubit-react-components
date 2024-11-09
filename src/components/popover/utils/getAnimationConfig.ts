import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

import { CssAnimationConfig, ICssAnimationOptions } from '../../cssAnimation/types/cssAnimation';
import { CssAnimationType } from '../../cssAnimation/types/variant';
import { PopoverVariantStylesType } from '../types/popoverTheme';

export const getAnimationConfig = (
  styles: PopoverVariantStylesType,
  device: DeviceBreakpointsType,
  defaultAnimation?: CssAnimationType,
  defaultAnimationOptions?: ICssAnimationOptions
): CssAnimationConfig => {
  let config;
  const deviceStyles = styles[device];

  if (defaultAnimation && defaultAnimationOptions) {
    config = {
      animation: defaultAnimation,
      animationOptions: defaultAnimationOptions,
    };
  } else if (deviceStyles && deviceStyles.animation && deviceStyles.animationOptions) {
    config = {
      animation: deviceStyles.animation,
      animationOptions: deviceStyles.animationOptions,
    };
  } else {
    config = null;
  }

  return config;
};
