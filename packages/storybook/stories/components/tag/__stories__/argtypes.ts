import type { ArgTypes } from 'storybook/internal/types';

import { TagVariants } from '@/lib/designSystem/kubit/components/variants';
import { getAdditionalClassesArgTypes } from '@/stories/argtypes/additionalClassesArgTypes';
import { configArgTypes } from '@/stories/argtypes/argtypes';
import { getHtmlComponentArgTypes } from '@/stories/argtypes/htmlComponentArgTypes';
import { getIconArgTypes } from '@/stories/argtypes/iconArgTypes';
import { getStringtArgTypes } from '@/stories/argtypes/stringArgTypes';
import { getVariantArgTypes } from '@/stories/argtypes/variantArgtypes';

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
