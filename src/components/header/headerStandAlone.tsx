import * as React from 'react';

import { DeviceBreakpointsType } from '@/types';

import { Breadcrumbs } from '../breadcrumbs';
import {
  BreadcrumbsWrapper,
  HeaderContainerStyled,
  HeaderContentStyled,
  HeaderLeftContentStyled,
  HeaderRightContentStyled,
} from './header.styled';
import { IHeaderStandAlone } from './types/header';
import { HeaderContentPositionType } from './types/position';

const HeaderStandAloneComponent = (
  { ...props }: IHeaderStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const getPositionContent = (position: HeaderContentPositionType) => {
    return React.Children.toArray(props.children).filter((child: React.ReactNode) => {
      return (child as JSX.Element)?.props?.['data-position'] === position;
    });
  };

  const leftContent = getPositionContent(HeaderContentPositionType.LEFT);
  const rightContent = getPositionContent(HeaderContentPositionType.RIGHT);

  return (
    <HeaderContainerStyled
      ref={ref}
      data-testid={`${props.dataTestId}Header`}
      styles={props.styles}
    >
      {props.crumbs && props.device === DeviceBreakpointsType.DESKTOP && (
        <BreadcrumbsWrapper styles={props.styles}>
          <Breadcrumbs
            crumbs={props.crumbs}
            variant={props.configBreadcrumbs?.variant}
            {...props.configBreadcrumbs}
          />
        </BreadcrumbsWrapper>
      )}
      <HeaderContentStyled styles={props.styles}>
        <HeaderLeftContentStyled styles={props.styles}>{leftContent}</HeaderLeftContentStyled>
        {rightContent.length !== 0 && (
          <HeaderRightContentStyled styles={props.styles}>{rightContent}</HeaderRightContentStyled>
        )}
      </HeaderContentStyled>
    </HeaderContainerStyled>
  );
};

export const HeaderStandAlone = React.forwardRef(HeaderStandAloneComponent);
