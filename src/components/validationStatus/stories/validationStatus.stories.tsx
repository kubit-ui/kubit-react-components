import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import {
  ValidationStatusItemType,
  ValidationStatusState,
  ValidationStatusStateIconsType,
} from '../types';
import { ValidationStatus as Story } from '../validationStatus';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const stateIcons: ValidationStatusStateIconsType = {
  [ValidationStatusState.DEFAULT]: { icon: ICONS.ICON_PLACEHOLDER, altText: 'default alt text' },
  [ValidationStatusState.SUCCESS]: { icon: ICONS.ICON_PLACEHOLDER, altText: 'success alt text' },
  [ValidationStatusState.ERROR]: { icon: ICONS.ICON_PLACEHOLDER, altText: 'error alt text' },
};

const items: ValidationStatusItemType[] = [
  {
    state: ValidationStatusState.SUCCESS,
    text: { content: 'This is the first requirement' },
  },
  {
    state: ValidationStatusState.ERROR,
    text: { content: 'This is the second requirement with a long text for testing purposes' },
  },
  {
    state: ValidationStatusState.SUCCESS,
    text: { content: 'This is the thrid requirement' },
  },
  {
    state: ValidationStatusState.DEFAULT,
    text: { content: 'This is the fourth requirement with a long text for testing purposes' },
  },
  {
    state: ValidationStatusState.DEFAULT,
    text: { content: 'This is the fifth requirement' },
  },
  {
    state: ValidationStatusState.ERROR,
    text: { content: 'This is the sixth requirement' },
  },
  {
    state: ValidationStatusState.DEFAULT,
    text: { content: 'This is the seventh requirement' },
  },
  {
    state: ValidationStatusState.DEFAULT,
    text: { content: 'This is the eighth requirement' },
  },
];

const meta = {
  title: 'Components/Containment/ValidationStatus',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/validationStatus',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-22904&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const ValidationStatus: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].ValidationStatusVariants || {}
    )[0] as string,
    items,
    stateIcons,
    maxItemsAllowed: 6,
    themeArgs: themesObject[themeSelected][STYLES_NAME.VALIDATION_STATUS],
  },
};

export const ValidationStatusWithCtv: Story = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].ValidationStatusVariants || {}
    )[0] as string,
    items,
    stateIcons,
    maxItemsAllowed: 6,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
