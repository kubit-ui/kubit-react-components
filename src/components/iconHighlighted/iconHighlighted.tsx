import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { IconHighlightedStandAlone } from './iconHighlightedStandAlone';
import {
  IIconHighlighted,
  IIconHighlightedStandAlone,
  IconHighlightedVariantStylesType,
} from './types';

// eslint-disable-next-line react/display-name
const IconHighlightedComponent = React.forwardRef(
  <V extends string | unknown>(
    { ctv, ...props }: IIconHighlighted<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const variantStyles = useStyles<IconHighlightedVariantStylesType, V>(
      STYLES_NAME.ICON_HIGHLIGHTED,
      props.variant,
      ctv
    );

    return <IconHighlightedStandAlone {...props} ref={ref} styles={variantStyles} />;
  }
);

const IconHighlightedBoundary = <V extends string | unknown>(
  props: IIconHighlighted<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <IconHighlightedStandAlone
          {...(props as unknown as IIconHighlightedStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <IconHighlightedComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const IconHighlighted = React.forwardRef(IconHighlightedBoundary) as <V extends string | unknown>(
  props: IIconHighlighted<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { IconHighlighted };
