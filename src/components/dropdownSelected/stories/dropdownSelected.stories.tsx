import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { ListOptionsType } from '../../listOptions/types/type';
import { DropdownSelectedUnControlled as Story } from '../dropdownSelectedUncontrolled';
import { IDropdownSelectedUncontrolled } from '../types/dropdownSelected';
import { DropdownSelectedStateType } from '../types/states';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/DropdownSelected',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  return (
    <div style={{ width: 'fit-content' }}>
      <Story {...args} />
    </div>
  );
};

const commonArgs: IDropdownSelectedUncontrolled = {
  variant: Object.values(
    variantsObject[themeSelected].DropdownSelectedVariantType || {}
  )[0] as string,
  label: { content: 'Label' },
  icon: { icon: ICONS.ICON_CHEVRON_DOWN, altText: 'Alt text icon' },
  listOptions: {
    options: [
      {
        label: 'option 1',
        value: 'option1',
      },
      {
        label: 'option 2',
        value: 'option2',
      },
    ],
    type: ListOptionsType.SELECTION,
  },
  closePopoverOnScroll: true,
};

export const DropdownSelected: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.DROPDOWN_SELECTED],
  },
};

export const DropdownSelectedKubit: Story = {
  args: {
    ...commonArgs,
    variant: 'TOPBAR_TAB',
    listOptions: {
      type: ListOptionsType.SELECTION,
      options: [
        {
          value: 'option1',
          label: 'option 1',
        },
        {
          value: 'option2',
          label: 'This is the option 2',
        },
      ],
    },
    closePopoverOnScroll: false,
    openAndCloseOnHover: false,
  },
};

export const DropdownSelectedWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      [DropdownSelectedStateType.DEFAULT]: {
        buttonOrLinkContainer: { background_color: 'pink' },
      },
    },
  },
};
