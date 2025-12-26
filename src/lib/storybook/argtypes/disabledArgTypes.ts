export const getDisabledArgTypes = (
  options: string[],
): {
  [key: string]: {
    table: {
      disable: boolean;
    };
  };
} => {
  return options.reduce(
    (acc, option) => {
      acc[option] = {
        table: {
          disable: true,
        },
      };
      return acc;
    },
    {} as { [key: string]: { table: { disable: boolean } } },
  );
};
