import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { ToggleWithLabelUncontrolled as Story } from '../toggleWithLabelUncontrolled';
import { IToggleWithLabel } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/ToggleWithLabel',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/toggle',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-29692&mode=dev',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IToggleWithLabel = {
  variant: Object.values(
    variantsObject[themeSelected].ToggleWithLabelVariantType || {}
  )[0] as string,
  toggleVariant: Object.values(variantsObject[themeSelected].ToggleVariantType || {})[0] as string,
  onIcon: { icon: ICONS.ICON_CHEVRON_UP },
  offIcon: { icon: ICONS.ICON_CHEVRON_DOWN },
  label: { content: 'label' },
  required: false,
};

export const TogggleWithLabel: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TOGGLE_WITH_LABEL],
  },
};

export const TogggleWithLabelWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      legend: {
        color: 'red',
      },
    },
  },
};
