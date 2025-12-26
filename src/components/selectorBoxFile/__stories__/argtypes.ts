import type { ArgTypes } from 'storybook/internal/types';

import { SelectorBoxFileVariantType } from '@/lib/designSystem/kubit/components/selectorBoxFile/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getBooleanArgTypes } from '@/lib/storybook/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getNumbertArgTypes } from '@/lib/storybook/argtypes/numberArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'button',
      'containerBoxStateContent',
      'description',
      'errorFileExtensionMessage',
      'errorMaxSizeMessage',
      'errorMessage',
      'errorMessageIcon',
      'fileExtension',
      'loader',
      'onAnimationCompleted',
      'onChange',
      'onClick',
      'onFileError',
      'onSizeError',
      'subtitle',
      'title',
      'tooltip',
      'tooltipIcon',
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
