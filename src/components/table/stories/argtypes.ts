import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { FormatListHeaderPriorityType } from '../types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Variant to add styles',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].TableVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    headerVariant: {
      description: 'Variant Header to add styles',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].TableHeaderVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    headers: {
      description: 'Headers of your table',
      type: { name: 'ITableHeader[]', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ITableHeader[]',
          detail:
            'ITableHeader: { label: string; id: string; config: ConfigType; value?: ValueFunctionType & DividerContent; }',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    ariaHiddenDividerColumn: {
      description: 'aria-hidden prop applied to divider column created when table has divider',
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
    ariaHiddenEmptyColumn: {
      description: 'aria-hidden prop applied to empty column created when has row headers',
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
    values: {
      description: 'Content of your table',
      type: { name: 'IValue[]', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IValue[]',
          detail:
            'IValue: { expandedContent?: expandedContent; dividerContent?: TableDividerType; accordionIconCollapsedAriaLabel?: string; accordionIconExpandedAriaLabel?: string; rowVariant?: string; rowBorderPosition?: LineSeparatorPositionType; [key: string]: any; }',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    lineSeparatorLineVariant: {
      description: 'Variant applied to line separator',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    lineSeparatorTopOnHeader: {
      description: 'It applies line separator on top of header',
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
    lineSeparatorBottomOnHeader: {
      description: 'It applies line separator on bottom of header',
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
    footer: {
      description: 'Object with footer properties of your table',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'TableFooterType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    accordionIcon: {
      description: 'Object with accordion icon properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    accordionIconCollapsedAriaLabel: {
      description: 'When accordion row collapsed, accordionIcon aria label',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    accordionIconExpandedAriaLabel: {
      description: 'When accordion row expanded, accordionIcon aria label',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    captionDescription: {
      description: 'Table caption description',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-label']: {
      description: 'Aria label table',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    initialExpanded: {
      description: 'Initial expanded state',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onExpandedContentOpen: {
      description: 'Open expanded content callback',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: '(open: boolean, value: object, indexHeader: number) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    expandedContentHelpMessage: {
      description: 'When the expandedContent is not opened, message to show to screen readers',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    hiddenHeaderOn: {
      description:
        'Allow to hide the column headers attending to the DeviceBreakPointType (but screen readers will read it)',
      type: { name: 'hiddenType' },
      control: { type: 'object' },
      table: {
        type: {
          summary: '{ [keys in DeviceBreakpointsType]?: boolean; }',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    tBodyScrollArias: {
      description: 'Aria label for tbody when scroll',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'TBodyScrollAriasType',
          detail:
            'TBodyScrollAriasType: { ["aria-label"]?: string; ["aria-labelledby"]?: string; }',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    formatListHeaderPriority: {
      description: 'When format list format, allows to select the list direction (from the table)',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.values(FormatListHeaderPriorityType),
      table: {
        type: {
          summary: 'FormatListHeaderPriorityType',
          detail: Object.keys(FormatListHeaderPriorityType).join(', '),
        },
        defaultValue: { summary: FormatListHeaderPriorityType.ROW },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    formatList: {
      description: 'Indicates attending to the DeviceBreakPointType, if the table has format list',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: '{ [keys in DeviceBreakpointsType]?: boolean; }',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    formatListInMobile: {
      description: 'Indicates if in mobile view, if the table has format list',
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
    formatSideBySideInList: {
      description:
        'Indicates if in mobile view and the table has format list, the number of elements per row. This props only apply when with formatListHeaderPriority is ROW',
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
    dataTestId: {
      description: 'Test id ',
      type: { name: 'string' },
      control: { type: 'text' },
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
