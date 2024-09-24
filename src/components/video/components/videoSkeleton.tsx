import * as React from 'react';

import { ScreenReaderOnly } from '@/components/screenReaderOnly';
import { Skeleton } from '@/components/skeleton';

import { VideoStyleType } from '../types/videoTheme';
import { ButtonsSkeletonContainerStyled, VideoSkeletonContainerStyled } from '../video.styled';

interface IVideoSkeleton {
  styles: VideoStyleType;
  skeletonText?: string;
  dataTestIdVideoSkeleton?: string;
}

export const VideoSkeleton = (props: IVideoSkeleton): JSX.Element => {
  return (
    <>
      <VideoSkeletonContainerStyled styles={props.styles}>
        {props.styles.videoSkeleton?.variant &&
          props.styles.videoSkeleton?.height &&
          props.styles.videoSkeleton?.width && (
            <Skeleton
              dataTestId={props.dataTestIdVideoSkeleton}
              height={props.styles.videoSkeleton?.height}
              shapeVariant={props.styles.videoSkeleton?.shapeVariant}
              variant={props.styles.videoSkeleton?.variant}
              width={props.styles.videoSkeleton?.width}
            />
          )}
        <ButtonsSkeletonContainerStyled styles={props.styles}>
          {props.styles.buttonSkeleton?.variant &&
            props.styles.buttonSkeleton?.height &&
            props.styles.buttonSkeleton?.width && (
              <>
                <Skeleton
                  height={props.styles.buttonSkeleton?.height}
                  shapeVariant={props.styles.buttonSkeleton?.shapeVariant}
                  variant={props.styles.buttonSkeleton?.variant}
                  width={props.styles.buttonSkeleton?.width}
                />
                <Skeleton
                  height={props.styles.buttonSkeleton?.height}
                  shapeVariant={props.styles.buttonSkeleton?.shapeVariant}
                  variant={props.styles.buttonSkeleton?.variant}
                  width={props.styles.buttonSkeleton?.width}
                />
              </>
            )}
        </ButtonsSkeletonContainerStyled>
      </VideoSkeletonContainerStyled>
      <ScreenReaderOnly>{props.skeletonText}</ScreenReaderOnly>
    </>
  );
};
