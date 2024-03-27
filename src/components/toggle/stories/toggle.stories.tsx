import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { ToggleUnControlled as Story } from '../toggleUnControlled';
import { IToggleUnControlled } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/Toggle',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/toggle',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-29692&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IToggleUnControlled = {
  variant: Object.values(variantsObject[themeSelected].ToggleVariantType || {})[0] as string,
  onIcon: { icon: ICONS.ICON_CHEVRON_DOWN, altText: 'on icon' },
  offIcon: { icon: ICONS.ICON_CHEVRON_UP },
  inputValues: {
    rightInputValue: 'on option',
    centerInputValue: 'undeterminated option',
    leftInputValue: 'off option',
    leftIconAltText: 'on option',
  },
};

export const Toggle: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.TOGGLE],
  },
};

export const ToggleWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      DEFAULT_UNSELECTED: {
        thumb: {
          background_color: 'pink',
        },
      },
    },
  },
};
