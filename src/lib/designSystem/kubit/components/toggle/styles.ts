import type { ToggleVariantStyles } from '@/components/toggle/types/toggleTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { ToggleVariant as ToggleVariantTypes } from './variants';

type ToggleVariants = keyof typeof ToggleVariantTypes;

/**
 * Toggle Design System Styles - Venus Architecture
 *
 * This file contains THEME-BASED STYLES for the Toggle component.
 * These styles use design system tokens and handle theming, variants, and responsive behavior.
 *
 * INTEGRATION WITH CSS:
 * - CSS file (toggle.css): Handles structural layout and positioning
 * - This file: Handles colors, spacings, typography, and theme-based responsive behavior
 *
 * RESPONSIVE STRATEGY:
 * - Use $mediaQueries for theme-based responsive styles
 * - Use component-level useActiveBreakpoints for logic-based responsive behavior
 */

export const TOGGLE: ToggleVariantStyles<ToggleVariants> = {
  _icon: {
    $attributes: {
      'data-disabled': {
        color: cssVars.colors_neutral_color_icon_150,
      },
    },
    color: cssVars.colors_neutral_color_icon_50,
    height: cssVars.sizes_size_200,
    width: cssVars.sizes_size_200,
  },
  _iconWrapper: {
    align_items: 'center',
    display: 'flex',
    height: '100%',
    justify_content: 'center',
    pointer_events: 'none',
    position: 'absolute',
    transition: 'opacity 0.15s ease-in-out',
    width: '100%',
  },

  _thumb: {
    background_color: cssVars.colors_neutral_color_bg_250,
    border_radius: cssVars.radius_75,
    height: cssVars.sizes_size_200,
    transition: 'transform 0.2s ease-in-out',
    width: cssVars.sizes_size_200,
  },
  _track: {
    margin: cssVars.spacings_spacing_0,
  },
  // =================================================================
  // STYLE VARIANTS - Applied via variant prop
  // =================================================================
  [ToggleVariantTypes.REGULAR]: {
    // =================================================================
    // ELEMENT-BASED STYLES with data-state attributes pattern
    // =================================================================
    _track: {
      $attributes: {
        'data-checked': {
          background_color: cssVars.colors_brand_color_bg_50,
        },
        'data-disabled': {
          background_color: cssVars.colors_disabled_color_accentdisabled_bg_150,
          cursor: 'not-allowed',
          pointer_events: 'none',
        },
      },
      align_items: 'center',
      background_color: cssVars.colors_neutral_color_bg_200,
      border_radius: cssVars.radius_75,
      cursor: 'pointer',
      display: 'flex',
      height: cssVars.sizes_size_250, // 1.25rem = 24px
      padding: cssVars.spacings_spacing_50, // 0.125rem = 2px
      position: 'relative',
      transform: 'translateX(0)',
      width: cssVars.sizes_size_450, // 3.5rem = 56px
    },
  },
};
