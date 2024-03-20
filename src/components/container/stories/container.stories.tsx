import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Container as ContainerStory } from '../container';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/Container',
  component: ContainerStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof ContainerStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Container: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ContainerVariants || {})[0] as string,
    title: { content: 'Title' },
    children: <ReplaceContent />,
    themeArgs: themesObject[themeSelected][STYLES_NAME.CONTAINER],
  },
};

export const ContainerWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ContainerVariants || {})[0] as string,
    children: <ReplaceContent />,
    ctv: {
      container: {
        background_color: 'red',
      },
    },
  },
};
