import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { BreadcrumbsStandAlone } from './breadcrumbsStandAlone';
import { IBreadcrumbStandAlone, IBreadcrumbsControlled } from './types/breadcrumbs';
import { BreadcrumbsPropsStateStylesType } from './types/breadcrumbsTheme';

const BreadcrumbsControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { ctv, ...props }: IBreadcrumbsControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<BreadcrumbsPropsStateStylesType, V>(
      STYLES_NAME.BREADCRUMB,
      props.variant,
      ctv
    );

    return <BreadcrumbsStandAlone {...props} ref={ref} styles={styles} />;
  }
);
BreadcrumbsControlledComponent.displayName = 'BreadcrumbsControlledComponent';

const BreadcrumbsBoundary = <V extends string | unknown>(
  props: IBreadcrumbsControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <BreadcrumbsStandAlone
          {...(props as unknown as IBreadcrumbStandAlone)}
          ref={ref}
          crumbs={[]}
        />
      </FallbackComponent>
    }
  >
    <BreadcrumbsControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * Breadcrumbs component is a component that shows a breadcrumbs with a message.
 * to show list of links.
 * @param {React.PropsWithChildren<IBreadcrumbsControlled<V>>} props
 * @returns {JSX.Element}
 * @example
 * <BreadcrumbsControlled />
 * <BreadcrumbsControlled variant="primary" />
 */
const BreadcrumbsControlled = React.forwardRef(BreadcrumbsBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IBreadcrumbsControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

export { BreadcrumbsControlled };

export { BreadcrumbsControlled as Breadcrumbs };
