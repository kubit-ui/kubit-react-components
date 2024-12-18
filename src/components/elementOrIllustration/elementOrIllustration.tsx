import React from 'react';

import { IllustrationHost as Illustration } from '../illustration/illustrationHost';
import { IElementOrillustration } from './types/elementOrIllustration';

const ElementOrIllustrationComponent = (
  props: IElementOrillustration,
  ref: React.ForwardedRef<HTMLImageElement> | undefined | null
): JSX.Element => {
  const { illustration: element, ...rest } = props;

  if (!element) {
    return <></>;
  }

  // element as string
  if (typeof element === 'string') {
    return <Illustration {...rest} ref={ref} illustration={element} />;
  }
  // element as jsx element
  return <>{element as React.ReactNode}</>;
};

/**
 * ElementOrIllustration component is a component that can be used to display an element or an illustration.
 * It can be used to display an illustration or a component.
 * @param {IElementOrillustration} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <ElementOrIllustration illustration="illustration" />
 * <ElementOrIllustration illustration={<Illustration illustration="illustration" />} />
 * <ElementOrIllustration illustration={<Button variant="primary">Button</Button>} />
 */
export const ElementOrIllustration = React.forwardRef(ElementOrIllustrationComponent);
