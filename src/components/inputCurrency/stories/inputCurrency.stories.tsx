import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '@/components/button/button';
import {
  additionalInfoAction,
  labelSecondary,
} from '@/components/input/components/stories/stories';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';
import { POSITIONS } from '@/types/positions/positions';

import { InputCurrency as Story } from '../inputCurrency';
import { IInputCurrency } from '../types/inputCurrency';
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
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [value, setValue] = React.useState<string | number | undefined>(3);
  const onClick = () => {
    setValue(undefined);
  };

  return (
    <div>
      <Story {...args} value={value} />
      <Button size="MEDIUM" variant="PRIMARY" onClick={onClick}>
        Clear
      </Button>
    </div>
  );
};

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
  ignoreKeys: ['+', '-', 'e', '.'],
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
