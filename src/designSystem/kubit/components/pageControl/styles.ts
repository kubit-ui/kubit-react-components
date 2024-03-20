import {
  ArrowsControlCommonProps,
  ArrowsControlState,
  PageControlCommonProps,
  PageControlState,
  PageControlStylesType,
} from '@/components/pageControl/types';

import { COLORS, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { ArrowsControlVariant, PageControlVariant } from './variants';

const commonProps: PageControlCommonProps = {
  container: {
    display: 'flex',
    align_items: 'center',
    justify_content: 'center',
    width: 'auto',
  },
  dotsContainer: {
    display: 'flex',
    align_items: 'center',
    justify_content: 'center',
    gap: SPACINGS.spacing_150,
  },
};

const arrowCommonProps: ArrowsControlCommonProps = {
  leftArrowControlContainer: {
    margin_right: SPACINGS.spacing_150,
  },
  rightArrowControlContainer: {
    margin_left: SPACINGS.spacing_150,
  },
};

const commonArrowStateProps = {
  icon: {
    width: SIZES.size_250,
    height: SIZES.size_250,
  },
};

export const PAGE_CONTROL_STYLES: PageControlStylesType<PageControlVariant, ArrowsControlVariant> =
  {
    [PageControlVariant.BULLETS]: {
      isBullet: true,
      ...commonProps,
      dotsContainer: {
        ...commonProps.dotsContainer,
        flex: 'none',
      },
      [PageControlState.CURRENT]: {
        pageDot: {
          position: 'relative',
          border_radius: RADIUS.radius_50,
          background_color: COLORS.SECONDARY.color_secondary_icon_100,
          height: SPACINGS.spacing_150,
          width: SPACINGS.spacing_300,
          flex: 'none',
        },
      },
      [PageControlState.DEFAULT]: {
        pageDot: {
          position: 'relative',
          border_radius: RADIUS.radius_100,
          background_color: COLORS.NEUTRAL.color_neutral_icon_150,
          height: SPACINGS.spacing_150,
          width: SPACINGS.spacing_150,
          flex: 'none',
        },
      },
      [PageControlState.LAST]: {
        pageDot: {
          position: 'relative',
          border_radius: RADIUS.radius_100,
          background_color: COLORS.NEUTRAL.color_neutral_icon_150,
          height: SPACINGS.spacing_100,
          width: SPACINGS.spacing_100,
          flex: 'none',
        },
      },
    },
    [ArrowsControlVariant.DEFAULT]: {
      ...arrowCommonProps,
      [ArrowsControlState.INACTIVE]: {
        icon: {
          ...commonArrowStateProps.icon,
          color: COLORS.NEUTRAL.color_neutral_icon_100,
        },
      },
      [ArrowsControlState.ACTIVE]: {
        icon: {
          ...commonArrowStateProps.icon,
          color: COLORS.ACCENT.color_accent_default_icon_100,
        },
      },
    },
  };
