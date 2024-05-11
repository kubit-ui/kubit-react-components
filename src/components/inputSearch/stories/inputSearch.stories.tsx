import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import {
  additionalInfoAction,
  labelSecondary,
} from '@/components/input/components/stories/stories';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { InputSearch as Story } from '../inputSearch';
import { IInputSearch } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/InputSearch',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/inputSearch',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const options = [
  {
    title: { content: 'Title section' },
    options: ['Street 1', 'Street 2', 'Avenue 1', 'Avenue 2', 'Roat'],
    theme: themesObject[themeSelected][STYLES_NAME.INPUT_SEARCH],
  },
];

const commonArgs: IInputSearch = {
  variant: Object.values(variantsObject[themeSelected].InputSearchVariant || {})[0] as string,
  secondaryLabel: labelSecondary(themeSelected),
  additionalInfo: additionalInfoAction(themeSelected),
  label: { content: 'label', requiredSymbol: '*' },
  icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'alternative' },
  placeholder: 'Select an option',
  closeIcon: { icon: ICONS.ICON_CLOSE },
  value: 'option5',
  inputPopoverIcon: { icon: 'CLOSE' },
  titleActionBottomSheet: 'Title List',
  optionList: options,
  errorMessage: { content: 'Error message' },
  errorIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'error' },
  loadingText: { content: 'Loading results' },
  loader: {
    altText: 'loading',
  },
  noResultsText: { content: 'noResultsText' },
};
export const InputSearch: Story = {
  args: {
    ...commonArgs,
  },
};

export const InputSearchWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      EMPTY: {
        inputWrapperContainer: {
          background_color: 'pink',
          padding_left: '10px',
          padding_right: '10px',
          padding_bottom: '10px',
        },
      },
    },
  },
};
