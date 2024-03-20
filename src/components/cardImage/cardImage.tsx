import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { CardImageStandAlone } from './cardImageStandAlone';
import { CardImageVariantStylesType, ICardImage, ICardImageStandAlone } from './types';

const CardImageComponent = React.forwardRef(
  <V extends string | unknown>(
    props: ICardImage<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const device = useMediaDevice();
    const styles = useStyles<CardImageVariantStylesType, V>(
      STYLES_NAME.CARD_IMAGE,
      props.variant,
      props.ctv
    );

    return <CardImageStandAlone {...props} ref={ref} device={device} styles={styles} />;
  }
);
CardImageComponent.displayName = 'CardImageComponent';

const CardImageBoundary = <V extends string | unknown>(
  props: ICardImage<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <CardImageStandAlone {...(props as unknown as ICardImageStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <CardImageComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const CardImage = React.forwardRef(CardImageBoundary) as <V extends string | unknown>(
  props: ICardImage<V>
) => JSX.Element;

export { CardImage };
