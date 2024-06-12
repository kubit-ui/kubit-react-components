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
      type: { name: 'string', required: true },
      description: 'BacktoTop variant',
      options: Object.keys(variants[themeSelected].BackToTopVariantsType || {}),
      control: { type: 'select' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    bottomPosition: {
      description:
        'Default bottom position of the button. It may change when footer or stopElement is present',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 40 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    visibilityScrollOffset: {
      description: 'Scroll threshold from which the buton will be shown',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 1 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    stopElement: {
      description:
        'Element that will serve as a brake so that the button stops scrolling down when scrolling occurs',
      type: { name: 'object' },
      control: false,
      table: {
        type: {
          summary: 'RefObject<HTMLElement>',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    icon: {
      description: 'Object with icon properties. The icon to be displayed in the button',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    ['aria-label']: {
      description: 'Button aria-label',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
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
