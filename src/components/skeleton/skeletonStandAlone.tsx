import * as React from 'react';

import { pickAriaProps } from '@/utils/aria/aria';

import { SkeletonStyled } from './skeleton.styled';
import { ISkeletonStandAlone } from './types';

const SkeletonStandAloneComponent = (
  { duration = '1.2s', ...props }: ISkeletonStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const ariaProps = pickAriaProps(props);
  return (
    <SkeletonStyled
      ref={ref}
      $height={props.height}
      $width={props.width}
      data-testid={props.dataTestId}
      duration={duration}
      styles={props.styles}
      {...ariaProps}
    />
  );
};

/**
 * @description
 * Skeleton coponents is a loading component that can be used to show a loading state of a component.
 * @param {React.PropsWithChildren<ISkeletonStandAlone>} props
 * @returns {JSX.Element}
 */
export const SkeletonStandAlone = React.forwardRef(SkeletonStandAloneComponent);
