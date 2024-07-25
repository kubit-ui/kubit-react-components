import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { InputDigitSequenceUncontrolled as Story } from '../inputDigitSequenceUncontrolled';
import { IInputDigitSequenceUncontrolled } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/InputDigitSequence',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IInputDigitSequenceUncontrolled = {
  variant: Object.values(
    variantsObject[themeSelected].InputDigitSequenceVariant || {}
  )[0] as string,
  inputsArray: [
    { blockedBySystem: false, ['aria-label']: 'input1' },
    { blockedBySystem: false, ['aria-label']: 'input2' },
    { blockedBySystem: true, ['aria-label']: 'input3' },
    { blockedBySystem: true, ['aria-label']: 'input4' },
    { blockedBySystem: false, ['aria-label']: 'input5' },
    { blockedBySystem: true, ['aria-label']: 'input6', value: '8' },
    { blockedBySystem: true, ['aria-label']: 'input7', value: '8' },
    { blockedBySystem: true, ['aria-label']: 'input8' },
  ],
  tooltip: {
    content: { content: 'Tooltip content' },
    title: { content: 'Tooltip title' },
    variant: 'DEFAULT',
  },
  tooltipIcon: { icon: ICONS.ICON_PLACEHOLDER },
  title: { content: 'Label' },
  actionButton: {
    variant: Object.values(variantsObject[themeSelected].ButtonVariantType || {})[3] as string,
    icon: { icon: ICONS.ICON_PLACEHOLDER },
    content: 'Show code',
    ['aria-label']: 'aria-label test',
  },
  disabled: false,
  error: false,
  errorText: { content: 'This is the error text' },
  errorIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Alt text error icon' },
  helpText: { content: 'Help Text' },
};

export const InputDigitSequence: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.INPUT_DIGIT_SEQUENCE],
  },
};

export const InputDigitSequenceWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      DEFAULT: {
        title: { color: 'red' },
      },
    },
  },
};
