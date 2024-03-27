import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { LinkActionType } from '@/components/link';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { BreadcrumbsControlled as Story } from '../breadcrumbsControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/Breadcrumb',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/breadcrumbs',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3942-37705',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Breadcrumb: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].BreadcrumbsVariantType || {})[0] as string,
    dividerIcon: { icon: ICONS.ICON_CHEVRON_UP },
    link: {
      variant: Object.values(variantsObject[themeSelected].LinkVariantType || {})[0] as string,
      textVariant: Object.values(variantsObject[themeSelected].TextVariantType || {})[0] as string,
      action: LinkActionType.NAVIGATION,
    },
    ['aria-label']: 'ariaLabel',
    crumbs: [
      {
        name: 'Level A con un texto largo de más de 20 caracteres',
        url: 'https://google.com',
      }, // Over 20 chars
      {
        name: 'Level B veinte chars',
        url: '#',
      }, // 20 chars
      {
        name: 'Level C veinte chars',
        url: '#',
      }, // 20 chars
      {
        name: 'Level D con un texto largo de más de 20 caracteres',
        url: '#',
      }, // Over 20 chars
      {
        name: 'Level E',
        url: '#',
        onClick: () => alert('clicked!'),
      },
      {
        name: 'Level F con un texto largo de más de 20 caracteres',
        url: '#',
      }, // Over 20 chars
    ],
    themeArgs: themesObject[themeSelected][STYLES_NAME.BREADCRUMB],
  },
};

export const BreadcrumbWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].BreadcrumbsVariantType || {})[0] as string,
    dividerIcon: { icon: ICONS.ICON_CHEVRON_UP },
    link: {
      variant: Object.values(variantsObject[themeSelected].LinkVariantType || {})[0] as string,
      textVariant: Object.values(variantsObject[themeSelected].TextVariantType || {})[0] as string,
      action: LinkActionType.NAVIGATION,
    },
    ['aria-label']: 'ariaLabel',
    crumbs: [
      {
        name: 'Level A con un texto largo de más de 20 caracteres',
        url: 'https://google.com',
      }, // Over 20 chars
      {
        name: 'Level B veinte chars',
        url: '#',
      }, // 20 chars
      {
        name: 'Level C veinte chars',
        url: '#',
      }, // 20 chars
      {
        name: 'Level D con un texto largo de más de 20 caracteres',
        url: '#',
      }, // Over 20 chars
      {
        name: 'Level E',
        url: '#',
        onClick: () => alert('clicked!'),
      },
      {
        name: 'Level F con un texto largo de más de 20 caracteres',
        url: '#',
      }, // Over 20 chars
    ],
    ctv: {
      DEFAULT: {
        link: {
          color: 'red',
        },
      },
    },
  },
};
