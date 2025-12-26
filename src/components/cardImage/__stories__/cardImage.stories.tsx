import type { Meta, StoryObj } from '@storybook/react-vite';

import { CardImageStateVariantType } from '@/lib/designSystem/kubit/components/cardImage/variants';
import { LinkVariant } from '@/lib/designSystem/kubit/components/link/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';
import { IMAGES } from '@/lib/storybook/assets/images/images';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { CardImage as Story } from '../cardImage';
import type { CardImageProps } from '../types/cardImage';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'commercial'],
  title: 'Components/Commercial/CardImage',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: CardImageProps = {
  description: {
    content:
      'Phasellus consectetur sapien risus, at aliquet orci lobortis nec. Morbi finibus ligula id faucibus ornare. Vivamus accumsan pharetra ipsum et blandit. ',
  },
  image: {
    [DEVICE_BREAKPOINTS.DESKTOP]: IMAGES.IMAGE_4,
    [DEVICE_BREAKPOINTS.MOBILE]: IMAGES.IMAGE_4,
    [DEVICE_BREAKPOINTS.TABLET]: IMAGES.IMAGE_4,
  },
  link: {
    action: 'navigation',
    content: 'Navigation link',
    icon: { icon: ICONS.CHEVRON_RIGHT },
    onClick: () => {
      window.open('http://www.google.com');
    },
    url: '/',
    variant: LinkVariant.PRIMARY,
  },
  title: {
    content: 'Title lorem ipsum dolor sit amet consectetur adipiscing elit sed',
  },
  variant: CardImageStateVariantType.DEFAULT,
};

export const CardImage: Story = {
  args: {
    ...commonArgs,
  },
};
