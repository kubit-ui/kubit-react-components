import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { IconHighlightedType } from '@/components/iconHighlighted';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { additionalInfoAction, labelSecondary } from '../components/stories/stories';
import { InputUnControlled as Story } from '../inputUnControlled';
import { IInputUnControlled, InputTitleComponentType } from '../types';
import { InputIconPosition } from '../types/inputTheme';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/Input',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IInputUnControlled = {
  variant: Object.values(variantsObject[themeSelected].InputCounterVariant || {})[0] as string,
  label: { content: 'Label', requiredSymbol: '*' },
  placeholder: 'Placeholder',
  id: 'input',
  name: 'inputName',
  required: true,
  helpMessage: { content: 'HEEEELP!' },
  title: { content: 'Title', component: InputTitleComponentType.H1 },
  errorMessage: { content: 'Error message' },
  errorIcon: { icon: ICONS.ICON_PLACEHOLDER },
  highlightedInformationAssociatedIcon: {
    icon: ICONS.ICON_PLACEHOLDER,
    altText: 'unicorn alt text',
    type: IconHighlightedType.INFORMATIVE,
    position: InputIconPosition.LEFT,
  },
  informationAssociatedValue: { content: 'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet' },
  iconPosition: InputIconPosition.RIGHT,
  icon: { icon: ICONS.ICON_PLACEHOLDER },
  secondaryLabel: labelSecondary(themeSelected),
  additionalInfo: additionalInfoAction(themeSelected),
};

export const Input: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.INPUT],
  },
};

export const InputWithCtv: Story = {
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
