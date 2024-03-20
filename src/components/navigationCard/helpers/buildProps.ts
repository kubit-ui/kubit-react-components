import { DecorativePropsType, DecorativeType } from '@/components/decorativeElement';
import { DeviceBreakpointsType } from '@/types';

import { NavigationCardStylesPropsType } from '../types';

type PropsReturnType = {
  marginRight: string | undefined;
  additionalProps: object | undefined;
};

// eslint-disable-next-line complexity
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
        dataTestId: `${dataTestId}Icon`,
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
        dataTestId: `${dataTestId}IconHighlighted`,
      },
    };
  } else if (element?.[DecorativeType.ILLUSTRATION]) {
    return {
      marginRight: styles.illustration?.margin_right,
      additionalProps: {
        dataTestId: `${dataTestId}Illustration`,
        height: `${styles.illustration?.[device]?.height ?? styles.illustration?.height}`,
        width: `${styles.illustration?.[device]?.width ?? styles.illustration?.width}`,
      },
    };
  } else if (element?.[DecorativeType.AVATAR]) {
    return {
      marginRight: styles.avatar?.margin_right,
      additionalProps: {
        dataTestId: `${dataTestId}Avatar`,
      },
    };
  }
  return { marginRight: undefined, additionalProps: undefined };
};
