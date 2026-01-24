import { describe, expect, it } from 'vitest';

import type { StepperNumberprefixSuffixProps } from '../../types/prefixSuffix';

import { buildScreenReaderText } from '../screnReader';

describe('buildScreenReaderText', () => {
  const mockPrefixSuffix: StepperNumberprefixSuffixProps = {
    prefix: {
      of: 'of',
      step: 'Step',
    },
    suffix: {
      completed: 'Completed',
      current: 'Current',
    },
  };

  it('Should return undefined when isVertical is false', () => {
    const result = buildScreenReaderText(
      0,
      0,
      3,
      mockPrefixSuffix,
      'Label',
      false,
    );

    expect(result).toBeUndefined();
  });

  it('Should return basic aria label when no prefix suffix is provided', () => {
    const result = buildScreenReaderText(
      0,
      0,
      3,
      undefined,
      'First step',
      true,
    );

    expect(result).toBe('First step');
  });

  it('Should build aria label with prefix when provided', () => {
    const result = buildScreenReaderText(
      0,
      0,
      3,
      mockPrefixSuffix,
      'First step',
      true,
    );

    expect(result).toBe('Step 1 of 3 First step Current');
  });

  it('Should add "completed" suffix for steps before current', () => {
    const result = buildScreenReaderText(
      0,
      2,
      5,
      mockPrefixSuffix,
      'First step',
      true,
    );

    expect(result).toBe('Step 1 of 5 First step Completed');
  });

  it('Should add "current" suffix for current step', () => {
    const result = buildScreenReaderText(
      2,
      2,
      5,
      mockPrefixSuffix,
      'Third step',
      true,
    );

    expect(result).toBe('Step 3 of 5 Third step Current');
  });

  it('Should not add suffix for steps after current when no suffix.completed', () => {
    const partialSuffix: StepperNumberprefixSuffixProps = {
      prefix: {
        of: 'of',
        step: 'Step',
      },
      suffix: {
        completed: '',
        current: 'Current',
      },
    };
    const result = buildScreenReaderText(
      3,
      1,
      5,
      partialSuffix,
      'Fourth step',
      true,
    );

    expect(result).toBe('Step 4 of 5 Fourth step');
  });

  it('Should handle index 0 correctly', () => {
    const result = buildScreenReaderText(
      0,
      1,
      3,
      mockPrefixSuffix,
      'First step',
      true,
    );

    expect(result).toBe('Step 1 of 3 First step Completed');
  });

  it('Should handle last step correctly', () => {
    const result = buildScreenReaderText(
      4,
      4,
      5,
      mockPrefixSuffix,
      'Last step',
      true,
    );

    expect(result).toBe('Step 5 of 5 Last step Current');
  });

  it('Should work without prefix but with suffix', () => {
    const suffixOnly: StepperNumberprefixSuffixProps = {
      suffix: {
        completed: 'Done',
        current: 'Active',
      },
    };
    const result = buildScreenReaderText(
      0,
      1,
      3,
      suffixOnly,
      'Step label',
      true,
    );

    expect(result).toBe('Step label Done');
  });

  it('Should work with prefix but without suffix', () => {
    const prefixOnly: StepperNumberprefixSuffixProps = {
      prefix: {
        of: 'de',
        step: 'Paso',
      },
    };
    const result = buildScreenReaderText(
      1,
      1,
      3,
      prefixOnly,
      'Segundo paso',
      true,
    );

    expect(result).toBe('Paso 2 de 3 Segundo paso');
  });

  it('Should handle empty prefix suffix object', () => {
    const emptySuffix: StepperNumberprefixSuffixProps = {};
    const result = buildScreenReaderText(
      1,
      1,
      3,
      emptySuffix,
      'Second step',
      true,
    );

    expect(result).toBe('Second step');
  });
});
