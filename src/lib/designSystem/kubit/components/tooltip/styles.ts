import { RADIUS } from '../../foundations/borders';
import { COLORS } from '../../foundations/colors';
import { SHADOW } from '../../foundations/shadow';
import { SIZES } from '../../foundations/sizes';
import { SPACINGS } from '../../foundations/spacings';
import { FONT_WEIGHT, TEXT_ALIGN } from '../../foundations/typography';
import { Z_INDEX } from '../../foundations/zIndex';
import { POPOVER } from '../popover/styles';
import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { TooltipVariantType } from './variants';

export const TOOLTIP = {
  $foreign: {
    popover: {
      component: POPOVER,
      name: 'popover',
    },
  },
  $mediaQueries: {
    mobile: {
      [TooltipVariantType.DEFAULT]: {
        _arrowContainer: {
          display: 'none',
        },
        _tooltipInternalContainer: {
          border_radius: RADIUS.radius_50,
          max_height: '30rem',
          max_width: 'none',
          padding: SPACINGS.spacing_300,
          width: 'max-content',
        },
      },
    },
    tablet: {
      [TooltipVariantType.DEFAULT]: {
        _paragraph: {
          color: COLORS.NEUTRAL.color_neutral_font_50,
        },
      },
    },
  },
  _arrow: {
    margin: SPACINGS.spacing_0,
  },
  _arrowContainer: {
    margin: SPACINGS.spacing_0,
  },
  _arrowPosition: {
    margin: SPACINGS.spacing_0,
  },
  _arrowSize: {
    margin: SPACINGS.spacing_0,
  },
  _closeButtonContainer: {
    margin: SPACINGS.spacing_0,
  },
  _closeButtonIcon: {
    margin: SPACINGS.spacing_0,
  },
  _divider: {
    margin: SPACINGS.spacing_0,
  },
  _dragIcon: {
    margin: SPACINGS.spacing_0,
  },
  _dragIconContainer: {
    margin: SPACINGS.spacing_0,
  },
  _headerContainer: {
    margin: SPACINGS.spacing_0,
  },
  _paragraph: {
    margin: SPACINGS.spacing_0,
  },
  _paragraphContainer: {
    margin: SPACINGS.spacing_0,
  },
  _title: {
    margin: SPACINGS.spacing_0,
  },
  _tooltipAlignStyles: {
    margin: SPACINGS.spacing_0,
  },
  _tooltipAsModal: {
    margin: SPACINGS.spacing_0,
  },
  _tooltipExternalContainer: {
    margin: SPACINGS.spacing_0,
  },
  _tooltipInternalContainer: {
    margin: SPACINGS.spacing_0,
  },

  [TooltipVariantType.DEFAULT]: {
    _arrowContainer: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_150,
    },
    _arrowPosition: {
      top: '10px',
    },
    _arrowSize: {
      height: '10px',
      width: '10px',
    },
    _closeButtonContainer: {
      margin_bottom: SPACINGS.spacing_300,
    },
    _closeButtonIcon: {
      color: COLORS.ACCENT.color_accent_default_icon_150,
      height: SIZES.size_300,
      width: SIZES.size_300,
    },
    _headerContainer: {
      flex_direction: 'column',
    },
    _paragraph: {
      font_weight: FONT_WEIGHT.font_weight_400,
      text_align: TEXT_ALIGN.left,
      ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXPANDED],
      color: COLORS.NEUTRAL.color_neutral_font_250,
    },
    _paragraphContainer: {
      flex_direction: 'column',
    },
    _title: {
      color: COLORS.NEUTRAL.color_neutral_font_250,
      font_weight: FONT_WEIGHT.font_weight_400,
      text_align: TEXT_ALIGN.left,
      ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXPANDED],
    },
    _tooltipExternalContainer: {
      box_sizing: 'border-box',
      display: 'none',
      padding: SPACINGS.spacing_250,
      position: 'absolute',
      z_index: Z_INDEX.OVERLAY,
    },
    _tooltipInternalContainer: {
      background_color: COLORS.NEUTRAL.color_neutral_bg_150,
      border_radius: RADIUS.radius_50,
      box_shadow: SHADOW.shadow_10,
      display: 'flex',
      flex_direction: 'column',
      max_height: '30rem',
      max_width: '20rem',
      padding: SPACINGS.spacing_300,
      width: 'max-content',
    },
  },
};
