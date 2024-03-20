import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { MediaButtonStandalone } from './mediaButtonStandAlone';
import { MediaButtonVariantStateStylesType } from './types';
import { IMediaButton, IMediaButtonStandAlone } from './types/mediaButton';

const MediaButtonComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, size, ctv, ...props }: IMediaButton<V>,
    ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
  ): JSX.Element => {
    const stylesVariant = useStyles<MediaButtonVariantStateStylesType, V>(
      STYLES_NAME.MEDIA_BUTTON,
      variant,
      ctv
    );
    const styles = stylesVariant[size];

    return <MediaButtonStandalone {...props} ref={ref} styles={styles} />;
  }
);
MediaButtonComponent.displayName = 'MediaButtonComponent';

const MediaButtonBoundary = <V extends string | unknown>(
  props: IMediaButton<V>,
  ref: React.ForwardedRef<HTMLButtonElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <MediaButtonStandalone {...(props as unknown as IMediaButtonStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <MediaButtonComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const MediaButton = React.forwardRef(MediaButtonBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IMediaButton<V>> & {
    ref?: React.ForwardedRef<HTMLButtonElement> | null;
  }
) => ReturnType<typeof MediaButtonBoundary>;

/**
 * @description
 * MediaButton component is used to show a button with an icon.
 * @param {React.PropsWithChildren<IMediaButton<V>>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <MediaButton variant="mediaButton" iconAltText="iconAltText" iconToTransitionAltText="iconToTransitionAltText" iconToTransition={true} />
 */
export { MediaButton };
