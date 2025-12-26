import type { AriaAttributes } from 'react';

import { RenderIf } from '@/components/renderIf/renderIf';
import { Text } from '@/components/text/text';
import type { CommonTextProps } from '@/lib/types/commons/text';
import { STATES } from '@/lib/types/states/states';
import { processText } from '@/lib/utils/process/processText/processText';

import { ElementOrIcon } from '../../elementOrIcon/elementOrIcon';
import type { ElementOrIconProps } from '../../elementOrIcon/types/elementOrIcon';
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
      <RenderIf
        condition={
          !!processText(errorMessage).children && state === STATES.ERROR
        }
      >
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
      </RenderIf>
    </div>
  );
};
