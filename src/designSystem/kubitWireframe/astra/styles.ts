import { ICONS } from '@/designSystem/kubit/assets/icons/icons';

import { getComponentsStyles } from '../commons/components/styles';
import { getColors } from '../commons/foundations/colors';
import { getFoundations } from '../commons/foundations/getFoundations';

const COLORS = { ...getColors('#A092F1', '#6E64A6') };
const COMPONENTS_STYLES = { ...getComponentsStyles(COLORS) };
const FOUNDATIONS_STYLES = { ...getFoundations('#A092F1') };

export const KUBIT_WIREFRAME_ASTRA_STYLES = {
  ...FOUNDATIONS_STYLES,
  ...COMPONENTS_STYLES,
  ICONS,
};
