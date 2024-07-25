import type { Meta, StoryObj } from '@storybook/react';

import { ICONS, ILLUSTRATIONS } from '@/assets';
import { DecorativeType } from '@/components/decorativeElement';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IconHighlightedSizeType } from '@/components/iconHighlighted';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { NavigationCard as Story } from '../navigationCard';
import { INavigationCard } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/NavigationCard',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/navigationCard',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3942-37774&mode=dev',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const decorativeIcon: IElementOrIcon = {
  icon: ICONS.ICON_PLACEHOLDER,
  altText: 'icon alt text',
  color: '#ff0000',
};

const decorativeIconHighlighted = {
  icon: ICONS.ICON_PLACEHOLDER,
  altText: 'icon highlighted alt text',
  variant: 'SQUARE',
  size: IconHighlightedSizeType.MEDIUM,
  color: '#000',
  backgroundColor: '#ccc',
};

const decorativeIllustration = {
  illustration: ILLUSTRATIONS.ILLUSTRATION,
  height: '6rem',
  width: '6rem',
};

const decorativeAvatar = {
  initials: { content: 'BS' },
  size: 'LARGE',
  dot: {
    variant: 'BIG',
    size: 'DEFAULT',
  },
};

const commonArgs: INavigationCard = {
  variant: Object.values(
    variantsObject[themeSelected].NavigationCardVariantType || {}
  )[0] as string,
  title: { content: 'Titlte' },
  description: { content: 'Description' },
  tag: { content: 'Informative tag', status: 'NORMAL', screenReaderText: 'Status:' },
  arrowIcon: { icon: ICONS.ICON_CHEVRON_RIGHT },
  arrowIconText: { content: 'Navigation Link' },
  url: 'www.google.com',
};

export const NavigationCardIcon: Story = {
  args: {
    ...commonArgs,
    decorative: {
      [DecorativeType.ICON]: decorativeIcon,
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.NAVIGATION_CARD],
  },
};

export const NavigationCardIconHighlighted: Story = {
  args: {
    ...commonArgs,
    decorative: {
      [DecorativeType.ICON_HIGHLIGHTED]: decorativeIconHighlighted,
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.NAVIGATION_CARD],
  },
};

export const NavigationCardIllustration: Story = {
  args: {
    ...commonArgs,
    decorative: {
      [DecorativeType.ILLUSTRATION]: decorativeIllustration,
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.NAVIGATION_CARD],
  },
};

export const NavigationCardAvatar: Story = {
  args: {
    ...commonArgs,
    decorative: {
      [DecorativeType.AVATAR]: decorativeAvatar,
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.NAVIGATION_CARD],
  },
};

export const NavigationCard: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.NAVIGATION_CARD],
  },
};

export const NavigationCardButton: Story = {
  args: {
    ...commonArgs,
    url: undefined,
    themeArgs: themesObject[themeSelected][STYLES_NAME.NAVIGATION_CARD],
  },
};

export const NavigationCardWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
