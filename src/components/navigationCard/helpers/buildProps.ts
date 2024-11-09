import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

import {
  DecorativePropsType,
  DecorativeType,
} from '../../decorativeElement/types/decorativeElement';
import { NavigationCardStylesPropsType } from '../types/navigationCardTheme';

type PropsReturnType = {
  marginRight: string | undefined;
  additionalProps: object | undefined;
};

export const buildProps = (
  styles: NavigationCardStylesPropsType,
  element: DecorativePropsType | undefined,
  device: DeviceBreakpointsType,
  dataTestId?: string
): PropsReturnType => {
  if (element?.[DecorativeType.ICON]) {
    return {
      marginRight: styles.icon?.margin_right,
      additionalProps: {
        width: styles.icon?.[device]?.width ?? styles.icon?.width,
        height: styles.icon?.[device]?.height ?? styles.icon?.height,
        color: styles.icon?.[device]?.color ?? styles.icon?.color,
        ...element[DecorativeType.ICON],
      },
    };
  } else if (element?.[DecorativeType.ICON_HIGHLIGHTED]) {
    const size = element[DecorativeType.ICON_HIGHLIGHTED]?.size
      ? element[DecorativeType.ICON_HIGHLIGHTED]?.size
      : styles.iconHighlighted?.size;
    return {
      marginRight: styles.iconHighlighted?.margin_right,
      additionalProps: {
        ...styles.iconHighlighted,
        size,
      },
    };
  } else if (element?.[DecorativeType.ILLUSTRATION]) {
    return {
      marginRight: styles.illustration?.margin_right,
      additionalProps: {
        height: `${styles.illustration?.[device]?.height ?? styles.illustration?.height}`,
        width: `${styles.illustration?.[device]?.width ?? styles.illustration?.width}`,
      },
    };
  } else if (element?.[DecorativeType.AVATAR]) {
    return {
      marginRight: styles.avatar?.margin_right,
      additionalProps: {},
    };
  }
  return { marginRight: undefined, additionalProps: undefined };
};
