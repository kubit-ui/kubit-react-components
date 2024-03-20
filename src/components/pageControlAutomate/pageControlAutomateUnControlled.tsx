import * as React from 'react';

import { PageControlAutomateControlled } from './pageControlAutomateControlled';
import { IPageControlAutomateUnControlled } from './types';

const PageControlAutomateUnControlledComponent = <V extends string | unknown>(
  { playingInitially = false, ...props }: IPageControlAutomateUnControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [isPlaying, setIsPlaying] = React.useState(playingInitially);

  const handleClickMediaButton: React.MouseEventHandler<HTMLButtonElement> = event => {
    props.playStop.onClick?.(props.playing !== undefined ? !props.playing : !isPlaying, event);

    if (props.playing !== undefined) {
      setIsPlaying(!props.playing);
    } else {
      setIsPlaying(prev => {
        return !prev;
      });
    }
  };

  const handleClickLeftArrow: React.MouseEventHandler<HTMLButtonElement> = event => {
    props.mediaProgressBar.onBarChange?.(props.currentBar - 1);
    props.leftArrow.onClick?.(event);
  };

  const handleClickRightArrow: React.MouseEventHandler<HTMLButtonElement> = event => {
    props.mediaProgressBar.onBarChange?.(props.currentBar + 1);
    props.rightArrow.onClick?.(event);
  };

  return (
    <PageControlAutomateControlled
      {...props}
      ref={ref}
      playing={props.playing ?? isPlaying}
      onLeftArrowClick={handleClickLeftArrow}
      onPlayStopClick={handleClickMediaButton}
      onRightArrowClick={handleClickRightArrow}
    />
  );
};

const PageControlAutomateUnControlled = React.forwardRef(
  PageControlAutomateUnControlledComponent
) as <V extends string | unknown>(
  props: React.PropsWithChildren<IPageControlAutomateUnControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof PageControlAutomateUnControlledComponent>;

export { PageControlAutomateUnControlled };
