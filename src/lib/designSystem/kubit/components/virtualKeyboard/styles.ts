import type { VirtualKeyboardVariantStyles } from '@/components/virtualKeyboard/types/virtualKeyboardTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { VirtualKeyboardVariantType } from './variants';

type VirtualKeyboardVariants = keyof typeof VirtualKeyboardVariantType;

export const VIRTUAL_KEYBOARD: VirtualKeyboardVariantStyles<VirtualKeyboardVariants> =
  {
    _digitButtons: {
      align_items: 'center',
      border_bottom_width: cssVars.borders_border_50,
      border_right_width: cssVars.borders_border_50,
      border_style: 'solid',
      cursor: 'pointer',
      display: 'flex',
      justify_content: 'center',
      padding: `${cssVars.spacings_spacing_200} ${cssVars.spacings_spacing_150}`,
    },
    _digitText: {
      align_items: 'center',
      display: 'flex',
      justify_content: 'center',
      ...TEXT[TextVariantType.PARAGRAPH_MEDIUM_EXPANDED],
    },
    _digitWrapper: {
      $advancedSelectors: [
        {
          descendant: {
            $target: 'button:nth-child(n + 6)',
            border_bottom: 'none',
          },
        },
      ],
      display: 'grid',
      grid_area: '1 / 1 / 3 / 6',
      grid_template_columns: 'auto auto auto auto auto',
    },
    _iconContainer: {
      color: cssVars.colors_accent_color_default_icon_100,
      height: cssVars.spacings_spacing_400,
      width: cssVars.spacings_spacing_400,
    },
    _removeButton: {
      $pseudoClasses: {
        active: {
          background_color: cssVars.colors_neutral_color_bg_200,
        },
      },
      align_items: 'center',
      cursor: 'pointer',
      grid_area: '1 / 6 / 3 / 7',
      justify_content: 'center',
      min_width: '3.5rem',
      padding: `${cssVars.spacings_spacing_0} ${cssVars.spacings_spacing_50}`,
    },
    border_radius: `${cssVars.radius_00} ${cssVars.radius_00} ${cssVars.radius_75} ${cssVars.radius_75}`,
    border_style: 'solid',
    border_width: cssVars.borders_border_50,
    display: 'grid',
    grid_column_gap: cssVars.spacings_spacing_0,
    grid_row_gap: cssVars.spacings_spacing_0,
    grid_template_columns: 'repeat(6, 1fr)',
    grid_template_rows: 'repeat(2, 1fr)',
    min_width: '20.5rem',
    overflow: 'hidden',
    [VirtualKeyboardVariantType.DEFAULT]: {
      _digitButtons: {
        $pseudoClasses: {
          active: {
            background_color: cssVars.colors_neutral_color_bg_200,
          },
        },
        background_color: cssVars.colors_neutral_color_bg_250,
        border_bottom_color: cssVars.colors_neutral_color_border_150,
        border_right_color: cssVars.colors_neutral_color_border_150,
      },
      _digitText: {
        color: cssVars.colors_neutral_color_font_50,
      },
      background_color: cssVars.colors_neutral_color_bg_250,
      border_color: cssVars.colors_neutral_color_border_150,
    },
  };
