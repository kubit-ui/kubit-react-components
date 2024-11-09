import { ICONS } from '@/designSystem/kubit/assets/icons/icons';

import { getComponentsStyles } from '../commons/components/styles';
import { getColors } from '../commons/foundations/colors';
import { getFoundations } from '../commons/foundations/getFoundations';

const COLORS = { ...getColors('#62D8C0', '#347366') };
const COMPONENTS_STYLES = { ...getComponentsStyles(COLORS) };
const FOUNDATIONS_STYLES = { ...getFoundations('#62D8C0') };

export const KUBIT_WIREFRAME_ROOT_STYLES = {
  ...FOUNDATIONS_STYLES,
  ...COMPONENTS_STYLES,
  ICONS,
};
