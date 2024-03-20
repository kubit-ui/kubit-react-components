import * as React from 'react';

import { useMediaDevice } from '@/hooks';
import { ROLES } from '@/types';

import {
  BarContainerStyled,
  BarStyled,
  ParentContainerStyled,
  ProgressBarStyled,
} from './mediaProgressBar.styled';
import { IMediaProgressBarStandAlone } from './types';
import { mediaProgressBarIndex } from './utils/mediaProgressBarIndex';

const MediaProgressBarStandaloneComponent = (
  { barsNum, ...props }: IMediaProgressBarStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const device = useMediaDevice();

  const bars = Array.from({ length: barsNum }, (_, index) => {
    const newIndex = mediaProgressBarIndex({
      index,
      barsNum,
      currentBar: props.currentBar,
      device,
      maxBars: props.maxBars,
    });

    if (newIndex === undefined) return;
    return (
      <BarContainerStyled
        key={newIndex}
        ref={props.barRef}
        aria-label={props.barsAriaLabels?.[newIndex]}
        barFocused={newIndex === props.currentBar}
        clickableBars={props.clickableBars}
        role={ROLES.BUTTON}
        styles={props.styles}
        tabIndex={0}
        onClick={e => props.onBarClick?.(newIndex, e)}
        onKeyDown={e => props.onBarKeyDown?.(newIndex, e)}
      >
        <BarStyled
          barFocused={newIndex === props.currentBar}
          data-testid={`${props.dataTestIdBar}-${newIndex}`}
          styles={props.styles}
        >
          {newIndex === props.currentBar && (
            <ProgressBarStyled
              ref={props.progressBarRef}
              barFocused={newIndex === props.currentBar}
              barProgressDuration={props.barProgressDuration}
              data-testid={`${props.dataTestIdProgressBar}-${newIndex}`}
              playing={props.playing}
              styles={props.styles}
            />
          )}
        </BarStyled>
      </BarContainerStyled>
    );
  });

  return (
    <ParentContainerStyled ref={ref} styles={props.styles}>
      {bars}
    </ParentContainerStyled>
  );
};

/**
 * @description
 * MediaProgressBar component is used to show a progress bar.
 * @param {React.PropsWithChildren<IMediaProgressBarStandAlone>} props
 * @returns {JSX.Element}
 */
export const MediaProgressBarStandalone = React.forwardRef(MediaProgressBarStandaloneComponent);
