import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { LinkActionType } from '@/components/link';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Header as Story } from '../header';
import { HeaderContentPositionType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Header/Header',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
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
