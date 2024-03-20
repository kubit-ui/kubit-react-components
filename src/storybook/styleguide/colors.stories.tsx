import type { Meta } from '@storybook/react';
import React from 'react';

import { Colors as BaseColors } from '../components';

export const Colors = (): JSX.Element => {
  return <BaseColors />;
};

const meta: Meta<typeof Colors> = {
  title: 'Styleguide/Colors',
  component: Colors,
  decorators: [
    (): JSX.Element => {
      return <Colors />;
    },
  ],
};

export default meta;
