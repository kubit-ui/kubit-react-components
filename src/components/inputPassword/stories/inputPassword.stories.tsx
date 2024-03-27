import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import {
  additionalInfoAction,
  labelSecondary,
} from '@/components/input/components/stories/stories';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { InputPassword as Story } from '../inputPassword';
import { IInputPassword } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/InputPassword',
  component: Story,

  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/inputPassword',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-29966&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IInputPassword = {
  variant: Object.values(variantsObject[themeSelected].InputPasswordVariant || {})[0] as string,
  id: 'input',
  label: { content: 'Label', requiredSymbol: '*' },
  name: 'inputName',
  placeholder: 'Placeholder',
  required: true,
  helpMessage: { content: 'HEEEELP!' },
  activeIcon: { icon: ICONS.ICON_GHOST, altText: 'Show password' },
  disabledIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Hide password' },
  errorMessage: { content: 'Error message' },
  errorIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'error' },
  secondaryLabel: labelSecondary(themeSelected),
  additionalInfo: additionalInfoAction(themeSelected),
};

export const InputPassword: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.INPUT_PASSWORD],
  },
};

export const InputPasswordWithCtv: Story = {
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
