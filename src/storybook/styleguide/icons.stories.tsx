import type { Meta } from '@storybook/react';
import React from 'react';

import { Icons as BaseIcons } from '../components';

export const Icons = (): JSX.Element => {
  return <BaseIcons />;
};

const meta: Meta<typeof Icons> = {
  title: 'Styleguide/Icons',
  component: Icons,
  decorators: [
    (): JSX.Element => {
      return <Icons />;
    },
  ],
};

export default meta;
