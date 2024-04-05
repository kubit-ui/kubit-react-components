import { CATEGORY_CONTROL } from '@/constants';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn, ROLES } from '@/types';
import { AriaLiveOptionType } from '@/types/ariaLiveOption';

import { AUTOCAPITALIZE_TYPE, ERROR_EXECUTION, MASK_TYPE } from '../types/input';
import { InputIconPosition } from '../types/inputTheme';
import { InputTypeType } from '../types/inputType';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    theme: {
      table: {
        disable: true,
      },
    },
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Input variant',
      options: Object.keys(variants[themeSelected].InputVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    errorIcon: {
      description:
        'Object with error icon properties. In the error state, the field is accompanied by an error mbIcon and a description of the problem to help resolve it.',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    icon: {
      description:
        'Object with icon properties. The input can contain an icon to help contextualize the user in relation to the information that is requested.',
      type: { name: 'object' },
      control: {
        type: 'object',
      },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    iconPosition: {
      options: Object.keys(InputIconPosition),
      type: { name: 'string' },
      description: 'Set icon position',
      control: { type: 'select' },
      table: {
        type: {
          summary: 'InputIconPosition',
          detail: Object.keys(InputIconPosition).join(', '),
        },
        defaultValue: { summary: InputIconPosition.RIGHT },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    informationAssociatedIcon: {
      description: 'Add icon configuration for associated information (only show icon)',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
          detail: 'InputInformationAssociatedIconType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    highlightedInformationAssociatedIcon: {
      description:
        'Add iconHighlighted configuration for associated information (only show iconHighlighted)',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
          detail: 'InputHighlightedInformationAssociatedIconType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    informationAssociatedButton: {
      description:
        'Object with Information associated button. Add button configuration for associated information',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'InputInformationAssociatedButtonType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    loader: {
      description: 'Object with Loader properties',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'ILoader',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    type: {
      description:
        'The type attribute specifies the type of input element to display. If the type attribute is not specified, the default type is text"',
      options: Object.values(InputTypeType),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'InputTypeType',
          detail: Object.keys(InputTypeType).join(', '),
        },
        defaultValue: { summary: InputTypeType.TEXT },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    truncate: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Indicates if text value is truncated when is too big',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabledCopyAndPaste: {
      description: 'Disable copying and pasting',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabledWheelMouse: {
      description: 'Disable wheel mouse',
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: true },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    autoCapitalize: {
      description: 'Specifies whether the value of the input should be automatically capitalized',
      control: { type: 'select' },
      type: { name: 'string' },
      options: Object.keys(AUTOCAPITALIZE_TYPE),
      table: {
        type: {
          summary: 'string',
          detail: Object.keys(AUTOCAPITALIZE_TYPE).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    inputMode: {
      description: 'inputMode for the input',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        defaultValue: {
          summary: 'numeric',
        },
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    disabledArrowUpDownInputNumber: {
      control: { type: 'boolean' },
      type: { name: 'boolean' },
      description: 'Disable arrows up and down when input type is number',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    autocomplete: {
      description:
        'Specifies whether an input field should have autocomplete on or off. Autocomplete allows the browser to predict the value.',
      control: { type: 'boolean' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    min: {
      description:
        'Specifies the minimum value for an input field. The min and max attributes work with the following input types: number, range, date, datetime-local, month, time and week.',
      control: { type: 'number' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    max: {
      description:
        'Specifies the maximum value for an input field. The min and max attributes work with the following input types: number, range, date, datetime-local, month, time and week.',
      control: { type: 'number' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    name: {
      description: 'Specifies the name of the input element',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disabled: {
      description: 'Specifies if the input element is disabled or not',
      control: { type: 'boolean' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    error: {
      description: 'Specifies if the input element has error or not',
      control: { type: 'boolean' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    errorExecution: {
      control: { type: 'select' },
      description: 'When error handling occurs',
      options: ['onChange', 'onBlur'],
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ERROR_EXECUTION',
          detail: Object.keys(ERROR_EXECUTION).join(', '),
        },
        defaultValue: { summary: null },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    errorMessage: {
      description:
        'Object with error message properties. In the error state, the field is accompanied by a description of the problem to help resolve it.',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'InputErrorMessageType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    ignoreKeys: {
      description: 'Keys ignores in the onKeyDown function',
      control: { type: 'object' },
      type: { name: 'array' },
      table: {
        type: {
          summary: 'array',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    helpMessage: {
      description:
        'Object with helpMessage properties. Classic help text to give some more idea or condition about what is requested.',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'InputHelpMessageType',
        },
        defaultValue: { summary: null },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    keyValidation: {
      description: 'Key validation to use in validationValue hook',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    id: {
      description: 'Id of the input',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    label: {
      description:
        'Object with label properteis. Text of the input label. Indicates the information requested from the user.',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'InputLabelType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    loading: {
      description: 'Show or not loader in input',
      control: { type: 'boolean' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    mask: {
      description: 'Mask input, is made with #, Example: ##-##-##',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maskType: {
      description: 'Type of the mask',
      control: { type: 'select' },
      options: Object.keys(MASK_TYPE),
      table: {
        type: {
          summary: 'MASK_TYPE',
          detail: Object.keys(MASK_TYPE).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    regex: {
      description: 'Custom regex instead of maskType',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    maxLength: {
      description:
        'Defines the maximum number of characters the user can enter into an input. This must be an integer value 0 or higher',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    minLength: {
      description:
        'Defines the minimum number of characters the user can enter into an input. This must be an integer value 0 or higher. If no minlength is specified, or an invalid value is specified, the input has no minimum length.',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    placeholder: {
      description: 'Placeholder Input',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: null },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    required: {
      description: 'Required input option',
      control: { type: 'boolean' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: false },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    title: {
      description: 'Object with title properties. Input title',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'InputTitleType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    informationAssociatedValue: {
      description:
        'Object with information assiated value properties. In some cases, when the user enters data in the input, a (non-clickable) block with related information is displayed below, such as the name of the bank related to the account number.',
      control: { type: 'object' },
      type: { name: 'object' },
      table: {
        type: {
          summary: 'InputInformationAssociatedValueType',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    additionalInfo: {
      description:
        'When label type is STANDARD, this element is displayed to the right of the label secondary.',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        defaultValue: { summary: null },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    secondaryLabel: {
      description:
        'When label type is STANDARD, this element is displayed to the right of the label when the input is not mandatory to filled.',
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        defaultValue: { summary: null },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    textCounter: {
      description:
        'Element that allows to know the proximity to reach the limit of characters established for that input. The maximum number of characters will depend on the need of the flow, it should be customizable by property.',
      control: { type: 'object' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ReactNode',
        },
        defaultValue: { summary: null },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    leftContent: {
      description: 'Prefix content',
      control: { type: 'object' },
      table: {
        type: {
          summary: 'string | JSX.Element',
        },
        defaultValue: { summary: null },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rightContent: {
      description: 'Suffix content',
      control: { type: 'object' },
      table: {
        type: {
          summary: 'string | JSX.Element',
        },
        defaultValue: { summary: null },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    errorAriaLiveType: {
      description: 'Error message aria-live type',
      options: Object.values(AriaLiveOptionType),
      control: { type: 'select' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'AriaLiveOptionType',
          detail: Object.values(AriaLiveOptionType).join(', '),
        },
        defaultValue: { summary: AriaLiveOptionType.POLITE },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    extraAriaLabelledBy: {
      description: 'Allow to extend input "aria-labelledby"',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: { summary: '' },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-controls']: {
      description:
        'Identifies the element (or elements) whose contents or presence are controlled by the element on which this attribute is set. (Used for inputSearch component)',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-expanded']: {
      description:
        'Indicates if a popover is expanded or collapsed. (Used for inputSearch and inputDropdown components)',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-hasPopup']: {
      description: 'Indicates that the combobox opens a dialog.',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'AriaHasPopupType',
          detail: 'boolean, dialog, menu, true, false, grid, listbox, tree, undefined',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-label']: {
      description: 'Indicates aria label.',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'AriaHasPopupType',
          detail: 'boolean, dialog, menu, true, false, grid, listbox, tree, undefined',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-labelledby']: {
      description: 'Indicates aria labelledby.',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'AriaHasPopupType',
          detail: 'boolean, dialog, menu, true, false, grid, listbox, tree, undefined',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-invalid']: {
      description: 'Indicates aria invalid.',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'AriaHasPopupType',
          detail: 'boolean, dialog, menu, true, false, grid, listbox, tree, undefined',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    ['aria-disabled']: {
      description: 'Indicates aria disabled.',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'AriaHasPopupType',
          detail: 'boolean, dialog, menu, true, false, grid, listbox, tree, undefined',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    overrideStyles: {
      description: 'Styles that need to be overridden on the basic input',
      control: false,
      table: {
        type: {
          summary: 'InputStylesProps',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    value: {
      description: 'Value of the input',
      type: { name: 'string' },
      control: false,
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    onBlur: {
      description: 'Function that is called when blur the component',
      control: false,
      table: {
        type: {
          summary: 'FocusEventHandler<HTMLInputElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onChange: {
      description: 'Function that is called when writting on the component',
      control: false,
      table: {
        type: {
          summary: 'ChangeEventHandler<HTMLInputElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onClick: {
      description: 'Function that is called when click on the component',
      control: false,
      table: {
        type: {
          summary: '() => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onFocus: {
      description: 'Function that is called when focus on the component',
      control: false,
      table: {
        type: {
          summary: 'FocusEventHandler<HTMLInputElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onKeyDown: {
      description: 'Function that is triggered anytime the user presses a key on their keyboard',
      control: false,
      table: {
        type: {
          summary: 'KeyboardEventHandler<HTMLInputElement>',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onError: {
      description: 'Function that is called when an error occurs',
      control: false,
      table: {
        type: {
          summary: '(error: boolean) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onInternalErrors: {
      description: 'Function that is called when an internal error occurs',
      control: false,
      table: {
        type: {
          summary: '(errors: string[]) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    role: {
      description: 'Prop used for accesibility to asign a rol',
      control: false,
      type: { name: 'string' },
      table: {
        type: {
          summary: 'ROLES',
          detail: Object.keys(ROLES).join(', '),
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    locale: {
      description: 'Language of the specified date in the user agents timezone',
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    formatNumber: {
      description:
        'Configuration for add thousand separators in input using Intl.NumberFormat (default locale `en-US`) (the HTML input element with type="number" does not support thousand separators). Internally we modify the type from input to text when the `formatNumber` prop exists. The value returned by the event is of type string.',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'object',
          detail:
            'FormatNumber: {locale?: string; currency?: string; style?: string; maximumFractionDigits?: number; minimumFractionDigits?: number;}',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    leftExtraStyles: {
      description: 'Styles needed for prefix content',
      control: false,
      table: {
        type: {
          summary: 'CSSProp',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    rightExtraStyles: {
      description: 'Styles needed for prefix content',
      control: false,
      table: {
        type: {
          summary: 'CSSProp',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    topExtraStyles: {
      description: 'Styles needed for top content',
      control: false,
      table: {
        type: {
          summary: 'CSSProp',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    bottomExtraStyles: {
      description: 'Styles needed for bottom content',
      control: false,
      table: {
        type: {
          summary: 'CSSProp',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    centerExtraStyles: {
      description: 'Styles needed for center content',
      control: false,
      table: {
        type: {
          summary: 'CSSProp',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
    dataTestId: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: 'Test id of the input. Internal components will concatenate from this test id',
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.TESTING,
      },
    },
    ctv: {
      control: { type: 'object' },
      type: { name: 'string' },
      description: 'Object used for update variant styles',
      table: {
        type: {
          summary: 'object',
        },
        category: CATEGORY_CONTROL.CUSTOMIZATION,
      },
    },
  };
};
