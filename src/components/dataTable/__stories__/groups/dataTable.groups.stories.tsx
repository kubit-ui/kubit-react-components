import type { Meta, StoryObj } from '@storybook/react-vite';

import { DataTable } from '../../dataTable';
import { argtypes } from '../argtypes';
import { DataTableGroupsStory } from './dataTable.groups.default';
import { DataTableGroupsHeadWithReactNodeStory } from './dataTable.groups.headWithReactNode';
import { DataTableGroupsStickyHeadStory } from './dataTable.groups.stickyHead';
import { DataTableGroupsStickyLeftColumnsStory } from './dataTable.groups.stickyLeftColumns';
import { DataTableGroupsStickyLeftRightColumnsStory } from './dataTable.groups.stickyLeftRightColumns';
import { DataTableGroupsStickyRightColumnsStory } from './dataTable.groups.stickyRightColumns';
import { DataTableGroupsTextAlignStory } from './dataTable.groups.textAlign';
import { DataTableGroupsVerticalAlignStory } from './dataTable.groups.verticalAlign';

const meta: Meta<typeof DataTable> = {
  argTypes: argtypes(),
  component: DataTable,
  tags: ['table'],
  title: 'Components/Table/DataTable/Groups',
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const DataTableGroups: Story = {
  args: DataTableGroupsStory,
};

export const DataTableGroupsHeadWithReactNode: Story = {
  args: DataTableGroupsHeadWithReactNodeStory,
};

export const DataTableGroupsStickyHead: Story = {
  args: DataTableGroupsStickyHeadStory,
};

export const DataTableGroupsStickyLeftColumns: Story = {
  args: DataTableGroupsStickyLeftColumnsStory,
};

export const DataTableGroupsStickyLeftRightColumns: Story = {
  args: DataTableGroupsStickyLeftRightColumnsStory,
};

export const DataTableGroupsStickyRightColumns: Story = {
  args: DataTableGroupsStickyRightColumnsStory,
};

export const DataTableGroupsVerticalAlign: Story = {
  args: DataTableGroupsVerticalAlignStory,
};

export const DataTableGroupsTextAlign: Story = {
  args: DataTableGroupsTextAlignStory,
};
