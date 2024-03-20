import * as React from 'react';

import { STYLES_NAME } from '@/constants';
// custom hook
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { calcFirstLastVisiblePosition, getPositionWithIn } from './helper';
import { PageControlStandAlone } from './pageControlStandAlone';
import {
  ArrowsControlVariantStylesType,
  IPageControlStandAlone,
  PageControlDirectionType,
  PageControlType,
  PageControlVariantStylesType,
} from './types';

const PageControlComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      variant,
      arrowsControlVariant,
      maxDots = 5,
      currentPosition: propsCurrentPosition,
      ctv,
      extraCt,
      ...props
    }: PageControlType<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<PageControlVariantStylesType, V>(
      STYLES_NAME.PAGE_CONTROL,
      variant,
      ctv
    );
    const arrowsControlStyles = useStyles<ArrowsControlVariantStylesType>(
      STYLES_NAME.PAGE_CONTROL,
      arrowsControlVariant,
      extraCt
    );

    const lastPosition = React.useRef<number>(0);
    const direction = React.useMemo(() => {
      let res = PageControlDirectionType.FORTH;
      if (propsCurrentPosition < lastPosition.current) {
        res = PageControlDirectionType.BACK;
      }
      lastPosition.current = propsCurrentPosition;
      return res;
    }, [propsCurrentPosition]);

    const isBullet = !!styles.isBullet;
    const dots = props.pages > maxDots ? maxDots : props.pages;
    const currentPosition = getPositionWithIn(propsCurrentPosition, props.pages);
    const { firstVisiblePosition, lastVisiblePosition } = calcFirstLastVisiblePosition({
      isBullet,
      direction,
      currentPosition,
      pages: props.pages,
      dots,
    });

    return (
      <PageControlStandAlone
        ref={ref}
        arrowsControlStyles={arrowsControlStyles}
        currentPosition={currentPosition}
        dots={dots}
        firstVisiblePosition={firstVisiblePosition}
        lastVisiblePosition={lastVisiblePosition}
        styles={styles}
        {...props}
      />
    );
  }
);
PageControlComponent.displayName = 'PageControlComponent';

const PageControlBoundary = <V extends string | unknown>(
  props: PageControlType<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <PageControlStandAlone {...(props as unknown as IPageControlStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <PageControlComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const PageControl = React.forwardRef(PageControlBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<PageControlType<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof PageControlBoundary>;

export { PageControl };
