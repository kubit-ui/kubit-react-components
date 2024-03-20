import { IOptionGroup, InputSearchBestMatch, InputSearchFilterOptionReturnValue } from '../types';

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
  if (!value) {
    return { optionsFiltered: options };
  }
  const re = new RegExp(wordSeparator);
  // Cloned option list structure
  const optionsFiltered = structuredClone(options);
  // Array to save the best option from each list
  const betterMatches: InputSearchBestMatch[] = [];
  // Array to save the text when it matches
  const wordCount: string[] = [];
  // Simply condition
  const full = true;

  for (let i = 0; i < optionsFiltered.length; i++) {
    // Array to save matches options
    const optionsAvailable: string[] = [];
    // Array to register the index of the matches options
    const optionsPushed: number[] = [];
    // Object to record how many times an option is repeated
    const betterMatchesForlist = {};
    String(value)
      .split(re)
      .map(text =>
        optionsFiltered[i].options.filter(opt => {
          if (text.length && String(opt).toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
            //Save text when it matches
            if (!wordCount.includes(text)) {
              wordCount.push(text);
            }
            // Check if the matched option has already been stored
            const optionPosition = optionsFiltered[i].options.indexOf(opt);
            if (!optionsPushed.includes(optionPosition)) {
              // If the option was not registered, it saves its index, registers the option and creates an entry in the object to check if it is repeated in the future
              optionsPushed.push(optionPosition);
              optionsAvailable.push(opt);
              betterMatchesForlist[optionPosition] = 1;
            } else {
              // If the option exists, add the match
              betterMatchesForlist[optionPosition]++;
            }
          }
        })
      );
    // Register the best match from each list, if exists
    if (Object.keys(betterMatchesForlist).length) {
      betterMatches.push({
        list: i,
        bestMatchkey: findTheHighestKey(betterMatchesForlist),
        bestMatch: findTheHighestKey(betterMatchesForlist, full),
      });
    }
    // Overwrites the options list with the filtered values
    optionsFiltered[i].options = optionsAvailable;
  }

  // Returns the best match from all lists
  const betterMatch = betterMatches.sort(findBestMatch)[0];
  // Returns the recommended option, based on the best match
  const recommendedOption =
    wordCount.length > suggestInit && betterMatch
      ? options[betterMatch.list].options[betterMatch.bestMatchkey]
      : undefined;
  return { optionsFiltered, recommendedOption };
};

// Function to return the option with the highest agreement from the list
function findTheHighestKey(obj: object, full?: boolean) {
  const highestValue = -Infinity;
  let highest;
  for (const [key, value] of Object.entries(obj)) {
    // Check if the current value is a number and greater than the current highestValue
    if (typeof value === 'number' && value > highestValue) {
      highest = full ? { [key]: value } : key;
    }
  }
  return highest;
}

// Function to reorder (from highest to lowest) the list with the best match
export function findBestMatch(objA: InputSearchBestMatch, objB: InputSearchBestMatch): number {
  if (objA.bestMatch?.[objA.bestMatchkey] > objB.bestMatch?.[objB.bestMatchkey]) {
    return -1;
  } else if (objA.bestMatch?.[objA.bestMatchkey] < objB.bestMatch?.[objB.bestMatchkey]) {
    return 1;
  }
  return 0;
}

export const hasMatchWithOptions = (inputValue: string, options: string[]): boolean => {
  const hasMatch = options.find(option => option === inputValue);
  return !!hasMatch;
};
