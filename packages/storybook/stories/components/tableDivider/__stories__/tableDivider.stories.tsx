import {
  TableDivider as TableDividerComponent,
  Tag,
} from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ICONS } from '@/stories/assets/icons/icons';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: TableDividerComponent,
  tags: ['table', 'table-divider'],
  title: 'Components/Table/TableDivider',
} satisfies Meta<typeof TableDividerComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

// Basic divider with tag
export const Basic: StoryType = {
  args: {
    children: (
      <Tag
        icon={ICONS.PLACEHOLDER}
        label="Section Label"
        variant="INFORMATIVE"
      />
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.PLACEHOLDER} label="Section Label" variant="INFORMATIVE" />
</TableDivider>`,
      },
    },
  },
};

// Divider with category tag
export const WithCategoryTag: StoryType = {
  args: {
    children: <Tag icon={ICONS.FOLDER} label="Electronics" variant="PRIMARY" />,
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.FOLDER} label="Electronics" variant="PRIMARY" />
</TableDivider>`,
      },
    },
  },
};

// Divider with status tag
export const WithStatusTag: StoryType = {
  args: {
    children: (
      <Tag icon={ICONS.CHECK_CIRCLE} label="Active Items" variant="SUCCESS" />
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.CHECK_CIRCLE} label="Active Items" variant="SUCCESS" />
</TableDivider>`,
      },
    },
  },
};

// Divider with warning tag
export const WithWarningTag: StoryType = {
  args: {
    children: (
      <Tag icon={ICONS.WARNING} label="Pending Review" variant="WARNING" />
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.WARNING} label="Pending Review" variant="WARNING" />
</TableDivider>`,
      },
    },
  },
};

// Divider with text only
export const WithTextOnly: StoryType = {
  args: {
    children: (
      <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
        Q4 2025 Results
      </span>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableDivider variant="DEFAULT">
  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Q4 2025 Results</span>
</TableDivider>`,
      },
    },
  },
};

// Divider with multiple elements
export const WithMultipleElements: StoryType = {
  args: {
    children: (
      <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
        <Tag icon={ICONS.CALENDAR} label="January 2026" variant="INFORMATIVE" />
        <span style={{ color: '#666', fontSize: '12px' }}>15 items</span>
      </div>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableDivider variant="DEFAULT">
  <div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
    <Tag icon={ICONS.CALENDAR} label="January 2026" variant="INFORMATIVE" />
    <span style={{ color: '#666', fontSize: '12px' }}>15 items</span>
  </div>
</TableDivider>`,
      },
    },
  },
};

// Default story matching original structure
export const TableDivider: StoryType = {
  args: {
    children: (
      <Tag icon={ICONS.PLACEHOLDER} label="LABEL" variant="INFORMATIVE" />
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableDivider variant="DEFAULT">
  <Tag icon={ICONS.PLACEHOLDER} label="LABEL" variant="INFORMATIVE" />
</TableDivider>`,
      },
    },
  },
};
