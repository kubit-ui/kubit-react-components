import {
  TableCell,
  TableFoot as TableFootComponent,
  TableRow,
} from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: TableFootComponent,
  tags: ['table', 'table-foot'],
  title: 'Components/Table/TableFoot',
} satisfies Meta<typeof TableFootComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

// Basic footer with summary row
export const Basic: StoryType = {
  args: {
    children: (
      <TableRow variant="BODY_ROW_DEFAULT">
        <TableCell variant="BODY_CELL_DEFAULT">Total</TableCell>
        <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
          $1,234.56
        </TableCell>
      </TableRow>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Total</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
      $1,234.56
    </TableCell>
  </TableRow>
</TableFoot>`,
      },
    },
  },
};

// Footer with multiple summary rows
export const WithMultipleSummaryRows: StoryType = {
  args: {
    children: (
      <>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Subtotal</TableCell>
          <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
            $1,000.00
          </TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Tax (10%)</TableCell>
          <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
            $100.00
          </TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">
            <strong>Total</strong>
          </TableCell>
          <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
            <strong>$1,100.00</strong>
          </TableCell>
        </TableRow>
      </>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Subtotal</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
      $1,000.00
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Tax (10%)</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
      $100.00
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">
      <strong>Total</strong>
    </TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
      <strong>$1,100.00</strong>
    </TableCell>
  </TableRow>
</TableFoot>`,
      },
    },
  },
};

// Footer with aggregated data across columns
export const WithAggregatedData: StoryType = {
  args: {
    children: (
      <TableRow variant="BODY_ROW_DEFAULT">
        <TableCell variant="BODY_CELL_DEFAULT">
          <strong>Total</strong>
        </TableCell>
        <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
          <strong>150</strong>
        </TableCell>
        <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
          <strong>$45,678.90</strong>
        </TableCell>
        <TableCell textAlign="center" variant="BODY_CELL_DEFAULT">
          <strong>—</strong>
        </TableCell>
      </TableRow>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">
      <strong>Total</strong>
    </TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
      <strong>150</strong>
    </TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
      <strong>$45,678.90</strong>
    </TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="center">
      <strong>—</strong>
    </TableCell>
  </TableRow>
</TableFoot>`,
      },
    },
  },
};

// Footer with spanning cells
export const WithSpanningCells: StoryType = {
  args: {
    children: (
      <TableRow variant="BODY_ROW_DEFAULT">
        <TableCell colSpan={3} variant="BODY_CELL_DEFAULT">
          <strong>Grand Total</strong>
        </TableCell>
        <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
          <strong>$25,500.00</strong>
        </TableCell>
      </TableRow>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT" colSpan={3}>
      <strong>Grand Total</strong>
    </TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
      <strong>$25,500.00</strong>
    </TableCell>
  </TableRow>
</TableFoot>`,
      },
    },
  },
};

// Footer with statistical summary
export const WithStatisticalSummary: StoryType = {
  args: {
    children: (
      <>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Average</TableCell>
          <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
            $125.50
          </TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Minimum</TableCell>
          <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
            $45.00
          </TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">Maximum</TableCell>
          <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
            $350.00
          </TableCell>
        </TableRow>
        <TableRow variant="BODY_ROW_DEFAULT">
          <TableCell variant="BODY_CELL_DEFAULT">
            <strong>Total Count</strong>
          </TableCell>
          <TableCell textAlign="right" variant="BODY_CELL_DEFAULT">
            <strong>24 items</strong>
          </TableCell>
        </TableRow>
      </>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Average</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
      $125.50
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Minimum</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
      $45.00
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Maximum</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
      $350.00
    </TableCell>
  </TableRow>
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">
      <strong>Total Count</strong>
    </TableCell>
    <TableCell variant="BODY_CELL_DEFAULT" textAlign="right">
      <strong>24 items</strong>
    </TableCell>
  </TableRow>
</TableFoot>`,
      },
    },
  },
};

// Default story matching original structure
export const TableFoot: StoryType = {
  args: {
    children: (
      <TableRow variant="BODY_ROW_DEFAULT">
        <TableCell variant="BODY_CELL_DEFAULT">Cell 1</TableCell>
        <TableCell variant="BODY_CELL_DEFAULT">Cell 2</TableCell>
      </TableRow>
    ),
    variant: 'DEFAULT',
  },
  parameters: {
    docs: {
      source: {
        code: `<TableFoot variant="DEFAULT">
  <TableRow variant="BODY_ROW_DEFAULT">
    <TableCell variant="BODY_CELL_DEFAULT">Cell 1</TableCell>
    <TableCell variant="BODY_CELL_DEFAULT">Cell 2</TableCell>
  </TableRow>
</TableFoot>`,
      },
    },
  },
};
