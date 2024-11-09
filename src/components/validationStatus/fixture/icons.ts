import { ValidationStatusStateIconsType } from '../types/validationStatus';
import { ValidationStatusState } from '../types/validationStatusTheme';

export const stateIcons: ValidationStatusStateIconsType = {
  [ValidationStatusState.DEFAULT]: { icon: 'DOT_FILL', altText: 'default alt text' },
  [ValidationStatusState.SUCCESS]: { icon: 'CHECKMARK', altText: 'success alt text' },
  [ValidationStatusState.ERROR]: { icon: 'CLOSE_PX', altText: 'error alt text' },
};
