import type { ArgTypes } from 'storybook/internal/types';

import { getAdditionalClassesArgTypes } from '@/stories/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'elements',
      'onNumElementsPerPageChange',
      'onNumPagesChange',
      'onPageChange',
      'ref',
      'contentContainer',
      'rootContainer',
      'viewerContainer',
      'screenReaderOnly',
    ]),
    additionalClasses: {
      ...getAdditionalClassesArgTypes({
        name: 'carousel',
        subCategory: 'additionalClasses',
      }),
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
    allowModifySliceWidth: getBooleanArgTypes({
      descriptionName: 'carousel',
      name: 'allowModifySliceWidth',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    autoFitContainer: getBooleanArgTypes({
      descriptionName: 'carousel',
      name: 'autoFitContainer',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    centerExtremesWhenExtraPadding: getBooleanArgTypes({
      descriptionName: 'carousel',
      name: 'centerExtremesWhenExtraPadding',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    centerMode: getBooleanArgTypes({
      descriptionName: 'carousel',
      name: 'centerMode',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    circular: getBooleanArgTypes({
      descriptionName: 'carousel',
      name: 'circular',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    defaultPage: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'defaultPage',
      name: 'carousel',
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'carousel',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    extraPadding: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'extraPadding',
      name: 'carousel',
    }),
    numElementsPerPage: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'numElementsPerPage',
      name: 'carousel',
    }),
    numElementsToSlide: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'numElementsToSlide',
      name: 'carousel',
    }),
    onePageAlign: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      defaultValue: 'center',
      keyName: 'onePageAlign',
      name: 'carousel',
      options: {
        center: 'center',
        left: 'left',
        right: 'right',
      },
    }),
    testNumCarouselElements: getNumbertArgTypes({
      category: 'TESTING',
      keyName: 'testNumCarouselElements',
      name: 'carousel (testing)',
    }),
    variant: {
      ...getVariantArgTypes({
        name: 'carousel',
        variants: {
          DEFAULT: 'DEFAULT',
        },
      }),
      table: {
        category: CATEGORY_CONTROL.MODIFIERS,
      },
    },
  };
};
