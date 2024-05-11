import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import {
  additionalInfoAction,
  labelSecondary,
} from '@/components/input/components/stories/stories';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { InputDropdown as Story } from '../inputDropdown';
import { IInputDropdown } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/Inputdropdown',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/inputDropdown',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-30055&mode=dev',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IInputDropdown = {
  variant: Object.values(variantsObject[themeSelected].InputDropdownVariant || {})[0] as string,
  id: 'input',
  label: { content: 'Label', requiredSymbol: '*' },
  name: 'inputName',
  placeholder: 'Select an option',
  noResultsText: { content: 'No se han encontrado resultados' },
  secondaryLabel: labelSecondary(themeSelected),
  additionalInfo: additionalInfoAction(themeSelected),
  errorMessage: { content: 'Error message' },
  errorIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'error' },
  loadingText: { content: 'Loading results' },
  loader: {
    altText: 'loading',
  },
  icon: { icon: ICONS.ICON_CHEVRON_DOWN },
  optionList: {
    options: [
      {
        value: 'option1',
        label: 'option 1',
      },
      {
        value: 'option2',
        label: 'option 2',
      },
    ],
  },
};

export const Inputdropdown: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.INMPUT_DROPDOWN],
  },
};

export const InputdropdownWithCtv: Story = {
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
