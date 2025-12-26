import type { InputDecorationVariantStyles } from '@/components/inputDecoration/types/inputDecorationTheme';
import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';
import { STATES } from '@/lib/types/states/states';

import { InputDecorationVariantType } from './variants';

type InputDecorationVariants = keyof typeof InputDecorationVariantType;

export const INPUT_DECORATION: InputDecorationVariantStyles<InputDecorationVariants> =
  {
    $attributes: {
      'data-state': {
        [STATES.DISABLED_EMPTY]: {
          cursor: 'none',
        },
        [STATES.DISABLED_FILLED]: {
          cursor: 'none',
        },
      },
    },
    _decoration: {
      $attributes: {
        'data-state': {
          [STATES.DISABLED_EMPTY]: {
            color: cssVars.colors_disabled_color_accentdisabled_icon_50,
          },
          [STATES.DISABLED_FILLED]: {
            color: cssVars.colors_disabled_color_accentdisabled_icon_50,
          },
        },
      },
      color: cssVars.colors_accent_color_default_icon_100,
      height: cssVars.sizes_size_250,
      width: cssVars.sizes_size_250,
    },
    align_items: 'center',
    display: 'flex',
    height: cssVars.sizes_size_250,
    [InputDecorationVariantType.STANDARD]: {},
    margin: `${cssVars.spacings_spacing_250} ${cssVars.spacings_spacing_0}`,
    width: cssVars.sizes_size_250,
  };
