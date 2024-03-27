import { ICONS } from './assets';
import * as COMPONENTS_STYLES from './components/styles';
import * as VARIANTS from './components/variants';
import * as FOUNDATIONS_STYLES from './foundations';

export * from './globalStyles';

export const KUBIT_STYLES = {
  ...FOUNDATIONS_STYLES,
  ...COMPONENTS_STYLES,
  ICONS,
};

export const KUBIT_VARIANTS = {
  ...VARIANTS,
};
