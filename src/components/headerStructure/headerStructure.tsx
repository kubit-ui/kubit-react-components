import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useMediaDevice, useScrollPosition } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { IHeaderStandAlone } from '../header/types';
import { HeaderStandAlone } from './headerStructureStandAlone';
import { HeaderStructurePropsStylesType, IHeaderStructure } from './types';

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

const HeaderStructure = React.forwardRef(HeaderStructureBoundary) as <V extends string | unknown>(
  props: IHeaderStructure<V> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => React.JSX.Element;

export { HeaderStructure };
