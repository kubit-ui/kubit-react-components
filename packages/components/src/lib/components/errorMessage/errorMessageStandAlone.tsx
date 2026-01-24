import { forwardRef } from 'react';

import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import {
  processIconProp,
  processTextProp,
} from '@/lib/utils/process/processCommonProp';

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
              {...processIconProp(icon)}
            />
            <Text
              additionalClasses={{
                text: cssClasses?.typography,
              }}
              {...processTextProp(message)}
            />
          </>
        )}
      </div>
    );
  },
);
