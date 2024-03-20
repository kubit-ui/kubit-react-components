import { DecorativePropsType, DecorativeType } from '@/components/decorativeElement/types';

export const buildPropsDecorativeElement = <T, S = undefined>(
  element?: DecorativePropsType,
  styles?: T,
  extraStyles?: S
): DecorativePropsType => {
  const arrayOfDecorativeType = Object.values(DecorativeType);
  let result = {};

  const decorativeElement: DecorativeType | undefined = arrayOfDecorativeType.find(
    item => element?.[item]
  );
  if (!decorativeElement) {
    return result;
  }
  result = {
    [decorativeElement]: {
      ...element?.[decorativeElement],
    },
  };

  // Convert snake_case to camelCase
  const toCamelCase = () => {
    return decorativeElement.toLowerCase().replace(/_[a-z]/g, match => match[1].toUpperCase());
  };

  if (styles?.[toCamelCase()]) {
    result = {
      [decorativeElement]: {
        ...element?.[decorativeElement],
        ...styles?.[toCamelCase()],
      },
    };
  }
  if (extraStyles && styles?.[toCamelCase()]) {
    result = {
      [decorativeElement]: {
        ...styles?.[toCamelCase()],
        ...extraStyles,
        ...element?.[decorativeElement],
      },
    };
  }

  return result;
};
