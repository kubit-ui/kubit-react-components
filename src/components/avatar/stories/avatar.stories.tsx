import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { IMAGES } from '@/assets/storybook/images/images';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { Avatar as AvatarStory } from '../avatar';
import { AvatarBackgroundColor } from '../types/content';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Avatar',
  component: AvatarStory,
  parameters: {
    layout: 'centered',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/avatar',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3928-34082&mode=dev',
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
