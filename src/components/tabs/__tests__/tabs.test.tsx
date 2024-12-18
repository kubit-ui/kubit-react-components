import { fireEvent, screen } from '@testing-library/react';
import React, { RefObject } from 'react';

import { axe } from 'jest-axe';

import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import * as UseTabsUtils from '@/hooks/useTabs/useTabs';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { ROLES } from '@/types/role/role';

import { windowMatchMedia } from '../../../tests/windowMatchMedia/windowMatchMedia';
import { TabsControlled } from '../tabsControlled';
import { TabsUnControlled } from '../tabsUnControlled';
import { ITabsUnControlled, PrimaryTabTabType } from '../types/tabs';

const tabs: PrimaryTabTabType[] = [
  { content: 'Tab 1' },
  { content: 'Tab 2' },
  { content: 'Tab 3' },
  { content: 'Tab 4' },
  { content: 'Tab 5' },
];

const mockProps: ITabsUnControlled = {
  variant: 'DEFAULT',
  defaultSelectedTab: 1,
  leftControlAriaLabel: 'leftControlAriaLabel',
  leftIcon: { icon: 'CHEVRON_LEFT' },
  rightControlAriaLabel: 'rightControlAriaLabel',
  rightIcon: { icon: 'ARROW_RIGHT' },
  tabs: tabs,
  onSelectTab: jest.fn(),
  content: ['content1', 'content2', 'content3', 'content4', 'content5'],
  dataTestId: 'tab',
};

describe('Tabs component', () => {
  it('Render', async () => {
    const { container } = renderProvider(<TabsUnControlled {...mockProps} />);

    const tab = screen.getByRole(ROLES.TABLIST);

    expect(tab).toBeDefined();

    const results = await axe(container);
    // Disable style in line
    // It is necessary to add the transform style from the component to make the transition correctly
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Initial tab is optional', () => {
    renderProvider(<TabsUnControlled {...mockProps} defaultSelectedTab={undefined} />);

    const tab = screen.getByRole(ROLES.TABLIST);

    expect(tab).toBeDefined();
  });

  it('DataTestId is optional', () => {
    renderProvider(<TabsUnControlled {...mockProps} dataTestId={undefined} />);

    const tab = screen.getByRole(ROLES.TABLIST);
    expect(tab).toBeDefined();
  });

  it('allowFocusTabPanel can be set to false to avoid the TABPANEL to be focusable', () => {
    renderProvider(<TabsUnControlled {...mockProps} allowFocusTabPanel={false} />);

    const tabPanel = screen.getByRole(ROLES.TABPANEL);

    expect(tabPanel).toHaveAttribute('tabIndex', '-1');
  });

  it('Click on tab will change the content', () => {
    renderProvider(<TabsUnControlled {...mockProps} />);

    const tabToPress = 3;
    const tab = screen.getAllByRole(ROLES.TAB)[tabToPress];
    fireEvent.click(tab);
    const content = screen.getByText(mockProps.content?.[tabToPress] as string);
    expect(content).toBeInTheDocument();
  });

  it('When mobile, not visible tabs are disabled, but can be shown using the arrows', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    renderProvider(<TabsUnControlled {...mockProps} />);

    const tabToOver = 3;
    const tab = screen.getAllByRole(ROLES.TAB)[tabToOver];

    expect(tab).toBeDisabled();

    const rightArrow = screen.getByTestId('tab-icon-right');
    fireEvent.click(rightArrow);

    expect(tab).not.toBeDisabled();

    const leftArrow = screen.getByTestId('tab-icon-left');
    fireEvent.click(leftArrow);

    expect(tab).toBeDisabled();
  });

  it('When the number of tabs is less or equal MIN_TABS_IN_VIEW (default 2), the tabs are compact and the number of tabs in view will change (3 -> 2)', () => {
    const mockUseTabs = jest.fn();
    jest.spyOn(UseTabsUtils, 'useTabs').mockImplementation(args => {
      mockUseTabs(args);
      return {
        position: 0,
        handleClickIcon: () => ({}),
        focus: 0,
        handleClickTab: () => ({}),
        listEl: { current: null } as RefObject<HTMLLIElement>,
      };
    });

    renderProvider(
      <TabsUnControlled
        {...mockProps}
        content={mockProps.content?.slice(0, 2)}
        tabs={mockProps.tabs?.slice(0, 2)}
      />
    );
    expect(mockUseTabs).toHaveBeenCalledWith({
      numTabsInView: 2,
      tabsLength: 2,
      selectedTab: 1,
    });
  });

  it('does not render content when unMountContent is true and selectedTab is undefined', () => {
    renderProvider(<TabsUnControlled {...mockProps} unMountContent={true} />);
    expect(screen.queryByText('Tab 1 content')).not.toBeInTheDocument();
    expect(screen.queryByText('Tab 2 content')).not.toBeInTheDocument();
    expect(screen.queryByText('Tab 3 content')).not.toBeInTheDocument();
  });

  it('renders all tabs with correct display style when unMountContent is false', () => {
    const { container } = renderProvider(
      <TabsControlled {...mockProps} selectedTab={1} unMountContent={false} />
    );
    const tabs = container.querySelectorAll('[role="tabpanel"]');
    expect(tabs).toHaveLength(5);
    expect(tabs[0]).toHaveStyle('display: none');
    expect(tabs[1]).toHaveStyle('display: block');
    expect(tabs[2]).toHaveStyle('display: none');
    expect(tabs[3]).toHaveStyle('display: none');
    expect(tabs[4]).toHaveStyle('display: none');
  });
});
