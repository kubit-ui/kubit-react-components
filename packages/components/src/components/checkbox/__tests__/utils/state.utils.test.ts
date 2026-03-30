import { CheckboxState } from '../../types/state';
import { getCheckboxState } from '../../utils/state.utils';

describe('Checkbox state utils', () => {
  describe('getCheckboxState', () => {
    it('should return UNSELECTED when not checked, not disabled, no error', () => {
      expect(getCheckboxState(false, false, false)).toBe(
        CheckboxState.UNSELECTED,
      );
    });

    it('should return SELECTED when checked, not disabled, no error', () => {
      expect(getCheckboxState(true, false, false)).toBe(CheckboxState.SELECTED);
    });

    it('should return DISABLED_UNSELECTED when not checked and disabled', () => {
      expect(getCheckboxState(false, true, false)).toBe(
        CheckboxState.DISABLED_UNSELECTED,
      );
    });

    it('should return DISABLED_SELECTED when checked and disabled', () => {
      expect(getCheckboxState(true, true, false)).toBe(
        CheckboxState.DISABLED_SELECTED,
      );
    });

    it('should return ERROR_UNSELECTED when not checked and has error', () => {
      expect(getCheckboxState(false, false, true)).toBe(
        CheckboxState.ERROR_UNSELECTED,
      );
    });

    it('should return ERROR_SELECTED when checked and has error', () => {
      expect(getCheckboxState(true, false, true)).toBe(
        CheckboxState.ERROR_SELECTED,
      );
    });

    it('should use undefined as falsy values', () => {
      expect(getCheckboxState(undefined, undefined, undefined)).toBe(
        CheckboxState.UNSELECTED,
      );
    });
  });
});
