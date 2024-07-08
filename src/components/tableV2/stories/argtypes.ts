import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Table variant',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].TableV2VariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    autoRightStickyCalc: {
      description:
        'When true, the table will calc the sticky right position for those cells marked as sticky',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    component: {
      description: 'Component',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string | React.ComponentType<any>',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    ['aria-label']: {
      description: 'Only when scroll, scrollable container aria label',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-labelledby']: {
      description: 'Only when scroll, scrollable container aria labelled by',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    hasScrollDisabled: {
      description: 'Disable scroll in the scrollable container',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    disableShadowEffects: {
      description: 'Disable shadow effects',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    sticky: {
      description: 'Sticky table',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    dataTestId: {
      description: 'Test id',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'table',
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
