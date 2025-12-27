import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxBaseVariantType } from '@/lib/designSystem/kubit/components/checkboxBase/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import type { CheckboxBaseUnControlledProps } from '../types/checkboxBase';

import { CheckboxBaseUnControlled as Story } from '../checkboxBaseUncontrolled';
import { argtypes } from './argtypes';

const StoryWithHooks = (args) => {
  return <Story {...args} />;
};

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
    note: {
      text: [
        <span key="note-1">
          This component does not include a visible label. To meet accessibility
          requirements, you <strong>must</strong> provide an{' '}
          <strong>aria-label</strong> attribute to ensure screen reader users
          can understand the checkbox&apos;s purpose.
        </span>,
        <span key="note-2">
          If you need a checkbox with a visual label, consider using the{' '}
          <strong>Checkbox</strong> component, which internally uses this{' '}
          <strong>CheckboxBase</strong> component.
        </span>,
      ],
      theme: 'information',
    },
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/CheckboxBase',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: CheckboxBaseUnControlledProps = {
  ['aria-label']: 'Checkbox base example',
  checked: true,
  checkedIcon: {
    altText: 'Checked icon alternative text',
    icon: ICONS.CHECKMARK_THICK,
  },
  disabled: false,
  error: false,
  id: 'checkbox-base',
  name: 'checkbox-base',
  required: false,
  value: 'checkbox-value',
  variant: CheckboxBaseVariantType.DEFAULT,
};

export const CheckboxBase: Story = {
  args: {
    ...commonArgs,
  },
};
