import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType, ROLES } from '@/types';

import { FunctionalitiesModuleControlled } from '../functionalitiesModuleControlled';
import { FunctionalitiesModuleUnControlled } from '../functionalitiesModuleUnControlled';
import { IFunctionalitiesModuleUnControlled } from '../types';

window.matchMedia = windowMatchMedia();

const mockProps: IFunctionalitiesModuleUnControlled = {
  variant: 'DEFAULT_NO_ANIMATION',
  tabsConfig: {
    variant: 'DEFAULT',
  },
  sections: [
    {
      tab: { content: 'label1' },
      options: [
        {
          label: 'option 1',
          value: 1,
        },
        {
          label: 'option 2',
          disabled: true,
          value: 2,
        },
      ],
      optionsContent: <div>Content example</div>,
    },
    {
      tab: { content: 'label2' },
      options: [
        {
          label: 'option 1',
          value: 3,
        },
        {
          label: 'option 2',
          value: 56,
        },
        {
          label: 'option 3',
          value: 4,
        },
      ],
    },
  ],
  trigger: {
    content: 'Options',
    variant: 'PRIMARY',
    size: 'LARGE',
    icon: { icon: 'ICON_PLACEHOLDER' },
  },
  actionBottomSheet: {
    closeIcon: {
      icon: 'CLOSE_ICON',
      altText: 'ariaLabelCloseButton',
    },
  },
  dataTestId: 'functModules',
  onOptionClick: jest.fn(),
};

describe('FunctionalitiesModule component', () => {
  it('FunctionalitiesModule component', async () => {
    const { container } = renderProvider(
      <FunctionalitiesModuleUnControlled defaultSelectedValue={undefined} {...mockProps} />
    );

    const funcModule = screen.getByRole(ROLES.TABLIST);

    expect(funcModule).toBeDefined();
    const results = await axe(container);
    // Disable style in line because tabs
    // It is necessary to add the transform style from the component to make the transition correctly
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('should set the defaultSelectedValue when the defaultSelectedValue prop is passed', async () => {
    const optionSelected = 'option 1';

    const { container } = renderProvider(
      <FunctionalitiesModuleUnControlled
        defaultOpen={true}
        defaultSelectedValue={optionSelected}
        hasTitleSection={true}
        {...mockProps}
      />
    );

    const buttonOption1 = screen.getAllByRole(ROLES.MENUITEM, {
      name: 'option 1',
      hidden: true,
    })?.[0];
    expect(buttonOption1.textContent).toBe(optionSelected);

    const results = await axe(container);
    // Disable style in line because tabs
    // It is necessary to add the transform style from the component to make the transition correctly
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('should render tabs', async () => {
    const { container } = renderProvider(
      <FunctionalitiesModuleUnControlled
        defaultOpen={true}
        defaultSelectedValue={undefined}
        {...mockProps}
      />
    );

    const tab1 = screen.getByRole(ROLES.TAB, { name: 'label1' });
    const tab2 = screen.getByRole(ROLES.TAB, { name: 'label2' });

    expect(tab1.textContent).toBe(mockProps.sections?.[0].tab?.content as string);
    expect(tab2.textContent).toBe(mockProps.sections?.[1].tab?.content as string);

    const results = await axe(container);
    // Disable style in line because tabs
    // It is necessary to add the transform style from the component to make the transition correctly
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('onClick tab2', async () => {
    const mockOnSelectedTab = jest.fn();
    const { container } = renderProvider(
      <FunctionalitiesModuleUnControlled
        defaultOpen={true}
        defaultSelectedValue={undefined}
        {...mockProps}
        tabsConfig={{ ...mockProps.tabsConfig, onSelectTab: mockOnSelectedTab }}
      />
    );

    const tab2 = screen.getByRole(ROLES.TAB, { name: 'label2' });

    fireEvent.click(tab2);

    expect(mockOnSelectedTab).toHaveBeenCalled();

    const results = await axe(container);
    // Disable style in line because tabs
    // It is necessary to add the transform style from the component to make the transition correctly
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('FunctionalitiesModule, when onOptionClick prop, it should be called', async () => {
    const { container } = renderProvider(
      <FunctionalitiesModuleUnControlled
        defaultOpen={false}
        defaultSelectedValue={undefined}
        hasTitleSection={true}
        {...mockProps}
      />
    );
    const buttonOption1 = screen.getByRole(ROLES.MENUITEM, { name: 'option 1' });
    fireEvent.click(buttonOption1);
    expect(mockProps.onOptionClick).toHaveBeenCalled();

    const results = await axe(container);
    // Disable style in line because tabs
    // It is necessary to add the transform style from the component to make the transition correctly
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('FunctionalitiesModule, on mobile, button for openning the options should be pressent', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const { container } = renderProvider(
      <FunctionalitiesModuleControlled open={false} selectedValue={undefined} {...mockProps} />
    );

    const openMobileButton = screen.getByRole(ROLES.BUTTON, {
      name: mockProps.trigger?.content as string,
    });
    fireEvent.click(openMobileButton);

    const results = await axe(container);
    // Disable style in line because tabs
    // It is necessary to add the transform style from the component to make the transition correctly
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('onClick closeButton mobile', async () => {
    const defaultSelectedValue = 56;
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);

    const { container } = renderProvider(
      <FunctionalitiesModuleUnControlled
        defaultOpen={true}
        defaultSelectedValue={defaultSelectedValue}
        hasTitleSection={true}
        {...mockProps}
      />
    );

    const closeButton = screen.getByLabelText(
      mockProps.actionBottomSheet?.closeIcon?.altText as string
    );
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(closeButton).not.toBeInTheDocument();
    });
    const results = await axe(container);
    // Disable style in line because tabs
    // It is necessary to add the transform style from the component to make the transition correctly
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should execute onCloseInternally when Esc key is pressed', async () => {
    const defaultSelectedValue = 'option 1';
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);

    const { container } = renderProvider(
      <FunctionalitiesModuleUnControlled
        defaultOpen={true}
        defaultSelectedValue={defaultSelectedValue}
        {...mockProps}
      />
    );
    const closeButton = screen.getByLabelText(
      mockProps.actionBottomSheet?.closeIcon?.altText as string
    );

    expect(closeButton).toBeInTheDocument();
    await act(async () => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
      });
    });

    await waitFor(() => {
      expect(closeButton).not.toBeInTheDocument();
    });
    const results = await axe(container);
    // Disable style in line because tabs
    // It is necessary to add the transform style from the component to make the transition correctly
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });
});
