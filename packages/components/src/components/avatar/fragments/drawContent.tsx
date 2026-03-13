import { Dot } from '@/components/dot/dot';
import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import {
  processIconProp,
  processTextProp,
} from '@/lib/utils/process/processCommonProp';

import type { AvatarStandAloneProps } from '../types/avatar';

type DrawContentProps = Pick<
  AvatarStandAloneProps,
  | 'dot'
  | 'contentType'
  | 'cssClasses'
  | 'icon'
  | 'initials'
  | 'maxLengthInitials'
> & {
  customAttributes?: Record<string, string | boolean>;
};

export const DrawContent = ({
  contentType,
  cssClasses,
  customAttributes,
  dot,
  icon,
  initials,
  maxLengthInitials,
}: DrawContentProps): JSX.Element => (
  <>
    {!!dot?.number && (
      <span className={cssClasses?.dot}>
        <Dot {...dot} />
      </span>
    )}
    {contentType === 'with-icon' && (
      <ElementOrIcon
        // className={cssClasses?.default}
        className={cssClasses?.icon}
        customAttributes={customAttributes}
        {...processIconProp(icon)}
      />
    )}
    {contentType === 'with-initials' && (
      <Text
        aria-hidden
        additionalClasses={
          {
            // text: cssClasses?.initials,
          }
        }
        component="span"
        customAttributes={customAttributes}
        {...processTextProp(initials, maxLengthInitials)}
      />
    )}
  </>
);
