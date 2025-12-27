import type { TableVariantStyles } from '@/components/table/types/tableTheme';

import { cssVars } from '@/lib/designSystem/kubit/css/cssVars';

import { TableVariantType } from './variants';

type TableVariants = keyof typeof TableVariantType;

export const TABLE: TableVariantStyles<TableVariants> = {
  $attributes: {
    'data-truncate': {
      position: 'sticky',
      top: cssVars.spacings_spacing_0,
    },
  },
  _container: {
    display: 'table',
    width: cssVars.spacings_spacing_100_percent,
  },
  _headBoxShadow: { box_shadow: '0 2px 4px 0 #d62c2c' },
  _leftBoxShadow: { box_shadow: 'rgb(214, 44, 44) 8px 0px 5px -7px inset' },
  _leftBoxShadowContainer: {
    bottom: cssVars.spacings_spacing_0,
    pointer_events: 'none',
    position: 'absolute',
    top: cssVars.spacings_spacing_0,
    transition: 'box-shadow 200ms',
    width: '5px',
  },
  _rightBoxShadow: { box_shadow: 'rgb(214, 44, 44) -8px 0px 5px -7px inset' },
  _rightBoxShadowContainer: {
    bottom: cssVars.spacings_spacing_0,
    pointer_events: 'none',
    position: 'absolute',
    top: cssVars.spacings_spacing_0,
    transition: 'box-shadow 200ms',
    width: '5px',
  },
  _scrollableContainer: {
    overflow: 'auto',
    width: cssVars.spacings_spacing_100_percent,
  },
  position: 'relative',
  [TableVariantType.DEFAULT]: {},
  width: cssVars.spacings_spacing_100_percent,
};
