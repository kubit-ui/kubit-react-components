import type { CommonTextProps } from '@/lib/types/commons/text';

import { Text } from '@/components/text/text';
import { STATES } from '@/lib/types/states/states';
import { processText } from '@/lib/utils/process/processText/processText';

import type { ElementOrIconProps } from '../../elementOrIcon/types/elementOrIcon';
import type { SelectorBoxFileCssClasses } from '../types/selectorBoxFile';
import type { SelectorBoxFileStateType } from '../types/state';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';

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
      {!processText(errorMessage) || state !== STATES.ERROR ? null : (
        <div className={cssClasses?.errormessagecontainer} id={errorMessageId}>
          <ElementOrIcon
            className={cssClasses?.errormessageicon}
            {...errorMessageIcon}
          />
          <Text
            additionalClasses={{
              text: cssClasses?.errormessage,
            }}
            {...processText(errorMessage)}
          />
        </div>
      )}
    </div>
  );
};
