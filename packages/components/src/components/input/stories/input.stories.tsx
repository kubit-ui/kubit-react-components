import type { Meta, StoryObj } from '@storybook/react';

import { LabelStandAlone as Label } from '@/components/label/labelStandAlone';
import { InputVariantType } from '@/lib/designSystem/kubit/components/input/variants';
import { InputDecorationVariantType } from '@/lib/designSystem/kubit/components/inputDecoration/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import type { InputProps } from '../types/input';

import { Input as Story } from '../input';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/input',
  },
  tags: ['forms'],
  title: 'Components/Forms/Input',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: InputProps = {
  id: 'inputId',
  placeholder: 'Enter text...',
  type: 'text',
  variant: InputVariantType.STANDARD,
};

export const Basic: Story = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `<Input
  id="inputId"
  placeholder="Enter text..."
  type="text"
  variant={InputVariantType.STANDARD}
/>`,
      },
    },
  },
};

export const WithLabel: Story = {
  args: {
    ...commonArgs,
    id: 'username-input',
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="username-input">
    Username
  </Label>
  <Input
    id="username-input"
    placeholder="Enter text..."
    type="text"
    variant={InputVariantType.STANDARD}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="username-input">Username</Label>
      <Story {...args} />
    </>
  ),
};

export const WithDefaultValue: Story = {
  args: {
    ...commonArgs,
    defaultValue: 'Default value',
    id: 'name-input',
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="name-input">
    Name
  </Label>
  <Input
    id="name-input"
    defaultValue="Default value"
    placeholder="Enter text..."
    type="text"
    variant={InputVariantType.STANDARD}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="name-input">Name</Label>
      <Story {...args} />
    </>
  ),
};

export const Required: Story = {
  args: {
    ...commonArgs,
    id: 'email-input',
    required: true,
    type: 'email',
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="email-input" required requiredSymbol="*">
    Email
  </Label>
  <Input
    id="email-input"
    required={true}
    placeholder="Enter text..."
    type="email"
    variant={InputVariantType.STANDARD}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label required inputId="email-input" requiredSymbol="*">
        Email
      </Label>
      <Story {...args} />
    </>
  ),
};

export const Disabled: Story = {
  args: {
    ...commonArgs,
    defaultValue: 'Disabled input',
    disabled: true,
    id: 'disabled-input',
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="disabled-input">
    Disabled Field
  </Label>
  <Input
    id="disabled-input"
    defaultValue="Disabled input"
    disabled={true}
    placeholder="Enter text..."
    type="text"
    variant={InputVariantType.STANDARD}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="disabled-input">Disabled Field</Label>
      <Story {...args} />
    </>
  ),
};

export const WithError: Story = {
  args: {
    ...commonArgs,
    error: true,
    id: 'password-input',
    type: 'password',
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="password-input">
    Password
  </Label>
  <Input
    id="password-input"
    error={true}
    placeholder="Enter text..."
    type="password"
    variant={InputVariantType.STANDARD}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="password-input">Password</Label>
      <Story {...args} />
    </>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    ...commonArgs,
    id: 'search-input',
    leftDecoration: {
      decoration: {
        altText: 'Search icon',
        icon: ICONS.PLACEHOLDER,
      },
      variant: InputDecorationVariantType.STANDARD,
    },
    placeholder: 'Search...',
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="search-input">
    Search
  </Label>
  <Input
    id="search-input"
    leftDecoration={{
      decoration: {
        icon: ICONS.PLACEHOLDER,
        altText: 'Search icon',
      },
      variant: InputDecorationVariantType.STANDARD,
    }}
    placeholder="Search..."
    type="text"
    variant={InputVariantType.STANDARD}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="search-input">Search</Label>
      <Story {...args} />
    </>
  ),
};

