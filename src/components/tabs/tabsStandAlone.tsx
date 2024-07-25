import * as React from 'react';

import { ButtonType } from '@/components/button';
import { ElementOrIcon } from '@/components/elementOrIcon';
import { ItemRove } from '@/components/itemRove/itemRove';
import { Text, TextComponentType } from '@/components/text';
import { useId } from '@/hooks';
import { useTabs } from '@/hooks/useTabs/useTabs';
import { DeviceBreakpointsType, ROLES } from '@/types';

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
const MIN_TABS_IN_VIEW = 2;
const PRIMARY_TABS_BASE_ID = 'Tabs';

const TabsStandAloneComponent = (
  {
    autoWidth = false,
    allowFocusTabPanel = true,
    dataTestId = 'primaryTab',
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
  const compacted = tabsLength <= minTabsInView;
  const numTabsInView = compacted ? minTabsInView : maxTabsInView;

  const { position, handleClickIcon, focus, handleClickTab, listEl } = useTabs({
    numTabsInView,
    tabsLength: tabsLength,
    selectedTab: props.selectedTab,
  });

  const buildIconLeft = () =>
    position !== 0 && (
      <TabsLeftArrowContainerStyled
        aria-label={props.leftControlAriaLabel}
        data-testid={`${dataTestId}IconLeft`}
        styles={props.styles}
        tabIndex={0}
        type={ButtonType.BUTTON}
        onClick={() => handleClickIcon(false)}
      >
        <ElementOrIcon customIconStyles={props.styles.leftIcon} {...props.leftIcon} />
      </TabsLeftArrowContainerStyled>
    );

  const buildIconRight = () =>
    position < tabsLength - numTabsInView && (
      <TabsRightArrowContainerStyled
        aria-label={props.rightControlAriaLabel}
        data-testid={`${dataTestId}IconRight`}
        styles={props.styles}
        tabIndex={0}
        type={ButtonType.BUTTON}
        onClick={() => handleClickIcon(true)}
      >
        <ElementOrIcon customIconStyles={props.styles.rightIcon} {...props.rightIcon} />
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
    <TabsContainerStyled ref={ref} styles={props.styles}>
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
                  compacted={compacted}
                  data-testid={`${dataTestId}Tab${index}`}
                  empty={props.hideLabelForSingleTab}
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
