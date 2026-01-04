import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';
import type { CommonTextProps } from '@/lib/types/commons/text';

import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { STATES } from '@/lib/types/states/states';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { SelectorBoxFileCssClasses } from '../types/selectorBoxFile';
import type { SelectorBoxFileStateType } from '../types/state';

interface SelectorBoxFileErrorMessageProps {
  cssClasses?: SelectorBoxFileCssClasses;
  errorMessageId: string;
  errorMessageIcon?: ElementOrIconProps;
  errorMessage?: CommonTextProps;
  state: SelectorBoxFileStateType;
}
export const SelectorBoxFileErrorMessage = ({
  cssClasses,
  errorMessage,
  errorMessageIcon,
  errorMessageId,
  state,
}: SelectorBoxFileErrorMessageProps): JSX.Element | null => {
  return (
    <div aria-live="polite">
      {!processTextProp(errorMessage) || state !== STATES.ERROR ? null : (
        <div className={cssClasses?.errormessagecontainer} id={errorMessageId}>
          <ElementOrIcon
            className={cssClasses?.errormessageicon}
            {...errorMessageIcon}
          />
          <Text
            additionalClasses={{
              text: cssClasses?.errormessage,
            }}
            {...processTextProp(errorMessage)}
          />
        </div>
      )}
    </div>
  );
};
