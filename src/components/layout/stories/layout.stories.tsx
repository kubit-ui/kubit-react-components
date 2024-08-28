import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';
import { DeviceBreakpointsType } from '@/types';

import { Layout as Story } from '../layout';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Templates/Layout',
  component: Story,
  parameters: {
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/layout',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [height, setHeight] = React.useState(0);
  const refFirstContent = React.useRef<HTMLElement | null>(null);
  // Check if mainContent is an empty fragment
  const isEmptyFragment =
    args.mainContent?.type === React.Fragment && !args.mainContent.props.children;

  // catch the reference when the component appears
  const callbackRef = React.useCallback(node => {
    if (node) {
      refFirstContent.current = node;
      const element = refFirstContent.current as HTMLElement;
      setHeight(element.clientHeight || 0);
    }
  }, []);

  const mainContent = isEmptyFragment ? (
    <>
      <ReplaceContent ref={callbackRef} height={'50%'}>
        Main content
      </ReplaceContent>
      <ReplaceContent height={'50%'}>Main content</ReplaceContent>
    </>
  ) : (
    args.mainContent
  );

  const asideContent = args.asideContent ? (
    args.asideContent
  ) : (
    <ReplaceContent height={'50%'} margin={`${height}px 0 0 0 `}>
      Aside content
    </ReplaceContent>
  );

  return <Story {...args} asideContent={asideContent} mainContent={mainContent} />;
};

export const Layout: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].LayoutVariantType || {})[0] as string,
    mainContent: <ReplaceContent height={'100%'}>Main content</ReplaceContent>,
    headerContent: <ReplaceContent>Header content</ReplaceContent>,
    asideContent: <ReplaceContent height={'100%'}>Aside content</ReplaceContent>,
    footerContent: <ReplaceContent>Footer content</ReplaceContent>,
    backgroundColor: '#f5f5f5',
    columnsConfig: {
      header: {
        [DeviceBreakpointsType.LARGE_DESKTOP]: 12,
        [DeviceBreakpointsType.DESKTOP]: 12,
        [DeviceBreakpointsType.TABLET]: 8,
        [DeviceBreakpointsType.MOBILE]: 4,
      },
      footer: {
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
    },

    themeArgs: themesObject[themeSelected][STYLES_NAME.LAYOUT],
  },
};

export const LayoutAlignAside: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].LayoutVariantType || {})[0] as string,
    mainContent: <></>,
    headerContent: <ReplaceContent>Header content</ReplaceContent>,
    footerContent: <ReplaceContent>Footer content</ReplaceContent>,
    backgroundColor: '#f5f5f5',
    columnsConfig: {
      header: {
        [DeviceBreakpointsType.LARGE_DESKTOP]: 12,
        [DeviceBreakpointsType.DESKTOP]: 12,
        [DeviceBreakpointsType.TABLET]: 8,
        [DeviceBreakpointsType.MOBILE]: 4,
      },
      footer: {
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
    },
    ctv: {
      gridConfig: {
        DESKTOP: {
          // mainStyles: {
          // height: 'fit-content',
          // },
        },
      },
    },
  },
};

export const LayoutWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].LayoutVariantType || {})[0] as string,
    mainContent: <ReplaceContent height={'100%'}>Main content</ReplaceContent>,
    headerContent: <ReplaceContent>Header content</ReplaceContent>,
    asideContent: <ReplaceContent height={'100%'}>Aside content</ReplaceContent>,
    footerContent: <ReplaceContent>Footer content</ReplaceContent>,
    backgroundColor: '#f5f5f5',
    columnsConfig: {
      header: {
        [DeviceBreakpointsType.LARGE_DESKTOP]: 12,
        [DeviceBreakpointsType.DESKTOP]: 12,
        [DeviceBreakpointsType.TABLET]: 8,
        [DeviceBreakpointsType.MOBILE]: 4,
      },
      footer: {
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
    },
    ctv: {
      gridConfig: {
        DESKTOP: {
          columns: 5,
        },
      },
    },
  },
};
