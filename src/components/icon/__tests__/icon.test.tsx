import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import { axe } from 'jest-axe';

import { UtilsProvider } from '@/provider';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { ROLES } from '@/types';

import { IconBasic } from '../icon';
import { IconHost } from '../iconHost';

window.matchMedia = windowMatchMedia();

const mockProps = {
  icon: 'CLOSE',
  altText: 'icon alt text',
  width: '30px',
  height: '30px',
  ['aria-label']: 'ariaLabel',
};

describe('Icon Component', () => {
  it('Should render Icon component as an img', async () => {
    const { getByRole, container } = renderProvider(<IconBasic {...mockProps} />);

    const icon = getByRole(ROLES.IMG);

    expect(icon).toBeInTheDocument();
    expect(icon.tagName.toLowerCase()).toBe('img');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render Icon component as an svg when color', async () => {
    const { getByRole, container } = renderProvider(<IconBasic {...mockProps} color="red" />);

    const icon = getByRole(ROLES.IMG);

    expect(icon).toBeInTheDocument();
    expect(icon.tagName.toLowerCase()).toBe('svg');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render Icon component as a button when onClick prop', async () => {
    const mockOnClick = jest.fn();
    const { getByRole, container } = renderProvider(
      <IconBasic {...mockProps} onClick={mockOnClick} />
    );

    const iconAsButton = getByRole(ROLES.BUTTON);
    expect(iconAsButton).toBeInTheDocument();

    fireEvent.click(iconAsButton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('If there is no icon, should return nothing', async () => {
    const { queryByAltText, container } = renderProvider(<IconBasic {...mockProps} icon={''} />);

    const icon = queryByAltText(mockProps.altText);
    expect(icon).toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('Return an icon complex', async () => {
    const { getByRole, container } = renderProvider(<IconBasic {...mockProps} complex={true} />);

    const iconComplex = getByRole(ROLES.IMG);
    expect(iconComplex).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('IconHost - when no context a local icon is return', async () => {
    const { getByRole, container } = renderProvider(<IconHost {...mockProps} />);

    const icon = getByRole(ROLES.IMG);

    expect(icon).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('IconHost - when context is provided, icon can be loaded from another host url, combining the style icon name with the assets url', () => {
    renderProvider(
      <UtilsProvider
        assets={{
          baseHost: 'http://localhost:3000/assets',
          iconsBaseHost: 'http://localhost:3000/assets',
          illutrationsBaseHost: 'http://localhost:3000/assets',
          imagesBaseHost: 'http://localhost:3000/assets',
        }}
        dateHelpers={{
          getSubDays: jest.fn(),
          getSubMonths: jest.fn(),
          getSubYears: jest.fn(),
          getAddMonths: jest.fn(),
          getAddDays: jest.fn(),
          getAddYears: jest.fn(),
          getAllMonthName: jest.fn(),
          getAllWeekdayName: jest.fn(),
          isBefore: jest.fn(),
          isAfter: jest.fn(),
          isDatesEqual: jest.fn(),
        }}
        formatDate={jest.fn()}
        transformDate={jest.fn()}
      >
        <ThemeProvider theme={{ ICONS_STYLES: { TEST: 'test.svg' } } as DefaultTheme}>
          <IconHost altText="altText" icon="TEST" />
        </ThemeProvider>
      </UtilsProvider>
    );

    const icon = screen.getByRole(ROLES.IMG);

    expect(icon).toBeInTheDocument();
  });

  it('IconHost - when context is provided, icon can be loaded from another host url, using just the icon url if its a url', () => {
    renderProvider(
      <UtilsProvider
        assets={{
          baseHost: 'http://localhost:3000/assets',
          iconsBaseHost: 'http://localhost:3000/assets',
          illutrationsBaseHost: 'http://localhost:3000/assets',
          imagesBaseHost: 'http://localhost:3000/assets',
        }}
        dateHelpers={{
          getSubDays: jest.fn(),
          getSubMonths: jest.fn(),
          getSubYears: jest.fn(),
          getAddMonths: jest.fn(),
          getAddDays: jest.fn(),
          getAddYears: jest.fn(),
          getAllMonthName: jest.fn(),
          getAllWeekdayName: jest.fn(),
          isBefore: jest.fn(),
          isAfter: jest.fn(),
          isDatesEqual: jest.fn(),
        }}
        formatDate={jest.fn()}
        transformDate={jest.fn()}
      >
        <ThemeProvider theme={{ ICONS_STYLES: {} } as DefaultTheme}>
          <IconHost altText="altText" icon="http://localhost:3000/assets/test.svg" />
        </ThemeProvider>
      </UtilsProvider>
    );

    const icon = screen.getByRole(ROLES.IMG);

    expect(icon).toBeInTheDocument();
  });
});
