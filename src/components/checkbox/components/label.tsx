import { LabelStandAlone as KubitLabel } from '@/components/label/labelStandAlone';

import type { CheckboxCssClasses } from '../types/checkbox';

interface ICheckboxLabel {
  cssClasses?: CheckboxCssClasses;
  inputId: string;
  content?: string | JSX.Element;
  id?: string;
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
