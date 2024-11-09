import type { Meta } from '@storybook/react';
import React from 'react';

import { Shadows as BaseShadows } from '../components/shadows/shadows';

export const Shadows = (): JSX.Element => {
  return <BaseShadows />;
};

const meta: Meta<typeof Shadows> = {
  title: 'Styleguide/Shadows',
  component: Shadows,
  decorators: [
    (): JSX.Element => {
      return <Shadows />;
    },
  ],
};

export default meta;
