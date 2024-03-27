import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Tag as Story } from '../tag';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Status/Tag',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    layout: 'centered',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/tag',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3928-35886&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Tag: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TagVariantType || {})[0] as string,
    children: 'Tag',
    option: Object.values(variantsObject[themeSelected].TagOptionType || {})[0] as string,
    status: Object.values(variantsObject[themeSelected].TagStatusType || {})[0] as string,
    icon: { icon: ICONS.ICON_PLACEHOLDER },
    themeArgs: themesObject[themeSelected][STYLES_NAME.TAG],
  },
};

export const TagWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TagVariantType || {})[0] as string,
    children: 'Tag',
    option: Object.values(variantsObject[themeSelected].TagOptionType || {})[0] as string,
    status: Object.values(variantsObject[themeSelected].TagStatusType || {})[0] as string,
    icon: { icon: ICONS.ICON_PLACEHOLDER },
    ctv: {
      NORMAL: {
        icon: {
          color: 'red',
        },
      },
    },
    extraCt: {
      wrapper: {
        background_color: 'pink',
      },
    },
  },
};
