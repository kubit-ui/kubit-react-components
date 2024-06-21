import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { InputSignatureUnControlled as Story } from '../inputSignatureUncontrolled';
import { argtypes } from './argTypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/InputSignature',
  component: Story,
  parameters: {
    layout: 'centered',
    githubUrl: 'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/icon',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const InputSignature: Story = {
  args: {
    placeholder: { content: 'Sign here' },
    errorText: { content: 'Invalid signature' },
    variant: 'DEFAULT',
    themeArgs: themesObject[themeSelected][STYLES_NAME.INPUT_SIGNATURE],
  },
};
