import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { Button } from '@/components/button';
import { Carousel, CarouselAlignType } from '@/components/carousel';
import { CssAnimationTimingFunction, CssAnimationVariants } from '@/components/cssAnimation';
import { FooterPositionType } from '@/components/footer';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';
import { ROLES } from '@/types';

import { ModalControlled as Story } from '../modalControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/ModalV2',
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
      <Story
        {...args}
        closeIcon={{ ...args.closeIcon, onClick: handleClose }}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export const Modal: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].ModalVariantType || {})[0] as string,
    title: { content: 'Modal title' },
    dataTestId: 'modal',
    content: (
      <Carousel
        allowModifySliceWidth={true}
        centerMode={false}
        circular={false}
        disableSwipe={false}
        displayArrowsOnCarousel={false}
        elements={[
          <ReplaceContent
            key={0}
            aria-label="1 of 10"
            aria-roledescription="slide"
            id="carousel-item-1"
            role={ROLES.GROUP}
          >
            First Slide
          </ReplaceContent>,
          <ReplaceContent
            key={1}
            aria-label="2 of 10"
            aria-roledescription="slide"
            id="carousel-item-2"
            role={ROLES.GROUP}
          >
            Second Slide
          </ReplaceContent>,
          <ReplaceContent
            key={2}
            aria-label="3 of 10"
            aria-roledescription="slide"
            id="carousel-item-3"
            role={ROLES.GROUP}
          >
            Third Slide
          </ReplaceContent>,
          <ReplaceContent
            key={3}
            aria-label="4 of 10"
            aria-roledescription="slide"
            id="carousel-item-4"
            role={ROLES.GROUP}
          >
            Fourth Slide
          </ReplaceContent>,
          <ReplaceContent
            key={4}
            aria-label="5 of 10"
            aria-roledescription="slide"
            id="carousel-item-5"
            role={ROLES.GROUP}
          >
            Fifth Slice
          </ReplaceContent>,
          <ReplaceContent
            key={5}
            aria-label="6 of 10"
            aria-roledescription="slide"
            id="carousel-item-6"
            role={ROLES.GROUP}
          >
            Sixth Slide
          </ReplaceContent>,
        ]}
        extraPadding={0}
        extraPaddingAsArrow={true}
        hasPagination={true}
        leftArrow={{
          icon: ICONS.ICON_CHEVRON_LEFT,
          ['aria-label']: 'Left arrow aria label',
        }}
        numElementsPerPage={3}
        numElementsToSlide={3}
        onePageAlign={CarouselAlignType.CENTER}
        pageControlArrowsControlVariant={
          Object.values(variantsObject[themeSelected].ArrowsControlVariant || {})[0] as string
        }
        pageControlVariant={
          Object.values(variantsObject[themeSelected].PageControlVariant || {})[0] as string
        }
        rightArrow={{
          icon: ICONS.ICON_CHEVRON_RIGHT,
          ['aria-label']: 'Right arrow aria label',
        }}
        variant={
          Object.values(variantsObject[themeSelected].CarouselVariantType || {})[0] as string
        }
      />
    ),
    contentScrollArias: {
      'aria-label': 'Modal content scroll',
    },
    // open: true,
    closeIcon: { icon: ICONS.ICON_CLOSE },

    footer: {
      variant: Object.values(variantsObject[themeSelected].FooterVariants || {})[0] as string,
      content: [
        <Button
          key={0}
          disabled
          data-position={FooterPositionType.LEFT}
          size={Object.values(variantsObject[themeSelected].ButtonSizeType || {})[0] as string}
          variant={
            Object.values(variantsObject[themeSelected].ButtonVariantType || {})[0] as string
          }
        >
          {'Button'}
        </Button>,
        <Button
          key={1}
          data-position={FooterPositionType.RIGHT}
          size={Object.values(variantsObject[themeSelected].ButtonSizeType || {})[0] as string}
          variant={
            Object.values(variantsObject[themeSelected].ButtonVariantType || {})[0] as string
          }
        >
          {'Button'}
        </Button>,
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
      focusFirstDescendantAutomatically: true,
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
    contentScrollArias: {
      'aria-label': 'Modal content scroll',
    },
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
