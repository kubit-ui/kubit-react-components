import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Option as Story } from '../option';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Selector/Option',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/option',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Option: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].OptionVariantType || {})[0] as string,
    label: 'Option',
    ['aria-label']: 'Aria label',
    themeArgs: themesObject[themeSelected][STYLES_NAME.OPTION],
  },
};

export const OptionWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].OptionVariantType || {})[0] as string,
    label: 'Option',
    ['aria-label']: 'Aria label',
    ctv: {
      DEFAULT: {
        container: {
          background_color: 'pink',
        },
      },
    },
  },
};
