import userEvent from '@testing-library/user-event';

import { screen } from '@testing-library/react';
import * as React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { CssAnimation } from '../index';
import { CssAnimationExecuteOption, CssAnimationTimingFunction } from '../types/cssAnimation';
import { CssAnimationVariants } from '../types/variant';

const mockProps = {
  options: {
    duration: 0.1,
    timingFunction: CssAnimationTimingFunction.EASE_IN,
    delay: 3,
    iterationCount: 1,
  },
  exec: CssAnimationExecuteOption.START,
};

jest.mock('react-transition-group', () => {
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn(props =>
    props.in ? <FakeTransition>{props.children}</FakeTransition> : null
  );
  return { CSSTransition: FakeCSSTransition, Transition: FakeTransition };
});

const testRefMockProps = {
  variant: {
    type: CssAnimationVariants.SLIDE_IN,
  },
  exec: CssAnimationExecuteOption.START,
  options: {
    duration: 100,
    timingFunction: CssAnimationTimingFunction.EASE_IN,
    delay: 100,
    iterationCount: 100,
  },
};

interface Animated {
  execution: CssAnimationExecuteOption;
  children: React.ReactNode;
}

const SlideIn: React.FC<Animated> = ({ children, execution }) => {
  return (
    <CssAnimation
      exec={execution}
      options={mockProps.options}
      variant={{ type: CssAnimationVariants.SLIDE_IN }}
    >
      {children}
    </CssAnimation>
  );
};

const AnimatedSlideInPage: React.FC = () => {
  const [execution, setExecution] = React.useState<CssAnimationExecuteOption>(
    CssAnimationExecuteOption.START
  );

  return (
    <>
      <button
        onClick={() =>
          execution === CssAnimationExecuteOption.START
            ? setExecution(CssAnimationExecuteOption.END)
            : setExecution(CssAnimationExecuteOption.START)
        }
      >
        Toggle
      </button>
      <SlideIn execution={execution}>
        <h1 data-testid="animated-content">Animated content</h1>
      </SlideIn>
    </>
  );
};

describe('CssAnimation component', () => {
  test('Should render CssAnimation with default props', () => {
    renderProvider(
      <CssAnimation
        variant={{
          type: CssAnimationVariants.SLIDE_IN,
        }}
        {...mockProps}
      />
    );

    const cssAnimation = screen.getByTestId('cssAnimation');

    expect(cssAnimation).toBeInTheDocument();
  });

  test('Default exec is hidden', () => {
    renderProvider(
      <CssAnimation
        variant={{
          type: CssAnimationVariants.SLIDE_IN,
        }}
      />
    );
    expect(screen.queryByTestId('cssAnimation')).not.toBeInTheDocument();
  });

  it('Can receive a callback ref', () => {
    const ref = jest.fn();
    renderProvider(
      <CssAnimation {...testRefMockProps} ref={ref}>
        <div>animate</div>
      </CssAnimation>
    );
    expect(ref).toHaveBeenCalled();
  });

  it('Can receive a objectRef ref', () => {
    const ref = { current: null };
    renderProvider(
      <CssAnimation {...testRefMockProps} ref={ref}>
        <div>animate</div>
      </CssAnimation>
    );
    expect(ref.current).not.toBeNull();
  });

  it('Should show SlideIn Left animation', async () => {
    renderProvider(<AnimatedSlideInPage />);
    expect(screen.getByText('Animated content')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Toggle'));
    expect(screen.queryByText('Animated content')).not.toBeInTheDocument();
  });

  it('Should show SlideIn Top animation', async () => {
    renderProvider(<AnimatedSlideInPage />);
    expect(screen.getByText('Animated content')).toBeTruthy();
    await userEvent.click(screen.getByText('Toggle'));
    expect(screen.queryByText('Animated content')).toBeNull();
  });

  it('Should show SlideIn Right animation', async () => {
    renderProvider(<AnimatedSlideInPage />);
    expect(screen.getByText('Animated content')).toBeTruthy();
    await userEvent.click(screen.getByText('Toggle'));
    expect(screen.queryByText('Animated content')).toBeNull();
  });

  it('Should show SlideIn Bottom animation', async () => {
    renderProvider(<AnimatedSlideInPage />);
    expect(screen.getByText('Animated content')).toBeTruthy();
    await userEvent.click(screen.getByText('Toggle'));
    expect(screen.queryByText('Animated content')).toBeNull();
  });
});
