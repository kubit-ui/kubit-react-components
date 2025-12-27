import type { Meta, StoryObj } from '@storybook/react-vite';
import type { PropsWithChildren } from 'react';

import { TableCaptionVariantType } from '@/lib/designSystem/kubit/components/tableCaption/variants';

import type { TableCaptionProps } from '../types/tableCaption';

import { TableCaption as Story } from '../tableCaption';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'table'],
  title: 'Components/Table/TableCaption',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: PropsWithChildren<TableCaptionProps> = {
  children: <>Caption example</>,
  variant: TableCaptionVariantType.DEFAULT,
};

export const TableCaption: Story = {
  args: {
    ...commonArgs,
  },
};
