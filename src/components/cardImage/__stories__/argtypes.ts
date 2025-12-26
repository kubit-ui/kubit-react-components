import type { ArgTypes } from 'storybook/internal/types';

import { CardImageStateVariantType } from '@/lib/designSystem/kubit/components/cardImage/variants';
import { LinkVariant } from '@/lib/designSystem/kubit/components/link/variants';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getDisabledArgTypes } from '@/lib/storybook/argtypes/disabledArgTypes';
import { getHtmlComponentArgTypes } from '@/lib/storybook/argtypes/htmlComponentArgTypes';
import { getIconArgTypes } from '@/lib/storybook/argtypes/iconArgTypes';
import { getSelectorArgTypes } from '@/lib/storybook/argtypes/selectorArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';
import { CATEGORY_CONTROL } from '@/lib/storybook/constants/categoryControl';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ...getDisabledArgTypes([
      'description',
      'image',
      'linkOnClick',
      'onClickTextLink',
      'title',
    ]),
    altTextImage: getStringtArgTypes({
      category: CATEGORY_CONTROL.ACCESIBILITY,
      keyName: 'altTextImage',
      name: 'cardImage',
    }),
    as: getHtmlComponentArgTypes({ name: 'cardImage' }),
    linkAction: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'linkAction',
      name: 'cardImage',
      options: { inline: 'inline', navigation: 'navigation' },
    }),
    linkContent: getStringtArgTypes({
      category: CATEGORY_CONTROL.CONTENT,
      keyName: 'linkContent',
      name: 'cardImage',
    }),
    linkIcon: getIconArgTypes({ isString: true, name: 'link' }),
    linkUrl: getStringtArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'linkUrl',
      name: 'cardImage',
    }),
    linkVariant: getSelectorArgTypes({
      category: CATEGORY_CONTROL.MODIFIERS,
      keyName: 'linkVariant',
      name: 'cardImage',
      options: Object.keys(LinkVariant).reduce(
        (acc, key) => ({
          ...acc,
          [key]: key,
        }),
        {},
      ),
    }),
    variant: {
      ...getVariantArgTypes({
        keyVariant: 'variant',
        name: 'cardImage',
        variants: Object.keys(CardImageStateVariantType).reduce(
          (acc, key) => ({
            ...acc,
            [key]: key,
          }),
          {},
        ),
      }),
      table: { category: CATEGORY_CONTROL.MODIFIERS },
    },
  };
};
