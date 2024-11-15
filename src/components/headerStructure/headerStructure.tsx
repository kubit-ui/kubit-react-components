import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useScrollPosition } from '@/hooks/useScrollPosition/useScrollPosition';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { IHeaderStandAlone } from '../header/types/header';
import { HeaderStandAlone } from './headerStructureStandAlone';
import { IHeaderStructure } from './types/headerStructure';
import { HeaderStructurePropsStylesType } from './types/headerStructureTheme';

const HeaderStructureComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: IHeaderStructure<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): React.JSX.Element => {
    const styles = useStyles<HeaderStructurePropsStylesType, V>(
      STYLES_NAME.HEADER_STRUCTURE,
      variant,
      ctv
    );
    const device = useMediaDevice();
    const scroll = useScrollPosition();

    return (
      <HeaderStandAlone
        {...props}
        ref={ref}
        device={device}
        scrolling={scroll > 0}
        styles={styles}
      />
    );
  }
);
HeaderStructureComponent.displayName = 'HeaderStructureComponent';

const HeaderStructureBoundary = <V extends string | unknown>(
  props: IHeaderStructure<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <HeaderStandAlone
          scrolling={false}
          {...(props as unknown as IHeaderStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <HeaderStructureComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release. Will include all this on the NavBar component
 */
const HeaderStructure = React.forwardRef(HeaderStructureBoundary) as <V extends string | unknown>(
  props: IHeaderStructure<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => React.JSX.Element;

export { HeaderStructure };
