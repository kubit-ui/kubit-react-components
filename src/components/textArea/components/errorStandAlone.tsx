import type { AriaAttributes } from 'react';

import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';
import type { CommonTextProps } from '@/lib/types/commons/text';

import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { STATES } from '@/lib/types/states/states';
import { processTextProp } from '@/lib/utils/process/processCommonProp';

import type { TextAreaCssClasses } from '../types/textArea';

/**
 * Standalone error message component for textarea fields.
 *
 * This component displays error messages with optional icon for textarea inputs.
 * It manages accessibility attributes and visual error states.
 *
 * @example
 * ```tsx
 * <ErrorStandAlone
 *   errorMessage={{ content: "This field is required" }}
 *   state="error"
 * />
 * ```
 */
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
      {!!processTextProp(errorMessage).children && state === STATES.ERROR && (
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
            {...processTextProp(errorMessage)}
          >
            {processTextProp(errorMessage).children}
          </Text>
        </>
      )}
    </div>
  );
};
