import userEvent from '@testing-library/user-event';

import { act, fireEvent, waitFor } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import * as useMediaDevice from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType, ROLES } from '@/types';
import { TrackKindType, VideoType } from '@/types/video';

import { Video } from '..';
import * as SliderUtils from '../../slider/utils/slider.utils';

Object.defineProperty(HTMLMediaElement.prototype, 'load', {
  value: jest.fn(),
});

const mockVideo = (container: HTMLElement) => {
  // Configure video and finish loading
  const video = container.querySelector('video');
  if (video) {
    Object.defineProperty(video, 'play', {
      configurable: true,
      get() {
        return () => {
          Object.defineProperty(video, 'paused', {
            configurable: true,
            get() {
              return false;
            },
          });
          video.dispatchEvent(new Event('play'));
        };
      },
    });
    Object.defineProperty(video, 'pause', {
      configurable: true,
      get() {
        return () => {
          Object.defineProperty(video, 'paused', {
            configurable: true,
            get() {
              return true;
            },
          });
          video.dispatchEvent(new Event('pause'));
        };
      },
    });
    video.dispatchEvent(new Event('canplay'));
  }
};

const mockDispatchUpdateFullScreen = (fullScreen: boolean) => {
  Object.defineProperty(document, 'fullscreenElement', {
    configurable: true,
    get() {
      return fullScreen;
    },
  });
  act(() => {
    document.dispatchEvent(new Event('fullscreenchange'));
  });
};

const mockProps = {
  variant: 'REGULAR',
  videoSrc: '/src/assets/storybook/videos/mov_bbb.mp4',
  videoType: VideoType.MP4,
  trackKind: TrackKindType.SUBTITLES,
  trackLabel: 'English',
  trackSrc: '/src/assets/storybook/videos/exampleSubtitles.vtt',
  trackSrcLang: 'en',
  autoFullScreen: false,
  hasInitialOverlay: false,
  screenPlayIcon: { icon: 'ICON_CLOSE', altText: 'screen play alt text' },
  screenLoadingIcon: { icon: 'ICON_GHOST', altText: 'screen loading alt text' },
  barAriaLabel: 'barAriaLabel',
  buttonsBarPlayIconTooltip: 'play/stop',
  buttonsBarPlayIcon: { icon: 'ICON_CHEVRON_UP', altText: 'play icon alt text' },
  buttonsBarPlayIconToTransition: { icon: 'ICON_CLOSE', altText: 'stop icon alt text' },
  buttonsBarVolumeIcon: { icon: 'ICON_CHEVRON_DOWN', altText: 'volume alt text' },
  buttonsBarVolumeIconTooltip: 'Volume',
  buttonsBarVolumeIconToTransition: { icon: 'ICON_CHEVRON_UP', altText: 'volume mute alt text' },
  buttonsBarSubtitlesIcon: { icon: 'ICON_GHOST', altText: 'subtitles icon alt text' },
  buttonsBarSubtitlesIconTooltip: 'Subtitles',
  buttonsBarSubtitlesIconToTransition: {
    icon: 'ICON_CHEVRON_DOWN',
    altText: 'subtitles off icon alt text',
  },
  buttonsBarFullScreenIcon: { icon: 'ICON_CHEVRON_LEFT', altText: 'fullscreen icon alt text' },
  buttonsBarFullScreenIconToTransition: { icon: 'ICON_GHOST', altText: 'screen icon alt text' },
  buttonsBarFullScreenIconTooltip: 'Fullscreen',
  volumeBarAriaLabel: 'ariaLabelVolumeBar',
  actionButton: {
    content: 'Transcript',
    ['aria-label']: 'ariaLabel actionButton',
    onClick: () => null,
  },
  linkText: 'Turn on audio description',
  linkUrl: 'www.google.com',
  dataTestIdParentContainer: 'testId-parentContainer',
  dataTestIdVideoSkeleton: 'skeletonVideotest',
  dataTestIdVolumeInput: 'testId-rangeInput',
};

