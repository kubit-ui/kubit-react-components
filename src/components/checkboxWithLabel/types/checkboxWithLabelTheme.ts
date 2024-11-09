import { CommonStyleType } from '@/types/styles/commonStyle';
import { TypographyTypes } from '@/types/styles/typography';

import { CheckboxWithLabelState } from './state';

export type CheckboxWithLabelPropsStylesType = {
  rootContainer?: CommonStyleType;
  checkboxLabelContainer?: CommonStyleType;
  descriptionHelperTextContainer?: CommonStyleType;
  label?: TypographyTypes;
  labelWhenDescription?: TypographyTypes;
  description?: TypographyTypes;
  helperText?: TypographyTypes;
};

export type CheckboxWithLabelStatePropsStylesType = {
  [state in CheckboxWithLabelState]?: CheckboxWithLabelPropsStylesType;
};

export type CheckboxWithLabelStyles<V extends string | number | symbol> = {
  [variant in V]: CheckboxWithLabelStatePropsStylesType;
};
