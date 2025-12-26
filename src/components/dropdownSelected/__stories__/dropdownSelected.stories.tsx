import type { Meta, StoryObj } from '@storybook/react-vite';

import { DropdownSelectedVariantType } from '@/lib/designSystem/kubit/components/dropdownSelected/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { DropdownSelectedUnControlled as Story } from '../dropdownSelectedUncontrolled';
import type { DropdownSelectedUnControlledProps } from '../types/dropdownSelected';
import { argtypes } from './argtypes';

const StoryWithHooks = (args) => {
  return (
    <div style={{ width: 'fit-content' }}>
      <Story {...args} />
    </div>
  );
};

const meta = {
  argTypes: argtypes(),
  component: Story,
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['autodocs', 'navigation'],
  title: 'Components/Navigation/DropdownSelected',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: DropdownSelectedUnControlledProps = {
  closePopoverOnScroll: true,
  icon: { altText: 'Alt text icon', icon: ICONS.CHEVRON_DOWN },
  label: { content: 'Label' },
  listOptions: {
    options: [
      {
        label: 'option 1',
        value: 'option1',
      },
      {
        label: 'option 2',
        value: 'option2',
      },
    ],
    optionVariant: 'CODE_VIEWER_SUBTHEME',
    type: 'selection',
    variant: 'CODE_VIEWER_SUBTHEME',
  },

  variant: DropdownSelectedVariantType.DEFAULT,
};

export const DropdownSelected: Story = {
  args: {
    ...commonArgs,
  },
};
