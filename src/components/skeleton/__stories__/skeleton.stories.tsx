import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  SkeletonShapeVariant,
  SkeletonVariantType,
} from '@/lib/designSystem/kubit/components/skeleton/variants';

import { Skeleton as Story } from '../skeleton';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  tags: ['autodocs', 'status'],
  title: 'Components/Status/Skeleton',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  height: '30px',
  shapeVariant: SkeletonShapeVariant.CIRCLE,
  variant: SkeletonVariantType.DEFAULT,
  width: '200px',
};

export const Skeleton: Story = {
  args: {
    ...commonArgs,
  },
};
