import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { Button as ButtonStory } from '../button';
import { IconPositionType } from '../types/buttonIconPosition';
import { ButtonStateType } from '../types/state';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Actions/Button',
  component: ButtonStory,
  parameters: {
    layout: 'fullscreen',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/button',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-9829',
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
    id: 'buttonId',
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
