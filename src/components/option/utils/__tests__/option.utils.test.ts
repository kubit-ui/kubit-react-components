import { OptionStateType } from '../../types';
import { getHighlightedIndexes, getState } from '../option.utils';

describe('OptionUtils - getState', () => {
  it('Should be DISABLED when disabled is true', () => {
    const disabled = true;
    const focused = false;
    const selected = false;
    const multiSelected = false;
    const hover = false;
    const filling = false;
    expect(getState(disabled, focused, selected, multiSelected, hover, filling)).toBe(
      OptionStateType.DISABLED
    );
  });

  it('Should be FOCUS when focused is true', () => {
    const disabled = false;
    const focused = true;
    const selected = false;
    const multiSelected = false;
    const hover = false;
    const filling = false;
    expect(getState(disabled, focused, selected, multiSelected, hover, filling)).toBe(
      OptionStateType.FOCUS
    );
  });

  it('Should be MULTIPLE_SELECTED_HOVER when selected, multiSelected and hover', () => {
    const disabled = false;
    const focused = false;
    const selected = true;
    const multiSelected = true;
    const hover = true;
    const filling = false;
    expect(getState(disabled, focused, selected, multiSelected, hover, filling)).toBe(
      OptionStateType.MULTIPLE_SELECTED_HOVER
    );
  });

  it('Should be MULTIPLE_SELECTED when selected and multiSelected', () => {
    const disabled = false;
    const focused = false;
    const selected = true;
    const multiSelected = true;
    const hover = false;
    const filling = false;
    expect(getState(disabled, focused, selected, multiSelected, hover, filling)).toBe(
      OptionStateType.MULTIPLE_SELECTED
    );
  });

  it('Should be SELECTED_HOVER when selected and hover', () => {
    const disabled = false;
    const focused = false;
    const selected = true;
    const multiSelected = false;
    const hover = true;
    const filling = false;
    expect(getState(disabled, focused, selected, multiSelected, hover, filling)).toBe(
      OptionStateType.SELECTED_HOVER
    );
  });

  it('Should be SELECTED when selected', () => {
    const disabled = false;
    const focused = false;
    const selected = true;
    const multiSelected = false;
    const hover = false;
    const filling = false;
    expect(getState(disabled, focused, selected, multiSelected, hover, filling)).toBe(
      OptionStateType.SELECTED
    );
  });

  it('Should be HOVER when hover', () => {
    const disabled = false;
    const focused = false;
    const selected = false;
    const multiSelected = false;
    const hover = true;
    const filling = false;
    expect(getState(disabled, focused, selected, multiSelected, hover, filling)).toBe(
      OptionStateType.HOVER
    );
  });

  it('Should be FILLING when filling', () => {
    const disabled = false;
    const focused = false;
    const selected = false;
    const multiSelected = false;
    const hover = false;
    const filling = true;
    expect(getState(disabled, focused, selected, multiSelected, hover, filling)).toBe(
      OptionStateType.FILLING
    );
  });

  it('Should be DEFAULT in other case', () => {
    const disabled = false;
    const focused = false;
    const selected = false;
    const multiSelected = false;
    const hover = false;
    const filling = false;
    expect(getState(disabled, focused, selected, multiSelected, hover, filling)).toBe(
      OptionStateType.DEFAULT
    );
  });
});

describe('OptionUtils - getHighlightedIndexes', () => {
  it('Should return the first and the last highlighted indexes', () => {
    const label = 'test';
    const labelCharsHighlighted = 'es';
    expect(getHighlightedIndexes(label, labelCharsHighlighted)).toEqual({
      firstHighlightedIndex: 1,
      lastHighlightedIndex: 3,
    });
  });
});
