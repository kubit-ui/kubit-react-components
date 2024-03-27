import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { Button } from '@/components/button';
import { HeaderContentPositionType } from '@/components/header/types';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { HeaderStructure as Story } from '../headerStructure';
import { HeaderStructureContentPositionType } from '../types/position';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Header/HeaderStructure',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/header',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3927-30771&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const HeaderStructure: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].HeaderStructureVariantType || {}
    )[0] as string,
    configBreadcrumbs: {
      variant: Object.values(
        variantsObject[themeSelected].BreadcrumbsVariantType || {}
      )[0] as string,
      link: {
        variant: Object.values(variantsObject[themeSelected].LinkVariantType || {})[0] as string,
        textVariant: Object.values(
          variantsObject[themeSelected].TextVariantType || {}
        )[0] as string,
      },
      dividerIcon: {
        icon: ICONS.ICON_CHEVRON_RIGHT,
        altText: 'icon divider',
      },
      ['aria-label']: 'breadcrumbs',
      dataTestId: 'breadcrumbs',
    },

    children: [
      <Button
        key={1}
        data-position={HeaderStructureContentPositionType.LEFT}
        size="LARGE"
        variant="PRIMARY"
      >
        Tertiary
      </Button>,
      <Button
        key={3}
        data-position={HeaderStructureContentPositionType.RIGHT}
        size="LARGE"
        variant="PRIMARY"
      >
        Primary
      </Button>,
    ],
    crumbs: [
      {
        name: 'Level A',
        url: 'https://google.com',
      },
      {
        name: 'Level B',
        url: '#',
      },
      {
        name: 'Level C',
        url: '#',
      },
      {
        name: 'Level D',
        url: '#',
      },
      {
        name: 'Level E',
        url: '#',
      },
    ],
    themeArgs: themesObject[themeSelected][STYLES_NAME.HEADER_STRUCTURE],
  },
};

export const HeaderStructureWithCtv: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].HeaderStructureVariantType || {}
    )[0] as string,
    configBreadcrumbs: {
      variant: Object.values(
        variantsObject[themeSelected].BreadcrumbsVariantType || {}
      )[0] as string,
      link: {
        variant: Object.values(variantsObject[themeSelected].LinkVariantType || {})[0] as string,
        textVariant: Object.values(
          variantsObject[themeSelected].TextVariantType || {}
        )[0] as string,
      },
      dividerIcon: {
        icon: ICONS.ICON_CHEVRON_RIGHT,
        altText: 'icon divider',
      },
      ['aria-label']: 'breadcrumbs',
      dataTestId: 'breadcrumbs',
    },
    children: [
      <ReplaceContent key={0} data-position={HeaderContentPositionType.LEFT} />,
      <ReplaceContent key={1} data-position={HeaderContentPositionType.RIGHT} />,
    ],
    crumbs: [
      {
        name: 'Level A',
        url: 'https://google.com',
      },
      {
        name: 'Level B',
        url: '#',
      },
      {
        name: 'Level C',
        url: '#',
      },
      {
        name: 'Level D',
        url: '#',
      },
      {
        name: 'Level E',
        url: '#',
      },
    ],
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
