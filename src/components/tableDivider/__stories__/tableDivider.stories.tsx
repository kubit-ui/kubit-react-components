import type { PropsWithChildren } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tag } from '@/components/tag/tag';
import { TableDividerVariantType } from '@/lib/designSystem/kubit/components/tableDivider/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { TableDivider as Story } from '../tableDivider';
import type { TableDividerProps } from '../types/tableDivider';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'table'],
  title: 'Components/Table/TableDivider',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: PropsWithChildren<TableDividerProps> = {
  children: (
    <Tag
      icon={{ icon: ICONS.PLACEHOLDER }}
      label={{ content: 'LABEL' }}
      variant="INFORMATIVE"
    />
  ),
  variant: TableDividerVariantType.DEFAULT,
};

export const TableDivider: Story = {
  args: {
    ...commonArgs,
  },
};
