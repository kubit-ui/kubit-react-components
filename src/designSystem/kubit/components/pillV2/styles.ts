import { PillStylesType } from '@/components/pillV2/types';

import { PILL_STYLES_DEFAULT } from './styles/default';
import { PILL_STYLES_PILL_SELECTOR } from './styles/pillSelector';
import { PillVariantTypeV2 } from './variants';

export const PILL_STYLES_V2: PillStylesType = {
  [PillVariantTypeV2.DEFAULT]: PILL_STYLES_DEFAULT,
  [PillVariantTypeV2.PILL_SELECTOR]: PILL_STYLES_PILL_SELECTOR,
};
