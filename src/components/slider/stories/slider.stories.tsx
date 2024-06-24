import type { Meta, StoryObj } from '@storybook/react';

import { variantsObject } from '@/designSystem/themesObject';

import { Slider as Story } from '../slider';
import { SliderType } from '../types/type';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/Slider',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Slider: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].SliderVariantType || {})[0] as string,
    type: SliderType.CONTINUOUS,
    range: false,
    min: 0,
    max: 100,
    step: 1,
    leftHelperText: 'Left helper text',
    rightHelperText: 'Right helper text',
    ariaLabel: 'Left slider',
    rightAriaLabel: 'Right slider',
  },
};

export const SliderWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].SliderVariantType || {})[0] as string,
    type: SliderType.CONTINUOUS,
    range: false,
    min: 0,
    max: 100,
    step: 1,
    leftHelperText: 'Left helper text',
    rightHelperText: 'Right helper text',
    ariaLabel: 'Slider continuous example',
    ctv: {
      helperTextContainer: {
        background_color: 'pink',
      },
    },
  },
};
