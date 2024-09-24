import { ICONS } from '@/assets';
import { LinkTargetType } from '@/components/link';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { LinkAndActionButtonAlignment } from '../types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Current variant of Video',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected]?.VideoVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    timeToHideButtonsBar: {
      description: 'Time in miliseconds to hide buttons bar',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 4000 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    videoSrc: {
      description: 'Source of the Video',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    videoType: {
      description: 'Type of video',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    trackKind: {
      description: 'Specifies the kind of text track',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    trackLabel: {
      description: 'Specifies the title of the text track',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    trackSrc: {
      description: 'Specifies the URL of the track file',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    trackSrcLang: {
      description: 'Specifies the language of the track text data (required if kind="subtitles")',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    posterUrl: {
      description: 'Url image for poster in video',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    barAriaLabel: {
      description: 'Aria label for progress bar',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    screenPlayIcon: {
      description: 'Select the icon to show screen play icon',
      type: { name: 'object' },
      control: { type: 'object' },
      defaultValue: ICONS.ICON_PLACEHOLDER,
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    screenLoadingIcon: {
      description: 'Select the icon to show screen loading icon',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    buttonsBarPlayIcon: {
      description: 'Select the icon to show the play button',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    buttonsBarPlayIconTooltip: {
      description: 'Text for the tooltip of play/stop button',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    buttonsBarPlayIconToTransition: {
      description: 'Select the icon to show icon to transition',
      type: { name: 'object' },
      control: { type: 'object' },
      defaultValue: ICONS.ICON_PLACEHOLDER,
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    buttonsBarVolumeIcon: {
      description: 'Select the icon to show the volume button',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      defaultValue: ICONS.ICON_PLACEHOLDER,
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    buttonsBarVolumeIconTooltip: {
      description: 'Text for the tooltip of volume button',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    buttonsBarVolumeIconToTransition: {
      description: 'Select the icon to show icon to transition',
      type: { name: 'object' },
      control: { type: 'object' },
      defaultValue: ICONS.ICON_PLACEHOLDER,
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    buttonsBarSubtitlesIcon: {
      description: 'Select the icon to show the subtitles button',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      defaultValue: ICONS.ICON_PLACEHOLDER,
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    buttonsBarSubtitlesIconTooltip: {
      description: 'Text for the tooltip of subtitles button',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    buttonsBarSubtitlesIconToTransition: {
      description: 'Select the icon to show the subtitles button to transition',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    volumeBarAriaLabel: {
      description: 'Aria label for inputRange',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    buttonsBarFullScreenIcon: {
      description: 'Select the icon to show the full screen button',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      defaultValue: ICONS.ICON_PLACEHOLDER,
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    buttonsBarFullScreenIconTooltip: {
      description: 'Text for the tooltip of fullscreen button',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    buttonsBarFullScreenIconToTransition: {
      description: 'Select the icon to show the full screen button to transition',
      type: { name: 'object' },
      control: { type: 'object' },
      defaultValue: ICONS.ICON_PLACEHOLDER,
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    linkAndActionButtonAlignment: {
      options: Object.keys(LinkAndActionButtonAlignment),
      control: { type: 'select' },
      description: 'Set the alignment of the Link and Action button',
      defaultValue: LinkAndActionButtonAlignment.RIGHT,
      table: {
        category: CATEGORY_CONTROL.CONTENT,
        type: {
          summary: 'LinkAndActionButtonAlignment',
          detail: Object.keys(LinkAndActionButtonAlignment).join(', '),
        },
      },
    },
    actionButton: {
      description: 'Object with action button properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'VideoButtonType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    autoFullScreen: {
      description: 'Boolean to decide if the video should be fullscreen automatically after play',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    linkText: {
      description: 'Text for link',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    linkUrl: {
      description: 'Url for link',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    linkTarget: {
      options: Object.keys(LinkTargetType),
      control: { type: 'select' },
      type: { name: 'string' },
      description: 'Set the link target',
      defaultValue: LinkTargetType.BLANK,
      table: {
        type: {
          summary: 'LinkTargetType',
          detail: Object.keys(LinkTargetType).join(', '),
        },
        defaultValue: {
          summary: LinkTargetType.BLANK,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    hasInitialOverlay: {
      description: 'Boolean to show or not the overlay initially',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    hasSkeleton: {
      description: 'Boolean to show or not the skeleton',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    skeletonText: {
      description: 'Text for screenReader when skeleton is shown',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    dataTestIdParentContainer: {
      description: 'Test id associated to parent container for testing',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    dataTestIdOverlay: {
      description: 'Test id associated to overlay for testing',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    dataTestIdVideoSkeleton: {
      description: 'Test id associated to skeleton of the video for testing',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    dataTestIdVolumeInput: {
      description: 'Test id associated to volume input for testing',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    onCanPlay: {
      description: 'Function called when the video is ready to play',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.ReactEventHandler<HTMLVideoElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onChangeVolume: {
      description: 'Function called when user changes volume using the input range',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onClickFullScreen: {
      description: 'Function called when user click on the full screen button',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: '(event: React.MouseEvent<HTMLButtonElement>, activated: boolean) => void;',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onClickSubtitles: {
      description: 'Function called when user click on the subtitles button',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: '(event: React.MouseEvent<HTMLButtonElement>, activated: boolean) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onClickVolumeButton: {
      description: 'Function called when user click on the volume button',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: '(event: React.MouseEvent<HTMLButtonElement>, valume: string) => void;',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onLoadedMetadata: {
      description: 'Function called when the video loads its metadata',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onVideoPause: {
      description: 'Function called when the video pauses',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.ReactEventHandler<HTMLVideoElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onVideoPlay: {
      description: 'Function called when the video plays',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.ReactEventHandler<HTMLVideoElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onTimeUpdate: {
      description: 'Function called when video time changes',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.ReactEventHandler<HTMLVideoElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onTogglePlay: {
      description: 'Function called when user click on the play button',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary:
            '( event: React.MouseEvent<HTMLVideoElement | HTMLButtonElement, MouseEvent>, isPlaying: boolean ) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onClickActionButton: {
      description: 'Function called when user click on the action button',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onClickLink: {
      description: 'Function called when user click on the link',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    ctv: {
      description: 'Object used for update variant styles',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
  };
};
