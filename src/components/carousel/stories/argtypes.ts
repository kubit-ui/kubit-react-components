import { CATEGORY_CONTROL } from '@/constants/categoryControl';
import { IThemeObjectVariants } from '@/designSystem/themesObject';
import { ArgTypesReturn } from '@/types';

import { CarouselAlignType } from '../types';

export const argtypes = (variants: IThemeObjectVariants, themeSelected: string): ArgTypesReturn => {
  return {
    themeArgs: {
      table: {
        disable: true,
      },
    },
    variant: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      description: 'Carousel variant',
      options: Object.keys(variants[themeSelected].CarouselVariantType || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    defaultPage: {
      description: 'Default open page',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 0 },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    numElementsPerPage: {
      description: 'Number of elements per page. Default is autocalculated',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    numElementsToSlide: {
      description: 'Number of elements to slide. Default is numElementsPerPage',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        defaultValue: { summary: 'numElementsPerPage' },
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onePageAlign: {
      description: 'When items fill in one page, align of the container',
      options: Object.values(CarouselAlignType),
      type: { name: 'string' },
      control: { type: 'select' },
      table: {
        type: {
          summary: 'CarouselAlignType',
          detail: Object.keys(CarouselAlignType).join(', '),
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onChangeIndicator: {
      description:
        'Function to call when the inner value has been updated. Only used for page control automate',
      control: false,
      table: {
        type: {
          summary: '(index: number) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    onPageChange: {
      description: 'Callback when page changes',
      control: false,
      table: {
        type: {
          summary: '(page: number) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    elements: {
      description: 'Slides to show',
      type: { name: 'array', required: true },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'JSX.Element[]',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    circular: {
      description: 'When circular, after last page it will return to the first',
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
    centerMode: {
      description:
        'When center mode, and elements.length is odd, highlight the center elemenent of the carusel',
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
    extraPadding: {
      description:
        'Add extra padding (px) to the container to view beyond the limits of the carousel view',
      type: { name: 'number' },
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    extraPaddingAsArrow: {
      description: 'Allow extra padding to behave like an arrow. It should be used in mobile',
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
    leftArrow: {
      description: 'Object with left arrow properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    rightArrow: {
      description: 'Object with right arrow properties',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'IElementOrIcon',
        },
        category: CATEGORY_CONTROL.CONTENT,
      },
    },
    hasPagination: {
      description: 'Show or not the pagination component',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    pageControlVariant: {
      description: 'PageControl variant',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variants[themeSelected].PageControlVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    pageControlArrowsControlVariant: {
      description: 'PageControl arrows control variant',
      type: { name: 'string' },
      control: { type: 'select' },
      options: Object.keys(variants[themeSelected].ArrowsControlVariant || {}),
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    onTransition: {
      description: 'Informs when the component is on transition',
      control: false,
      table: {
        type: {
          summary: '(active: boolean) => void',
        },
        category: CATEGORY_CONTROL.FUNCTIONS,
      },
    },
    ['aria-labelledby']: {
      description: 'Carousel aria label by',
      type: { name: 'string' },
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
        category: CATEGORY_CONTROL.ACCESIBILITY,
      },
    },
    displayArrowsOnCarousel: {
      description: 'Show the arrows on the carousel or on the Page Control',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    disableSwipe: {
      description: 'Disable or not the swipe action',
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
    allowModifySliceWidth: {
      description:
        'When true, slices width will be updated to fill the carousel container width. When false, the carousel container width will be calculated attending to its slices width. IMPORTANT: Will set to false if numElementsPerPage is 0 or undefined',
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
    pageControlAutomateConfig: {
      description: 'PageControlAutomate configuration',
      type: { name: 'object' },
      control: { type: 'object' },
      table: {
        type: {
          summary: 'PageControlAutomateConfigType',
        },
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    centerExtremesWhenExtraPadding: {
      description:
        'When true, Depending the first and the last element of the carousel are centered',
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
    screenReaderText: {
      description:
        'Screen reader carousel text. Can be build using the current bar and the bars length using the keywords "{{currentPage}}" and "{{numPages}}"',
      type: { name: 'string' },
      control: { type: 'text' },
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
