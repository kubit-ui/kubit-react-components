import * as React from 'react';

import { DeviceBreakpointsType } from '@/types/breakpoints';
import { pickAriaProps } from '@/utils/aria/aria';

// inner components
import { FooterContent } from './components';
import { FooterStyled } from './footer.styled';
import { FooterMobileColumnFlow, FooterPositionType, IFooterStandAlone, MobileSort } from './types';

// simple container tag
const FOOTER = 'footer';
// default footer sort
const DEFAULT_SORT: MobileSort = {
  column: FooterMobileColumnFlow.REVERSE,
  firstContent: FooterPositionType.RIGHT,
  secondContent: FooterPositionType.CENTER,
  thirdContent: FooterPositionType.LEFT,
};

const FooterStandAloneComponent = (
  { footerMobileSortConfig = DEFAULT_SORT, ...props }: IFooterStandAlone,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element | null => {
  const ariaProps = pickAriaProps(props);

  const getPositionContent = (position: FooterPositionType) => {
    const childrens = React.Children.toArray(props.children).filter((child: React.ReactNode) => {
      return (child as JSX.Element)?.props?.['data-position'] === position;
    });

    if (props.device !== DeviceBreakpointsType.MOBILE) {
      return childrens;
    }

    return footerMobileSortConfig.column === FooterMobileColumnFlow.DEFAULT
      ? childrens
      : childrens.reverse();
  };

  const firstContent = (() =>
    footerMobileSortConfig?.firstContent && props.device === DeviceBreakpointsType.MOBILE
      ? getPositionContent(footerMobileSortConfig.firstContent)
      : getPositionContent(FooterPositionType.LEFT))();
  const secondContent = (() =>
    footerMobileSortConfig?.secondContent && props.device === DeviceBreakpointsType.MOBILE
      ? getPositionContent(footerMobileSortConfig.secondContent)
      : getPositionContent(FooterPositionType.CENTER))();
  const thridContent = (() =>
    footerMobileSortConfig?.thirdContent && props.device === DeviceBreakpointsType.MOBILE
      ? getPositionContent(footerMobileSortConfig.thirdContent)
      : getPositionContent(FooterPositionType.RIGHT))();

  const showFooter =
    props.children ||
    firstContent.length > 0 ||
    thridContent.length > 0 ||
    secondContent.length > 0;
  if (!showFooter) {
    return null;
  }

  const asFooter = props.simpleContainer ? undefined : FOOTER;

  return (
    <FooterStyled
      {...ariaProps}
      ref={ref}
      alignItems={props.alignItems}
      as={asFooter}
      contentDirection={props.contentDirection}
      data-testid={props.dataTestId}
      {...props}
      lineSeparatorLineStyles={props.lineSeparatorLineStyles}
      role={props.role}
      styles={props.styles}
    >
      {Array.isArray(props.children) ? (
        <>
          <FooterContent
            contentDirection={props.contentDirection}
            forceVertical={props.forceVertical}
            marginRight={true}
            styles={props.styles}
          >
            {firstContent}
          </FooterContent>
          <FooterContent
            contentDirection={props.contentDirection}
            forceVertical={props.forceVertical}
            margin={true}
            styles={props.styles}
          >
            {secondContent}
          </FooterContent>
          <FooterContent
            contentDirection={props.contentDirection}
            forceVertical={props.forceVertical}
            marginLeft={true}
            styles={props.styles}
          >
            {thridContent}
          </FooterContent>
        </>
      ) : (
        props.children
      )}
    </FooterStyled>
  );
};

export const FooterStandAlone = React.forwardRef(FooterStandAloneComponent);
