import {
  CssAnimationConfig,
  CssAnimationType,
  ICssAnimationOptions,
} from '@/components/cssAnimation';
import { DeviceBreakpointsType } from '@/types/breakpoints';

import { PopoverVariantStylesType } from '../types';

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
