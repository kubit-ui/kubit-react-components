import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { CarouselStandAlone } from './carouselStandAlone';
import { CarouselPropsStylesType, ICarouselControlled, ICarouselStandAlone } from './types';

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
