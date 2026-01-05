import type { ReactNode } from 'react';

import { renderHook, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { render } from '@/lib/tests/render/render';

import { useGenericComponents } from '../../genericComponentsProvider/genericComponentsProvider';
import { useStylesContext } from '../../stylesProvider/stylesProvider';
import { useUtilsProvider } from '../../utilsProvider/utilsProvider';
import { KubitProvider } from '../kubitProvider';

// Mock complete dateHelpers object
const mockDateHelpers = {
  getAddDays: vi.fn(),
  getAddMonths: vi.fn(),
  getAddYears: vi.fn(),
  getAllMonthName: vi.fn(),
  getAllWeekdayName: vi.fn(),
  getSubDays: vi.fn(),
  getSubMonths: vi.fn(),
  getSubYears: vi.fn(),
  isAfter: vi.fn(),
  isBefore: vi.fn(),
  isDatesEqual: vi.fn(),
};

describe('KubitProvider', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  const TestComponent = () => <div>Test component</div>;

  describe('Basic rendering', () => {
    it('should render children correctly', () => {
      render(
        <KubitProvider>
          <TestComponent />
        </KubitProvider>,
      );

      expect(screen.getByText('Test component')).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });

    it('should render without children', () => {
      const { container } = render(<KubitProvider />);

      expect(container).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });

    it('should render multiple children', () => {
      render(
        <KubitProvider>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </KubitProvider>,
      );

      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
      expect(screen.getByText('Child 3')).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });
  });

  describe('UtilsProvider integration', () => {
    it('should provide utils context to children', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      expect(result.current.formatDate).toBeDefined();
      expect(result.current.transformDate).toBeDefined();
      expect(result.current.dateHelpers).toBeDefined();
    });

    it('should provide date helpers', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      expect(result.current.dateHelpers.getAddDays).toBeDefined();
      expect(result.current.dateHelpers.getAddMonths).toBeDefined();
      expect(result.current.dateHelpers.getAddYears).toBeDefined();
      expect(result.current.dateHelpers.getAllMonthName).toBeDefined();
      expect(result.current.dateHelpers.getAllWeekdayName).toBeDefined();
      expect(result.current.dateHelpers.getSubDays).toBeDefined();
      expect(result.current.dateHelpers.getSubMonths).toBeDefined();
      expect(result.current.dateHelpers.getSubYears).toBeDefined();
      expect(result.current.dateHelpers.isAfter).toBeDefined();
      expect(result.current.dateHelpers.isBefore).toBeDefined();
      expect(result.current.dateHelpers.isDatesEqual).toBeDefined();
    });

    it('should execute formatDate correctly', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const testDate = new Date('2024-01-15');
      const formatted = result.current.formatDate(testDate, 'yyyy-MM-dd');

      expect(formatted).toBe('2024-01-15');
    });

    it('should execute transformDate correctly', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const transformed = result.current.transformDate('2024-01-15');

      expect(transformed).toBeInstanceOf(Date);
    });

    it('should execute date helper getAddDays', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const date = new Date('2024-01-15');
      const newDate = result.current.dateHelpers.getAddDays(date, 5);

      expect(newDate.getDate()).toBe(20);
    });

    it('should execute date helper getSubDays', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const date = new Date('2024-01-15');
      const newDate = result.current.dateHelpers.getSubDays(date, 5);

      expect(newDate.getDate()).toBe(10);
    });

    it('should execute date helper isAfter', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const date1 = new Date('2024-01-20');
      const date2 = new Date('2024-01-15');
      const isAfterResult = result.current.dateHelpers.isAfter(date1, date2);

      expect(isAfterResult).toBe(true);
    });

    it('should execute date helper isBefore', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const date1 = new Date('2024-01-10');
      const date2 = new Date('2024-01-15');
      const isBeforeResult = result.current.dateHelpers.isBefore(date1, date2);

      expect(isBeforeResult).toBe(true);
    });

    it('should execute date helper isDatesEqual', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const date1 = new Date('2024-01-15');
      const date2 = new Date('2024-01-15');
      const areEqual = result.current.dateHelpers.isDatesEqual(
        date1,
        date2,
        false,
      );

      expect(areEqual).toBe(true);
    });

    it('should execute date helper getSubYears', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const date = new Date('2024-01-15');
      const newDate = result.current.dateHelpers.getSubYears(date, 2);

      expect(newDate.getFullYear()).toBe(2022);
    });

    it('should execute date helper getAddYears', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const date = new Date('2024-01-15');
      const newDate = result.current.dateHelpers.getAddYears(date, 2);

      expect(newDate.getFullYear()).toBe(2026);
    });

    it('should execute date helper getSubMonths', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const date = new Date('2024-03-15');
      const newDate = result.current.dateHelpers.getSubMonths(date, 2);

      expect(newDate.getMonth()).toBe(0); // January (0-indexed)
    });

    it('should execute date helper getAddMonths', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const date = new Date('2024-01-15');
      const newDate = result.current.dateHelpers.getAddMonths(date, 2);

      expect(newDate.getMonth()).toBe(2); // March (0-indexed)
    });

    it('should execute date helper getAllWeekdayName', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const weekdays = result.current.dateHelpers.getAllWeekdayName(
        'long',
        false,
        'en-US',
      );

      expect(weekdays).toBeDefined();
      expect(Array.isArray(weekdays)).toBe(true);
      expect(weekdays.length).toBe(7);
    });

    it('should execute date helper getAllMonthName', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const months = result.current.dateHelpers.getAllMonthName(
        'long',
        'en-US',
      );

      expect(months).toBeDefined();
      expect(Array.isArray(months)).toBe(true);
      expect(months.length).toBe(12);
    });

    it('should allow custom utilsConfig override', () => {
      const customFormatDate = vi.fn().mockReturnValue('custom-format');

      const customUtilsConfig = {
        dateHelpers: mockDateHelpers,
        formatDate: customFormatDate,
        transformDate: vi.fn(),
      };

      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider utilsConfig={customUtilsConfig}>
          {children}
        </KubitProvider>
      );

      const { result } = renderHook(() => useUtilsProvider(), { wrapper });

      const date = new Date('2024-01-15');
      result.current.formatDate(date, 'yyyy-MM-dd');

      expect(customFormatDate).toHaveBeenCalled();
    });
  });

  describe('StylesProvider integration', () => {
    it('should provide styles context to children', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(result.current.getComponentStyles).toBeDefined();
    });

    it('should provide default breakpoints', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(result.current.breakpoints).toBeDefined();
      expect(result.current.breakpoints).toHaveProperty('sm');
      expect(result.current.breakpoints).toHaveProperty('md');
      expect(result.current.breakpoints).toHaveProperty('lg');
      expect(result.current.breakpoints).toHaveProperty('xl');
    });

    it('should provide media queries', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useStylesContext(), { wrapper });

      expect(result.current.mediaQueries).toBeDefined();
      expect(result.current.mediaQueries).toHaveProperty('onlyMobile');
      expect(result.current.mediaQueries).toHaveProperty('onlyTablet');
      expect(result.current.mediaQueries).toHaveProperty('onlyDesktop');
      expect(result.current.mediaQueries).toHaveProperty('onlyLargeDesktop');
    });
  });

  describe('GenericComponentsProvider integration', () => {
    it('should provide default generic components', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider>{children}</KubitProvider>
      );

      const { result } = renderHook(() => useGenericComponents(), { wrapper });

      expect(result.current).toBeDefined();
      expect(result.current.LINK).toBeDefined();
      expect(result.current.IMAGE).toBeDefined();
    });

    it('should allow custom generic components', () => {
      const CustomLink = () => <a href="/">Custom Link</a>;
      const CustomImage = () => <img alt="custom" src="test.jpg" />;

      const customComponents = {
        IMAGE: CustomImage,
        LINK: CustomLink,
      };

      const wrapper = ({ children }: { children: ReactNode }) => (
        <KubitProvider genericComponentsProvider={customComponents}>
          {children}
        </KubitProvider>
      );

      const { result } = renderHook(() => useGenericComponents(), { wrapper });

      expect(result.current.LINK).toBe(CustomLink);
      expect(result.current.IMAGE).toBe(CustomImage);
    });

    it('should render with custom Link component', () => {
      const CustomLink = ({ children }: { children: ReactNode }) => (
        <a className="custom-link" href="/">
          {children}
        </a>
      );

      const customComponents = {
        IMAGE: () => <img alt="" src="test.jpg" />,
        LINK: CustomLink,
      };

      const TestWithLink = () => {
        const { LINK: Link } = useGenericComponents();
        return <Link url="/">Test Link</Link>;
      };

      render(
        <KubitProvider genericComponentsProvider={customComponents}>
          <TestWithLink />
        </KubitProvider>,
      );

      const link = screen.getByText('Test Link');
      expect(link).toHaveClass('custom-link');
      expect(document.body).toHTMLValidate();
    });

    it('should render with custom Image component', () => {
      const CustomImage = () => (
        <img alt="custom" className="custom-image" src="test.jpg" />
      );

      const customComponents = {
        IMAGE: CustomImage,
        LINK: () => <a href="/">link</a>,
      };

      const TestWithImage = () => {
        const { IMAGE } = useGenericComponents();
        if (!IMAGE) {
          return null;
        }
        const Image = IMAGE;
        return <Image />;
      };

      render(
        <KubitProvider genericComponentsProvider={customComponents}>
          <TestWithImage />
        </KubitProvider>,
      );

      const image = screen.getByRole('img');
      expect(image).toHaveClass('custom-image');
      expect(document.body).toHTMLValidate();
    });
  });

  describe('Provider composition', () => {
    it('should compose all providers correctly', () => {
      const TestAllProviders = () => {
        const utils = useUtilsProvider();
        const styles = useStylesContext();
        const components = useGenericComponents();

        return (
          <div>
            <div data-testid="utils-available">
              {typeof utils.formatDate !== 'undefined'
                ? 'utils-ok'
                : 'utils-missing'}
            </div>
            <div data-testid="styles-available">
              {typeof styles.getComponentStyles !== 'undefined'
                ? 'styles-ok'
                : 'styles-missing'}
            </div>
            <div data-testid="components-available">
              {typeof components.LINK !== 'undefined'
                ? 'components-ok'
                : 'components-missing'}
            </div>
          </div>
        );
      };

      render(
        <KubitProvider>
          <TestAllProviders />
        </KubitProvider>,
      );

      expect(screen.getByTestId('utils-available')).toHaveTextContent(
        'utils-ok',
      );
      expect(screen.getByTestId('styles-available')).toHaveTextContent(
        'styles-ok',
      );
      expect(screen.getByTestId('components-available')).toHaveTextContent(
        'components-ok',
      );
      expect(document.body).toHTMLValidate();
    });

    it('should handle nested KubitProviders', () => {
      render(
        <KubitProvider>
          <div>Outer provider</div>
          <KubitProvider>
            <div>Inner provider</div>
          </KubitProvider>
        </KubitProvider>,
      );

      expect(screen.getByText('Outer provider')).toBeInTheDocument();
      expect(screen.getByText('Inner provider')).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });
  });

  describe('Error handling', () => {
    it('should handle missing children gracefully', () => {
      const { container } = render(<KubitProvider />);

      expect(container).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });

    it('should handle undefined genericComponentsProvider', () => {
      render(
        <KubitProvider genericComponentsProvider={undefined}>
          <TestComponent />
        </KubitProvider>,
      );

      expect(screen.getByText('Test component')).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });

    it('should handle empty utilsConfig', () => {
      const emptyUtilsConfig = {
        dateHelpers: mockDateHelpers,
        formatDate: vi.fn(),
        transformDate: vi.fn(),
      };

      render(
        <KubitProvider utilsConfig={emptyUtilsConfig}>
          <TestComponent />
        </KubitProvider>,
      );

      expect(screen.getByText('Test component')).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });
  });

  describe('Complex scenarios', () => {
    it('should work with all props provided', () => {
      const CustomLink = () => <a href="/">Custom Link</a>;
      const CustomImage = () => <img alt="custom" src="test.jpg" />;
      const customFormatDate = vi.fn().mockReturnValue('custom');

      render(
        <KubitProvider
          genericComponentsProvider={{
            IMAGE: CustomImage,
            LINK: CustomLink,
          }}
          utilsConfig={{
            dateHelpers: mockDateHelpers,
            formatDate: customFormatDate,
            transformDate: vi.fn(),
          }}
        >
          <TestComponent />
        </KubitProvider>,
      );

      expect(screen.getByText('Test component')).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });

    it('should maintain context through re-renders', () => {
      const { rerender } = render(
        <KubitProvider>
          <div>First render</div>
        </KubitProvider>,
      );

      expect(screen.getByText('First render')).toBeInTheDocument();

      rerender(
        <KubitProvider>
          <div>Second render</div>
        </KubitProvider>,
      );

      expect(screen.getByText('Second render')).toBeInTheDocument();
      expect(document.body).toHTMLValidate();
    });
  });
});
