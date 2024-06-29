type MergeValues<S> = S[Extract<keyof S, string>];
type ParsingObject<S> = MergeValues<S> extends object ? MergeValues<S> : never;

export const mergeObjects = <T extends object, S extends object>(
  target: T,
  ...sources: S[]
): Partial<T & S> => {
  const result = Array.isArray(target) ? ([] as unknown as T[]) : { ...target };

  for (const source of sources) {
    for (const key in source) {
      // eslint-disable-next-line no-prototype-builtins
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] === 'object' && source[key] !== null) {
          if (
            // eslint-disable-next-line no-prototype-builtins
            !result.hasOwnProperty(key) ||
            typeof (result as S)[key] !== 'object' ||
            (result as S)[key] === null
          ) {
            (result as S)[key] = Array.isArray(source[key])
              ? ([] as MergeValues<S>)
              : ({} as MergeValues<S>);
          }
          (result as S)[key] = mergeObjects<ParsingObject<S>, S>(
            (result as S)[key] as ParsingObject<S>,
            source[key] as S
          ) as MergeValues<S>;
        } else {
          (result as S)[key] = source[key];
        }
      }
    }
  }
  return result as Partial<T & S>;
};
