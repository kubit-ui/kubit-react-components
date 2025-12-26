import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  ArrowsControlVariant,
  PageControlVariant,
} from '@/lib/designSystem/kubit/components/pageControl/variants';
import { ICONS } from '@/lib/storybook/assets/icons/icons';

import { PageControl as Story } from '../pageControl';
import type { PageControlControlProps } from '../types/pageControl';
import { argtypes } from './argtypes';

const StoryWithHooks = (args) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = 10;

  const handleLeftArrowClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleRightArrowClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const disabledLeftArrow = currentPage === 0;
  const disabledRightArrow = currentPage === pages - 1;

  const leftControlPageControl: PageControlControlProps = {
    ['aria-label']: 'Left Arrow',
    disabled: disabledLeftArrow,
    icon: ICONS.CHEVRON_LEFT,
    onClick: handleLeftArrowClick,
  };

  const rightControlPageControl = {
    ['aria-label']: 'Right Arrow',
    disabled: disabledRightArrow,
    icon: ICONS.CHEVRON_RIGHT,
    onClick: handleRightArrowClick,
  };

  return (
    <div style={{ height: '50px', justifySelf: 'center', width: '400px' }}>
      <Story
        {...args}
        currentPosition={currentPage}
        leftControl={leftControlPageControl}
        pages={pages}
        rightControl={rightControlPageControl}
      />
    </div>
  );
};
const meta = {
  argTypes: argtypes(),
  component: Story,
  render: ({ ...args }) => <StoryWithHooks {...args} />,
  tags: ['autodocs', 'navigation'],
  title: 'Components/Navigation/PageControl',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  arrowsControlVariant: ArrowsControlVariant.DEFAULT,
  variant: PageControlVariant.BULLETS,
};

export const PageControl = {
  args: {
    ...commonArgs,
  },
};
