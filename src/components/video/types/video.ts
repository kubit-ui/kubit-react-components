import { IButton } from '@/components/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { LinkTargetType } from '@/components/link';
import { GenericLinkType } from '@/provider/genericComponents';
import { CustomTokenTypes } from '@/types';
import { TrackKindType, VideoType } from '@/types/video';

import { VideoStyleType } from './videoTheme';

export enum LinkAndActionButtonAlignment {
  LEFT = 'flex-start',
  CENTER = 'center',
  RIGHT = 'flex-end',
}

export type VideoButtonType = Omit<IButton, 'children' | 'variant' | 'size'> & {
  content: string;
  variant?: string;
  size?: string;
};

export interface IVideoStandAlone {
  videoSrc: string;
  styles: VideoStyleType;
  posterUrl?: string;
  videoType: VideoType;
  trackKind?: TrackKindType;
  trackLabel?: string;
  trackSrc?: string;
  trackSrcLang?: string;
  screenPlayIcon: IElementOrIcon;
  screenLoadingIcon: IElementOrIcon;
  showButtonsBar?: boolean;
  buttonsBarPlayIcon: IElementOrIcon;
  buttonsBarPlayIconTooltip: JSX.Element | string;
  buttonsBarPlayIconToTransition: IElementOrIcon;
  buttonsBarVolumeIcon: IElementOrIcon;
  buttonsBarVolumeIconTooltip: JSX.Element | string;
  buttonsBarVolumeIconToTransition?: IElementOrIcon;
  volumeBarAriaLabel?: string;
  buttonsBarSubtitlesIcon: IElementOrIcon;
  buttonsBarSubtitlesIconTooltip: JSX.Element | string;
  buttonsBarSubtitlesIconToTransition?: IElementOrIcon;
  buttonsBarFullScreenIcon: IElementOrIcon;
  buttonsBarFullScreenIconTooltip: JSX.Element | string;
  buttonsBarFullScreenIconToTransition?: IElementOrIcon;
  linkAndActionButtonAlignment?: LinkAndActionButtonAlignment;
  videoRef: React.RefObject<HTMLVideoElement>;
  videoContainerRef: React.RefObject<HTMLDivElement>;
  fullScreen: boolean;
  autoFullScreen?: boolean;
  playing: boolean;
  loading: boolean;
  subtitlesActivated: boolean;
  volume: string;
  currentTime: number;
  duration: number;
  barAriaLabel?: string;
  actionButton?: VideoButtonType;
  linkText?: string;
  linkUrl?: string;
  linkTarget?: LinkTargetType;
  componentLink: GenericLinkType;
  hasSkeleton?: boolean;
  skeletonText?: string;
  showControls: boolean;
  showScreenButtons?: boolean;
  hasOverlay: boolean;
  onLinkClick?: React.MouseEventHandler<HTMLElement>;
  onFullScreenClick?: React.MouseEventHandler<HTMLButtonElement>;
  onVolumeChange?: React.ChangeEventHandler<HTMLInputElement>;
  onVolumeButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubtitlesClick?: React.MouseEventHandler<HTMLButtonElement>;
  onTogglePlay?:
    | React.MouseEventHandler<HTMLVideoElement>
    | React.MouseEventHandler<HTMLButtonElement>;
  onCanPlay?: React.ReactEventHandler<HTMLVideoElement>;
  onLoadedMetadata?: React.ReactEventHandler<HTMLVideoElement>;
  onVideoPause?: React.ReactEventHandler<HTMLVideoElement>;
  onVideoPlay?: React.ReactEventHandler<HTMLVideoElement>;
  onTimeUpdate?: React.ReactEventHandler<HTMLVideoElement>;
  onProgressBarChange?: (value: number) => void;
  onProgressBarDragEnd?: () => void;
  onProgressBarDragStart?: () => void;
  dataTestIdParentContainer?: string;
  dataTestIdOverlay?: string;
  dataTestIdVideoSkeleton?: string;
  dataTestIdVolumeInput?: string;
}

export interface IVideoControlled<V = undefined extends string ? unknown : string>
  extends Omit<IVideoStandAlone, 'styles' | 'formatTime' | 'componentLink'>,
    Omit<CustomTokenTypes<VideoStyleType>, 'cts' | 'extraCt'> {
  variant: V;
}

type propsToOmit =
  | 'styles'
  | 'videoRef'
  | 'videoContainerRef'
  | 'fullScreen'
  | 'playing'
  | 'showButtonsBar'
  | 'loading'
  | 'subtitlesActivated'
  | 'volume'
  | 'currentTime'
  | 'duration'
  | 'hasOverlay'
  | 'showControls'
  | 'showScreenButtons'
  | 'onTogglePlay'
  | 'onProgressBarChange'
  | 'onProgressBarDragStart'
  | 'onProgressBarDragEnd'
  | 'onVolumeButtonClick'
  | 'onSubtitlesClick'
  | 'onFullScreenClick';

export interface IVideoUnControlled<V = undefined extends string ? unknown : string>
  extends Omit<IVideoControlled<V>, propsToOmit> {
  hasInitialOverlay?: boolean;
  timeToHideButtonsBar?: number;
  onSubtitlesClick?: (event: React.MouseEvent<HTMLButtonElement>, activated: boolean) => void;
  onFullScreenClick?: (event: React.MouseEvent<HTMLButtonElement>, activated: boolean) => void;
  onVolumeButtonClick?: (event: React.MouseEvent<HTMLButtonElement>, valume: string) => void;
  onTogglePlay?: (
    event: React.MouseEvent<HTMLVideoElement | HTMLButtonElement, MouseEvent>,
    playing: boolean
  ) => void;
}
