import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS, ILLUSTRATIONS } from '@/assets';
import { DecorativeType } from '@/components/decorativeElement/types';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { FooterPositionType } from '@/components/footer';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { TextComponentType } from '@/components/text';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { ConfirmationMessage as Story } from '../confirmationMessage';
import { IConfirmationMessage } from '../types';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Feedback/ConfirmationMessage',
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const decorativeIcon: IElementOrIcon = {
  icon: ICONS.ICON_PLACEHOLDER,
  altText: 'icon alt text',
};

const decorativeIllustration = {
  illustration: ILLUSTRATIONS.ILLUSTRATION,
  altText: 'illustration alt text',
};

const commonArgs: IConfirmationMessage = {
  variant: Object.values(
    variantsObject[themeSelected].ConfirmationMessageVariantType || {}
  )[0] as string,
  content: <ReplaceContent>Replace your content</ReplaceContent>,
  description: { content: <ReplaceContent>Replace your description</ReplaceContent> },
  decorativeElement: {
    element: {
      // [DecorativeType.ICON]: decorativeIcon,
      [DecorativeType.ILLUSTRATION]: decorativeIllustration,
    },
  },
  title: {
    content: 'Title',
    component: TextComponentType.H2,
  },
  footer: {
    content: [
      <ReplaceContent key={0} data-position={FooterPositionType.LEFT} />,
      <ReplaceContent key={2} data-position={FooterPositionType.RIGHT} />,
    ],
  },
};

export const ConfirmationMessage: Story = {
  args: {
    ...commonArgs,
    themeArgs: themesObject[themeSelected][STYLES_NAME.CONFIRMATION_MESSAGE],
  },
};

export const ConfirmationMessageWithCtv: Story = {
  args: {
    ...commonArgs,
    ctv: {
      WARNING: {
        title: {
          color: 'yellow',
        },
      },
      SUCCESS: {
        title: {
          color: 'green',
        },
      },
      ERROR: {
        title: {
          color: 'red',
        },
      },
    },
  },
};
