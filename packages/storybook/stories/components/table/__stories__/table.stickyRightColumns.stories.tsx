import './css/table.css';

import type { Meta, StoryObj } from '@storybook/react';

import {
  TableBody,
  TableCell,
  Table as TableComponent,
  TableHead,
  TableRow,
} from '@kubit-ui-web/react-components';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: TableComponent,
  tags: ['table', 'sticky'],
  title: 'Components/Table/Table/StickyRightColumns',
} satisfies Meta<typeof TableComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const commonArgs = {
  variant: 'DEFAULT',
};

export const TableWithStickyRightColumns: StoryType = {
  args: {
    ...commonArgs,
    additionalClasses: {
      container: 'container-over-width',
    },
    ['aria-label']: 'Aria label example',
    autoRightStickyCalc: true,
    children: (
      <>
        <TableHead variant="DEFAULT">
          <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
            <TableCell th variant="HEADER_CELL_DEFAULT">
              Header Cell 1
            </TableCell>
            <TableCell th variant="HEADER_CELL_DEFAULT">
              Header Cell 2
            </TableCell>
            <TableCell th variant="HEADER_CELL_DEFAULT">
              Header Cell 3
            </TableCell>
            <TableCell th sticky="right" variant="HEADER_CELL_DEFAULT">
              Header Cell 4
            </TableCell>
            <TableCell th sticky="right" variant="HEADER_CELL_DEFAULT">
              Header Cell 5
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody variant="DEFAULT">
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 1 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 1 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow active variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 2 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 2 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 2 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 3 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 3 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 3 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 4 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 4 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 4 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 5 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 5 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 5 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 6 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 6 - Cell 5
            </TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 3</TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 7 - Cell 4
            </TableCell>
            <TableCell sticky="right" variant="BODY_CELL_DEFAULT">
              Row 7 - Cell 5
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<Table
  variant="DEFAULT"
  additionalClasses={{
    container: 'container-over-width',
  }}
  aria-label="Aria label example"
  autoRightStickyCalc={true}
>
  <TableHead variant="DEFAULT">
    <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Header Cell 1</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Header Cell 2</TableCell>
      <TableCell sticky="right" th={true} variant="HEADER_CELL_DEFAULT">Header Cell 3</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 1</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 2</TableCell>
      <TableCell sticky="right" variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
    },
  },
};
