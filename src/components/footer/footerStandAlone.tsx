import * as React from 'react';

import { DeviceBreakpointsType } from '@/types';
import { pickAriaProps } from '@/utils/aria/aria';

// inner components
import { FooterSection } from './components';
import { FooterStyled } from './footer.styled';
import {
  ContentDirectionType,
  FooterMobileColumnFlow,
  FooterPositionType,
  IFooterStandAlone,
  MobileSort,
} from './types';
import { getOrderConfiguration } from './utils/getOrderConfiguration';

// simple container tag
const FOOTER = 'footer';

const DEFAULT_SORT: MobileSort = {
  column: FooterMobileColumnFlow.DEFAULT,
  firstContent: FooterPositionType.LEFT,
  secondContent: FooterPositionType.CENTER,
  thirdContent: FooterPositionType.RIGHT,
};

const FooterStandAloneComponent = (
  { orderInverse = [], footerMobileSortConfig = DEFAULT_SORT, ...props }: IFooterStandAlone,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element | null => {
  if (!props.children) {
    return null;
  }

  const ariaProps = pickAriaProps(props);
  const asFooter = props.simpleContainer ? undefined : FOOTER;

  // START CONTENT: Remove when footerMobileSortConfig is removed
  if (footerMobileSortConfig?.column === FooterMobileColumnFlow.REVERSE) {
    orderInverse.push(DeviceBreakpointsType.MOBILE);
  }
  // END CONTENT

  const setVertical =
    props.contentDirection === ContentDirectionType.VERTICAL ||
    // START CONTENT: Remove when forceVertical is removed
    props.forceVertical;
  // END CONTENT

  const orderConfiguration = getOrderConfiguration(props.tabInverse || [], orderInverse);

  const renderChildren = (children: JSX.Element | JSX.Element[]) => {
    const childrenArray = React.Children.toArray(children);

    const positions: { [key in FooterPositionType]: React.ReactNode[] } = {
      [FooterPositionType.LEFT]: [],
      [FooterPositionType.CENTER]: [],
      [FooterPositionType.RIGHT]: [],
    };

    let defaultPositionCounter = 0;

    childrenArray.forEach((child: React.ReactNode) => {
      let position = (child as JSX.Element)?.props?.['data-position'];

      // START CONTENT: Remove when footerMobileSortConfig is removed
      if (footerMobileSortConfig && props.device === DeviceBreakpointsType.MOBILE) {
        const { firstContent, secondContent, thirdContent } = footerMobileSortConfig;

        if (position === firstContent) {
          positions[FooterPositionType.LEFT].push(child);
          return;
        } else if (position === secondContent) {
          positions[FooterPositionType.CENTER].push(child);
          return;
        } else if (position === thirdContent) {
          positions[FooterPositionType.RIGHT].push(child);
          return;
        }
      }
      // END CONTENT

      if (!position) {
        if (defaultPositionCounter === 0) {
          position = FooterPositionType.LEFT;
        } else if (defaultPositionCounter === 1) {
          position = FooterPositionType.RIGHT;
        }
        defaultPositionCounter++;
      }

      if (positions[position]) {
        positions[position].push(child);
      }
    });

    const sections = Object.entries(positions).map(([position, children]) => (
      <FooterSection
        key={position}
        alignItems={props.alignItems}
        orderConfiguration={{
          flexReverse: orderConfiguration[props.device].flexReverse,
          reverse: orderConfiguration[props.device].reverse,
        }}
        position={position}
        setVertical={setVertical}
        styles={props.styles}
      >
        {children}
      </FooterSection>
    ));

    return <>{orderConfiguration[props.device].reverse ? sections.reverse() : sections}</>;
  };

  return (
    <FooterStyled
      {...ariaProps}
      {...props}
      ref={ref}
      $flexReverse={orderConfiguration[props.device].flexReverse}
      $setVertical={setVertical}
      as={asFooter}
      data-testid={props.dataTestId}
      lineSeparatorLineStyles={props.lineSeparatorLineStyles}
      role={props.role}
      styles={props.styles}
    >
      {renderChildren(props.children)}
    </FooterStyled>
  );
};

export const FooterStandAlone = React.forwardRef(FooterStandAloneComponent);
