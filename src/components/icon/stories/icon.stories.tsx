import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject } from '@/designSystem/themesObject';

import { IconBasic as Story } from '../icon';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Icon',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/icon',
  },
  tags: ['autodocs'],
  argTypes: argtypes(),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Icon: Story = {
  args: {
    icon: ICONS.ICON_PLACEHOLDER,
    width: '48px',
    height: '48px',
    themeArgs: themesObject[themeSelected][STYLES_NAME.ICON],
  },
};
