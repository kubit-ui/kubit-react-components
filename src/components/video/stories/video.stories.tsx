import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import video from '@/assets/storybook/videos/mov_bbb.mp4';
import { STYLES_NAME } from '@/constants';
// import video from '@/assets/storybook/videos/dosMinutos.mp4';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { TrackKindType, VideoType } from '../../../types/video';
import { IVideoUnControlled } from '../types';
import { VideoUnControlled as Story } from '../videoUnControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Resources/Video',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  render: ({ ...args }: IVideoUnControlled) => {
    return (
      <div>
        <Story {...args} />
      </div>
    );
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: IVideoUnControlled = {
  variant: 'REGULAR',
  videoSrc: video,
  videoType: VideoType.MP4,
  trackKind: TrackKindType.SUBTITLES,
  trackLabel: 'English',
  trackSrc: '/src/assets/storybook/videos/exampleSubtitles.vtt',
  trackSrcLang: 'en',
  autoFullScreen: false,
  screenPlayIcon: { icon: ICONS.ICON_CLOSE, altText: 'screen play alt text' },
  screenLoadingIcon: { icon: ICONS.ICON_GHOST, altText: 'screen loading alt text' },
  buttonsBarPlayIconTooltip: 'play/stop',
  buttonsBarPlayIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'play icon alt text' },
  buttonsBarPlayIconToTransition: { icon: ICONS.ICON_GHOST, altText: 'stop icon alt text' },
  buttonsBarVolumeIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'volume alt text' },
  buttonsBarVolumeIconTooltip: 'Volume',
  buttonsBarVolumeIconToTransition: { icon: ICONS.ICON_GHOST, altText: 'volume alt text' },
  buttonsBarSubtitlesIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'subtitles icon alt text' },
  buttonsBarSubtitlesIconTooltip: 'Subtitles',
  buttonsBarSubtitlesIconToTransition: {
    icon: ICONS.ICON_GHOST,
    altText: 'subtitles icon alt text',
  },
  buttonsBarFullScreenIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'screen icon alt text' },
  buttonsBarFullScreenIconTooltip: 'Fullscreen',
  buttonsBarFullScreenIconToTransition: { icon: ICONS.ICON_GHOST, altText: 'screen icon alt text' },
  volumeBarAriaLabel: 'ariaLabelVolumeBar',
  dataTestIdVolumeInput: 'testId-rangeInput',
  actionButton: { content: 'Turn on audio description', ['aria-label']: 'ariaLabel actionButton' },
  linkText: 'Transcript',
  linkUrl: 'www.google.com',
  // timeToHideButtonsBar: 4000,
  posterUrl: 'https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288886.jpg',
};

export const Video: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.VIDEO],
  },
};

export const VideoWithoutAutoFullScreen: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.VIDEO],
  },
};

export const VideoWithAutoFullScreen: Story = {
  args: {
    ...commonArgs,
    autoFullScreen: true,
    themeArgs: themesObject[themeSelected][STYLES_NAME.VIDEO],
  },
};

export const VideoWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      container: {
        background_color: 'pink',
        padding: '10px',
      },
    },
  },
};
