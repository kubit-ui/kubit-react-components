import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { getAdditionalClassesArgTypes } from '@/stories/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/stories/argtypes/htmlComponentArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { AccordionVariant } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'cssClasses',
      'onHeaderClick',
      'onExpandCollapse',
      'contentId',
    ]),
    'additionalClasses.accordion': {
      ...getAdditionalClassesArgTypes({
        name: 'accordion',
        subCategory: 'additionalClasses',
      }),
      table: {
        ...getAdditionalClassesArgTypes({
          name: 'accordion',
          subCategory: 'additionalClasses',
        }).table,
        category: 'MODIFIERS',
      },
    },
    'additionalClasses.content': {
      ...getAdditionalClassesArgTypes({
        name: 'content',
        subCategory: 'additionalClasses',
      }),
      table: {
        ...getAdditionalClassesArgTypes({
          name: 'content',
          subCategory: 'additionalClasses',
        }).table,
        category: 'MODIFIERS',
      },
    },
    'additionalClasses.header': {
      ...getAdditionalClassesArgTypes({
        name: 'header',
        subCategory: 'additionalClasses',
      }),
      table: {
        ...getAdditionalClassesArgTypes({
          name: 'header',
          subCategory: 'additionalClasses',
        }).table,
        category: 'MODIFIERS',
      },
    },
    'additionalClasses.headerbutton': {
      ...getAdditionalClassesArgTypes({
        name: 'headerbutton',
        subCategory: 'additionalClasses',
      }),
      table: {
        ...getAdditionalClassesArgTypes({
          name: 'headerbutton',
          subCategory: 'additionalClasses',
        }).table,
        category: 'MODIFIERS',
      },
    },
    'additionalClasses.innercontent': {
      ...getAdditionalClassesArgTypes({
        name: 'innercontent',
        subCategory: 'additionalClasses',
      }),
      table: {
        ...getAdditionalClassesArgTypes({
          name: 'innercontent',
          subCategory: 'additionalClasses',
        }).table,
        category: 'MODIFIERS',
      },
    },
    children: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'children',
      name: 'accordion',
    }),
    component: getHtmlComponentArgTypes({
      name: 'accordion',
    }),
    dataTestId: getStringtArgTypes({
      category: CATEGORY_CONTROL.TESTING,
      keyName: 'dataTestId',
      name: 'accordion',
    }),
    defaultExpanded: getBooleanArgTypes({
      descriptionName: 'accordion',
      name: 'defaultExpanded',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    expanded: getBooleanArgTypes({
      descriptionName: 'accordion',
      name: 'expanded',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    header: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'header',
      name: 'accordion',
    }),
    headerComponent: getHtmlComponentArgTypes({
      name: 'accordion header',
    }),
    variant: {
      ...getVariantArgTypes({
        name: 'accordion',
        variants: { ...AccordionVariant },
      }),
      table: {
        ...getVariantArgTypes({
          name: 'accordion',
          variants: { ...AccordionVariant },
        }).table,
        category: 'MODIFIERS',
      },
    },
  };
};
