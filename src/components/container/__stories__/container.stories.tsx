import type { Meta, StoryObj } from '@storybook/react-vite';

import { ReplaceContent } from '../../../lib/storybook/components/replaceContent/replaceContent';
import { Container as ContainerStory } from '../container';
import { argtypes } from './argtypes';

const meta: Meta<typeof ContainerStory> = {
  argTypes: argtypes(),
  component: ContainerStory,
  tags: ['autodocs', 'containment'],
  title: 'Components/Containment/Container',
};

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const commonArgs = {
  children: <ReplaceContent>Replace here your Content</ReplaceContent>,
  title: "I'm a container",
  variant: 'DEFAULT',
};

export const Container: Story = {
  args: {
    ...commonArgs,
  },
};

export const ContainerWithAdditionalClasses: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      container: 'custom-background',
    },
  },
};
