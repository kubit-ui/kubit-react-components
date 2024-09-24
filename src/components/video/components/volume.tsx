import * as React from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { MediaButton } from '@/components/mediaButton/mediaButton';
import { MediaButtonSizeType } from '@/components/mediaButton/types/sizes';
import { TooltipUnControlled as Tooltip } from '@/components/tooltip/tooltipUnControlled';
import { useMediaDevice } from '@/hooks';
import { DeviceBreakpointsType } from '@/types';

import { VideoStyleType } from '../types/videoTheme';
import { VolumeContainerStyled } from '../video.styled';

interface IVolume {
  styles: VideoStyleType;
  buttonsBarVolumeIcon: IElementOrIcon;
  buttonsBarVolumeIconTooltip: JSX.Element | string;
  buttonsBarVolumeIconToTransition?: IElementOrIcon;
  volume: string;
  volumeBarAriaLabel?: string;
  onVolumeButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onVolumeChange?: React.ChangeEventHandler<HTMLInputElement>;
  dataTestIdVolumeInput?: string;
}

interface IButtonBarVolume {
  styles: VideoStyleType;
  buttonsBarVolumeIcon: IElementOrIcon;
  buttonsBarVolumeIconToTransition?: IElementOrIcon;
  volume: string;
  volumeBarAriaLabel?: string;
  onVolumeButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IVolumeInput {
  styles: VideoStyleType;
  volume: string;
  volumeBarAriaLabel?: string;
  dataTestIdVolumeInput?: string;
  onVolumeChange?: React.ChangeEventHandler<HTMLInputElement>;
}

interface IVolume extends IButtonBarVolume, IVolumeInput {
  buttonsBarVolumeIconTooltip: JSX.Element | string;
}

export const Volume = (props: IVolume): JSX.Element => {
  const device = useMediaDevice();

  const ButtonBarVolume = props.styles.buttonsBarVolumeIcon?.size?.[device] ? (
    <MediaButton
      hasBackground={false}
      icon={props.buttonsBarVolumeIcon}
      size={props.styles.buttonsBarVolumeIcon?.size?.[device] as MediaButtonSizeType}
      twisted={props.volume === '0'}
      twistedIcon={props.buttonsBarVolumeIconToTransition}
      variant={props.styles.buttonsBarVolumeIcon?.variant}
      onClick={props.onVolumeButtonClick}
    />
  ) : null;

  const VolumeInput = (
    <VolumeContainerStyled
      aria-label={props.volumeBarAriaLabel}
      data-testid={props.dataTestIdVolumeInput}
      max="100"
      min="0"
      styles={props.styles}
      type="range"
      value={props.volume}
      onChange={props.onVolumeChange}
    />
  );
  return device === DeviceBreakpointsType.DESKTOP ? (
    <>
      <Tooltip
        childrenAsButton={false}
        content={{ content: props.buttonsBarVolumeIconTooltip }}
        tooltipAsModal={false}
        variant={props.styles.tooltip?.variant}
      >
        {ButtonBarVolume}
      </Tooltip>
      {VolumeInput}
    </>
  ) : (
    <>
      {ButtonBarVolume}
      {VolumeInput}
    </>
  );
};
