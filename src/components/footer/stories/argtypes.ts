import { CATEGORY_CONTROL } from '@/constants/categoryControl/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject/themesObject';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { ROLES } from '@/types/role/role';
import { ArgTypesReturn } from '@/types/type/type';

import { ContentDirectionType } from '../types/direction';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: { type: 'select' },
      type: { name: 'string', required: true },
      description: 'Footer variant',
      options: Object.keys(variants[themeSelected].FooterVariants || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    children: {
      description: 'Array of elements',
      control: { type: 'text' },
      type: { name: 'string', required: true },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    ['aria-label']: {
      description: 'Aria label associated to the footer container',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    role: {
      description: 'Aria label role associated to footer container',
      control: { type: 'select' },
      type: { name: 'string' },
      options: Object.values(ROLES),
      table: {
        type: {
          summary: 'string',
          detail: Object.keys(ROLES).join(', '),
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },

    simpleContainer: {
      description: 'Allows you to change the footer tag to a div',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    tabInverse: {
      description: 'Change the order to tab of the footer elements at the defined breakpoints',
      control: { type: 'check' },
      type: { name: 'check' },
      options: [
        DeviceBreakpointsType.MOBILE,
        DeviceBreakpointsType.TABLET,
        DeviceBreakpointsType.DESKTOP,
      ],
      table: {
        type: {
          summary: 'check',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    orderInverse: {
      description: 'Change the order position of the footer elements at the defined breakpoints',
      control: { type: 'check' },
      type: { name: 'check' },
      options: [
        DeviceBreakpointsType.MOBILE,
        DeviceBreakpointsType.TABLET,
        DeviceBreakpointsType.DESKTOP,
      ],
      table: {
        type: {
          summary: 'check',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    contentDirection: {
      description: 'Define direction of the footer content',
      options: Object.keys(ContentDirectionType),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ContentDirectionType',
          detail: Object.keys(ContentDirectionType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    forceVertical: {
      description: 'Force button going vertical or take styles from theme',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    alignItems: {
      description:
        'prop associated to css align-item property that allows you to align the footer content',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    footerMobileSortConfig: {
      description: 'Object to config the content order in mobile views',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'MobileSort',
          detail:
            '{ firstContent: FooterPositionType, secondContent: FooterPositionType, thridContent: FooterPositionType }',
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
