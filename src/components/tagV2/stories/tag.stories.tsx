import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Tag as Story } from '../tag';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Status/TagV2',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonTagProps = {
  variant: Object.values(variantsObject[themeSelected].TagVariantTypeV2 || {})[0] as string,
  icon: { icon: ICONS.ICON_PLACEHOLDER },
  label: { content: 'LABEL' },
};

export const Tag: Story = {
  args: {
    ...commonTagProps,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TAG_V2],
  },
};

export const TagWithCtv: Story = {
  args: {
    ...commonTagProps,
    ctv: {
      icon: {
        color: 'red',
      },
    },
  },
};
