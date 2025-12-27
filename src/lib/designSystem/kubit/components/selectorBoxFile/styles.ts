import type { SelectorBoxFileVariantStyles } from '@/components/selectorBoxFile/types/selectorBoxFileTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';
import { STATES } from '@/lib/types/states/states';

import { BUTTON } from '../button/styles';
import { ButtonSizeType, ButtonVariantType } from '../button/variants';
import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { TOOLTIP } from '../tooltip/styles';
import { TooltipVariantType } from '../tooltip/variants';
import { SelectorBoxFileVariantType } from './variants';

type SelectorBoxFileVariants = keyof typeof SelectorBoxFileVariantType;

export const SELECTOR_BOX_FILE: SelectorBoxFileVariantStyles<SelectorBoxFileVariants> =
  {
    $foreign: {
      button_size: {
        component: BUTTON,
        name: 'button',
        variant: ButtonSizeType.SMALL,
      },
      button_variant: {
        component: BUTTON,
        name: 'button',
        variant: ButtonVariantType.ACTION_SECONDARY,
      },
      tooltip: {
        component: TOOLTIP,
        name: 'tooltip',
        variant: TooltipVariantType.DEFAULT,
      },
    },
    _actionDescriptionContainer: {
      display: 'flex',
      flex_direction: 'column',
    },
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
    _description: {
      ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXTENDED],
      color: cssVars.colors_neutral_color_bg_50,
      font_weight: cssVars.font_weight_400,
    },
    _descriptionContainer: {
      align_items: 'baseline',
      display: 'flex',
      flex_direction: 'column',
      gap: cssVars.spacings_spacing_150,
    },
    _errorMessage: {
      ...TEXT[TextVariantType.DEFAULT],
      color: cssVars.colors_feedback_color_feedbackerror_font_50,
      font_weight: cssVars.font_weight_400,
    },
    _errorMessageContainer: {
      align_items: 'start',
      display: 'flex',
      flex_direction: 'row',
      gap: cssVars.spacings_spacing_100,
      margin_top: cssVars.spacings_spacing_150,
    },
    _errorMessageIcon: {
      height: cssVars.spacings_spacing_300,
      width: cssVars.spacings_spacing_300,
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
    _subtitle: {
      ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXTENDED],
      color: cssVars.colors_neutral_color_bg_50,
      font_weight: cssVars.font_weight_400,
    },
    _subtitleTooltipContainer: {
      $advancedSelectors: [
        {
          child: {
            $target: '*:nth-child(1)',
            display: 'inline',
          },
        },
        {
          child: {
            $target: '*:nth-child(2)',
            vertical_align: 'middle',
          },
        },
      ],
      padding: cssVars.spacings_spacing_0,
    },
    _title: {
      ...TEXT[TextVariantType.PARAGRAPH_LARGE_EXTENDED],
      color: cssVars.colors_neutral_color_bg_50,
      font_weight: cssVars.font_weight_600,
    },
    _titleSubtitleContainer: {
      display: 'flex',
      flex_direction: 'column',
      gap: cssVars.spacings_spacing_150,
    },
    _tooltipIcon: {
      height: cssVars.spacings_spacing_400,
      width: cssVars.spacings_spacing_400,
    },
    _tooltipIconContainer: {
      display: 'inline',
      margin_left: cssVars.spacings_spacing_100,
    },
    _topAnimationContainer: {
      padding: cssVars.spacings_spacing_0,
    },
    display: 'flex',
    flex_direction: 'column',
    [SelectorBoxFileVariantType.DEFAULT]: {},
    width: cssVars.spacings_spacing_100_percent,
  };
