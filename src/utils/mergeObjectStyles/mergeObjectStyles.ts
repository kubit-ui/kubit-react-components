export const mergeObjectsStyles = <T extends object, S extends object>(
  target: T,
  source: S
): Partial<T & S> => {
  // This condition is necessary to avoid the error: "Maximum call stack size exceeded"
  if (typeof target !== 'object' || typeof source !== 'object') {
    return source;
  }
  const mergedObject = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        mergedObject[key as string] = mergeObjectsStyles<T, S>(
          target[key as string] as T,
          source[key] as S
        );
      } else {
        mergedObject[key as string] = source[key];
      }
    }
  }

  return mergedObject;
};
