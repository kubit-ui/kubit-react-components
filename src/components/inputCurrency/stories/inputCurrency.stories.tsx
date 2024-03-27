import type { Meta, StoryObj } from '@storybook/react';

import {
  additionalInfoAction,
  labelSecondary,
} from '@/components/input/components/stories/stories';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';
import { POSITIONS } from '@/types';

import { InputCurrency as Story } from '../inputCurrency';
import { IInputCurrency } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/Inputcurrency',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/inputCurrency',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-29850&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IInputCurrency = {
  variant: Object.values(variantsObject[themeSelected].InputCurrencyVariant || {})[0] as string,
  id: 'input',
  label: { content: 'Label' },
  name: 'inputName',
  placeholder: 'Placeholder',
  required: true,
  maxDecimals: 9,
  helpMessage: { content: 'HEEEELP!' },
  currencyName: { content: 'USD' },
  currencyPosition: POSITIONS.RIGHT,
  disabledArrowUpDownInputNumber: false,
  secondaryLabel: labelSecondary(themeSelected),
  additionalInfo: additionalInfoAction(themeSelected),
};

export const Inputcurrency: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.INPUT_CURRENCY],
  },
};

export const InputcurrencyWithCtv: Story = {
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
      FILLED: {
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
