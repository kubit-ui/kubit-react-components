import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

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
      description: 'Functionalities module variant',
      options: Object.keys(variants[themeSelected].FunctionalitiesModuleVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    tabsContainerAriaLabel: {
      description: 'Aria label for tabs container',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    tabsConfig: {
      description: 'Tabs config',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'FunctionalitiesModuleTabsConfig',
          detail:
            // eslint-disable-next-line quotes
            "Omit<ITabsUnControlled, 'tabs' | 'content' | 'variant' > & { variant?: string; }",
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    sections: {
      description: 'Sections',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'FunctionalitiesModuleSectionType[]',
          detail:
            // eslint-disable-next-line quotes
            "FunctionalitiesModuleSectionType = { tab: PrimaryTabTabType; options: Omit<ListOptionsOptionType, 'highlighted'>[]; optionsTitle?: ListOptionsTitleType; };",
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    hasTitleSection: {
      description: 'Show title section or not',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    trigger: {
      description: 'Trigger',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'FunctionalitiesModuleTriggerType',
          detail:
            // eslint-disable-next-line quotes
            "Omit<IButton, 'children'> & { content?: ReactNode; };",
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    defaultOpen: {
      description: 'Defines the default open option',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    actionBottomSheet: {
      description: 'Action bottom sheet',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'FunctionalitiesModuleActionBottomSheetType',
          detail:
            // eslint-disable-next-line quotes
            "Omit<IActionBottomSheetControlled, 'variant' | 'children' | 'open'> & { variant?: string; };",
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onOptionClick: {
      description: 'Action called when click on an option',
      control: false,
      table: {
        type: {
          summary: '(value?: string | number) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onOpenClose: {
      description:
        'Action called when click on the button (if ActionBottomSheet is close) or on an option (if ActionBottomSheet is open)',
      control: false,
      table: {
        type: {
          summary: '(value: boolean) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    defaultSelectedValue: {
      description: 'Selected option of the list',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'number, string, undefined',
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
