import type { ArgTypes } from 'storybook/internal/types';

import { TagVariants } from '@/lib/designSystem/kubit/components/variants';
import { getAdditionalClassesArgTypes } from '@/lib/storybook/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/lib/storybook/argtypes/argtypes';
import { getHtmlComponentArgTypes } from '@/lib/storybook/argtypes/htmlComponentArgTypes';
import { getIconArgTypes } from '@/lib/storybook/argtypes/iconArgTypes';
import { getStringtArgTypes } from '@/lib/storybook/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/lib/storybook/argtypes/variantArgtypes';

export const argtypes = (): ArgTypes => {
  return {
    ...configArgTypes,
    ['additionalClasses.container']: getAdditionalClassesArgTypes({
      name: 'container',
    }),
    ['additionalClasses.icon']: getAdditionalClassesArgTypes({ name: 'icon' }),
    ['additionalClasses.label']: getAdditionalClassesArgTypes({
      name: 'label',
    }),
    component: getHtmlComponentArgTypes({ name: 'tag' }),
    icon: getIconArgTypes({ isString: true }),
    label: getStringtArgTypes({
      name: 'label',
    }),
    variant: getVariantArgTypes({ name: 'tag', variants: TagVariants }),
  };
};
