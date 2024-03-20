import * as React from 'react';

import { DeviceBreakpointsType } from '@/types/breakpoints';

import { ContentCustomGridItem, CustomGridItem, CustomGridStyled } from '../grid/grid.styled';
// helper
import { getBgColor, getHorizontalMargin } from './helpers';
import { OperativeLayoutColor, OperativeLayoutContainer } from './operativeLayout.styled';
import { IOperativeLayoutStandAlone, OperativeLayoutRoleType } from './types';

export const OperativeLayoutStandAlone = ({
  contentBgColor,
  contentPosition,
  contentOverflowColor,
  contentHeight,
  asideContent,
  mainContent,
  styles,
  columnsConfig,
  gridConfig,
  minMarginRightAndLeft,
  maxWidthToApply,
  device,
  horizontalExternalMargin,
}: IOperativeLayoutStandAlone): JSX.Element => {
  const columnsConfiguration = columnsConfig ?? styles.defaultColumnsConfig;
  const gridConfiguration = gridConfig ?? styles.gridConfig;
  const { main, aside } = columnsConfiguration ?? {};
  //Allow the user to establish a minimun margin when the user resize the screen.
  const marginRightAndLeftContent =
    minMarginRightAndLeft || gridConfiguration?.[DeviceBreakpointsType.DESKTOP]?.gap;

  const [mainContainerWidth, setMainContainerWidth] = React.useState<number | null>(null);
  const [asideContainerPosition, setAsideContainerPosition] = React.useState<number | null>(null);

  const mainContainerRef = React.useRef<HTMLDivElement | null>(null);
  const timeoutRef = React.useRef<number | NodeJS.Timeout>();

  // Calculate the width of the parent container
  const getMainContainerWidth = React.useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (mainContainerRef.current !== null) {
        setMainContainerWidth(mainContainerRef.current.getBoundingClientRect().width);
      }
    }, 200);
  }, []);
  // Calculate the position of the element on the right
  const asideContainerRef = React.useCallback(
    node => {
      if (node !== null) {
        setAsideContainerPosition(node.offsetLeft);
      }
    },
    [contentPosition, mainContainerWidth]
  );
  // A listener for when the screen size changes
  React.useEffect(() => {
    getMainContainerWidth();
    window.addEventListener('resize', getMainContainerWidth);
    return () => window.removeEventListener('resize', getMainContainerWidth);
  }, []);
  // Auxiliary function to distribute the colors in the components
  const { bgColor, leftBgColor, rightBgColor } = getBgColor(
    mainContainerWidth,
    asideContainerPosition,
    contentBgColor,
    contentOverflowColor,
    styles.mainContainerColor,
    styles.asideContainerColor,
    device
  );

  const margin = getHorizontalMargin(horizontalExternalMargin);
  const width = (() => (contentOverflowColor ? 'fit-content' : '100%'))();

  return (
    <OperativeLayoutColor
      ref={mainContainerRef}
      $align={contentPosition}
      $color={bgColor}
      $contentOverflowColor={contentOverflowColor}
      $height={contentHeight}
      $margin={margin}
      $paddingBottom={styles.paddingBottomSize}
      $width={maxWidthToApply}
    >
      <OperativeLayoutContainer $width={width} maxWidthParentContainer={maxWidthToApply}>
        <CustomGridStyled addPaddingForLayout config={gridConfiguration}>
          <CustomGridItem
            as={OperativeLayoutRoleType.main}
            containerColor={leftBgColor}
            desktop={asideContent ? main?.[DeviceBreakpointsType.DESKTOP] : main?.DESKTOP_FULL}
            height={contentHeight}
            mobile={main?.[DeviceBreakpointsType.MOBILE]}
            paddingRight={styles.paddingRightGridItem}
            tablet={main?.[DeviceBreakpointsType.TABLET]}
          >
            <ContentCustomGridItem
              isMainContainer
              marginsContainer={gridConfiguration?.[DeviceBreakpointsType.DESKTOP]?.margin}
              minMarginRightAndLeft={marginRightAndLeftContent}
              paddingLeft={marginRightAndLeftContent}
            >
              {mainContent}
            </ContentCustomGridItem>
          </CustomGridItem>
          {asideContent && (
            <CustomGridItem
              ref={asideContainerRef}
              as={OperativeLayoutRoleType.aside}
              containerColor={rightBgColor}
              desktop={aside?.[DeviceBreakpointsType.DESKTOP]}
              height={contentHeight}
              mobile={aside?.[DeviceBreakpointsType.MOBILE]}
              paddingLeft={styles.paddingLeftGridItem}
              tablet={aside?.[DeviceBreakpointsType.TABLET]}
            >
              <ContentCustomGridItem
                isMainContainer={false}
                marginsContainer={gridConfiguration?.[DeviceBreakpointsType.DESKTOP]?.margin}
                minMarginRightAndLeft={marginRightAndLeftContent}
                paddingRight={marginRightAndLeftContent}
              >
                {asideContent}
              </ContentCustomGridItem>
            </CustomGridItem>
          )}
        </CustomGridStyled>
      </OperativeLayoutContainer>
    </OperativeLayoutColor>
  );
};
