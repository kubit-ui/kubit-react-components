import { SliderStateType, SliderStylesType } from '@/components/slider';
import { TooltipAlignType } from '@/components/tooltip';

import { BORDERS, COLORS, RADIUS, SPACINGS, TEXT_ALIGN } from '../../foundations';
// text variants
import { TextVariantType } from '../text';
import { TooltipVariantType } from '../tooltip';
import { SliderVariantType } from './variants';

const commonProps = {
  scaleContainer: {
    position: 'relative',
    width: '100%',
    height: SPACINGS.spacing_100,
  },
  scaleOption: {
    position: 'absolute',
    background_color: COLORS.NEUTRAL.color_neutral_bg_100,
    width: '0.0625rem',
    height: '100%',
  },
  tracksThumbsContainer: {
    position: 'relative',
    width: '100%',
    height: SPACINGS.spacing_100,
    margin_top: SPACINGS.spacing_100,
    margin_bottom: SPACINGS.spacing_50,
  },
  tracksThumbsInnerContainer: {
    position: 'absolute',
    top: `calc(${SPACINGS.spacing_100} / 2)`,
    right: '0px',
    bottom: '0px',
    left: '0px',
    background_color: COLORS.NEUTRAL.color_neutral_bg_100,
  },
  helperTextContainer: {
    display: 'flex',
    justify_content: 'space-between',
    margin_top: SPACINGS.spacing_200,
  },
  helperTextLeftContainer: {
    text_align: TEXT_ALIGN.left,
    margin_right: SPACINGS.spacing_100,
  },
  helperTextRightContainer: {
    text_align: TEXT_ALIGN.right,
    margin_right: SPACINGS.spacing_100,
  },
  handle_width: SPACINGS.spacing_100,
  tooltip: {
    variant: TooltipVariantType.DEFAULT,
    align: TooltipAlignType.TOP,
  },
};

const commonContainer = {
  width: '100%',
};

const commonThumb = {
  position: 'absolute',
  box_sizing: 'border-box',
  pointer_events: 'inherit',
  overflow: 'visible',
  display: 'flex',
  justify_content: 'center',
  align_items: 'center',
  border_radius: '50%',
  height: SPACINGS.spacing_400,
  width: SPACINGS.spacing_400,
  top: '50%',
  border_width: BORDERS.border_200,
  transform: 'translate(-50%, -50%)',
  border_style: 'solid',
  border_color: COLORS.NEUTRAL.color_neutral_border_250,
};

const commonRightThumb = {
  ...commonThumb,
  transform: 'translate(50%, -50%)',
};

const commonInnerThumbTooltip = {
  width: SPACINGS.spacing_100,
  height: SPACINGS.spacing_100,
  border_radius: '50%',
};

const commonActiveTrack = {
  position: 'absolute',
  height: SPACINGS.spacing_100,
  top: `calc(-${SPACINGS.spacing_100} / 2)`,
  border_radius: RADIUS.radius_100,
};

const commonInactiveTrack = {
  position: 'absolute',
  height: SPACINGS.spacing_100,
  top: `calc(-${SPACINGS.spacing_100} / 2)`,
  border_radius: RADIUS.radius_100,
};

const commonHelperText = {
  font_variant: TextVariantType.DEFAULT,
  color: COLORS.NEUTRAL.color_neutral_bg_50,
};

