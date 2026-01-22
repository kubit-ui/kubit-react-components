import { describe, it, expect } from 'vitest';
import { compilerTypeValid } from '../compilerType.js';

describe('compilerTypeValid constants', () => {
  it('should have all required compiler types', () => {
    expect(compilerTypeValid).toHaveProperty('foundationOnly');
    expect(compilerTypeValid).toHaveProperty('componentOnly');
    expect(compilerTypeValid).toHaveProperty('full');
  });

  it('should have correct string values', () => {
    expect(compilerTypeValid.foundationOnly).toBe('foundationOnly');
    expect(compilerTypeValid.componentOnly).toBe('componentOnly');
    expect(compilerTypeValid.full).toBe('full');
  });

  it('should be immutable object structure', () => {
    expect(Object.keys(compilerTypeValid)).toHaveLength(3);
  });
});
