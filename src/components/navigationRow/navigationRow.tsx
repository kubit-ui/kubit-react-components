import * as React from 'react';

import { LineSeparatorLinePropsStylesType } from '@/components/lineSeparator';
import { STYLES_NAME } from '@/constants';
import { useStyles, useStylesV2 } from '@/hooks';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { NavigationRowStandalone } from './navigationRowStandAlone';
import { INavigationRow, INavigationRowStandAlone, NavigationRowStylesPropsType } from './types';

const NavigationRowComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, extraCt, ...props }: INavigationRow<V>,
    ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<NavigationRowStylesPropsType, V>(
      STYLES_NAME.NAVIGATION_ROW,
      variant,
      ctv
    );
    const lineSeparatorLineStyles = useStylesV2<LineSeparatorLinePropsStylesType>({
      styleName: STYLES_NAME.LINE_SEPARATOR,
      variantName: styles.lineSeparatorLineVariant,
      customTokens: extraCt,
      isOptional: true,
    });

    return (
      <NavigationRowStandalone
        ref={ref}
        lineSeparatorLineStyles={lineSeparatorLineStyles}
        styles={styles}
        {...props}
      />
    );
  }
);
NavigationRowComponent.displayName = 'NavigationRowComponent';

const NavigationRowBoundary = <V extends string | unknown>(
  props: INavigationRow<V>,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <NavigationRowStandalone {...(props as unknown as INavigationRowStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <NavigationRowComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const NavigationRow = React.forwardRef(NavigationRowBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<INavigationRow<V>> & {
    ref?: React.ForwardedRef<HTMLButtonElement> | undefined | null;
  }
) => ReturnType<typeof NavigationRowBoundary>;

export { NavigationRow };
