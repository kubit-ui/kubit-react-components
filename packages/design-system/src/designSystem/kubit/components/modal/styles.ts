import type { ModalVariantStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';

import { TEXT } from '../text/styles';
import { TextVariantType } from '../text/variants';
import { ModalVariantType } from './variants';

type ModalVariants = keyof typeof ModalVariantType;

export const MODAL: ModalVariantStyles<ModalVariants> = {
  $mediaQueries: {
    desktop: {
      max_height: 'calc(100vh - 36px)',
      max_width: 'calc(100vw - 36px)',
      min_height: '15rem',
      min_width: '37.5rem',
    },
    mobile: {
      max_height: '100vh',
      max_width: '100vw',
    },
    tablet: {
      max_height: '100vh',
      max_width: '100vw',
      min_height: '16rem',
      min_width: '48rem',
    },
  },
  _closeButtonContainer: {
    display: 'flex',
    justify_content: 'flex-end',
  },
  _closeButtonIcon: {
    color: cssVars.colors_neutral_color_icon_50,
    height: cssVars.sizes_size_250,
    width: cssVars.sizes_size_250,
  },
  _content: {
    $mediaQueries: {
      desktop: {
        padding_left: cssVars.spacings_spacing_450,
        padding_right: cssVars.spacings_spacing_450,
      },
      mobile: {
        padding_left: cssVars.spacings_spacing_300,
        padding_right: cssVars.spacings_spacing_300,
      },
      tablet: {
        padding_left: cssVars.spacings_spacing_400,
        padding_right: cssVars.spacings_spacing_400,
      },
    },
    flex: 'auto',
    line_height: '1.5rem',
    margin_bottom: cssVars.spacings_spacing_400,
    margin_top: cssVars.spacings_spacing_0,
    overflow_y: 'auto',
    width: cssVars.spacings_spacing_100_percent,
    word_break: 'break-word',
  },
  _dragIcon: {
    height: cssVars.sizes_size_400,
    width: cssVars.sizes_size_400,
  },
  _dragIconContainer: {
    align_items: 'center',
    display: 'flex',
    justify_content: 'center',
    margin: '0 auto',
  },
  _footer: {
    $mediaQueries: {
      desktop: {
        width: `calc(${cssVars.spacings_spacing_100_percent} - (${cssVars.spacings_spacing_450} + ${cssVars.spacings_spacing_450}))`,
      },
      mobile: {
        width: `calc(${cssVars.spacings_spacing_100_percent} - (${cssVars.spacings_spacing_400} + ${cssVars.spacings_spacing_400}))`,
      },
      tablet: {
        width: `calc(${cssVars.spacings_spacing_100_percent} - (${cssVars.spacings_spacing_400} + ${cssVars.spacings_spacing_400}))`,
      },
    },
    border_top_color: cssVars.colors_neutral_color_border_200,
    border_top_width: cssVars.borders_border_50,
    padding_bottom: cssVars.spacings_spacing_400,
  },
  _headerContainer: {
    $mediaQueries: {
      desktop: {
        padding: cssVars.spacings_spacing_400,
      },
      mobile: {
        padding: `${cssVars.spacings_spacing_300} ${cssVars.spacings_spacing_300} ${cssVars.spacings_spacing_400} ${cssVars.spacings_spacing_300}`,
      },
      tablet: {
        padding: `${cssVars.spacings_spacing_300} ${cssVars.spacings_spacing_400} ${cssVars.spacings_spacing_400}`,
      },
    },
    display: 'flex',
    flex_direction: 'column',
    gap: cssVars.spacings_spacing_150,
    width: cssVars.spacings_spacing_100_percent,
  },
  _headerContentContainer: {
    align_items: 'center',
    display: 'flex',
    flex_direction: 'row-reverse',
  },
  _title: {
    color: cssVars.colors_neutral_color_font_50,
    font_weight: cssVars.font_weight_600,
    text_align: cssVars.text_align_center,
    ...TEXT[TextVariantType.HEADING_H4_EXPANDED],
  },
  _titleContainer: {
    flex_grow: '1',
  },
  _titleHiddenContainer: {
    display: 'none',
  },
  align_items: 'center',
  background_color: cssVars.colors_neutral_color_bg_250,
  border_radius: cssVars.radius_50,
  box_sizing: 'border-box',
  display: 'flex',
  flex_flow: 'column nowrap',
  [ModalVariantType.DEFAULT]: {},
  overflow_y: 'auto',
};
