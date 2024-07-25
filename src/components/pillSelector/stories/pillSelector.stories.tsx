import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { PillSelectorUnControlled as Story } from '../pillSelectorUnControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/PillSelector',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/pillSelector',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-30237&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const PillSelector: Story = {
  args: {
    ['aria-label']: 'Aria label pill selector',
    dataTestId: 'dataTestId',
    multiSelect: false,
    variant: Object.values(variantsObject[themeSelected].PillSelectorVariant || {})[0] as string,
    pillVariant: Object.values(variantsObject[themeSelected].PillVariantType || {})[0] as string,
    pillSize: Object.values(variantsObject[themeSelected].PillSizeType || {})[0] as string,
    pills: [
      {
        decorativeIcon: { icon: ICONS.ICON_PLACEHOLDER },
        label: 'test 1',
        value: 1,
        selectedIcon: { icon: ICONS.ICON_PLACEHOLDER },
      },
      {
        label: 'test 2',
        value: 2,
        disabled: false,
      },
      {
        label: 'test 3',
        value: 3,
      },
    ],
    themeArgs: themesObject[themeSelected][STYLES_NAME.PILL_SELECTOR],
  },
};

export const PillSelectorWithCtv: Story = {
  args: {
    dataTestId: 'dataTestId',
    multiSelect: false,
    variant: Object.values(variantsObject[themeSelected].PillSelectorVariant || {})[0] as string,
    pillVariant: Object.values(variantsObject[themeSelected].PillVariantType || {})[0] as string,
    pillSize: Object.values(variantsObject[themeSelected].PillSizeType || {})[0] as string,
    pills: [
      {
        decorativeIcon: { icon: ICONS.ICON_PLACEHOLDER },
        label: 'test 1',
        value: 1,
        selectedIcon: { icon: ICONS.ICON_PLACEHOLDER },
      },
      {
        label: 'test 2',
        value: 2,
        disabled: false,
      },
      {
        label: 'test 3',
        value: 3,
      },
    ],
    ctv: {
      container: {
        background_color: 'pink',
        padding: '10px',
      },
    },
  },
};
