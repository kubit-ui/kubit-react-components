import { ICONS } from './assets/icons/icons';
import * as COMPONENTS_STYLES from './components/styles';
// eslint-disable-next-line @kubit-ui-web/no-index-import/no-index-import
import * as FOUNDATIONS_STYLES from './foundations';

export const KUBIT_STYLES = {
  ...FOUNDATIONS_STYLES,
  ...COMPONENTS_STYLES,
  ICONS,
};
