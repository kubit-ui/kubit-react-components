import type { Meta } from '@storybook/react';
import React from 'react';

import { Borders as BaseBorders } from '../components';

export const Borders = (): JSX.Element => {
  return <BaseBorders />;
};

const meta: Meta<typeof Borders> = {
  title: 'Styleguide/Borders',
  component: Borders,
  decorators: [
    (): JSX.Element => {
      return <Borders />;
    },
  ],
};

export default meta;
