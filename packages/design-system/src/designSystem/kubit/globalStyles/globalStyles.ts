import { FONT_FAMILY } from '../foundations/typography';
import { UTILITY_CLASSES } from './utilityClasses';

export const GLOBAL_STYLES = [
  {
    styles: {
      font_family: FONT_FAMILY.font_family_nunito_sans,
    },
    targets: 'html, body, *',
  },
  {
    styles: {
      box_sizing: 'border-box',
    },
    targets: '*, *::before, *::after',
  },
  {
    styles: {
      border: '0',
      clip: 'rect(0, 0, 0, 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      width: '1px',
    },
    targets: '.kbt-sr-only',
  },
  {
    styles: {
      box_shadow: '0 0 0 3px rgba(0, 0, 0, 0.6)',
      outline: 'none',
    },
    targets: '.global-focus-visible:focus-visible',
  },
  {
    styles: {
      box_shadow: '0 0 0 0.25rem #fff',
      outline_color: '#2C71DB',
      outline_offset: '0.25rem',
      outline_style: 'solid',
      outline_width: '0.25rem',
    },
    targets: 'body *:focus-visible',
  },
  {
    styles: {
      /* Inner border */
      box_shadow: '',
      outline_color: '',
      outline_offset: '',
      /* Outer border */
      outline_style: 'solid',
      outline_width: '',
    },
    targets: '.kbt-global-focus',
  },
  ...UTILITY_CLASSES,
];
