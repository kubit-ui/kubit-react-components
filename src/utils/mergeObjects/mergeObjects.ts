/* eslint-disable complexity */
export const mergeObjects = (target: object, ...sources: object[]): object => {
  const result = Array.isArray(target) ? [] : { ...target };

  for (const source of sources) {
    for (const key in source) {
      // eslint-disable-next-line no-prototype-builtins
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] === 'object' && source[key] !== null) {
          if (
            // eslint-disable-next-line no-prototype-builtins
            !result.hasOwnProperty(key) ||
            typeof result[key] !== 'object' ||
            result[key] === null
          ) {
            result[key] = Array.isArray(source[key]) ? [] : {};
          }
          result[key] = mergeObjects(result[key], source[key]);
        } else {
          result[key] = source[key];
        }
      }
    }
  }
  return result;
};
