import * as React from 'react';

type IUseAutomateControlResponse = {
  handleClickMediaButton: (
    playing: boolean,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleMouseOver: React.MouseEventHandler<HTMLDivElement>;
  handleMouseOut: React.MouseEventHandler<HTMLDivElement>;
  isPlaying: boolean;
};

enum MediaButtonPlayOrPause {
  PLAY = 'play',
  PAUSE = 'pause',
}

type IUseAutomateControlParams = {
  isPlayingInitially?: boolean;
  onClickMediaButton?: (
    playing: boolean,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

export const useAutomateControl = ({
  isPlayingInitially = true,
  onClickMediaButton,
}: IUseAutomateControlParams): IUseAutomateControlResponse => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(isPlayingInitially);
  const [mediaButtonPlayOrPause, setMediaButtonPlayOrPause] = React.useState<string | undefined>(
    isPlayingInitially ? MediaButtonPlayOrPause.PLAY : MediaButtonPlayOrPause.PAUSE
  );

  const handleClickMediaButton = (
    playing: boolean,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setMediaButtonPlayOrPause(
      isPlaying ? MediaButtonPlayOrPause.PAUSE : MediaButtonPlayOrPause.PLAY
    );
    setIsPlaying(prev => !prev);
    onClickMediaButton?.(playing, event);
  };

  const handleMouseOver: React.MouseEventHandler<HTMLDivElement> = () => {
    if (mediaButtonPlayOrPause === MediaButtonPlayOrPause.PAUSE) {
      return;
    }
    setIsPlaying(false);
  };

  const handleMouseOut: React.MouseEventHandler<HTMLDivElement> = () => {
    if (mediaButtonPlayOrPause === MediaButtonPlayOrPause.PAUSE) {
      return;
    }
    setIsPlaying(true);
  };

  return {
    handleClickMediaButton,
    handleMouseOver,
    handleMouseOut,
    isPlaying,
  };
};
