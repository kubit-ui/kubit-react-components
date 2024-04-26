import { AccordionStylesType } from '@/components/accordion/types';
import { DeviceBreakpointsType } from '@/types';

import { shadowAfterStyles, transformShadow } from '../../../utils/wireframe';
import { BORDERS, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { AccordionVariantType } from './variants';

export const getAccordionStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): AccordionStylesType<AccordionVariantType> => {
  return {
    [AccordionVariantType.DEFAULT]: {
      container: {
        background_color: COLORS.NEUTRAL.color_neutral_bg_250,
        display: 'flex',
        flex_direction: 'column',
        position: 'relative',
        border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        ...transformShadow(RADIUS.radius_150),
        ...shadowAfterStyles(
          RADIUS.radius_150,
          COLORS.BRAND.color_brand_bg_50,
          SPACINGS.spacing_50
        ),
      },
      headerInternalContainer: {
        padding: `${SPACINGS.spacing_250} ${SPACINGS.spacing_300} ${SPACINGS.spacing_300}`,
      },
      subHeader: {
        width: '100%',
        padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_0} ${SPACINGS.spacing_0} ${SPACINGS.spacing_0}`,
        margin_left: SPACINGS.spacing_500,
        [DeviceBreakpointsType.MOBILE]: {
          padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_0} ${SPACINGS.spacing_0} ${SPACINGS.spacing_0}`,
        },
      },
      trigger: {
        cursor: 'pointer',
        display: 'flex',
        justify_content: 'flex-start',
        margin: SPACINGS.spacing_0,
        padding: SPACINGS.spacing_0,
        width: SPACINGS.spacing_100_percent,
        gap: SPACINGS.spacing_300,
      },
      link: {
        cursor: 'pointer',
        display: 'flex',
        justify_content: 'flex-start',
        margin: SPACINGS.spacing_0,
        padding: SPACINGS.spacing_0,
        width: SPACINGS.spacing_100_percent,
        gap: SPACINGS.spacing_300,
      },
      triggerIconContainer: {
        align_items: 'center',
        display: 'inline-flex',
        justify_content: 'center',
        transform: 'rotate(0deg)',
        transition: 'transform 0.15s ease-in-out',
        padding: SPACINGS.spacing_0,
      },
      triggerIcon: {
        color: COLORS.NEUTRAL.color_neutral_icon_50,
        width: SIZES.size_250,
        height: SIZES.size_250,
      },
      titleContainer: {
        align_items: 'center',
        display: 'flex',
        justify_content: 'center',
        transform: 'rotate(0deg)',
        transition: 'transform 0.15s ease-in-out',
        gap: SPACINGS.spacing_200,
      },
      content: {
        border_top: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        padding: SPACINGS.spacing_300,
      },
    },
  };
};
