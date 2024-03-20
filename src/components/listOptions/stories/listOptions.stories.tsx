import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { ListOptions as Story } from '../listOptions';
import { ListOptionsType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Selector/ListOptions',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const ListOptions: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ListOptionsVariantType || {})[0] as string,
    optionVariant: Object.values(
      variantsObject[themeSelected].OptionVariantType || {}
    )[0] as string,
    hightlightedOptionVariant: Object.values(
      variantsObject[themeSelected].OptionVariantType || {}
    )[0] as string,
    type: ListOptionsType.SELECTION,
    selectedValue: 2,
    options: [
      {
        label: 'label 1',
        value: 1,
      },
      {
        label: 'label 2',
        value: 2,
      },
      {
        label: 'label 3',
        disabled: true,
        value: 3,
      },
      {
        label: 'label 4',
        value: 4,
      },
    ],
    themeArgs: themesObject[themeSelected][STYLES_NAME.LIST_OPTIONS],
  },
};

export const ListOptionsWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ListOptionsVariantType || {})[0] as string,
    optionVariant: Object.values(
      variantsObject[themeSelected].OptionVariantType || {}
    )[0] as string,
    hightlightedOptionVariant: Object.values(
      variantsObject[themeSelected].OptionVariantType || {}
    )[0] as string,
    type: ListOptionsType.SELECTION,
    selectedValue: 2,
    options: [
      {
        label: 'label 1',
        value: 1,
      },
      {
        label: 'label 2',
        value: 2,
      },
      {
        label: 'label 3',
        disabled: true,
        value: 3,
      },
      {
        label: 'label 4',
        value: 4,
      },
      {
        label: 'label with toggle',
        toggle: {
          variant: 'DEFAULT',
        },
        value: 5,
      },
    ],
    ctv: {
      optionsContainer: {
        background_color: 'pink',
        padding: '10px',
      },
    },
  },
};
