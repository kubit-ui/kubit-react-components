import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Validation status variant',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].ValidationStatusVariants || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    items: {
      description: 'Set the validation list to show into the component',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ValidationStatusItemType[]',
          detail:
            'ValidationStatusItemType: { state: ValidationStatusState; text: ValidationStatusTextType; dataTestId?: string; }',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    stateIcons: {
      description: 'Set the custom icons to show in differents row states',
      type: { name: 'object', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ValidationStatusStateIconsType',
          detail:
            'ValidationStatusStateIconsType: { [key in ValidationStatusState]: IElementOrIcon; }',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    maxItemsAllowed: {
      description: 'Set the row max number allowed',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 6,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    dataTestId: {
      description: 'Testing id',
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
