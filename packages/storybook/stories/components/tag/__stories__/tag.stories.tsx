import { Tag as Story } from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ICONS } from '@/stories/assets/icons/icons';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    docs: {
      description: {
        component:
          'Tag component for displaying labels, statuses, and categories. Supports various semantic variants with optional icons for visual context.',
      },
    },
    layout: 'centered',
  },
  tags: ['status'],
  title: 'Components/Status/Tag',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Code: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'Code',
    variant: 'CODE',
  },
  parameters: {
    docs: {
      source: {
        code: "<Tag variant='CODE' icon={ICONS.CODE} label='Code' />",
      },
    },
  },
};

export const Deprecated: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'Deprecated',
    variant: 'DEPRECATED',
  },
  parameters: {
    docs: {
      source: {
        code: "<Tag variant='DEPRECATED' icon={ICONS.WARNING} label='Deprecated' />",
      },
    },
  },
};

export const Dormant: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'Dormant',
    variant: 'DORMANT',
  },
  parameters: {
    docs: {
      source: {
        code: "<Tag variant='DORMANT' icon={ICONS.CLOCK} label='Dormant' />",
      },
    },
  },
};

export const Healthy: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'Healthy',
    variant: 'HEALTHY',
  },
  parameters: {
    docs: {
      source: {
        code: "<Tag variant='HEALTHY' icon={ICONS.CHECK_CIRCLE} label='Healthy' />",
      },
    },
  },
};

export const Informative: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'Informative',
    variant: 'INFORMATIVE',
  },
  parameters: {
    docs: {
      source: {
        code: "<Tag variant='INFORMATIVE' icon={ICONS.INFO} label='Informative' />",
      },
    },
  },
};

export const Issue: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'Issue',
    variant: 'ISSUE',
  },
  parameters: {
    docs: {
      source: {
        code: "<Tag variant='ISSUE' icon={ICONS.ERROR} label='Issue' />",
      },
    },
  },
};

export const WithoutIcon: Story = {
  args: {
    label: 'Label Only',
    variant: 'INFORMATIVE',
  },
  parameters: {
    docs: {
      source: {
        code: "<Tag variant='INFORMATIVE' label='Label Only' />",
      },
    },
  },
};

export const LongLabel: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'This is a very long label for testing purposes',
    variant: 'INFORMATIVE',
  },
  parameters: {
    docs: {
      source: {
        code: "<Tag variant='INFORMATIVE' icon={ICONS.INFO} label='This is a very long label for testing purposes' />",
      },
    },
  },
};

export const WithAriaLabel: Story = {
  args: {
    ['aria-label']: 'Status: Active and healthy',
    icon: ICONS.PLACEHOLDER,
    label: 'Active',
    variant: 'HEALTHY',
  },
  parameters: {
    docs: {
      source: {
        code: `<Tag
  variant='HEALTHY'
  icon={ICONS.CHECK_CIRCLE}
  label='Active'
  aria-label='Status: Active and healthy'
/>`,
      },
    },
  },
};

export const AllVariants: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'LABEL',
    variant: 'CODE',
  },
  parameters: {
    docs: {
      source: {
        code: `<>
  <Tag variant='CODE' icon={ICONS.CODE} label='Code' />
  <Tag variant='DEPRECATED' icon={ICONS.WARNING} label='Deprecated' />
  <Tag variant='DORMANT' icon={ICONS.CLOCK} label='Dormant' />
  <Tag variant='HEALTHY' icon={ICONS.CHECK_CIRCLE} label='Healthy' />
  <Tag variant='INFORMATIVE' icon={ICONS.INFO} label='Informative' />
  <Tag variant='ISSUE' icon={ICONS.ERROR} label='Issue' />
</>`,
      },
    },
  },
};

export const Tag: Story = {
  args: {
    icon: ICONS.PLACEHOLDER,
    label: 'LABEL',
    variant: 'CODE',
  },
  parameters: {
    docs: {
      source: {
        code: "<Tag variant='CODE' icon={ICONS.PLACEHOLDER} label='LABEL' />",
      },
    },
  },
};
