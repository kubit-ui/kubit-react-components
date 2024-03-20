import { screen } from '@testing-library/react';
import * as React from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import { axe } from 'jest-axe';

import { UtilsProvider } from '@/provider';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { IllustrationHost } from '../illustrationHost';
import { Illustration } from '../index';

const mockBase = {
  width: '24px',
  height: '24px',
  illustration: 'ABIERTO',
  altText: 'text alternative',
};

describe('Illustration component', () => {
  it('should render an img', async () => {
    const { container } = renderProvider(<Illustration {...mockBase} />);
    const illustration = screen.getByRole(ROLES.IMG);

    const results = await axe(container);
    expect(illustration).toBeDefined();
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('should render a button when onClick function is provided', async () => {
    const { container } = renderProvider(<Illustration {...mockBase} onClick={jest.fn()} />);
    const illustration = screen.getByRole(ROLES.BUTTON);

    const results = await axe(container);
    expect(illustration).toBeDefined();
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('when no illustration nothing should be render', async () => {
    const { container } = renderProvider(<Illustration {...mockBase} illustration="" />);
    const illustration = screen.queryByRole('img');

    const results = await axe(container);
    expect(illustration).not.toBeInTheDocument();
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('IllustrationHost - when no context a local illustration is returned', async () => {
    const { getByRole, container } = renderProvider(
      <IllustrationHost altText="altText" illustration="TEST" />
    );

    const illustration = getByRole(ROLES.IMG);

    expect(illustration).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('IllustrationHost - when context is provided, illustration can be loaded from another host url, combining the style illustration name with the assets url', () => {
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
        <ThemeProvider theme={{ ILLUSTRATIONS_STYLES: { TEST: 'test.svg' } } as DefaultTheme}>
          <IllustrationHost altText="altText" illustration="TEST" />
        </ThemeProvider>
      </UtilsProvider>
    );

    const illustration = screen.getByRole(ROLES.IMG);

    expect(illustration).toBeInTheDocument();
  });

  it('IllustrationHost - when context is provided, illustration can be loaded from another host url, using just the illustration url if its a url', () => {
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
        <ThemeProvider theme={{ ILLUSTRATIONS_STYLES: {} } as DefaultTheme}>
          <IllustrationHost
            altText="altText"
            illustration="http://localhost:3000/assets/test.png"
          />
        </ThemeProvider>
      </UtilsProvider>
    );

    const illustration = screen.getByRole(ROLES.IMG);

    expect(illustration).toBeInTheDocument();
  });
});
