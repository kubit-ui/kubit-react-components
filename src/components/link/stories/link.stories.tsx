import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Link as Story } from '../link';
import { LinkActionType, LinkPositionType, LinkStateType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Actions/Link',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/link',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-11457&mode=dev',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const args = {
  variant: Object.values(variantsObject[themeSelected].LinkVariantType || {})[0] as string,
  children: 'Link',
  textVariant: Object.values(variantsObject[themeSelected].TextVariantType || {})[0] as string,
  action: LinkActionType.NAVIGATION,
  url: 'www.google.com',
  target: undefined,
  icon: {
    icon: ICONS.ICON_PLACEHOLDER,
    altText: 'Alt text',
  },
  iconPosition: LinkPositionType.RIGHT,
  draggable: false,
  themeArgs: themesObject[themeSelected][STYLES_NAME.LINK],
};

export const Link: Story = {
  args: {
    ...args,
  },
};

export const LinkWithCtv: Story = {
  args: {
    ...args,
    ctv: {
      [LinkActionType.NAVIGATION]: {
        ['PRIMARY']: {
          [LinkStateType.DEFAULT]: { container: { background_color: 'red', color: '#FFF' } },
        },
      },
    },
  },
};
