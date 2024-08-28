import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { CssAnimationTimingFunction, CssAnimationVariants } from '@/components/cssAnimation';
import { FooterPositionType } from '@/components/footer';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { ModalControlled as Story } from '../modalControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/Modal',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    layout: 'centered',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/modal',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-22906&mode=dev',
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ width: 'fit-content' }}>
      <button onClick={handleOpen}>Open Modal</button>
      <Story {...args} closeIcon={{ ...args.closeIcon, onClick: handleClose }} open={open} />
    </div>
  );
};

export const Modal: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ModalVariantType || {})[0] as string,
    title: { content: 'Modal title' },
    dataTestId: 'modal',
    content: <ReplaceContent width={'100%'} />,
    open: true,
    closeIcon: { icon: ICONS.ICON_CLOSE },
    footer: {
      variant: Object.values(variantsObject[themeSelected].FooterVariants || {})[0] as string,
      content: [
        <ReplaceContent key={0} data-position={FooterPositionType.LEFT} width={'100%'}>
          Footer content
        </ReplaceContent>,
        <ReplaceContent key={0} data-position={FooterPositionType.RIGHT} width={'100%'}>
          Footer content
        </ReplaceContent>,
      ],
    },
    popover: {
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.5,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.EASE_IN,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '250px',
        animationXStartPosition: '0px',
        animationYEndPosition: '0px',
        animationXEndPosition: '0px',
      },
    },
    themeArgs: themesObject[themeSelected][STYLES_NAME.MODAL],
  },
};

export const ModalWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ModalVariantType || {})[0] as string,
    title: { content: 'Modal title' },
    dataTestId: 'modal',
    content: <ReplaceContent width={'100%'} />,
    open: true,
    closeIcon: { icon: ICONS.ICON_CLOSE },
    footer: {
      variant: Object.values(variantsObject[themeSelected].FooterVariants || {})[0] as string,
      content: [
        <ReplaceContent key={0} data-position={FooterPositionType.LEFT} width={'100%'}>
          Footer content
        </ReplaceContent>,
        <ReplaceContent key={0} data-position={FooterPositionType.RIGHT} width={'100%'}>
          Footer content
        </ReplaceContent>,
      ],
    },
    popover: {
      animation: {
        type: CssAnimationVariants.SLIDE_IN,
      },
      animationOptions: {
        duration: 0.5,
        delay: 0,
        timingFunction: CssAnimationTimingFunction.EASE_IN,
        iterationCount: 1,
        animationDistanceInPx: 100,
        animationRotationInDeg: 500,
        animationYStartPosition: '250px',
        animationXStartPosition: '0px',
        animationYEndPosition: '0px',
        animationXEndPosition: '0px',
      },
    },
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
