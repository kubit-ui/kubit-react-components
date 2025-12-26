import { determinePositioningConfig } from '../../hooks/positioning/positionCalculation';

describe('positionCalculation', () => {
  describe('determinePositioningConfig', () => {
    describe('with body anchor', () => {
      it('should convert placement to body direction and use fixed strategy for body anchor', () => {
        const result = determinePositioningConfig(true, 'absolute', 'bottom');

        expect(result.actualPlacement).toBe('bottom');
        expect(result.autoStrategy).toBe('fixed');
      });

      it('should handle different placement conversions for body anchor', () => {
        const placements = [
          { input: 'top', expected: 'top' },
          { input: 'right', expected: 'right' },
          { input: 'left', expected: 'left' },
          { input: 'bottom', expected: 'bottom' },
        ] as const;

        placements.forEach(({ input, expected }) => {
          const result = determinePositioningConfig(true, 'absolute', input);

          expect(result.actualPlacement).toBe(expected);
          expect(result.autoStrategy).toBe('fixed');
        });
      });

      it('should always use fixed strategy regardless of input strategy for body anchor', () => {
        const strategies = ['absolute', 'fixed'] as const;

        strategies.forEach((strategy) => {
          const result = determinePositioningConfig(true, strategy, 'bottom');

          expect(result.actualPlacement).toBe('bottom');
          expect(result.autoStrategy).toBe('fixed');
        });
      });
    });

    describe('with element anchor', () => {
      it('should preserve original placement and strategy for element anchor', () => {
        const result = determinePositioningConfig(false, 'absolute', 'bottom');

        expect(result.actualPlacement).toBe('bottom');
        expect(result.autoStrategy).toBe('absolute');
      });

      it('should handle different placements correctly', () => {
        const placements = [
          'top',
          'bottom',
          'left',
          'right',
          'top-start',
          'bottom-end',
        ] as const;

        placements.forEach((placement) => {
          const result = determinePositioningConfig(
            false,
            'absolute',
            placement,
          );

          expect(result.actualPlacement).toBe(placement);
          expect(result.autoStrategy).toBe('absolute');
        });
      });

      it('should handle different strategies correctly', () => {
        const strategies = ['absolute', 'fixed'] as const;

        strategies.forEach((strategy) => {
          const result = determinePositioningConfig(false, strategy, 'bottom');

          expect(result.actualPlacement).toBe('bottom');
          expect(result.autoStrategy).toBe(strategy);
        });
      });

      it('should preserve placement when not using body anchor', () => {
        const placements = ['top', 'right', 'left', 'bottom'] as const;

        placements.forEach((placement) => {
          const result = determinePositioningConfig(
            false,
            'absolute',
            placement,
          );

          expect(result.actualPlacement).toBe(placement);
          expect(result.autoStrategy).toBe('absolute');
        });
      });
    });

    describe('edge cases', () => {
      it('should handle placement conversion with different input placements', () => {
        const placements = ['top', 'bottom', 'left', 'right'] as const;

        placements.forEach((placement) => {
          const result = determinePositioningConfig(
            true,
            'absolute',
            placement,
          );

          // Each placement should be converted to appropriate body direction
          expect(result.autoStrategy).toBe('fixed');
        });
      });

      it('should handle compound placement types for body anchor', () => {
        // Complex placements should be preserved for body anchor positioning
        const result = determinePositioningConfig(
          true,
          'absolute',
          'top-start',
        );

        expect(result.actualPlacement).toBe('top-start'); // top-start should be preserved
        expect(result.autoStrategy).toBe('fixed');
      });

      it('should default to center for body anchor when placement is undefined', () => {
        const result = determinePositioningConfig(true, 'absolute', undefined);

        expect(result.actualPlacement).toBe('center'); // undefined placement should map to 'center'
        expect(result.autoStrategy).toBe('fixed');
      });
    });

    describe('with undefined placement', () => {
      it('should default to center for body anchor when placement is undefined', () => {
        const result = determinePositioningConfig(true, 'absolute', undefined);

        expect(result.actualPlacement).toBe('center'); // undefined placement should map to 'center'
        expect(result.autoStrategy).toBe('fixed');
      });

      it('should default to top for element anchor when placement is undefined', () => {
        const result = determinePositioningConfig(false, 'absolute', undefined);

        expect(result.actualPlacement).toBe('top');
        expect(result.autoStrategy).toBe('absolute');
      });
    });
  });
});
