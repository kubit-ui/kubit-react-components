import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { RadioButton as Story } from '../components';
import { argtypes } from './radioButton.argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'flamePrivateLightAlt';

const meta = {
  title: 'Components/Forms/RadioButtongroup',
  component: Story,
  argTypes: argtypes(variantsObject, themeSelected),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/radioButtonGroup/components/radioButton',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const RadioButton = {
  args: {
    variant: Object.values(
      variantsObject[themeSelected].RadioButtonGroupVariantType || {}
    )[0] as string,
    label: { content: 'This is a radio button' },
    subTitle: { content: 'This is a subtitle' },
    name: 'name',
    checked: false,
    value: 'value',
    themeArgs: themesObject[themeSelected][STYLES_NAME.RADIO_BUTTON_GROUP],
  },
};
