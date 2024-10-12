export const INPUT_SEARCH_BUILD_OPTIONS_SCREEN_READER_NUM_OPTIONS_KEY = '{{numOptions}}';
export const INPUT_SEARCH_BUILD_OPTIONS_SCREEN_READER_NUM_OPTIONS_FILTERED_KEY =
  '{{numOptionsFiltered}}';

export const buildOptionsScreenReaderText = ({
  numOptions,
  numOptionsFiltered,
  optionsScreenReaderText,
}: {
  numOptions: number;
  numOptionsFiltered: number;
  optionsScreenReaderText?: string;
}): string | undefined => {
  if (!optionsScreenReaderText) {
    return optionsScreenReaderText;
  }
  const numOptionsRegExp = new RegExp(
    INPUT_SEARCH_BUILD_OPTIONS_SCREEN_READER_NUM_OPTIONS_KEY,
    'g'
  );
  const numOptionsFilteredRegExp = new RegExp(
    INPUT_SEARCH_BUILD_OPTIONS_SCREEN_READER_NUM_OPTIONS_FILTERED_KEY,
    'g'
  );
  return optionsScreenReaderText
    .replace(numOptionsRegExp, String(numOptions))
    .replace(numOptionsFilteredRegExp, String(numOptionsFiltered));
};
