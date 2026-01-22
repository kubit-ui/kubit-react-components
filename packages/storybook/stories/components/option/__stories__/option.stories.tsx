import type { Meta, StoryObj } from '@storybook/react-vite';

import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { Option as OptionComponent } from '../option';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: OptionComponent,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/option',
    layout: 'centered',
  },
  tags: ['selector', 'interactive'],
  title: 'Components/Selector/Option',
} satisfies Meta<typeof OptionComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const commonArgs = {
  hover: false,
  onMouseEnter: () => {
    // no-op
  },
  onMouseLeave: () => {
    // no-op
  },
  variant: 'DEFAULT',
};

export const Basic: StoryType = {
  args: {
    ...commonArgs,
    label: 'Basic Option',
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="Basic Option"
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const WithIcon: StoryType = {
  args: {
    ...commonArgs,
    icon: { altText: 'Icon', icon: ICONS.PLACEHOLDER },
    label: 'Option with Icon',
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="Option with Icon"
  icon={{ icon: ICONS.PLACEHOLDER, altText: 'Icon' }}
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const WithSublabel: StoryType = {
  args: {
    ...commonArgs,
    label: 'John Doe',
    sublabel: 'john.doe@example.com',
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="John Doe"
  sublabel="john.doe@example.com"
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const Selected: StoryType = {
  args: {
    ...commonArgs,
    label: 'Selected Option',
    selected: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="Selected Option"
  selected={true}
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const Disabled: StoryType = {
  args: {
    ...commonArgs,
    disabled: true,
    label: 'Disabled Option',
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="Disabled Option"
  disabled={true}
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const MultiSelect: StoryType = {
  args: {
    ...commonArgs,
    checkedIcon: { altText: 'Checked', icon: ICONS.CHECKMARK_THICK },
    label: 'Multi-Select Option',
    multiSelect: true,
    selected: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="Multi-Select Option"
  multiSelect={true}
  selected={true}
  checkedIcon={{ icon: ICONS.CHECKMARK_THICK, altText: 'Checked' }}
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const WithHighlighting: StoryType = {
  args: {
    ...commonArgs,
    label: 'JavaScript',
    labelCharsHighlighted: 'java',
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="JavaScript"
  labelCharsHighlighted="java"
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const Focused: StoryType = {
  args: {
    ...commonArgs,
    focus: true,
    label: 'Focused Option',
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="Focused Option"
  focus={true}
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const WithIconAndSublabel: StoryType = {
  args: {
    ...commonArgs,
    icon: { altText: 'Profile', icon: ICONS.PLACEHOLDER },
    label: 'User Profile',
    sublabel: 'View your account settings',
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="User Profile"
  sublabel="View your account settings"
  icon={{ icon: ICONS.PLACEHOLDER, altText: 'Profile' }}
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const WithReactNodeLabel: StoryType = {
  args: {
    ...commonArgs,
    label: (
      <>
        Label with <strong>Bold Text</strong> and <sup>Superscript</sup>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label={
    <>
      Label with <strong>Bold Text</strong> and <sup>Superscript</sup>
    </>
  }
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const MultiSelectUnselected: StoryType = {
  args: {
    ...commonArgs,
    checkedIcon: { altText: 'Checked', icon: ICONS.CHECKMARK_THICK },
    label: 'Unselected Task',
    multiSelect: true,
    selected: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="Unselected Task"
  multiSelect={true}
  selected={false}
  checkedIcon={{ icon: ICONS.CHECKMARK_THICK, altText: 'Checked' }}
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const WithAccessibility: StoryType = {
  args: {
    ...commonArgs,
    ['aria-describedby']: 'option-description',
    ['aria-label']: 'Select this option',
    label: 'Accessible Option',
    role: 'option',
    tabIndex: 0,
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="Accessible Option"
  variant="DEFAULT"
  aria-label="Select this option"
  aria-describedby="option-description"
  role="option"
  tabIndex={0}
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};

export const SelectedWithIcon: StoryType = {
  args: {
    ...commonArgs,
    icon: { altText: 'Item', icon: ICONS.PLACEHOLDER },
    label: 'Selected with Icon',
    selected: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Option
  label="Selected with Icon"
  icon={{ icon: ICONS.PLACEHOLDER, altText: 'Item' }}
  selected={true}
  variant="DEFAULT"
  hover={false}
  onMouseEnter={() => {}}
  onMouseLeave={() => {}}
/>`,
      },
    },
  },
};
