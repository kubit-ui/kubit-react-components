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
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/radioButtonGroup',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-29665&mode=dev',
  },
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
      { label: 'Kiwis', value: 'K', disabled: true },
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
