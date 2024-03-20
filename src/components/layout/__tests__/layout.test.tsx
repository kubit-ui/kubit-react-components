import { screen } from '@testing-library/react';
import React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { DeviceBreakpointsType } from '@/types/breakpoints';

import { Layout } from '../layout';

const main = () => {
  return <div>main</div>;
};
const header = () => {
  return <div>header</div>;
};
const aside = () => {
  return <div>aside</div>;
};
const footer = () => {
  return <div>footer</div>;
};

const mockProps = {
  variant: 'DEFAULT',
  mainContent: main(),
  headerContent: header(),
  asideContent: aside(),
  footerContent: footer(),
  backgroundColor: '#ffffff',
  columnsConfig: {
    header: {
      [DeviceBreakpointsType.LARGE_DESKTOP]: 12,
      [DeviceBreakpointsType.DESKTOP]: 12,
      [DeviceBreakpointsType.TABLET]: 8,
      [DeviceBreakpointsType.MOBILE]: 4,
    },
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
    footer: {
      [DeviceBreakpointsType.LARGE_DESKTOP]: 12,
      [DeviceBreakpointsType.DESKTOP]: 12,
      [DeviceBreakpointsType.TABLET]: 8,
      [DeviceBreakpointsType.MOBILE]: 4,
    },
  },
};

const mockPropsDefault = {
  variant: 'DEFAULT',
  mainContent: main(),
  headerContent: header(),
  asideContent: aside(),
  backgroundColor: '#ffffff',
};

test('if layout component renders only main', () => {
  renderProvider(<Layout {...mockProps} asideContent={undefined} headerContent={undefined} />);

  const main = screen.getByRole('main');

  expect(main).toBeInTheDocument();
});

test('if layout component renders main, header, aside and footer sections', () => {
  renderProvider(<Layout {...mockProps} />);

  const main = screen.getByRole('main');
  const header = screen.getByRole('banner');
  const aside = screen.getByRole('complementary');
  const footer = screen.getByRole('contentinfo');

  expect(main).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(aside).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});

test('if layout component renders main, header and aside sections with columns configuration by default', () => {
  renderProvider(<Layout {...mockPropsDefault} />);

  const main = screen.getByRole('main');
  const header = screen.getByRole('banner');
  const aside = screen.getByRole('complementary');

  expect(main).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(aside).toBeInTheDocument();
});
