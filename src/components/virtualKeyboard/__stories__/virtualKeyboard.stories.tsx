import type { Meta, StoryObj } from '@storybook/react-vite';

import { VirtualKeyboardVariantType } from '@/lib/designSystem/kubit/components/virtualKeyboard/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import type { VirtualKeyboardProps } from '../types/virtualKeyboard';

import { VirtualKeyboard as Story } from '../virtualKeyboard';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/VirtualKeyboard',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: VirtualKeyboardProps = {
  digits: ['0', '4', '2', '8', '7', '3', '9', '1', '6', '5'],
  icon: { icon: ICONS.PLACEHOLDER },
  onDigitButtonClick: () => {
    return null;
  },
  onRemoveButtonClick: () => {
    return null;
  },
  variant: VirtualKeyboardVariantType.DEFAULT,
};

export const VirtualKeyboard: Story = {
  args: {
    ...commonArgs,
  },
};
