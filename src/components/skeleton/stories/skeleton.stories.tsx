import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Skeleton as Story } from '../skeleton';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Status/Skeleton',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/skeleton',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3928-35908&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Skeleton: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].SkeletonVariantType || {})[0] as string,
    shapeVariant: Object.values(
      variantsObject[themeSelected].SkeletonShapeVariant || {}
    )[0] as string,
    width: '200px',
    height: '30px',
    themeArgs: themesObject[themeSelected][STYLES_NAME.SKELETON],
  },
};

export const SkeletonWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].SkeletonVariantType || {})[0] as string,
    shapeVariant: Object.values(
      variantsObject[themeSelected].SkeletonShapeVariant || {}
    )[0] as string,
    width: '200px',
    height: '30px',
    ctv: {
      DEFAULT: {
        skeleton: {
          background_color: 'pink',
        },
      },
    },
  },
};
