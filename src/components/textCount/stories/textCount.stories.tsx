import type { Meta, StoryObj } from '@storybook/react';

import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { TextCount as Story } from '../textCount';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/TextCount',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/textCount',
  },
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const TextCount: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TextCountVariantType || {})[0] as string,
    maxLength: 2,
    currentCharacters: 1,
    textVariant: Object.values(variantsObject[themeSelected].TextVariantType || {})[0] as string,
    id: 'textCount',
    screenReaderText: 'screenReaderText',
    themeArgs: themesObject[themeSelected][STYLES_NAME.TEXT_COUNT],
  },
};

export const TextCountWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].TextCountVariantType || {})[0] as string,
    maxLength: 2,
    currentCharacters: 1,
    textVariant: Object.values(variantsObject[themeSelected].TextVariantType || {})[0] as string,
    id: 'textCount',
    screenReaderText: 'screenReaderText',
    ctv: {
      wrapper: {
        background_color: 'pink',
      },
    },
  },
};
