import { CATEGORY_CONTROL } from '@/constants/categoryControl/categoryControl';
import { ArgTypesReturn } from '@/types/type/type';

export const argtypes = (): ArgTypesReturn => {
  return {
    element: {
      description:
        'Element to render. It can be an Icon, Avatar or Illustration | DecorativePropsType',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'DecorativePropsType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    additionalProps: {
      description: 'Properties coming from a custom theme',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
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
  };
};
