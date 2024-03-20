import * as React from 'react';

import { DeviceBreakpointsType } from '@/types';

import { Breadcrumbs } from '../breadcrumbs';
import { HeaderContent } from './components';
import {
  BreadcrumbsWrapper,
  HeaderContainerContentStyled,
  HeaderContainerStyled,
} from './headerStructure.styled';
import { HeaderStructureContentPositionType, IHeaderStructureStandAlone } from './types';

const HeaderStructureStandAloneComponent = (
  { ...props }: IHeaderStructureStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): React.JSX.Element => {
  const getPositionContent = (position: HeaderStructureContentPositionType) => {
    return React.Children.toArray(props.children).filter((child: React.ReactNode) => {
      return (child as JSX.Element)?.props?.['data-position'] === position;
    });
  };

  const leftContent = getPositionContent(HeaderStructureContentPositionType.LEFT);
  const rightContent = getPositionContent(HeaderStructureContentPositionType.RIGHT);
  const centerContent = getPositionContent(HeaderStructureContentPositionType.CENTER);

  return (
    <HeaderContainerStyled
      ref={ref}
      backgroundColor={props.backgroundColor}
      containerHeight={props.containerHeight}
      data-testid={`${props.dataTestId}Header`}
      scrolling={props.scrolling}
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
      <HeaderContainerContentStyled styles={props.styles}>
        <HeaderContent styles={props.styles.leftContent}>{leftContent}</HeaderContent>
        <HeaderContent styles={props.styles.centerContent}>{centerContent}</HeaderContent>
        <HeaderContent styles={props.styles.rightContent}>{rightContent}</HeaderContent>
      </HeaderContainerContentStyled>
    </HeaderContainerStyled>
  );
};

export const HeaderStandAlone = React.forwardRef(HeaderStructureStandAloneComponent);
