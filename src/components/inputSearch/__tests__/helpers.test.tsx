import {
  filterOptions,
  findBestMatch,
  getAriaControls,
  getLength,
  hasMatchWithOptions,
} from '../helpers';
import { InputSearchBestMatch } from '../types/inputSearch';

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

global.structuredClone = jest.fn(val => {
  return JSON.parse(JSON.stringify(val));
});

describe('Input Search Helpers', () => {
  test('Should filter options with value', async () => {
    const filteredOptions = [
      {
        options: ['string'],
      },
    ];
    expect(filterOptions('st', optionsToFilter)).toEqual({
      optionsFiltered: filteredOptions,
      recomemededOption: undefined,
    });
  });

  test('Should filter options without value', async () => {
    expect(filterOptions(undefined, optionsToFilter)).toEqual({ optionsFiltered: optionsToFilter });
  });

  test('Should filter options with no options filtered', async () => {
    const filteredOptions = {
      optionsFiltered: [{ options: [] }],
      recommendedOption: undefined,
    };
    expect(filterOptions('ra', optionsToFilter)).toStrictEqual(filteredOptions);
  });

  test('Should get options lenght', async () => {
    expect(getLength(options)).toEqual(4);
  });

  test('Should get ariaControls', async () => {
    expect(getAriaControls(options, 'ariaControls')).toStrictEqual('ariaControls0 ariaControls1');
  });
  test('findBestMatch function should return 1', () => {
    const objA = { list: 1, bestMatch: { key1: 5 }, bestMatchkey: 'key1' };
    const objB = { list: 1, bestMatch: { key1: 10 }, bestMatchkey: 'key1' };

    expect(findBestMatch(objA, objB)).toBe(1);
  });
  test('findBestMatch function should return -1', async () => {
    const objA: InputSearchBestMatch = {
      list: 1,
      bestMatch: { label: 'label1', value: '2' },
      bestMatchkey: 'value',
    };
    const objB: InputSearchBestMatch = {
      list: 1,
      bestMatch: { label: 'label2', value: '1' },
      bestMatchkey: 'value',
    };
    expect(findBestMatch(objA, objB)).toBe(-1);
  });
  test('findBestMatch function should return 0', async () => {
    const objA: InputSearchBestMatch = {
      list: 1,
      bestMatch: { label: 'label1', value: '2' },
      bestMatchkey: 'value',
    };
    const objB: InputSearchBestMatch = {
      list: 1,
      bestMatch: { label: 'label2', value: '2' },
      bestMatchkey: 'value',
    };
    expect(findBestMatch(objA, objB)).toBe(0);
  });
  test('check match', () => {
    const options = ['first', 'second', 'thrid'];
    const correctValue = 'first';
    const wrongValue = 'fourth';

    expect(hasMatchWithOptions(correctValue, options)).toBeTruthy();
    expect(hasMatchWithOptions(wrongValue, options)).toBeFalsy();
  });
});
