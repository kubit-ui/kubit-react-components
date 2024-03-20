import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { CheckboxUnControlled as CheckboxStory } from '../checkboxUnControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/Checkbox',
  component: CheckboxStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof CheckboxStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Checkbox: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].CheckboxVariantType || {})[0] as string,
    label: { content: 'Accept terms and conditions', requiredSymbol: <>&apos;</> },
    checkedIcon: { icon: ICONS.ICON_PLACEHOLDER },
    helperContent: { content: 'Description Text' },
    helperText: { content: 'Helper Text' },
    screenReaderText: 'screen reader text',
    errorMessage: { content: 'Error text' },
    errorIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Error alternative text' },
    value: 'test value',
    name: 'name',
    themeArgs: themesObject[themeSelected][STYLES_NAME.CHECKBOX],
  },
};

export const CheckboxWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].CheckboxVariantType || {})[0] as string,
    label: { content: 'Accept terms and conditions' },
    ctv: {
      DEFAULT_UNSELECTED: {
        label: {
          color: 'red',
        },
      },
    },
  },
};
