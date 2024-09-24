import * as React from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon/types/elementOrIcon';
import { MediaButton } from '@/components/mediaButton/mediaButton';
import { MediaButtonSizeType } from '@/components/mediaButton/types/sizes';
import { TooltipUnControlled as Tooltip } from '@/components/tooltip/tooltipUnControlled';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { DeviceBreakpointsType } from '@/types';

import { VideoStyleType } from '../types/videoTheme';

interface IButtonBarSubtitles {
  styles: VideoStyleType;
  buttonsBarSubtitlesIcon: IElementOrIcon;
  buttonsBarSubtitlesIconToTransition?: IElementOrIcon;
  subtitlesActivated: boolean;
  onSubtitlesClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IButtonBarFullScreen {
  styles: VideoStyleType;
  buttonsBarFullScreenIcon: IElementOrIcon;
  buttonsBarFullScreenIconToTransition?: IElementOrIcon;
  fullScreen: boolean;
  onFullScreenClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ISubtitleFullScreenButtons extends IButtonBarSubtitles, IButtonBarFullScreen {
  buttonsBarSubtitlesIconTooltip: JSX.Element | string;
  buttonsBarFullScreenIconTooltip: JSX.Element | string;
}

export const SubtitleFullScreenButtons = (props: ISubtitleFullScreenButtons): JSX.Element => {
  const device = useMediaDevice();

  const ButtonBarSubtitles = (props: IButtonBarSubtitles): JSX.Element | null =>
    props.styles.buttonsBarSubtitlesIcon?.size?.[device] ? (
      <MediaButton
        hasBackground={false}
        icon={props.buttonsBarSubtitlesIcon}
        size={props.styles.buttonsBarSubtitlesIcon?.size?.[device] as MediaButtonSizeType}
        twisted={props.subtitlesActivated}
        twistedIcon={props.buttonsBarSubtitlesIconToTransition}
        variant={props.styles.buttonsBarSubtitlesIcon?.variant}
        onClick={props.onSubtitlesClick}
      />
    ) : null;

  const ButtonBarFullScreen = (props: IButtonBarFullScreen): JSX.Element | null =>
    props.styles.buttonsBarFullScreenIcon?.size?.[device] ? (
      <MediaButton
        hasBackground={false}
        icon={props.buttonsBarFullScreenIcon}
        size={props.styles.buttonsBarFullScreenIcon?.size?.[device] as MediaButtonSizeType}
        twisted={props.fullScreen}
        twistedIcon={props.buttonsBarFullScreenIconToTransition}
        variant={props.styles.buttonsBarFullScreenIcon?.variant}
        onClick={props.onFullScreenClick}
      />
    ) : null;

  return device === DeviceBreakpointsType.DESKTOP ? (
    <>
      <Tooltip
        childrenAsButton={false}
        content={{ content: props.buttonsBarSubtitlesIconTooltip }}
        tooltipAsModal={false}
        variant={props.styles.tooltip?.variant}
      >
        <ButtonBarSubtitles {...props} />
      </Tooltip>
      <Tooltip
        childrenAsButton={false}
        content={{ content: props.buttonsBarFullScreenIconTooltip }}
        tooltipAsModal={false}
        variant={props.styles.tooltip?.variant}
      >
        <ButtonBarFullScreen {...props} />
      </Tooltip>
    </>
  ) : (
    <>
      <ButtonBarSubtitles {...props} />
      <ButtonBarFullScreen {...props} />
    </>
  );
};
