import { describe, expect, it } from 'vitest';

import type { ArrowStyles } from '../../types/popover';
import { getArrowBorderStyles } from '../../utils/styling.utils';

describe('styling.utils', () => {
  describe('getArrowBorderStyles', () => {
    it('should return empty object when no arrowStyles provided', () => {
      const result = getArrowBorderStyles('top');
      expect(result).toEqual({});
    });

    it('should generate border styles for top placement', () => {
      const arrowStyles: ArrowStyles = {
        backgroundColor: 'white',
        border: '1px solid black',
        size: 8,
      };

      const result = getArrowBorderStyles('top', arrowStyles);

      expect(result).toMatchObject({
        '--arrow-size': '8px',
        backgroundColor: 'white',
        height: '8px',
        width: '8px',
        borderBottom: '1px solid black',
        borderRight: '1px solid black',
      });
    });

    it('should generate border styles for bottom placement', () => {
      const arrowStyles: ArrowStyles = {
        backgroundColor: 'white',
        border: '1px solid black',
        size: 10,
      };

      const result = getArrowBorderStyles('bottom', arrowStyles);

      expect(result).toMatchObject({
        '--arrow-size': '10px',
        backgroundColor: 'white',
        height: '10px',
        width: '10px',
        borderLeft: '1px solid black',
        borderTop: '1px solid black',
      });
    });

    it('should generate border styles for left placement', () => {
      const arrowStyles: ArrowStyles = {
        backgroundColor: 'white',
        border: '1px solid black',
        size: 12,
      };

      const result = getArrowBorderStyles('left', arrowStyles);

      expect(result).toMatchObject({
        '--arrow-size': '12px',
        backgroundColor: 'white',
        height: '12px',
        width: '12px',
        borderRight: '1px solid black',
        borderTop: '1px solid black',
      });
    });

    it('should generate border styles for right placement', () => {
      const arrowStyles: ArrowStyles = {
        backgroundColor: 'white',
        border: '1px solid black',
        size: 6,
      };

      const result = getArrowBorderStyles('right', arrowStyles);

      expect(result).toMatchObject({
        '--arrow-size': '6px',
        backgroundColor: 'white',
        height: '6px',
        width: '6px',
        borderBottom: '1px solid black',
        borderLeft: '1px solid black',
      });
    });

    it('should work with compound placements', () => {
      const arrowStyles: ArrowStyles = {
        backgroundColor: 'white',
        border: '2px dashed red',
        size: 8,
      };

      const result = getArrowBorderStyles('top-start', arrowStyles);

      // top-start should use 'top' direction
      expect(result).toMatchObject({
        '--arrow-size': '8px',
        backgroundColor: 'white',
        height: '8px',
        width: '8px',
        borderBottom: '2px dashed red',
        borderRight: '2px dashed red',
      });
    });

    it('should return styles without border properties when border not provided', () => {
      const arrowStyles: ArrowStyles = {
        backgroundColor: 'blue',
        size: 10,
      };

      const result = getArrowBorderStyles('top', arrowStyles);

      expect(result).toEqual({
        '--arrow-size': '10px',
        backgroundColor: 'blue',
        height: '10px',
        width: '10px',
      });
    });
  });
});
