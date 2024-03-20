import { ListOptionsOptionType } from '@/components/listOptions';

export const filterOptions = (
  value: string | number | undefined,
  options: ListOptionsOptionType[]
): ListOptionsOptionType[] => {
  if (!value) {
    return options;
  }
  const optionsFilter = options.filter(({ label }) =>
    String(label).toLocaleLowerCase().includes(String(value).toLocaleLowerCase())
  );
  return optionsFilter;
};

export const findOptionByLabel = (
  label: string | number | undefined,
  options: ListOptionsOptionType[]
): ListOptionsOptionType | undefined => {
  return options.find(opt => String(opt.label) === String(label));
};

export const findOptionByValue = (
  value: string | number | undefined,
  options: ListOptionsOptionType[]
): ListOptionsOptionType | undefined => {
  return options.find(opt => String(opt.value) === String(value));
};
