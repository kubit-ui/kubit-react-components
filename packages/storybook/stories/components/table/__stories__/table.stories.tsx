import {
  TableBody,
  TableCaption,
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
  tags: ['table', 'data-display'],
  title: 'Components/Table/Table',
} satisfies Meta<typeof TableComponent>;

export default meta;

type StoryType = StoryObj<typeof meta>;

const commonArgs = {
  variant: 'DEFAULT',
};

// Basic table with caption, header, body, and footer
export const Basic: StoryType = {
  args: {
    ...commonArgs,
    children: (
      <>
        <TableCaption variant="DEFAULT">Sales Report Summary</TableCaption>
        <TableHead variant="DEFAULT">
          <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Product
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Category
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Price
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Stock
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody variant="DEFAULT">
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Laptop</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">$999</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">45</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Available</TableCell>
          </TableRow>
          <TableRow active={true} variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Mouse</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Accessories</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">$29</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">120</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Available</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Keyboard</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Accessories</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">$79</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">85</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Available</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Monitor</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">$349</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">32</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Available</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Headphones</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Accessories</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">$149</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">67</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Available</TableCell>
          </TableRow>
        </TableBody>
        <TableFoot variant="DEFAULT">
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell
              colSpan={3}
              scope="row"
              textAlign="right"
              th={true}
              variant="BODY_CELL_DEFAULT"
            >
              Total Items
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">349</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">—</TableCell>
          </TableRow>
        </TableFoot>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<Table variant="DEFAULT">
  <TableCaption variant="DEFAULT">Sales Report Summary</TableCaption>
  <TableHead variant="DEFAULT">
    <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Product</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Category</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Price</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Stock</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Status</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Laptop</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Electronics</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$999</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">45</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Available</TableCell>
    </TableRow>
    <TableRow active={true} variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">Mouse</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Accessories</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">$29</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">120</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Available</TableCell>
    </TableRow>
  </TableBody>
  <TableFoot variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell colSpan={3} scope="row" textAlign="right" th={true} variant="BODY_CELL_DEFAULT">
        Total Items
      </TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">349</TableCell>
    </TableRow>
  </TableFoot>
</Table>`,
      },
    },
  },
};

// Table without caption
export const WithoutCaption: StoryType = {
  args: {
    ...commonArgs,
    children: (
      <>
        <TableHead variant="DEFAULT">
          <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Name
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Email
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Role
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody variant="DEFAULT">
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">John Doe</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Admin</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell variant="BODY_CELL_DEFAULT">Jane Smith</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">jane@example.com</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">User</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<Table variant="DEFAULT">
  <TableHead variant="DEFAULT">
    <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Name</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Email</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Role</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell variant="BODY_CELL_DEFAULT">John Doe</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
    },
  },
};

// Table with hidden column
export const WithHiddenColumn: StoryType = {
  args: {
    ...commonArgs,
    children: (
      <>
        <TableCaption variant="DEFAULT">User Management</TableCaption>
        <TableHead variant="DEFAULT">
          <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
            <TableCell hidden={true} th={true} variant="HEADER_CELL_DEFAULT">
              ID
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Username
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Email
            </TableCell>
            <TableCell th={true} variant="HEADER_CELL_DEFAULT">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody variant="DEFAULT">
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell hidden={true} variant="BODY_CELL_DEFAULT">
              001
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">johndoe</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Active</TableCell>
          </TableRow>
          <TableRow variant="BODY_ROW_DEFAULT">
            <TableCell hidden={true} variant="BODY_CELL_DEFAULT">
              002
            </TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">janesmith</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">jane@example.com</TableCell>
            <TableCell variant="BODY_CELL_DEFAULT">Active</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<Table variant="DEFAULT">
  <TableCaption variant="DEFAULT">User Management</TableCaption>
  <TableHead variant="DEFAULT">
    <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
      <TableCell hidden={true} th={true} variant="HEADER_CELL_DEFAULT">ID</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Username</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Email</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Status</TableCell>
    </TableRow>
  </TableHead>
  <TableBody variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell hidden={true} variant="BODY_CELL_DEFAULT">001</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">johndoe</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">john@example.com</TableCell>
      <TableCell variant="BODY_CELL_DEFAULT">Active</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
    },
  },
};

// Comprehensive table matching original structure
export const Table: StoryType = {
  args: {
    ...commonArgs,
    children: (
      <>
        <TableCaption variant="DEFAULT">Caption Example</TableCaption>
        <TableHead variant="DEFAULT">
          <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
            <TableCell hidden={true} th={true} variant="HEADER_CELL_DEFAULT">
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
        code: `<Table variant="DEFAULT">
  <TableCaption variant="DEFAULT">Caption Example</TableCaption>
  <TableHead variant="DEFAULT">
    <TableRow hoverable={false} variant="HEADER_ROW_DEFAULT">
      <TableCell hidden={true} th={true} variant="HEADER_CELL_DEFAULT">Header Cell 1</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Header Cell 2</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Header Cell 3</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Header Cell 4</TableCell>
      <TableCell th={true} variant="HEADER_CELL_DEFAULT">Header Cell 5</TableCell>
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
  </TableBody>
  <TableFoot variant="DEFAULT">
    <TableRow variant="BODY_ROW_DEFAULT">
      <TableCell colSpan={4} scope="row" textAlign="right" th={true} variant="BODY_CELL_DEFAULT">
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
