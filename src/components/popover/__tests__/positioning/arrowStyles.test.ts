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
        placement: 'top',
        arrowX: 50,
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
        placement: 'bottom',
        arrowX: 75,
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
        placement: 'left',
        arrowY: 30,
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
        placement: 'right',
        arrowY: 60,
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
        placement: 'top-start',
        arrowX: 25,
      });

      expect(arrowElement.getAttribute('data-kbt-placement')).toBe('top-start');
      expect(arrowElement.style.bottom).toBe('0px');
      expect(arrowElement.style.left).toBe('25px');
      expect(arrowElement.style.transform).toBe('rotate(45deg)');
    });

    it('should handle compound placements (e.g., right-end)', () => {
      updateArrowStyles({
        arrowElement,
        placement: 'right-end',
        arrowY: 80,
      });

      expect(arrowElement.getAttribute('data-kbt-placement')).toBe('right-end');
      expect(arrowElement.style.left).toBe('0px');
      expect(arrowElement.style.top).toBe('80px');
      expect(arrowElement.style.transform).toBe('rotate(45deg)');
    });

    it('should handle missing arrow coordinates gracefully', () => {
      updateArrowStyles({
        arrowElement,
        placement: 'top',
        arrowX: undefined,
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
        placement: 'bottom',
        arrowX: 0,
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
        placement: 'top',
        arrowX: 50,
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
          placement,
          arrowX: 10,
          arrowY: 10,
        });

        expect(arrowElement.style.transform).toBe('rotate(45deg)');
      });
    });
  });
});
