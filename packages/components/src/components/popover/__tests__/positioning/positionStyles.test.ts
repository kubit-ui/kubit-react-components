import {
  applyPositionStyles,
  getPositionStyles,
} from '../../hooks/positioning/positionStyles';

describe('positionStyles', () => {
  const originalInnerHeight = window.innerHeight;
  const originalInnerWidth = window.innerWidth;

  beforeEach(() => {
    // Set fixed window dimensions for consistent test results
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 800,
    });
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 1200,
    });
  });

  afterEach(() => {
    // Restore original window dimensions
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: originalInnerHeight,
    });
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: originalInnerWidth,
    });
  });

  describe('getPositionStyles', () => {
    const baseConfig = {
      edgePadding: 10,
      isBodyAnchor: true,
      strategy: 'fixed' as const,
      x: 100,
      y: 200,
    };

    it('should return correct positioning styles for all placements', () => {
      // Test top placement
      const topStyles = getPositionStyles({ ...baseConfig, placement: 'top' });
      expect(topStyles).toMatchObject({
        left: '50%',
        top: '10px',
        transform: 'translateX(-50%)',
        transformOrigin: 'center top',
      });

      // Test center placement (undefined)
      const centerStyles = getPositionStyles({
        ...baseConfig,
        placement: undefined,
      });
      expect(centerStyles).toMatchObject({
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        transformOrigin: 'center center',
      });

      // Test right placement
      const rightStyles = getPositionStyles({
        ...baseConfig,
        placement: 'right',
      });
      expect(rightStyles).toMatchObject({
        display: 'flex',
        flexDirection: 'column',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
      });
    });

    it('should return floating-ui styles for non-body anchor', () => {
      const styles = getPositionStyles({ ...baseConfig, isBodyAnchor: false });

      expect(styles).toEqual({
        bottom: 'auto',
        boxSizing: 'border-box',
        left: '100px',
        position: 'fixed',
        right: 'auto',
        top: '200px',
        transform: '',
        transformOrigin: '',
      });
    });

    it('should handle different strategy and edgePadding values', () => {
      const fixedStyles = getPositionStyles({
        ...baseConfig,
        isBodyAnchor: false,
        strategy: 'fixed',
      });
      const absoluteStyles = getPositionStyles({
        ...baseConfig,
        isBodyAnchor: false,
        strategy: 'absolute',
      });
      const paddedStyles = getPositionStyles({
        ...baseConfig,
        edgePadding: 20,
        placement: 'right',
      });

      expect(fixedStyles.position).toBe('fixed');
      expect(absoluteStyles.position).toBe('absolute');
      expect(paddedStyles.right).toBe('20px');
    });
  });

  describe('applyPositionStyles', () => {
    let mockElement: HTMLElement;
    let mockRef: React.RefObject<HTMLElement>;
    const baseConfig = {
      edgePadding: 10,
      strategy: 'fixed' as const,
      x: 100,
      y: 200,
    };

    beforeEach(() => {
      mockElement = document.createElement('div');
      mockRef = { current: mockElement };
    });

    it('should apply positioning styles and data attributes correctly', () => {
      // Test body anchor positioning
      applyPositionStyles({
        ...baseConfig,
        isBodyAnchor: true,
        placement: 'top',
        ref: mockRef,
      });

      expect(mockElement.style.left).toBe('50%');
      expect(mockElement.style.top).toBe('10px');
      expect(mockElement.style.position).toBe('fixed');
      expect(mockElement.getAttribute('data-kbt-placement')).toBe('top');

      // Test center positioning
      applyPositionStyles({
        ...baseConfig,
        isBodyAnchor: true,
        placement: undefined,
        ref: mockRef,
      });
      expect(mockElement.getAttribute('data-kbt-placement')).toBe('center');

      // Test non-body anchor positioning
      applyPositionStyles({
        ...baseConfig,
        isBodyAnchor: false,
        placement: 'top',
        ref: mockRef,
      });
      expect(mockElement.style.left).toBe('100px');
      expect(mockElement.style.top).toBe('200px');
    });

    it('should handle edge cases gracefully', () => {
      const nullRef = { current: null };

      expect(() => {
        applyPositionStyles({
          ...baseConfig,
          isBodyAnchor: true,
          placement: 'top',
          ref: nullRef,
        });
        applyPositionStyles({
          ...baseConfig,
          isBodyAnchor: true,
          placement: 'top',
          ref: undefined,
        });
      }).not.toThrow();
    });
  });
});
