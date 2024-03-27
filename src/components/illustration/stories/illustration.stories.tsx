import type { Meta, StoryObj } from '@storybook/react';

import { ILLUSTRATIONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject } from '@/designSystem/themesObject';

import { IllustrationBasic as Story } from '../illustration';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Illustration',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/illustration',
  },
  tags: ['autodocs'],
  argTypes: argtypes(),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Illustration: Story = {
  args: {
    illustration: ILLUSTRATIONS.ILLUSTRATION,
    altText: 'Alternative text',
    height: '100px',
    width: '100px',
    ['aria-label']: 'ariaLabel illustration',
    disabled: false,
    rotate: '0deg',
    transitionDuration: '0.25s',
    themeArgs: themesObject[themeSelected][STYLES_NAME.ILLUSTRATION],
  },
};