describe('Video component', () => {
  it('Should render video component', async () => {
    const { container, getByTestId } = renderProvider(
      <Video {...mockProps} timeToHideButtonsBar={1000} />
    );

    const video = getByTestId('testId-parentContainer') as HTMLVideoElement;

    expect(video).toBeInTheDocument();

    const results = await axe(container, { preload: false });
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render video component for MOBILE', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const { container, getByTestId } = renderProvider(
      <Video {...mockProps} timeToHideButtonsBar={1000} />
    );

    const video = getByTestId('testId-parentContainer') as HTMLVideoElement;

    expect(video).toBeInTheDocument();

    const results = await axe(container, { preload: false });
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render an overlewy at the start if showOverlayInitial (default true)', async () => {
    const { container, getByTestId } = renderProvider(
      <Video {...mockProps} dataTestIdOverlay={'dataTestIdOverlay'} hasInitialOverlay={undefined} />
    );

    expect(getByTestId('dataTestIdOverlay')).toBeInTheDocument();

    const results = await axe(container, { preload: false });
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render skeleton', async () => {
    const { container, getByTestId } = renderProvider(<Video {...mockProps} hasSkeleton={true} />);

    const skeleton = getByTestId('skeletonVideotest');

    expect(skeleton).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Click play/stop button', () => {
    const { container, queryByLabelText } = renderProvider(<Video {...mockProps} />);

    // Configure video and finish loading
    mockVideo(container);

    // buttons before click play
    const playButtonBeforeClick = queryByLabelText('play icon alt text') as HTMLElement;
    expect(playButtonBeforeClick).toBeInTheDocument();

    const stopButtonBeforeClick = queryByLabelText('stop icon alt text') as HTMLElement;
    expect(stopButtonBeforeClick).toBeNull();

    // click play
    fireEvent.click(playButtonBeforeClick);

    // buttons after click play
    const stopButtonAfterClick = queryByLabelText('stop icon alt text') as HTMLElement;
    expect(stopButtonAfterClick).toBeInTheDocument();

    const playButtonAfterClick = queryByLabelText('play icon alt text') as HTMLElement;
    expect(playButtonAfterClick).toBeNull();

    // click stop
    fireEvent.click(stopButtonAfterClick);

    const playButtonBeforeClickStop = queryByLabelText('play icon alt text') as HTMLElement;
    expect(playButtonBeforeClickStop).toBeInTheDocument();

    const stopButtonBeforeClickStop = queryByLabelText('stop icon alt text') as HTMLElement;
    expect(stopButtonBeforeClickStop).toBeNull();
  });

  it('Click volume button', () => {
    const { container, queryByLabelText } = renderProvider(<Video {...mockProps} />);

    // Configure video and finish loading
    mockVideo(container);

    //buttons before click volume
    const volumeButtonBeforeClick = queryByLabelText('volume alt text') as HTMLElement;
    expect(volumeButtonBeforeClick).toBeInTheDocument();

    const volumeMuteButtonBeforeClick = queryByLabelText('volume mute alt text') as HTMLElement;
    expect(volumeMuteButtonBeforeClick).toBeNull();

    //click volume
    fireEvent.click(volumeButtonBeforeClick);

    //buttons after click volume
    const volumeMuteButtonAfterClick = queryByLabelText('volume mute alt text') as HTMLElement;
    expect(volumeMuteButtonAfterClick).toBeInTheDocument();

    const volumeButtonAfterClick = queryByLabelText('volume alt text') as HTMLElement;
    expect(volumeButtonAfterClick).toBeNull();

    //click volumeMute
    fireEvent.click(volumeMuteButtonAfterClick);

    const volumeButtonBeforeClickVolumeMute = queryByLabelText('volume alt text') as HTMLElement;
    expect(volumeButtonBeforeClickVolumeMute).toBeInTheDocument();

    const volumeMuteButtonBeforeClickVolumeMute = queryByLabelText(
      'volume mute alt text'
    ) as HTMLElement;
    expect(volumeMuteButtonBeforeClickVolumeMute).toBeNull();
  });

  it('Volume input', () => {
    const { container, getByTestId } = renderProvider(<Video {...mockProps} />);

    // Configure video and finish loading
    mockVideo(container);

    const rangeInput = getByTestId('testId-rangeInput');

    expect(rangeInput).toHaveValue('50');
    fireEvent.change(rangeInput, { target: { value: '70' } });

    expect(rangeInput).toHaveValue('70');
  });

  it('Click subtitles button', () => {
    const { container, queryByLabelText } = renderProvider(<Video {...mockProps} />);

    // Configure video and finish loading
    mockVideo(container);

    //buttons before click subtitles
    const subtitlesBeforeClick = queryByLabelText('subtitles icon alt text') as HTMLElement;
    expect(subtitlesBeforeClick).toBeInTheDocument();

    const subtitlesOffButtonBeforeClick = queryByLabelText(
      'subtitles off icon alt text'
    ) as HTMLElement;
    expect(subtitlesOffButtonBeforeClick).toBeNull();

    //click subtitles
    fireEvent.click(subtitlesBeforeClick);

    //buttons after click subtitles
    const subtitlesOffButtonAfterClick = queryByLabelText(
      'subtitles off icon alt text'
    ) as HTMLElement;
    expect(subtitlesOffButtonAfterClick).toBeInTheDocument();

    const subtitlesAfterClick = queryByLabelText('subtitles icon alt text') as HTMLElement;
    expect(subtitlesAfterClick).toBeNull();

    //click subtitlesOff
    fireEvent.click(subtitlesOffButtonAfterClick);

    const subtitlesBeforeClickSubtitlesOff = queryByLabelText(
      'subtitles icon alt text'
    ) as HTMLElement;
    expect(subtitlesBeforeClickSubtitlesOff).toBeInTheDocument();

    const subtitlesOffButtonBeforeClickSubtitlesOff = queryByLabelText(
      'subtitles off icon alt text'
    ) as HTMLElement;
    expect(subtitlesOffButtonBeforeClickSubtitlesOff).toBeNull();
  });

  it('Click fullscreen button', () => {
    const mockRequestFullscreen = jest.fn();
    Object.defineProperty(HTMLElement.prototype, 'requestFullscreen', {
      value: mockRequestFullscreen,
    });

    const { container, queryByLabelText } = renderProvider(<Video {...mockProps} />);

    // Configure video and finish loading
    mockVideo(container);

    // buttons before click fullscreen
    const fullscreenBeforeClick = queryByLabelText('fullscreen icon alt text') as HTMLElement;
    expect(fullscreenBeforeClick).toBeInTheDocument();

    const screenButtonBeforeClick = queryByLabelText('screen icon alt text') as HTMLElement;
    expect(screenButtonBeforeClick).toBeNull();

    // click fullscreen
    fireEvent.click(fullscreenBeforeClick);
    expect(mockRequestFullscreen).toHaveBeenCalledTimes(1);
    mockDispatchUpdateFullScreen(true);

    // buttons after click fullscreen
    const screenButtonAfterClick = queryByLabelText('screen icon alt text') as HTMLElement;
    expect(screenButtonAfterClick).toBeInTheDocument();

    const fullscreenAfterClick = queryByLabelText('fullscreen icon alt text') as HTMLElement;
    expect(fullscreenAfterClick).toBeNull();

    // click screen
    fireEvent.click(screenButtonAfterClick);
    mockDispatchUpdateFullScreen(false);

    const fullscreenBeforeClickScreen = queryByLabelText('fullscreen icon alt text') as HTMLElement;
    expect(fullscreenBeforeClickScreen).toBeInTheDocument();

    const screenButtonBeforeClickScreen = queryByLabelText('screen icon alt text') as HTMLElement;
    expect(screenButtonBeforeClickScreen).toBeNull();
  });

  it('When video update the time, it should appear in the time component', () => {
    const { container, getByText } = renderProvider(<Video {...mockProps} />);

    // Configure video and finish loading
    mockVideo(container);

    const video = container.querySelector('video');
    if (video) {
      Object.defineProperty(video, 'currentTime', {
        configurable: true,
        get() {
          return 5;
        },
      });
      Object.defineProperty(video, 'duration', {
        configurable: true,
        get() {
          return 10;
        },
      });
      video.dispatchEvent(new Event('loadedmetadata'));
      video.dispatchEvent(new Event('timeupdate'));
    }

    expect(getByText('00:05 / 00:10')).toBeInTheDocument();
  });

  it('Video is paused when slider start to dragging, if it was playing before the drag, it continues', () => {
    const mockPlayFunc = jest.fn();
    const mockPauseFunc = jest.fn();
    const { container, getByRole } = renderProvider(<Video {...mockProps} />);

    // Configure video and finish loading
    mockVideo(container);
    const video = container.querySelector('video');
    if (video) {
      // Simulate video is playing
      Object.defineProperty(video, 'paused', {
        configurable: true,
        get() {
          return false;
        },
      });
      // Override stop and play function
      Object.defineProperty(video, 'play', {
        configurable: true,
        get() {
          return () => {
            Object.defineProperty(video, 'paused', {
              configurable: true,
              get() {
                return false;
              },
            });
            mockPlayFunc();
            video.dispatchEvent(new Event('play'));
          };
        },
      });
      // Override stop and play function
      Object.defineProperty(video, 'pause', {
        configurable: true,
        get() {
          return () => {
            Object.defineProperty(video, 'paused', {
              configurable: true,
              get() {
                return true;
              },
            });
            mockPauseFunc();
            video.dispatchEvent(new Event('pause'));
          };
        },
      });
    }
    jest.spyOn(SliderUtils, 'calculateChange').mockImplementation(() => 50);
    const slider = getByRole(ROLES.SLIDER, { name: 'barAriaLabel' });
    fireEvent.mouseDown(slider);

    expect(mockPauseFunc).toHaveBeenCalled();

    fireEvent.mouseUp(slider);

    expect(mockPlayFunc).toHaveBeenCalled();
  });

  it('On move progress bar, video current time may change too', async () => {
    const mockOnChange = jest.fn();
    jest.spyOn(SliderUtils, 'calculateChange').mockImplementation(() => 50);
    const { container, getByTestId } = renderProvider(<Video {...mockProps} />);

    // Configure video and finish loading
    mockVideo(container);
    const video = container.querySelector('video');
    if (video) {
      Object.defineProperty(video, 'currentTime', {
        configurable: true,
        set() {
          mockOnChange();
        },
      });
    }

    await userEvent.click(getByTestId('sliderContainer'));
    await waitFor(() => expect(mockOnChange).toHaveBeenCalled(), { timeout: 150 });
  });
});
