import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ICONS } from '@/assets';
import { ReplaceContent } from '@/components/storybook/replaceContent/replaceContent';
import { TextComponentType } from '@/components/text';
import { ToggleUnControlled } from '@/components/toggle/toggleUnControlled';
import { STYLES_NAME } from '@/constants';
import { themesObject, variantsObject } from '@/designSystem/themesObject';

import { AccordionUnControlled as AccordionStory } from '../accordionUnControlled';
import { argtypes } from './argtypes';

const themeSelected = localStorage.getItem('themeSelected') || 'kubit';

const meta = {
  title: 'Components/Containment/Accordion',
  component: AccordionStory,
  tags: ['autodocs'],
  argTypes: argtypes(variantsObject, themeSelected),
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/accordion',
    figmaUrl:
      'https://www.figma.com/file/EYQkbENTFO5r8muvXlPoOy/Kubit-v.1.0.0?type=design&node-id=3922-22906',
  },
} satisfies Meta<typeof AccordionStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

export const Accordion: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].AccordionVariantType || {})[0] as string,
    title: { content: 'Title' },
    triggerIcon: { icon: ICONS.ICON_CHEVRON_DOWN, altText: 'Trigger Icon' },
    titleIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Title Icon' },
    children: <ReplaceContent />,
    defaultOpen: false,
    subHeaderContent: 'Hi, i am a subheader content',
    triggerComponent: TextComponentType.H3,
    footerContent: <ReplaceContent />,
    headerRightContent: (
      <ToggleUnControlled
        aria-label="toggle aria label"
        inputValues={{
          rightInputValue: 'on option',
          centerInputValue: 'undeterminated option',
          leftInputValue: 'off option',
          leftIconAltText: 'on option',
        }}
        offIcon={{ icon: ICONS.ICON_CHEVRON_UP }}
        variant="DEFAULT"
        onIcon={{ icon: ICONS.ICON_CHEVRON_DOWN }}
      />
    ),
    themeArgs: themesObject[themeSelected][STYLES_NAME.ACCORDION],
  },
};

export const AccordionWithCtv: Story = {
  args: {
    variant: Object.values(variantsObject[themeSelected].AccordionVariantType || {})[0] as string,
    title: { content: 'Title' },
    triggerIcon: { icon: ICONS.ICON_CHEVRON_DOWN, altText: 'Trigger Icon' },
    titleIcon: { icon: ICONS.ICON_PLACEHOLDER, altText: 'Title Icon' },
    children: <ReplaceContent />,
    defaultOpen: false,
    subHeaderContent: 'Hi, i am a subheader content',
    triggerComponent: TextComponentType.H3,
    footerContent: <ReplaceContent />,
    ctv: {
      title: {
        color: 'red',
      },
    },
  },
};
