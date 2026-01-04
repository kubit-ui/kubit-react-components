import { screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';

import { render as renderProvider } from '@/lib/tests/render/render';

import { NabVar } from '../navBar';
import { NavBarStandAlone } from '../navBarStandAlone';

describe('NavBar component', () => {
  it('should render with valid HTML structure and pass accessibility checks', async () => {
    const { container } = renderProvider(
      <NabVar
        centerItems={[<span key="center">Center Content</span>]}
        leftItems={[<button key="left">Left Button</button>]}
        rightItems={[
          <a key="right" href="/">
            Right Link
          </a>,
        ]}
      />,
    );

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('should render all items in correct sections', () => {
    renderProvider(
      <NabVar
        centerItems={[<span key="center">Center Content</span>]}
        leftItems={[<button key="left">Left Button</button>]}
        rightItems={[
          <a key="right" href="/">
            Right Link
          </a>,
        ]}
      />,
    );

    expect(screen.getByText('Left Button')).toBeInTheDocument();
    expect(screen.getByText('Center Content')).toBeInTheDocument();
    expect(screen.getByText('Right Link')).toBeInTheDocument();
  });

  it('should render with variant and additional classes', () => {
    const { container } = renderProvider(
      <NabVar
        additionalClasses={{ navbar: 'custom-navbar' }}
        leftItems={[<button key="left">Left</button>]}
        variant="primary"
      />,
    );

    const navbar = container.querySelector('.kbt-navbar');
    expect(navbar).toBeInTheDocument();
  });

  it('should forward ref correctly', () => {
    const ref = createRef<HTMLDivElement>();

    renderProvider(
      <NabVar ref={ref} leftItems={[<button key="left">Left</button>]} />,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should render with different component types', () => {
    const { container: headerContainer } = renderProvider(
      <NabVar
        component="header"
        leftItems={[<button key="left">Left</button>]}
      />,
    );
    expect(headerContainer.querySelector('header')).toBeInTheDocument();

    const { container: footerContainer } = renderProvider(
      <NabVar
        component="footer"
        leftItems={[<button key="left">Left</button>]}
      />,
    );
    expect(footerContainer.querySelector('footer')).toBeInTheDocument();

    const { container: navContainer } = renderProvider(
      <NabVar component="nav" leftItems={[<button key="left">Left</button>]} />,
    );
    expect(navContainer.querySelector('nav')).toBeInTheDocument();
  });

  it('should render with custom direction', () => {
    const { container } = renderProvider(
      <NabVar
        direction="vertical"
        leftItems={[<button key="left">Left</button>]}
      />,
    );

    const navbar = container.querySelector('.vertical');
    expect(navbar).toBeInTheDocument();
  });

  it('should render with custom focus order', () => {
    renderProvider(
      <NabVar
        centerItems={[<span key="center">Center</span>]}
        focusOrder={['right', 'center', 'left']}
        leftItems={[<button key="left">Left</button>]}
        rightItems={[
          <a key="right" href="/">
            Right
          </a>,
        ]}
      />,
    );

    const sections = screen
      .getByText('Left')
      .closest('.kbt-navbar')
      ?.querySelectorAll('[data-position]');
    expect(sections?.[0]).toHaveAttribute('data-position', 'right');
    expect(sections?.[1]).toHaveAttribute('data-position', 'center');
    expect(sections?.[2]).toHaveAttribute('data-position', 'left');
  });

  it('should handle empty sections gracefully', () => {
    const { container } = renderProvider(
      <NabVar leftItems={[<button key="left">Left Only</button>]} />,
    );

    expect(screen.getByText('Left Only')).toBeInTheDocument();
    expect(container.querySelectorAll('[data-position]')).toHaveLength(3);
  });
});

describe('NavBarStandAlone component', () => {
  it('should render with valid HTML structure', async () => {
    const { container } = renderProvider(
      <NavBarStandAlone
        centerItems={[<span key="center">Center Content</span>]}
        leftItems={[<button key="left">Left Button</button>]}
        rightItems={[
          <a key="right" href="/">
            Right Link
          </a>,
        ]}
      />,
    );

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('should render multiple items in each section', () => {
    renderProvider(
      <NavBarStandAlone
        centerItems={[
          <span key="center1">Center 1</span>,
          <span key="center2">Center 2</span>,
        ]}
        leftItems={[
          <button key="left1">Left 1</button>,
          <button key="left2">Left 2</button>,
        ]}
        rightItems={[
          <a key="right1" href="/">
            Right 1
          </a>,
          <a key="right2" href="/">
            Right 2
          </a>,
        ]}
      />,
    );

    expect(screen.getByText('Left 1')).toBeInTheDocument();
    expect(screen.getByText('Left 2')).toBeInTheDocument();
    expect(screen.getByText('Center 1')).toBeInTheDocument();
    expect(screen.getByText('Center 2')).toBeInTheDocument();
    expect(screen.getByText('Right 1')).toBeInTheDocument();
    expect(screen.getByText('Right 2')).toBeInTheDocument();
  });

  it('should apply custom CSS classes', () => {
    const { container } = renderProvider(
      <NavBarStandAlone
        cssClasses={{
          itemcontainer: 'custom-container',
          navbar: 'custom-navbar',
        }}
        leftItems={[<button key="left">Left</button>]}
      />,
    );

    expect(container.querySelector('.custom-navbar')).toBeInTheDocument();
    expect(container.querySelector('.custom-container')).toBeInTheDocument();
  });

  it('should pass data attributes correctly', () => {
    const { container } = renderProvider(
      <NavBarStandAlone
        data-custom="value"
        data-testid="navbar-test"
        leftItems={[<button key="left">Left</button>]}
      />,
    );

    const navbar = container.querySelector('[data-testid="navbar-test"]');
    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveAttribute('data-custom', 'value');
  });

  it('should render sections with correct data-position attributes', () => {
    const { container } = renderProvider(
      <NavBarStandAlone
        centerItems={[<span key="center">Center</span>]}
        leftItems={[<button key="left">Left</button>]}
        rightItems={[
          <a key="right" href="/">
            Right
          </a>,
        ]}
      />,
    );

    expect(
      container.querySelector('[data-position="left"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-position="center"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-position="right"]'),
    ).toBeInTheDocument();
  });

  it('should render with horizontal direction by default', () => {
    const { container } = renderProvider(
      <NavBarStandAlone leftItems={[<button key="left">Left</button>]} />,
    );

    expect(container.querySelector('.horizontal')).toBeInTheDocument();
  });

  it('should forward ref to custom component', () => {
    const ref = createRef<HTMLDivElement>();

    renderProvider(
      <NavBarStandAlone
        ref={ref}
        leftItems={[<button key="left">Left</button>]}
      />,
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should render only specified sections when others are undefined', () => {
    renderProvider(
      <NavBarStandAlone
        centerItems={[<span key="center">Center Only</span>]}
      />,
    );

    expect(screen.getByText('Center Only')).toBeInTheDocument();
  });

  it('should handle custom focus order correctly', () => {
    const { container } = renderProvider(
      <NavBarStandAlone
        centerItems={[<span key="center">Center</span>]}
        focusOrder={['center', 'left', 'right']}
        leftItems={[<button key="left">Left</button>]}
        rightItems={[
          <a key="right" href="/">
            Right
          </a>,
        ]}
      />,
    );

    const sections = container.querySelectorAll('[data-position]');
    expect(sections[0]).toHaveAttribute('data-position', 'center');
    expect(sections[1]).toHaveAttribute('data-position', 'left');
    expect(sections[2]).toHaveAttribute('data-position', 'right');
  });

  it('should render with nav component', () => {
    const { container } = renderProvider(
      <NavBarStandAlone
        component="nav"
        leftItems={[<button key="left">Left</button>]}
      />,
    );

    expect(container.querySelector('nav.kbt-navbar')).toBeInTheDocument();
  });
});
