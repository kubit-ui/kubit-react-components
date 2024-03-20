import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { STYLES_NAME } from '@/constants';
import { themesObject } from '@/designSystem/themesObject';

import { InputStructure as Story } from '../inputStructure';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Forms/InputStructure',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const InputStructure: Story = {
  args: {
    leftContent: <ReplaceContent>Left content</ReplaceContent>,
    topContent: <ReplaceContent>Top content</ReplaceContent>,
    rightContent: <ReplaceContent>Right content</ReplaceContent>,
    bottomContent: <ReplaceContent>Bottom content</ReplaceContent>,
    centerContent: <ReplaceContent>Center content</ReplaceContent>,
    themeArgs: themesObject[themeSelected][STYLES_NAME.INPUT_STRUCTURE],
  },
};
