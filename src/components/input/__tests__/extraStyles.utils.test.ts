import { POSITIONS } from '@/types';

import { InputHelpMessagePosition } from '../types';
import { getExtraStyles } from '../utils';

describe('Extra styles utils', () => {
  it('getLeftExtraStyles return object', () => {
    const stylesPosition = POSITIONS.LEFT;
    const affixPosition = POSITIONS.LEFT;
    const width = undefined;
    const isOutAffixPosition = false;
    const helpTextPosition = undefined;
    const result = getExtraStyles(
      stylesPosition,
      affixPosition,
      width,
      isOutAffixPosition,
      helpTextPosition
    );
    expect(typeof result).toBe('object');
  });
  it('getLeftExtraStyles return undefined', () => {
    const stylesPosition = POSITIONS.LEFT;
    const affixPosition = POSITIONS.LEFT;
    const width = undefined;
    const isOutAffixPosition = true;
    const helpTextPosition = undefined;
    const result = getExtraStyles(
      stylesPosition,
      affixPosition,
      width,
      isOutAffixPosition,
      helpTextPosition
    );
    expect(typeof result).toBe('undefined');
  });
  it('getRightExtraStyles return object', () => {
    const stylesPosition = POSITIONS.RIGHT;
    const affixPosition = POSITIONS.RIGHT;
    const width = undefined;
    const isOutAffixPosition = false;
    const helpTextPosition = undefined;
    const result = getExtraStyles(
      stylesPosition,
      affixPosition,
      width,
      isOutAffixPosition,
      helpTextPosition
    );
    expect(typeof result).toBe('object');
  });
  it('getRightExtraStyles return undefined', () => {
    const stylesPosition = POSITIONS.RIGHT;
    const affixPosition = POSITIONS.RIGHT;
    const width = undefined;
    const isOutAffixPosition = true;
    const helpTextPosition = undefined;
    const result = getExtraStyles(
      stylesPosition,
      affixPosition,
      width,
      isOutAffixPosition,
      helpTextPosition
    );
    expect(typeof result).toBe('undefined');
  });
  it('getTopExtraStyles return object', () => {
    const stylesPosition = POSITIONS.TOP;
    const affixPosition = POSITIONS.LEFT;
    const width = undefined;
    const isOutAffixPosition = true;
    const helpTextPosition = undefined;
    const result = getExtraStyles(
      stylesPosition,
      affixPosition,
      width,
      isOutAffixPosition,
      helpTextPosition
    );
    expect(typeof result).toBe('object');
  });
  it('getTopExtraStyles return undefined', () => {
    const stylesPosition = POSITIONS.TOP;
    const affixPosition = POSITIONS.LEFT;
    const width = undefined;
    const isOutAffixPosition = false;
    const helpTextPosition = undefined;
    const result = getExtraStyles(
      stylesPosition,
      affixPosition,
      width,
      isOutAffixPosition,
      helpTextPosition
    );
    expect(typeof result).toBe('undefined');
  });
  it('getBottomExtraStyles return object', () => {
    const stylesPosition = POSITIONS.BOTTOM;
    const affixPosition = POSITIONS.LEFT;
    const width = undefined;
    const isOutAffixPosition = true;
    const helpTextPosition = InputHelpMessagePosition.BOTTOM;
    const result = getExtraStyles(
      stylesPosition,
      affixPosition,
      width,
      isOutAffixPosition,
      helpTextPosition
    );
    expect(typeof result).toBe('object');
  });
  it('getBottomExtraStyles return undefined', () => {
    const stylesPosition = POSITIONS.BOTTOM;
    const affixPosition = POSITIONS.LEFT;
    const width = undefined;
    const isOutAffixPosition = false;
    const helpTextPosition = undefined;
    const result = getExtraStyles(
      stylesPosition,
      affixPosition,
      width,
      isOutAffixPosition,
      helpTextPosition
    );
    expect(typeof result).toBe('undefined');
  });
  it('getCenterExtraStyles return object', () => {
    const stylesPosition = POSITIONS.CENTER;
    const affixPosition = POSITIONS.LEFT;
    const width = undefined;
    const isOutAffixPosition = false;
    const helpTextPosition = undefined;
    const result = getExtraStyles(
      stylesPosition,
      affixPosition,
      width,
      isOutAffixPosition,
      helpTextPosition
    );
    expect(typeof result).toBe('object');
  });
  it('getCenterExtraStyles return undefined', () => {
    const stylesPosition = POSITIONS.CENTER;
    const affixPosition = POSITIONS.LEFT;
    const width = undefined;
    const isOutAffixPosition = true;
    const helpTextPosition = undefined;
    const result = getExtraStyles(
      stylesPosition,
      affixPosition,
      width,
      isOutAffixPosition,
      helpTextPosition
    );
    expect(typeof result).toBe('undefined');
  });
  it('getExtraStyles return undefined', () => {
    const stylesPosition = POSITIONS.TOP_RIGHT;
    const affixPosition = POSITIONS.LEFT;
    const width = undefined;
    const isOutAffixPosition = true;
    const helpTextPosition = undefined;
    const result = getExtraStyles(
      stylesPosition,
      affixPosition,
      width,
      isOutAffixPosition,
      helpTextPosition
    );
    expect(typeof result).toBe('undefined');
  });
});
