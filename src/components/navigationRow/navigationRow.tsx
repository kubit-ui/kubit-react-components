import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { useStylesV2 } from '@/hooks/useStyles/useStylesV2';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { LineSeparatorLinePropsStylesType } from '../lineSeparator/types/lineSeparatorTheme';
import { NavigationRowStandalone } from './navigationRowStandAlone';
import { INavigationRow, INavigationRowStandAlone } from './types/navigationRow';
import { NavigationRowStylesPropsType } from './types/navigationRowTheme';

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
