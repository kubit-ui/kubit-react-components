import { ListOptionsOptionType } from '@/components/listOptions';

import { filterOptions, findOptionByLabel, findOptionByValue } from '../filterOptions';

describe('Filter options inputDropdown', () => {
  it('filterOptions with no value', () => {
    const value = undefined;
    const options: ListOptionsOptionType[] = [
      { label: 'option1', value: 'option1' },
      { label: 'option2', value: 'option2' },
    ];

    expect(filterOptions(value, options)).toBe(options);
  });
  it('filterOptions with value', () => {
    const value = 'option1';
    const options: ListOptionsOptionType[] = [
      { label: 'option1', value: 'option1' },
      { label: 'option2', value: 'option2' },
    ];

    expect(filterOptions(value, options)).toStrictEqual([{ label: 'option1', value: 'option1' }]);
  });

  it('findOptionByLabel function', () => {
    const label = 'label1';
    const options: ListOptionsOptionType[] = [
      { label: 'label1', value: 'option1' },
      { label: 'label2', value: 'option2' },
    ];

    expect(findOptionByLabel(label, options)).toStrictEqual({
      label: 'label1',
      value: 'option1',
    });
  });

  it('findOptionByValue function', () => {
    const value = 'option1';
    const options: ListOptionsOptionType[] = [
      { label: 'option1', value: 'option1' },
      { label: 'option2', value: 'option2' },
    ];

    expect(findOptionByValue(value, options)).toStrictEqual({
      label: 'option1',
      value: 'option1',
    });
  });
});
