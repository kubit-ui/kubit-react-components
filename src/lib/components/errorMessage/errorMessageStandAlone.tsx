import { forwardRef } from 'react';

import { ElementOrIcon } from '@/components/elementOrIcon/elementOrIcon';
import { Text } from '@/components/text/text';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processIcon } from '@/lib/utils/process/processIcon/processIcon';
import { processText } from '@/lib/utils/process/processText/processText';

import type { ErrorMessageProps } from './types/errorMessage';

export const ErrorMessageStandAlone = forwardRef(
  (
    { cssClasses, icon, message, ...props }: ErrorMessageProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): JSX.Element | null => {
    if (!message) {
      return null;
    }

    const customProps = pickCustomAttributes(props);

    return (
      <div
        ref={ref}
        {...customProps}
        className={classNames(
          'kbt-error-message__container',
          cssClasses?.error_message,
          { 'kbt-sr-only': !props.show },
        )}
        id={props.id}
      >
        {props.show && (
          <>
            <ElementOrIcon
              className={cssClasses?.icon}
              {...processIcon(icon)}
            />
            <Text
              additionalClasses={{
                text: cssClasses?.typography,
              }}
              {...processText(message)}
            />
          </>
        )}
      </div>
    );
  },
);
