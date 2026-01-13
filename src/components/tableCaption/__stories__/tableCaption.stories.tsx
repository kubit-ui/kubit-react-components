import type { Meta, StoryObj } from '@storybook/react-vite';

import { TableCaption as TableCaptionComponent } from '../tableCaption';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: TableCaptionComponent,
  tags: ['table', 'table-caption'],
  title: 'Components/Table/TableCaption',
} satisfies Meta<typeof TableCaptionComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const commonArgs = {
  variant: 'DEFAULT',
};

// Basic table caption
export const Basic: StoryType = {
  args: {
    ...commonArgs,
    children: 'Table 1: Monthly Sales Report',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCaption variant="DEFAULT">
  Table 1: Monthly Sales Report
</TableCaption>`,
      },
    },
  },
};

// Caption with detailed description
export const WithDescription: StoryType = {
  args: {
    ...commonArgs,
    children:
      'User Management: List of active users with their roles and permissions',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCaption variant="DEFAULT">
  User Management: List of active users with their roles and permissions
</TableCaption>`,
      },
    },
  },
};

// Hidden caption (accessible but visually hidden)
export const Hidden: StoryType = {
  args: {
    ...commonArgs,
    children: 'This caption is hidden but still accessible to screen readers',
    hidden: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCaption variant="DEFAULT" hidden={true}>
  This caption is hidden but still accessible to screen readers
</TableCaption>`,
      },
    },
  },
};

// Caption with formatted text
export const WithFormattedText: StoryType = {
  args: {
    ...commonArgs,
    children: (
      <>
        <strong>Product Inventory</strong> - Last updated: January 2026
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCaption variant="DEFAULT">
  <strong>Product Inventory</strong> - Last updated: January 2026
</TableCaption>`,
      },
    },
  },
};

// Default story matching original structure
export const TableCaption: StoryType = {
  args: {
    ...commonArgs,
    children: 'Caption example',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCaption variant="DEFAULT">
  Caption example
</TableCaption>`,
      },
    },
  },
};
