import type { Meta, StoryObj } from '@storybook/react';

import { variantsObject } from '@/designSystem/themesObject';

import { LinkAsButton as LinkAsButtonStory } from '../linkAsButton';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Actions/LinkAsButton',
  component: LinkAsButtonStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof LinkAsButtonStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const LinkAsButton: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ButtonVariantType || {})[0] as string,
    size: Object.values(variantsObject[themeSelected].ButtonSizeType || {})[0] as string,
    children: 'Link as button',
    url: 'https://www.google.com',
    ['aria-label']: 'ariaLabel',
  },
};
