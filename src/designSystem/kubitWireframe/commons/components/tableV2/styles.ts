import { TableStylesTypeV2 } from '@/components';

import { SPACINGS } from '../../foundations';
import { TableV2VariantType } from './variants';

export const getTableV2Styles = (COLORS: {
  [key: string]: { [key: string]: string };
}): TableStylesTypeV2<TableV2VariantType> => {
  return {
    [TableV2VariantType.DEFAULT]: {
      wrapper: {
        width: '100%',
        position: 'relative',
        box_shadow: `${SPACINGS.spacing_100} ${SPACINGS.spacing_100} ${SPACINGS.spacing_0} ${COLORS.BRAND.color_brand_bg_50}`,
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
      headBoxShadow: `0 2px 4px 0 ${COLORS.BRAND.color_brand_bg_50}`,
      leftBoxShadow: `${COLORS.BRAND.color_brand_bg_50} 8px 0px 5px -7px inset`,
      rightBoxShadow: `${COLORS.BRAND.color_brand_bg_50} -8px 0px 5px -7px inset`,
    },
    [TableV2VariantType.DEFAULT_WITHOUT_SHADOW]: {
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
        pointer_events: 'none',
      },
      rightBoxShadowContainer: {
        position: 'absolute',
        top: '0',
        pointer_events: 'none',
      },
      container: {
        display: 'table',
        width: '100%',
      },
    },
  };
};
