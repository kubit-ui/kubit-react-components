import * as React from 'react';

import { STYLES_NAME } from '@/constants/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary } from '@/provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '@/provider/errorBoundary/fallbackComponent';

import { TextStandAlone } from './textStandAlone';
import { IText, ITextStandAlone, TextVariantStylesType } from './types';

const TextComponent = React.forwardRef(
  <V extends string | unknown>(
    { children, color, component, htmlFor, variant, weight, ctv, ...props }: IText<V>,
    ref: React.ForwardedRef<HTMLParagraphElement> | null
  ): JSX.Element | null => {
    const styles = useStyles<TextVariantStylesType, V>(STYLES_NAME.TEXT, variant, ctv);

    if (children === undefined || children === null || children === '') return null;

    return (
      <TextStandAlone
        {...props}
        ref={ref}
        color={color}
        component={component}
        htmlFor={htmlFor}
        styles={styles}
        transform={props.transform}
        weight={weight}
      >
        {children}
      </TextStandAlone>
    );
  }
);
TextComponent.displayName = 'TextComponent';

const TextBoundary = <V extends string | unknown>(
  props: IText<V>,
  ref: React.ForwardedRef<HTMLParagraphElement> | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <TextStandAlone {...(props as unknown as ITextStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <TextComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const Text = React.forwardRef(TextBoundary) as <V>(
  props: React.PropsWithChildren<IText<V>> & {
    ref?: React.ForwardedRef<HTMLElement> | undefined | null;
  }
) => ReturnType<typeof TextBoundary>;

/**
 * @description
 * Text component is a component that can be used to create a text.
 * @param {React.PropsWithChildren<IText<V>>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <Text variant="h1">Text</Text>
 */
export { Text };
