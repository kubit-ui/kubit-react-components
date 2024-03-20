import * as React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { SkeletonStandAlone } from './skeletonStandAlone';
import { ISkeleton, ISkeletonStandAlone } from './types';
import { SkeletonShapeStylesType } from './types/skeletonTheme';

const SKELETON_STYLES = 'SKELETON_STYLES';

const SkeletonComponent = React.forwardRef(
  <V extends string | unknown>(
    props: ISkeleton<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const shapeStyles = useStyles<SkeletonShapeStylesType, V>(
      SKELETON_STYLES,
      props.shapeVariant,
      props.ctv
    );
    const styles = shapeStyles?.[props.variant];

    return <SkeletonStandAlone {...props} ref={ref} styles={styles} />;
  }
);
SkeletonComponent.displayName = 'SkeletonComponent';

const SkeletonBoundary = <V extends string | unknown>(
  props: ISkeleton<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <SkeletonStandAlone {...(props as unknown as ISkeletonStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <SkeletonComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * Skeleton coponents is a loading component that can be used to show a loading state of a component.
 * @param {React.PropsWithChildren<ISkeleton<V>>} props
 * @returns {JSX.Element}
 * @constructor
 */
const Skeleton = React.forwardRef(SkeletonBoundary) as <V>(
  props: React.PropsWithChildren<ISkeleton<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof SkeletonBoundary>;

export { Skeleton };
