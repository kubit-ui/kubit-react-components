import type { Meta, StoryObj } from '@storybook/react';

import { ICONS, IMAGES } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Avatar as AvatarStory } from '../avatar';
import { AvatarBackgroundColor } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Avatar',
  component: AvatarStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof AvatarStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Avatar: Story = {
  args: {
    size: Object.values(variantsObject[themeSelected].AvatarSize || {})[0] as string,
    dot: {
      variant: Object.values(variantsObject[themeSelected].DotVariantType || {})[0] as string,
      size: Object.values(variantsObject[themeSelected].DotSizeType || {})[0] as string,
      number: 1,
      maxNumber: 5,
    },
    icon: { icon: ICONS.ICON_PLACEHOLDER },
    image: IMAGES.IMAGE_1,
    initials: { content: 'HA' },
    backgroundColor: AvatarBackgroundColor.COLOR_DEFAULT,
    themeArgs: themesObject[themeSelected][STYLES_NAME.AVATAR],
  },
};

export const AvatarWithCts: Story = {
  args: {
    size: Object.values(variantsObject[themeSelected].AvatarSize || {})[0] as string,
    dot: {
      variant: Object.values(variantsObject[themeSelected].DotVariantType || {})[0] as string,
      size: Object.values(variantsObject[themeSelected].DotSizeType || {})[0] as string,
      number: 1,
      maxNumber: 5,
    },
    icon: { icon: ICONS.ICON_PLACEHOLDER },
    image: IMAGES.IMAGE_1,
    initials: { content: 'HA' },
    backgroundColor: AvatarBackgroundColor.COLOR_DEFAULT,
    cts: {
      WITH_ICON: {
        linkContainer: {
          height: '100px',
          width: '100px',
          border_radius: '10%',
        },
      },
      WITH_IMAGE: {
        linkContainer: {
          height: '100px',
          width: '100px',
          border_radius: '10%',
        },
      },
      WITH_INITIALS: {
        linkContainer: {
          height: '100px',
          width: '100px',
          border_radius: '10%',
        },
      },
    },
  },
};
