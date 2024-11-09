import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { Button } from '@/components/button/button';
import { FooterPositionType } from '@/components/footer/types/position';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { TextComponentType } from '@/components/text/types/component';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { ButtonSizeType, ButtonVariantType } from '@/designSystem/kubit/components/variants';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { DrawerControlled as Story } from '../drawerControlled';
import { DrawerLevelPositionTypes } from '../types/level';
import { DrawerTitleComponentType } from '../types/titleComponent';
import { DrawerVariantPositionTypes } from '../types/variantPosition';
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
      <Story
        {...args}
        closeIcon={{ ...args.closeIcon, onClick: () => setOpen(false) }}
        level={level}
        open={open}
        popover={{ ...args.popover, onCloseInternally: () => setOpen(false) }}
        onClickBackFirstLevel={onClickBackFirstLevel}
      />
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
    children: (
      <>
        <ReplaceContent />
        <ReplaceContent />
        <ReplaceContent />
        <ReplaceContent />
      </>
    ),
    contentScrollArias: {
      'aria-label': 'Drawer content scroll',
    },
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
    contentScrollArias: {
      'aria-label': 'Drawer content scroll',
    },
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
        container: {
          [DrawerVariantPositionTypes.DRAWER_RIGHT]: {
            min_width: '80vw',
            max_width: '80vw',
          },
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
