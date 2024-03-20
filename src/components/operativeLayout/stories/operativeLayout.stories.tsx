import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { themesObject, variantsObject } from '@/designSystem/themesObject';
import { DeviceBreakpointsType } from '@/types';

import { OperativeLayout as Story } from '../operativeLayout';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';
const meta = {
  title: 'Components/Templates/OperativeLayout',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

const mainContent = () => {
  return (
    <ReplaceContent height="10rem" width={'100%'}>
      Main content
    </ReplaceContent>
  );
};

const asideContent = () => (
  <div style={{ marginTop: '4rem', marginRight: '2rem' }}>
    <ReplaceContent width={'200px'}>Aside content</ReplaceContent>
  </div>
);

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const OperativeLayout: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].OperativeLayoutVariantType || {}
    )[0] as string,
    mainContent: mainContent(),
    asideContent: asideContent(),
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
    themeArgs: themesObject[themeSelected]['OPERATIVE_LAYOUT_STYLES'],
  },
};

export const OperativeLayoutWithCtv: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].OperativeLayoutVariantType || {}
    )[0] as string,
    mainContent: mainContent(),
    asideContent: asideContent(),
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
    ctv: {
      mainContainerColor: 'blue',
      asideContainerColor: 'red',
    },
  },
};
