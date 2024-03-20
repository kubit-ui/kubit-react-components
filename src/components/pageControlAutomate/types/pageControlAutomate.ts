import { IMediaButton, MediaButtonSizeType } from '@/components/mediaButton';
import { IMediaProgressBar } from '@/components/mediaProgressBar';
import { CustomTokenTypes } from '@/types';

import { PageControlAutomatePropsStylesType } from './pageControlAutomateTheme';

export type PageControlArrowsType = Omit<IMediaButton, 'variant' | 'size'> & {
  variant?: string;
  size?: MediaButtonSizeType;
};

export type PageControlPlayStopMediaButtonType = Omit<
  IMediaButton,
  'variant' | 'size' | 'onClick'
> & {
  variant?: string;
  size?: MediaButtonSizeType;
  onClick?: (playing: boolean, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type PageControlMediaProgressBarType = Omit<
  IMediaProgressBar,
  'variant' | 'currentBar' | 'barsNum'
> & {
  variant?: string;
  barsNum: number;
};

export interface IPageControlAutomateStandAlone {
  styles: PageControlAutomatePropsStylesType;
  leftArrow: PageControlArrowsType;
  rightArrow: PageControlArrowsType;
  playStop: PageControlPlayStopMediaButtonType;
  mediaProgressBar: PageControlMediaProgressBarType;
  playing: boolean;
  onPlayStopClick: React.MouseEventHandler<HTMLButtonElement>;
  onLeftArrowClick: React.MouseEventHandler<HTMLButtonElement>;
  onRightArrowClick: React.MouseEventHandler<HTMLButtonElement>;
  currentBar: number;
}

export interface IPageControlAutomateControlled<V = undefined extends string ? unknown : string>
  extends Omit<IPageControlAutomateStandAlone, 'styles'>,
    Omit<CustomTokenTypes<PageControlAutomatePropsStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}

type propsToOmit = 'onPlayStopClick' | 'onLeftArrowClick' | 'onRightArrowClick' | 'playing';

export type IPageControlAutomateUnControlled<V = undefined extends string ? unknown : string> =
  Omit<IPageControlAutomateControlled<V>, propsToOmit> & {
    playing?: boolean;
    playingInitially?: boolean;
  };
