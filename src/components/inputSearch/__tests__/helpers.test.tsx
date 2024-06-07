import { filterOptions, getAriaControls, getLength, hasMatchWithOptions } from '../helpers';

const optionsToFilter = [
  {
    options: ['string', 'label'],
  },
];

const options = [
  {
    options: ['string1', 'label1'],
  },
  {
    options: ['string2', 'label2'],
  },
];

describe('Input Search Helpers', () => {
  test('Should filter options with value', async () => {
    const filteredOptions = [
      {
        options: ['string'],
      },
    ];
    expect(filterOptions('st', optionsToFilter)).toEqual({
      optionsFiltered: filteredOptions,
    });
  });

  test('Should filter options without value', async () => {
    expect(filterOptions(undefined, optionsToFilter)).toEqual({ optionsFiltered: optionsToFilter });
  });

  test('Should get options lenght', async () => {
    expect(getLength(options)).toEqual(4);
  });

  test('Should get ariaControls', async () => {
    expect(getAriaControls(options, 'ariaControls')).toStrictEqual('ariaControls0 ariaControls1');
  });

  test('should return empty array when options is empty', () => {
    const result = filterOptions('test', []);
    expect(result.optionsFiltered).toEqual([]);
  });

  test('should return original options when value is undefined', () => {
    const options = [{ options: ['test1', 'test2'] }];
    const result = filterOptions(undefined, options);
    expect(result.optionsFiltered).toEqual(options);
  });

  test('should filter options based on value', () => {
    const options = [{ options: ['test1', 'test2', 'test3'] }];
    const result = filterOptions('test1', options);
    expect(result.optionsFiltered).toEqual([{ options: ['test1'] }]);
  });

  test('should return original options when no match is found', () => {
    const options = [{ options: ['test1', 'test2', 'test3'] }];
    const result = filterOptions('test4', options);
    expect(result.optionsFiltered).toEqual(options);
  });

  test('check match', () => {
    const options = ['first', 'second', 'thrid'];
    const correctValue = 'first';
    const wrongValue = 'fourth';

    expect(hasMatchWithOptions(correctValue, options)).toBeTruthy();
    expect(hasMatchWithOptions(wrongValue, options)).toBeFalsy();
  });
});
