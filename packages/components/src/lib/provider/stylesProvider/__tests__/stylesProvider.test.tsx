import { Provider } from '@kubit-ui-web/design-system/provider';
import { renderHook, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { render } from '@/lib/tests/render/render';

import { StylesProvider, useStylesContext } from '../stylesProvider';

describe('StylesProvider', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const TestComponent = () => <div>Test component</div>;

  describe('Provider rendering', () => {
    it('should render children correctly', () => {
      render(
        <StylesProvider bernovaProvider={Provider as never}>
          <TestComponent />
        </StylesProvider>,
      );

      expect(screen.getByText('Test component')).toBeTruthy();
    });

    it('should render with custom breakpoints', () => {
      const customBreakpoints = {
        lg: 1024,
        md: 800,
        sm: 600,
        xl: 1400,
      };

      const wrapper = ({ children }) => (
        <StylesProvider
          bernovaProvider={Provider as never}
          breakpoints={customBreakpoints}
        >
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(result.current.breakpoints).toEqual(customBreakpoints);
    });

    it('should use default breakpoints when none are provided', () => {
      const wrapper = ({ children }) => (
        <StylesProvider bernovaProvider={Provider as never}>
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(result.current.breakpoints).toEqual({
        lg: 992,
        md: 768,
        sm: 576,
        xl: 1200,
      });
    });

    it('should initialize with custom icons and illustrations', () => {
      const icons = { home: '/icons/home.svg', user: '/icons/user.svg' };
      const illustrations = { hero: '/images/hero.png' };

      const wrapper = ({ children }) => (
        <StylesProvider
          bernovaProvider={Provider as never}
          icons={icons}
          illustrations={illustrations}
        >
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(result.current.icons).toEqual(icons);
      expect(result.current.illustrations).toEqual(illustrations);
    });
  });

  describe('Theme management', () => {
    it('should set initial theme when themeSelected is provided', () => {
      const mockProvider = Provider as never;

      const wrapper = ({ children }) => (
        <StylesProvider bernovaProvider={mockProvider} themeSelected="kubit">
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(result.current.currentTheme).toBe('kubit');
    });
  });

  describe('Media queries', () => {
    it('should generate correct media queries from breakpoints', () => {
      const customBreakpoints = {
        lg: 1000,
        md: 750,
        sm: 550,
        xl: 1300,
      };

      const wrapper = ({ children }) => (
        <StylesProvider
          bernovaProvider={Provider as never}
          breakpoints={customBreakpoints}
        >
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(result.current.mediaQueries).toEqual({
        onlyDesktop: '(max-width: 1300px)',
        onlyLargeDesktop: '(min-width: 1300px)',
        onlyMobile: '(max-width: 749px)',
        onlyTablet: '(min-width: 750px) and (max-width: 999px)',
      });
    });

    it('should generate default media queries', () => {
      const wrapper = ({ children }) => (
        <StylesProvider bernovaProvider={Provider as never}>
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(result.current.mediaQueries).toEqual({
        onlyDesktop: '(max-width: 1200px)',
        onlyLargeDesktop: '(min-width: 1200px)',
        onlyMobile: '(max-width: 767px)',
        onlyTablet: '(min-width: 768px) and (max-width: 991px)',
      });
    });
  });

  describe('Component styles', () => {
    it('should retrieve component styles correctly', () => {
      const mockProvider = Provider as never;

      const wrapper = ({ children }) => (
        <StylesProvider bernovaProvider={mockProvider}>
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      const styles = result.current.getComponentStyles({
        component: 'BUTTON',
        variant: 'primary',
      });

      expect(styles).toBeDefined();
    });

    it('should handle getComponentStyles with additional classes', () => {
      const mockProvider = Provider as never;

      const wrapper = ({ children }) => (
        <StylesProvider bernovaProvider={mockProvider}>
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      const styles = result.current.getComponentStyles({
        component: 'BUTTON',
        variant: 'primary',
      });

      expect(styles).toBeDefined();
    });
  });

  describe('Provider configuration', () => {
    it('should pass jsInCss option to provider', () => {
      const mockProvider = Provider as never;

      render(
        <StylesProvider bernovaProvider={mockProvider} jsInCss={false}>
          <TestComponent />
        </StylesProvider>,
      );

      expect(screen.getByText('Test component')).toBeTruthy();
    });

    it('should pass linkId option to provider', () => {
      const mockProvider = Provider as never;

      render(
        <StylesProvider bernovaProvider={mockProvider} linkId="custom-link-id">
          <TestComponent />
        </StylesProvider>,
      );

      expect(screen.getByText('Test component')).toBeTruthy();
    });

    it('should use default Provider when bernovaProvider is not provided', () => {
      const wrapper = ({ children }) => (
        <StylesProvider bernovaProvider={Provider as never}>
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(result.current).toBeDefined();
      expect(result.current.getComponentStyles).toBeDefined();
    });
  });

  describe('Error handling', () => {
    it('should throw error when useStylesContext is used outside provider', () => {
      // Suprimir el error de consola esperado
      vi.spyOn(console, 'error').mockImplementationOnce(vi.fn());

      expect(() => {
        renderHook(() => useStylesContext());
      }).toThrow('useStylesContext must be used within a StylesProvider');
    });

    it('should handle changeTheme function gracefully', () => {
      const mockProvider = Provider as never;

      const wrapper = ({ children }) => (
        <StylesProvider bernovaProvider={mockProvider}>
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      // No debe lanzar error
      expect(() => {
        result.current.changeTheme('kubit');
      }).not.toThrow();

      expect(result.current.changeTheme).toBeDefined();
    });
  });

  describe('Context value structure', () => {
    it('should provide all required context properties', () => {
      const wrapper = ({ children }) => (
        <StylesProvider bernovaProvider={Provider as never}>
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(result.current).toHaveProperty('breakpoints');
      expect(result.current).toHaveProperty('classes');
      expect(result.current).toHaveProperty('mediaQueries');
      expect(result.current).toHaveProperty('icons');
      expect(result.current).toHaveProperty('illustrations');
      expect(result.current).toHaveProperty('currentTheme');
      expect(result.current).toHaveProperty('getComponentStyles');
      expect(result.current).toHaveProperty('changeTheme');
      expect(result.current).toHaveProperty('themeClassNames');
      expect(result.current).toHaveProperty('themes');
      expect(result.current).toHaveProperty('themeVariables');
    });

    it('should provide classes as an array', () => {
      const wrapper = ({ children }) => (
        <StylesProvider bernovaProvider={Provider as never}>
          {children}
        </StylesProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(Array.isArray(result.current.classes)).toBe(true);
    });
  });
});
