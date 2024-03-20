import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { MessageUnControlled as Story } from '../messageUnControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Feedback/Message',
  component: Story,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Message: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].MessageVariantType || {})[0] as string,
    content: {
      content: (
        <ReplaceContent width="100%">
          <p>lorem ipsum</p>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum
          </p>
        </ReplaceContent>
      ),
    },
    title: { content: 'Title' },
    themeArgs: themesObject[themeSelected][STYLES_NAME.MESSAGE],
  },
};

export const MessageWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].MessageVariantType || {})[0] as string,
    content: {
      content: (
        <ReplaceContent width="100%">
          <p>lorem ipsum</p>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum
          </p>
        </ReplaceContent>
      ),
    },
    title: { content: 'Title' },
    ctv: {
      container: {
        background_color: 'pink',
      },
    },
  },
};
