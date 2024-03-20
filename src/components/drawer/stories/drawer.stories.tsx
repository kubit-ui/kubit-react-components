import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { FooterPositionType } from '@/components/footer';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { TextComponentType } from '@/components/text';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Drawer as Story } from '../index';
import { DrawerLevelPositionTypes, DrawerTitleComponentType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/Drawer',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [level, setLevel] = React.useState(args.level);

  const onClickBackFirstLevel = () => {
    setLevel(DrawerLevelPositionTypes.FIRST_LEVEL);
  };

  return <Story {...args} level={level} onClickBackFirstLevel={onClickBackFirstLevel} />;
};

export const Drawer: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].DrawerVariantType || {})[0] as string,
    title: {
      content: 'Drawer title',
      component: DrawerTitleComponentType.H3 as unknown as TextComponentType,
      ['aria-label']: 'aria label title',
    },
    closeIcon: { icon: ICONS.ICON_CLOSE, altText: 'alt text icon', ['aria-label']: 'close icon' },
    level: DrawerLevelPositionTypes.FIRST_LEVEL,
    defaultOpen: true,
    children: <ReplaceContent />,
    blocked: false,
    popover: {
      blockBack: true,
    },
    footer: {
      content: [
        <ReplaceContent key={0} data-position={FooterPositionType.LEFT} />,
        <ReplaceContent key={2} data-position={FooterPositionType.RIGHT} />,
      ],
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.DRAWER],
  },
};

export const DrawerWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].DrawerVariantType || {})[0] as string,
    title: {
      content: 'Drawer title',
      component: DrawerTitleComponentType.H3 as unknown as TextComponentType,
      ['aria-label']: 'aria label title',
    },
    closeIcon: { icon: ICONS.ICON_CLOSE, altText: 'alt text icon', ['aria-label']: 'close icon' },
    level: DrawerLevelPositionTypes.FIRST_LEVEL,
    defaultOpen: true,
    children: <ReplaceContent />,
    blocked: false,
    popover: {
      blockBack: true,
    },
    footer: {
      content: [
        <ReplaceContent key={0} data-position={FooterPositionType.LEFT} />,
        <ReplaceContent key={2} data-position={FooterPositionType.RIGHT} />,
      ],
    },
    ctv: {
      DESKTOP: {
        title: {
          color: 'red',
        },
      },
      TABLET: {
        title: {
          color: 'red',
        },
      },
      MOBILE: {
        title: {
          color: 'red',
        },
      },
    },
  },
};
