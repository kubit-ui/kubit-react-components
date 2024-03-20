import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { TooltipAlignType } from '../types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Variant to add styles',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].TooltipVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    children: {
      description: 'Children',
      type: { name: 'JSX.Element | string | React.ReactNode', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'JSX.Element | string | React.ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    title: {
      description: 'Title of the tooltip',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    content: {
      description: 'Aria label text for progress bar',
      type: { name: 'JSX.Element | string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'JSX.Element | string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    align: {
      description: 'Position of the toltip',
      type: { name: 'TooltipAlignType' },
      control: { type: 'select' },
      options: Object.values(TooltipAlignType),
      table: {
        type: {
          summary: 'TooltipAlignType',
          detail: Object.values(TooltipAlignType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'When true, the tooltip will not be shown and no action will be executed',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    closeIcon: {
      description: 'Object with close icon properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    tooltipAsModal: {
      description: 'Close Icon Aria Label attribute',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    popover: {
      description: 'Object with popover properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'TooltipPopoverType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    childrenAsButton: {
      description: 'Tooltip trigger wrapper will be a button. Use when children is not focusable',
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
    onOpenClose: {
      description: 'Informs when the tooltip is closed or opened',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: '(open: boolean) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    dataTestId: {
      description: 'Test id of the tooltip. Internal components will concatenate from this test id',
      type: { name: 'string' },
      control: false,
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
