import * as React from 'react';

import { STYLES_NAME } from '@/constants/stylesName';
import { useStyles } from '@/hooks/index';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { ContainerStandAlone } from './containerStandAlone';
import { ContainerPropsStylesType, IContainer, IContainerStandAlone } from './types';

const ContainerComponent = React.forwardRef(
  <T extends string>(
    { children, variant, ctv, ...props }: React.PropsWithChildren<IContainer<T>>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<ContainerPropsStylesType>(STYLES_NAME.CONTAINER, variant, ctv);

    return (
      <ContainerStandAlone ref={ref} {...props} styles={styles}>
        {children}
      </ContainerStandAlone>
    );
  }
);
ContainerComponent.displayName = 'ContainerComponent';

const ContainerBoundary = <T extends string>(
  props: React.PropsWithChildren<IContainer<T>>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <ContainerStandAlone {...(props as unknown as IContainerStandAlone)} ref={ref}>
          {props.children}
        </ContainerStandAlone>
      </FallbackComponent>
    }
  >
    <ContainerComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Container = React.forwardRef(ContainerBoundary) as <T extends string>(
  props: React.PropsWithChildren<IContainer<T>> & React.RefAttributes<HTMLDivElement>
) => JSX.Element;

/**
 * A container is a component that wraps the content of a website.
 * @module Container
 * @interface IContainer
 * @category Contaiment Components
 * @param children - the content to render inside the container.
 * @param variant - the variant of the container.
 * @param dataTestId - the data test id of the container.
 * @param {React.ForwardedRef<HTMLDivElement> | undefined | null} ref - The component ref.
 * @returns {JSX.Element} The rendered component.
 */
export { Container };
