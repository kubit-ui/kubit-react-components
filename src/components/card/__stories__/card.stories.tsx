import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card as CardStory } from '../card';
import { argtypes } from './argtypes';

const meta: Meta<typeof CardStory> = {
  argTypes: argtypes(),
  component: CardStory,
  tags: ['autodocs', 'containment'],
  title: 'Components/Containment/Card',
};

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  content: (
    <replace-content>
      This is the card content area where you can add any content
    </replace-content>
  ),
  footer: <replace-content>Card footer information</replace-content>,
  header: <replace-content>Card Title</replace-content>,
  variant: 'DEFAULT',
};

export const Card: Story = {
  args: {
    ...commonArgs,
  },
};
