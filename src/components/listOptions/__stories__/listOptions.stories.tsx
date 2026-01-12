import type { Meta, StoryObj } from '@storybook/react-vite';

import { ListOptionsVariantType } from '@/lib/designSystem/kubit/components/listOptions/variants';
import { OptionVariantType } from '@/lib/designSystem/kubit/components/option/variants';

import { ListOptions as Story } from '../listOptions';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/listOptions',
    layout: 'centered',
  },
  tags: ['selector'],
  title: 'Components/Selector/ListOptions',
} satisfies Meta<typeof Story>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const commonArgs = {
  highlightedOptionVariant: OptionVariantType.CODE_VIEWER_SUBTHEME,
  options: [
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
    {
      disabled: true,
      label: 'Option 3 (Disabled)',
      value: 3,
    },
    {
      label: 'Option 4',
      value: 4,
    },
  ],
  optionVariant: OptionVariantType.INPUT_DROPDOWN,
  selectedValue: 2,
  type: 'selection' as const,
  variant: ListOptionsVariantType.DEFAULT,
};

export const Basic: StoryType = {
  args: {
    ...commonArgs,
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3 (Disabled)', value: 3, disabled: true },
    { label: 'Option 4', value: 4 },
  ]}
  variant="DEFAULT"
  type="selection"
  selectedValue={2}
  optionVariant="INPUT_DROPDOWN"
/>`,
      },
    },
  },
};

export const SimpleList: StoryType = {
  args: {
    ...commonArgs,
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
      { label: 'Date', value: 'date' },
    ],
    selectedValue: 'banana',
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Date', value: 'date' },
  ]}
  variant="DEFAULT"
  type="selection"
  selectedValue="banana"
/>`,
      },
    },
  },
};

export const WithTitle: StoryType = {
  args: {
    ...commonArgs,
    options: [
      { label: 'Small', value: 's' },
      { label: 'Medium', value: 'm' },
      { label: 'Large', value: 'l' },
      { label: 'Extra Large', value: 'xl' },
    ],
    selectedValue: 'm',
    title: 'Select Size',
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'Small', value: 's' },
    { label: 'Medium', value: 'm' },
    { label: 'Large', value: 'l' },
    { label: 'Extra Large', value: 'xl' },
  ]}
  variant="DEFAULT"
  type="selection"
  title="Select Size"
  selectedValue="m"
/>`,
      },
    },
  },
};

export const WithSearch: StoryType = {
  args: {
    ...commonArgs,
    charsHighlighted: 'script',
    options: [
      { label: 'JavaScript', value: 1 },
      { label: 'TypeScript', value: 2 },
      { label: 'Python', value: 3 },
      { label: 'Java', value: 4 },
      { label: 'C++', value: 5 },
    ],
    selectedValue: undefined,
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'JavaScript', value: 1 },
    { label: 'TypeScript', value: 2 },
    { label: 'Python', value: 3 },
    { label: 'Java', value: 4 },
    { label: 'C++', value: 5 },
  ]}
  variant="DEFAULT"
  type="selection"
  charsHighlighted="script"
/>`,
      },
    },
  },
};

export const MultiSelect: StoryType = {
  args: {
    ...commonArgs,
    checkedIcon: { icon: 'CHECK' },
    multiSelect: true,
    options: [
      { label: 'React', value: 1 },
      { label: 'Vue', value: 2 },
      { label: 'Angular', value: 3 },
      { label: 'Svelte', value: 4 },
      { label: 'Solid', value: 5 },
    ],
    selectedValue: [1, 3, 4],
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'React', value: 1 },
    { label: 'Vue', value: 2 },
    { label: 'Angular', value: 3 },
    { label: 'Svelte', value: 4 },
    { label: 'Solid', value: 5 },
  ]}
  variant="DEFAULT"
  type="selection"
  multiSelect
  selectedValue={[1, 3, 4]}
  checkedIcon={{ icon: 'CHECK' }}
/>`,
      },
    },
  },
};

export const WithSublabels: StoryType = {
  args: {
    ...commonArgs,
    options: [
      { label: 'Free Plan', sublabel: '$0/month', value: 'free' },
      { label: 'Pro Plan', sublabel: '$19/month', value: 'pro' },
      { label: 'Business Plan', sublabel: '$49/month', value: 'business' },
      { label: 'Enterprise', sublabel: 'Contact us', value: 'enterprise' },
    ],
    selectedValue: 'pro',
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'Free Plan', sublabel: '$0/month', value: 'free' },
    { label: 'Pro Plan', sublabel: '$19/month', value: 'pro' },
    { label: 'Business Plan', sublabel: '$49/month', value: 'business' },
    { label: 'Enterprise', sublabel: 'Contact us', value: 'enterprise' },
  ]}
  variant="DEFAULT"
  selectedValue="pro"
/>`,
      },
    },
  },
};

export const WithDisabledOptions: StoryType = {
  args: {
    ...commonArgs,
    options: [
      { label: 'Available', value: 1 },
      { label: 'Available', value: 2 },
      { disabled: true, label: 'Out of Stock', value: 3 },
      { disabled: true, label: 'Coming Soon', value: 4 },
      { label: 'Available', value: 5 },
    ],
    selectedValue: 1,
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'Available', value: 1 },
    { label: 'Available', value: 2 },
    { label: 'Out of Stock', value: 3, disabled: true },
    { label: 'Coming Soon', value: 4, disabled: true },
    { label: 'Available', value: 5 },
  ]}
  variant="DEFAULT"
  selectedValue={1}
