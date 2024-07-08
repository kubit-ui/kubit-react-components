import { TableStylesTypeV2 } from '@/components';

import { TableV2VariantType } from './variants';

export const TABLE_V2_STYLES: TableStylesTypeV2<TableV2VariantType> = {
  [TableV2VariantType.DEFAULT]: {
    wrapper: {
      width: '100%',
      position: 'relative',
    },
    scrollableContainer: {
      width: '100%',
      overflow: 'auto',
    },
    leftBoxShadowContainer: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '5px',
      pointer_events: 'none',
      transition: 'box-shadow 200ms',
    },
    rightBoxShadowContainer: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '5px',
      pointer_events: 'none',
      transition: 'box-shadow 200ms',
    },
    container: {
      display: 'table',
      width: '100%',
    },
    // TODO When specified - update tokens
    headBoxShadow: '0 2px 4px 0 #d62c2c',
    leftBoxShadow: 'rgb(214, 44, 44) 8px 0px 5px -7px inset',
    rightBoxShadow: 'rgb(214, 44, 44) -8px 0px 5px -7px inset',
  },
};
