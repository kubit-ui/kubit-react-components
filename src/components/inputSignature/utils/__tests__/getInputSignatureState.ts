import { InputSignatureState } from '../../types';
import { getInputSignatureState } from '../getInputSignatureState';

describe('getInputSignatureState', () => {
  it('should return DISABLED if disabled is true', () => {
    const state = getInputSignatureState({ disabled: true, active: false, filled: false });
    expect(state).toBe(InputSignatureState.DISABLED);
  });

  it('should return ERROR if error is true', () => {
    const state = getInputSignatureState({ error: true, active: false, filled: false });
    expect(state).toBe(InputSignatureState.ERROR);
  });

  it('should return ACTIVE if active is true', () => {
    const state = getInputSignatureState({ active: true, filled: false });
    expect(state).toBe(InputSignatureState.ACTIVE);
  });

  it('should return FILLED if filled is true', () => {
    const state = getInputSignatureState({ active: false, filled: true });
    expect(state).toBe(InputSignatureState.FILLED);
  });

  it('should return DEFAULT if none of the conditions are met', () => {
    const state = getInputSignatureState({ active: false, filled: false });
    expect(state).toBe(InputSignatureState.DEFAULT);
  });
});
