import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { IconHighlightedType } from '@/components/iconHighlighted';
import {
  additionalInfoAction,
  labelSecondary,
} from '@/components/input/components/stories/stories';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { prefixOptions } from '../fixture/prefixOptions';
import { InputPhone as Story } from '../inputPhone';
import { IInputPhone } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/InputPhone',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IInputPhone = {
  variant: Object.values(variantsObject[themeSelected].InputPhoneVariant || {})[0] as string,
  id: 'input',
  label: { content: 'Label', requiredSymbol: '*' },
  name: 'inputName',
  placeholder: 'Placeholder',
  required: true,
  helpMessage: { content: 'HEEEELP!' },
  extraAriaLabelledBy: 'extraAriaLabelledBy',
  flag: {
    icon: prefixOptions.flag,
    altText: 'Flag image alt text',
    type: IconHighlightedType.INFORMATIVE,
  },
  prefix: { content: prefixOptions.prefix },
  maxLength: 11,
  errorMessage: { content: 'Error message' },
  errorIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'error' },
  secondaryLabel: labelSecondary(themeSelected),
  additionalInfo: additionalInfoAction(themeSelected),
};

export const InputPhone: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.INPUT_PHONE],
  },
};

export const InputPhoneWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      EMPTY: {
        inputWrapperContainer: {
          background_color: 'pink',
          padding_left: '10px',
          padding_right: '10px',
          padding_bottom: '10px',
        },
      },
    },
  },
};
