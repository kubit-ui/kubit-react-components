import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Loader as Story } from '../loader';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Status/Loader',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/loader',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Loader: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].LoaderVariantType || {})[0] as string,
    width: '48px',
    themeArgs: themesObject[themeSelected][STYLES_NAME.LOADER],
  },
};

export const LoaderWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].LoaderVariantType || {})[0] as string,
    width: '48px',
  },
};
