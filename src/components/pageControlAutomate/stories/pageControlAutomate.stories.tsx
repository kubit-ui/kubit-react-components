import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { ICONS } from '@/assets';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { PageControlAutomateUnControlled as Story } from '../pageControlAutomateUnControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';
const meta = {
  title: 'Components/Navigation/PageControlAutomate',
  component: Story,
  parameters: {
    layout: 'fullscreen',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/pageControlAutomate',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;
export default meta;
type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [currentIndicator, setCurrentIndicator] = React.useState(0);

  const mediaProgressBar = {
    barsNum: 3,
    barProgressDuration: 2000,
    barsAriaLabels: ['aria-label-0', 'aria-label-1', 'aria-label-2'],
    clickableBars: true,
  };

  const handleChangeIndicator = (indexIndicator: number) => {
    const newIndexIndicator =
      indexIndicator < 0 ? mediaProgressBar.barsNum - 1 : indexIndicator % mediaProgressBar.barsNum;

    setCurrentIndicator(newIndexIndicator);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {' '}
      <Story
        {...args}
        currentBar={currentIndicator}
        mediaProgressBar={{ ...mediaProgressBar, onChangeBar: handleChangeIndicator }}
        // handleChangeIndicator={handleChangeIndicator}
      />
    </div>
  );
};

const commonArgs = {
  variant: Object.values(
    variantsObject[themeSelected].PageControlAutomateVariant || {}
  )[0] as string,
  leftArrow: {
    icon: { icon: ICONS.ICON_CHEVRON_LEFT, altText: 'alt text left arrow' },
  },
  rightArrow: {
    icon: { icon: ICONS.ICON_CHEVRON_RIGHT, altText: 'alt text right arrow' },
  },
  playStop: {
    icon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'alt text play' },
    twistedIcon: { icon: ICONS.ICON_CLOSE, altText: 'alt text stop' },
  },
};

export const PageControlAutomate = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.PAGE_CONTROL_AUTOMATE],
  },
};

export const PageControlAutomateWithCtv = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
