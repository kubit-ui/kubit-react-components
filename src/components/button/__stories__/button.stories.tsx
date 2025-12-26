import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  ButtonSizeType,
  ButtonVariantType,
} from '@/lib/designSystem/kubit/components/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { LoaderStory as Loader } from '@/lib/storybook/assets/loader/loader';
import { POSITIONS } from '@/lib/types/positions/positions';

import { Button as ButtonStory } from '../button';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: ButtonStory,
  render: ({ ...args }) => {
    return <ButtonStory {...args} loader={<Loader />} />;
  },
  tags: ['autodocs', 'actions'],
  title: 'Components/Actions/Button',
} satisfies Meta<typeof ButtonStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  children: 'Button',
  fullWidth: false,
  icon: ICONS.PLACEHOLDER,
  iconPosition: POSITIONS.RIGHT,
  id: 'buttonId',
  size: ButtonSizeType.LARGE,
  variant: ButtonVariantType.PRIMARY,
};

export const Button: Story = {
  args: {
    ...commonArgs,
  },
};

export const ButtonWithAdditionalClasses: Story = {
  args: {
    ...commonArgs,
    additionalVariantClasses: {
      icon: 'custom-background',
    },
  },
};
