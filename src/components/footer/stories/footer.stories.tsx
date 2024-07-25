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
    variant: Object.values(variantsObject[themeSelected].FooterVariants || {})[0] as string,
    children: [
      <ReplaceContent key={0} as="button" data-position={FooterPositionType.LEFT} width="200px">
        Contenido 1
      </ReplaceContent>,
      <ReplaceContent key={1} as="button" data-position={FooterPositionType.CENTER} width="200px">
        Contenido 2
      </ReplaceContent>,
      <ReplaceContent key={2} as="button" data-position={FooterPositionType.RIGHT} width="200px">
        Contenido 3
      </ReplaceContent>,
    ],
    themeArgs: themesObject[themeSelected][STYLES_NAME.FOOTER],
  },
};

export const FooterWithOneItem: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].FooterVariants || {})[0] as string,
    children: (
      <ReplaceContent as="button" data-position={FooterPositionType.CENTER} width="280px">
        Contenido 1
      </ReplaceContent>
    ),
    themeArgs: themesObject[themeSelected][STYLES_NAME.FOOTER],
  },
};

export const FooterWithMultipleItems: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].FooterVariants || {})[0] as string,
    children: [
      <ReplaceContent key={0} as="button" data-position={FooterPositionType.LEFT} width="200px">
        Contenido 1
      </ReplaceContent>,
      <ReplaceContent key={1} as="button" data-position={FooterPositionType.LEFT} width="200px">
        Contenido 2
      </ReplaceContent>,
      <ReplaceContent key={2} as="button" data-position={FooterPositionType.CENTER} width="200px">
        Contenido 3
      </ReplaceContent>,
      <ReplaceContent key={3} as="button" data-position={FooterPositionType.RIGHT} width="200px">
        Contenido 4
      </ReplaceContent>,
      <ReplaceContent key={4} as="button" data-position={FooterPositionType.RIGHT} width="200px">
        Contenido 5
      </ReplaceContent>,
    ],
    themeArgs: themesObject[themeSelected][STYLES_NAME.FOOTER],
  },
};

export const FooterWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].FooterVariants || {})[0] as string,
    children: [
      <ReplaceContent key={0} data-position={FooterPositionType.LEFT}>
        Contenido 1
      </ReplaceContent>,
      <ReplaceContent key={1} data-position={FooterPositionType.CENTER}>
        Contenido 2
      </ReplaceContent>,
      <ReplaceContent key={2} data-position={FooterPositionType.RIGHT}>
        Contenido 3
      </ReplaceContent>,
    ],
    ctv: {
      rootContainer: { padding: '2rem', background_color: 'pink' },
    },
  },
};
