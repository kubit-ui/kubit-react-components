import * as React from 'react';

import { IconBasic } from '../icon/icon';
import { IconHost as Icon } from '../icon/iconHost';
import { IElementOrIcon } from './types';

const ElementOrIconComponent = (
  { basic = false, ...props }: IElementOrIcon,
  ref: React.ForwardedRef<HTMLSpanElement>
): JSX.Element => {
  const { icon: element, ...rest } = props;

  if (!element) {
    return <></>;
  }

  // element as string
  if (typeof element === 'string') {
    return basic ? (
      <IconBasic {...rest} ref={ref} icon={element} />
    ) : (
      <Icon {...rest} ref={ref} icon={element} />
    );
  }
  // element as jsx element
  return <>{element}</>;
};

/**
 * ElementOrIcon component is a component that can be used to display either an element or an icon.
 * It offers flexibility in rendering either icons or more complex components within a given context.
 * @param {IElementOrIcon} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <ElementOrIcon icon="icon" />
 * <ElementOrIcon icon={<Icon icon="icon" />} />
 * <ElementOrIcon icon={<Button variant="primary">Button</Button>} />
 */
export const ElementOrIcon = React.forwardRef(ElementOrIconComponent);
