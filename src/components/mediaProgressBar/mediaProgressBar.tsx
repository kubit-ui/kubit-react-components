import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { useMediaProgressBar } from './hooks/useMediaProgressBar';
import { MediaProgressBarStandalone } from './mediaProgressBarStandAlone';
import {
  IMediaProgressBar,
  IMediaProgressBarStandAlone,
  MediaProgressBarVariantStylesType,
} from './types';

const MediaProgressBarComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      variant,
      barsNum = 1,
      currentBar = 0,
      onBarChange,
      onFinish,
      ctv,
      playingExternal = false,
      circular = false,
      onBarClick,
      onBarKeyDown,
      ...props
    }: IMediaProgressBar<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<MediaProgressBarVariantStylesType, V>(
      STYLES_NAME.MEDIA_PROGRESS_BAR,
      variant,
      ctv
    );

    const { playing, barRef, progressBarRef, handleClickBar, handleKeyDownBar } =
      useMediaProgressBar({
        playingExternal,
        circular,
        currentBar,
        barsNum,
        onBarChange,
        onFinish,
        onBarClick,
        onBarKeyDown,
      });

    return (
      <MediaProgressBarStandalone
        {...props}
        ref={ref}
        barRef={barRef}
        barsNum={barsNum}
        currentBar={currentBar}
        playing={playing}
        progressBarRef={progressBarRef}
        styles={styles}
        onBarClick={handleClickBar}
        onBarKeyDown={handleKeyDownBar}
      />
    );
  }
);
MediaProgressBarComponent.displayName = 'MediaProgressBarComponent';

const MediaProgressBarBoundary = <V extends string | unknown>(
  props: IMediaProgressBar<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <MediaProgressBarStandalone
          {...(props as unknown as IMediaProgressBarStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <MediaProgressBarComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const MediaProgressBar = React.forwardRef(MediaProgressBarBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IMediaProgressBar<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof MediaProgressBarBoundary>;

/**
 * @description
 * MediaProgressBar component is used to show a progress bar.
 * @param {React.PropsWithChildren<IMediaProgressBar<V>>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <MediaProgressBar variant="mediaProgressBar" />
 */
export { MediaProgressBar };
