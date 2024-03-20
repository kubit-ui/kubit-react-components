import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { MediaButton as Story } from '../mediaButton';
import { IMediaButton, MediaButtonSizeType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Mediabutton',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [twisted, setTwisted] = React.useState(args.twisted);

  return <Story {...args} twisted={twisted} onClick={() => setTwisted(!twisted)} />;
};

const commonArgs: IMediaButton = {
  variant: Object.values(variantsObject[themeSelected].MediaButtonVariantType || {})[0] as string,
  size: Object.values(
    variantsObject[themeSelected].MediaButtonIconSizeVariantType || {}
  )[0] as MediaButtonSizeType,
  icon: { icon: ICONS.ICON_PLACEHOLDER },
  twistedIcon: { icon: ICONS.ICON_CLOSE },
  hasBackground: false,
  loading: true,
};

export const Mediabutton: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.MEDIA_BUTTON],
  },
};

export const MediabuttonWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      LARGE: {
        container: {
          border: '2px solid pink',
          padding: '5px',
        },
      },
      EXTRA_LARGE: {
        container: {
          border: '2px solid pink',
          padding: '5px',
        },
      },
      SMALL: {
        container: {
          border: '2px solid pink',
          padding: '5px',
        },
      },
    },
  },
};
