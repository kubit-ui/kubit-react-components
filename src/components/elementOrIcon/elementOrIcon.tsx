import * as React from 'react';

import { Icon, IconBasic } from '../icon';
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
 * @description
 * ElementOrIcon component is a component that can be used to display an element or an icon.
 * It can be used to display an icon or a component.
 * @param {IElementOrIcon} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <ElementOrIcon icon="icon" />
 * <ElementOrIcon icon={<Icon icon="icon" />} />
 * <ElementOrIcon icon={<Button variant="primary">Button</Button>} />
 */
export const ElementOrIcon = React.forwardRef(ElementOrIconComponent);
