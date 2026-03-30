import type { AriaAttributes } from 'react';

import type { CommonIconProps } from '@/lib/types/commons/icon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';

type ErrorMessageCssClasses = ComponentSelected<
  ComponentsTypesComponents['ERROR_MESSAGE']
>;

export interface ErrorMessageStandAloneProps extends Pick<
  AriaAttributes,
  'aria-live'
> {
  cssClasses?: ErrorMessageCssClasses;
  show?: boolean;
  message?: CommonTextProps;
  id?: string;
  icon?: CommonIconProps;
}

export type ErrorMessageProps<
  Variant = undefined extends string ? unknown : string,
> = Omit<ErrorMessageStandAloneProps, 'styles'> & {
  variant?: Variant;
  additionalClasses?: Partial<ErrorMessageCssClasses>;
};
