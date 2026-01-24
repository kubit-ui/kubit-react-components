import type { Placement } from '@floating-ui/dom';

import { updateArrowStyles } from '../../hooks/positioning/arrowPositionStyles';

describe('arrowStyles', () => {
  let arrowElement: HTMLDivElement;

  beforeEach(() => {
    // Set up a fresh arrow element for each test
    arrowElement = document.createElement('div');
    // Reset any styles that might be carried over between tests
    arrowElement.style.top = '';
    arrowElement.style.right = '';
    arrowElement.style.bottom = '';
    arrowElement.style.left = '';
    arrowElement.style.transform = '';
  });

  describe('updateArrowStyles', () => {
    it('should position arrow correctly for top placement', () => {
      updateArrowStyles({
        arrowElement,
        arrowX: 50,
        placement: 'top',
      });

      expect(arrowElement.getAttribute('data-kbt-placement')).toBe('top');
      expect(arrowElement.style.bottom).toBe('0px');
      expect(arrowElement.style.left).toBe('50px');
      expect(arrowElement.style.transform).toBe('rotate(45deg)');

      // Ensure other sides are not set
      expect(arrowElement.style.top).toBe('');
      expect(arrowElement.style.right).toBe('');
    });

    it('should position arrow correctly for bottom placement', () => {
      updateArrowStyles({
        arrowElement,
        arrowX: 75,
        placement: 'bottom',
      });

      expect(arrowElement.getAttribute('data-kbt-placement')).toBe('bottom');
      expect(arrowElement.style.top).toBe('0px');
      expect(arrowElement.style.left).toBe('75px');
      expect(arrowElement.style.transform).toBe('rotate(45deg)');

      // Ensure other sides are not set
      expect(arrowElement.style.bottom).toBe('');
      expect(arrowElement.style.right).toBe('');
    });

    it('should position arrow correctly for left placement', () => {
      updateArrowStyles({
        arrowElement,
        arrowY: 30,
        placement: 'left',
      });

      expect(arrowElement.getAttribute('data-kbt-placement')).toBe('left');
      expect(arrowElement.style.right).toBe('0px');
      expect(arrowElement.style.top).toBe('30px');
      expect(arrowElement.style.transform).toBe('rotate(45deg)');

      // Ensure other sides are not set
      expect(arrowElement.style.left).toBe('');
      expect(arrowElement.style.bottom).toBe('');
    });

    it('should position arrow correctly for right placement', () => {
      updateArrowStyles({
        arrowElement,
        arrowY: 60,
        placement: 'right',
      });

      expect(arrowElement.getAttribute('data-kbt-placement')).toBe('right');
      expect(arrowElement.style.left).toBe('0px');
      expect(arrowElement.style.top).toBe('60px');
      expect(arrowElement.style.transform).toBe('rotate(45deg)');

      // Ensure other sides are not set
      expect(arrowElement.style.right).toBe('');
      expect(arrowElement.style.bottom).toBe('');
    });

    it('should handle compound placements (e.g., top-start)', () => {
      updateArrowStyles({
        arrowElement,
        arrowX: 25,
        placement: 'top-start',
      });

      expect(arrowElement.getAttribute('data-kbt-placement')).toBe('top-start');
      expect(arrowElement.style.bottom).toBe('0px');
      expect(arrowElement.style.left).toBe('25px');
      expect(arrowElement.style.transform).toBe('rotate(45deg)');
    });

    it('should handle compound placements (e.g., right-end)', () => {
      updateArrowStyles({
        arrowElement,
        arrowY: 80,
        placement: 'right-end',
      });

      expect(arrowElement.getAttribute('data-kbt-placement')).toBe('right-end');
      expect(arrowElement.style.left).toBe('0px');
      expect(arrowElement.style.top).toBe('80px');
      expect(arrowElement.style.transform).toBe('rotate(45deg)');
    });

    it('should handle missing arrow coordinates gracefully', () => {
      updateArrowStyles({
        arrowElement,
        arrowX: undefined,
        placement: 'top',
      });

      expect(arrowElement.getAttribute('data-kbt-placement')).toBe('top');
      expect(arrowElement.style.bottom).toBe('0px');
      expect(arrowElement.style.left).toBe('50%'); // Centers when no coordinates
      expect(arrowElement.style.transform).toBe(
        'translateX(-50%) rotate(45deg)',
      );
    });

    it('should handle zero coordinates correctly', () => {
      updateArrowStyles({
        arrowElement,
        arrowX: 0,
        placement: 'bottom',
      });

      expect(arrowElement.getAttribute('data-kbt-placement')).toBe('bottom');
      expect(arrowElement.style.top).toBe('0px');
      expect(arrowElement.style.left).toBe('0px');
      expect(arrowElement.style.transform).toBe('rotate(45deg)');
    });

    it('should clear previous positioning styles', () => {
      // Set some initial styles
      arrowElement.style.top = '100px';
      arrowElement.style.right = '200px';
      arrowElement.style.bottom = '300px';
      arrowElement.style.left = '400px';

      updateArrowStyles({
        arrowElement,
        arrowX: 50,
        placement: 'top',
      });

      // Only the relevant styles should be set, others should be cleared
      expect(arrowElement.style.bottom).toBe('0px');
      expect(arrowElement.style.left).toBe('50px');
      expect(arrowElement.style.top).toBe('');
      expect(arrowElement.style.right).toBe('');
    });

    it('should always apply 45deg rotation regardless of placement', () => {
      const placements: Placement[] = ['top', 'bottom', 'left', 'right'];

      placements.forEach((placement) => {
        arrowElement.style.transform = '';
        updateArrowStyles({
          arrowElement,
          arrowX: 10,
          arrowY: 10,
          placement,
        });

        expect(arrowElement.style.transform).toBe('rotate(45deg)');
      });
    });
  });
});
