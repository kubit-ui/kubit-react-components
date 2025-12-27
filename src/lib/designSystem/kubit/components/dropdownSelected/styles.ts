import type { DropdownSelectedVariantStyles } from '@/components/dropdownSelected/types/dropdownSelectedTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { DropdownSelectedVariantType } from './variants';

type DropdownSelectedVariant = keyof typeof DropdownSelectedVariantType;

export const DROPDOWN_SELECTED: DropdownSelectedVariantStyles<DropdownSelectedVariant> =
  {
    _buttonOrLinkContainer: {
      align_items: 'center',
      cursor: 'pointer',
      display: 'flex',
      gap: cssVars.spacings_spacing_150,
      justify_content: 'space-between',
      width: cssVars.spacings_spacing_100_percent,
    },
    _iconClosed: {
      height: cssVars.spacings_spacing_350,
      width: cssVars.spacings_spacing_350,
    },
    _iconOpened: {
      height: cssVars.spacings_spacing_350,
      width: cssVars.spacings_spacing_350,
    },
    _labelClosed: {
      ...TEXT[TextVariantType.PARAGRAPH_CAPTION_EXTENDED],
      color: cssVars.colors_accent_color_default_font_150,
      font_weight: cssVars.font_weight_400,
    },
    _labelOpened: {
      ...TEXT[TextVariantType.PARAGRAPH_CAPTION_EXTENDED],
      color: cssVars.colors_accent_color_default_font_150,
      font_weight: cssVars.font_weight_400,
    },
    _listOptionsContainer: {
      display: 'block',
    },
    display: 'flex',
    [DropdownSelectedVariantType.DEFAULT]: {
      _buttonOrLinkContainer: {
        $mediaQueries: {
          mobile: {
            padding: `${cssVars.spacings_spacing_50} ${cssVars.spacings_spacing_100}`,
          },
        },
        background_color: cssVars.colors_neutral_color_bg_50,
        padding: `${cssVars.spacings_spacing_100} ${cssVars.spacings_spacing_150}`,
      },
      _iconClosed: {
        color: cssVars.colors_neutral_color_font_250,
      },
      _iconOpened: {
        color: cssVars.colors_neutral_color_font_250,
      },
      _labelClosed: {
        color: cssVars.colors_accent_color_default_font_150,
      },
      _labelOpened: {
        color: cssVars.colors_accent_color_default_font_150,
      },
      _listOptionsContainer: {
        $mediaQueries: {
          desktop: {
            max_width: '20rem',
          },
          mobile: {
            box_shadow: 'none',
            max_width: cssVars.spacings_spacing_100_percent,
          },
          tablet: {
            max_width: '16rem',
          },
        },
        border: `${cssVars.spacings_spacing_50} solid ${cssVars.colors_neutral_color_border_50}`,
        box_shadow: cssVars.shadow_10,
        max_width: '15rem',
      },
      border_right: `${cssVars.spacings_spacing_25} solid ${cssVars.colors_neutral_color_border_50}`,
    },
    [DropdownSelectedVariantType.SIDE_MENU]: {
      _buttonOrLinkContainer: {
        $mediaQueries: {
          mobile: {
            padding: cssVars.spacings_spacing_100,
          },
        },
        background_color: cssVars.colors_neutral_color_bg_100,
        padding: cssVars.spacings_spacing_150,
      },
      _iconClosed: {
        color: cssVars.colors_neutral_color_font_250,
      },
      _iconOpened: {
        color: cssVars.colors_neutral_color_font_250,
      },
      _labelClosed: {
        color: cssVars.colors_accent_color_default_font_150,
      },
      _labelOpened: {
        color: cssVars.colors_accent_color_default_font_150,
      },
      _listOptionsContainer: {
        background_color: cssVars.colors_neutral_color_bg_250,
        border: '1px solid black',
        margin_top: cssVars.spacings_spacing_350,
      },
      border_width: cssVars.borders_border_00,
      padding: cssVars.spacings_spacing_100,
    },
    [DropdownSelectedVariantType.TOPBAR]: {
      _buttonOrLinkContainer: {
        $mediaQueries: {
          mobile: {
            padding: cssVars.spacings_spacing_100,
          },
        },
        background_color: cssVars.colors_neutral_color_bg_100,
        padding: cssVars.spacings_spacing_150,
      },
      _iconClosed: {
        color: cssVars.colors_neutral_color_font_250,
      },
      _iconOpened: {
        color: cssVars.colors_neutral_color_font_250,
      },
      _labelClosed: {
        color: cssVars.colors_accent_color_default_font_150,
      },
      _labelOpened: {
        color: cssVars.colors_accent_color_default_font_150,
      },
      _listOptionsContainer: {
        background_color: cssVars.colors_neutral_color_bg_250,
        border: '1px solid black',
        margin_top: cssVars.spacings_spacing_350,
      },
      border_width: cssVars.borders_border_00,
      padding: cssVars.spacings_spacing_100,
    },
    [DropdownSelectedVariantType.TOPBAR_TAB]: {
      _buttonOrLinkContainer: {
        $mediaQueries: {
          mobile: {
            padding: cssVars.spacings_spacing_150,
          },
        },
        $pseudoClasses: {
          hover: {
            background_color: cssVars.colors_neutral_color_bg_100,
          },
        },
        background_color: cssVars.colors_neutral_color_bg_50,
        padding: cssVars.spacings_spacing_250,
        text_decoration: 'none',
      },
      _iconClosed: {
        color: cssVars.colors_neutral_color_icon_250,
      },
      _iconOpened: {
        color: cssVars.colors_neutral_color_icon_250,
      },
      _labelClosed: {
        color: cssVars.colors_accent_color_default_font_150,
      },
      _labelOpened: {
        color: cssVars.colors_accent_color_default_font_150,
      },
      _listOptionsContainer: {
        margin_top: cssVars.spacings_spacing_200,
      },
      display: 'flex',
      flex_direction: 'column',
    },
    position: 'relative',
  };
