import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { Container as ContainerStory } from '../container';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/Container',
  component: ContainerStory,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/container',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-22907&mode=dev',
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
