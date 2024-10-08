import { ICONS } from '@/designSystem/kubit/assets';

import { getComponentsStyles } from '../commons/components/styles';
import { getFoundations } from '../commons/foundations';
import { getColors } from '../commons/foundations/colors';

const COLORS = { ...getColors('#FF597D', '#99354B') };
const COMPONENTS_STYLES = { ...getComponentsStyles(COLORS) };
const FOUNDATIONS_STYLES = { ...getFoundations('#FF597D') };

export const KUBIT_WIREFRAME_VULCAN_STYLES = {
  ...FOUNDATIONS_STYLES,
  ...COMPONENTS_STYLES,
  ICONS,
};
