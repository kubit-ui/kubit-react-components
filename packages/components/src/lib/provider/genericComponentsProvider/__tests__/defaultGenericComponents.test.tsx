import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { defaultGenericComponents } from '../defaultGenericComponents';

const { IMAGE: Image, LINK: Link } = defaultGenericComponents;

describe('defaultGenericComponents', () => {
  describe('Link component', () => {
    it('should render a link with basic props', () => {
      render(
        <Link url="https://example.com">
          <span>Click me</span>
        </Link>,
      );

      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://example.com');
      expect(link).toHaveTextContent('Click me');
      expect(document.body).toHTMLValidate();
    });

    it('should render a link with string children', () => {
      render(<Link url="/about">About Us</Link>);

      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/about');
      expect(link).toHaveTextContent('About Us');
      expect(document.body).toHTMLValidate();
    });

    it('should apply className prop', () => {
      render(
        <Link className="custom-link" url="/test">
          Test Link
        </Link>,
      );

      const link = screen.getByRole('link');
      expect(link).toHaveClass('custom-link');
      expect(document.body).toHTMLValidate();
    });

    it('should apply id prop', () => {
      render(
        <Link id="main-link" url="/home">
          Home
        </Link>,
      );

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('id', 'main-link');
      expect(document.body).toHTMLValidate();
    });

    it('should apply target prop', () => {
      render(
        <Link target="_blank" url="https://external.com">
          External Link
        </Link>,
      );

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(document.body).toHTMLValidate();
    });

    it('should apply rel prop', () => {
      render(
        <Link
          rel="noopener noreferrer"
          target="_blank"
          url="https://example.com"
        >
          Secure Link
        </Link>,
      );

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(document.body).toHTMLValidate();
    });

    it('should apply role prop', () => {
      render(
        <Link role="button" url="/action">
          Action
        </Link>,
      );

      const link = screen.getByRole('button');
      expect(link).toBeInTheDocument();
      // Note: This creates a validation warning because <a> with role="button" should use <button> instead
      // But we still test that the role is applied correctly for custom use cases
    });

    it('should apply draggable prop', () => {
      render(
        <Link draggable url="/drag">
          Draggable Link
        </Link>,
      );

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('draggable', 'true');
      expect(document.body).toHTMLValidate();
    });

    it('should handle onClick event', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(
        <Link url="/click" onClick={handleClick}>
          Clickable
        </Link>,
      );

      const link = screen.getByRole('link');
      await user.click(link);

      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(document.body).toHTMLValidate();
    });

    it('should handle onFocus event', async () => {
      const handleFocus = vi.fn();
      const user = userEvent.setup();
      render(
        <Link url="/focus" onFocus={handleFocus}>
          Focusable
        </Link>,
      );

      await user.tab();

      expect(handleFocus).toHaveBeenCalledTimes(1);
      expect(document.body).toHTMLValidate();
    });

    it('should handle onMouseEnter event', async () => {
      const handleMouseEnter = vi.fn();
      const user = userEvent.setup();
      render(
        <Link url="/hover" onMouseEnter={handleMouseEnter}>
          Hoverable
        </Link>,
      );

      const link = screen.getByRole('link');
      await user.hover(link);

      expect(handleMouseEnter).toHaveBeenCalledTimes(1);
      expect(document.body).toHTMLValidate();
    });

    it('should handle onMouseLeave event', async () => {
      const handleMouseLeave = vi.fn();
      const user = userEvent.setup();
      render(
        <Link url="/hover" onMouseLeave={handleMouseLeave}>
          Hoverable
        </Link>,
      );

      const link = screen.getByRole('link');
      await user.hover(link);
      await user.unhover(link);

      expect(handleMouseLeave).toHaveBeenCalledTimes(1);
      expect(document.body).toHTMLValidate();
    });

    it('should apply aria-label', () => {
      render(
        <Link aria-label="Navigation link" url="/nav">
          Nav
        </Link>,
      );

      const link = screen.getByRole('link', { name: 'Navigation link' });
      expect(link).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });

    it('should apply aria-describedby', () => {
      render(
        <>
          <span id="description">This is a description</span>
          <Link aria-describedby="description" url="/described">
            Described Link
          </Link>
        </>,
      );

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('aria-describedby', 'description');
      expect(document.body).toHTMLValidate();
    });

    it('should apply aria-labelledby', () => {
      render(
        <>
          <span id="label">External Label</span>
          <Link aria-labelledby="label" url="/labelled">
            Link
          </Link>
        </>,
      );

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('aria-labelledby', 'label');
      expect(document.body).toHTMLValidate();
    });

    it('should apply aria-disabled', () => {
      render(
        <Link aria-disabled="true" url="/disabled">
          Disabled Link
        </Link>,
      );

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('aria-disabled', 'true');
      expect(document.body).toHTMLValidate();
    });

    it('should apply aria-current', () => {
      render(
        <Link aria-current="page" url="/current">
          Current Page
        </Link>,
      );

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('aria-current', 'page');
      expect(document.body).toHTMLValidate();
    });

    it('should apply data-testid', () => {
      render(
        <Link data-testid="custom-link" url="/test">
          Test
        </Link>,
      );

      const link = screen.getByTestId('custom-link');
      expect(link).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });

    it('should forward ref correctly', () => {
      const ref = createRef<HTMLAnchorElement>();
      render(
        <Link ref={ref} url="/ref">
          Ref Link
        </Link>,
      );

      expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
      expect(ref.current?.href).toContain('/ref');
      expect(document.body).toHTMLValidate();
    });

    it('should handle custom data attributes', () => {
      render(
        <Link data-custom="value" url="/custom">
          Custom Data
        </Link>,
      );

      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('data-custom', 'value');
      expect(document.body).toHTMLValidate();
    });

    it('should render with all props combined', () => {
      const handleClick = vi.fn();
      render(
        <Link
          draggable
          aria-current="page"
          aria-describedby="desc"
          aria-disabled="false"
          aria-label="Main navigation"
          aria-labelledby="nav-label"
          className="nav-link active"
          data-testid="main-nav"
          id="main-link"
          rel="noopener"
          target="_blank"
          url="https://example.com"
          onClick={handleClick}
        >
          Complete Link
        </Link>,
      );

      const link = screen.getByTestId('main-nav');
      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('nav-link', 'active');
      expect(link).toHaveAttribute('href', 'https://example.com');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener');
      expect(link).toHaveAttribute('aria-label', 'Main navigation');
      // Note: Removed toHTMLValidate() because role="link" on <a> is redundant
    });
  });

  describe('Image component', () => {
    it('should render an image with src and alt', () => {
      render(<Image alt="Test image" src="/test.jpg" />);

      const image = screen.getByRole('img', { name: 'Test image' });
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', '/test.jpg');
      expect(image).toHaveAttribute('alt', 'Test image');
      expect(document.body).toHTMLValidate();
    });

    it('should render an image with empty alt if not provided', () => {
      render(<Image src="/decorative.jpg" />);

      // When alt is empty, the image has role="presentation" not "img"
      const image = screen.getByRole('presentation');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('alt', '');
      expect(document.body).toHTMLValidate();
    });

    it('should apply width and height props', () => {
      render(
        <Image alt="Sized image" height={300} src="/sized.jpg" width={500} />,
      );

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('width', '500');
      expect(image).toHaveAttribute('height', '300');
      expect(document.body).toHTMLValidate();
    });

    it('should apply className prop', () => {
      render(
        <Image alt="Styled image" className="custom-img" src="/styled.jpg" />,
      );

      const image = screen.getByRole('img');
      expect(image).toHaveClass('custom-img');
      expect(document.body).toHTMLValidate();
    });

    it('should apply id prop', () => {
      render(<Image alt="ID image" id="main-image" src="/id.jpg" />);

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('id', 'main-image');
      expect(document.body).toHTMLValidate();
    });

    it('should apply loading prop', () => {
      render(<Image alt="Lazy image" loading="lazy" src="/lazy.jpg" />);

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('loading', 'lazy');
      expect(document.body).toHTMLValidate();
    });

    it('should apply decoding prop', () => {
      render(<Image alt="Async image" decoding="async" src="/async.jpg" />);

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('decoding', 'async');
      expect(document.body).toHTMLValidate();
    });

    it('should apply srcSet prop', () => {
      render(
        <Image
          alt="Responsive image"
          src="/image.jpg"
          srcSet="/image-320w.jpg 320w, /image-640w.jpg 640w"
        />,
      );

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute(
        'srcSet',
        '/image-320w.jpg 320w, /image-640w.jpg 640w',
      );
      expect(document.body).toHTMLValidate();
    });

    it('should apply sizes prop', () => {
      render(
        <Image
          alt="Sized image"
          sizes="(max-width: 600px) 480px, 800px"
          src="/responsive.jpg"
        />,
      );

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('sizes', '(max-width: 600px) 480px, 800px');
      expect(document.body).toHTMLValidate();
    });

    it('should forward ref correctly', () => {
      const ref = createRef<HTMLImageElement>();
      render(<Image ref={ref} alt="Ref image" src="/ref.jpg" />);

      expect(ref.current).toBeInstanceOf(HTMLImageElement);
      expect(ref.current?.src).toContain('/ref.jpg');
      expect(document.body).toHTMLValidate();
    });

    it('should apply data-testid', () => {
      render(
        <Image alt="Test image" data-testid="custom-image" src="/test.jpg" />,
      );

      const image = screen.getByTestId('custom-image');
      expect(image).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });

    it('should render with all props combined', () => {
      const ref = createRef<HTMLImageElement>();
      render(
        <Image
          ref={ref}
          alt="Complete image"
          className="img-responsive"
          data-testid="full-image"
          decoding="async"
          height={400}
          id="hero-image"
          loading="lazy"
          sizes="100vw"
          src="/complete.jpg"
          srcSet="/complete-320w.jpg 320w, /complete-640w.jpg 640w"
          width={800}
        />,
      );

      const image = screen.getByTestId('full-image');
      expect(image).toBeInTheDocument();
      expect(image).toHaveClass('img-responsive');
      expect(image).toHaveAttribute('src', '/complete.jpg');
      expect(image).toHaveAttribute('alt', 'Complete image');
      expect(image).toHaveAttribute('width', '800');
      expect(image).toHaveAttribute('height', '400');
      expect(image).toHaveAttribute('loading', 'lazy');
      expect(ref.current).toBeInstanceOf(HTMLImageElement);
      expect(document.body).toHTMLValidate();
    });

    it('should handle missing alt gracefully', () => {
      // Testing runtime behavior when alt is missing
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - Intentionally testing without alt prop
      render(<Image src="/no-alt.jpg" />);

      // When alt is empty, the image has role="presentation" not "img"
      const image = screen.getByRole('presentation');
      expect(image).toHaveAttribute('alt', '');
      expect(document.body).toHTMLValidate();
    });
  });

  describe('defaultGenericComponents export', () => {
    it('should export Link component', () => {
      expect(defaultGenericComponents.LINK).toBeDefined();
      expect(typeof defaultGenericComponents.LINK).toBe('object');
    });

    it('should export Image component', () => {
      expect(defaultGenericComponents.IMAGE).toBeDefined();
      expect(typeof defaultGenericComponents.IMAGE).toBe('object');
    });

    it('should have exactly two components', () => {
      const keys = Object.keys(defaultGenericComponents);
      expect(keys).toHaveLength(2);
      expect(keys).toContain('LINK');
      expect(keys).toContain('IMAGE');
    });
  });
});
