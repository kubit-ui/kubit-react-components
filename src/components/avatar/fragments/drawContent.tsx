import { Dot } from '@/components/dot/dot';
import { Text } from '@/components/text/text';
import { ElementOrIcon } from '@/lib/components/elementOrIcon/elementOrIcon';
import { processIcon } from '@/lib/utils/process/processIcon/processIcon';
import { processText } from '@/lib/utils/process/processText/processText';

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
      {...processIcon(icon)}
    />
)}
    {contentType === 'with-initials' && (
    <Text
      additionalClasses={
          {
            // text: cssClasses?.initials,
          }
        }
      aria-hidden={true}
      component="span"
      customAttributes={customAttributes}
      {...processText(initials, maxLengthInitials)}
    />
)}
  </>
);
