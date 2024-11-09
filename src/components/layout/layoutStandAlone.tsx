/* eslint-disable complexity */
import React from 'react';

import { GridStyled as Grid, GridItemStyled as GridItem } from '@/components/grid/grid.styled';
// templates
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

import { LayoutContainer } from './layout.styled';
import { ILayoutStandAlone, LayoutRoleType } from './types/layout';

export const LayoutStandAlone = ({
  headerContent,
  mainContent,
  asideContent,
  styles,
  backgroundColor,
  columnsConfig,
  gridConfig,
  footerContent,
  dataTestId = 'layout',
  device,
}: ILayoutStandAlone): JSX.Element => {
  const columnsConfiguration = columnsConfig ?? styles.defaultColumnsConfig;
  const gridConfiguration = gridConfig ?? styles.gridConfig;
  const { header, main, aside, footer } = columnsConfiguration ?? {};

  return (
    <LayoutContainer
      $paddingBottom={styles.padding_botom_size}
      backgroundColor={backgroundColor}
      data-testid={dataTestId}
    >
      {headerContent && (
        <Grid
          addPaddingForLayout
          config={gridConfiguration}
          data-testid={`${dataTestId}-header`}
          styles={gridConfiguration?.[device]?.headerStyles}
        >
          <GridItem
            as={LayoutRoleType.header}
            desktop={header?.[DeviceBreakpointsType.DESKTOP]}
            mobile={header?.[DeviceBreakpointsType.MOBILE]}
            tablet={header?.[DeviceBreakpointsType.TABLET]}
          >
            {headerContent}
          </GridItem>
        </Grid>
      )}
      <Grid
        addPaddingForLayout
        config={gridConfiguration}
        data-testid={`${dataTestId}-main`}
        styles={gridConfiguration?.[device]?.mainStyles}
      >
        <GridItem
          as={LayoutRoleType.main}
          desktop={asideContent ? main?.[DeviceBreakpointsType.DESKTOP] : main?.DESKTOP_FULL}
          mobile={main?.[DeviceBreakpointsType.MOBILE]}
          tablet={main?.[DeviceBreakpointsType.TABLET]}
        >
          {mainContent}
        </GridItem>
        {asideContent && (
          <GridItem
            as={LayoutRoleType.aside}
            data-testid={`${dataTestId}-aside`}
            desktop={aside?.[DeviceBreakpointsType.DESKTOP]}
            mobile={aside?.[DeviceBreakpointsType.MOBILE]}
            tablet={aside?.[DeviceBreakpointsType.TABLET]}
          >
            {asideContent}
          </GridItem>
        )}
      </Grid>
      {footerContent && footer && (
        <Grid
          addPaddingForLayout
          config={gridConfiguration}
          data-testid={`${dataTestId}-footer`}
          styles={gridConfiguration?.[device]?.footerStyles}
        >
          <GridItem
            as={LayoutRoleType.footer}
            desktop={footer[DeviceBreakpointsType.DESKTOP]}
            mobile={footer[DeviceBreakpointsType.MOBILE]}
            tablet={footer[DeviceBreakpointsType.TABLET]}
          >
            {footerContent}
          </GridItem>
        </Grid>
      )}
    </LayoutContainer>
  );
};
