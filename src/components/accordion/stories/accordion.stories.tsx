import type { Meta, StoryObj } from '@storybook/react-vite';

import { AccordionVariant } from '@/lib/designSystem/kubit/components/accordion/variants';

import { Accordion as AccordionStory } from '../accordionUnControlled';
import { argtypes } from './argtypes';

const meta = {
  argTypes: argtypes(),
  component: AccordionStory,
  render: ({ ...args }) => {
    return <AccordionStory {...args} />;
  },
  tags: ['autodocs', 'containment'],
  title: 'Components/Containment/Accordion',
} satisfies Meta<typeof AccordionStory>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  children: 'Replace here your Content',
  dataTestId: 'accordion',
  defaultExpanded: false,
  header: 'Accordion Header',
  variant: AccordionVariant.NEUTRAL,
};

export const Accordion: Story = {
  args: {
    ...commonArgs,
  },
};

export const AccordionWithAdditionalClasses: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      accordion: 'custom-background',
      content: 'custom-padding',
      header: 'custom-border',
      headerbutton: 'custom-text-color',
      innercontent: 'custom-border-radius',
    },
  },
};

export const AccordionExpanded: Story = {
  args: {
    ...commonArgs,
    defaultExpanded: true,
    header: 'Expanded Accordion',
  },
};

export const AccordionStandardVariant: Story = {
  args: {
    ...commonArgs,
    header: 'Standard Variant Accordion',
    variant: AccordionVariant.STANDARD,
  },
};
