import { act } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { render } from '@/lib/tests/render/render';

import { useIsOverflow } from '../useIsOverflow';

function TestComponent() {
  const { innerRef, isOverflow } = useIsOverflow() as {
    innerRef: React.MutableRefObject<HTMLDivElement | null>;
    isOverflow: boolean;
  };
  return (
    <div>
      <div ref={innerRef} data-testid="target" style={{ width: 100 }} />
      <span data-testid="overflow">
        {isOverflow ? 'overflow' : 'no-overflow'}
      </span>
    </div>
  );
}

describe('useIsOverflow', () => {
  let originalInnerWidth: number;

  beforeEach(() => {
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    window.innerWidth = originalInnerWidth;
    vi.restoreAllMocks();
  });

  it('detecta overflow correctamente', () => {
    window.innerWidth = 50; // Forzar overflow
    const { getByTestId } = render(<TestComponent />);
    const target = getByTestId('target');
    // Simula el offsetWidth manualmente
    Object.defineProperty(target, 'offsetWidth', {
      configurable: true,
      value: 100,
    });
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    expect(getByTestId('overflow').textContent).toBe('overflow');
  });

  it('detecta que no hay overflow', () => {
    window.innerWidth = 200; // No overflow
    const { getByTestId } = render(<TestComponent />);
    const target = getByTestId('target');
    Object.defineProperty(target, 'offsetWidth', {
      configurable: true,
      value: 100,
    });
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    expect(getByTestId('overflow').textContent).toBe('no-overflow');
  });

  it('should handle null ref gracefully', () => {
    function TestComponentWithNullRef() {
      const { isOverflow } = useIsOverflow();
      return (
        <div>
          <span data-testid="overflow">
            {isOverflow ? 'overflow' : 'no-overflow'}
          </span>
        </div>
      );
    }

    const { getByTestId } = render(<TestComponentWithNullRef />);
    expect(getByTestId('overflow').textContent).toBe('no-overflow');
  });
});
