import type { Meta, StoryObj } from '@storybook/react-vite';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { InputBase as Story } from '@kubit-ui-web/react-components';

import { argtypes } from './argtypes';

const { InputBaseVariantType } = KUBIT_VARIANTS;

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    docs: {
      description: {
        component:
          'InputBase is a low-level foundational component that provides the base functionality for text input fields. It extends InputHTMLAttributes and AriaAttributes (React types).',
      },
    },
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/inputBase',
  },
  tags: ['forms'],
  title: 'Components/Forms/InputBase',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  id: 'inputBaseId',
  placeholder: 'Enter text...',
  type: 'text',
  variant: InputBaseVariantType.STANDARD,
};

export const Basic: Story = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    ...commonArgs,
    defaultValue: 'Default value',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  defaultValue="Default value"
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const Focused: Story = {
  args: {
    ...commonArgs,
    focused: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  focused={true}
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const Filled: Story = {
  args: {
    ...commonArgs,
    defaultValue: 'Filled input',
    filled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  defaultValue="Filled input"
  filled={true}
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const WithError: Story = {
  args: {
    ...commonArgs,
    error: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  error={true}
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...commonArgs,
    defaultValue: 'Disabled input',
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  defaultValue="Disabled input"
  disabled={true}
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const Required: Story = {
  args: {
    ...commonArgs,
    required: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  required={true}
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const ReadOnly: Story = {
  args: {
    ...commonArgs,
    defaultValue: 'Read-only value',
    readOnly: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  defaultValue="Read-only value"
  readOnly={true}
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const StandardVariant: Story = {
  args: {
    ...commonArgs,
    variant: InputBaseVariantType.STANDARD,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const FilledVariant: Story = {
  args: {
    ...commonArgs,
    variant: InputBaseVariantType.FILLED,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.FILLED}
/>`,
      },
    },
  },
};

export const OutlinedVariant: Story = {
  args: {
    ...commonArgs,
    variant: InputBaseVariantType.OUTLINED,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.OUTLINED}
/>`,
      },
    },
  },
};

export const EmailType: Story = {
  args: {
    ...commonArgs,
    autoCapitalize: 'none',
    inputMode: 'email',
    placeholder: 'email@example.com',
    type: 'email',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  type="email"
  inputMode="email"
  autoCapitalize="none"
  placeholder="email@example.com"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const PasswordType: Story = {
  args: {
    ...commonArgs,
    placeholder: 'Enter password',
    type: 'password',
    variant: InputBaseVariantType.FILLED,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  type="password"
  placeholder="Enter password"
  variant={InputBaseVariantType.FILLED}
/>`,
      },
    },
  },
};

export const NumberType: Story = {
  args: {
    ...commonArgs,
    inputMode: 'numeric',
    max: 100,
    min: 0,
    placeholder: '0',
    type: 'number',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  type="number"
  inputMode="numeric"
  min={0}
  max={100}
  placeholder="0"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const TelType: Story = {
  args: {
    ...commonArgs,
    autoCapitalize: 'none',
    inputMode: 'tel',
    maxLength: 15,
    placeholder: '+1 (555) 123-4567',
    type: 'tel',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  type="tel"
  inputMode="tel"
  autoCapitalize="none"
  maxLength={15}
  placeholder="+1 (555) 123-4567"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const URLType: Story = {
  args: {
    ...commonArgs,
    autoCapitalize: 'none',
    inputMode: 'url',
    placeholder: 'https://example.com',
    type: 'url',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  type="url"
  inputMode="url"
  autoCapitalize="none"
  placeholder="https://example.com"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const SearchType: Story = {
  args: {
    ...commonArgs,
    inputMode: 'search',
    placeholder: 'Search...',
    type: 'search',
    variant: InputBaseVariantType.FILLED,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  type="search"
  inputMode="search"
  placeholder="Search..."
  variant={InputBaseVariantType.FILLED}
/>`,
      },
    },
  },
};

export const WithMaxLength: Story = {
  args: {
    ...commonArgs,
    maxLength: 10,
    placeholder: 'Max 10 chars',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  maxLength={10}
  placeholder="Max 10 chars"
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const WithTruncate: Story = {
  args: {
    ...commonArgs,
    defaultValue: 'This is a very long text that will be truncated',
    truncate: true,
    variant: InputBaseVariantType.OUTLINED,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  defaultValue="This is a very long text that will be truncated"
  truncate={true}
  type="text"
  variant={InputBaseVariantType.OUTLINED}
/>`,
      },
    },
  },
};

export const WithAutoFocus: Story = {
  args: {
    ...commonArgs,
    autoFocus: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  autoFocus={true}
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const WithPattern: Story = {
  args: {
    ...commonArgs,
    pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
    placeholder: '123-456-7890',
    type: 'tel',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  type="tel"
  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  placeholder="123-456-7890"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const WithCustomClasses: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      input_base: 'custom-border custom-padding',
    },
    defaultValue: 'Custom styled',
  },
  parameters: {
    docs: {
      source: {
        code: `<InputBase
  id="inputBaseId"
  defaultValue="Custom styled"
  additionalClasses={{
    input_base: 'custom-border custom-padding',
  }}
  placeholder="Enter text..."
  type="text"
  variant={InputBaseVariantType.STANDARD}
/>`,
      },
    },
  },
};
