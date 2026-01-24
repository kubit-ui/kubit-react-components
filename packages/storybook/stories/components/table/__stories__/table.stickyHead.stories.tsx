import './css/table.css';

import {
  TableBody,
  TableCell,
  Table as TableComponent,
  TableFoot,
  TableHead,
  TableRow,
} from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: TableComponent,
  tags: ['table', 'sticky'],
  title: 'Components/Table/Table/StickyHead',
} satisfies Meta<typeof TableComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const commonArgs = {
  variant: 'DEFAULT',
};

export const TableWithStickyHead: StoryType = {
  args: {
    ...commonArgs,
    additionalClasses: {
      scrollablecontainer: 'scrollablecontainer-max-height',
    },
    ['aria-label']: 'Aria label example',
    children: (
      <>
        <TableHead sticky={true} variant="DEFAULT">
          <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 1
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 2
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 3
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 4
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Header Cell 5
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody variant="DEFAULT">
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
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 6 - Cell 5</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 1</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 2</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 3</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 4</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Row 7 - Cell 5</TableCell>
          </TableRow>
        </TableBody>
        <TableFoot variant="DEFAULT">
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell
              colSpan={4}
              scope="row"
              textAlign="right"
              th={true}
              variant="BODY_CELL_DEFAULT"
            >
              Summary
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Footer - Cell</TableCell>
          </TableRow>
        </TableFoot>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<Table
  variant="DEFAULT"
  additionalClasses={{
    scrollablecontainer: 'scrollablecontainer-max-height',
  }}
  aria-label="Aria label example"
>
  <TableHead sticky={true} variant="DEFAULT">
    <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Header Cell 1</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Header Cell 2</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Header Cell 3</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 1</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 2</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Row 1 - Cell 3</TableCell>
    </TableRow>
  </TableBody>
  <TableFoot variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell colSpan={2} scope="row" textAlign="right" th={true} variant="BODY_CELL_DEFAULT">
        Summary
      </TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Footer - Cell</TableCell>
    </TableRow>
  </TableFoot>
</Table>`,
      },
    },
  },
};
