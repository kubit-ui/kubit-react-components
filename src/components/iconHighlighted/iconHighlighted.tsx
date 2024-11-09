import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { IconHighlightedStandAlone } from './iconHighlightedStandAlone';
import { IIconHighlighted, IIconHighlightedStandAlone } from './types/iconHighlighted';
import { IconHighlightedVariantStylesType } from './types/iconHighlightedTheme';

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
