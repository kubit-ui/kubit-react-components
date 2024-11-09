import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { CarouselStandAlone } from './carouselStandAlone';
import { ICarouselControlled, ICarouselStandAlone } from './types/carousel';
import { CarouselPropsStylesType } from './types/carouselTheme';

const CarouselControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: ICarouselControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<CarouselPropsStylesType, V>(STYLES_NAME.CAROUSEL, variant, ctv);
    return <CarouselStandAlone {...props} ref={ref} styles={styles} />;
  }
);
CarouselControlledComponent.displayName = 'CarouselControlledComponent';

const CarouseBoundary = <V extends string | unknown>(
  props: ICarouselControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <CarouselStandAlone {...(props as unknown as ICarouselStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <CarouselControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const CarouselControlled = React.forwardRef(CarouseBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<ICarouselControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof CarouseBoundary>;

export { CarouselControlled };
