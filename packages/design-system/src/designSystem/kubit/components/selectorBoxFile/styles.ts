import type { SelectorBoxFileVariantStyles } from '@/components/selectorBoxFile/types/selectorBoxFileTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';
import { STATES } from '@/lib/types/states/states';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { SelectorBoxFileVariantType } from './variants';

type SelectorBoxFileVariants = keyof typeof SelectorBoxFileVariantType;

export const SELECTOR_BOX_FILE: SelectorBoxFileVariantStyles<SelectorBoxFileVariants> =
  {
    _actionIcon: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED]: {
            display: 'none',
          },
          [STATES.LOADING]: {
            display: 'none',
          },
        },
      },
      display: 'inline',
      height: cssVars.spacings_spacing_350,
      margin_right: cssVars.spacings_spacing_350,
      width: cssVars.spacings_spacing_350,
    },
    _actionIconAndActionTextContainer: {
      display: 'flex',
      gap: cssVars.spacings_spacing_100,
    },
    _animationContainer: {
      padding: cssVars.spacings_spacing_0,
    },
    _borderAnimationContainer: {
      padding: cssVars.spacings_spacing_0,
    },
    _bottomAnimationContainer: {
      padding: cssVars.spacings_spacing_0,
    },
    _containerActionContainer: {
      display: 'flex',
      flex_direction: 'row',
      justify_content: 'space-between',
    },
    _containerBoxActionText: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED]: {
            text_decoration: 'none',
          },
          [STATES.ERROR]: {
            color: cssVars.colors_accent_color_default_font_100,
            ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
          },
          [STATES.LOADING]: {
            color: cssVars.colors_accent_color_default_font_100,
            ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
          },
          [STATES.SUCCESS]: {
            color: cssVars.colors_accent_color_default_font_100,
            ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
          },
        },
      },
      display: 'flex',
      flex_direction: 'row',
      font_variant: TextVariantType.PARAGRAPH_MEDIUM_EXTENDED,
      font_weight: cssVars.font_weight_400,
      padding_left: cssVars.spacings_spacing_150,
      text_decoration: 'underline',
    },
    _containerBoxContainer: {
      align_items: 'center',
      border: `${cssVars.borders_border_50} dashed ${cssVars.colors_secondary_color_border_50}`,
      cursor: 'pointer',
      display: 'flex',
      flex_direction: 'row',
      gap: cssVars.spacings_spacing_300,
      padding: cssVars.spacings_spacing_450,
    },
    _containerBoxDescription: {
      ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXTENDED],
      color: cssVars.colors_neutral_color_font_50,
      font_weight: cssVars.font_weight_400,
      gap: cssVars.spacings_spacing_600,
    },
    _containerBoxFilename: {
      ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXTENDED],
      color: cssVars.colors_neutral_color_bg_50,
      font_weight: cssVars.font_weight_400,
    },
    _containerBoxIcon: {
      height: cssVars.spacings_spacing_450,
      width: cssVars.spacings_spacing_450,
    },
    _containerBoxTextsContainer: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED]: {
            background_color:
              cssVars.colors_disabled_color_accentdisabled_bg_150,
            border: `${cssVars.borders_border_50} dashed ${cssVars.colors_disabled_color_accentdisabled_border_50}`,
          },
          [STATES.ERROR]: {
            color: cssVars.colors_accent_color_default_font_100,
            ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
          },
          [STATES.LOADING]: {
            color: cssVars.colors_accent_color_default_font_100,
            ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
          },
          [STATES.SUCCESS]: {
            color: cssVars.colors_accent_color_default_font_100,
            ...TEXT[TextVariantType.PARAGRAPH_SMALL_EXTENDED],
          },
        },
      },
      display: 'flex',
      flex_direction: 'column',
      word_break: 'break-word',
    },
    _header: {
      display: 'flex',
      flex_direction: 'column',
      gap: cssVars.spacings_spacing_300,
    },
    _leftAnimationContainer: {
      padding: cssVars.spacings_spacing_0,
    },
    _rightAnimationContainer: {
      padding: cssVars.spacings_spacing_0,
    },
    _topAnimationContainer: {
      padding: cssVars.spacings_spacing_0,
    },
    display: 'flex',
    flex_direction: 'column',
    [SelectorBoxFileVariantType.DEFAULT]: {},
    width: cssVars.spacings_spacing_100_percent,
  };
