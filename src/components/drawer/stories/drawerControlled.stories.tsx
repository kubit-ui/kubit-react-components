import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { Button } from '@/components/button/button';
import { FooterPositionType } from '@/components/footer/types/position';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { TextComponentType } from '@/components/text/types/component';
import { STYLES_NAME } from '@/constants';
import { ButtonSizeType, ButtonVariantType } from '@/designSystem/kubit/components/variants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { DrawerControlled as Story } from '../index';
import { DrawerLevelPositionTypes, DrawerTitleComponentType } from '../types';
import { argtypes } from './controlledArgtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/Drawer/DrawerControlled',
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

  const [open, setOpen] = React.useState(false);

  const onClickBackFirstLevel = () => {
    setLevel(DrawerLevelPositionTypes.FIRST_LEVEL);
  };

  return (
    <>
      <Button
        size={ButtonSizeType.LARGE}
        variant={ButtonVariantType.PRIMARY}
        onClick={() => setOpen(!open)}
      >
        Open Drawer
      </Button>
      <Story {...args} level={level} open={open} onClickBackFirstLevel={onClickBackFirstLevel} />
    </>
  );
};

export const DrawerControlled: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].DrawerVariantType || {})[0] as string,
    title: {
      content: 'Drawer title',
      component: DrawerTitleComponentType.H3 as unknown as TextComponentType,
      ['aria-label']: 'aria label title',
    },
    closeIcon: { icon: ICONS.ICON_CLOSE, altText: 'alt text icon', ['aria-label']: 'close icon' },
    level: DrawerLevelPositionTypes.FIRST_LEVEL,
    open: false,
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

export const DrawerControlledWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].DrawerVariantType || {})[0] as string,
    title: {
      content: 'Drawer title',
      component: DrawerTitleComponentType.H3 as unknown as TextComponentType,
      ['aria-label']: 'aria label title',
    },
    closeIcon: { icon: ICONS.ICON_CLOSE, altText: 'alt text icon', ['aria-label']: 'close icon' },
    level: DrawerLevelPositionTypes.FIRST_LEVEL,
    open: false,
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
