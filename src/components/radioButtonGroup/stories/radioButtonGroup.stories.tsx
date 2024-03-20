import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { RadioButtonStateType } from '../components';
import { RadioButtonGroupUnControlled as Story } from '../radioButtonGroupUnControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/RadioButtongroup',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const RadioButtongroup: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].RadioButtonGroupVariantType || {}
    )[0] as string,
    legend: 'Select your favorite fruit',
    name: 'Name',
    options: [
      { label: 'Strawberry', value: 'S' },
      {
        label: 'Mangoes',
        value: 'M',
        description: 'Mangoes have a lot of potassium',
        screenReader: true,
      },
      { label: 'Kiwis', value: 'K', state: RadioButtonStateType.DISABLED },
      { label: 'Coconut', value: 'C' },
    ],
    themeArgs: themesObject[themeSelected][STYLES_NAME.RADIO_BUTTON_GROUP],
  },
};

export const RadioButtongroupWithCtv: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].RadioButtonGroupVariantType || {}
    )[0] as string,
    legend: 'Select your favorite fruit',
    name: 'Name',
    options: [
      { label: 'Strawberry', value: 'S' },
      {
        label: 'Mangoes',
        value: 'M',
        description: 'Mangoes have a lot of potassium',
        screenReader: true,
      },
      { label: 'Kiwis', value: 'K', state: RadioButtonStateType.DISABLED },
      { label: 'Coconut', value: 'C' },
    ],
    ctv: {
      DEFAULT: {
        title: {
          color: 'red',
        },
      },
    },
  },
};
