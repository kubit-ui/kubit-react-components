import type { Meta, StoryObj } from '@storybook/react';

import { ICONS, IMAGES } from '@/assets';
import { LinkActionType } from '@/components/link';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';
import { DeviceBreakpointsType } from '@/types';

import { CardImage as Story } from '../cardImage';
import { ICardImage } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Commercial/CardImage',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: ICardImage = {
  variant: Object.values(
    variantsObject[themeSelected].CardImageStateVariantType || {}
  )[0] as string,
  title: { content: 'Title lorem ipsum dolor sit amet consectetur adipiscing elit sed' },
  description: {
    content:
      'Phasellus consectetur sapien risus, at aliquet orci lobortis nec. Morbi finibus ligula id faucibus ornare. Vivamus accumsan pharetra ipsum et blandit. ',
  },
  image: {
    [DeviceBreakpointsType.DESKTOP]: IMAGES.IMAGE_4,
    [DeviceBreakpointsType.TABLET]: IMAGES.IMAGE_4,
    [DeviceBreakpointsType.MOBILE]: IMAGES.IMAGE_4,
  },
  link: {
    variant: Object.values(variantsObject[themeSelected].LinkVariantType || {})[0] as string,
    action: LinkActionType.NAVIGATION,
    icon: { icon: ICONS.ICON_CHEVRON_RIGHT },
    url: '/',
    content: 'Navigation link',
    onClick: () => {
      window.open('http://www.google.com');
    },
  },
};

export const CardImage: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.CARD_IMAGE],
  },
};

export const CardImageWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      title: {
        color: 'red',
      },
    },
  },
};
