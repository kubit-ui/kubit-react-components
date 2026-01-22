import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextVariantType } from '@/lib/designSystem/kubit/components/text/variants';
import { TextCountVariantType } from '@/lib/designSystem/kubit/components/textCount/variants';

import { TextCount as Story } from '../textCount';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/textCount',
  },
  tags: ['autodocs'],
  title: 'Components/Forms/TextCount',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  currentCharacters: 1,
  id: 'textCount',
  maxLength: 2,
  screenReaderText: 'screenReaderText',
  textVariant: TextVariantType.DEFAULT,
  variant: TextCountVariantType.DEFAULT,
};

export const TextCount: Story = {
  args: {
    ...commonArgs,
  },
};
