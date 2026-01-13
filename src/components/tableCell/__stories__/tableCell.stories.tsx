import type { Meta, StoryObj } from '@storybook/react-vite';

import { TableCell as TableCellComponent } from '../tableCell';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: TableCellComponent,
  tags: ['table', 'table-cell'],
  title: 'Components/Table/TableCell',
} satisfies Meta<typeof TableCellComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

// Header cell default variant
export const HeaderCellDefault: StoryType = {
  args: {
    children: 'Header Column',
    variant: 'HEADER_CELL_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="HEADER_CELL_DEFAULT">
  Header Column
</TableCell>`,
      },
    },
  },
};

// Header cell secondary variant
export const HeaderCellSecondary: StoryType = {
  args: {
    children: 'Secondary Header',
    variant: 'HEADER_CELL_SECONDARY',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="HEADER_CELL_SECONDARY">
  Secondary Header
</TableCell>`,
      },
    },
  },
};

// Body cell default variant
export const BodyCellDefault: StoryType = {
  args: {
    children: 'Cell Content',
    variant: 'BODY_CELL_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="BODY_CELL_DEFAULT">
  Cell Content
</TableCell>`,
      },
    },
  },
};

// Cell with colspan
export const WithColSpan: StoryType = {
  args: {
    children: 'This cell spans 3 columns',
    colSpan: 3,
    variant: 'BODY_CELL_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="BODY_CELL_DEFAULT" colSpan={3}>
  This cell spans 3 columns
</TableCell>`,
      },
    },
  },
};

// Cell with rowspan
export const WithRowSpan: StoryType = {
  args: {
    children: 'This cell spans 2 rows',
    rowSpan: 2,
    variant: 'BODY_CELL_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="BODY_CELL_DEFAULT" rowSpan={2}>
  This cell spans 2 rows
</TableCell>`,
      },
    },
  },
};

// Hidden cell (accessible but visually hidden)
export const HiddenCell: StoryType = {
  args: {
    children: 'This cell is hidden but accessible',
    hidden: true,
    variant: 'BODY_CELL_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="BODY_CELL_DEFAULT" hidden={true}>
  This cell is hidden but accessible
</TableCell>`,
      },
    },
  },
};

// Cell with custom alignment
export const WithTextAlign: StoryType = {
  args: {
    children: '$1,234.56',
    textAlign: 'right',
    variant: 'BODY_CELL_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
  $1,234.56
</TableCell>`,
      },
    },
  },
};

// Cell with custom width
export const WithCustomWidth: StoryType = {
  args: {
    children: 'Fixed Width Cell',
    variant: 'BODY_CELL_DEFAULT',
    width: '200px',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="BODY_CELL_DEFAULT" width="200px">
  Fixed Width Cell
</TableCell>`,
      },
    },
  },
};

// Sticky cell (left)
export const StickyLeft: StoryType = {
  args: {
    children: 'Sticky Left',
    sticky: 'left',
    variant: 'HEADER_CELL_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="HEADER_CELL_DEFAULT" sticky="left">
  Sticky Left
</TableCell>`,
      },
    },
  },
};

// Sticky cell (right)
export const StickyRight: StoryType = {
  args: {
    children: 'Sticky Right',
    sticky: 'right',
    variant: 'HEADER_CELL_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="HEADER_CELL_DEFAULT" sticky="right">
  Sticky Right
</TableCell>`,
      },
    },
  },
};

// Cell with accessibility scope
export const WithScope: StoryType = {
  args: {
    children: 'Product Category',
    scope: 'col',
    th: true,
    variant: 'HEADER_CELL_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="HEADER_CELL_DEFAULT" th={true} scope="col">
  Product Category
</TableCell>`,
      },
    },
  },
};

// Default story matching original structure
export const TableCell: StoryType = {
  args: {
    children: 'children',
    variant: 'HEADER_CELL_DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableCell variant="HEADER_CELL_DEFAULT">
  children
</TableCell>`,
      },
    },
  },
};
