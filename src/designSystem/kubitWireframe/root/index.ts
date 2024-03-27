import { ICONS } from '@/designSystem/kubit/assets';

import { getComponentsStyles } from '../commons/components/styles';
import { getFoundations } from '../commons/foundations';
import { getColors } from '../commons/foundations/colors';

const COLORS = { ...getColors('#62D8C0') };
const COMPONENTS_STYLES = { ...getComponentsStyles(COLORS) };
const FOUNDATIONS_STYLES = { ...getFoundations('#62D8C0') };

export const KUBIT_WIREFRAME_ROOT_STYLES = {
  ...FOUNDATIONS_STYLES,
  ...COMPONENTS_STYLES,
  ICONS,
};
