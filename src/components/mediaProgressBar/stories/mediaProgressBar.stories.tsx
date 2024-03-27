import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { Button } from '../../button';
import { MediaProgressBar as Story } from '../mediaProgressBar';
import { IMediaProgressBar } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/MediaProgressBar',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/mediaProgressBar',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }) => <StoryWithHooks {...args} />,
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = args => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentBar, setCurrentBar] = React.useState(0);

  const handleChangeBar = (indexBar: number) => {
    setCurrentBar(indexBar % args.barsNum);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleStop = () => {
    setIsPlaying(false);
  };

  const finish = (isPlayingInternal: boolean) => {
    setIsPlaying(isPlayingInternal);
  };

  return (
    <div style={{ width: '600px', gap: '60px', display: 'flex', flexDirection: 'column' }}>
      <Story
        {...args}
        currentBar={currentBar}
        handleFinish={finish}
        playingExternal={isPlaying}
        onChangeBar={handleChangeBar}
      ></Story>
      <div style={{ width: '50px', display: 'flex', gap: '20px' }}>
        <Button fullWidth={false} size="SMALL" variant="PRIMARY" onClick={handlePlay}>
          Play
        </Button>
        <Button fullWidth={false} size="SMALL" variant="PRIMARY" onClick={handleStop}>
          Stop
        </Button>
      </div>
    </div>
  );
};

const commonArgs: IMediaProgressBar = {
  variant: Object.values(
    variantsObject[themeSelected].MediaProgressBarVariantType || {}
  )[0] as string,
  barsNum: 1,
  barProgressDuration: 5000,
  barsAriaLabels: ['aria-label-0'],
  clickableBars: true,
};

export const MediaProgressBar: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.MEDIA_PROGRESS_BAR],
  },
};

export const MediaProgressBarWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
