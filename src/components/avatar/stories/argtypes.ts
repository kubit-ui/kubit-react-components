import { IMAGES } from '@/assets';
import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { objectFlip } from '@/storybook/utils/utils';
import { ArgTypesReturn } from '@/types';

import { AvatarBackgroundColor } from '../types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    size: {
      description: 'Size to add styles',
      options: Object.keys(variants[themeSelected].AvatarSize || {}),
      control: { type: 'select' },
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    image: {
      description: 'Image of the avatar',
      options: Object.values(IMAGES),
      type: { name: 'string' },
      control: { type: 'select', labels: objectFlip(IMAGES) },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    icon: {
      description:
        'Object with icon properties. The icon will be displayed when it is not possible to access the initials or when there is an image display problem due to an error',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    initials: {
      description: 'Object with initials properties. The initials of the user name',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'AvatarInitialsType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    dot: {
      description: 'Object with Dot properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IDot',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    link: {
      description: 'Object with link properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'AvatarLinkType',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    url: {
      description: 'Url of the link (in case the image opens a window it should be a link)',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    backgroundColor: {
      description: 'The background color to with_icon and witch_initials',
      options: Object.keys(AvatarBackgroundColor),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'AvatarBackgroundColor',
          detail: Object.keys(AvatarBackgroundColor).join(', '),
        },
        defaultValue: { summary: AvatarBackgroundColor.COLOR_DEFAULT },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxLengthInitials: {
      description: 'Max length of the initials',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 2 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    dataTestId: {
      description: 'String used for testing',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    onClick: {
      description: 'Function to executed when user clicks',
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    cts: {
      description: 'Object used for update size styles',
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