/>`,
      },
    },
  },
};

export const NavigationType: StoryType = {
  args: {
    ...commonArgs,
    options: [
      { label: 'Home', value: '/' },
      { label: 'Products', value: '/products' },
      { label: 'Services', value: '/services' },
      { label: 'About', value: '/about' },
      { label: 'Contact', value: '/contact' },
    ],
    selectedValue: '/',
    type: 'navigation',
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'Home', value: '/' },
    { label: 'Products', value: '/products' },
    { label: 'Services', value: '/services' },
    { label: 'About', value: '/about' },
    { label: 'Contact', value: '/contact' },
  ]}
  variant="DEFAULT"
  type="navigation"
  selectedValue="/"
/>`,
      },
    },
  },
};

export const WithHighlightedOptions: StoryType = {
  args: {
    ...commonArgs,
    options: [
      { label: 'Standard Option', value: 1 },
      { highlighted: true, label: 'Highlighted Option', value: 2 },
      { label: 'Standard Option', value: 3 },
      { highlighted: true, label: 'Another Highlighted', value: 4 },
    ],
    selectedValue: undefined,
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'Standard Option', value: 1 },
    { label: 'Highlighted Option', value: 2, highlighted: true },
    { label: 'Standard Option', value: 3 },
    { label: 'Another Highlighted', value: 4, highlighted: true },
  ]}
  variant="DEFAULT"
  highlightedOptionVariant="CODE_VIEWER_SUBTHEME"
/>`,
      },
    },
  },
};

export const LongList: StoryType = {
  args: {
    ...commonArgs,
    options: Array.from({ length: 20 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: i + 1,
    })),
    selectedValue: 10,
  },
  parameters: {
    docs: {
      source: {
        code: `const options = Array.from({ length: 20 }, (_, i) => ({
  label: \`Option \${i + 1}\`,
  value: i + 1,
}));

<ListOptions
  options={options}
  variant="DEFAULT"
  type="selection"
  selectedValue={10}
/>`,
      },
    },
  },
};

export const WithCustomContent: StoryType = {
  args: {
    ...commonArgs,
    content: (
      <div
        style={{
          background: '#f5f5f5',
          borderBottom: '1px solid #ddd',
          padding: '12px',
        }}
      >
        <strong>Recent Files</strong>
        <p style={{ color: '#666', fontSize: '12px', margin: '4px 0 0' }}>
          Last 7 days
        </p>
      </div>
    ),
    options: [
      { label: 'Document.pdf', value: 1 },
      { label: 'Presentation.pptx', value: 2 },
      { label: 'Spreadsheet.xlsx', value: 3 },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'Document.pdf', value: 1 },
    { label: 'Presentation.pptx', value: 2 },
    { label: 'Spreadsheet.xlsx', value: 3 },
  ]}
  variant="DEFAULT"
  content={
    <div style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>
      <strong>Recent Files</strong>
      <p style={{ margin: '4px 0 0', fontSize: '12px' }}>Last 7 days</p>
    </div>
  }
/>`,
      },
    },
  },
};

export const CountrySelector: StoryType = {
  args: {
    ...commonArgs,
    options: [
      { label: 'United States', value: 'us' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Germany', value: 'de' },
      { label: 'France', value: 'fr' },
      { label: 'Spain', value: 'es' },
      { label: 'Italy', value: 'it' },
      { label: 'Canada', value: 'ca' },
      { label: 'Australia', value: 'au' },
    ],
    selectedValue: 'us',
    title: 'Select Country',
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Spain', value: 'es' },
    { label: 'Italy', value: 'it' },
    { label: 'Canada', value: 'ca' },
    { label: 'Australia', value: 'au' },
  ]}
  variant="DEFAULT"
  title="Select Country"
  selectedValue="us"
/>`,
      },
    },
  },
};

export const PricingPlans: StoryType = {
  args: {
    ...commonArgs,
    options: [
      {
        label: 'Free',
        sublabel: 'Perfect for getting started',
        value: 'free',
      },
      {
        label: 'Pro',
        sublabel: 'Best for professionals',
        value: 'pro',
      },
      {
        label: 'Business',
        sublabel: 'For growing teams',
        value: 'business',
      },
      {
        label: 'Enterprise',
        sublabel: 'Advanced features & support',
        value: 'enterprise',
      },
    ],
    selectedValue: 'pro',
    title: 'Choose Your Plan',
  },
  parameters: {
    docs: {
      source: {
        code: `<ListOptions
  options={[
    { label: 'Free', sublabel: 'Perfect for getting started', value: 'free' },
    { label: 'Pro', sublabel: 'Best for professionals', value: 'pro' },
    { label: 'Business', sublabel: 'For growing teams', value: 'business' },
    { label: 'Enterprise', sublabel: 'Advanced features & support', value: 'enterprise' },
  ]}
  variant="DEFAULT"
  title="Choose Your Plan"
  selectedValue="pro"
/>`,
      },
    },
  },
};
