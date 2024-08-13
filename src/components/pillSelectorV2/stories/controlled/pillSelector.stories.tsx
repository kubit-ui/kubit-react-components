import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { PillSelectorControlled as Story } from '../../pillSelectorControlled';
import { IPillSelectorControlled } from '../../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/PillSelectorV2/Controlled',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonPillSelectorProps: IPillSelectorControlled = {
  variant: Object.values(
    variantsObject[themeSelected].PillSelectorVariantTypeV2 || {}
  )[0] as string,
  pills: [
    { label: { content: 'Pill 1' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 1' },
    { label: { content: 'Pill 2' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 2' },
    { label: { content: 'Pill 3' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 3' },
    { label: { content: 'Pill 4' }, icon: { icon: ICONS.ICON_PLACEHOLDER }, value: 'value 4' },
  ],
  value: ['value 2'],
  selectedIcon: { icon: ICONS.ICON_PLACEHOLDER },
};

export const PillSelector: Story = {
  args: {
    ...commonPillSelectorProps,
    themeArgs: themesObject[themeSelected][STYLES_NAME.PILL_V2],
  },
};
