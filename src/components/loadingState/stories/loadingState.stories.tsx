import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { themesObject, variantsObject } from '@/designSystem/themesObject/themesObject';

import { TextComponentType } from '../../text/types/component';
import { LoadingState as Story } from '../loadingState';
import { ILoadingState } from '../types/loadingState';
import { LoadingStateState } from '../types/loadingStateTheme';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/LoadingState',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/loadingState',
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
