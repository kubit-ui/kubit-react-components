import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { CheckboxWithLabelUncontrolled as Story } from '../checkboxWithLabelUncontrolled';
import { ICheckboxWithLabelUncontrolled } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/CheckboxWithLabel',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/checkboxWithLabel',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-29636&mode=dev',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: ICheckboxWithLabelUncontrolled = {
  variant: Object.values(
    variantsObject[themeSelected].CheckboxWithLabelVariants || {}
  )[0] as string,
  label: { content: 'Accept terms and conditions', requiredSymbol: <>&apos;</> },
  checkedIcon: { icon: ICONS.ICON_PLACEHOLDER },
  helperContent: { content: 'Description Text' },
  helperText: { content: 'Helper Text' },
  screenReaderText: 'screen reader text',
  errorMessage: { content: 'Error text' },
  errorIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Error alternative text' },
  value: 'test value',
  name: 'name',
  required: true,
};

export const CheckboxWithLabel: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.CHECKBOX_WITH_LABEL],
  },
};

export const CheckboxWithLabelWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      DEFAULT_SELECTED: {
        label: {
          color: 'red',
        },
      },
      DEFAULT_UNSELECTED: {
        label: {
          color: 'red',
        },
      },
    },
  },
};
