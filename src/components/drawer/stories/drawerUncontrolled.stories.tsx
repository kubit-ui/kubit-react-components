import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { FooterPositionType } from '../../footer/types/position';
import { TextComponentType } from '../../text/types/component';
import { DrawerUnControlled as Story } from '../drawerUnControlled';
import { DrawerLevelPositionTypes } from '../types/level';
import { DrawerTitleComponentType } from '../types/titleComponent';
import { argtypes } from './controlledArgtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/Drawer/DrawerUncontrolled',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  parameters: {
    layout: 'centered',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/drawer',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-22903&mode=dev',
  },
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

export const DrawerUncontrolled: Story = {
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

export const DrawerUncontrolledWithCtv: Story = {
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
