import type { ArgTypes } from 'storybook/internal/types';

import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/stories/argtypes/numberArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

const { SelectorBoxFileVariantType } = KUBIT_VARIANTS;

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'containerBoxStateContent',
      'errorFileExtensionMessage',
      'errorMaxSizeMessage',
      'fileExtension',
      'loader',
      'onAnimationCompleted',
      'onChange',
      'onClick',
      'onFileError',
      'onSizeError',
    ]),
    accept: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'accept',
      name: 'Input file accept',
    }),
    disabled: getBooleanArgTypes({
      descriptionName: 'Component is disabled',
      name: 'disabled',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    error: getBooleanArgTypes({
      descriptionName: 'Component has errors',
      name: 'error',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    filename: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'filename',
      name: 'Uploading file name',
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'id',
      name: 'Input file id',
    }),
    loading: getBooleanArgTypes({
      descriptionName: 'Component is loading',
      name: 'loading',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    maxSize: getNumbertArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'maxSize',
      name: 'Max file size (mb)',
    }),
    multiple: getBooleanArgTypes({
      descriptionName: 'Input file multiple',
      name: 'multiple',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    name: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'name',
      name: 'Input file name',
    }),
    success: getBooleanArgTypes({
      descriptionName: 'Component uploaded the file properly',
      name: 'success',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    variant: getVariantArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyVariant: 'variant',
      name: 'Selector box file variant',
      variants: Object.keys(SelectorBoxFileVariantType).reduce(
        (acc, key) => ({ ...acc, [key]: key }),
        {},
      ),
    }),
  };
};
