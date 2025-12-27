import type { AriaAttributes } from 'react';

import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';
import type { CommonTextProps } from '@/lib/types/commons/text';

import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { STATES } from '@/lib/types/states/states';
import { processText } from '@/lib/utils/process/processText/processText';

import type { TextAreaCssClasses } from '../types/textArea';

export const ErrorStandAlone = ({
  cssClasses,
  customAttributtes,
  errorAriaLiveType,
  errorIcon,
  errorMessage,
  id,
  state,
}: {
  id: string;
  state: CommonTextProps;
  errorMessage?: CommonTextProps;
  errorAriaLiveType: AriaAttributes['aria-live'];
  errorIcon?: ElementOrIconProps;
  cssClasses?: TextAreaCssClasses;
  customAttributtes?;
}): JSX.Element => {
  return (
    <div
      aria-live={errorAriaLiveType}
      className={cssClasses?.errorcontainer}
      id={id}
      {...customAttributtes}
    >
      {!!processText(errorMessage).children && state === STATES.ERROR && (
        <>
          <ElementOrIcon
            className={cssClasses?.erroricon}
            customAttributes={customAttributtes}
            {...errorIcon}
          />
          <Text
            additionalClasses={{
              text: cssClasses?.errormessage,
            }}
            component="p"
            customAttributes={customAttributtes}
            {...processText(errorMessage)}
          >
            {processText(errorMessage).children}
          </Text>
        </>
      )}
    </div>
  );
};
