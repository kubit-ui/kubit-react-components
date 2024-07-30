import type { Meta, StoryObj } from '@storybook/react';

import { variantsObject } from '@/designSystem/themesObject';

import { DataTable } from '../../dataTable';
import { argtypes } from '../argtypes';
import { DataTableGroupsStory } from './dataTable.groups.default';
import { DataTableGroupsHeadWithReactNodeStory } from './dataTable.groups.headWithReactNode';
import { DataTableGroupsStickyHeadStory } from './dataTable.groups.stickyHead';
import { DataTableGroupsStickyLeftColumnsStory } from './dataTable.groups.stickyLeftColumns';
import { DataTableGroupsStickyLeftRightColumnsStory } from './dataTable.groups.stickyLeftRightColumns';
import { DataTableGroupsStickyRightColumnsStory } from './dataTable.groups.stickyRightColumns';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Table/DataTable/Groups',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const DataTableGroups: Story = {
  args: DataTableGroupsStory,
};

export const DataTableGroupsHeadWithReactNode: Story = {
  args: DataTableGroupsHeadWithReactNodeStory,
};

export const DataTableGroupsStickyHead: Story = { args: DataTableGroupsStickyHeadStory };

export const DataTableGroupsStickyLeftColumns: Story = {
  args: DataTableGroupsStickyLeftColumnsStory,
};

export const DataTableGroupsStickyLeftRightColumns: Story = {
  args: DataTableGroupsStickyLeftRightColumnsStory,
};

export const DataTableGroupsStickyRightColumns: Story = {
  args: DataTableGroupsStickyRightColumnsStory,
};
