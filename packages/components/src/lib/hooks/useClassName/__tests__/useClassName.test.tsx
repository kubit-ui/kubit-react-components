import type { ReactNode } from 'react';

import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { StylesProvider } from '@/lib/provider/stylesProvider/stylesProvider';

import { useClassName } from '../useClassName';

// Mock getComponentStyles function
const mockGetComponentStyles = vi.fn();

// Mock Provider class for testing
class MockProvider {
  themeSelected = 'default';
  jsInCss = true;
  linkId = 'test-link';
  themes = ['default', 'dark'];

  constructor(config?: { jsInCss?: boolean; linkId?: string }) {
    if (config?.jsInCss !== undefined) {
      this.jsInCss = config.jsInCss;
    }
    if (config?.linkId) {
      this.linkId = config.linkId;
    }
  }

  getComponentStyles = mockGetComponentStyles;
  getImages = vi.fn().mockReturnValue({});
  injectStyles = vi.fn();
  changeTheme = vi.fn();
}

describe('useClassName', () => {
  const wrapper = ({ children }: { children: ReactNode }) => {
    return (
      // @ts-expect-error - MockProvider is used for testing purposes
      <StylesProvider bernovaProvider={MockProvider}>{children}</StylesProvider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call getComponentStyles with correct parameters', () => {
    mockGetComponentStyles.mockReturnValue({
      root: 'button-root',
      text: 'button-text',
    });

    const { result } = renderHook(
      () =>
        useClassName({
          component: 'BUTTON',
          variant: 'primary',
        }),
      { wrapper },
    );

    expect(mockGetComponentStyles).toHaveBeenCalledWith({
      component: 'BUTTON',
      variant: 'primary',
    });
    expect(result.current).toEqual({
      root: 'button-root',
      text: 'button-text',
    });
    expect(document.body).toHTMLValidate();
  });

  it('should call getComponentStyles without variant', () => {
    mockGetComponentStyles.mockReturnValue({
      container: 'avatar-container',
      image: 'avatar-image',
    });

    const { result } = renderHook(
      () =>
        useClassName({
          component: 'AVATAR',
        }),
      { wrapper },
    );

    expect(mockGetComponentStyles).toHaveBeenCalledWith({
      component: 'AVATAR',
      variant: '',
    });
    expect(result.current).toEqual({
      container: 'avatar-container',
      image: 'avatar-image',
    });
    expect(document.body).toHTMLValidate();
  });

  it('should call getComponentStyles with additionalClassNames', () => {
    mockGetComponentStyles.mockReturnValue({
      button: 'button-root custom-root',
      icon: 'button-icon custom-icon',
    });

    const { result } = renderHook(
      () =>
        useClassName({
          additionalClassNames: {
            button: 'custom-root',
            icon: 'custom-icon',
          } as unknown as Partial<never>,
          component: 'BUTTON',
          variant: 'secondary',
        }),
      { wrapper },
    );

    expect(mockGetComponentStyles).toHaveBeenCalledWith({
      additionalClassNames: {
        button: 'custom-root',
        icon: 'custom-icon',
      },
      component: 'BUTTON',
      variant: 'secondary',
    });
    expect(result.current).toEqual({
      button: 'button-root custom-root',
      icon: 'button-icon custom-icon',
    });
    expect(document.body).toHTMLValidate();
  });

  it('should handle empty additionalClassNames', () => {
    mockGetComponentStyles.mockReturnValue({
      wrapper: 'card-wrapper',
    });

    const { result } = renderHook(
      () =>
        useClassName({
          additionalClassNames: {},
          component: 'CARD',
        }),
      { wrapper },
    );

    expect(mockGetComponentStyles).toHaveBeenCalledWith({
      additionalClassNames: {},
      component: 'CARD',
      variant: '',
    });
    expect(result.current).toEqual({
      wrapper: 'card-wrapper',
    });
    expect(document.body).toHTMLValidate();
  });

  it('should return component styles for different components', () => {
    mockGetComponentStyles.mockReturnValue({
      badge: 'badge-root',
      content: 'badge-content',
    });

    const { result } = renderHook(
      () =>
        useClassName({
          component: 'BADGE',
          variant: 'success',
        }),
      { wrapper },
    );

    expect(mockGetComponentStyles).toHaveBeenCalledWith({
      component: 'BADGE',
      variant: 'success',
    });
    expect(result.current).toEqual({
      badge: 'badge-root',
      content: 'badge-content',
    });
    expect(document.body).toHTMLValidate();
  });

  it('should handle partial additionalClassNames', () => {
    mockGetComponentStyles.mockReturnValue({
      checkbox: 'checkbox-container',
      label: 'checkbox-label custom-label',
    });

    const { result } = renderHook(
      () =>
        useClassName({
          additionalClassNames: {
            label: 'custom-label',
          } as unknown as Partial<never>,
          component: 'CHECKBOX',
        }),
      { wrapper },
    );

    expect(mockGetComponentStyles).toHaveBeenCalledWith({
      additionalClassNames: {
        label: 'custom-label',
      },
      component: 'CHECKBOX',
      variant: '',
    });
    expect(result.current).toEqual({
      checkbox: 'checkbox-container',
      label: 'checkbox-label custom-label',
    });
    expect(document.body).toHTMLValidate();
  });

  it('should work with complex component names', () => {
    mockGetComponentStyles.mockReturnValue({
      container: 'breadcrumbs-container',
      item: 'breadcrumbs-item',
      separator: 'breadcrumbs-separator',
    });

    const { result } = renderHook(
      () =>
        useClassName({
          component: 'BREADCRUMBS',
          variant: 'compact',
        }),
      { wrapper },
    );

    expect(mockGetComponentStyles).toHaveBeenCalledWith({
      component: 'BREADCRUMBS',
      variant: 'compact',
    });
    expect(result.current).toEqual({
      container: 'breadcrumbs-container',
      item: 'breadcrumbs-item',
      separator: 'breadcrumbs-separator',
    });
    expect(document.body).toHTMLValidate();
  });

  it('should re-execute when parameters change', () => {
    mockGetComponentStyles
      .mockReturnValueOnce({
        root: 'button-primary',
      })
      .mockReturnValueOnce({
        root: 'button-secondary',
      });

    const { rerender, result } = renderHook(
      ({ variant }) =>
        useClassName({
          component: 'BUTTON',
          variant,
        }),
      {
        initialProps: { variant: 'primary' },
        wrapper,
      },
    );

    expect(result.current).toEqual({
      root: 'button-primary',
    });

    rerender({ variant: 'secondary' });

    expect(mockGetComponentStyles).toHaveBeenCalledTimes(2);
    expect(result.current).toEqual({
      root: 'button-secondary',
    });
    expect(document.body).toHTMLValidate();
  });

  it('should handle undefined variant gracefully', () => {
    mockGetComponentStyles.mockReturnValue({
      base: 'component-base',
    });

    const { result } = renderHook(
      () =>
        useClassName({
          component: 'BUTTON',
          variant: undefined,
        }),
      { wrapper },
    );

    expect(mockGetComponentStyles).toHaveBeenCalledWith({
      component: 'BUTTON',
      variant: '',
    });
    expect(result.current).toEqual({
      base: 'component-base',
    });
    expect(document.body).toHTMLValidate();
  });

  it('should handle multiple additionalClassNames keys', () => {
    mockGetComponentStyles.mockReturnValue({
      input: 'input-field custom-field',
      inputandlabelcontainer: 'input-container custom-container',
    });

    const { result } = renderHook(
      () =>
        useClassName({
          additionalClassNames: {
            input: 'custom-field',
            inputandlabelcontainer: 'custom-container',
          } as unknown as Partial<never>,
          component: 'INPUT',
        }),
      { wrapper },
    );

    expect(mockGetComponentStyles).toHaveBeenCalledWith({
      additionalClassNames: {
        input: 'custom-field',
        inputandlabelcontainer: 'custom-container',
      },
      component: 'INPUT',
      variant: '',
    });
    expect(result.current).toEqual({
      input: 'input-field custom-field',
      inputandlabelcontainer: 'input-container custom-container',
    });
    expect(document.body).toHTMLValidate();
  });
});
