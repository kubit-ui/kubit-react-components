// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pickAriaProps = (props: Record<string, any>): Record<string, string> => {
  return Object.keys(props)
    .filter(key => key.startsWith('aria-'))
    .reduce(
      (result, key) => {
        result[key] = props[key];
        return result;
      },
      {} as Record<string, string>
    );
};
