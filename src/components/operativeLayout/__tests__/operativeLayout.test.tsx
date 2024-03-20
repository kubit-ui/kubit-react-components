import { act, screen } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { DeviceBreakpointsType } from '@/types/breakpoints';

import { OperativeLayout } from '../operativeLayout';

const main = () => {
  return <div>main</div>;
};
const aside = () => {
  return <div>aside</div>;
};

const mockProps = {
  variant: 'DEFAULT',
  mainContent: main(),
  asideContent: aside(),
  backgroundColor: '#ffffff',
  columnsConfig: {
    main: {
      [DeviceBreakpointsType.LARGE_DESKTOP]: 9,
      [DeviceBreakpointsType.DESKTOP]: 9,
      DESKTOP_FULL: 12,
      [DeviceBreakpointsType.TABLET]: 8,
      [DeviceBreakpointsType.MOBILE]: 4,
    },
    aside: {
      [DeviceBreakpointsType.LARGE_DESKTOP]: 3,
      [DeviceBreakpointsType.DESKTOP]: 3,
      [DeviceBreakpointsType.TABLET]: 8,
      [DeviceBreakpointsType.MOBILE]: 4,
    },
  },
};

describe('OperativeLayout Component', () => {
  it('Renders without aside content', () => {
    renderProvider(<OperativeLayout {...mockProps} asideContent={undefined} />);

    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  });

  it('Renders with aside content', () => {
    renderProvider(<OperativeLayout {...mockProps} />);

    const main = screen.getByRole('main');
    const aside = screen.getByRole('complementary');

    expect(main).toBeInTheDocument();
    expect(aside).toBeInTheDocument();
  });

  it('Columns config is otional', () => {
    renderProvider(<OperativeLayout {...mockProps} columnsConfig={undefined} />);

    const main = screen.getByRole('main');
    const aside = screen.getByRole('complementary');

    expect(main).toBeInTheDocument();
    expect(aside).toBeInTheDocument();
  });

  it('contentOverflowColor allow to overflow the content background color, and with contentBgColor you can override it from styles', () => {
    renderProvider(
      <OperativeLayout {...mockProps} contentBgColor={'#000000'} contentOverflowColor={true} />
    );

    const main = screen.getByRole('main');
    const aside = screen.getByRole('complementary');

    expect(main).toBeInTheDocument();
    expect(aside).toBeInTheDocument();
  });

  it('Main container with is needed to apply to apply the overflow color when contentOverflowColor', async () => {
    jest.useFakeTimers();
    const { container } = renderProvider(
      <OperativeLayout {...mockProps} contentOverflowColor={true} />
    );

    const componentRoot = container.firstElementChild;
    expect(componentRoot).toBeInTheDocument();

    let spyGetBoundingClientRect;
    if (componentRoot) {
      spyGetBoundingClientRect = jest.spyOn(componentRoot, 'getBoundingClientRect');
    }

    act(() => {
      jest.runAllTimers();
    });
    jest.useRealTimers();

    expect(spyGetBoundingClientRect).toHaveBeenCalled();
  });
});
