import React from 'react';

import { axe } from 'jest-axe';

import { Button } from '@/components/button/button';
import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';

import { windowMatchMedia } from '../../../tests/windowMatchMedia/windowMatchMedia';
import { FooterPositionType } from '../../footer/types/position';
import { LinkActionType } from '../../link/types/action';
import { Header } from '../header';

const mockProps = {
  variant: 'DEFAULT',
  children: [
    <Button key={1} data-position={FooterPositionType.LEFT} size="LARGE" variant="PRIMARY">
      Tertiary
    </Button>,
    <Button key={2} data-position={FooterPositionType.LEFT} size="LARGE" variant="PRIMARY">
      Secondary
    </Button>,
    <Button key={3} data-position={FooterPositionType.LEFT} size="LARGE" variant="PRIMARY">
      Primary
    </Button>,
    <Button key={4} data-position={FooterPositionType.RIGHT} size="LARGE" variant="PRIMARY">
      Right
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
      variant: 'PRIMARY',
      textVariant: 'DEFAULT',
      action: LinkActionType.NAVIGATION,
    },
    iconDivider: {
      icon: 'CHEVRON_RIGHT',
    },
    ['aria-label']: 'Navigation',
  },
};

describe('Header Component', () => {
  it('Should render Header with breadcrumbs in Desktop device', async () => {
    const { getByRole, container } = renderProvider(<Header {...mockProps} />);

    const button = getByRole('navigation', { name: /Navigation/i });

    expect(button).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render Header without breadcrumbs in Mobile or Tablet device', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const { queryByRole, container } = renderProvider(<Header {...mockProps} />);

    const button = queryByRole('navigation', { name: /Navigation/i });

    expect(button).toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
