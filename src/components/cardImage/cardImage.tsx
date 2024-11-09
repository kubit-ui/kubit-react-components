import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { CardImageStandAlone } from './cardImageStandAlone';
import { ICardImage, ICardImageStandAlone } from './types/cardImage';
import { CardImageVariantStylesType } from './types/cardImageTheme';

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
