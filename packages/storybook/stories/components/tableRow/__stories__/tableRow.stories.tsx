import type { Meta, StoryObj } from '@storybook/react';

import {
  TableCell,
  TableRow as TableRowComponent,
} from '@kubit-ui-web/react-components';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: TableRowComponent,
  tags: ['table', 'table-row'],
  title: 'Components/Table/TableRow',
} satisfies Meta<typeof TableRowComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

// Header row default variant
export const HeaderRowDefault: StoryType = {
  args: {
    children: (
      <>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Name
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Email
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Role
        </TableCell>
      </>
    ),
    variant: 'HEAD_ROW_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableRow variant="HEAD_ROW_DEFAULT">
  <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
    Name
  </TableCell>
  <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
    Email
  </TableCell>
  <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
    Role
  </TableCell>
</TableRow>`,
      },
    },
  },
};

// Header row secondary variant
export const HeaderRowSecondary: StoryType = {
  args: {
    children: (
      <>
        <TableCell th scope="col" variant="HEADER_CELL_SECONDARY">
          Q1
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_SECONDARY">
          Q2
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_SECONDARY">
          Q3
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_SECONDARY">
          Q4
        </TableCell>
      </>
    ),
    variant: 'HEAD_ROW_SECONDARY',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableRow variant="HEAD_ROW_SECONDARY">
  <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
    Q1
  </TableCell>
  <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
    Q2
  </TableCell>
  <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
    Q3
  </TableCell>
  <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
    Q4
  </TableCell>
</TableRow>`,
      },
    },
  },
};

// Body row default variant
export const BodyRowDefault: StoryType = {
  args: {
    children: (
      <>
        <TableCell variant="BODY_CELL_DEFAULT">John Doe</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Admin</TableCell>
      </>
    ),
    variant: 'BODY_ROW_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableRow variant="BODY_ROW_DEFAULT">
  <TableCell variant="BODY_CELL_DEFAULT">John Doe</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Admin</TableCell>
</TableRow>`,
      },
    },
  },
};

// Active row
export const ActiveRow: StoryType = {
  args: {
    active: true,
    children: (
      <>
        <TableCell variant="BODY_CELL_DEFAULT">Jane Smith</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">jane@example.com</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Editor</TableCell>
      </>
    ),
    variant: 'BODY_ROW_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableRow variant="BODY_ROW_DEFAULT" active={true}>
  <TableCell variant="BODY_CELL_DEFAULT">Jane Smith</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">jane@example.com</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Editor</TableCell>
</TableRow>`,
      },
    },
  },
};

// Hoverable row
export const HoverableRow: StoryType = {
  args: {
    children: (
      <>
        <TableCell variant="BODY_CELL_DEFAULT">Product A</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
        <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
          $299.99
        </TableCell>
      </>
    ),
    hoverable: true,
    variant: 'BODY_ROW_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableRow variant="BODY_ROW_DEFAULT" hoverable={true}>
  <TableCell variant="BODY_CELL_DEFAULT">Product A</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
    $299.99
  </TableCell>
</TableRow>`,
      },
    },
  },
};

// Clickable row
export const ClickableRow: StoryType = {
  args: {
    children: (
      <>
        <TableCell variant="BODY_CELL_DEFAULT">Order #1234</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Pending</TableCell>
        <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
          $125.00
        </TableCell>
      </>
    ),
    hoverable: true,
    // eslint-disable-next-line no-alert
    onClick: () => alert('Row clicked!'),
    variant: 'BODY_ROW_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableRow
  variant="BODY_ROW_DEFAULT"
  hoverable={true}
  onClick={() => console.log('Row clicked')}
>
  <TableCell variant="BODY_CELL_DEFAULT">Order #1234</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT">Pending</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
    $125.00
  </TableCell>
</TableRow>`,
      },
    },
  },
};

// Row with mixed cell alignments
export const WithMixedAlignments: StoryType = {
  args: {
    children: (
      <>
        <TableCell variant="BODY_CELL_DEFAULT">Item Description</TableCell>
        <TableCell textAlign="center" variant="BODY_CELL_DEFAULT">
          Active
        </TableCell>
        <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
          150
        </TableCell>
        <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
          $1,234.56
        </TableCell>
      </>
    ),
    variant: 'BODY_ROW_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableRow variant="BODY_ROW_DEFAULT">
  <TableCell variant="BODY_CELL_DEFAULT">Item Description</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="center">
    Active
  </TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
    150
  </TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
    $1,234.56
  </TableCell>
</TableRow>`,
      },
    },
  },
};

// Row with spanning cells
export const WithSpanningCells: StoryType = {
  args: {
    children: (
      <>
        <TableCell variant="BODY_CELL_DEFAULT">Category Total</TableCell>
        <TableCell colSpan={2} textAlign="right" variant="BODY_CELL_DEFAULT">
          45 items
        </TableCell>
        <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
          <strong>$5,678.90</strong>
        </TableCell>
      </>
    ),
    variant: 'BODY_ROW_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableRow variant="BODY_ROW_DEFAULT">
  <TableCell variant="BODY_CELL_DEFAULT">Category Total</TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" colSpan={2} textAlign="right">
    45 items
  </TableCell>
  <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
    <strong>$5,678.90</strong>
  </TableCell>
</TableRow>`,
      },
    },
  },
};

// Default story matching original structure
export const TableRow: StoryType = {
  args: {
    children: (
      <>
        <TableCell variant="HEADER_CELL_DEFAULT">Cell 1</TableCell>
        <TableCell variant="HEADER_CELL_DEFAULT">Cell 2</TableCell>
        <TableCell variant="HEADER_CELL_DEFAULT">Cell 3</TableCell>
        <TableCell variant="HEADER_CELL_DEFAULT">Cell 4</TableCell>
        <TableCell variant="HEADER_CELL_DEFAULT">Cell 5</TableCell>
      </>
    ),
    variant: 'BODY_ROW_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableRow variant="BODY_ROW_DEFAULT">
  <TableCell variant="HEADER_CELL_DEFAULT">Cell 1</TableCell>
  <TableCell variant="HEADER_CELL_DEFAULT">Cell 2</TableCell>
  <TableCell variant="HEADER_CELL_DEFAULT">Cell 3</TableCell>
  <TableCell variant="HEADER_CELL_DEFAULT">Cell 4</TableCell>
  <TableCell variant="HEADER_CELL_DEFAULT">Cell 5</TableCell>
</TableRow>`,
      },
    },
  },
};
