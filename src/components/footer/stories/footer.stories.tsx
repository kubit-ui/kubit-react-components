import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Footer as Story } from '../footer';
import { FooterPositionType } from '../types/position';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/Footer',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/footer',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3942-37720&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Footer: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].FooterVariant || {})[0] as string,
    children: [
      <ReplaceContent key={0} data-position={FooterPositionType.LEFT} />,
      <ReplaceContent key={1} data-position={FooterPositionType.CENTER} />,
      <ReplaceContent key={2} data-position={FooterPositionType.RIGHT} />,
    ],
    themeArgs: themesObject[themeSelected][STYLES_NAME.FOOTER],
  },
};

export const FooterWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].FooterVariant || {})[0] as string,
    children: [
      <ReplaceContent key={0} data-position={FooterPositionType.LEFT} />,
      <ReplaceContent key={1} data-position={FooterPositionType.CENTER} />,
      <ReplaceContent key={2} data-position={FooterPositionType.RIGHT} />,
    ],
    ctv: {
      rootContainer: { padding: '2rem', background_color: 'pink' },
    },
  },
};
