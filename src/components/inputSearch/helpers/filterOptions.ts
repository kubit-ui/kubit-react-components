import { IOptionGroup, InputSearchFilterOptionReturnValue } from '../types';

// eslint-disable-next-line complexity
export const filterOptions = (
  value: string | number | undefined,
  options: IOptionGroup[],
  wordSeparator = ',',
  suggestInit = 1
): InputSearchFilterOptionReturnValue => {
  if (options.length === 0) {
    return { optionsFiltered: [] };
  }
  if (!value || String(value).length < suggestInit) {
    return { optionsFiltered: options };
  }
  const re = new RegExp(wordSeparator);
  // Cloned option list structure
  const optionsFiltered = structuredClone(options);

  for (let i = 0; i < optionsFiltered.length; i++) {
    // Array to save matches options
    const optionsAvailable: string[] = [];
    String(value)
      .split(re)
      .map(text =>
        optionsFiltered[i].options.filter(opt => {
          if (text.length && String(opt).toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
            optionsAvailable.push(opt);
          }
        })
      );

    optionsFiltered[i].options = optionsAvailable;
  }

  const hasValue = optionsFiltered.some(option => option.options.length > 0);

  return {
    optionsFiltered: hasValue ? optionsFiltered : options,
  };
};

export const hasMatchWithOptions = (
  inputValue: string,
  options: string[],
  caseSensitive?: boolean
): boolean => {
  const hasMatch = caseSensitive
    ? options.some(option => option === inputValue)
    : options.some(option => option.toLocaleLowerCase() === inputValue.toLocaleLowerCase());
  return hasMatch;
};
