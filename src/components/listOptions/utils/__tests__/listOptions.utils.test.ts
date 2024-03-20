import { ListOptionsOptionType } from '../../types';
import { getOptionVariant, isSelected, keyDownMove, keyUpMove } from '../listOptions.utils';

describe('ListOptions utils', () => {
  it('isSelected function with multiselect=true', () => {
    const option: ListOptionsOptionType = {
      label: 'label1',
      value: 'value1',
    };
    const selectedValue = ['value1'];
    const isMultiSelect = true;
    expect(isSelected(option, selectedValue, isMultiSelect)).toBeTruthy();
  });
  it('isSelected function with multiselect=false', () => {
    const option: ListOptionsOptionType = {
      label: 'label1',
      value: 'value1',
    };
    const selectedValue = 'value1';
    const isMultiSelect = false;
    expect(isSelected(option, selectedValue, isMultiSelect)).toBeTruthy();
  });
  it('isSelected function with selectedValue=null', () => {
    const option: ListOptionsOptionType = {
      label: 'label1',
      value: 'value1',
    };
    const selectedValue = null;
    const isMultiSelect = true;
    expect(isSelected(option, selectedValue, isMultiSelect)).toBeFalsy();
  });
  it('getOptionVariant function with hightlightedOptionVariant', () => {
    const highlighted = true;
    const hightlightedOptionVariant = 'highlighted';
    const optionVariant = 'default';
    expect(getOptionVariant(highlighted, hightlightedOptionVariant, optionVariant)).toBe(
      hightlightedOptionVariant
    );
  });
  it('getOptionVariant function without hightlightedOptionVariant', () => {
    const highlighted = true;
    const hightlightedOptionVariant = undefined;
    const optionVariant = 'default';
    expect(getOptionVariant(highlighted, hightlightedOptionVariant, optionVariant)).toBe(
      optionVariant
    );
  });
  it('keyUpMove functiont', () => {
    const prevFocus = 2;
    expect(keyUpMove(prevFocus)).toBe(1);
  });
  it('keyDownMove function', () => {
    const prevFocus = 0;
    const options: ListOptionsOptionType[] = [
      {
        label: 'label1',
        value: 'value1',
      },
      {
        label: 'label2',
        value: 'value2',
      },
    ];
    const keyDownHandler = keyDownMove(options);
    expect(keyDownHandler(prevFocus)).toBe(1);
  });
});
