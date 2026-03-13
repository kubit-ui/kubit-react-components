import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { render } from '@/lib/tests/render/render';

import { CrumbStandAlone } from '../crumbStandAlone';

const crumb = {
  ariaLabel: 'Go to Home',
  name: 'Home',
  onClick: vi.fn(),
  url: '/home',
};

const mockCssProps = {
  breadcrumbs: '',
  crumb: '',
  icondivider: '',
  icondividercontainer: '',
  lastonecrumb: '',
  link: '',
  linkcontainer: '',
};

describe('CrumbStandAlone', () => {
  it('renderiza el último crumb como texto', () => {
    const { getByText } = render(
      <CrumbStandAlone
        lastCrumb
        crumb={crumb}
        cssClasses={{
          ...mockCssProps,
          lastonecrumb: 'last-crumb-class',
        }}
        data-testid="crumb"
        dividerIcon={{ icon: '' }}
        link={{}}
      />,
    );
    const text = getByText('Home');
    expect(text).toBeInTheDocument();
    expect(text.tagName.toLowerCase()).toBe('span');
    expect(text).toHaveClass('last-crumb-class');
  });

  it('renderiza un crumb como link cuando no es el último', () => {
    const { getByTestId } = render(
      <CrumbStandAlone
        crumb={crumb}
        cssClasses={{ ...mockCssProps, link: 'link-class' }}
        data-testid="crumb"
        lastCrumb={false}
        link={{}}
      />,
    );
    const link = getByTestId('breadcrumb-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/home');
    expect(link).toHaveClass('link-class');
  });

  it('llama a onClick del crumb al hacer click en el link', () => {
    const onClick = vi.fn();
    const crumbWithClick = { ...crumb, onClick };
    const { getByTestId } = render(
      <CrumbStandAlone
        crumb={crumbWithClick}
        data-testid="crumb"
        lastCrumb={false}
        link={{}}
      />,
    );
    const link = getByTestId('breadcrumb-link');
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalledWith('/home', expect.any(Object));
  });

  it('renderiza el icono de divisor', () => {
    const { container } = render(
      <CrumbStandAlone
        crumb={crumb}
        cssClasses={{
          ...mockCssProps,
          icondivider: 'divider-icon',
          icondividercontainer: 'divider-container',
        }}
        data-testid="crumb"
        dividerIcon={{ icon: 'test-icon' }}
        lastCrumb={false}
        link={{}}
      />,
    );
    const divider = container.querySelector('.divider-container');
    expect(divider).toBeInTheDocument();
    const icon = container.querySelector('.divider-icon');
    expect(icon).toBeInTheDocument();
  });
});
