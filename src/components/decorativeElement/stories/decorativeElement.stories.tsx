import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';

import { DecorativeElement as Story } from '../decorativeElementStandAlone';
import { DecorativeType } from '../types/decorativeElement';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/DecorativeElement',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/decorativeElement',
  },
  tags: ['autodocs'],
  argTypes: argtypes(),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const DecorativeElement: Story = {
  args: {
    element: {
      [DecorativeType.ICON]: {
        icon: ICONS.ICON_PLACEHOLDER,
        altText: 'icon alt text',
        color: '#ff0000',
      },
    },
  },
};
