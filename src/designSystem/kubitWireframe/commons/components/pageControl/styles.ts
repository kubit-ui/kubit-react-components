import {
  ArrowsControlCommonProps,
  ArrowsControlState,
  PageControlCommonProps,
  PageControlState,
  PageControlStylesType,
} from '@/components/pageControl/types';
import {
  shadowAfterStylesSpecificProps,
  transformShadow,
} from '@/designSystem/kubitWireframe/utils/wireframe';

import { BORDERS, RADIUS, SIZES, SPACINGS } from '../../foundations';
import { ArrowsControlVariant, PageControlVariant } from './variants';

export const getPageControlStyles = (COLORS: {
  [key: string]: { [key: string]: string };
}): PageControlStylesType<PageControlVariant, ArrowsControlVariant> => {
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

  return {
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
          border_radius: RADIUS.radius_275,
          background_color: COLORS.SECONDARY.color_secondary_icon_100,
          height: SPACINGS.spacing_250,
          width: SPACINGS.spacing_250,
          flex: 'none',
          border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
        },
      },
      [PageControlState.DEFAULT]: {
        pageDot: {
          position: 'relative',
          border_radius: RADIUS.radius_275,
          background_color: COLORS.SECONDARY.color_secondary_bg_150,
          height: SPACINGS.spacing_250,
          width: SPACINGS.spacing_250,
          flex: 'none',
          border: `${BORDERS.border_50} solid ${COLORS.NEUTRAL.color_neutral_border_50}`,
          ...transformShadow(RADIUS.radius_300),
          ...shadowAfterStylesSpecificProps(
            RADIUS.radius_300,
            COLORS.BRAND.color_brand_bg_50,
            '2px',
            SPACINGS.spacing_250,
            SPACINGS.spacing_250
          ),
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
};
