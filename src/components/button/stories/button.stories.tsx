import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Button as ButtonStory } from '../button';
import { ButtonStateType, IconPositionType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Actions/Button',
  component: ButtonStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof ButtonStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Button: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ButtonVariantType || {})[0] as string,
    size: Object.values(variantsObject[themeSelected].ButtonSizeType || {})[0] as string,
    children: 'Button',
    icon: {
      icon: ICONS.ICON_PLACEHOLDER,
      altText: 'altText',
    },
    iconPosition: IconPositionType.RIGHT,
    fullWidth: false,
    loader: {
      variant: Object.values(variantsObject[themeSelected].LoaderVariantType || {})[0] as string,
      altText: 'loaderAltText',
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.BUTTON],
  },
};

export const ButtonWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ButtonVariantType || {})[0] as string,
    size: Object.values(variantsObject[themeSelected].ButtonSizeType || {})[0] as string,
    children: 'Button',
    icon: {
      icon: ICONS.ICON_PLACEHOLDER,
      altText: 'altText',
    },
    ctv: { [ButtonStateType.DEFAULT]: { background_color: 'green' } },
    cts: {
      icon: {
        width: '50px',
        height: '50px',
      },
    },
  },
};
