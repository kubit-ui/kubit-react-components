import { getMainContentAccessibility } from '../../utils/accessibility.utils';

describe('accessibility.utils', () => {
  describe('getMainContentAccessibility', () => {
    it('should return empty attributes when content has no scroll', () => {
      const result = getMainContentAccessibility(
        { content: 'Test content' },
        false,
      );

      expect(result['aria-label']).toBeUndefined();
      expect(result['aria-labelledby']).toBeUndefined();
      expect(result.role).toBeUndefined();
      expect(result.tabIndex).toBeUndefined();
    });

    it('should return region role and tabIndex when content has scroll', () => {
      const result = getMainContentAccessibility(
        { content: 'Scrollable content' },
        true,
      );

      expect(result.role).toBe('region');
      expect(result.tabIndex).toBe(0);
    });

    it('should return scrollable accessibility attributes when provided and has scroll', () => {
      const result = getMainContentAccessibility(
        {
          content: 'Scrollable content',
          scrollableAccessibility: {
            'aria-label': 'Scrollable region',
            'aria-labelledby': 'scroll-header',
          },
        },
        true,
      );

      expect(result['aria-label']).toBe('Scrollable region');
      expect(result['aria-labelledby']).toBe('scroll-header');
    });

    it('should respect custom role from mainContent', () => {
      const result = getMainContentAccessibility(
        {
          content: 'Content',
          role: 'tooltip',
        },
        false,
      );

      expect(result.role).toBe('tooltip');
    });

    it('should respect custom tabIndex from mainContent', () => {
      const result = getMainContentAccessibility(
        {
          content: 'Content',
          tabIndex: -1,
        },
        false,
      );

      expect(result.tabIndex).toBe(-1);
    });
  });
});
