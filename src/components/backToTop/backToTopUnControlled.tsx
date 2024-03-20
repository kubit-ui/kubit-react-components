import * as React from 'react';

import { focusFirstDescendant } from '@/utils';

import { BackToTopControlled } from './backToTopControlled';
import { IBackToTopUncontrolled } from './types/backToTop';

const BackToTopUnControlledComponent = <V extends string | unknown>(
  { ...props }: IBackToTopUncontrolled<V>,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
): JSX.Element => {
  const handleOnClick = () => {
    focusFirstDescendant(document.body);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return <BackToTopControlled {...props} ref={ref} onClick={handleOnClick} />;
};

const BackToTopUnControlled = React.forwardRef(BackToTopUnControlledComponent) as <
  V extends string | unknown,
>(
  props: React.PropsWithChildren<IBackToTopUncontrolled<V>> & {
    ref?: React.ForwardedRef<HTMLButtonElement> | undefined | null;
  }
) => ReturnType<typeof BackToTopUnControlledComponent>;

export { BackToTopUnControlled };
