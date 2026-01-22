import type { ReactNode } from 'react';

import type { TextProps } from '@/components/text/types/text';

export type CommonTextProps =
  | (Omit<TextProps, 'children'> & {
      content?: ReactNode;
    })
  | string
  | ReactNode;
