import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { useGenericComponents } from '../../provider/genericComponents/genericComponentsProvider';
import { IVideoControlled, IVideoStandAlone } from './types/video';
import { VideoStyleType } from './types/videoTheme';
import { VideoStandAlone } from './videoStandAlone';

const VideoControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: IVideoControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const variantStyles = useStyles<VideoStyleType, V>(STYLES_NAME.VIDEO, variant, ctv);
    const { LINK: genericLinkComponent } = useGenericComponents();

    return (
      <VideoStandAlone
        {...props}
        ref={ref}
        componentLink={genericLinkComponent}
        styles={variantStyles}
      />
    );
  }
);
VideoControlledComponent.displayName = 'VideoControlledComponent';

const VideoBoundary = <V extends string | unknown>(
  props: IVideoControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <VideoStandAlone {...(props as unknown as IVideoStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <VideoControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const VideoControlled = React.forwardRef(VideoBoundary) as <V>(
  props: React.PropsWithChildren<IVideoControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof VideoBoundary>;

export { VideoControlled };
