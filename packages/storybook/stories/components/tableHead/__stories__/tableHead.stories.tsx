import type { Meta, StoryObj } from '@storybook/react';

import {
  TableCell,
  TableHead as TableHeadComponent,
  TableRow,
} from '@kubit-ui-web/react-components';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: TableHeadComponent,
  tags: ['table', 'table-head'],
  title: 'Components/Table/TableHead',
} satisfies Meta<typeof TableHeadComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

// Basic header with columns
export const Basic: StoryType = {
  args: {
    children: (
      <TableRow variant="HEAD_ROW_DEFAULT">
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Name
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Email
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Role
        </TableCell>
      </TableRow>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Name
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Email
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Role
    </TableCell>
  </TableRow>
</TableHead>`,
      },
    },
  },
};

// Header with aligned columns
export const WithAlignedColumns: StoryType = {
  args: {
    children: (
      <TableRow variant="HEAD_ROW_DEFAULT">
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Product
        </TableCell>
        <TableCell
          th
          scope="col"
          textAlign="center"
          variant="HEADER_CELL_DEFAULT"
        >
          Status
        </TableCell>
        <TableCell
          th
          scope="col"
          textAlign="right"
          variant="HEADER_CELL_DEFAULT"
        >
          Price
        </TableCell>
        <TableCell
          th
          scope="col"
          textAlign="right"
          variant="HEADER_CELL_DEFAULT"
        >
          Quantity
        </TableCell>
      </TableRow>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Product
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" textAlign="center">
      Status
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" textAlign="right">
      Price
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" textAlign="right">
      Quantity
    </TableCell>
  </TableRow>
</TableHead>`,
      },
    },
  },
};

// Header with multiple rows (grouped headers)
export const WithMultipleRows: StoryType = {
  args: {
    children: (
      <>
        <TableRow variant="HEAD_ROW_DEFAULT">
          <TableCell
            th
            rowSpan={2}
            scope="col"
            variant="HEADER_CELL_DEFAULT"
          >
            Product
          </TableCell>
          <TableCell
            th
            colSpan={3}
            scope="colgroup"
            variant="HEADER_CELL_DEFAULT"
          >
            Sales Data
          </TableCell>
        </TableRow>
        <TableRow variant="HEAD_ROW_DEFAULT">
          <TableCell th scope="col" variant="HEADER_CELL_SECONDARY">
            Q1
          </TableCell>
          <TableCell th scope="col" variant="HEADER_CELL_SECONDARY">
            Q2
          </TableCell>
          <TableCell th scope="col" variant="HEADER_CELL_SECONDARY">
            Q3
          </TableCell>
        </TableRow>
      </>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" rowSpan={2}>
      Product
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="colgroup" colSpan={3}>
      Sales Data
    </TableCell>
  </TableRow>
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q1
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q2
    </TableCell>
    <TableCell variant="HEADER_CELL_SECONDARY" th={true} scope="col">
      Q3
    </TableCell>
  </TableRow>
</TableHead>`,
      },
    },
  },
};

// Sticky header
export const StickyHeader: StoryType = {
  args: {
    children: (
      <TableRow variant="HEAD_ROW_DEFAULT">
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Column 1
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Column 2
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Column 3
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Column 4
        </TableCell>
      </TableRow>
    ),
    sticky: true,
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableHead variant="DEFAULT" sticky={true}>
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 1
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 2
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 3
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 4
    </TableCell>
  </TableRow>
</TableHead>`,
      },
    },
  },
};

// Hidden header (accessible but visually hidden)
export const HiddenHeader: StoryType = {
  args: {
    children: (
      <TableRow variant="HEAD_ROW_DEFAULT">
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Column 1
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Column 2
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Column 3
        </TableCell>
      </TableRow>
    ),
    hidden: true,
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableHead variant="DEFAULT" hidden={true}>
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 1
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 2
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Column 3
    </TableCell>
  </TableRow>
</TableHead>`,
      },
    },
  },
};

// Header with custom width columns
export const WithCustomWidths: StoryType = {
  args: {
    children: (
      <TableRow variant="HEAD_ROW_DEFAULT">
        <TableCell
          th
          scope="col"
          variant="HEADER_CELL_DEFAULT"
          width="40%"
        >
          Description
        </TableCell>
        <TableCell
          th
          scope="col"
          variant="HEADER_CELL_DEFAULT"
          width="20%"
        >
          Status
        </TableCell>
        <TableCell
          th
          scope="col"
          variant="HEADER_CELL_DEFAULT"
          width="20%"
        >
          Date
        </TableCell>
        <TableCell
          th
          scope="col"
          variant="HEADER_CELL_DEFAULT"
          width="20%"
        >
          Amount
        </TableCell>
      </TableRow>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" width="40%">
      Description
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" width="20%">
      Status
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" width="20%">
      Date
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col" width="20%">
      Amount
    </TableCell>
  </TableRow>
</TableHead>`,
      },
    },
  },
};

// Default story matching original structure
export const TableHead: StoryType = {
  args: {
    children: (
      <TableRow variant="HEAD_ROW_DEFAULT">
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Cell 1
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Cell 2
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Cell 3
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Cell 4
        </TableCell>
        <TableCell th scope="col" variant="HEADER_CELL_DEFAULT">
          Cell 5
        </TableCell>
      </TableRow>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableHead variant="DEFAULT">
  <TableRow variant="HEAD_ROW_DEFAULT">
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Cell 1
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Cell 2
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Cell 3
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Cell 4
    </TableCell>
    <TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
      Cell 5
    </TableCell>
  </TableRow>
</TableHead>`,
      },
    },
  },
};
