import type { Meta, StoryObj } from '@storybook/react-vite';

import { ReplaceContent } from '../../../lib/storybook/components/replaceContent/replaceContent';
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
    <ReplaceContent>
      This is the card content area where you can add any content
    </ReplaceContent>
  ),
  footer: (
    <ReplaceContent height="100px" iconHeight={20}>
      Card footer information
    </ReplaceContent>
  ),
  header: (
    <ReplaceContent height="100px" iconHeight={20}>
      Card Title
    </ReplaceContent>
  ),
  variant: 'DEFAULT',
};

export const Card: Story = {
  args: {
    ...commonArgs,
  },
};
