import { LabelStandAlone as KubitLabel } from '@/components/label/labelStandAlone';

import type { CheckboxCssClasses, CheckboxLabelType } from '../types/checkbox';

interface ICheckboxLabel extends CheckboxLabelType {
  cssClasses?: CheckboxCssClasses;
  inputId: string;
}

export const Label = ({ ...props }: ICheckboxLabel): JSX.Element | null => {
  if (!props.content) {
    return null;
  }
  const { cssClasses, ...labelProps } = props;
  return typeof props.content === 'string' ? (
    <KubitLabel textCssClasses={cssClasses?.label} {...labelProps}>
      {props.content}
    </KubitLabel>
  ) : (
    props?.content
  );
};
