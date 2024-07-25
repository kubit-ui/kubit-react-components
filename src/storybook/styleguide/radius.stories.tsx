import type { Meta } from '@storybook/react';
import React from 'react';

import { Radius as BaseBorders } from '../components';

export const Radius = (): JSX.Element => {
  return <BaseBorders />;
};

const meta: Meta<typeof Radius> = {
  title: 'Styleguide/Radius',
  component: Radius,
  decorators: [
    (): JSX.Element => {
      return <Radius />;
    },
  ],
};

export default meta;
