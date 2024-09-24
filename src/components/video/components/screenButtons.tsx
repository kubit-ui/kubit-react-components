import * as React from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { MediaButton } from '@/components/mediaButton/mediaButton';
import { MediaButtonSizeType } from '@/components/mediaButton/types/sizes';
import { useMediaDevice } from '@/hooks';

import { VideoStyleType } from '../types/videoTheme';
import { ScreenIconContainerStyled } from '../video.styled';

interface IScreenButtons {
  styles: VideoStyleType;
  playing: boolean;
  loading: boolean;
  screenPlayIcon: IElementOrIcon;
  screenLoadingIcon: IElementOrIcon;
  handlePlayStopVideo?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ScreenButtons = (props: IScreenButtons): JSX.Element => {
  const device = useMediaDevice();

  return (
    <>
      {!props.playing && (
        <ScreenIconContainerStyled styles={props.styles}>
          {props.styles.screenPlayLoadingIcon?.size?.[device] && (
            <MediaButton
              hasBackground={true}
              icon={props.screenPlayIcon}
              size={props.styles.screenPlayLoadingIcon?.size?.[device] as MediaButtonSizeType}
              variant={props.styles.screenPlayLoadingIcon?.variant}
              onClick={props.handlePlayStopVideo}
            />
          )}
        </ScreenIconContainerStyled>
      )}
      {props.loading && (
        <ScreenIconContainerStyled styles={props.styles}>
          {props.styles.screenPlayLoadingIcon?.size?.[device] && (
            <MediaButton
              hasBackground={true}
              icon={props.screenLoadingIcon}
              size={props.styles.screenPlayLoadingIcon?.size?.[device] as MediaButtonSizeType}
              variant={props.styles.screenPlayLoadingIcon?.variant}
            />
          )}
        </ScreenIconContainerStyled>
      )}
    </>
  );
};
