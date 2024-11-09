import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { ListOptionsStandAlone } from './listOptionsStandAlone';
import { IListOptions, IListOptionsStandAlone } from './types/listOptions';
import { ListOptionsPropsStylesType } from './types/listOptionsTheme';

export const ListOptionsComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: IListOptions<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<ListOptionsPropsStylesType, V>(STYLES_NAME.LIST_OPTIONS, variant, ctv);

    return <ListOptionsStandAlone {...props} ref={ref} styles={styles} />;
  }
);
ListOptionsComponent.displayName = 'ListOptionsComponent';

const ListOptionBoundary = <V extends string | unknown>(
  props: IListOptions<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <ListOptionsStandAlone {...(props as unknown as IListOptionsStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <ListOptionsComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const ListOptions = React.forwardRef(ListOptionBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IListOptions<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ListOptionBoundary>;

export { ListOptions };
