import {
  type ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';

import type { ISnackbar } from './types/snackbar';

import { useSnackbarAutoClose } from './hooks/useSnackbarAutoClose';
import { SnackbarStandAlone } from './snackbarStandAlone';

const SnackbarComponent = (
  { additionalClasses, closeTimeout, open = false, ...props }: ISnackbar,
  ref: ForwardedRef<HTMLDivElement> | undefined | null,
): JSX.Element => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'SNACKBAR',
  });

  const innerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => innerRef?.current as HTMLDivElement, []);

  const { handleBlur, handleFocus, handleMouseEnter, handleMouseLeave } =
    useSnackbarAutoClose({
      closeTimeout,
      onClose: props.onClose,
      open,
    });

  return (
    <SnackbarStandAlone
      {...props}
      ref={innerRef}
      cssClasses={cssClasses}
      open={open}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export const Snackbar = forwardRef(SnackbarComponent);
