import type { RefObject } from 'react';

import { fireEvent, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import * as mediaHooks from '@/lib/hooks/useMediaDevice/useMediaDevice';
import { render } from '@/lib/tests/render/render';
import { windowMatchMedia } from '@/lib/tests/windowMatchMedia/windowMatchMedia';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import type { TabsUnControlledProps } from '../types/tabs';

import * as UseTabsUtils from '../hooks/useTabs/useTabs';
import { TabsControlled } from '../tabsControlled';
import { TabsUnControlled } from '../tabsUnControlled';

const tabs = [
  { content: 'Tab 1' },
  { content: 'Tab 2' },
  { content: 'Tab 3' },
  { content: 'Tab 4' },
  { content: 'Tab 5' },
];

const mockProps: TabsUnControlledProps = {
  content: ['content1', 'content2', 'content3', 'content4', 'content5'],
  'data-testid': 'tab',
  defaultSelectedTab: 1,
  leftControlAriaLabel: 'leftControlAriaLabel',
  leftIcon: { icon: 'CHEVRON_LEFT' },
  onSelectTab: vi.fn(),
  rightControlAriaLabel: 'rightControlAriaLabel',
  rightIcon: { icon: 'ARROW_RIGHT' },
  tabs: tabs,
  variant: 'DEFAULT',
};

describe('Tabs component', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  it('Render', async () => {
    const { container } = render(<TabsUnControlled {...mockProps} />);

    const tab = screen.getByRole('tablist');

    expect(tab).toBeDefined();

    const results = await axe(container);
    // Disable style in line
    // It is necessary to add the transform style from the component to make the transition correctly
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('Initial tab is optional', () => {
    render(<TabsUnControlled {...mockProps} defaultSelectedTab={undefined} />);

    const tab = screen.getByRole('tablist');

    expect(tab).toBeDefined();
    expect(document.body).toHTMLValidate();
  });

  it('DataTestId is optional', () => {
    render(<TabsUnControlled {...mockProps} data-testid={undefined} />);

    const tab = screen.getByRole('tablist');
    expect(tab).toBeDefined();
    expect(document.body).toHTMLValidate();
  });

  it('allowFocusTabPanel can be set to false to avoid the TABPANEL to be focusable', () => {
    render(<TabsUnControlled {...mockProps} allowFocusTabPanel={false} />);

    const tabPanel = screen.getByRole('tabpanel');

    expect(tabPanel).toHaveAttribute('tabIndex', '-1');
    expect(document.body).toHTMLValidate();
  });

  it('Click on tab will change the content', () => {
    render(<TabsUnControlled {...mockProps} />);

    const tabToPress = 3;
    const tab = screen.getAllByRole('tab')[tabToPress];
    fireEvent.click(tab);
    const content = screen.getByText(mockProps.content?.[tabToPress] as string);
    expect(content).not.toBeNull();
    expect(document.body).toHTMLValidate();
  });

  it('When mobile, not visible tabs are disabled, but can be shown using the arrows', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    vi.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.MOBILE,
    );
    render(<TabsUnControlled {...mockProps} />);

    const tabToOver = 3;
    const tab = screen.getAllByRole('tab')[tabToOver];

    expect(tab).toBeDisabled();

    const rightArrow = screen.getByTestId('tab-icon-right');
    fireEvent.click(rightArrow);

    expect(tab).not.toBeDisabled();

    const leftArrow = screen.getByTestId('tab-icon-left');
    fireEvent.click(leftArrow);

    expect(tab).toBeDisabled();
    expect(document.body).toHTMLValidate();
  });

  it('When the number of tabs is less or equal MIN_TABS_IN_VIEW (default 2), the tabs are compact and the number of tabs in view will change (3 -> 2)', () => {
    const mockUseTabs = vi.fn();
    vi.spyOn(UseTabsUtils, 'useTabs').mockImplementation((args) => {
      mockUseTabs(args);
      return {
        focus: 0,
        handleClickIcon: () => ({}),
        handleClickTab: () => ({}),
        listEl: { current: null } as unknown as RefObject<HTMLLIElement>,
        position: 0,
      };
    });

    render(
      <TabsUnControlled
        {...mockProps}
        content={mockProps.content?.slice(0, 2)}
        tabs={mockProps.tabs?.slice(0, 2)}
      />,
    );
    expect(mockUseTabs).toHaveBeenCalledWith({
      numTabsInView: 2,
      selectedTab: 1,
      tabsLength: 2,
    });
    expect(document.body).toHTMLValidate();
  });

  it('does not render content when unMountContent is true and selectedTab is undefined', () => {
    render(<TabsUnControlled {...mockProps} unMountContent={true} />);
    expect(screen.queryByText('Tab 1 content')).toBeNull();
    expect(screen.queryByText('Tab 2 content')).toBeNull();
    expect(screen.queryByText('Tab 3 content')).toBeNull();
    expect(document.body).toHTMLValidate();
  });

  it('renders all tabs with correct display style when unMountContent is false ', () => {
    const { container } = render(
      <TabsControlled
        {...mockProps}
        defaultSelectedTab={1}
        unMountContent={false}
      />,
    );
    const tabsTest = container.querySelectorAll('[role="tabpanel"]');
    expect(tabsTest).toHaveLength(5);
    expect(tabsTest[0]).toHaveStyle('display: none');
    expect(tabsTest[1]).toHaveStyle('display: block');
    expect(tabsTest[2]).toHaveStyle('display: none');
    expect(tabsTest[3]).toHaveStyle('display: none');
    expect(tabsTest[4]).toHaveStyle('display: none');
    expect(document.body).toHTMLValidate();
  });
});