export const SLIDER_STYLES: SliderStylesType<SliderVariantType> = {
  [SliderVariantType.PRIMARY]: {
    ...commonProps,
    states: {
      [SliderStateType.DEFAULT]: {
        container: {
          ...commonContainer,
          cursor: 'default',
        },
        thumb: {
          ...commonThumb,
          background_color: COLORS.ACCENT.color_accent_default_icon_100,
        },
        rightThumb: {
          ...commonRightThumb,
          background_color: COLORS.ACCENT.color_accent_default_icon_100,
        },
        innerThumbTooltip: {
          ...commonInnerThumbTooltip,
        },
        activeTrack: {
          ...commonActiveTrack,
          background_color: COLORS.ACCENT.color_accent_default_font_100,
        },
        inactiveTrack: {
          ...commonInactiveTrack,
          background_color: COLORS.NEUTRAL.color_neutral_icon_100,
        },
        helperText: {
          ...commonHelperText,
        },
      },
      [SliderStateType.HOVER]: {
        container: {
          ...commonContainer,
          cursor: 'grab',
        },
        thumb: {
          ...commonThumb,
          background_color: COLORS.ACCENT.color_accent_hover_bg_50,
        },
        rightThumb: {
          ...commonRightThumb,
          background_color: COLORS.ACCENT.color_accent_hover_bg_50,
        },
        innerThumbTooltip: {
          ...commonInnerThumbTooltip,
        },
        activeTrack: {
          ...commonActiveTrack,
          background_color: COLORS.ACCENT.color_accent_default_bg_100,
        },
        inactiveTrack: {
          ...commonInactiveTrack,
          background_color: COLORS.NEUTRAL.color_neutral_bg_100,
        },
        helperText: {
          ...commonHelperText,
        },
      },
      [SliderStateType.PRESSED]: {
        container: {
          ...commonContainer,
          cursor: 'grabbing',
        },
        thumb: {
          ...commonThumb,
          background_color: COLORS.PRESSED.color_accent_pressed_bg_50,
        },
        rightThumb: {
          ...commonRightThumb,
          background_color: COLORS.ACCENT.color_accent_pressed_bg_50,
        },
        innerThumbTooltip: {
          ...commonInnerThumbTooltip,
        },
        activeTrack: {
          ...commonActiveTrack,
          background_color: COLORS.ACCENT.color_accent_default_bg_100,
        },
        inactiveTrack: {
          ...commonInactiveTrack,
          background_color: COLORS.NEUTRAL.color_neutral_bg_100,
        },
        helperText: {
          ...commonHelperText,
        },
      },
      [SliderStateType.DISABLED]: {
        container: {
          ...commonContainer,
          cursor: 'default',
        },
        thumb: {
          ...commonThumb,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_50,
        },
        rightThumb: {
          ...commonRightThumb,
          background_color: COLORS.DISABLED.color_accentDisabled_bg_50,
        },
        innerThumbTooltip: {
          ...commonInnerThumbTooltip,
        },
        activeTrack: {
          ...commonActiveTrack,
          background_color: COLORS.DISABLED.color_accentDisabled_border_50,
        },
        inactiveTrack: {
          ...commonInactiveTrack,
          background_color: COLORS.DISABLED.color_accentDisabled_border_100,
        },
        helperText: {
          ...commonHelperText,
        },
      },
    },
  },
  [SliderVariantType.TEST_NO_THUMB_EXCEEDS_TRACK]: {
    ...commonProps,
    thumbExceedsTrack: false,
    states: {
      [SliderStateType.DEFAULT]: {
        container: {
          ...commonContainer,
          cursor: 'default',
        },
        thumb: {
          ...commonThumb,
          background_color: COLORS.ACCENT.color_accent_default_bg_50,
        },
        rightThumb: {
          ...commonRightThumb,
          background_color: COLORS.ACCENT.color_accent_default_bg_50,
        },
        innerThumbTooltip: {
          ...commonInnerThumbTooltip,
        },
        activeTrack: {
          ...commonActiveTrack,
          background_color: COLORS.ACCENT.color_accent_default_bg_50,
        },
        inactiveTrack: {
          ...commonInactiveTrack,
          background_color: COLORS.NEUTRAL.color_neutral_bg_100,
        },
        helperText: {
          ...commonHelperText,
        },
      },
      [SliderStateType.HOVER]: {
        container: {
          ...commonContainer,
          cursor: 'grab',
        },
        thumb: {
          ...commonThumb,
          background_color: COLORS.ACCENT.color_accent_default_bg_50,
        },
        rightThumb: {
          ...commonRightThumb,
          background_color: COLORS.ACCENT.color_accent_default_bg_50,
        },
        innerThumbTooltip: {
          ...commonInnerThumbTooltip,
        },
        activeTrack: {
          ...commonActiveTrack,
          background_color: COLORS.ACCENT.color_accent_default_bg_50,
        },
        inactiveTrack: {
          ...commonInactiveTrack,
          background_color: COLORS.NEUTRAL.color_neutral_bg_100,
        },
        helperText: {
          ...commonHelperText,
        },
      },
      [SliderStateType.PRESSED]: {
        container: {
          ...commonContainer,
          cursor: 'grabbing',
        },
        thumb: {
          ...commonThumb,
          background_color: COLORS.ACCENT.color_accent_default_bg_50,
        },
        rightThumb: {
          ...commonRightThumb,
          background_color: COLORS.ACCENT.color_accent_default_bg_50,
        },
        innerThumbTooltip: {
          ...commonInnerThumbTooltip,
        },
        activeTrack: {
          ...commonActiveTrack,
          background_color: COLORS.ACCENT.color_accent_default_bg_50,
        },
        inactiveTrack: {
          ...commonInactiveTrack,
          background_color: COLORS.NEUTRAL.color_neutral_bg_100,
        },
        helperText: {
          ...commonHelperText,
        },
      },
      [SliderStateType.DISABLED]: {
        container: {
          ...commonContainer,
          cursor: 'default',
        },
        thumb: {
          ...commonThumb,
          background_color: COLORS.ACCENT.color_accent_default_bg_100,
        },
        rightThumb: {
          ...commonRightThumb,
          background_color: COLORS.ACCENT.color_accent_default_bg_100,
        },
        innerThumbTooltip: {
          ...commonInnerThumbTooltip,
        },
        activeTrack: {
          ...commonActiveTrack,
          background_color: COLORS.ACCENT.color_accent_default_bg_100,
        },
        inactiveTrack: {
          ...commonInactiveTrack,
          background_color: COLORS.ACCENT.color_accent_default_bg_100,
        },
        helperText: {
          ...commonHelperText,
        },
      },
    },
  },
};
