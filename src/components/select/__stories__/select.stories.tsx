import type { Meta, StoryObj } from '@storybook/react-vite';

import { SelectVariantType } from '@/lib/designSystem/kubit/components/select/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import type { SelectUnControlledProps } from '../types/select';

import { SelectUnControlled as Story } from '../selectUncontrolled';
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
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/Select',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: SelectUnControlledProps = {
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

  variant: SelectVariantType.DEFAULT,
};

export const Select: Story = {
  args: {
    ...commonArgs,
  },
};
