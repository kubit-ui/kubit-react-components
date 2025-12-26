import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxVariantType } from '@/lib/designSystem/kubit/components/checkbox/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { CheckboxUnControlled as Story } from '../checkboxUnControlled';
import type { CheckboxUnControlledProps } from '../types/checkbox';
import { argtypes } from './argtypes';

const StoryWithHooks = (args) => {
  return <Story {...args} />;
};

const meta: Meta<typeof Story> = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
    note: {
      text: [
        <span key="note-1">
          This component is built using the <strong>CheckboxBase</strong>{' '}
          component.
        </span>,
        <span key="note-2">
          The <strong>ref</strong> provided to this component points to the
          parent container. To access the input element directly, use the{' '}
          <strong>inputRef</strong> property.
        </span>,
      ],
      theme: 'information',
    },
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/Checkbox',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: CheckboxUnControlledProps = {
  checkboxBase: {
    variant: 'DEFAULT',
  },
  checked: false,
  checkedIcon: {
    altText: 'Checked icon alternative text',
    icon: ICONS.CHECKMARK_THICK,
  },
  disabled: false,
  error: false,
  errorMessage: {
    icon: { altText: 'Error alternative text', icon: ICONS.CHECKMARK_THICK },
    message: { content: 'Error text' },
  },
  label: {
    content: 'Label text',
  },
  required: false,
  screenReaderText: 'screen reader text',
  variant: CheckboxVariantType.DEFAULT,
};

/**
 * Default uncontrolled checkbox with a label.
 */
export const Checkbox: Story = {
  args: {
    ...commonArgs,
  },
};
