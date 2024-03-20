import type { Meta, StoryObj } from '@storybook/react';

import { TextComponentType } from '@/components/text';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { LoadingState as Story } from '../loadingState';
import { ILoadingState, LoadingStateState } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/LoadingState',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs: ILoadingState = {
  variant: Object.values(variantsObject[themeSelected].LoadingStateVariant || {})[0] as string,
  title: { content: 'Loading message', component: TextComponentType.H6 },
  description: { content: 'Just a moment, please...' },
  state: LoadingStateState.PRIMARY,
  ['aria-label']: 'Loading',
};

export const LoadingState: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.LOADING_STATE],
  },
};

export const LoadingStateWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      title: {
        color: 'red',
      },
    },
  },
};
