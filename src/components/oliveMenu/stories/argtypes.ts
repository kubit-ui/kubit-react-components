import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Olivemenu variant',
      options: Object.keys(variants[themeSelected].OliveMenuVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    trigger: {
      description: 'Trigger button to open the menu',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'OliveMenuTriggerType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    screenReaderText: {
      description: ' String used for screen reader text',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    popover: {
      description: 'Popover extra configuration',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'OliveMenuPopover',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    actionBottomSheetStructure: {
      description: 'Action bottom sheet extra configuration and content',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'OliveMenuActionBottomSheetStructure',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    sections: {
      description: 'Sections',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'OliveMenuListOptions[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    selectedValue: {
      description: 'Selected value',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string or number',
        },
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
    onOptionClick: {
      description: 'Function that is called when click on an option',
      control: false,
      table: {
        type: {
          summary: '(value?: string | number) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onOpenClose: {
      description: 'Callback when opened or closed',
      control: false,
      table: {
        type: {
          summary:
            '(open: boolean, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    ctv: {
      description: 'Object used for update variant styles',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
  };
};
