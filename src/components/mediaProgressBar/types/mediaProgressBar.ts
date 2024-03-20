import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

import { MediaProgressBarVariantStylesType } from './mediaProgressBarTheme';

export interface IMediaProgressBarStandAlone {
  styles: MediaProgressBarVariantStylesType;
  barsNum: number;
  barsAriaLabels?: string[];
  barProgressDuration: number;
  dataTestIdBar?: string;
  dataTestIdProgressBar?: string;
  currentBar: number;
  barRef: React.RefObject<HTMLDivElement>;
  progressBarRef: React.RefObject<HTMLDivElement>;
  playing: boolean;
  clickableBars?: boolean;
  onBarClick?: (index: number, event: React.MouseEvent<HTMLDivElement>) => void;
  onBarKeyDown?: (index: number, event: React.KeyboardEvent<HTMLDivElement>) => void;
  maxBars?: { default: number } & { [device in DeviceBreakpointsType]?: number };
}

export interface IMediaProgressBar<V = undefined extends string ? unknown : string>
  extends Omit<
      IMediaProgressBarStandAlone,
      'styles' | 'handleBarEnd' | 'barRef' | 'progressBarRef' | 'playing' | 'currentBar' | 'barsNum'
    >,
    Omit<CustomTokenTypes<MediaProgressBarVariantStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  onBarChange?: (
    indexBar: number,
    event?: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  playingExternal?: boolean;
  currentBar?: number;
  barsNum?: number;
  onFinish?: (playingExternal: boolean) => void;
  circular?: boolean;
}
