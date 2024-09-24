import * as React from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { MediaButton } from '@/components/mediaButton/mediaButton';
import { MediaButtonSizeType } from '@/components/mediaButton/types/sizes';
import { TooltipUnControlled as Tooltip } from '@/components/tooltip/tooltipUnControlled';
import { useMediaDevice } from '@/hooks';
import { DeviceBreakpointsType } from '@/types';

import { VideoStyleType } from '../types/videoTheme';

interface IPlayStopButton {
  styles: VideoStyleType;
  playing: boolean;
  buttonsBarPlayIcon: IElementOrIcon;
  buttonsBarPlayIconTooltip: JSX.Element | string;
  buttonsBarPlayIconToTransition?: IElementOrIcon;
  handlePlayStopVideo?: React.MouseEventHandler<HTMLButtonElement>;
}

export const PlayStopButton = (props: IPlayStopButton): JSX.Element => {
  const device = useMediaDevice();
  const ButtonBarPlay = (): JSX.Element | null =>
    props.styles.buttonsBarPlayIcon?.size?.[device] ? (
      <MediaButton
        hasBackground={false}
        icon={props.buttonsBarPlayIcon}
        size={props.styles.buttonsBarPlayIcon?.size?.[device] as MediaButtonSizeType}
        twisted={props.playing}
        twistedIcon={props.buttonsBarPlayIconToTransition}
        variant={props.styles.buttonsBarPlayIcon?.variant}
        onClick={props.handlePlayStopVideo}
      />
    ) : null;
  return device === DeviceBreakpointsType.DESKTOP ? (
    <Tooltip
      childrenAsButton={false}
      content={{ content: props.buttonsBarPlayIconTooltip }}
      tooltipAsModal={false}
      variant={props.styles.tooltip?.variant}
    >
      <ButtonBarPlay />
    </Tooltip>
  ) : (
    <ButtonBarPlay />
  );
};
