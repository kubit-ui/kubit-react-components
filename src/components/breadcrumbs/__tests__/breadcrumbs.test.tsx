import { fireEvent, getAllByRole, getByRole, screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { Breadcrumbs } from '@/components/breadcrumbs/index';
import { BreadcrumbsStateType } from '@/components/breadcrumbs/types/state';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

const mockProps = {
  variant: 'DEFAULT',
  state: BreadcrumbsStateType.DEFAULT,
  dataTestIdBreadcrumb: 'breadcrumbs-component',
  ['aria-label']: 'navegación rápida',
  crumbs: [
    {
      name: 'Level A con un texto largo de más de 20 caracteres',
      url: '#',
      onClick: () => {
        alert('level A');
      },
    }, // Over 20 chars
    {
      name: 'Level B veinte chars',
      url: '#',
      onClick: () => {
        alert('level B');
      },
    }, // 20 chars
    {
      name: 'Level C con un texto largo de más de 20 caracteres',
      url: '#',
      onClick: () => {
        alert('level C');
      },
    }, // Over 20 chars
    {
      name: 'Level D',
      url: '#',
      onClick: () => {
        alert('level D');
      },
    },
    {
      name: 'Level E con un texto largo de más de 20 caracteres',
      url: '#',
      onClick: () => {
        alert('level E');
      },
    }, // Over 20 chars
  ],
  link: {
    variant: 'PRIMARY',
    textVariant: 'PARAGRAPH_CAPTION_EXTENDED',
  },
};

const mockEmptyProps = {
  variant: 'DEFAULT',
  dataTestId: 'breadcrumbsComponent',
  ['aria-label']: 'navegación rápida',
  crumbs: [
    {
      name: 'Level A con un texto largo de más de 20 caracteres',
      url: '#',
    }, // Over 20 chars
    {
      name: 'Level B veinte chars',
      url: '#',
    }, // 20 chars
    {
      name: 'Level C con un texto largo de más de 20 caracteres',
      url: '#',
    }, // Over 20 chars
    {
      name: 'Level D',
      url: '#',
    },
    {
      name: 'Level E con un texto largo de más de 20 caracteres',
      url: '#',
    }, // Over 20 chars
  ],
  link: {
    variant: 'PRIMARY',
    textVariant: 'PARAGRAPH_CAPTION_EXTENDED',
  },
};

describe('Breadcrumbs component', () => {
  test('should render Breadcrumbs component', async () => {
    const { container } = renderProvider(<Breadcrumbs {...mockProps} />);

    const breadcrumbs = screen.getByTestId('breadcrumbsComponentBreadcrumb');

    expect(breadcrumbs).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Breadcrumbs component without not mandatory props', async () => {
    const { container } = renderProvider(<Breadcrumbs {...mockEmptyProps} />);

    const breadcrumbs = screen.getByTestId('breadcrumbsComponentBreadcrumb');

    expect(breadcrumbs).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('it should render the correct number of crumbs', async () => {
    const crumbsLength = mockProps.crumbs.length;

    const { container } = renderProvider(<Breadcrumbs {...mockProps} />);

    const breadcrumbs = screen.getByTestId('breadcrumbsComponentBreadcrumb');

    const links = getAllByRole(breadcrumbs, ROLES.LISTITEM);

    expect(crumbsLength).toEqual(links.length);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('it should have an aria-label', async () => {
    const { container } = renderProvider(<Breadcrumbs {...mockProps} />);

    const breadcrumbs = screen.getByTestId('breadcrumbsComponentBreadcrumb');

    const nav = getByRole(breadcrumbs, ROLES.NAVIGATION);

    expect(nav).toHaveAttribute('aria-label');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('it should have an aria-current attribute on the last crumb', async () => {
    const crumbsLength = mockProps.crumbs.length;

    const { container } = renderProvider(<Breadcrumbs {...mockProps} />);

    const breadcrumbs = screen.getByTestId('breadcrumbsComponentBreadcrumb');

    const lastLi = getAllByRole(breadcrumbs, ROLES.LISTITEM)[crumbsLength - 1];

    expect(lastLi).toHaveAttribute('aria-current');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('onClick crumb adding overflow', async () => {
    const onClickCrumbMocked = jest.fn();
    //this is to add a overflow
    window.innerWidth = -1;
    const crumbsMocked = [
      ...mockProps.crumbs,
      {
        name: 'Level F',
        url: '#',
        onClick: onClickCrumbMocked,
        ariaLabel: 'Element F',
      },
      {
        name: 'Level G',
        url: '#',
        ariaLabel: 'Element G',
      },
    ];
    const { container } = renderProvider(<Breadcrumbs {...mockProps} crumbs={crumbsMocked} />);

    const lastLi = screen.getByText('Level F');
    fireEvent.click(lastLi);
    expect(onClickCrumbMocked).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  // Testing useEffect - Only change styles (filler test)
  test('CrumbStandAlone - when onMouseOver and onMouseLeave styles may change', async () => {
    const { getByTestId, container } = renderProvider(<Breadcrumbs {...mockProps} />);
    const crumb = getByTestId('breadcrumbsComponent0');

    fireEvent.mouseOver(crumb);
    fireEvent.mouseLeave(crumb);

    expect(crumb).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
