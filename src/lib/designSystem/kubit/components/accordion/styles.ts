import type { AccordionVariantStyles } from '@/components/accordion/types/accordionTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { AccordionVariant } from './variants';

type AccordionVariants = keyof typeof AccordionVariant;

export const ACCORDION: AccordionVariantStyles<AccordionVariants> = {
  _content: {
    $attributes: {
      ['data-state']: {
        ['collapsed']: {
          grid_template_rows: '0fr',
          padding_bottom: '0px',
          padding_top: '0px',
        },
      },
    },
    display: 'grid',
    grid_template_rows: '1fr',
    overflow: 'hidden',
    padding: cssVars.spacings_spacing_200,
    transition: 'grid-template-rows 0.3s ease-out',
  },
  _header: {
    padding: '0',
  },
  _headerButton: {
    border_radius: cssVars.radius_75,
    cursor: 'pointer',
    display: 'flex',
    padding: cssVars.spacings_spacing_200,
    width: '100%',
  },
  _innerContent: {
    min_height: '0',
    overflow: 'hidden',
  },
  [AccordionVariant.NEUTRAL]: {
    background_color: cssVars.colors_neutral_color_bg_200,
  },
  [AccordionVariant.STANDARD]: {
    background_color: cssVars.colors_neutral_color_bg_250,
  },
  border: `${cssVars.borders_border_50} solid ${cssVars.colors_neutral_color_border_50}`,
  border_radius: cssVars.radius_75,
};
