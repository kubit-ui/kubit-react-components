import { FooterStylesType } from '@/components/footer/types';
import { SPACINGS } from '@/designSystem/kubit/foundations';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';
import { DeviceBreakpointsType } from '@/types';

import { RADIUS } from '../../foundations';
import { LineSeparatorLineVariantType } from '../lineSeparator';
import { FooterVariants } from './variants';

export const getFooterStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): FooterStylesType<FooterVariants> => {
  return {
    [FooterVariants.DEFAULT]: {
      rootContainer: {
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        flex_direction: 'row',
        border_top_left_radius: RADIUS.radius_00,
        border_top_right_radius: RADIUS.radius_00,
        border_bottom_left_radius: RADIUS.radius_150,
        border_bottom_right_radius: RADIUS.radius_150,
        padding: `${SPACINGS.spacing_400} ${SPACINGS.spacing_450}`,
        ...transformShadow(RADIUS.radius_150),
        ...shadowAfterStyles(
          `${RADIUS.radius_150} ${RADIUS.radius_00} ${RADIUS.radius_150} ${RADIUS.radius_150}`,
          COLORS.BRAND.color_brand_bg_50,
          '2px'
        ),
        [DeviceBreakpointsType.MOBILE]: {
          flex_direction: 'column',
        },
      },
      contentContainer: {
        [DeviceBreakpointsType.MOBILE]: {
          width: '100%',
        },
      },
      lineSeparator: {
        variant: LineSeparatorLineVariantType.LINE_DEFAULT,
      },
    },
    [FooterVariants.EMPTY]: {
      rootContainer: {
        background_color: 'transparent',
        flex_direction: 'row',
        [DeviceBreakpointsType.MOBILE]: {
          flex_direction: 'column',
        },
      },
      contentContainer: {
        [DeviceBreakpointsType.MOBILE]: {
          flex_direction: 'column',
          width: '100%',
        },
      },
    },
  };
};
