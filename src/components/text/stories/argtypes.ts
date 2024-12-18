import { CATEGORY_CONTROL } from '@/constants/categoryControl/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject/themesObject';
import { ROLES } from '@/types/role/role';
import { ArgTypesReturn } from '@/types/type/type';

import { TextComponentType } from '../types/component';
import { TextDecorationType } from '../types/decoration';
import { TextDisplayType } from '../types/display';
import { TextTransformType } from '../types/transform';

export const argtypes = (
  variantsObject: IThemeObjectVariants,
  themeSelected: string
): ArgTypesReturn => {
  return {
    variant: {
      description: 'Variant to add styles',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: Object.keys(variantsObject[themeSelected].TextVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    align: {
      description: 'Align of text',
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: ['left', 'right', 'center', 'justify'],
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    component: {
      description: 'Component type to transform text to',
      type: { name: 'TextComponentType | GenericLinkType' },
      control: { type: 'select' },
      options: Object.keys(TextComponentType),
      table: {
        type: {
          summary: 'TextComponentType | GenericLinkType',
          detail: Object.keys(TextComponentType).join(', '),
        },
        defaultValue: { summary: TextComponentType.PARAGRAPH },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    children: {
      description: 'This will appear in your text',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    display: {
      description: 'Component display: placing',
      type: { name: 'TextDisplayType' },
      control: { type: 'select' },
      options: Object.values(TextDisplayType),
      table: {
        type: {
          summary: 'TextDisplayType',
          detail: Object.values(TextDisplayType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    decoration: {
      description: 'Include underline in text',
      type: { name: 'TextDecorationType' },
      control: { type: 'select' },
      options: Object.values(TextDecorationType),
      table: {
        type: {
          summary: 'TextDecorationType',
          detail: Object.values(TextDecorationType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    transform: {
      description: 'Text transform',
      type: { name: 'TextTransformType' },
      control: { type: 'select' },
      options: Object.values(TextTransformType),
      table: {
        type: {
          summary: 'TextTransformType',
          detail: Object.values(TextTransformType).join(', '),
        },
        defaultValue: {
          summary: TextTransformType.NONE,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    color: {
      description: 'Color of the text',
      type: { name: 'string' },
      control: { type: 'color' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    weight: {
      description: 'Font weight',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    customTypography: {
      description:
        'Apply TypographyTypes styles without the need to indicate variant or props to the text component',
      type: { name: 'TypographyTypes' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'TypographyTypes',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    htmlFor: {
      description: 'Prop used when rendering a link',
      type: { name: 'string' },
      control: false,
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    url: {
      description: 'Prop used when rendering a link to navigate to a url',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    draggable: {
      description: 'Set the draggable attribute',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    truncate: {
      description:
        'Boolean to indicate if render an ellipsis ("...") to represent the clipped text',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxTruncatedLines: {
      description:
        'Boolean to indicate if render an ellipsis ("...") to represent the clipped text with a max number of lines (`truncate` is not needed)',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    aria: {
      description: 'Prop used for accesibility',
      type: { name: 'Partial<React.AriaAttributes>' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'Partial<React.AriaAttributes>',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    id: {
      description: 'Prop used as an identifier',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    role: {
      description: 'Prop used for accesibility to asign a rol',
      type: { name: 'React.AriaRole' },
      control: { type: 'select' },
      options: Object.values(ROLES),
      table: {
        type: {
          summary: 'React.AriaRole',
          detail: Object.values(ROLES).join(', '),
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    isDisabled: {
      description: 'It indicates if the component is disabled',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    cursor: {
      description: 'CSS cursor',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onClick: {
      description: 'Function of the text when user click',
      type: { name: 'function' },
      control: false,
      table: {
        type: {
          summary: 'React.MouseEventHandler<HTMLElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    dataTestId: {
      description: 'Test id',
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
