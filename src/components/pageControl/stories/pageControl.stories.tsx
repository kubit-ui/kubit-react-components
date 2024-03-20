import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { PageControl as Story } from '../pageControl';
import { PageControlArrowControlType } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Navigation/PageControl',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
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
    arrowControlAriaLabel: 'Right Arrow',
    disabled: disabledRightArrow,
    arrowControlOnClick: handleRightArrowClick,
  };

  return (
    <Story
      {...args}
      currentPosition={currentPage}
      leftArrowControl={leftArrowControlPageControl}
      pages={pages}
      rightArrowControl={rightArrowControlPageControl}
    />
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
