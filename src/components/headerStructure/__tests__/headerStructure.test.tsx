import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { Button } from '@/components/button';
import { LinkActionType } from '@/components/link';
import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType } from '@/types';

import { HeaderStructure } from '../headerStructure';
import { HeaderStructureContentPositionType } from '../types';

window.matchMedia = windowMatchMedia();

const mockProps = {
  variant: 'DEFAULT',
  children: [
    <Button
      key={1}
      data-position={HeaderStructureContentPositionType.LEFT}
      size="LARGE"
      variant="PRIMARY"
    >
      Tertiary
    </Button>,
    <Button
      key={2}
      data-position={HeaderStructureContentPositionType.LEFT}
      size="LARGE"
      variant="PRIMARY"
    >
      Secondary
    </Button>,
    <Button
      key={3}
      data-position={HeaderStructureContentPositionType.LEFT}
      size="LARGE"
      variant="PRIMARY"
    >
      Primary
    </Button>,
  ],
  crumbs: [
    {
      name: 'Level A',
      url: 'https://google.com',
    },
    {
      name: 'Level B veinte chars',
      url: '#',
    },
    {
      name: 'Level C',
      url: '#',
    },
    {
      name: 'Level D',
      url: '#',
    },
    {
      name: 'Level E',
      url: '#',
    },
  ],
  configBreadcrumbs: {
    variant: 'DEFAULT',
    link: {
      variant: LinkActionType.NAVIGATION,
      textVariant: 'DEFAULT',
    },
    iconDivider: {
      variant: 'CHEVRON_RIGHT',
      altText: 'icon divider',
    },
    ['aria-label']: 'Navigation',
    dataTestId: 'breadcrumbs',
  },
};

describe('HeaderStructure Component', () => {
  it('Should render Header with breadcrumbs in Desktop device', async () => {
    const { container } = renderProvider(<HeaderStructure {...mockProps} />);

    const button = screen.getByRole('navigation', { name: /Navigation/i });

    expect(button).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render Header without breadcrumbs in Mobile or Tablet device', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const { container } = renderProvider(<HeaderStructure {...mockProps} />);

    const button = screen.queryByRole('navigation', { name: /Navigation/i });

    expect(button).toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Breadcrumb, link and text variant are optional', async () => {
    const { container } = renderProvider(
      <HeaderStructure
        {...mockProps}
        configBreadcrumbs={{
          ...mockProps.configBreadcrumbs,
          link: undefined,
        }}
        dataTestId="testId"
      />
    );

    const header = screen.getByTestId('testIdHeader');

    expect(header).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
