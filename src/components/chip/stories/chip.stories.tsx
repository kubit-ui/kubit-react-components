import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Chip as ChipStory } from '../chip';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/Chip',
  component: ChipStory,
  parameters: {
    layout: 'centered',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/chip',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-29749&mode=dev',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof ChipStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Chip: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ChipVariantType || {})[0] as string,
    label: { content: 'Content' },
    rangeSeparator: { content: 'to' },
    errorMessage: { content: 'errorMessage' },
    range: [{ label: 'range1' }, { label: 'range2' }],
    closeIcon: {
      icon: ICONS.ICON_PLACEHOLDER,
      altText: 'Simple close icon alt text',
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.CHIP],
  },
};

export const ChipWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ChipVariantType || {})[0] as string,
    label: { content: 'Content' },
    ctv: {
      DEFAULT: { chipContainer: { background_color: 'green' } },
    },
  },
};
