import { AccordionStylesType } from '@/components/accordion/types';
import { DeviceBreakpointsType } from '@/types';

import {
  COLORS,
  FONT_WEIGHT,
  HEADING,
  RADIUS,
  SIZES,
  SPACINGS,
  TEXT_ALIGN,
  Z_INDEX,
} from '../../foundations';
import { LineSeparatorLineVariantType } from '../variants';
import { AccordionVariantType } from './variants';

export const ACCORDION_STYLES: AccordionStylesType<AccordionVariantType> = {
  [AccordionVariantType.DEFAULT]: {
    container: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_250,
      display: 'flex',
      flex_direction: 'column',
      position: 'relative',
    },
    headerExternalContainer: {
      display: 'flex',
      justify_content: 'space-between',
    },
    headerInternalContainer: {
      margin_bottom: SPACINGS.spacing_50,
      align_items: 'flex-start',
      display: 'flex',
      flex_direction: 'column',
      justify_content: 'center',
      width: '100%',
    },
    headerMainContainer: {
      width: '100%',
      display: 'flex',
    },
    subHeader: {
      margin_top: SPACINGS.spacing_150,
      margin_left: SPACINGS.spacing_600,
      margin_bottom: SPACINGS.spacing_100,
    },
    headerRightContentContainer: {
      display: 'flex',
      align_items: 'center',
      width: '15rem',
    },
    decorative: {
      background_color: COLORS.SECONDARY.color_secondary_bg_100,
      border_radius: RADIUS.radius_00,
      width: SPACINGS.spacing_500,
      gap: SPACINGS.spacing_300,
      top: SPACINGS.spacing_0,
      bottom: SPACINGS.spacing_0,
      position: 'absolute',
    },
    trigger: {
      cursor: 'pointer',
      display: 'flex',
      justify_content: 'flex-start',
      margin: SPACINGS.spacing_0,
      padding: SPACINGS.spacing_0,
      z_index: Z_INDEX.INTERN_1,
      align_items: 'center',
      width: SPACINGS.spacing_100_percent,
    },
    link: {
      cursor: 'pointer',
      display: 'flex',
      justify_content: 'flex-start',
      margin: SPACINGS.spacing_0,
      padding: SPACINGS.spacing_0,
      z_index: Z_INDEX.INTERN_1,
      align_items: 'center',
      width: SPACINGS.spacing_100_percent,
    },
    triggerIconContainer: {
      align_items: 'center',
      display: 'flex',
      justify_content: 'center',
      transform: 'rotate(0deg)',
      transition: 'transform 0.15s ease-in-out',
      padding: SPACINGS.spacing_100,
      background_color: COLORS.SECONDARY.color_secondary_bg_100,
    },
    triggerIcon: {
      color: COLORS.NEUTRAL.color_neutral_icon_50,
      width: SIZES.size_300,
      height: SIZES.size_300,
    },
    title: {
      font_size: HEADING.H3.DESKTOP.font_size,
      font_weight: FONT_WEIGHT.font_weight_500,
      color: COLORS.NEUTRAL.color_neutral_font_50,
      text_align: TEXT_ALIGN.left,
      line_height: '0',
    },
    titleContainer: {
      align_items: 'center',
      display: 'flex',
      justify_content: 'center',
      height: SPACINGS.spacing_100_percent,
      margin_left: SPACINGS.spacing_300,
      gap: SPACINGS.spacing_300,
    },
    content: {
      padding: `${SPACINGS.spacing_300} ${SPACINGS.spacing_600} ${SPACINGS.spacing_0} ${SPACINGS.spacing_600}`,
    },
    lineSeparatorContainer: {
      variant: LineSeparatorLineVariantType.LINE_INFORMATIVE,
      margin_right: SPACINGS.spacing_400,
      margin_bottom: SPACINGS.spacing_400,
      [DeviceBreakpointsType.MOBILE]: {
        width: '100%',
      },
    },
  },
};
