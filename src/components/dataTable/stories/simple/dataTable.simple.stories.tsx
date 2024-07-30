import type { Meta, StoryObj } from '@storybook/react';

import { variantsObject } from '@/designSystem/themesObject';

import { DataTable } from '../../dataTable';
import { argtypes } from '../argtypes';
import { DataTableSimpleActiveRowsStory } from './dataTable.simple.activeRows';
import { DataTableSimpleBodyWithReactNodeStory } from './dataTable.simple.bodyWithReactNode';
import { DataTableSimpleColumnGetValueStory } from './dataTable.simple.columnGetValue';
import { DataTableSimpleCustomBodyCellStory } from './dataTable.simple.customBodyCell';
import { DataTableSimpleCustomConfigStory } from './dataTable.simple.customConfig';
import { DataTableSimpleCustomHeadCellStory } from './dataTable.simple.customHeadCell';
import { DataTableSimpleStory } from './dataTable.simple.default';
import { DataTableSimpleHideColumnHeaderContentStory } from './dataTable.simple.hideColumnHeaderContent';
import { DataTableSimpleHoverableStory } from './dataTable.simple.hoverable';
import { DataTableSimpleNonHoverableStory } from './dataTable.simple.nonHoverable';
import { DataTableSimpleSortStory } from './dataTable.simple.sort';
import { DataTableSimpleStickyHeadStory } from './dataTable.simple.stickyHead';
import { DataTableSimpleStickyLeftColumnsStory } from './dataTable.simple.stickyLeftColumns';
import { DataTableSimpleStickyLeftRightColumnsStory } from './dataTable.simple.stickyLeftRightColumns';
import { DataTableSimpleStickyRightColumnsStory } from './dataTable.simple.stickyRightColumns';
import { DataTableSimpleTextAlignStory } from './dataTable.simple.textAlign';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Table/DataTable/Simple',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const DataTableSimple: Story = {
  args: DataTableSimpleStory,
};

export const DataTableSimpleActiveRows: Story = {
  args: DataTableSimpleActiveRowsStory,
};

export const DataTableSimpleBodyWithReactNode: Story = {
  args: DataTableSimpleBodyWithReactNodeStory,
};

export const DataTableSimpleColumnGetValue: Story = {
  args: DataTableSimpleColumnGetValueStory,
};

export const DataTableSimpleCustomBodyCell: Story = {
  args: DataTableSimpleCustomBodyCellStory,
};

export const DataTableSimpleCustomConfig: Story = {
  args: DataTableSimpleCustomConfigStory,
};

export const DataTableSimpleCustomHeadCell: Story = {
  args: DataTableSimpleCustomHeadCellStory,
};

export const DataTableSimpleHideColumnHeaderContent: Story = {
  args: DataTableSimpleHideColumnHeaderContentStory,
};

export const DataTableSimpleHoverable: Story = {
  args: DataTableSimpleHoverableStory,
};

export const DataTableSimpleNonHoverable: Story = {
  args: DataTableSimpleNonHoverableStory,
};

export const DataTableSimpleSort: Story = {
  render: DataTableSimpleSortStory.render,
  parameters: {
    docs: {
      source: {
        code: DataTableSimpleSortStory.code,
      },
    },
  },
};

export const DataTableSimpleStickyHead: Story = {
  args: DataTableSimpleStickyHeadStory,
};

export const DataTableSimpleStickyLeftColumns: Story = {
  args: DataTableSimpleStickyLeftColumnsStory,
};

export const DataTableSimpleStickyLeftRightColumns: Story = {
  args: DataTableSimpleStickyLeftRightColumnsStory,
};

export const DataTableSimpleStickyRightColumns: Story = {
  args: DataTableSimpleStickyRightColumnsStory,
};

export const DataTableSimpleTextAlign: Story = {
  args: DataTableSimpleTextAlignStory,
};
