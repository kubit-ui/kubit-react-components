import type { ArgTypes } from 'storybook/internal/types';

import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getBooleanArgTypes } from '@/stories/argtypes/booleanArgTypes';
import { getDisabledArgTypes } from '@/stories/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/stories/argtypes/htmlComponentArgTypes';
import { getSelectorArgTypes } from '@/stories/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { CATEGORY_CONTROL } from '@/stories/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'anchorElement',
      'arrowStyles',
      'middlewareOptions',
      'middlewares',
      'onClose',
      'overlay',
      'preventCloseOnClickElements',
    ]),
    children: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'children',
      name: 'popover',
    }),
    component: getHtmlComponentArgTypes({
      name: 'popover',
    }),
    disableAnimations: getBooleanArgTypes({
      descriptionName: 'popover',
      name: 'disableAnimations',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    disableAutoFocusFirstDescendant: getBooleanArgTypes({
      descriptionName: 'popover',
      name: 'disableAutoFocusFirstDescendant',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    disableAutoFocusFirstDescendantAfterClose: getBooleanArgTypes({
      descriptionName: 'popover',
      name: 'disableAutoFocusFirstDescendantAfterClose',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    disableClickOverlayClose: getBooleanArgTypes({
      descriptionName: 'popover',
      name: 'disableClickOverlayClose',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    disableEscapeClose: getBooleanArgTypes({
      descriptionName: 'popover',
      name: 'disableEscapeClose',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    disableRestoreFocusAfterClose: getBooleanArgTypes({
      descriptionName: 'popover',
      name: 'disableRestoreFocusAfterClose',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    disableScrollBackground: getBooleanArgTypes({
      descriptionName: 'popover',
      name: 'disableScrollBackground',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    disableTrapFocus: getBooleanArgTypes({
      descriptionName: 'popover',
      name: 'disableTrapFocus',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    id: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'id',
      name: 'popover',
    }),
    open: getBooleanArgTypes({
      descriptionName: 'popover',
      name: 'open',
      subCategory: CATEGORY_CONTROL.MODIFIERS,
    }),
    placement: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      defaultValue: 'top',
      keyName: 'placement',
      name: 'popover',
      options: {
        bottom: 'bottom',
        'bottom-end': 'bottom-end',
        'bottom-start': 'bottom-start',
        center: 'center',
        left: 'left',
        'left-end': 'left-end',
        'left-start': 'left-start',
        right: 'right',
        'right-end': 'right-end',
        'right-start': 'right-start',
        top: 'top',
        'top-end': 'top-end',
        'top-start': 'top-start',
      },
    }),
    preventScrollOnCloseFocus: getBooleanArgTypes({
      descriptionName: 'popover',
      name: 'preventScrollOnCloseFocus',
      subCategory: CATEGORY_CONTROL.ACCESIBILITY,
    }),
    role: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'role',
      name: 'popover',
    }),
    strategy: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      defaultValue: 'absolute',
      keyName: 'strategy',
      name: 'popover',
      options: {
        absolute: 'absolute',
        fixed: 'fixed',
      },
    }),
    zIndex: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'zIndex',
      name: 'popover',
    }),
  };
};
