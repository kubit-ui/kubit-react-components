import type { OverlayVariantStyles } from '@kubit-ui-web/react-components';

import { cssVars } from '@/designSystem/kubit/css/cssVars';

import { OverlayVariantType } from './variants';

type OverlayVariants = keyof typeof OverlayVariantType;

export const OVERLAY: OverlayVariantStyles<OverlayVariants> = {
  background_color: '#D9D9D9',
  left: '0',
  opacity: '0.7',
  [OverlayVariantType.DEFAULT]: {
    height: cssVars.spacings_spacing_100_vh,
    width: cssVars.spacings_spacing_100_vw,
  },
  [OverlayVariantType.SECONDARY]: {
    height: cssVars.spacings_spacing_100_percent,
    width: cssVars.spacings_spacing_100_percent,
  },
  position: 'fixed',
  top: '0',
  z_index: cssVars.z_index_overlay,
};
