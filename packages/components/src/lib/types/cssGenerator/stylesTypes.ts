import type { CssLibPropsType as CssGeneratorTypeInterface } from 'bernova/interfaces';

export type CssLibPropsType = CssGeneratorTypeInterface<any> & {
  $dynamicValues?: string[];
};