export const WithRightIcon: Story = {
  args: {
    ...commonArgs,
    id: 'email-icon-input',
    placeholder: 'email@example.com',
    rightDecoration: {
      decoration: {
        altText: 'Email icon',
        icon: ICONS.PLACEHOLDER,
      },
      variant: InputDecorationVariantType.STANDARD,
    },
    type: 'email',
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="email-icon-input">
    Email
  </Label>
  <Input
    id="email-icon-input"
    rightDecoration={{
      decoration: {
        icon: ICONS.PLACEHOLDER,
        altText: 'Email icon',
      },
      variant: InputDecorationVariantType.STANDARD,
    }}
    placeholder="email@example.com"
    type="email"
    variant={InputVariantType.STANDARD}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="email-icon-input">Email</Label>
      <Story {...args} />
    </>
  ),
};

export const WithBothIcons: Story = {
  args: {
    ...commonArgs,
    id: 'username-icons-input',
    leftDecoration: {
      decoration: {
        altText: 'User icon',
        icon: ICONS.PLACEHOLDER,
      },
      variant: InputDecorationVariantType.STANDARD,
    },
    rightDecoration: {
      decoration: {
        altText: 'Clear icon',
        icon: ICONS.PLACEHOLDER,
        onClick: () => {
          // eslint-disable-next-line no-console
          console.log('Clear clicked');
        },
      },
      variant: InputDecorationVariantType.STANDARD,
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="username-icons-input">
    Username
  </Label>
  <Input
    id="username-icons-input"
    leftDecoration={{
      decoration: {
        icon: ICONS.PLACEHOLDER,
        altText: 'User icon',
      },
      variant: InputDecorationVariantType.STANDARD,
    }}
    rightDecoration={{
      decoration: {
        icon: ICONS.PLACEHOLDER,
        altText: 'Clear icon',
        onClick: () => console.log('Clear clicked'),
      },
      variant: InputDecorationVariantType.STANDARD,
    }}
    placeholder="Enter text..."
    type="text"
    variant={InputVariantType.STANDARD}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="username-icons-input">Username</Label>
      <Story {...args} />
    </>
  ),
};

export const StandardVariant: Story = {
  args: {
    ...commonArgs,
    id: 'standard-input',
    variant: InputVariantType.STANDARD,
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="standard-input">
    Standard Input
  </Label>
  <Input
    id="standard-input"
    placeholder="Enter text..."
    type="text"
    variant={InputVariantType.STANDARD}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="standard-input">Standard Input</Label>
      <Story {...args} />
    </>
  ),
};

export const FilledVariant: Story = {
  args: {
    ...commonArgs,
    id: 'filled-input',
    variant: InputVariantType.FILLED,
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="filled-input">
    Filled Input
  </Label>
  <Input
    id="filled-input"
    placeholder="Enter text..."
    type="text"
    variant={InputVariantType.FILLED}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="filled-input">Filled Input</Label>
      <Story {...args} />
    </>
  ),
};

export const OutlinedVariant: Story = {
  args: {
    ...commonArgs,
    id: 'outlined-input',
    variant: InputVariantType.OUTLINED,
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="outlined-input">
    Outlined Input
  </Label>
  <Input
    id="outlined-input"
    placeholder="Enter text..."
    type="text"
    variant={InputVariantType.OUTLINED}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="outlined-input">Outlined Input</Label>
      <Story {...args} />
    </>
  ),
};

export const EmailType: Story = {
  args: {
    ...commonArgs,
    autoCapitalize: 'none',
    id: 'email-type-input',
    inputMode: 'email',
    placeholder: 'your.email@example.com',
    type: 'email',
    variant: InputVariantType.OUTLINED,
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="email-type-input">
    Email Address
  </Label>
  <Input
    id="email-type-input"
    type="email"
    inputMode="email"
    autoCapitalize="none"
    placeholder="your.email@example.com"
    variant={InputVariantType.OUTLINED}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="email-type-input">Email Address</Label>
      <Story {...args} />
    </>
  ),
};

export const PasswordType: Story = {
  args: {
    ...commonArgs,
    id: 'password-type-input',
    placeholder: 'Enter password',
    type: 'password',
    variant: InputVariantType.FILLED,
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="password-type-input">
    Password
  </Label>
  <Input
    id="password-type-input"
    type="password"
    placeholder="Enter password"
    variant={InputVariantType.FILLED}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="password-type-input">Password</Label>
      <Story {...args} />
    </>
  ),
};

export const NumberType: Story = {
  args: {
    ...commonArgs,
    id: 'number-input',
    inputMode: 'numeric',
    placeholder: '18',
    type: 'number',
    variant: InputVariantType.OUTLINED,
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="number-input">
    Age
  </Label>
  <Input
    id="number-input"
    type="number"
    inputMode="numeric"
    placeholder="18"
    variant={InputVariantType.OUTLINED}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="number-input">Age</Label>
      <Story {...args} />
    </>
  ),
};

export const TelType: Story = {
  args: {
    ...commonArgs,
    autoCapitalize: 'none',
    id: 'tel-input',
    inputMode: 'tel',
    placeholder: '+1 (555) 123-4567',
    type: 'tel',
    variant: InputVariantType.STANDARD,
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="tel-input">
    Phone Number
  </Label>
  <Input
    id="tel-input"
    type="tel"
    inputMode="tel"
    autoCapitalize="none"
    placeholder="+1 (555) 123-4567"
    variant={InputVariantType.STANDARD}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="tel-input">Phone Number</Label>
      <Story {...args} />
    </>
  ),
};

export const URLType: Story = {
  args: {
    ...commonArgs,
    autoCapitalize: 'none',
    id: 'url-input',
    inputMode: 'url',
    placeholder: 'https://example.com',
    type: 'url',
    variant: InputVariantType.OUTLINED,
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="url-input">
    Website
  </Label>
  <Input
    id="url-input"
    type="url"
    inputMode="url"
    autoCapitalize="none"
    placeholder="https://example.com"
    variant={InputVariantType.OUTLINED}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="url-input">Website</Label>
      <Story {...args} />
    </>
  ),
};

export const SearchType: Story = {
  args: {
    ...commonArgs,
    id: 'search-type-input',
    inputMode: 'search',
    leftDecoration: {
      decoration: {
        altText: 'Search',
        icon: ICONS.PLACEHOLDER,
      },
      variant: InputDecorationVariantType.STANDARD,
    },
    placeholder: 'Search products...',
    type: 'search',
    variant: InputVariantType.FILLED,
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="search-type-input">
    Search
  </Label>
  <Input
    id="search-type-input"
    type="search"
    inputMode="search"
    leftDecoration={{
      decoration: {
        icon: ICONS.PLACEHOLDER,
        altText: 'Search',
      },
      variant: InputDecorationVariantType.STANDARD,
    }}
    placeholder="Search products..."
    variant={InputVariantType.FILLED}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="search-type-input">Search</Label>
      <Story {...args} />
    </>
  ),
};

export const WithMaxLength: Story = {
  args: {
    ...commonArgs,
    id: 'maxlength-input',
    maxLength: 10,
    placeholder: 'Max 10 chars',
    variant: InputVariantType.OUTLINED,
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="maxlength-input">
    Short Text
  </Label>
  <Input
    id="maxlength-input"
    maxLength={10}
    placeholder="Max 10 chars"
    type="text"
    variant={InputVariantType.OUTLINED}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="maxlength-input">Short Text</Label>
      <Story {...args} />
    </>
  ),
};

export const ReadOnly: Story = {
  args: {
    ...commonArgs,
    defaultValue: 'Read-only value',
    id: 'readonly-input',
    readOnly: true,
    variant: InputVariantType.FILLED,
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Label inputId="readonly-input">
    Read Only
  </Label>
  <Input
    id="readonly-input"
    defaultValue="Read-only value"
    readOnly={true}
    type="text"
    variant={InputVariantType.FILLED}
  />
</>`,
      },
    },
  },
  render: (args) => (
    <>
      <Label inputId="readonly-input">Read Only</Label>
      <Story {...args} />
    </>
  ),
};

export const WithoutLabel: Story = {
  args: {
    ...commonArgs,
    ['aria-label']: 'Search input without visible label',
    id: 'no-label-input',
    placeholder: 'Search...',
  },
  parameters: {
    docs: {
      source: {
        code: `<Input
  id="no-label-input"
  aria-label="Search input without visible label"
  placeholder="Search..."
  type="text"
  variant={InputVariantType.STANDARD}
/>`,
      },
    },
  },
};
