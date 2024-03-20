export const mergeObjectsStyles = (target: object, source: object): object => {
  if (typeof target !== 'object' || typeof source !== 'object') {
    return source;
  }
  const mergedObject = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        mergedObject[key] = mergeObjectsStyles(target[key], source[key]);
      } else {
        mergedObject[key] = source[key];
      }
    }
  }

  return mergedObject;
};
