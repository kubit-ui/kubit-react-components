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
  parameters: {
    layout: 'centered',
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/message',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-25699&mode=dev',
  },
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
    link: { content: 'Link', variant: 'SECONDARY', url: '#' },
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
