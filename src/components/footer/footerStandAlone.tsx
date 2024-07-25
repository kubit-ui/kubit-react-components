import * as React from 'react';

import { pickAriaProps } from '@/utils/aria/aria';

// inner components
import { FooterSection } from './components';
import { FooterStyled } from './footer.styled';
import {
  ContentDirectionType,
  FooterMobileColumnFlow,
  FooterPositionType,
  IFooterStandAlone,
} from './types';

// simple container tag
const FOOTER = 'footer';

const FooterStandAloneComponent = (
  { ...props }: IFooterStandAlone,
  ref: React.ForwardedRef<HTMLElement> | undefined | null
): JSX.Element | null => {
  if (!props.children) {
    return null;
  }

  const ariaProps = pickAriaProps(props);

  const asFooter = props.simpleContainer ? undefined : FOOTER;

  const renderChildren = (children: JSX.Element | JSX.Element[]) => {
    const childrenArray = React.Children.toArray(children);

    const positions = {
      [FooterPositionType.LEFT]: [],
      [FooterPositionType.CENTER]: [],
      [FooterPositionType.RIGHT]: [],
    };

    let defaultPositionCounter = 0;

    childrenArray.forEach((child: React.ReactNode) => {
      let position = (child as JSX.Element)?.props?.['data-position'];

      // START CONTENT: Remove when footerMobileSortConfig is removed
      if (props.footerMobileSortConfig) {
        if (props.footerMobileSortConfig.firstContent === position) {
          position = FooterPositionType.LEFT;
        } else if (props.footerMobileSortConfig.secondContent === position) {
          position = FooterPositionType.CENTER;
        } else if (props.footerMobileSortConfig.thirdContent === position) {
          position = FooterPositionType.RIGHT;
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
        forceVertical={forceVertical}
        position={position}
        styles={props.styles}
        tabInverse={tabInverse}
      >
        {children}
      </FooterSection>
    ));

    return <>{tabInverse ? sections.reverse() : sections}</>;
  };

  // START CONTENT: Remove when contentDirection is removed
  const forceVertical =
    props.forceVertical || props.contentDirection === ContentDirectionType.VERTICAL;
  // END CONTENT

  // START CONTENT: Remove when footerMobileSortConfig is removed
  const tabInverse =
    props.tabInverse || props.footerMobileSortConfig?.column === FooterMobileColumnFlow.REVERSE;
  // END CONTENT

  return (
    <FooterStyled
      {...ariaProps}
      {...props}
      ref={ref}
      $forceVertical={forceVertical}
      $tabInverse={tabInverse}
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
