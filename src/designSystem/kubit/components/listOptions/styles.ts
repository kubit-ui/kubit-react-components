import { ListOptionsStylesType } from '@/components/listOptions/types';
import { DeviceBreakpointsType } from '@/types';

import { BORDERS, COLORS, FONT_WEIGHT, SPACINGS } from '../../foundations';
import { TextVariantType } from '../text/variants';
import { ListOptionsVariantType } from './variants';

const commonProps = {
  optionsContainer: {
    display: 'flex',
    flex_direction: 'column',
  },
};

export const LIST_OPTIONS_STYLES: ListOptionsStylesType<ListOptionsVariantType> = {
  [ListOptionsVariantType.SIDE_MENU_SECTION]: {
    // Add the same left border than OPTION SIDE_MENU_LEVEL_1
    ...commonProps,
    titleContainer: {
      padding: `${SPACINGS.spacing_150} ${SPACINGS.spacing_300} ${SPACINGS.spacing_150} calc(${SPACINGS.spacing_300} + ${BORDERS.border_200})`,
      margin: `${SPACINGS.spacing_0} ${SPACINGS.spacing_300} ${SPACINGS.spacing_100} ${SPACINGS.spacing_0}`,
      border_bottom: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_200}`,
    },
    title: {
      font_variant: TextVariantType.PARAGRAPH_SMALL_EXTENDED,
      color: COLORS.NEUTRAL.color_neutral_font_50,
      font_weight: FONT_WEIGHT.font_weight_400,
    },
    optionsContainer: {
      ...commonProps.optionsContainer,
      [DeviceBreakpointsType.DESKTOP]: {
        gap: SPACINGS.spacing_100,
      },
      [DeviceBreakpointsType.TABLET]: {
        gap: SPACINGS.spacing_100,
      },
      [DeviceBreakpointsType.MOBILE]: {
        gap: SPACINGS.spacing_100,
      },
    },
  },
  [ListOptionsVariantType.INPUT_DROPDOWN_SECTION]: {
    ...commonProps,
    optionsContainer: {
      ...commonProps.optionsContainer,
      [DeviceBreakpointsType.DESKTOP]: {
        gap: SPACINGS.spacing_0,
      },
      [DeviceBreakpointsType.TABLET]: {
        gap: SPACINGS.spacing_150,
      },
      [DeviceBreakpointsType.MOBILE]: {
        gap: SPACINGS.spacing_150,
      },
    },
  },
  [ListOptionsVariantType.CODE_VIEWER_SUBTHEME]: {
    ...commonProps,
  },
  [ListOptionsVariantType.INPUT_SEARCH]: {
    ...commonProps,
  },
  [ListOptionsVariantType.INPUT_DROPDOWN_DEFAULT]: {
    ...commonProps,
    optionsContainer: {
      ...commonProps.optionsContainer,
    },
  },
  [ListOptionsVariantType.DROPDOWN_SELECTED_SECTION]: {
    ...commonProps,
    optionsContainer: {
      ...commonProps.optionsContainer,
      [DeviceBreakpointsType.DESKTOP]: {
        gap: SPACINGS.spacing_150,
        padding: `${SPACINGS.spacing_100} ${SPACINGS.spacing_0}`,
      },
      [DeviceBreakpointsType.TABLET]: {
        gap: SPACINGS.spacing_150,
      },
      [DeviceBreakpointsType.MOBILE]: {
        gap: SPACINGS.spacing_150,
      },
    },
  },
  [ListOptionsVariantType.DEFAULT]: {
    optionsContainer: {
      display: 'flex',
      flex_direction: 'column',
    },
    titleContainer: {
      padding: `${SPACINGS.spacing_0} ${SPACINGS.spacing_150} ${SPACINGS.spacing_0} ${SPACINGS.spacing_150}`,
    },
    title: {
      font_variant: TextVariantType.HEADING_H4_EXTENDED,
      color: COLORS.NEUTRAL.color_neutral_font_50,
      font_weight: FONT_WEIGHT.font_weight_600,
    },
  },
};
