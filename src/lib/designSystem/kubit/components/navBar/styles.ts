import type { NavBarVariantStyles } from '@/components/navBar/types/navBarTheme';

import { NavBarVariantType } from './variants';

type NavBarVariants = keyof typeof NavBarVariantType;

export const NAVBAR: NavBarVariantStyles<NavBarVariants> = {
  _itemContainer: {
    $attributes: {
      'data-position': {
        CENTER: {
          flex: '2',
          justify_content: 'center',
        },
        LEFT: {
          flex: '1',
          justify_content: 'flex-start',
        },
        RIGHT: {
          flex: '1',
          justify_content: 'flex-end',
        },
      },
    },
    display: 'flex',
    gap: '1rem',
  },
  display: 'flex',
  justify_content: 'space-between',
  [NavBarVariantType.DEFAULT]: {},
};
