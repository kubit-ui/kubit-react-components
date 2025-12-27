import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState } from 'react';

import { TextAreaVariantType } from '@/lib/designSystem/kubit/components/textArea/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import type { TextAreaProps } from '../types/textArea';

import { TextArea as Story } from '../textArea';

const StoryWithHooks = (args) => {
  const [value, setValue] = useState(undefined);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ width: '300px' }}>
      <Story {...args} value={value} onChange={onChange} />
    </div>
  );
};

const meta = {
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/textArea',
    layout: 'centered',
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['autodocs', 'forms'],
  title: 'Components/Forms/TextArea',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: TextAreaProps = {
  counterVariant: 'DEFAULT',
  error: true,
  errorIcon: { icon: ICONS.PLACEHOLDER },
  errorMessage: { content: 'errorMessage' },
  helpMessage: { content: 'helpMessage' },
  label: { content: 'Label' },
  maxLength: 100,
  placeholder: 'placeholder',
  screenReaderTextCount: 'Example of screen reader text count',
  title: { content: 'Title' },
  value: 'Example text area value',
  variant: TextAreaVariantType.DEFAULT,
};

export const TextArea: Story = {
  args: {
    ...commonArgs,
  },
};
