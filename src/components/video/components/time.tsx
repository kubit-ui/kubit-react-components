import * as React from 'react';

import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { videoFormatTime } from '@/utils/time/time';

import { VideoStyleType } from '../types/videoTheme';

interface ITime {
  styles: VideoStyleType;
  currentTime: number;
  duration: number;
}

export const Time = (props: ITime): JSX.Element => {
  return (
    <Text component={TextComponentType.SPAN} customTypography={props.styles.videoDuration}>
      {videoFormatTime(props.currentTime, props.duration)}
    </Text>
  );
};
