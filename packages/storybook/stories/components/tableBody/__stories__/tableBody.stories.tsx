import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  TableBody as TableBodyComponent,
  TableCell,
  TableRow,
} from '@kubit-ui-web/react-components';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: TableBodyComponent,
  tags: ['table', 'table-body'],
  title: 'Components/Table/TableBody',
} satisfies Meta<typeof TableBodyComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const commonArgs = {
  variant: 'DEFAULT',
};

// Basic table body with multiple rows
export const Basic: StoryType = {
  args: {
    ...commonArgs,
    children: (
      <>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Product A</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">$299.99</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">In Stock</TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Product B</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Books</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">$19.99</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">In Stock</TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Product C</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Clothing</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">$49.99</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Low Stock</TableCell>
        </TableRow>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<TableBody variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Product A</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">$299.99</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">In Stock</TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Product B</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Books</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">$19.99</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">In Stock</TableCell>
  </TableRow>
</TableBody>`,
      },
    },
  },
};

// Table body with active row
export const WithActiveRow: StoryType = {
  args: {
    ...commonArgs,
    children: (
      <>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">User 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Admin</TableCell>
        </TableRow>
        <TableRow active={true} variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">User 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">jane@example.com</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Editor</TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">User 3</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">bob@example.com</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Viewer</TableCell>
        </TableRow>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<TableBody variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">User 1</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Admin</TableCell>
  </TableRow>
  <TableRow active={true} variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">User 2</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">jane@example.com</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Editor</TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">User 3</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">bob@example.com</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Viewer</TableCell>
  </TableRow>
</TableBody>`,
      },
    },
  },
};

// Table body with many rows
export const WithManyRows: StoryType = {
  args: {
    ...commonArgs,
    children: (
      <>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 4</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 5</TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 3</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 4</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 5</TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 3</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 4</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 5</TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 3</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 4</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 5</TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 3</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 4</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 5</TableCell>
        </TableRow>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<TableBody variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 1</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 2</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 1</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 2</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 3</TableCell>
  </TableRow>
  {/* More rows... */}
</TableBody>`,
      },
    },
  },
};

// Comprehensive table body matching original structure
export const TableBody: StoryType = {
  args: {
    ...commonArgs,
    children: (
      <>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 4</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 5</TableCell>
        </TableRow>
        <TableRow active={true} variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 3</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 4</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 5</TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 1</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 2</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 3</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 4</TableCell>
          <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 5</TableCell>
        </TableRow>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<TableBody variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 1</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 2</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 4</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 5</TableCell>
  </TableRow>
  <TableRow active={true} variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 1</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 2</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 3</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 4</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 5</TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 1</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 2</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 3</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 4</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 5</TableCell>
  </TableRow>
</TableBody>`,
      },
    },
  },
};
