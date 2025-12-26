import { ErrorMessage as KubitErrorMessage } from '@/lib/components/errorMessage/errorMessage';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';

import type {
  CheckboxCssClasses,
  CheckboxMessageType,
} from '../types/checkbox';

interface ICheckboxErrorMessage extends CheckboxMessageType {
  inputId: string;
  cssClasses?: CheckboxCssClasses;
  id?: string;
  show?: boolean;
}

export const ErrorMessage = ({
  cssClasses,
  message,
  ...props
}: ICheckboxErrorMessage): JSX.Element | null => {
  if (!message) {
    return null;
  }

  const customProps = pickCustomAttributes(props);

  return (
    <div className={cssClasses?.errormessagecontainer}>
      <KubitErrorMessage
        {...props}
        {...customProps}
        additionalClasses={cssClasses?.error_message}
        message={message}
      />
    </div>
  );
};
