import React from 'react';

import { ItemRove } from '@/components/itemRove/itemRove';
import { Text } from '@/components/text/text';
import { TextComponentType } from '@/components/text/types/component';
import { useId } from '@/hooks/useId/useId';
import { useTabs } from '@/hooks/useTabs/useTabs';

import { DeviceBreakpointsType } from '../../types/breakpoints/breakpoints';
import { ROLES } from '../../types/role/role';
import { ButtonType } from '../button/types/type';
import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
// styles
import {
  LabelHiddenContainer,
  OneTabStyled,
  PrimaryTabItemRoveStyled,
  TabStyled,
  TabsContainerStyled,
  TabsContentStyled,
  TabsLeftArrowContainerStyled,
  TabsRightArrowContainerStyled,
  TabsStyled,
  TabsTabListStyled,
  TextWrapperStyled,
} from './tabs.styled';
import { TabsStateTypes } from './types/state';
import { ITabsStandAlone } from './types/tabs';

const MAX_TABS_IN_VIEW = 3;
// deprecated - Remove `MIN_TABS_IN_VIEW` when `minTabsInView` prop is removed from `Tabs`
const MIN_TABS_IN_VIEW = 2;
const PRIMARY_TABS_BASE_ID = 'Tabs';

const TabsStandAloneComponent = (
  {
    autoWidth = false,
    allowFocusTabPanel = true,
    dataTestId = 'tabs',
    // deprecated - Remove when `minTabsInView` prop is removed from `Tabs`
    minTabsInView = MIN_TABS_IN_VIEW,
    maxTabsInView = MAX_TABS_IN_VIEW,
    unMountContent = true,
    ...props
  }: ITabsStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const BASE_ID = useId(PRIMARY_TABS_BASE_ID);
  const TAB_LIST_ID = `${BASE_ID}-tab-list`;
  const TAB_PANEL_ID = `${BASE_ID}-tab-panel`;

  const tabsLength = props.tabs?.length ?? 0;
  const numTabsInView = Math.min(tabsLength, maxTabsInView);
  const { position, handleClickIcon, focus, handleClickTab, listEl } = useTabs({
    numTabsInView: numTabsInView,
    tabsLength: tabsLength,
    selectedTab: props.selectedTab,
  });
  const disabledIconLeft = position === 0;
  const disabledIconRight = position >= tabsLength - numTabsInView;

  const buildIconLeft = () =>
    tabsLength > numTabsInView && (
      <TabsLeftArrowContainerStyled
        aria-label={props.leftControlAriaLabel}
        data-testid={`${dataTestId}-icon-left`}
        disabled={disabledIconLeft}
        styles={props.styles}
        tabIndex={0}
        type={ButtonType.BUTTON}
        onClick={() => {
          if (!disabledIconLeft) {
            handleClickIcon(false);
          }
        }}
      >
        <ElementOrIcon
          customIconStyles={
            !disabledIconLeft ? props.styles.leftIcon : props.styles.leftIcon?.disabled
          }
          {...props.leftIcon}
        />
      </TabsLeftArrowContainerStyled>
    );

  const buildIconRight = () =>
    tabsLength > numTabsInView && (
      <TabsRightArrowContainerStyled
        aria-label={props.rightControlAriaLabel}
        data-testid={`${dataTestId}-icon-right`}
        disabled={disabledIconRight}
        styles={props.styles}
        tabIndex={0}
        type={ButtonType.BUTTON}
        onClick={() => {
          if (!disabledIconRight) {
            handleClickIcon(true);
          }
        }}
      >
        <ElementOrIcon
          customIconStyles={
            !disabledIconRight ? props.styles.rightIcon : props.styles.rightIcon?.disabled
          }
          {...props.rightIcon}
        />
      </TabsRightArrowContainerStyled>
    );

  const buildTabContent = () => {
    const commonTokens = {
      id: TAB_PANEL_ID,
      role: ROLES.TABPANEL,
      styles: props.styles,
      tabIndex: allowFocusTabPanel ? 0 : -1,
    };

    return unMountContent
      ? props.selectedTab !== undefined && props.selectedTab !== null && (
          <TabsContentStyled
            aria-labelledby={`${BASE_ID}-tab-${props.selectedTab}`}
            {...commonTokens}
          >
            {props.content?.[props.selectedTab]}
          </TabsContentStyled>
        )
      : props.content?.map((cont, index) => {
          return (
            <TabsContentStyled
              key={index}
              $display={props.selectedTab === index ? 'block' : 'none'}
              aria-labelledby={`${BASE_ID}-tab-${index}`}
              {...commonTokens}
            >
              {cont}
            </TabsContentStyled>
          );
        });
  };

  return (
    <TabsContainerStyled ref={ref} data-testid={dataTestId} styles={props.styles}>
      <TabsStyled styles={props.styles}>
        {buildIconLeft()}
        <TabsTabListStyled
          ref={listEl as React.RefObject<HTMLDivElement>}
          id={TAB_LIST_ID}
          role={ROLES.TABLIST}
          styles={props.styles}
        >
          <>
            {props.tabs?.map((tab, index) => {
              const isSelected = props.selectedTab === index;
              const stateTab = isSelected ? TabsStateTypes.SELECTED : TabsStateTypes.UNSELECTED;
              const positionVisibleInView = index >= position && index < position + numTabsInView;

              return (
                <TabStyled
                  key={index}
                  autoWidth={autoWidth}
                  data-testid={`${dataTestId}-tab-${index}`}
                  empty={props.hideLabelForSingleTab}
                  numTabsInViewMobile={numTabsInView}
                  state={stateTab}
                  styles={props.styles}
                  tabsLength={tabsLength}
                >
                  {tabsLength > 1 ? (
                    <ItemRove
                      ariaDisabled={
                        (props.device === DeviceBreakpointsType.MOBILE && !positionVisibleInView) ||
                        tab.disabled
                      }
                      ariaSelected={isSelected}
                      asElement={PrimaryTabItemRoveStyled}
                      checkIsFirstTime={true}
                      disabled={
                        (props.device === DeviceBreakpointsType.MOBILE && !positionVisibleInView) ||
                        tab.disabled
                      }
                      focus={focus === index}
                      id={`${BASE_ID}-tab-${index}`}
                      index={index}
                      preventScrollOnFocus={true}
                      role={ROLES.TAB}
                      onSelectItem={() => {
                        props.onSelectTab?.(index);
                        handleClickTab(index);
                      }}
                    >
                      <TextWrapperStyled
                        as={Text as unknown as React.ElementType}
                        component={TextComponentType.SPAN}
                        customTypography={props.styles[stateTab]?.label}
                        {...tab}
                      >
                        {tab.content}
                      </TextWrapperStyled>
                    </ItemRove>
                  ) : (
                    <OneTabStyled id={`${BASE_ID}-tab-${index}`} role={ROLES.TAB}>
                      {props.hideLabelForSingleTab ? (
                        <LabelHiddenContainer
                          as={Text as unknown as React.ElementType}
                          id={`${BASE_ID}-tab-${index}`}
                          role={ROLES.TAB}
                          {...tab}
                        >
                          {tab.content}
                        </LabelHiddenContainer>
                      ) : (
                        <TextWrapperStyled
                          as={Text as unknown as React.ElementType}
                          customTypography={props.styles[stateTab]?.label}
                          {...tab}
                        >
                          {tab.content}
                        </TextWrapperStyled>
                      )}
                    </OneTabStyled>
                  )}
                </TabStyled>
              );
            })}
          </>
        </TabsTabListStyled>
        {buildIconRight()}
      </TabsStyled>
      {buildTabContent()}
    </TabsContainerStyled>
  );
};

export const TabsStandAlone = React.forwardRef(TabsStandAloneComponent);
