import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { LinkActionType } from '../../link/types/action';
import { Header as Story } from '../header';
import { HeaderContentPositionType } from '../types/position';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Header/Header',
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

export const Header: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].HeaderVariantType || {})[0] as string,
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
    configBreadcrumbs: {
      variant: Object.values(
        variantsObject[themeSelected].BreadcrumbsVariantType || {}
      )[0] as string,
      link: {
        variant: Object.values(variantsObject[themeSelected].LinkVariantType || {})[0] as string,
        textVariant: Object.values(
          variantsObject[themeSelected].TextVariantType || {}
        )[0] as string,
        action: LinkActionType.NAVIGATION,
      },
      dividerIcon: {
        icon: ICONS.ICON_PLACEHOLDER,
      },
      ['aria-label']: 'breadcrumbs',
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.HEADER],
  },
};

export const HeaderWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].HeaderVariantType || {})[0] as string,
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
    configBreadcrumbs: {
      variant: Object.values(
        variantsObject[themeSelected].BreadcrumbsVariantType || {}
      )[0] as string,
      link: {
        variant: Object.values(variantsObject[themeSelected].LinkVariantType || {})[0] as string,
        textVariant: Object.values(
          variantsObject[themeSelected].TextVariantType || {}
        )[0] as string,
        action: LinkActionType.NAVIGATION,
      },
      dividerIcon: {
        icon: ICONS.ICON_PLACEHOLDER,
      },
      ['aria-label']: 'breadcrumbs',
    },
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
