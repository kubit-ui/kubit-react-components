import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { LineSeparatorLinePropsStylesType } from '../lineSeparator';
import { AccordionStandAlone } from './accordionStandAlone';
import type { IAccordionControlled, IAccordionStandAlone } from './types';
import { AccordionPropsStylesType } from './types/accordionTheme';

const AccordionControlledComponent = React.forwardRef(
  <V extends string | undefined>(
    { children, variant, ctv, ...props }: IAccordionControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const variantStyles = useStyles<AccordionPropsStylesType, V>(
      STYLES_NAME.ACCORDION,
      variant,
      ctv
    );
    const lineSeparatorLineStyles = useStyles<LineSeparatorLinePropsStylesType>(
      STYLES_NAME.LINE_SEPARATOR,
      variantStyles.lineSeparatorContainer?.variant
    );

    return (
      <AccordionStandAlone
        ref={ref}
        {...props}
        lineSeparatorLineStyles={lineSeparatorLineStyles}
        styles={variantStyles}
      >
        {children}
      </AccordionStandAlone>
    );
  }
);
AccordionControlledComponent.displayName = 'AccordionControlledComponent';

const AccordionBoundary = <V extends string | undefined>(
  props: IAccordionControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <AccordionStandAlone {...(props as unknown as IAccordionStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <AccordionControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * Accordion component is component to show or hide content.
 * @param {React.PropsWithChildren<IAccordionControlled<V>>} props
 * @returns {JSX.Element}
 */
const AccordionControlled = React.forwardRef(AccordionBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IAccordionControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof AccordionBoundary>;

export { AccordionControlled };
