import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextArea as Story } from '@kubit-ui-web/react-components';
import { useState } from 'react';

import { ICONS } from '@/stories/assets/icons/icons';

import type { TextAreaProps } from '../types/textArea';

const StoryWithHooks = (args: TextAreaProps) => {
  const [value, setValue] = useState(args.value || '');

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    args.onChange?.(event);
  };

  return (
    <div style={{ width: '400px' }}>
      <Story {...args} value={value} onChange={onChange} />
    </div>
  );
};

const meta = {
  component: Story,
  parameters: {
    docs: {
      description: {
        component:
          'TextArea component for multi-line text input. Supports labels, error states, character counting, help messages, and various accessibility features for form inputs.',
      },
    },
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/textArea',
    layout: 'centered',
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['forms'],
  title: 'Components/Forms/TextArea',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Basic: Story = {
  args: {
    counterVariant: 'DEFAULT',
    label: 'Comments',
    maxLength: 500,
    placeholder: 'Enter your comments here...',
    screenReaderTextCount: 'characters remaining',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea
  variant='DEFAULT'
  label='Comments'
  placeholder='Enter your comments here...'
  maxLength={500}
  counterVariant='DEFAULT'
  screenReaderTextCount='characters remaining'
/>`,
      },
    },
  },
};

export const WithTitle: Story = {
  args: {
    counterVariant: 'DEFAULT',
    label: 'Feedback',
    maxLength: 300,
    placeholder: 'Share your feedback',
    screenReaderTextCount: 'characters remaining',
    title: 'Please provide your feedback',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea
  variant='DEFAULT'
  title='Please provide your feedback'
  label='Feedback'
  placeholder='Share your feedback'
  maxLength={300}
  counterVariant='DEFAULT'
  screenReaderTextCount='characters remaining'
/>`,
      },
    },
  },
};

export const WithHelpMessage: Story = {
  args: {
    counterVariant: 'DEFAULT',
    helpMessage:
      'Provide detailed information to help us understand your request',
    label: 'Description',
    maxLength: 500,
    placeholder: 'Enter description',
    screenReaderTextCount: 'characters remaining',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea
  variant='DEFAULT'
  label='Description'
  placeholder='Enter description'
  helpMessage='Provide detailed information to help us understand your request'
  maxLength={500}
  counterVariant='DEFAULT'
  screenReaderTextCount='characters remaining'
/>`,
      },
    },
  },
};

export const WithError: Story = {
  args: {
    counterVariant: 'DEFAULT',
    error: true,
    errorIcon: { icon: ICONS.ERROR },
    errorMessage: 'This field is required',
    label: 'Message',
    maxLength: 200,
    placeholder: 'Enter your message',
    screenReaderTextCount: 'characters remaining',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea
  variant='DEFAULT'
  label='Message'
  placeholder='Enter your message'
  error={true}
  errorIcon={{ icon: ICONS.ERROR }}
  errorMessage='This field is required'
  maxLength={200}
  counterVariant='DEFAULT'
  screenReaderTextCount='characters remaining'
/>`,
      },
    },
  },
};

export const Required: Story = {
  args: {
    counterVariant: 'DEFAULT',
    label: 'Required Field',
    maxLength: 300,
    placeholder: 'This field is required',
    required: true,
    screenReaderTextCount: 'characters remaining',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea
  variant='DEFAULT'
  label='Required Field'
  placeholder='This field is required'
  required={true}
  maxLength={300}
  counterVariant='DEFAULT'
  screenReaderTextCount='characters remaining'
/>`,
      },
    },
  },
};

export const WithInitialValue: Story = {
  args: {
    counterVariant: 'DEFAULT',
    label: 'Bio',
    maxLength: 500,
    placeholder: 'Tell us about yourself',
    screenReaderTextCount: 'characters remaining',
    value:
      'This is some initial text content that appears in the textarea when it loads.',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea
  variant='DEFAULT'
  label='Bio'
  placeholder='Tell us about yourself'
  value='This is some initial text content that appears in the textarea when it loads.'
  maxLength={500}
  counterVariant='DEFAULT'
  screenReaderTextCount='characters remaining'
/>`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    counterVariant: 'DEFAULT',
    disabled: true,
    label: 'Disabled TextArea',
    maxLength: 300,
    placeholder: 'This textarea is disabled',
    screenReaderTextCount: 'characters remaining',
    value: 'Cannot edit this text',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea
  variant='DEFAULT'
  label='Disabled TextArea'
  placeholder='This textarea is disabled'
  disabled={true}
  value='Cannot edit this text'
  maxLength={300}
  counterVariant='DEFAULT'
  screenReaderTextCount='characters remaining'
/>`,
      },
    },
  },
};

export const CustomHeight: Story = {
  args: {
    counterVariant: 'DEFAULT',
    height: '200px',
    label: 'Long Form Content',
    maxLength: 1000,
    placeholder: 'Enter long form content',
    screenReaderTextCount: 'characters remaining',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea
  variant='DEFAULT'
  label='Long Form Content'
  placeholder='Enter long form content'
  height='200px'
  maxLength={1000}
  counterVariant='DEFAULT'
  screenReaderTextCount='characters remaining'
/>`,
      },
    },
  },
};

export const WithSpellCheck: Story = {
  args: {
    counterVariant: 'DEFAULT',
    label: 'Essay',
    maxLength: 1000,
    placeholder: 'Write your essay',
    screenReaderTextCount: 'characters remaining',
    spellCheck: true,
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea
  variant='DEFAULT'
  label='Essay'
  placeholder='Write your essay'
  spellCheck={true}
  maxLength={1000}
  counterVariant='DEFAULT'
  screenReaderTextCount='characters remaining'
/>`,
      },
    },
  },
};

export const LabelInsideTextArea: Story = {
  args: {
    counterVariant: 'DEFAULT',
    label: 'Internal Label',
    labelInsideTextArea: true,
    maxLength: 300,
    placeholder: 'Type here...',
    screenReaderTextCount: 'characters remaining',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea
  variant='DEFAULT'
  label='Internal Label'
  labelInsideTextArea={true}
  placeholder='Type here...'
  maxLength={300}
  counterVariant='DEFAULT'
  screenReaderTextCount='characters remaining'
/>`,
      },
    },
  },
};

export const TextArea: Story = {
  args: {
    counterVariant: 'DEFAULT',
    error: true,
    errorIcon: { icon: ICONS.PLACEHOLDER },
    errorMessage: 'errorMessage',
    helpMessage: 'helpMessage',
    label: 'Label',
    maxLength: 100,
    placeholder: 'placeholder',
    screenReaderTextCount: 'Example of screen reader text count',
    title: 'Title',
    value: 'Example text area value',
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea
  variant='DEFAULT'
  title='Title'
  label='Label'
  placeholder='placeholder'
  helpMessage='helpMessage'
  error={true}
  errorIcon={{ icon: ICONS.PLACEHOLDER }}
  errorMessage='errorMessage'
  value='Example text area value'
  maxLength={100}
  counterVariant='DEFAULT'
  screenReaderTextCount='Example of screen reader text count'
/>`,
      },
    },
  },
};
