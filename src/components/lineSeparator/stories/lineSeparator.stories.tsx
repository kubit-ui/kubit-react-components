import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { LineSeparator as Story } from '../lineSeparator';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Table/LineSeparator',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/lineSeparator',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3928-36768&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const LineSeparator: Story = {
  args: {
    labelVariant: Object.values(
      variantsObject[themeSelected].LineSeparatorLabelVariantType || {}
    )[0] as string,
    lineVariant: Object.values(
      variantsObject[themeSelected].LineSeparatorLineVariantType || {}
    )[0] as string,
    label: { content: 'Label' },
    themeArgs: themesObject[themeSelected][STYLES_NAME.LINE_SEPARATOR],
  },
};

export const LineSeparatorWithCtv: Story = {
  args: {
    labelVariant: Object.values(
      variantsObject[themeSelected].LineSeparatorLabelVariantType || {}
    )[0] as string,
    lineVariant: Object.values(
      variantsObject[themeSelected].LineSeparatorLineVariantType || {}
    )[0] as string,
    label: { content: 'Label' },
    ctv: {
      labelContainer: {
        background_color: 'pink',
      },
    },
  },
};
