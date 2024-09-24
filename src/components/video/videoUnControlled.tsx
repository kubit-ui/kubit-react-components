import * as React from 'react';

import { useMediaDevice } from '@/hooks';

import { IVideoUnControlled } from './types';
import { VideoControlled } from './videoControlled';

export const VideoUnControlled = ({
  hasInitialOverlay = true,
  timeToHideButtonsBar = 4000,
  autoFullScreen = false,
  onCanPlay,
  onVolumeChange,
  onFullScreenClick,
  onSubtitlesClick,
  onVolumeButtonClick,
  onLoadedMetadata,
  onVideoPause,
  onVideoPlay,
  onTimeUpdate,
  onTogglePlay,
  ...props
}: IVideoUnControlled): React.JSX.Element | null => {
  const ref = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const device = useMediaDevice();
  const videoContainerRef = React.useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showOverlay, setShowOverlay] = React.useState(hasInitialOverlay);
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [showScreenButtons, setShowScreenButtons] = React.useState(true);
  const [volume, setVolume] = React.useState('50');
  const [volumeSaved, setVolumeSaved] = React.useState('50');
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [subtitlesActivated, setSubtitlesActivated] = React.useState(false);

  const [showControls, setShowControls] = React.useState(true);

  // Load video
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setIsPlaying(!videoRef.current.paused);
      setShowOverlay(hasInitialOverlay);
      setShowScreenButtons(true);
    }
  }, [props.videoSrc]);

  // Listen when fullscren changes
  const handleFullScreenHasChanged = () => {
    if (document.fullscreenElement) {
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullScreenHasChanged);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenHasChanged);
    };
  }, []);

  // Executed when video is loaded enough to be played
  const handleCanPlay: React.ReactEventHandler<HTMLVideoElement> = e => {
    onCanPlay?.(e);
    setIsLoading(false);
  };

  const handleLoadedMetadata: React.ReactEventHandler<HTMLVideoElement> = e => {
    if (!videoRef.current) {
      return;
    }
    onLoadedMetadata?.(e);
    setDuration(videoRef.current.duration);
  };

  // Press play/pause video
  const handleTogglePlay: React.MouseEventHandler<HTMLVideoElement | HTMLButtonElement> = e => {
    if (!videoRef.current || isLoading) {
      return;
    }
    onTogglePlay?.(e, videoRef.current.paused);
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    // The screens buttons only appear at the beginning, as soon as the user presses play,
    // neither the play nor the overlay appears again, even if the user presses pause.
    // (It is shown again when videoSrc changes)
    if (showScreenButtons) {
      setShowScreenButtons(false);
    }
  };

  // Executed when video is played
  const handlePlayVideo: React.ReactEventHandler<HTMLVideoElement> = e => {
    onVideoPlay?.(e);
    // Hide overlay when video is played
    setShowOverlay(false);
    setIsPlaying(true);
    autoFullScreen &&
      !isFullScreen &&
      handleClickFullScreen({} as React.MouseEvent<HTMLButtonElement, MouseEvent>);
  };

  // Executed when video is paused
  const handlePauseVideo: React.ReactEventHandler<HTMLVideoElement> = e => {
    onVideoPause?.(e);
    setIsPlaying(false);
  };

  // Executed when video time is updated
  const handleTimeUpdate: React.ReactEventHandler<HTMLVideoElement> = e => {
    if (!videoRef.current) {
      return;
    }
    onTimeUpdate?.(e);
    setCurrentTime(videoRef.current.currentTime);
  };

  // Excecuted when moving the progress bar
  const handleChangeProgressBar = value => {
    if (!videoRef.current) {
      return;
    }
    videoRef.current.currentTime = (videoRef.current.duration * value) / 100;
  };

  const isPausedBfDrag = React.useRef<boolean>(true);
  // Excecuted when dragging progressbar
  const handleDragStartProgressBar = () => {
    if (!videoRef.current) {
      return;
    }
    isPausedBfDrag.current = videoRef.current.paused;
    videoRef.current.pause();
  };

  // Excecuted when strop dragging progressbar
  const handleDragEndProgressBar = () => {
    if (!videoRef.current) {
      return;
    }
    if (!isPausedBfDrag.current) {
      videoRef.current.play();
    }
  };

  const handleChangeVolume: React.ChangeEventHandler<HTMLInputElement> = event => {
    onVolumeChange?.(event);
    setVolume(event.target.value);
    setVolumeSaved(event.target.value);
    if (videoRef.current) {
      //Change volume on video
      videoRef.current.volume = parseFloat(event.target.value) / 100;
    }
  };

  const handleClickVolumeButton: React.MouseEventHandler<HTMLButtonElement> = e => {
    if (videoRef.current) {
      if (volume !== '0') {
        onVolumeButtonClick?.(e, '0');
        setVolume('0');
        //Mute video
        videoRef.current.volume = 0;
      } else {
        onVolumeButtonClick?.(e, volumeSaved);
        setVolume(volumeSaved);
        //Change volume on video
        videoRef.current.volume = parseFloat(volumeSaved) / 100;
      }
    }
  };

  const handleClickFullScreen: React.MouseEventHandler<HTMLButtonElement> = e => {
    if (!videoContainerRef.current) {
      return;
    }
    onFullScreenClick?.(e, !document.fullscreenElement);
    if (document.fullscreenElement) {
      // Video exits fullscreen
      document.exitFullscreen?.();
    } else {
      // Video goes to fullscreen
      videoContainerRef.current.requestFullscreen();
    }
  };

  const handleClickSubtitles: React.MouseEventHandler<HTMLButtonElement> = e => {
    const _subtitlesActivated = !subtitlesActivated;
    onSubtitlesClick?.(e, _subtitlesActivated);
    setSubtitlesActivated(_subtitlesActivated);
  };

  // Hide controls when timeToHideButtonsBar passes
  const timeoutShowHideButtonsBar = React.useRef<number | NodeJS.Timeout>();
  const handleShowHidControls = () => {
    setShowControls(true);
    if (timeToHideButtonsBar) {
      clearTimeout(timeoutShowHideButtonsBar.current);
      timeoutShowHideButtonsBar.current = setTimeout(() => {
        setShowControls(false);
      }, timeToHideButtonsBar);
    }
  };

  React.useEffect(() => {
    if (timeToHideButtonsBar) {
      window.addEventListener('mousemove', handleShowHidControls);
    }
    return () => {
      window.removeEventListener('mousemove', handleShowHidControls);
    };
  }, [timeToHideButtonsBar]);

  return (
    <VideoControlled
      {...props}
      ref={ref}
      currentTime={currentTime}
      duration={duration}
      fullScreen={isFullScreen}
      hasOverlay={showOverlay}
      loading={isLoading}
      playing={isPlaying}
      showControls={showControls}
      showScreenButtons={showScreenButtons}
      subtitlesActivated={subtitlesActivated}
      videoContainerRef={videoContainerRef}
      videoRef={videoRef}
      volume={volume}
      onCanPlay={handleCanPlay}
      onFullScreenClick={handleClickFullScreen}
      onLoadedMetadata={handleLoadedMetadata}
      onProgressBarChange={handleChangeProgressBar}
      onProgressBarDragEnd={handleDragEndProgressBar}
      onProgressBarDragStart={handleDragStartProgressBar}
      onSubtitlesClick={handleClickSubtitles}
      onTimeUpdate={handleTimeUpdate}
      onTogglePlay={handleTogglePlay}
      onVideoPause={handlePauseVideo}
      onVideoPlay={handlePlayVideo}
      onVolumeButtonClick={handleClickVolumeButton}
      onVolumeChange={handleChangeVolume}
    />
  );
};
