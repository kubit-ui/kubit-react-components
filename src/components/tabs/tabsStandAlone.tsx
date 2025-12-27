import { type RefObject, forwardRef } from 'react';

import { ItemRove } from '@/components/itemRove/itemRove';
import { RenderIf } from '@/components/renderIf/renderIf';
import { Text } from '@/components/text/text';
import { useId } from '@/lib/hooks/useId/useId';
import { useActiveBreakpoints } from '@/lib/hooks/useMediaDevice/useActiveBreakpoints';
import { STATES } from '@/lib/types/states/states';
import { classNames } from '@/lib/utils/classNames/classNames';
import { pickCustomAttributes } from '@/lib/utils/pickCustomAttributes/pickCustomAttributes';
import { processText } from '@/lib/utils/process/processText/processText';

import type { TabsStandAloneProps } from './types/tabs';

import { ElementOrIcon } from '../elementOrIcon/elementOrIcon';
import { useTabs } from './hooks/useTabs/useTabs';

const MAX_TABS_IN_VIEW = 3;
const PRIMARY_TABS_BASE_ID = 'Tabs';

export const TabsStandAlone = forwardRef<HTMLDivElement, TabsStandAloneProps>(
  (
    {
      allowFocusTabPanel = true,
      autoWidth = false,
      content,
      cssClasses,
      device,
      hideLabelForSingleTab,
      leftControlAriaLabel,
      leftIcon,
      maxTabsInView = MAX_TABS_IN_VIEW,
      onSelectTab,
      rightControlAriaLabel,
      rightIcon,
      selectedTab,
      tabs,
      unMountContent = true,
      ...props
    },
    ref,
  ) => {
    const { isMobile } = useActiveBreakpoints();

    const BASE_ID = useId(PRIMARY_TABS_BASE_ID);
    const TAB_LIST_ID = `${BASE_ID}-tab-list`;
    const TAB_PANEL_ID = `${BASE_ID}-tab-panel`;
    const tabsLength = tabs?.length ?? 0;
    const numTabsInView = Math.min(tabsLength, maxTabsInView);

    const { focus, handleClickIcon, handleClickTab, listEl, position } =
      useTabs({
        numTabsInView,
        selectedTab,
        tabsLength,
      });

    const disabledIconLeft = position === 0;
    const disabledIconRight = position >= tabsLength - numTabsInView;
    const dataTestId = props['data-testid'] || 'tabs';
    const customProps = pickCustomAttributes(props);

    const buildIcon = (direction: 'left' | 'right') => {
      const isLeft = direction === 'left';
      const disabled = isLeft ? disabledIconLeft : disabledIconRight;
      const handleClick = () => {
        if (!disabled) {
          handleClickIcon(!isLeft);
        }
      };

      return (
        <RenderIf condition={tabsLength > numTabsInView}>
          <button
            aria-label={isLeft ? leftControlAriaLabel : rightControlAriaLabel}
            className={cssClasses?.arrowiconcontainer}
            data-position={isLeft ? 'left' : 'right'}
            data-testid={`${dataTestId}-icon-${direction}`}
            disabled={disabled}
            tabIndex={0}
            type="button"
            onClick={handleClick}
          >
            <ElementOrIcon
              className={cssClasses?.icon}
              customAttributes={{ 'data-disabled': disabled }}
              data-position={isLeft ? 'left' : 'right'}
              {...(isLeft ? leftIcon : rightIcon)}
            />
          </button>
        </RenderIf>
      );
    };

    const buildTabContent = () => {
      const commonTokens = {
        role: 'tabpanel',
        tabIndex: allowFocusTabPanel ? 0 : -1,
      };

      if (unMountContent) {
        return (
          selectedTab !== undefined &&
          selectedTab !== null && (
            <div
              aria-labelledby={`${BASE_ID}-tab-${selectedTab}`}
              className={cssClasses?.contentcontainer}
              {...commonTokens}
            >
              {content?.[selectedTab]}
            </div>
          )
        );
      }

      return content?.map((cont, index) => (
        <div
          key={`${BASE_ID}-${index.toString()}-tab`}
          aria-labelledby={`${BASE_ID}-tab-${index}`}
          className={cssClasses?.contentcontainer}
          id={`${TAB_PANEL_ID}-${index}`}
          style={{ display: selectedTab === index ? 'block' : 'none' }}
          {...commonTokens}
        >
          {cont}
        </div>
      ));
    };

    return (
      <div
        ref={ref}
        className={cssClasses?.tabs}
        data-testid={dataTestId}
        {...customProps}
      >
        <div className={cssClasses?.container}>
          {buildIcon('left')}
          <div
            ref={listEl as RefObject<HTMLDivElement>}
            className={cssClasses?.tabbuttonscontainer}
            id={TAB_LIST_ID}
            role="tablist"
          >
            {tabs?.map((tab, index) => {
              const isSelected = selectedTab === index;
              const stateTab = isSelected ? STATES.SELECTED : STATES.UNSELECTED;
              const positionVisibleInView =
                index >= position && index < position + numTabsInView;
              const customAttributes = { 'data-state': stateTab };

              return (
                <div
                  key={`${dataTestId}-tab-${index.toString()}`}
                  className={cssClasses?.tabcontainer}
                  data-testid={`${dataTestId}-tab-${index}`}
                  {...pickCustomAttributes(customAttributes)}
                  style={{
                    minWidth: isMobile
                      ? `calc(100% / ${numTabsInView})`
                      : 'auto',
                    width: autoWidth ? 'auto' : `calc(100% / ${tabsLength})`,
                  }}
                >
                  {tabsLength > 1 ? (
                    <ItemRove
                      ariaDisabled={
                        (isMobile && !positionVisibleInView) || tab.disabled
                      }
                      ariaSelected={isSelected}
                      asElement="button"
                      checkIsFirstTime={true}
                      classNames={classNames(cssClasses?.tabbutton, {
                        [`${cssClasses?.firsttabbutton}`]: index === 0,
                        [`${cssClasses?.lasttabbutton}`]:
                          index === tabsLength - 1,
                      })}
                      customAttributes={customAttributes}
                      disabled={
                        (isMobile && !positionVisibleInView) || tab.disabled
                      }
                      focus={focus === index}
                      id={`${BASE_ID}-tab-${index}`}
                      index={index}
                      preventScrollOnFocus={true}
                      role="tab"
                      type="button"
                      onSelectItem={() => {
                        onSelectTab?.(index);
                        handleClickTab(index);
                      }}
                    >
                      <Text
                        additionalClasses={{ text: cssClasses?.label }}
                        component="span"
                        customAttributes={customAttributes}
                        data-hidden={!!hideLabelForSingleTab}
                        {...processText(tab)}
                      />
                    </ItemRove>
                  ) : (
                    <div
                      className={classNames(cssClasses?.onetabcontainer, {
                        [`${cssClasses?.tabbutton}`]: !!hideLabelForSingleTab,
                      })}
                      id={`${BASE_ID}-tab-${index}`}
                      role="tab"
                    >
                      <Text
                        additionalClasses={{ text: cssClasses?.label }}
                        data-hidden={!!hideLabelForSingleTab}
                        {...processText(tab)}
                      >
                        {processText(tab).children}
                      </Text>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {buildIcon('right')}
        </div>
        {buildTabContent()}
      </div>
    );
  },
);
