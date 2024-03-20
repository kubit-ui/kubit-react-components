import { CssAnimationExecuteOption } from '@/components/cssAnimation';
import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn, POSITIONS } from '@/types';

import { PopoverComponentType, PopoverPositionVariantType } from '../types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Popover variant',
      options: Object.keys(variants[themeSelected].PopoverVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    forwardedRef: {
      description: 'Reference to the element',
      table: {
        disable: true,
      },
    },
    focusFirstDescendantAutomatically: {
      description: 'Focus first descendant',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    focusLastElementFocusedAfterClose: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description:
        'Indicates if after close the popover should focus on the last focused element before opening',
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
        defaultValue: { summary: true },
      },
    },
    focusScreenFirstDescendantAfterClose: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description:
        'If you navigate by keyboard and modal is closed, the focus goes to first elemente of screen',
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
        defaultValue: { summary: false },
      },
    },
    trapFocusInsideModal: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Popover will trap the focus when tab',
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    blockBack: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Indicates if modal blocks scroll from background',
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    pressEscapeClose: {
      description: 'Indicates if popover is closed when pressing scape',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        defaultValue: { summary: true },
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    preventScrollOnCloseFocus: {
      description: 'Prevent the scroll when the popover lost the focus',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        defaultValue: { summary: false },
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    positionVariant: {
      options: Object.keys(PopoverPositionVariantType),
      control: { type: 'select' },
      type: { name: 'string' },
      description: 'Position variant to add styles',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    align: {
      options: Object.keys(POSITIONS),
      control: { type: 'select' },
      type: { name: 'string' },
      description: 'Popover align',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    autoWidth: {
      description:
        'This makes it expand to occupy all available horizontal space within its containing block',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    hasBackDrop: {
      description: 'Indicates if Popover has background',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    open: {
      description: 'Indicates if Popover is open or not',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    children: {
      control: { type: 'text' },
      type: { name: 'string', required: true },
      description: 'This will appear in your popover',
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    top: {
      control: false,
      description: 'The top position of the popover',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    bottom: {
      control: false,
      description: 'The bottom position of the popover',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    left: {
      control: false,
      description: 'The left position of the popover',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    right: {
      control: false,
      description: 'The right position of the popover',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxHeight: {
      control: false,
      description: 'Maximum height of the popover',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxWidth: {
      control: false,
      description: 'Maximum width of the popover',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    component: {
      description: 'Specifies the type of content for the popover',
      type: { name: 'string' },
      control: { type: 'select' },
      table: {
        defaultValue: { summary: PopoverComponentType.DIALOG },
        type: {
          summary: 'PopoverComponentType',
          detail: Object.keys(PopoverComponentType).join(', '),
        },
      },
    },
    id: {
      description: 'String used for id popover',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-modal']: {
      description: 'Indicates whether an element is modal when displayed',
      control: false,
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-description']: {
      description: 'Defines a string value that describes or annotates the current element',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-labelledby']: {
      description: 'Identifies the element (or elements) that labels the element it is applied to',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    role: {
      description: 'Provide semantic meaning to content',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    tabIndex: {
      description: 'Specifies the tab order of popover (when is used for navigating)',
      control: false,
      type: { name: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    transparentBackground: {
      description: 'Indicate if Popover has background',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    extraAlignGap: {
      description: 'Extra align gap',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    animation: {
      options: Object.keys(variants[themeSelected].PopoverVariantType || {}),
      description: 'Variant to add styles',
      control: {
        type: 'select',
      },
      defaultValue: Object.values(variants[themeSelected].PopoverVariantType || {})[0] as string,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    animationOptions: {
      description: 'CssAnimation options (duration, delay, iterationCount, timingFunction, ...)',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'ICssAnimationOptions',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    animationExecution: {
      description: 'CssAnimation execute option',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'CssAnimationExecuteOption',
          detail: Object.keys(CssAnimationExecuteOption).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    fullWidth: {
      description: 'Full width',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onKeyDown: {
      description: 'Function that is triggered anytime the user presses a key on their keyboard',
      control: false,
      table: {
        type: {
          summary: 'React.KeyboardEventHandler<HTMLElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    preventCloseOnClickElements: {
      description: 'Avoid to close popover when click inside this elements',
      control: false,
      table: {
        type: {
          summary: '(HTMLElement | null | undefined)[]',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    clickOverlayClose: {
      description: 'Boolean to prevent modal (or not) modal is closed when clicking overlay',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    dataTestId: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'String used for testing',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
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
