import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets/storybook/icons/icons';
import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { PageControl as Story } from '../pageControl';
import { PageControlArrowControlType } from '../types/pageControl';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/PageControl',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/pageControl',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3942-37764&mode=dev',
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const pages = 10;

  const handleLeftArrowClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleRightArrowClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const disabledLeftArrow = currentPage === 0;
  const disabledRightArrow = currentPage === pages - 1;

  const leftArrowControlPageControl: PageControlArrowControlType = {
    icon: ICONS.ICON_CHEVRON_LEFT,
    ['aria-label']: 'Left Arrow',
    disabled: disabledLeftArrow,
    onClick: handleLeftArrowClick,
  };

  const rightArrowControlPageControl = {
    icon: ICONS.ICON_CHEVRON_RIGHT,
    ['aria-label']: 'Right Arrow',
    disabled: disabledRightArrow,
    onClick: handleRightArrowClick,
  };

  return (
    <div style={{ width: '400px', height: '50px', justifySelf: 'center' }}>
      <Story
        {...args}
        currentPosition={currentPage}
        leftControl={leftArrowControlPageControl}
        pages={pages}
        rightControl={rightArrowControlPageControl}
      />
    </div>
  );
};

export const PageControl = {
  args: {
    variant: Object.values(variantsObject[themeSelected].PageControlVariant || {})[0] as string,
    arrowsControlVariant: Object.values(
      variantsObject[themeSelected].ArrowsControlVariant || {}
    )[0] as string,
    themeArgs: themesObject[themeSelected][STYLES_NAME.PAGE_CONTROL],
  },
};

export const PageControlWithCtv = {
  args: {
    variant: Object.values(variantsObject[themeSelected].PageControlVariant || {})[0] as string,
    arrowsControlVariant: Object.values(
      variantsObject[themeSelected].ArrowsControlVariant || {}
    )[0] as string,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
