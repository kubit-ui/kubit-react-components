import { OverlayStylesType } from '@/components/overlay/types';

import { SPACINGS, Z_INDEX } from '../../foundations';
import { OverlayVariantType } from './variants';

export const OVERLAY_STYLES: OverlayStylesType<OverlayVariantType> = {
  [OverlayVariantType.DEFAULT]: {
    container: {
      position: 'fixed',
      top: '0',
      left: '0',
      z_index: Z_INDEX.OVERLAY,
      width: SPACINGS.spacing_100_vw,
      height: SPACINGS.spacing_100_vh,
      opacity: '0.7',
      background_color: '#D9D9D9',
    },
  },
  [OverlayVariantType.SECONDARY]: {
    container: {
      position: 'fixed',
      top: '0',
      left: '0',
      z_index: Z_INDEX.OVERLAY,
      width: SPACINGS.spacing_100_percent,
      height: SPACINGS.spacing_100_percent,
      opacity: '0.7',
      background_color: '#D9D9D9',
    },
  },
};
