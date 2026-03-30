import {
  fireEvent,
  getAllByRole,
  getByRole,
  screen,
} from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';
import { STATES } from '@/lib/types/states/states';

import { BreadCrumbs } from '../breadcrumbs';

const mockProps = {
  ['aria-label']: 'navegación rápida',
  crumbs: [
    {
      name: 'Level A con un texto largo de más de 20 caracteres',
      onClick: vi.fn(),
      url: '#',
    }, // Over 20 chars
    {
      name: 'Level B veinte chars',
      onClick: vi.fn(),
      url: '#',
    }, // 20 chars
    {
      name: 'Level C con un texto largo de más de 20 caracteres',
      onClick: vi.fn(),
      url: '#',
    }, // Over 20 chars
    {
      name: 'Level D',
      onClick: vi.fn(),
      url: '#',
    },
    {
      name: 'Level E con un texto largo de más de 20 caracteres',
      onClick: vi.fn(),
      url: '#',
    }, // Over 20 chars
  ],
  dataTestIdBreadcrumb: 'breadcrumbs',
  link: {
    textVariant: 'PARAGRAPH_CAPTION_EXTENDED',
    variant: 'PRIMARY',
  },
  state: STATES.DEFAULT,
  variant: 'DEFAULT',
};

const mockEmptyProps = {
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
    textVariant: 'PARAGRAPH_CAPTION_EXTENDED',
    variant: 'PRIMARY',
  },
  variant: 'DEFAULT',
};

describe('BreadCrumbs component', () => {
  it('should render BreadCrumbs component', async () => {
    const { container } = render(<BreadCrumbs {...mockProps} />);

    const breadcrumbs = screen.getByTestId('breadcrumbs');

    expect(breadcrumbs).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('BreadCrumbs component without not mandatory props', async () => {
    const { container } = render(<BreadCrumbs {...mockEmptyProps} />);

    const breadcrumbs = screen.getByTestId('breadcrumbs');

    expect(breadcrumbs).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('should render the correct number of crumbs', async () => {
    const crumbsLength = mockProps.crumbs.length;

    const { container } = render(<BreadCrumbs {...mockProps} />);

    const breadcrumbs = screen.getByTestId('breadcrumbs');

    const links = getAllByRole(breadcrumbs, 'listitem');

    expect(crumbsLength).toEqual(links.length);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('should have an aria-label', async () => {
    const { container } = render(<BreadCrumbs {...mockProps} />);

    const breadcrumbs = screen.getByTestId('breadcrumbs');

    const nav = getByRole(breadcrumbs, 'navigation');

    expect(nav).toHaveAttribute('aria-label');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('should have an aria-current attribute on the last crumb', async () => {
    const crumbsLength = mockProps.crumbs.length;

    const { container } = render(<BreadCrumbs {...mockProps} />);

    const breadcrumbs = screen.getByTestId('breadcrumbs');

    const lastLi = getAllByRole(breadcrumbs, 'listitem')[crumbsLength - 1];

    expect(lastLi).toHaveAttribute('aria-current');

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('onClick crumb adding overflow', async () => {
    const onClickCrumbMocked = vi.fn();
    //this is to add a overflow
    window.innerWidth = -1;
    const crumbsMocked = [
      ...mockProps.crumbs,
      {
        ariaLabel: 'Element F',
        name: 'Level F',
        onClick: onClickCrumbMocked,
        url: '#',
      },
      {
        ariaLabel: 'Element G',
        name: 'Level G',
        url: '#',
      },
    ];
    const { container } = render(
      <BreadCrumbs {...mockProps} crumbs={crumbsMocked} />,
    );

    const lastLi = screen.getByText('Level F');
    fireEvent.click(lastLi);
    expect(onClickCrumbMocked).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  // Testing useEffect - Only change styles (filler test)
  it('CrumbStandAlone - when onMouseOver and onMouseLeave styles may change', async () => {
    const { container, getByTestId } = render(<BreadCrumbs {...mockProps} />);
    const crumb = getByTestId('breadcrumbs-0');

    fireEvent.mouseOver(crumb);
    fireEvent.mouseLeave(crumb);

    expect(crumb).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
