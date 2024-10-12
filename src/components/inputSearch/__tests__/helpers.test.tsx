import {
  buildOptionsScreenReaderText,
  filterOptions,
  getAriaControls,
  getLength,
  hasMatchWithOptions,
  shouldOpenPopover,
} from '../helpers';

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

  test('check match', () => {
    const options = ['first', 'second', 'thrid'];
    const correctValue = 'first';
    const wrongValue = 'fourth';

    expect(hasMatchWithOptions(correctValue, options)).toBeTruthy();
    expect(hasMatchWithOptions(wrongValue, options)).toBeFalsy();
  });
});

describe('shouldOpenPopover', () => {
  it('returns false when open is false', () => {
    expect(shouldOpenPopover({ open: false, options: [] })).toBe(false);
  });

  it('returns true when useActionBottomSheet is true', () => {
    expect(shouldOpenPopover({ open: true, useActionBottomSheet: true, options: [] })).toBe(true);
  });

  it('returns true when options array length is greater than 0', () => {
    expect(shouldOpenPopover({ open: true, options: [{ options: ['Option 1'] }] })).toBe(true);
  });

  it('returns true when loadingList is true', () => {
    expect(shouldOpenPopover({ open: true, options: [], loadingList: true })).toBe(true);
  });

  it('returns true when noResultText has content', () => {
    expect(
      shouldOpenPopover({ open: true, options: [], noResultText: { content: 'No results found' } })
    ).toBe(true);
  });

  it('returns true when hasHighlightedOption is true', () => {
    expect(shouldOpenPopover({ open: true, options: [], hasHighlightedOption: true })).toBe(true);
  });

  it('returns false when none of the conditions are met', () => {
    expect(shouldOpenPopover({ open: true, options: [] })).toBe(false);
  });
});

describe('screenReader', () => {
  it('buildOptionsScreenReaderText - should return falsy if optionsScreenReaderText does not exist', () => {
    const result = buildOptionsScreenReaderText({
      numOptions: 1,
      numOptionsFiltered: 1,
      optionsScreenReaderText: undefined,
    });
    expect(result).toBeFalsy();
  });

  it('buildOptionsScreenReaderText - should return optionsScreenReaderText with replaced values', () => {
    const result = buildOptionsScreenReaderText({
      numOptions: 1,
      numOptionsFiltered: 1,
      optionsScreenReaderText: '{{numOptionsFiltered}} of {{numOptions}}',
    });
    expect(result).toBe('1 of 1');
  });
});
