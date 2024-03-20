import { ListOptionsStylesType } from '@/components/listOptions/types';
import { shadowAfterStyles, transformShadow } from '@/designSystem/kubitWireframe/utils/wireframe';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, FONT_WEIGHT, RADIUS, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { ListOptionsVariantType } from './variants';

const commonProps = COLORS => ({
  optionsContainer: {
    display: 'flex',
    flex_direction: 'column',
    [DeviceBreakpointsType.DESKTOP]: {
      gap: SPACINGS.spacing_150,
    },
    [DeviceBreakpointsType.TABLET]: {
      gap: SPACINGS.spacing_150,
    },
    [DeviceBreakpointsType.MOBILE]: {
      gap: SPACINGS.spacing_150,
    },
  },
  parentContainer: {
    background_color: COLORS.NEUTRAL.color_neutral_bg_250,
    border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
    border_radius: RADIUS.radius_00,
    padding: SPACINGS.spacing_400,
    ...transformShadow(RADIUS.radius_00),
    ...shadowAfterStyles(RADIUS.radius_00, COLORS.BRAND.color_brand_bg_50, '2px'),
  },
  titleContainer: {
    padding: `${SPACINGS.spacing_0} ${SPACINGS.spacing_150} ${SPACINGS.spacing_0} ${SPACINGS.spacing_150}`,
  },
  title: {
    font_variant: TextVariantType.HEADING_H4_EXTENDED,
    color: COLORS.NEUTRAL.color_neutral_font_50,
    font_weight: FONT_WEIGHT.font_weight_600,
  },
});

export const getListOptionsStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): ListOptionsStylesType<ListOptionsVariantType> => {
  return {
    [ListOptionsVariantType.DEFAULT]: {
      ...commonProps(COLORS),
    },
    [ListOptionsVariantType.INPUT]: {
      ...commonProps(COLORS),
      parentContainer: {
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        border_radius: RADIUS.radius_150,
      },
    },
    [ListOptionsVariantType.FUNCTIONALITIES_MODULE]: {
      ...commonProps(COLORS),
      parentContainer: {
        [DeviceBreakpointsType.DESKTOP]: {
          ...commonProps(COLORS).parentContainer,
        },
        [DeviceBreakpointsType.TABLET]: {},
        [DeviceBreakpointsType.MOBILE]: {},
      },
      titleContainer: {
        [DeviceBreakpointsType.DESKTOP]: {
          ...commonProps(COLORS).titleContainer,
        },
        [DeviceBreakpointsType.TABLET]: { padding: SPACINGS.spacing_150 },
        [DeviceBreakpointsType.MOBILE]: { padding: SPACINGS.spacing_150 },
      },
      optionsContainer: {
        display: 'flex',
        flex_direction: 'column',
        [DeviceBreakpointsType.DESKTOP]: {
          gap: SPACINGS.spacing_150,
        },
        [DeviceBreakpointsType.TABLET]: {
          gap: SPACINGS.spacing_150,
        },
        [DeviceBreakpointsType.MOBILE]: {
          gap: SPACINGS.spacing_150,
        },
      },
    },
  };
};
